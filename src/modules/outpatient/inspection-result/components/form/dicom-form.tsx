import { Button,  Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row, Table } from 'reactstrap';
import { DateTimeInput, TextInput } from "@src/shared/input";
import { useEffect, useState } from "react";
import Image from 'next/image';
import ToolInspection from "@src/shared/tool-inspection/tool-inspection";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { IPdfModel } from '@src/shared/pdf';
import { AppRequest } from '@src/shared/request';
import { DicomsModel } from '../../models/dicom-result.model';

interface IOpenZoom {
  image: string;
  SOPInstanceUID: string;
}


const DicomForm = (props: { dicom: any, modality : string  }) => {
  const { dicom, modality } = props;

  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const [openZoom, setOpenZoom] = useState<IOpenZoom | undefined>(undefined);

  const handleZoomImage = (image: string, sop: string) => {
    setOpenZoom({ image, SOPInstanceUID: sop });
  }

  return (
    <>
      <div className="d-flex overflow-auto">
        {dicom && dicom.map((value: DicomsModel, key: number) => (
          <Card
            key={key}
          >
            {
              value && value.Thumbnail && value.Thumbnail !== '' && value.Modality === modality && (
                <CardBody className="d-flex flex-column" style={{ flexShrink: 2, border: '2px solid' }}>
                  <Image
                    className="img-thumbnail mt-1 cursor-pointer dicom-img-thumbnail"
                    alt={value.SOPInstanceUID ?? ''}
                    src={value.Thumbnail ? value.Thumbnail : ''}
                    onClick={() => {
                      if (value.Original) {
                        handleZoomImage(value.Original, value.SOPInstanceUID)
                      }
                    }}
                    height="150rem"
                    width="150rem"
                    objectFit="contain" />
                  <p className="mb-2 text-muted fs-6">{`${value.Modality ? value.Modality : ''}`}</p>
                  <p style={{ fontSize: '8pt' }}>Tanggal Upload: {`${value.Created_At ? value.Created_At : ''}`}</p>
                  <p style={{ fontSize: '8pt' }}>Perawat: {`${value.OperatorsName ? value.OperatorsName : ''}`}</p>
                  <p style={{ fontSize: '8pt' }}>Dokter: {`${value.ReferringPhysicianName ? value.ReferringPhysicianName : ''}`}</p>
                  <p style={{ fontSize: '8pt' }}>Catatan: {`${value.SeriesDescription ? value.SeriesDescription : ''}`}</p>
                  <a className="btn btn-primary btn-sm" color="primary" target="_blank" rel='noreferrer' href={value.Viewer ? value.Viewer : '#'}>
                      Tampilkan di OHIF Viewer
                  </a>
                </CardBody>
              )
            }

          </Card>
        ))}
      </div>
      <Modal isOpen={!!openZoom} className="modal-fullscreen">
        <ModalHeader toggle={() => setOpenZoom(undefined)}>{openZoom && openZoom.SOPInstanceUID ? openZoom.SOPInstanceUID : ''}</ModalHeader>
        <ModalBody>
          {
            openZoom && (
              <Image
                className="mt-1"
                alt={openZoom && openZoom.SOPInstanceUID ? openZoom.SOPInstanceUID : ''}
                src={openZoom && openZoom.image ? openZoom.image : ''}
                layout="fill"
                objectFit="contain"
              />
            )
          }
        </ModalBody>
      </Modal>
    </>
  )
}

export default DicomForm;
