import { ArrowDown, ArrowUp, Edit, FileText, Printer, Send, Trash } from "react-feather";
import { Button, Col, Label, Modal, ModalBody, ModalHeader, Row, Table } from "reactstrap";
import { Fragment, useEffect, useState } from "react";
import { fetchConsultationSheet, fetchCpptAllPdf, handleCpptLink, handleShowCreate } from "../stores/consultation-sheet.store";
import { handleConsultationLinkRajal, handleShowCreateRajal } from "@modules/outpatient/cppt/stores/cppt-out-patient.store";
import { handleConsultationLinkRanap, handleShowCreateRanap } from "@src/modules/inpatient/cppt/stores/cppt-inpatient.store";
import { AppRequest } from "@src/shared/request";
import ConsultationSheetForm from "./consultation-sheet-form";
import { ConsultationSheetService } from "../services";
import DeleteModal from "@src/shared/modal/components/DeleteModal";
import { FindPdfRequest } from "@src/shared/pdf";
import { IConsultationSheet } from "../models/consultation-sheet.model";
import Link from "next/link";
import { fetchDoctorPreliminaryStudy } from "../../doctor-preliminary-study/stores/doctor-preliminary-study.store";
import getConfig from 'next/config';
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useRouter } from "next/router";
import { DateTimeConverter } from "@src/shared/datetime-converter";

const ConsultationSheetTable = (props: { data: IConsultationSheet }) => {
  const { data } = props;
  const { publicRuntimeConfig } = getConfig();
  const { treatment } = useAppSelector(state => state.patient);
  const { cpptAllPdf, showCreate } = useAppSelector(state => state.consultationSheet);
  const { userData } = useAppSelector(state => state.auth);
  const { doctorPreliminaryStudy } = useAppSelector(state => state.doctorPreliminaryStudy);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [showCreateForm, setShowCreateForm] = useState<any>()
  const [editRow, setEditRow] = useState<any>();
  const [deleteRow, setDeleteRow] = useState<any>();
  const [replyRow, setReplyRow] = useState<any>();
  const [sort, setSort] = useState<string>('DESC')
  const [pdfData, setPdfData] = useState<any>(undefined);

  useEffect(() => {
    if (treatment) {
      dispatch(fetchCpptAllPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'cppt_v3' })));
      dispatch(fetchDoctorPreliminaryStudy(AppRequest.createFromStore(treatment)));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!cpptAllPdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(cpptAllPdf);

  }, [cpptAllPdf])

  useEffect(() => {
    if (showCreateForm || showCreate) {
      if (editRow) {
        setEditRow(undefined);
      }
      if (replyRow) {
        setReplyRow(undefined)
      }
    }
  }, [showCreateForm, showCreate]);

  useEffect(() => {
    if (editRow) {
      if (showCreateForm) {
        setShowCreateForm(false);
      }
      if (showCreate) {
        dispatch(handleShowCreate(undefined))
      }
      if (replyRow) {
        setReplyRow(undefined);
      }
    }
  }, [editRow]);

  useEffect(() => {
    if (replyRow) {
      if (showCreateForm) {
        setShowCreateForm(false);
      }
      if (showCreate) {
        dispatch(handleShowCreate(undefined))
      }
      if (editRow) {
        setEditRow(undefined);
      }
    }
  }, [replyRow]);

  const handleSort = (sortDir: string) => {
    if (!treatment) {
      return;
    }
    const appRequest = AppRequest.createFromStore(treatment);
    dispatch(fetchConsultationSheet({ ...appRequest, sort: sortDir }))
    setSort(sortDir);
  }

  const handleDeleteRow = (row: any) => {
    if (!treatment) {
      return;
    }
    let params: any = AppRequest.createFromStore(treatment);
    params = {...params, id: row.ID, emr_id: row.EMR_ID };
    ConsultationSheetService().delete(params).then(() => {
      const appRequest = AppRequest.createFromStore(treatment);
      dispatch(fetchConsultationSheet({ ...appRequest, sort }))
      setDeleteRow(undefined)
    })
      .catch((err) => console.log(err))
  }

  return (
    <Fragment>
      <Row id="form">
        <Col md={12}>
          {
            (showCreateForm || showCreate) && doctorPreliminaryStudy && (
              <ConsultationSheetForm
                action="create"
                mode="new"
                preliminary={doctorPreliminaryStudy}
                onCancel={() => {
                  setShowCreateForm(false)
                  dispatch(handleShowCreate(undefined))
                  dispatch(handleCpptLink(undefined))
                  window?.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onSuccessSubmit={() => {
                  setShowCreateForm(false);
                  dispatch(handleShowCreate(undefined))
                  dispatch(handleCpptLink(undefined))
                  window?.scrollTo({ top: 0, behavior: 'smooth' });
                  if (treatment) {
                    const appRequest = AppRequest.createFromStore(treatment)
                    dispatch(fetchConsultationSheet({ ...appRequest, sort }))
                  }
                }}
              />
            )
          }
          {
            data && data.records && Array.isArray(data.records) && (
              data.records.map((row, key) => {
                return (
                  <Fragment key={key}>
                    {
                      editRow && editRow.ID && editRow.ID === row.ID && doctorPreliminaryStudy && (
                        <ConsultationSheetForm
                          key={key}
                          data={editRow}
                          action="update"
                          mode="new"
                          preliminary={doctorPreliminaryStudy}
                          onCancel={() => {
                            setEditRow(undefined)
                            window?.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          onSuccessSubmit={() => {
                            setEditRow(undefined);
                            window?.scrollTo({ top: 0, behavior: 'smooth' });
                            if (treatment) {
                              const appRequest = AppRequest.createFromStore(treatment)
                              dispatch(fetchConsultationSheet({ ...appRequest, sort }))
                            }
                          }}
                        />
                      )
                    }
                    {
                      replyRow && replyRow.ID && replyRow.ID === row.ID && doctorPreliminaryStudy && (
                        <ConsultationSheetForm
                          key={key}
                          data={replyRow}
                          action="update"
                          mode="reply"
                          preliminary={doctorPreliminaryStudy}
                          onCancel={() => {
                            setReplyRow(undefined)
                            window?.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          onSuccessSubmit={() => {
                            setReplyRow(undefined);
                            window?.scrollTo({ top: 0, behavior: 'smooth' });
                            if (treatment) {
                              const appRequest = AppRequest.createFromStore(treatment)
                              dispatch(fetchConsultationSheet({ ...appRequest, sort }))
                            }
                          }}
                        />
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
          <div className="d-flex justify-content-between">
            <div>
              {
                pdfData && Array.isArray(pdfData) && pdfData.length > 0 ? (
                  <a color='success' href={`${pdfData[0].URL}`} target="_blank" rel="noreferrer">
                    <Button className='me-1' color='success' type='button'>
                      Lihat Riwayat CPPT
                    </Button>
                  </a>
                ) : (
                  <Button className='me-1' color='success' type='button' disabled>
                    Lihat Riwayat CPPT
                  </Button>
                )
              }
              {
                treatment && treatment.Jenis_Pelayanan && treatment.Jenis_Pelayanan === 'RawatJalan' && (
                  <Link href={`${publicRuntimeConfig.env.baseUrl}/rawat-jalan/cppt`}>
                    <a>
                      <Button className='me-1' color='primary' type='button'>
                        New CPPT
                      </Button>
                    </a>
                  </Link>
                )
              }
            </div>
            <div>
              <Button className="me-1" color="secondary" type="button" onClick={() => {
                setShowCreateForm(true);
                window?.scrollTo({ top: 0, behavior: 'smooth' });
              }}>Input Konsultasi Dokter</Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <Table responsive>
            <thead>
              <tr className="fw-bolder text-center">
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
                <td>Dokter</td>
                <td>Diagnosa<br/>Konsultasi</td>
                <td>Terapi<br/>Konsultasi</td>
                <td>Konsultasi Ke Dokter</td>
                <td>Jawaban<br/>Anjuran</td>
                <td>Aksi</td>
              </tr>
            </thead>
            <tbody>
              {
                data && data.records && Array.isArray(data.records) && (
                  data.records.map((row, key) => {
                    return (
                      <tr key={key}>
                        {/* <td className='prevent-select'>{ row.Tanggal_Konsul }</td> */}
                        <td className='prevent-select'>{ `${DateTimeConverter.convertToDateTime(row.Tanggal_Konsul)}` }</td>
                        <td className='prevent-select text-center'>{ row.Nama_TTD_Dokter_Konsultasi }</td>
                        <td className='prevent-select text-center'>{ row.Diagnosa }</td>
                        <td className='prevent-select text-center'>{ row.Terapi }</td>
                        <td className='prevent-select text-center'>{ row.Rumah_Sakit_Tujuan && row.Rumah_Sakit_Tujuan === 'eksternal' ? row.Dokter_Konsul_Nama_Eksternal : row.Yth_Dokter_Konsul_Nama ? row.Yth_Dokter_Konsul_Nama : '' }</td>
                        <td className='prevent-select text-center'>{ row.Anjuran }</td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <a rel="noreferrer" className={row.PDF ? 'btn btn-primary btn-sm btn-icon rounded-circle me-1' : 'btn btn-secondary btn-sm btn-icon rounded-circle me-1'} target={row.PDF ? '_blank' : '_self'} href={row.PDF ?? 'javascript:void(0)'}>
                              <Printer size={16}/>
                            </a>
                            {
                              row.ID_Dokter_Konsultasi && userData && row.ID_Dokter_Konsultasi === userData.id ? (
                                <Button
                                  className="btn-icon rounded btn-sm me-1"
                                  color="warning"
                                  type="button"
                                  onClick={() => {
                                    setEditRow(row);
                                    window?.scrollTo({ top: 0, behavior: 'smooth' });
                                  }}
                                >
                                  <Edit size={16} />
                                </Button>
                              ) : (
                                null
                              )
                            }
                            {
                              row.Yth_Dokter_Konsul_Id && userData && row.Yth_Dokter_Konsul_Id === userData.id ? (
                                <>
                                  <Button
                                    className="btn-icon rounded btn-sm me-1"
                                    color="success"
                                    type="button"
                                    onClick={() => {
                                      setReplyRow(row);
                                      window?.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                  >
                                    <Send size={16} />
                                  </Button>
                                  <Button
                                    className="btn-icon rounded btn-sm me-1"
                                    color="info"
                                    type="button"
                                    onClick={() => {
                                      if (treatment && treatment.Jenis_Pelayanan && treatment.Jenis_Pelayanan === 'RawatJalan') {
                                        dispatch(handleShowCreateRajal(true))
                                        dispatch(handleConsultationLinkRajal(row))
                                        router.push('/rawat-jalan/cppt').then(undefined)
                                      }
                                      if (treatment && treatment.Jenis_Pelayanan && treatment.Jenis_Pelayanan === 'RawatInap') {
                                        dispatch(handleShowCreateRanap(true))
                                        dispatch(handleConsultationLinkRanap(row))
                                        router.push('/rawat-inap/cppt').then(undefined)
                                      }
                                    }}
                                  >
                                    <FileText size={16}/>
                                  </Button>
                                </>
                              ) : (
                                null
                              )
                            }
                            <Button
                              className="btn-icon rounded btn-sm me-1"
                              color="danger"
                              type="button"
                              onClick={() => setDeleteRow(row)}
                            >
                              <Trash size={16} />
                            </Button>
                          </div>
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
      <DeleteModal
        isShow={(!!deleteRow)}
        setIsShow={() => setDeleteRow(undefined)}
        onDeleteClick={() => handleDeleteRow(deleteRow)} />
    </Fragment>
  )
}

export default ConsultationSheetTable;
