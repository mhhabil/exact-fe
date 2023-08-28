import { Button, Col, FormGroup, Input, Label, ListGroup, ListGroupItem, Row } from "reactstrap";
import { DownloadCloud, FileText, X } from "react-feather";
import { Fragment, useCallback, useEffect, useState } from "react";
import { IConsultationSheetForm } from "../models/consultation-sheet.model";
import Image from 'next/image';
import { UploadToCloudService } from "@src/shared/upload-cloud-storage/services";
import getConfig from 'next/config';
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useDropzone } from "react-dropzone";

const ConsultationSheetUpload = (props: { data: IConsultationSheetForm, register: any, setValue: any }) => {
  const { data, register, setValue } = props;
  const { treatment } = useAppSelector(state => state.patient);
  const [files, setFiles] = useState<any>([]);

  const toBase64 = (file: any) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  })

  const { getRootProps: getFilesProps, getInputProps: getInputFilesProps } = useDropzone({ multiple: false,
    accept: 'image/jpg,image/jpeg',
    onDrop: useCallback(acceptedFiles => {
      const toUpload = acceptedFiles.map((file: any) => Object.assign(file));
      toBase64(toUpload[0]).then((base64: any) => {
        if (!treatment) return;
        UploadToCloudService().uploadImageCloud({
          emr_id: treatment.EMR_ID,
          form_name: 'rawat-jalan/lembar-konsultasi',
          component_id: 'surat-rujukan',
          image: base64,
        }).then(response => {
          const { data } = response.data;
          setValue('url_image_surat', data.signUrl);
          setValue('name_image_surat', toUpload[0].name);
          setValue('type_image_surat', toUpload[0].type);
          setValue('size_image_surat', toUpload[0].size);
        })
      })
      setFiles(toUpload)
    }, [files])})

  const handleRemoveFile = (file: any) => {
    setFiles([]);
    setValue('url_image_surat', '');
    setValue('name_image_surat', '');
    setValue('type_image_surat', '');
    setValue('size_image_surat', '');
  }

  useEffect(() => {
    if (data && data.Url_Image_Surat && data.Url_Image_Surat !== '') {
      setFiles([
        {
          name: `${data.Name_Image_Surat}`,
          size: data.Size_Image_Surat,
          url_real: data.Url_Image_Surat,
        },
      ])
    }
  }, [data]);

  const renderFilePreview = (file: any) => {
    if (file.url_real) {
      const { publicRuntimeConfig } = getConfig();
      return <Image className='rounded' alt={file.name} src={file.url_real} width='100' height='100' />
    } else if (file.type && file.type.startsWith('image')) {
      return <Image className='rounded' alt={file.name} src={URL.createObjectURL(file)} width='100' height='100' />
    } else {
      return <FileText size='28' />
    }
  }

  const renderFileSize = (size: any) => {
    if (Math.round(size / 100) / 10 > 1000) {
      return `${(Math.round(size / 100) / 10000).toFixed(1)} mb`
    } else {
      return `${(Math.round(size / 100) / 10).toFixed(1)} kb`
    }
  };

  const fileList = files.map((file: any, index: any) => (
    <ListGroupItem key={`${file.name}-${index}`} className='d-flex align-items-center justify-content-between'>
      <div className='file-details d-flex align-items-center'>
        <div className='file-preview me-1'>{renderFilePreview(file)}</div>
        <div>
          <p className='file-name mb-0'>{file.name}</p>
          <p className='file-size mb-0'>{renderFileSize(file.size)}</p>
        </div>
      </div>
      <Button color='danger' outline size='sm' className='btn-icon' onClick={() => handleRemoveFile(file)}>
        <X size={14} color='red' />
      </Button>
    </ListGroupItem>
  ));
  return (
    <div>
      <div className="border align-items-center my-1">
        <FormGroup row className="align-items-center ms-2">
          <Col sm='2'>
            <Label>Dari Rumah Sakit / Klinik</Label>
          </Col>
          <Col sm='5'>
            <Input
              type="textarea"
              name="rujukan_dari"
              innerRef={register({ required: false })}
            />
          </Col>
        </FormGroup>
        <FormGroup row className="align-items-center ms-2">
          <Col sm='2'>
            <Label>Keterangan</Label>
          </Col>
          <Col sm='5'>
            <Input
              type="textarea"
              name="keterangan"
              innerRef={register({ required: false })}
            />
          </Col>
        </FormGroup>
        <FormGroup row className="align-items-center ms-2">
          <Col sm='2'>
            <Label>Upload Surat</Label>
          </Col>
          <Col sm='5'>
            <div {...getFilesProps()} className="dropzone my-3">
              <input name="logo" placeholder='Logo'  {...getInputFilesProps()} />
              <div className="d-flex align-items-center justify-content-center flex-column">
                <DownloadCloud size="50" />
                <h5>Drop Files here or click to upload</h5>
                <p className="text-secondary">
                  Drop Files here or click browse through your machine
                </p>
              </div>
            </div>
            {files.length ? (
              <Fragment>
                <Row>
                  <Col md='2'></Col>
                  <Col md='10'>
                    <ListGroup className='my-2'>{fileList[0]}</ListGroup>
                  </Col>
                </Row>
              </Fragment>
            ) : null}
          </Col>
        </FormGroup>
      </div>
    </div>
  )
}

export default ConsultationSheetUpload;
