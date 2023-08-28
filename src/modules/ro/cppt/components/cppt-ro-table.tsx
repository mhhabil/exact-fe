import { Button, Col, Input, Label, Modal, ModalBody, ModalHeader, Row, Table } from 'reactstrap';
import { CpptModel } from '@modules/ro/cppt/models/cppt-ro.model';
import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { useAppSelector } from '@hooks/useAppSelector';
import {fetchCpptRo, fetchCpptRoDayPdf, fetchCpptRoItem, fetchCpptRoPdf, handleCpptItem, handlePdf, handlePdfAll} from '@modules/ro/cppt/stores/cppt-ro.store';
import { FindPdfRequest } from '@shared/pdf';
import { useAppDispatch } from '@hooks/useAppDispatch';
import AES from 'crypto-js/aes';
import getConfig from 'next/config';
import { ArrowDown, ArrowUp, Check, Copy, Edit, Eye, Trash } from 'react-feather';
import CpptRoDetail from '@modules/ro/cppt/components/cppt-ro-detail';
import DeleteModal from '@shared/modal/components/DeleteModal';
import { AppRequest } from '@shared/request';
import { CpptRoService } from '@modules/ro/cppt/services';
import CpptRoForm from '@modules/ro/cppt/components/cppt-ro-form';
import CpptNutritionDetail from '@src/modules/nutrition/cppt/components/cppt-nutrition-detail';
import {fetchPreliminaryStudy} from '@modules/ro/preliminary-study/stores/preliminary-study.store';
import PreliminaryStudyDetail from '@modules/ro/preliminary-study/components/preliminary-study-detail';
import CreateCpptRo from '@src/pages/ro/cppt/create';
import { DataO } from '@src/shared/template';
import unit from '@src/modules/outpatient/cppt/const/unit';
import { CPPTPDFRequest, RootPDFRequest } from '@src/shared/request/requests/cppt-pdf.request';
import CpptOkDetail from '@src/modules/operating-room/cppt/components/cppt-ok-detail';
import CpptOutPatientDetail from '@src/modules/outpatient/cppt/components/cppt-out-patient-detail';
import CpptPharmacyDetail from '@src/modules/pharmacy/cppt/components/cppt-pharmacy-detail';
import { IPrescription } from '@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model';
import { handleFontSize } from '@src/shared/font-size/stores/font-size.store';
import fontSizes from '@modules/outpatient/cppt/const/font-size';
import { fetchDoctorPreliminaryStudy } from '@src/modules/outpatient/doctor-preliminary-study/stores/doctor-preliminary-study.store';
import { DateTimeConverter } from '@src/shared/datetime-converter';
import CpptEmergencyRoomDetail from '@src/modules/emergency-room/cppt/components/cppt-emergency-room-detail';

const CpptRoTable = (props: { data: CpptModel }) => {

  const { data } = props;

  const { treatment } = useAppSelector(state => state.patient);
  const { userData } = useAppSelector(state => state.auth);
  const { fontSize } = useAppSelector(state => state.fontSize);
  const { pdfAll, pdf } = useAppSelector(state => state.cpptRo);
  const { doctorPreliminaryStudy } = useAppSelector(state => state.doctorPreliminaryStudy);
  const { companyCode } = useAppSelector(state => state.selectCompany);
  const [pdfData, setPdfData] = useState<any>(undefined);
  const [pdfDayData, setPdfDayData] = useState<any>(undefined);
  const dispatch = useAppDispatch();
  const { publicRuntimeConfig } = getConfig();

  const { preliminaryStudy } = useAppSelector(state => state.preliminaryStudy);

  const [detailRow, setDetailRow] = useState<any>();
  const [deleteRow, setDeleteRow] = useState<any>();
  const [editRow, setEditRow] = useState<any>();
  const [validateRow, setValidateRow] = useState<any>();
  const [copyRow, setCopyRow] = useState<any>();
  const [showCreateForm, setShowCreateForm] = useState<any>();
  const [sort, setSort] = useState<string>('DESC');

  useEffect(() => {
    if (treatment) {
      dispatch(fetchCpptRoPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'cppt_v3' })));
      dispatch(fetchCpptRoDayPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'cppt_day_v3' })));
      dispatch(fetchPreliminaryStudy(AppRequest.createFromStore(treatment)));
      dispatch(fetchDoctorPreliminaryStudy(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdfAll) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdfAll);
  }, [pdfAll])

  useEffect(() => {
    if (!pdf) {
      setPdfDayData(undefined);
      return;
    }
    setPdfDayData(pdf);
  }, [pdf])

  useEffect(() => {
    if (showCreateForm) {
      if (editRow) {
        setEditRow(false);
      }
      if (copyRow) {
        setCopyRow(false);
      }
    }
  }, [showCreateForm])

  useEffect(() => {
    if (editRow) {
      if (showCreateForm) {
        setShowCreateForm(false);
      }
      if (copyRow) {
        setCopyRow(false);
      }
    }
  }, [editRow])

  useEffect(() => {
    if (copyRow) {
      if (showCreateForm) {
        setShowCreateForm(false);
      }
      if (editRow) {
        setEditRow(false);
      }
    }
  }, [copyRow])

  const handleDeleteRow = (row: any) => {
    if (!treatment) {
      return;
    }
    let params: any = AppRequest.createFromStore(treatment);
    params = {...params, item_id: row.ID, emr_id: row.EMR_ID};
    CpptRoService().delete(params).then(() => {
      const appRequest = AppRequest.createFromStore(treatment);
      dispatch(fetchCpptRo({ ...appRequest, sort }));
      setDeleteRow(undefined);
      dispatch(handlePdfAll(undefined));
      if (row.EMR_ID === treatment.EMR_ID) {
        dispatch(handlePdf(undefined));
        CpptRoService().showDay({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
          const { records } = resp.data.data;
          const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
          const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'day');
          CpptRoService().pdfNew(pdfParams).then(() => {
            dispatch(fetchCpptRoDayPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'cppt_day_v3' })))
          }).catch((err) => {
            console.log(err)
          })
        })
      }
      CpptRoService().show({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
        const { records } = resp.data.data;
        const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
        const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
        CpptRoService().pdfNew(pdfParams).then(() => {
          dispatch(fetchCpptRoPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'cppt_v3' })));
        }).catch((err) => {
          console.log(err);
        });
      });
    });
  }
  const handleSort = (sortDir: string) => {
    if (!treatment) {
      return;
    }
    const appRequest = AppRequest.createFromStore(treatment);
    dispatch(fetchCpptRo({ ...appRequest, sort: sortDir }))
    setSort(sortDir);
  }

  const getUnitName = (u: string) => {
    const selectedUnit = unit.find((val: any) => val.id === u);
    if (selectedUnit) {
      return selectedUnit.name;
    } else {
      return '';
    }
  }

  const handleChangeFontSize = (e: any) => {
    dispatch(handleFontSize(e.target.value));
  }

  return (
    <Fragment>
      <Row id="form">
        <Col md={12}>
          {
            showCreateForm && preliminaryStudy && (
              <CpptRoForm preliminaryStudy={preliminaryStudy} action='create' onSuccessSubmit={() => {
                setShowCreateForm(false);
                window?.scrollTo({ top: 0, behavior: 'smooth' });
                if (treatment) {
                  const appRequest = AppRequest.createFromStore(treatment);
                  dispatch(fetchCpptRo({ ...appRequest, sort }));
                }
              }} onCancel={() => {
                setShowCreateForm(false);
                window?.scrollTo({ top: 0, behavior: 'smooth' });
              }} />
            )
          }
          {
            data && data.records && Array.isArray(data.records) && (
              data.records.map((row, key) => {
                return (
                  <Fragment key={key}>
                    {
                      editRow && editRow.ID === row.ID && preliminaryStudy && (
                        <CpptRoForm key={key} preliminaryStudy={preliminaryStudy} dataOJson={{ form: editRow.Data_O_Json }} cpptRo={editRow} onSuccessSubmit={() => {
                          setEditRow(undefined);
                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                          if (treatment) {
                            const appRequest = AppRequest.createFromStore(treatment);
                            dispatch(fetchCpptRo({ ...appRequest, sort }));
                          }
                        }} onCancel={() => {
                          setEditRow(undefined);
                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                        }}/>
                      )
                    }
                    {
                      userData && userData.isDokter && copyRow && copyRow.ID === row.ID && preliminaryStudy && (
                        <CpptRoForm key={key} preliminaryStudy={preliminaryStudy} cpptRo={copyRow} onSuccessSubmit={() => {
                          setCopyRow(undefined);
                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                          if (treatment) {
                            const appRequest = AppRequest.createFromStore(treatment);
                            dispatch(fetchCpptRo({ ...appRequest, sort }));
                          }
                        }} onCancel={() => {
                          setCopyRow(undefined);
                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                        }} action="create"/>
                      )
                    }
                  </Fragment>
                )
              })
            )
          }
        </Col>
      </Row>
      <Row className="mb-2">
        <Col md="12">
          <div className='d-flex justify-content-end align-items-center mb-2'>
            <Label className='me-2'>Font Size</Label>
            <Input
              type='select'
              name='font-size'
              defaultValue={fontSize ?? 'font-11'}
              style={{ width: '100px' }}
              onChange={(e) => handleChangeFontSize(e)}
            >
              {
                fontSizes.map((item: any, key: number) => (
                  <option key={key} value={item.css}>{item.label}</option>
                ))
              }
            </Input>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              {
                pdfData && Array.isArray(pdfData) && pdfData.length > 0 ? (
                  <a color='success' href={`${pdfData[0].URL}`} target="_blank" rel="noreferrer">
                    <Button className='me-1' color='success' type='button'>
                          Cetak All
                    </Button>
                  </a>
                ) : (
                  <Button className='me-1' color='success' type='button' disabled>
                        Cetak All
                  </Button>
                )
              }
              {
                pdfDayData && Array.isArray(pdfDayData) && pdfDayData.length > 0 ? (
                  <a color='primary' href={`${pdfDayData[0].URL}`} target="_blank" rel="noreferrer">
                    <Button className='me-1' color='primary' type='button'>
                          Cetak
                    </Button>
                  </a>
                ) : (
                  <Button className='me-1' color='primary' type='button' disabled>
                        Cetak
                  </Button>
                )
              }
            </div>
            <div>
              <Button color="secondary" type="button" onClick={() => {
                setShowCreateForm(true);
                window?.scrollTo({ top: 0, behavior: 'smooth' });
              }}>Input Data Baru</Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <Table responsive className={`table-cppt ${fontSize ?? 'font-11'}`} bordered>
            <thead>
              <tr className="fw-bolder text-center">
                <td>Aksi</td>
                <td>
                  <div className='d-flex'>
                    Waktu
                    {
                      sort && sort === 'DESC' && (
                        <a className='ms-2' onClick={() => handleSort('ASC')}>
                          <ArrowDown size={14} color='black'/>
                        </a>
                      )
                    }
                    {
                      sort && sort === 'ASC' && (
                        <a className='ms-2' onClick={() => handleSort('DESC')}>
                          <ArrowUp size={14} color='black'/>
                        </a>
                      )
                    }
                  </div>
                </td>
                <td>Subjektif</td>
                <td>Objective</td>
                <td>Assesment</td>
                <td>Plan</td>
                <td>Instruksi PPA</td>
              </tr>
            </thead>
            <tbody>
              {
                data && data.records && Array.isArray(data.records) && (
                  data.records.map((row, key) => {
                    return (
                      <tr key={key}>
                        <td className="p-0 text-center justify-content-center">
                          <div className="p-0">
                            {
                              row && !row.Validated_At && (
                                <Fragment>
                                  <div className="d-flex justify-content-center">
                                    <Button className="btn-icon rounded btn-sm btn-action-cppt" color="info" type="button" onClick={() => setDetailRow(row)} >
                                      <Eye size={16} />
                                    </Button>
                                    {
                                      userData && userData.isDokter && (
                                        <Button className="btn-icon rounded btn-sm btn-action-cppt" color="success" type="button" onClick={() => setValidateRow(row)} >
                                          <Check size={16} />
                                        </Button>
                                      )
                                    }
                                  </div>
                                  {
                                    userData && userData.isDokter && !copyRow && (
                                      <div className="d-flex justify-content-center">
                                        <Button className="btn-icon rounded btn-sm btn-action-cppt" color="primary" type="button" onClick={() => {
                                          setCopyRow(row)
                                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                                          setEditRow(undefined);
                                        }} >
                                          <Copy size={16} />
                                        </Button>
                                      </div>
                                    )
                                  }
                                  {
                                    userData && userData.isDokter && copyRow && (
                                      <div className="d-flex justify-content-center">
                                        <Button disabled className="btn-icon rounded btn-sm btn-action-cppt" color="primary" type="button" onClick={() => {
                                          setCopyRow(row)
                                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                                          setEditRow(undefined);
                                        }} >
                                          <Copy size={16} />
                                        </Button>
                                      </div>
                                    )
                                  }
                                  {
                                    row && row.Unit === 'RO' && (
                                      <Fragment>
                                        <div className="d-flex justify-content-center">
                                          <Button className="btn-icon rounded btn-sm btn-action-cppt" color="warning" type="button" onClick={() => {
                                            setEditRow(row);
                                            window?.scrollTo({ top: 0, behavior: 'smooth' });
                                          }} >
                                            <Edit size={16} />
                                          </Button>
                                          <Button className="btn-icon rounded btn-sm btn-action-cppt" color="danger" type="button" onClick={() => setDeleteRow(row)} >
                                            <Trash size={16} />
                                          </Button>
                                        </div>
                                      </Fragment>
                                    )
                                  }
                                </Fragment>
                              )
                            }
                            {
                              row && row.Validated_At && (
                                <Fragment>
                                  <div className="d-flex justify-content-center">
                                    <Button className="btn-icon rounded btn-sm btn-action-cppt" color="info" type="button" onClick={() => setDetailRow(row)} >
                                      <Eye size={16} />
                                    </Button>
                                    {
                                      userData && userData.isDokter && !copyRow && (
                                        <Button className="btn-icon rounded btn-sm btn-action-cppt" color="primary" type="button" onClick={() => {
                                          setCopyRow(row)
                                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                                        }} >
                                          <Copy size={16} />
                                        </Button>
                                      )
                                    }
                                    {
                                      userData && userData.isDokter && copyRow && (
                                        <Button disabled className="btn-icon rounded btn-sm btn-action-cppt" color="primary" type="button" onClick={() => {
                                          setCopyRow(row)
                                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                                        }} >
                                          <Copy size={16} />
                                        </Button>
                                      )
                                    }
                                  </div>
                                </Fragment>
                              )
                            }
                          </div>
                        </td>
                        <td className={`prevent-select p-0`}><pre className="bg-white p-0">{ `${DateTimeConverter.convertToDateTime(row.Waktu)}\n${row.Nama_Petugas}\n${getUnitName(row.Unit)}` }</pre></td>
                        <td className={`prevent-select p-0`} style={{ wordWrap: 'break-word', width: '20%' }}>{ (row.Data_S && row.Data_S === 'Lain-lain') ? row.Data_S_Lain_Text : row.Data_S }</td>
                        <td className={`prevent-select p-0`}>
                          <DataO cpptData={row}/>
                        </td>
                        <td className={`prevent-select p-0`}>
                          {
                            row && row.Unit && row.Unit === 'Farmasi' ?  <pre className="p-0 bg-white">{`${row.Masalah_Obat_Teks && row.Masalah_Obat_Teks !== '' ? `Masalah Terkait Obat : ${row.Masalah_Obat_Teks}\n` : '\n'}${row.Efek_Samping_Obat && row.Efek_Samping_Obat !== '' ? `Efek Samping Obat : ${row.Efek_Samping_Obat}\n` : '\n'}${row.Interaksi_Obat && row.Interaksi_Obat !== '' ? `Interaksi Obat : ${row.Interaksi_Obat}\n` : '\n'}`}</pre> : (row.Data_A && row.Data_A === 'Lain-lain') ? row.Data_A_Lain_Text : <pre>{row.Data_A}</pre>
                          }
                        </td>
                        <td className={`prevent-select p-0`}>
                          {
                            row && row.Unit && row.Unit === 'Farmasi' ? <pre className="p-0 bg-white">{`${row.Monitor_Terapi && row.Monitor_Terapi !== '' ? `Monitor Terapi : ${row.Monitor_Terapi && row.Monitor_Terapi}\n` : '\n'}${row.Monitor_Efek_Samping && row.Monitor_Efek_Samping !== '' ? `Monitor Efek Samping : ${row.Monitor_Efek_Samping && row.Monitor_Efek_Samping}\n` : '\n'}`}</pre> : (row.Data_P && row.Data_P === 'Lain-lain') ? row.Data_P_Lain_Text : row.Data_P
                          }
                          <pre className="p-0 bg-white">{row.Anjuran ? `Anjuran: ${row.Anjuran}\n` : ''}</pre>
                          {
                            row.Resep && Array.isArray(row.Resep) && row.Resep.map((val: IPrescription, key: number) => (
                              <pre key={key} className='p-0 bg-white'>{`${val.Nama_Obat} - ${val.Kode_AturanPakai}\n`}</pre>
                            ))
                          }
                        </td>
                        <td className={`prevent-select p-0`}>
                          {
                            row && row.Unit && row.Unit === 'Farmasi' ? <pre className="p-0 bg-white">{`${row.Anjuran_Dokter && row.Anjuran_Dokter !== '' ? `Anjuran Untuk Dokter : ${row.Anjuran_Dokter && row.Anjuran_Dokter}\n` : '\n' }${row.Anjuran_Perawat && row.Anjuran_Perawat !== '' ? `Anjuran Untuk Perawat : ${row.Anjuran_Perawat}\n` : '\n'}`}</pre> : row.Instruksi_PPA
                          }
                        </td>
                      </tr>
                    )
                  })
                )
              }
            </tbody>
          </Table>
        </Col>
      </Row>

      <Modal isOpen={!!detailRow} size="xl">
        <ModalHeader toggle={() => setDetailRow(undefined)}>Lihat Data</ModalHeader>
        <ModalBody>
          {
            detailRow && detailRow.Unit && detailRow.Unit === 'RO' && (
              <CpptRoDetail ro={detailRow} />
            )
          }
          {
            detailRow && detailRow.Unit && detailRow.Unit === 'OK' && doctorPreliminaryStudy && (
              <CpptOkDetail cpptOk={detailRow} doctorPreliminaryStudy={doctorPreliminaryStudy}/>
            )
          }
          {
            detailRow && detailRow.Unit && detailRow.Unit === 'RawatJalan' && doctorPreliminaryStudy && (
              <CpptOutPatientDetail cpptRajal={detailRow} doctorPreliminaryStudy={doctorPreliminaryStudy}/>
            )
          }
          {
            detailRow && detailRow.Unit && detailRow.Unit === 'Farmasi' && (
              <CpptPharmacyDetail cpptFarmasi={detailRow} />
            )
          }
          {
            detailRow && detailRow.Unit && detailRow.Unit === 'Gizi' && (
              <CpptNutritionDetail cpptGizi={detailRow} />
            )
          }
          {
            detailRow && detailRow.Unit && detailRow.Unit === 'UGD' && doctorPreliminaryStudy && (
              <CpptEmergencyRoomDetail cpptUgd={detailRow} doctorPreliminaryStudy={doctorPreliminaryStudy} />
            )
          }
        </ModalBody>
      </Modal>

      <Modal isOpen={!!validateRow} size="xl">
        <ModalHeader toggle={() => setValidateRow(undefined)}>Validasi Data</ModalHeader>
        <ModalBody>
          <CpptRoDetail ro={validateRow} validate onSuccessValidate={() => {
            setValidateRow(undefined);
            if (treatment) {
              const appRequest = AppRequest.createFromStore(treatment);
              dispatch(fetchCpptRo({ ...appRequest, sort }));
            }
          }} />
        </ModalBody>
      </Modal>

      <DeleteModal
        isShow={(!!deleteRow)}
        setIsShow={() => setDeleteRow(undefined)}
        onDeleteClick={() => handleDeleteRow(deleteRow)} />
    </Fragment>
  );
}

export default CpptRoTable;
