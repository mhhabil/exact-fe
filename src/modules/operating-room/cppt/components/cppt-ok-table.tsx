import { Button, Col, Input, Label, Modal, ModalBody, ModalHeader, Row, Table } from 'reactstrap';
import { CpptModel } from '@modules/ro/cppt/models/cppt-ro.model';
import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { useAppSelector } from '@hooks/useAppSelector';
import { FindPdfRequest } from '@shared/pdf';
import { useAppDispatch } from '@hooks/useAppDispatch';
import getConfig from 'next/config';
import { ArrowDown, ArrowUp, Check, Copy, Edit, Eye, Trash } from 'react-feather';
import { AppRequest } from '@shared/request';
import {
  fetchCpptOk,
  fetchCpptOkDayPdf,
  fetchCpptOkItem,
  fetchCpptOkPdf,
  handleAutoRefresh,
  handleCpptItem,
  handlePdf,
  handlePdfAll,
} from '@modules/operating-room/cppt/stores/cppt-ok.store';
import DeleteModal from '@shared/modal/components/DeleteModal';
import CpptOkDetail from '@modules/operating-room/cppt/components/cppt-ok-detail';
import CpptOkForm from '@modules/operating-room/cppt/components/cppt-ok-form';
import {CpptOkService} from '@modules/operating-room/cppt/services';
import CpptOutPatientForm from '@modules/outpatient/cppt/components/cppt-out-patient-form';
import {fetchCpptOutPatient} from '@modules/outpatient/cppt/stores/cppt-out-patient.store';
import CpptOutPatientFormNurse from '@modules/outpatient/cppt/components/cppt-out-patient-form-nurse';
import {fetchDoctorPreliminaryStudy} from '@modules/outpatient/doctor-preliminary-study/stores/doctor-preliminary-study.store';
import CpptOkFormNurse from './cppt-ok-form-nurse';
import PreliminaryStudyDetail from '@modules/ro/preliminary-study/components/preliminary-study-detail';
import { DataO } from '@src/shared/template';
import unit from '@src/modules/outpatient/cppt/const/unit';
import { IPrescription } from '@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model';
import { CPPTPDFRequest, RootPDFRequest } from '@src/shared/request/requests/cppt-pdf.request';
import CpptPharmacyDetail from '@src/modules/pharmacy/cppt/components/cppt-pharmacy-detail';
import CpptOutPatientDetail from '@src/modules/outpatient/cppt/components/cppt-out-patient-detail';
import CpptRoDetail from '@src/modules/ro/cppt/components/cppt-ro-detail';
import { handleFontSize } from '@src/shared/font-size/stores/font-size.store';
import fontSizes from '@modules/outpatient/cppt/const/font-size';
import CpptNutritionDetail from '@src/modules/nutrition/cppt/components/cppt-nutrition-detail';
import { DateTimeConverter } from '@src/shared/datetime-converter';
import CpptEmergencyRoomDetail from '@src/modules/emergency-room/cppt/components/cppt-emergency-room-detail';

const CpptOkTable = (props: { data: CpptModel }) => {

  const { data } = props;

  const { treatment } = useAppSelector(state => state.patient);
  const { userData } = useAppSelector(state => state.auth);
  const { fontSize } = useAppSelector(state => state.fontSize);
  const { pdf, pdfAll, autoRefresh } = useAppSelector(state => state.cpptOk);
  const { doctorPreliminaryStudy } = useAppSelector(state => state.doctorPreliminaryStudy);
  const { companyCode } = useAppSelector(state => state.selectCompany)
  const [pdfData, setPdfData] = useState<any>(undefined);
  const [pdfDayData, setPdfDayData] = useState<any>(undefined);
  const dispatch = useAppDispatch();
  const { publicRuntimeConfig } = getConfig();

  const [detailRow, setDetailRow] = useState<any>();
  const [deleteRow, setDeleteRow] = useState<any>();
  const [editRowDoctor, setEditRowDoctor] = useState<any>();
  const [editRowNurse, setEditRowNurse] = useState<any>();
  const [validateRow, setValidateRow] = useState<any>();
  const [showCreateFormDoctor, setShowCreateFormDoctor] = useState<any>();
  const [showCreateFormNurse, setShowCreateFormNurse] = useState<any>();
  const [copyRowDoctor, setCopyRowDoctor] = useState<any>();
  const [sort, setSort] = useState<string>('DESC');

  useEffect(() => {
    if (treatment) {
      dispatch(fetchCpptOkPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'cppt_v3' })));
      dispatch(fetchCpptOkDayPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'cppt_day_v3' })));
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
    if (autoRefresh) {
      setEditRowDoctor(undefined)
      setShowCreateFormDoctor(undefined);
      dispatch(handleAutoRefresh(false))
    }
  }, [autoRefresh])

  useEffect(() => {
    if (showCreateFormDoctor) {
      if (showCreateFormNurse) {
        setShowCreateFormNurse(false);
      }
      if (editRowDoctor) {
        setEditRowDoctor(false);
      }
      if (editRowNurse) {
        setEditRowNurse(false);
      }
      if (copyRowDoctor) {
        setCopyRowDoctor(false);
      }
    }
  }, [showCreateFormDoctor]);

  useEffect(() => {
    if (showCreateFormNurse) {
      if (showCreateFormDoctor) {
        setShowCreateFormDoctor(false);
      }
      if (editRowDoctor) {
        setEditRowDoctor(false);
      }
      if (editRowNurse) {
        setEditRowNurse(false);
      }
      if (copyRowDoctor) {
        setCopyRowDoctor(false);
      }
    }
  }, [showCreateFormNurse]);

  useEffect(() => {
    if (editRowDoctor) {
      if (showCreateFormDoctor) {
        setShowCreateFormDoctor(false);
      }
      if (showCreateFormNurse) {
        setShowCreateFormNurse(false);
      }
      if (editRowNurse) {
        setEditRowNurse(false);
      }
      if (copyRowDoctor) {
        setCopyRowDoctor(false);
      }
    }
  }, [editRowDoctor]);

  useEffect(() => {
    if (editRowNurse) {
      if (showCreateFormDoctor) {
        setShowCreateFormDoctor(false);
      }
      if (showCreateFormNurse) {
        setShowCreateFormNurse(false);
      }
      if (editRowDoctor) {
        setEditRowDoctor(false);
      }
      if (copyRowDoctor) {
        setCopyRowDoctor(false);
      }
    }
  }, [editRowNurse]);

  useEffect(() => {
    if (copyRowDoctor) {
      if (showCreateFormDoctor) {
        setShowCreateFormDoctor(false);
      }
      if (showCreateFormNurse) {
        setShowCreateFormNurse(false);
      }
      if (editRowDoctor) {
        setEditRowDoctor(false);
      }
      if (editRowNurse) {
        setEditRowNurse(false);
      }
    }
  }, [copyRowDoctor]);

  const handleDeleteRow = (row: any) => {
    if (!treatment) {
      return;
    }
    let params: any = AppRequest.createFromStore(treatment);
    params = {...params, item_id: row.ID, emr_id: row.EMR_ID};
    CpptOkService().delete(params).then(() => {
      const appRequest = AppRequest.createFromStore(treatment);
      dispatch(fetchCpptOk({ ...appRequest, sort }));
      setDeleteRow(undefined);
      dispatch(handlePdfAll(undefined));
      if (row.EMR_ID === treatment.EMR_ID) {
        dispatch(handlePdf(undefined));
        CpptOkService().showDay({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
          const { records } = resp.data.data;
          const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
          const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'day');
          CpptOkService().pdfNew(pdfParams).then(() => {
            dispatch(fetchCpptOkDayPdf(FindPdfRequest.createFromJson({
              emr_id: treatment.EMR_ID,
              form_name: 'cppt_day_v3',
            })))
          }).catch((err) => {
            console.log(err);
          })
        });
      }
      CpptOkService().show({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
        const { records } = resp.data.data;
        const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
        const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
        CpptOkService().pdfNew(pdfParams).then(() => {
          dispatch(fetchCpptOkPdf(FindPdfRequest.createFromJson({
            emr_id: treatment.EMR_ID,
            form_name: 'cppt_v3',
          })))
        }).catch((err) => {
          console.log(err);
        })
      });
    });
  }

  const handleSort = (sortDir: string) => {
    if (!treatment) {
      return;
    }
    const appRequest = AppRequest.createFromStore(treatment);
    dispatch(fetchCpptOk({ ...appRequest, sort: sortDir }))
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
            showCreateFormDoctor && doctorPreliminaryStudy && (
              <CpptOkForm doctorPreliminaryStudy={doctorPreliminaryStudy} onSuccessSubmit={() => {
                setShowCreateFormDoctor(false);
                window?.scrollTo({ top: 0, behavior: 'smooth' });
                if (treatment) {
                  const appRequest = AppRequest.createFromStore(treatment);
                  dispatch(fetchCpptOk({ ...appRequest, sort }));
                }
              }} onCancel={() => {
                setShowCreateFormDoctor(false);
                window?.scrollTo({ top: 0, behavior: 'smooth' });
              }} />
            )
          }
          {
            showCreateFormNurse && doctorPreliminaryStudy && (
              <CpptOkFormNurse onSuccessSubmit={() => {
                setShowCreateFormNurse(false);
                window?.scrollTo({ top: 0, behavior: 'smooth' });
                if (treatment) {
                  const appRequest = AppRequest.createFromStore(treatment);
                  dispatch(fetchCpptOk({ ...appRequest, sort }));
                }
              }} onCancel={() => {
                setShowCreateFormNurse(false);
                window?.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              doctorPreliminaryStudy={doctorPreliminaryStudy}
              />
            )
          }
          {
            data && data.records && Array.isArray(data.records) && (
              data.records.map((row, key) => {
                return (
                  <Fragment key={key}>
                    {
                      editRowDoctor && editRowDoctor.ID === row.ID && doctorPreliminaryStudy && (
                        <CpptOkForm key={key} doctorPreliminaryStudy={doctorPreliminaryStudy} cpptOk={editRowDoctor} onSuccessSubmit={() => {
                          setEditRowDoctor(undefined);
                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                          if (treatment) {
                            const appRequest = AppRequest.createFromStore(treatment);
                            dispatch(fetchCpptOk({ ...appRequest, sort }));
                          }
                        }} onCancel={() => {
                          setEditRowDoctor(undefined);
                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                        }}/>
                      )
                    }
                    {
                      editRowNurse && editRowNurse.ID === row.ID && doctorPreliminaryStudy && (
                        <CpptOkFormNurse key={key} cpptOk={editRowNurse} onSuccessSubmit={() => {
                          setEditRowNurse(undefined);
                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                          if (treatment) {
                            const appRequest = AppRequest.createFromStore(treatment);
                            dispatch(fetchCpptOk({ ...appRequest, sort }));
                          }
                        }} onCancel={() => {
                          setEditRowNurse(undefined);
                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        doctorPreliminaryStudy={doctorPreliminaryStudy}
                        />
                      )
                    }
                    {
                      userData && userData.isDokter && copyRowDoctor && copyRowDoctor.ID === row.ID && doctorPreliminaryStudy && (
                        <CpptOkForm key={key} doctorPreliminaryStudy={doctorPreliminaryStudy} cpptOk={copyRowDoctor} onSuccessSubmit={() => {
                          setCopyRowDoctor(undefined);
                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                          if (treatment) {
                            const appRequest = AppRequest.createFromStore(treatment);
                            dispatch(fetchCpptOk({ ...appRequest, sort }));
                          }
                        }} onCancel={() => {
                          setCopyRowDoctor(undefined);
                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                        }} action="create" copy={true}/>
                      )
                    }
                  </Fragment>
                );
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
              <Button className="me-1" color="secondary" type="button" onClick={() => {
                setShowCreateFormDoctor(true);
                window?.scrollTo({ top: 0, behavior: 'smooth' });
              }}>Input CPPT Dokter</Button>

              <Button color="secondary" type="button" onClick={() => {
                setShowCreateFormNurse(true);
                window?.scrollTo({ top: 0, behavior: 'smooth' });
              }}>Input CPPT Perawat</Button>
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
                                    userData && userData.isDokter && !copyRowDoctor && (
                                      <div className="d-flex justify-content-center">
                                        <Button className="btn-icon rounded btn-sm btn-action-cppt" color="primary" type="button" onClick={() => {
                                          setCopyRowDoctor(row)
                                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                                          setEditRowDoctor(undefined);
                                          setEditRowNurse(undefined);
                                        }} >
                                          <Copy size={16} />
                                        </Button>
                                      </div>
                                    )
                                  }
                                  {
                                    userData && userData.isDokter && copyRowDoctor && (
                                      <div className="d-flex justify-content-center">
                                        <Button disabled className="btn-icon rounded btn-sm btn-action-cppt" color="primary" type="button" onClick={() => {
                                          setCopyRowDoctor(row)
                                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                                          setEditRowDoctor(undefined);
                                          setEditRowNurse(undefined);
                                        }} >
                                          <Copy size={16} />
                                        </Button>
                                      </div>
                                    )
                                  }
                                  {
                                    row && row.Unit === 'OK' && (
                                      <Fragment>
                                        <div className="d-flex justify-content-center">
                                          <Button className="btn-icon rounded btn-sm btn-action-cppt" color="warning" type="button" onClick={() => {
                                            if (row.Is_Form_Dokter) {
                                              setEditRowDoctor(row);
                                              window?.scrollTo({ top: 0, behavior: 'smooth' });
                                            } else {
                                              setEditRowNurse(row);
                                              window?.scrollTo({ top: 0, behavior: 'smooth' });
                                            }
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
                                      userData && userData.isDokter && !copyRowDoctor && (
                                        <Button className="btn-icon rounded btn-sm btn-action-cppt" color="primary" type="button" onClick={() => {
                                          setCopyRowDoctor(row)
                                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                                        }} >
                                          <Copy size={16} />
                                        </Button>
                                      )
                                    }
                                    {
                                      userData && userData.isDokter && copyRowDoctor && (
                                        <Button disabled className="btn-icon rounded btn-sm btn-action-cppt" color="primary" type="button" onClick={() => {
                                          setCopyRowDoctor(row)
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
            detailRow && detailRow.Unit && detailRow.Unit === 'OK' && doctorPreliminaryStudy && (
              <CpptOkDetail cpptOk={detailRow} doctorPreliminaryStudy={doctorPreliminaryStudy} />
            )
          }
          {
            detailRow && detailRow.Unit && detailRow.Unit === 'Farmasi' && (
              <CpptPharmacyDetail
                cpptFarmasi={detailRow}
              />
            )
          }
          {
            detailRow && detailRow.Unit && detailRow.Unit === 'RawatJalan' && doctorPreliminaryStudy && (
              <CpptOutPatientDetail cpptRajal={detailRow} doctorPreliminaryStudy={doctorPreliminaryStudy} />
            )
          }
          {
            detailRow && detailRow.Unit && detailRow.Unit === 'RO' && (
              <CpptRoDetail ro={detailRow} />
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
          {
            doctorPreliminaryStudy && (
              <CpptOkDetail cpptOk={validateRow} doctorPreliminaryStudy={doctorPreliminaryStudy} validate onSuccessValidate={() => {
                setValidateRow(undefined);
                if (treatment) {
                  const appRequest = AppRequest.createFromStore(treatment);
                  dispatch(fetchCpptOk({ ...appRequest, sort }));
                }
              }} />
            )
          }
        </ModalBody>
      </Modal>

      <DeleteModal
        isShow={(!!deleteRow)}
        setIsShow={() => setDeleteRow(undefined)}
        onDeleteClick={() => handleDeleteRow(deleteRow)} />
    </Fragment>
  );
}

export default CpptOkTable;
