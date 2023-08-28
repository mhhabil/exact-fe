import {ArrowDown, ArrowUp, BookOpen, Check, Copy, Edit, Eye, Trash} from 'react-feather';
import { Button, Col, Input, Label, Modal, ModalBody, ModalHeader, Row, Table } from 'reactstrap';
import { CPPTPDFRequest, RootPDFRequest } from '@src/shared/request/requests/cppt-pdf.request';
import { CpptModel, ICpptRecord } from '@modules/ro/cppt/models/cppt-ro.model';
import { Fragment, useEffect, useState } from 'react';
import {
  fetchCpptOutPatient,
  fetchCpptOutPatientDayPdf,
  fetchCpptOutPatientPdf,
  handleAutoRefresh,
  handleConsultationLinkRajal,
  handlePdf,
  handlePdfAll,
  handleShowCreateRajal,
} from '@modules/outpatient/cppt/stores/cppt-out-patient.store';
import { handleCpptLink, handleShowCreate } from '@modules/outpatient/consultation-sheet/stores/consultation-sheet.store';
import AES from 'crypto-js/aes';
import { AppRequest } from '@shared/request';
import { BPJSService } from '@src/shared/bpjs/services';
import { BPJSValidateRequest } from '@src/shared/bpjs/requests';
import { CPPTLink } from '@modules/outpatient/consultation-sheet/models/consultation-sheet.model';
import CpptEmergencyRoomDetail from '@src/modules/emergency-room/cppt/components/cppt-emergency-room-detail';
import CpptNutritionDetail from '@src/modules/nutrition/cppt/components/cppt-nutrition-detail';
import CpptOkDetail from '@src/modules/operating-room/cppt/components/cppt-ok-detail';
import CpptOutPatientDetail from '@modules/outpatient/cppt/components/cppt-out-patient-detail';
import CpptOutPatientForm from '@modules/outpatient/cppt/components/cppt-out-patient-form';
import CpptOutPatientFormNurse from '@modules/outpatient/cppt/components/cppt-out-patient-form-nurse';
import {CpptOutPatientService} from '@modules/outpatient/cppt/services';
import CpptPharmacyDetail from '@src/modules/pharmacy/cppt/components/cppt-pharmacy-detail';
import CpptRoDetail from '@src/modules/ro/cppt/components/cppt-ro-detail';
import CpptRoForm from '@modules/ro/cppt/components/cppt-ro-form';
import { DataO } from '@src/shared/template';
import { DateTimeConverter } from '@src/shared/datetime-converter';
import DeleteModal from '@shared/modal/components/DeleteModal';
import { FindPdfRequest } from '@shared/pdf';
import { ICareModal } from '@src/shared/bpjs/components';
import { IPrescription } from '../../doctor-preliminary-study/models/doctor-preliminary-study.model';
import Link from 'next/link';
import PreliminaryStudyDetail from '@modules/ro/preliminary-study/components/preliminary-study-detail';
import { SpinnerButton } from '@src/shared/button';
import {fetchDoctorPreliminaryStudy} from '@modules/outpatient/doctor-preliminary-study/stores/doctor-preliminary-study.store';
import fontSizes from '../const/font-size';
import { handleAutoSign } from '@modules/outpatient/proof-of-outpatient-services/stores/proof-of-outpatient-services.stores';
import { handleBPJSValidate } from '@src/shared/bpjs/stores/bpjs-validate.store';
import { handleFontSize } from '@src/shared/font-size/stores/font-size.store';
import unit from '../const/unit';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useRouter } from 'next/router';

const CpptOutPatientTable = (props: { data: CpptModel }) => {

  const { data } = props;

  const router = useRouter();
  const { treatment } = useAppSelector(state => state.patient);
  const { pdf, pdfAll, showCreateRajal, autoRefresh } = useAppSelector(state => state.cpptOutPatient);
  const { fontSize } = useAppSelector(state => state.fontSize);
  const { doctorPreliminaryStudy } = useAppSelector(state => state.doctorPreliminaryStudy);
  const { userData } = useAppSelector(state => state.auth);
  const { companyCode } = useAppSelector(state => state.selectCompany);
  const { isICare, bpjsValidate } = useAppSelector(state => state.bpjsValidate);
  const [pdfData, setPdfData] = useState<any>(undefined);
  const [pdfDayData, setPdfDayData] = useState<any>(undefined);
  const dispatch = useAppDispatch();

  const [detailRow, setDetailRow] = useState<any>();
  const [deleteRow, setDeleteRow] = useState<any>();
  const [editRowDoctor, setEditRowDoctor] = useState<any>();
  const [editRowNurse, setEditRowNurse] = useState<any>();
  const [validateRow, setValidateRow] = useState<any>();
  const [showCreateFormDoctor, setShowCreateFormDoctor] = useState<any>();
  const [showCreateFormNurse, setShowCreateFormNurse] = useState<any>();
  const [copyRowDoctor, setCopyRowDoctor] = useState<any>();
  const [sort, setSort] = useState<string>('DESC');
  const [bprjConfirm, setBprjConfirm] = useState<boolean>(false);
  const [iCareProcessing, setICareProcessing] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const showConfirm = (): boolean => {
    return confirm('Data Berhasil Tersimpan, Apakah Lanjut Membuat BPRJ?');
  }

  useEffect(() => {
    if (treatment) {
      dispatch(fetchCpptOutPatientPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'cppt_v3' })));
      dispatch(fetchCpptOutPatientDayPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'cppt_day_v3' })));
      dispatch(fetchDoctorPreliminaryStudy(AppRequest.createFromStore(treatment)));
      dispatch(handleBPJSValidate(undefined));
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
    if (autoRefresh) {
      setEditRowDoctor(undefined);
      setShowCreateFormDoctor(undefined);
      dispatch(handleAutoRefresh(false));
    }
  }, [autoRefresh])

  useEffect(() => {
    if (bprjConfirm) {
      const condition = showConfirm();
      setBprjConfirm(false);
      if (condition) {
        dispatch(handleAutoSign(true));
        router.push('/rawat-jalan/bukti-pelayanan-rawat-jalan').then(undefined);
      }
    }
  }, [bprjConfirm])


  useEffect(() => {
    if (!pdf) {
      setPdfDayData(undefined);
      return;
    }
    setPdfDayData(pdf);

  }, [pdf])

  useEffect(() => {
    if (showCreateFormDoctor || showCreateRajal) {
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
  }, [showCreateFormDoctor, showCreateRajal]);

  useEffect(() => {
    if (showCreateFormNurse) {
      if (showCreateFormDoctor) {
        setShowCreateFormDoctor(false);
      }
      if (showCreateRajal) {
        dispatch(handleShowCreateRajal(undefined))
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
      if (showCreateRajal) {
        dispatch(handleShowCreateRajal(undefined))
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
      if (showCreateRajal) {
        dispatch(handleShowCreateRajal(undefined))
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
      if (showCreateRajal) {
        dispatch(handleShowCreateRajal(undefined))
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
    params = {...params, item_id: row.ID, emr_id: row.EMR_ID };
    CpptOutPatientService().delete(params).then(() => {
      const appRequest = AppRequest.createFromStore(treatment);
      dispatch(fetchCpptOutPatient({ ...appRequest, sort }))
      dispatch(handlePdfAll(undefined));
      if (row.EMR_ID === treatment.EMR_ID) {
        dispatch(handlePdf(undefined));
        CpptOutPatientService().showDay({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
          const { records } = resp.data.data;
          const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
          const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'day');
          CpptOutPatientService().pdfNew(pdfParams).then(() => {
            dispatch(fetchCpptOutPatientDayPdf(FindPdfRequest.createFromJson({
              emr_id: treatment.EMR_ID,
              form_name: 'cppt_day_v3',
            })))
          }).catch((err) => {
            console.log(err)
          })
        });
      }
      CpptOutPatientService().show({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
        const { records } = resp.data.data;
        const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
        const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
        CpptOutPatientService().pdfNew(pdfParams).then(() => {
          dispatch(fetchCpptOutPatientPdf(FindPdfRequest.createFromJson({
            emr_id: treatment.EMR_ID,
            form_name: 'cppt_v3',
          })))
        }).catch((err) => {
          console.log(err)
        })
      });
      setDeleteRow(undefined);
    });
  }

  const handleSort = (sortDir: string) => {
    if (!treatment) {
      return;
    }
    const appRequest = AppRequest.createFromStore(treatment);
    dispatch(fetchCpptOutPatient({ ...appRequest, sort: sortDir }))
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

  const handleDataCPPT = (cppt: ICpptRecord) => {
    const dataP = CPPTLink.createPData(cppt.Data_P, cppt.Resep);
    dispatch(handleCpptLink({
      Data_A: cppt.Data_A ?? '',
      Data_P: dataP ?? '',
      ID: cppt.ID,
    }))
  }

  const handleICare = () => {
    if (bpjsValidate && bpjsValidate.response && bpjsValidate.response.url) {
      setIsOpen(true);
      return;
    }
    if (
      userData &&
      userData.isDokter &&
      userData.id &&
      treatment &&
      treatment.Pasien &&
      treatment.Pasien.NIK &&
      companyCode &&
      treatment.Tipe_Pasien &&
      treatment.Tipe_Pasien === 'BPJS'
    ) {
      setICareProcessing(true);
      const params = BPJSValidateRequest.createFromJson({
        employee_id: userData.id,
        param: treatment.Pasien.NIK,
        branch_code: companyCode,
      });
      BPJSService().validate(params)
        .then((response) => {
          const { data } = response;
          dispatch(handleBPJSValidate(data));
          setIsOpen(true);
          setICareProcessing(false);
        })
        .catch((err) => {
          console.error(err);
          setIsOpen(false);
          setICareProcessing(false);
        })
    }
  }

  return (
    <Fragment>
      <Row id="form">
        <Col md={12}>
          {
            (showCreateFormDoctor || showCreateRajal) && doctorPreliminaryStudy && (
              <CpptOutPatientForm doctorPreliminaryStudy={doctorPreliminaryStudy} onSuccessSubmit={() => {
                setShowCreateFormDoctor(false);
                dispatch(handleShowCreateRajal(undefined))
                dispatch(handleConsultationLinkRajal(undefined))
                window?.scrollTo({ top: 0, behavior: 'smooth' });
                if (treatment) {
                  const appRequest = AppRequest.createFromStore(treatment)
                  dispatch(fetchCpptOutPatient({ ...appRequest, sort }))
                  if (treatment.Tipe_Pasien === 'BPJS') {
                    setBprjConfirm(true)
                  }
                }
              }} onCancel={() => {
                setShowCreateFormDoctor(false);
                dispatch(handleShowCreateRajal(undefined))
                dispatch(handleConsultationLinkRajal(undefined))
                window?.scrollTo({ top: 0, behavior: 'smooth' });
              }} />
            )
          }
          {
            showCreateFormNurse && doctorPreliminaryStudy && (
              <CpptOutPatientFormNurse onSuccessSubmit={() => {
                setShowCreateFormNurse(false);
                window?.scrollTo({ top: 0, behavior: 'smooth' });
                if (treatment) {
                  const appRequest = AppRequest.createFromStore(treatment)
                  dispatch(fetchCpptOutPatient({ ...appRequest, sort }))
                }
              }} onCancel={() => {
                setShowCreateFormNurse(false);
                window?.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              doctorPreliminaryStudy={doctorPreliminaryStudy}
              anamnesa={data.anamnesa}
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
                        <CpptOutPatientForm key={key} doctorPreliminaryStudy={doctorPreliminaryStudy} cpptRajal={editRowDoctor} onSuccessSubmit={() => {
                          setEditRowDoctor(undefined);
                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                          if (treatment) {
                            const appRequest = AppRequest.createFromStore(treatment)
                            dispatch(fetchCpptOutPatient({ ...appRequest, sort }))
                          }
                        }} onCancel={() => {
                          setEditRowDoctor(undefined);
                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                        }}/>
                      )
                    }
                    {
                      editRowNurse && editRowNurse.ID === row.ID && doctorPreliminaryStudy && (
                        <CpptOutPatientFormNurse key={key} cpptRo={editRowNurse} onSuccessSubmit={() => {
                          setEditRowNurse(undefined);
                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                          if (treatment) {
                            const appRequest = AppRequest.createFromStore(treatment)
                            dispatch(fetchCpptOutPatient({ ...appRequest, sort }))
                          }
                        }} onCancel={() => {
                          setEditRowNurse(undefined);
                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        doctorPreliminaryStudy={doctorPreliminaryStudy}
                        anamnesa={data.anamnesa}
                        />
                      )
                    }
                    {
                      userData && userData.isDokter && copyRowDoctor && copyRowDoctor.ID === row.ID && doctorPreliminaryStudy && (
                        <CpptOutPatientForm key={key} doctorPreliminaryStudy={doctorPreliminaryStudy} cpptRajal={copyRowDoctor} onSuccessSubmit={() => {
                          setCopyRowDoctor(undefined);
                          window?.scrollTo({ top: 0, behavior: 'smooth' });
                          if (treatment) {
                            const appRequest = AppRequest.createFromStore(treatment)
                            dispatch(fetchCpptOutPatient({ ...appRequest, sort }))
                            if (treatment.Tipe_Pasien === 'BPJS') {
                              setBprjConfirm(true)
                            }
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
          <div className='d-flex justify-content-between align-items-center mb-2'>
            <div>
              {
                userData && userData.isDokter && treatment && treatment.Tipe_Pasien && treatment.Tipe_Pasien === 'BPJS' && isICare ? (
                  <SpinnerButton
                    label="i-Care"
                    className='icare-btn text-white fw-bolder'
                    spinnerStyle={{ width: '1rem', height: '1rem' }}
                    spinnerColor='light'
                    processing={iCareProcessing}
                    onClick={() => handleICare()}
                  />
                ) : (
                  null
                )
              }
            </div>
            <div>
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
                                    row && row.Unit === 'RawatJalan' && (
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
                                          {
                                            treatment && row.EMR_ID && row.EMR_ID === treatment.EMR_ID && (
                                              <Button className="btn-icon rounded btn-sm btn-action-cppt" color="secondary" type="button" onClick={() => {
                                                dispatch(handleShowCreate(true));
                                                handleDataCPPT(row);
                                                router.push('/rawat-jalan/lembar-konsultasi')
                                              }} >
                                                <BookOpen size={16} />
                                              </Button>
                                            )
                                          }
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
                        <td className={`prevent-select p-0`}>
                          <pre className="bg-white p-0">{ `${DateTimeConverter.convertToDateTime(row.Waktu)}\n${row.Nama_Petugas}\n${getUnitName(row.Unit)}` }</pre>
                        </td>
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
                            row.Unit && row.Unit === 'Farmasi' ? `Anjuran Untuk Dokter: ${row.Anjuran_Dokter ?? ''}\nAnjuran Untuk Perawat: ${row.Anjuran_Perawat ?? ''}` : <pre>{ `${row.Instruksi_PPA ?? ''}\n${row.Konsultasi ?? ''}`}</pre>
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
            detailRow && detailRow.Unit && detailRow.Unit === 'RawatJalan' && doctorPreliminaryStudy && (
              <CpptOutPatientDetail cpptRajal={detailRow} doctorPreliminaryStudy={doctorPreliminaryStudy} />
            )
          }
          {
            detailRow && detailRow.Unit && detailRow.Unit === 'UGD' && doctorPreliminaryStudy && (
              <CpptEmergencyRoomDetail cpptUgd={detailRow} doctorPreliminaryStudy={doctorPreliminaryStudy} />
            )
          }
          {
            detailRow && detailRow.Unit && detailRow.Unit === 'OK' && doctorPreliminaryStudy && (
              <CpptOkDetail cpptOk={detailRow} doctorPreliminaryStudy={doctorPreliminaryStudy} />
            )
          }
          {
            detailRow && detailRow.Unit && detailRow.Unit === 'Farmasi' && (
              <CpptPharmacyDetail cpptFarmasi={detailRow} />
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
        </ModalBody>
      </Modal>

      <Modal isOpen={!!validateRow} size="xl">
        <ModalHeader toggle={() => setValidateRow(undefined)}>Validasi Data</ModalHeader>
        <ModalBody>
          {
            doctorPreliminaryStudy && (
              <CpptOutPatientDetail cpptRajal={validateRow} validate onSuccessValidate={() => {
                setValidateRow(undefined);
                if (treatment) {
                  const appRequest = AppRequest.createFromStore(treatment)
                  dispatch(fetchCpptOutPatient({ ...appRequest, sort }))
                }
              }} doctorPreliminaryStudy={doctorPreliminaryStudy} />
            )
          }
        </ModalBody>
      </Modal>

      <DeleteModal
        isShow={(!!deleteRow)}
        setIsShow={() => setDeleteRow(undefined)}
        onDeleteClick={() => handleDeleteRow(deleteRow)} />

      {
        bpjsValidate && bpjsValidate.response && bpjsValidate.response.url ? (
          <ICareModal
            {...{isOpen, setIsOpen}}
            url={bpjsValidate?.response?.url}
          />
        ) : (
          null
        )
      }
    </Fragment>
  );
}

export default CpptOutPatientTable;
