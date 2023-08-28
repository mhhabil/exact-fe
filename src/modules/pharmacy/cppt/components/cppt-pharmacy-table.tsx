import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row, Table } from 'reactstrap';
import { DateTimeInput, TextInput } from "@src/shared/input";
import { Fragment, useEffect, useState } from "react";
import ToolInspection from "@src/shared/tool-inspection/tool-inspection";
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { handlePdf, handlePdfAll, fetchCpptPharmacyDayPdf, fetchCpptPharmacyPdf, fetchCpptPharmacy } from '../stores/cppt-pharmacy.store';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { SubmitButton } from '@src/shared/button';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { AppRequest } from '@src/shared/request';
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import CpptFarmasiForm from './cppt-pharmacy-form';
import getConfig from 'next/config';
import { DataO } from '@src/shared/template';
import { ArrowDown, ArrowUp, Check, Copy, Edit, Eye, Trash } from 'react-feather';
import unit from '@src/modules/outpatient/cppt/const/unit';
import CpptRoDetail from '@src/modules/ro/cppt/components/cppt-ro-detail';
import DeleteModal from '@src/shared/modal/components/DeleteModal';
import { CpptModel } from '@src/modules/ro/cppt/models/cppt-ro.model';
import { CpptPharmacyService } from '../services';
import CpptPharmacyDetail from './cppt-pharmacy-detail';
import CpptNutritionDetail from '@src/modules/nutrition/cppt/components/cppt-nutrition-detail';
import { CpptpharmacyModel } from '../models/cppt-pharmacy';
import CpptOkDetail from '@src/modules/operating-room/cppt/components/cppt-ok-detail';
import CpptOutPatientDetail from '@src/modules/outpatient/cppt/components/cppt-out-patient-detail';
import { fetchDoctorPreliminaryStudy } from '@src/modules/outpatient/doctor-preliminary-study/stores/doctor-preliminary-study.store';
import fontSizes from '@modules/outpatient/cppt/const/font-size';
import { handleFontSize } from '@src/shared/font-size/stores/font-size.store';
import { CPPTPDFRequest, RootPDFRequest } from '@src/shared/request/requests/cppt-pdf.request';
import { FindPdfRequest } from '@src/shared/pdf';
import { IPrescription } from '@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model';
import { DateTimeConverter } from '@src/shared/datetime-converter';
import CpptEmergencyRoomDetail from '@src/modules/emergency-room/cppt/components/cppt-emergency-room-detail';

const CpptFarmasiTable = (props: {cpptFarmasi?: CpptpharmacyModel | undefined | any, data: CpptModel}) => {
  const { cpptFarmasi, data } = props;

  const { treatment } = useAppSelector(state => state.patient);
  const dispatch = useAppDispatch();
  const { publicRuntimeConfig } = getConfig();
  const { userData } = useAppSelector(state => state.auth);
  const { doctorPreliminaryStudy } = useAppSelector(state => state.doctorPreliminaryStudy);
  const { fontSize } = useAppSelector(state => state.fontSize);
  const { pdf, pdfAll } = useAppSelector(state => state.cpptPharmacyStore);
  const { companyCode } = useAppSelector(state => state.selectCompany)
  const [showCreateForm, setShowCreateForm] = useState<any>();
  const [copyRow, setCopyRow] = useState<any>();
  const [pdfData, setPdfData] = useState<any>(undefined);
  const [pdfDayData, setPdfDayData] = useState<any>(undefined);

  const [detailRow, setDetailRow] = useState<any>();
  const [editRow, setEditRow] = useState<any>();
  const [validateRow, setValidateRow] = useState<any>();
  const [deleteRow, setDeleteRow] = useState<any>();
  const [sort, setSort] = useState<string>('DESC');

  useEffect(() => {
    if (treatment) {
      dispatch(fetchCpptPharmacyDayPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'cppt_day_v3' })));
      dispatch(fetchCpptPharmacyPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'cppt_v3' })));
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

  const { register, handleSubmit, errors, setValue, formState, reset } = useForm({
    mode: 'onChange',
    // resolver: yupResolver(CreateCpptRoRequest.scheme()),
    defaultValues: {
      data_s: cpptFarmasi?.Data_S ?? '',
      data_o: cpptFarmasi?.Data_O ?? '',
      data_a: cpptFarmasi?.Data_A ?? '',
      data_p: cpptFarmasi?.Data_P ?? '',
      masalah_obat_radio: cpptFarmasi?.Masalah_Obat_Radio ?? '',
      masalah_obat_teks: cpptFarmasi?.Masalah_Obat_Teks ?? '',
      efek_samping_obat: cpptFarmasi?.Efek_Samping_Obat ?? '',
      interaksi_obat: cpptFarmasi?.Interaksi_Obat ?? '',
      monitor_terapi: cpptFarmasi?.Monitor_Terapi ?? '',
      monitor_efek_samping: cpptFarmasi?.Monitor_Efek_Samping ?? '',
      anjuran_dokter: cpptFarmasi?.Anjuran_Dokter ?? '',
      anjuran_perawat: cpptFarmasi?.Anjuran_Perawat ?? '',
      id_perawat_cppt: cpptFarmasi?.Id_Perawat_Cppt ?? '',
      ttd_perawat_cppt: cpptFarmasi?.TTD_Perawat_Cppt ?? '',
      interaksi_obat_radio: cpptFarmasi?.Interaksi_Obat_Radio ?? '',
      efek_samping_obat_radio: cpptFarmasi?.Efek_Samping_Obat_Radio ? cpptFarmasi?.Efek_Samping_Obat_Radio : cpptFarmasi?.Efek_Samping_Obat && cpptFarmasi?.Efek_Samping_Obat !== '' ? '2' : '',
    },
  });

  const handleDeleteRow = (row: any) => {
    if (!treatment) {
      return;
    }
    let params: any = AppRequest.createFromStore(treatment);
    params = {...params, item_id: row.ID, emr_id: row.EMR_ID};
    CpptPharmacyService().delete(params).then(() => {
      const appRequest = AppRequest.createFromStore(treatment);
      dispatch(fetchCpptPharmacy({ ...appRequest }));
      setDeleteRow(undefined);
      dispatch(handlePdfAll(undefined));
      if (row.EMR_ID === treatment.EMR_ID) {
        dispatch(handlePdf(undefined));
        CpptPharmacyService().showDay({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
          const { records } = resp.data.data;
          const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
          const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'day');
          CpptPharmacyService().pdfNew(pdfParams).then(() => {
            dispatch(fetchCpptPharmacyDayPdf(FindPdfRequest.createFromJson({
              emr_id: treatment.EMR_ID,
              form_name: 'cppt_day_v3',
            })))
          }).catch((err) => {
            console.log(err)
          })
        })
      }
      CpptPharmacyService().show({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
        const { records } = resp.data.data;
        const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
        const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
        CpptPharmacyService().pdfNew(pdfParams).then(() => {
          dispatch(fetchCpptPharmacyPdf(FindPdfRequest.createFromJson({
            emr_id: treatment.EMR_ID,
            form_name: 'cppt_v3',
          })))
        }).catch((err) => {
          console.log(err)
        })
      });
    });
  }

  const handleSort = (sortDir: string) => {
    if (!treatment) {
      return;
    }
    const appRequest = AppRequest.createFromStore(treatment);
    dispatch(fetchCpptPharmacy({ ...appRequest, sort: sortDir }))
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
            showCreateForm &&  (
              <CpptFarmasiForm onSuccessSubmit={() => {
                setShowCreateForm(false);
                window?.scrollTo({ top: 0, behavior: 'smooth' });
                if (treatment) {
                  const appRequest = AppRequest.createFromStore(treatment);
                  dispatch(fetchCpptPharmacy({ ...appRequest }));
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
                      editRow && editRow.ID === row.ID && data && (
                        <CpptFarmasiForm key={key} cpptFarmasi={editRow} onSuccessSubmit={() => {
                          setEditRow(undefined);
                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                          if (treatment) {
                            const appRequest = AppRequest.createFromStore(treatment);
                            dispatch(fetchCpptPharmacy({ ...appRequest }));
                          }
                        }} onCancel={() => {
                          setEditRow(undefined);
                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                        }}/>
                      )
                    }
                    {
                      userData && userData.isDokter && copyRow && copyRow.ID === row.ID && data && (
                        <CpptFarmasiForm key={key} cpptFarmasi={copyRow} onSuccessSubmit={() => {
                          setCopyRow(undefined);
                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                          if (treatment) {
                            const appRequest = AppRequest.createFromStore(treatment);
                            dispatch(fetchCpptPharmacy({ ...appRequest }));
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
                                    row && row.Unit === 'Farmasi' && (
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
            detailRow && detailRow.Unit && detailRow.Unit === 'Farmasi' && (
              <CpptPharmacyDetail
                cpptFarmasi={detailRow}
                {...{ register, errors, setValue }}
              />
            )
          }
          {
            detailRow && detailRow.Unit && detailRow.Unit === 'OK' && doctorPreliminaryStudy && (
              <CpptOkDetail
                cpptOk={detailRow}
                doctorPreliminaryStudy={doctorPreliminaryStudy}
              />
            )
          }
          {
            detailRow && detailRow.Unit && detailRow.Unit === 'RawatJalan' && doctorPreliminaryStudy && (
              <CpptOutPatientDetail
                cpptRajal={detailRow}
                doctorPreliminaryStudy={doctorPreliminaryStudy}
              />
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
          <CpptPharmacyDetail cpptFarmasi={validateRow} {...{ register, errors, setValue }} validate onSuccessValidate={() => {
            setValidateRow(undefined);
            if (treatment) {
              const appRequest = AppRequest.createFromStore(treatment);
              dispatch(fetchCpptPharmacy({ ...appRequest }));
              // dispatch(fetchCpptRo({ ...appRequest, sort }));
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
export default CpptFarmasiTable;