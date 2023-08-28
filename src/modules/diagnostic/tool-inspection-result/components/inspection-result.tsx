import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Button, Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle, Col, Label, Modal, ModalBody, ModalHeader, Row, Spinner } from "reactstrap";
import { DeletePacs, IGenerateDicom } from "../requests";
import { IDicomObject, IDicomSearch, IInstance, Instance } from "../models/tool-inspection-result.model";
import { AppRequest } from "@src/shared/request";
import { ConfirmModal } from "@src/shared/modal";
import { DateTimeConverter } from "@src/shared/datetime-converter";
import { GenerateDicom } from "../requests/tool-inspection-result.request";
import Image from 'next/image';
import { ToolInspectionResultService } from "../services";
import { fetchDicom } from "../stores/tool-inspection-result.store";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useState } from "react";

interface IOpenZoom {
  image: string;
  SOPInstanceUID: string;
}

interface IProcessOri {
  processing: boolean;
  key: string;
}

const InspectionResult = (props: { data: IDicomSearch | undefined }) => {
  const { data } = props;
  const { treatment } = useAppSelector(state => state.patient);
  const [open, setOpen] = useState('');
  const [showModal, setShowModal] = useState(false)
  const [dicomId, setDicomId] = useState('');
  const [emrId, setEmrId] = useState<string>('');
  const [processing, setProcessing] = useState(false);
  const [openZoom, setOpenZoom] = useState<IOpenZoom | undefined>(undefined);
  const [processOri, setProcessOri] = useState<IProcessOri | undefined>(undefined);

  const dispatch = useAppDispatch();
  const toggle = (id: any) => {
    if (open !== id) {
      setOpen(id);
    }
    if (open === id) {
      setOpen('');
    }
  };

  const toggleClose = () => setShowModal(!showModal);

  const handleDeleteDicom = (sopInstanceUid: string) => {
    if (!treatment) return;
    const params = DeletePacs.createFromJson({
      emr_id: (emrId && emrId !== '') ? emrId : '',
      SOPInstanceUID: sopInstanceUid,
    })
    ToolInspectionResultService().deletePacs(params)
      .then((resp: any) => {
        dispatch(fetchDicom(AppRequest.createFromStore(treatment)));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const toggleOpen = (dicomId: string) => {
    setDicomId(dicomId);
    setShowModal(true);
  }

  const generatePdf = (instance: Instance, dicom: IDicomObject) => {
    if (!treatment) {
      return;
    }
    setProcessing(true)
    const dicomPdfParams: IGenerateDicom = {
      emr_id: dicom.EMR_ID,
      StudyInstanceUID: instance.StudyInstanceUID,
      SeriesInstanceUID: instance.SeriesInstanceUID,
      SOPInstanceUID: instance.SOPInstanceUID,
      nik: treatment?.Pasien?.NIK,
    }
    ToolInspectionResultService().generateDicomPdf(dicomPdfParams)
      .then((resp: any) => {
        dispatch(fetchDicom(AppRequest.createFromStore(treatment)));
        setProcessing(false);
      });
  }

  const handleZoomImage = (image: string, sop: string) => {
    setOpenZoom({ image, SOPInstanceUID: sop });
  }

  const handleGenerateOriginal = (option: IInstance, emr_id: string, key: string, nik: string) => {
    if (!treatment) {
      return;
    }
    setProcessOri({ processing: true, key })
    const params = GenerateDicom.createFromJson({...option, emr_id, nik});
    ToolInspectionResultService()
      .generateOriginal(params)
      .then(() => {
        dispatch(fetchDicom(AppRequest.createFromStore(treatment)));
        setProcessOri({ processing: false, key })
      })
      .catch((err) => {
        console.error(err);
      })
  }

  return (
    <>
      <Row>
        <Col>
          <Accordion
            open={open}
            {...{
              toggle: (accordionItem: any) => {
                toggle(accordionItem);
                setEmrId(accordionItem);
              },
            }}
          >
            { treatment && data && data.Treatment_Episode && data.Treatment_Episode.length > 0 && data.Treatment_Episode.map((dicom: IDicomObject, key: number) => (
              <AccordionItem
                key={key}
              >
                <AccordionHeader targetId={dicom.EMR_ID}>
                  <div className="d-flex flex-column">
                    <Label>
                      {/* {`Tanggal Berobat: ${(dicom && dicom.TreatmentDate) ? dicom.TreatmentDate : ''}`} */}
                      {`Tanggal Berobat: ${DateTimeConverter.convertToNormalDate(dicom.TreatmentDate)}` }
                    </Label>
                    <Label>
                      {`Nomor Berobat: ${(dicom && dicom.TreatmentNumber) ? dicom.TreatmentNumber : ''} (${(dicom && dicom.DoctorName) ? dicom.DoctorName : ''})`}
                    </Label>
                  </div>
                </AccordionHeader>
                <AccordionBody accordionId={dicom.EMR_ID}>
                  <div className="d-flex overflow-auto">
                    {dicom && dicom.Instance && Array.isArray(dicom.Instance) && dicom.Instance.map((value: Instance, key: number) => (
                      <Card
                        key={key}
                        className='me-1'
                        style={{ flexShrink: 0, border: '1px solid' }}
                      >
                        {
                          value && value.Thumbnail && value.Thumbnail !== '' && (
                            <Image
                              className="img-thumbnail mt-1 cursor-pointer dicom-img-thumbnail"
                              alt={value.SOPInstanceUID ?? ''}
                              src={value.Thumbnail ? value.Thumbnail : ''}
                              height="150rem"
                              onClick={() => {
                                if (value.Original) {
                                  handleZoomImage(value.Original, value.SOPInstanceUID)
                                }
                              }}
                              width="150rem"
                              objectFit="contain" />
                          )
                        }
                        <CardBody>
                          <CardTitle
                            className="fs-6"
                          >
                            {`${value.ModalityName ? value.ModalityName : ''}`}
                          </CardTitle>
                          <CardSubtitle
                            className="mb-2 text-muted fs-6"
                          >
                            {`${value.Modality ? value.Modality : ''}`}
                          </CardSubtitle>
                          <CardText className="d-flex flex-column">
                            {/* <p style={{ fontSize: '8pt' }}>Tanggal Upload: {`${value.Created_At ? value.Created_At : ''}`}</p> */}
                            <p style={{ fontSize: '8pt' }}>Tanggal Upload: {`${DateTimeConverter.convertToDateTime(value.Created_At)}` }</p>
                            <p style={{ fontSize: '8pt' }}>Perawat: {`${value.OperatorsName ? value.OperatorsName : ''}`}</p>
                            <p style={{ fontSize: '8pt' }}>Dokter: {`${value.ReferringPhysicianName ? value.ReferringPhysicianName : ''}`}</p>
                            <p style={{ fontSize: '8pt' }}>Catatan: {`${value.SeriesDescription ? value.SeriesDescription : ''}`}</p>
                          </CardText>
                        </CardBody>
                        <CardBody className="d-flex flex-column">
                          <Row>
                            <Col>
                              <Button style={{ width: '90px' }} className='mb-2' size="sm" color="danger" type="button" onClick={() => toggleOpen(value.SOPInstanceUID)}>
                                Hapus
                              </Button>
                            </Col>
                            <Col>
                              {
                                processOri && processOri.key === `${key}` && processOri.processing ? (
                                  <Button size="sm" type="button" disabled color="secondary">
                                    { 'Processing' }
                                    {
                                      <Spinner
                                        color="light"
                                        style={{ width: '1rem', height: '1rem' }}
                                      />
                                    }
                                  </Button>
                                ) : (
                                  <Button
                                    style={{ width: '90px' }}
                                    className='mb-2'
                                    size="sm"
                                    color="secondary"
                                    type="button"
                                    disabled={!!(value && value.Original)}
                                    onClick={() => handleGenerateOriginal(value, dicom.EMR_ID, `${key}`, treatment.Pasien.NIK)}
                                  >
                                    Original
                                  </Button>
                                )
                              }
                            </Col>
                          </Row>
                          <a color="primary" target="_blank" rel='noreferrer' href={value.Viewer ? value.Viewer : '#'}>
                            <Button size='sm' color="primary">
                              Tampilkan di OHIF Viewer
                            </Button>
                          </a>
                          <Row className="mt-2">
                            <Col>
                              <div>
                                {
                                  processing ? (
                                    <Button size="sm" type="button" disabled color="info">
                                      { 'Processing' }
                                      {
                                        <Spinner
                                          color="light"
                                          style={{ width: '1rem', height: '1rem' }}
                                        />
                                      }
                                    </Button>
                                  ) : (
                                    <Button size="sm" type="button" color="info" onClick={() => generatePdf(value, dicom)}>Buat PDF</Button>
                                  )
                                }
                              </div>
                            </Col>
                            <Col>
                              <div>
                                {
                                  value.PDF && <a href={value.PDF} target="_blank" rel="noreferrer">
                                    <Button size='sm' color="success">
                                      Cetak
                                    </Button>
                                  </a>
                                }
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    ))}
                  </div>
                </AccordionBody>
              </AccordionItem>
            ))}
          </Accordion>
        </Col>
      </Row>
      <ConfirmModal
        isOpen={showModal}
        toggle={toggleClose}
        header='Delete Dicom File'
        onButtonClose={() => {
          toggleClose();
        }}
        onButtonClick={() => {
          handleDeleteDicom(dicomId)
          toggleClose();
        }}
        body={`Apakah anda yakin ingin menghapus file dicom ini?`}
      />
      <Modal isOpen={!!openZoom} className="modal-fullscreen">
        <ModalHeader toggle={() => setOpenZoom(undefined)}></ModalHeader>
        <ModalBody>
          {
            openZoom && (
              <Image
                className="mt-1"
                alt={openZoom && openZoom.SOPInstanceUID ? openZoom.SOPInstanceUID : ''}
                src={openZoom && openZoom.image ? openZoom.image : ''}
                layout='fill'
                objectFit="contain"
              />
            )
          }
        </ModalBody>
      </Modal>
    </>
  )
}

export default InspectionResult;
