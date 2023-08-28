import { Button, Col, Input, Label, ListGroup, ListGroupItem, Progress, Row } from "reactstrap";
import { DownloadCloud, FileText, X } from 'react-feather';
import { Fragment, useCallback, useEffect, useState } from "react";
import Compressor from 'compressorjs';
import Image from 'next/image';
import { InpatientMedicalNote } from "../models/inpatient-medical-note.model";
import { UploadToCloudService } from "@src/shared/upload-cloud-storage/services";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useDropzone } from "react-dropzone";

const UploadImages = (props: { setValue: any, register: any, errors: any, data: InpatientMedicalNote }) => {
  const { setValue, register, errors, data } = props;
  const { treatment } = useAppSelector(state => state.patient)
  const [files1, setFiles1] = useState<any>([]);
  const [files2, setFiles2] = useState<any>([]);
  const [inProgressImage1, setInProgressImage1] = useState<any>(undefined);
  const [inProgressImage2, setInProgressImage2] = useState<any>(undefined);

  useEffect(() => {
    if (data && data.form && data.form?.Image_1?.Url_Image) {
      setFiles1([
        {
          Url_Image: `${data.form?.Image_1?.Url_Image}`,
          Name_Image: data.form?.Image_1?.Name_Image,
          Type_Image: data.form?.Image_1?.Type_Image,
          Size_Image: data.form?.Image_1?.Size_Image,
        },
      ])
    }
    if (data && data.form && data.form?.Image_2?.Url_Image) {
      setFiles2([
        {
          Url_Image: `${data.form?.Image_2?.Url_Image}`,
          Name_Image: data.form?.Image_2?.Name_Image,
          Type_Image: data.form?.Image_2?.Type_Image,
          Size_Image: data.form?.Image_2?.Size_Image,
        },
      ])
    }
  }, [data]);

  const toBase64 = (file: any) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  })

  const { getRootProps: getFilesProps1, getInputProps: getInputFilesProps1 } = useDropzone({ multiple: false,
    accept: 'image/jpg,image/jpeg,image/png',
    onDrop: useCallback(acceptedFiles => {
      const toUpload = acceptedFiles.map((file: any) => Object.assign(file));
      setInProgressImage1({ value: 10, label: 'Compressing image', percentage: '10%' })
      new Compressor(toUpload[0], {
        quality: 0.2,
        async success(res: any) {
          setInProgressImage1({ value: 50, label: 'Uploading image', percentage: '50%' })
          toBase64(res).then((base64: any) => {
            if (!treatment) return;
            UploadToCloudService().uploadImageCloud({
              emr_id: treatment.EMR_ID,
              form_name: 'rawat-inap/catatan-medis-awal',
              component_id: 'image_catatan_medis_awal_1',
              image: base64,
            }).then(response => {
              const { data } = response.data;
              const p = {
                Url_Image: data.signUrl,
                Name_Image: toUpload[0].name,
                Size_Image: toUpload[0].size,
                Type_Image: toUpload[0].type,
              }
              setValue('image_1', p);
              setInProgressImage1({ value: 100, label: 'Image uploaded', percentage: '100%' })
              setTimeout(() => setInProgressImage1(undefined), 3000);
            })
          })

        },
        error(err) {
          console.log(err);
        },
      });
      setFiles1(toUpload)
    }, [files1])})

  const { getRootProps: getFilesProps2, getInputProps: getInputFilesProps2 } = useDropzone({ multiple: true,
    accept: 'image/jpg,image/jpeg,image/png',
    onDrop: useCallback(acceptedFiles => {
      const toUpload2 = acceptedFiles.map((file: any) => Object.assign(file));
      setInProgressImage2({ value: 10, label: 'Compressing image', percentage: '10%' })
      new Compressor(toUpload2[0], {
        quality: 0.2,
        async success(res: any) {
          setInProgressImage2({ value: 50, label: 'Uploading image', percentage: '50%' })
          toBase64(res).then((base64: any) => {
            if (!treatment) return;
            UploadToCloudService().uploadImageCloud({
              emr_id: treatment.EMR_ID,
              form_name: 'rawat-inap/catatan-medis-awal',
              component_id: 'image_catatan_medis_awal_2',
              image: base64,
            }).then(response => {
              const { data } = response.data;
              const z = {
                Url_Image: data.signUrl,
                Name_Image: toUpload2[0].name,
                Size_Image: toUpload2[0].size,
                Type_Image: toUpload2[0].type,
              }
              setValue('image_1', z);
              setInProgressImage2({ value: 100, label: 'Image uploaded', percentage: '100%' })
              setTimeout(() => setInProgressImage2(undefined), 3000);
            })
          })

        },
        error(err) {
          console.log(err);
        },
      });
      setFiles2(toUpload2)
    }, [files2])})

  const handleRemoveFile1 = () => {
    setFiles1([]);
    const x = {
      Url_Image: '',
      Name_Image: '',
      Size_Image: '',
      Type_Image: '',
    }
    setValue('image_1', x);
  }

  const handleRemoveFile2 = () => {
    setFiles2([]);
    const p = {
      Url_Image: '',
      Name_Image: '',
      Size_Image: '',
      Type_Image: '',
    }
    setValue('image_2', p);
  }

  const renderFilePreview = (file: any) => {
    if (file.url_real) {
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

  const fileList1 = files1.map((file: any, index: any) => (
    <>
      <ListGroupItem key={`${file.name}-${index}`} className='d-flex align-items-center justify-content-between'>
        <div className='file-details d-flex align-items-center'>
          <div className='file-preview me-1'>{renderFilePreview(file)}</div>
          <div>
            <p className='file-name mb-0'>{file.name}</p>
            <p className='file-size mb-0'>{renderFileSize(file.size)}</p>
          </div>
        </div>
        <Button color='danger' outline size='sm' className='btn-icon' onClick={() => handleRemoveFile1()}>
          <X size={14} color='red'/>
        </Button>
      </ListGroupItem>
      {
        inProgressImage1 ? (
          <div style={{ width: '100%' }} className='d-flex flex-column justify-content-center align-items-center mt-1'>
            <Label>{inProgressImage1.label}</Label>
            <Progress
              value={inProgressImage1.value}
              max={100}
              bar
              striped
              animated
            >
              {inProgressImage1.percentage}
            </Progress>
          </div>
        ) : (
          null
        )
      }
    </>
  ));

  const fileList2 = files2.map((file: any, index: any) => (
    <>
      <ListGroupItem key={`${file.Name_Image}-${index}`} className='d-flex align-items-center justify-content-between'>
        <div className='file-details d-flex align-items-center'>
          <div className='file-preview me-1'>{renderFilePreview(file)}</div>
          <div>
            <p className='file-name mb-0'>{file.Name_Image}</p>
            <p className='file-size mb-0'>{renderFileSize((file.Size_Image) ? file.Size_Image : file.size)}</p>
          </div>
        </div>
        <Button color='danger' outline size='sm' className='btn-icon' onClick={() => handleRemoveFile2()}>
          <X size={14} color='red'/>
        </Button>
      </ListGroupItem>
      {
        inProgressImage2 ? (
          <div style={{ width: '100%' }} className='d-flex flex-column justify-content-center align-items-center mt-1'>
            <Label>{inProgressImage2.label}</Label>
            <Progress
              value={inProgressImage2.value}
              max={100}
              bar
              striped
              animated
            >
              {inProgressImage2.percentage}
            </Progress>
          </div>
        ) : (
          null
        )
      }
    </>
  ));

  return (
    <Row className='my-4'>
      <Input
        id="image-1.Url_Image"
        type="hidden"
        name="image_1.Url_Image"
        innerRef={register()}
      />
      <Input
        id="image-1.Name_Image"
        type="hidden"
        name="image_1.Name_Image"
        innerRef={register()}
      />
      <Input
        id="image-1.Type_Image"
        type="hidden"
        name="image_1.Type_Image"
        innerRef={register()}
      />
      <Input
        id="image-1.Size_Image"
        type="hidden"
        name="image_1.Size_Image"
        innerRef={register()}
      />
      <Col>
        <div {...getFilesProps1()} className="dropzone my-3">
          <input name="logo" placeholder='Logo'  {...getInputFilesProps1()} />
          <div className="d-flex align-items-center justify-content-center flex-column">
            <DownloadCloud size="50" />
            <h5>Upload Image I</h5>
          </div>
        </div>
        {files1.length ? (
          <Fragment>
            <ListGroup className='my-2'>{fileList1[0]}</ListGroup>
          </Fragment>
        ) : null}
      </Col>
      <Col>
        <div {...getFilesProps2()} className="dropzone my-3">
          <input name="logo" placeholder='Logo'  {...getInputFilesProps2()} />
          <div className="d-flex align-items-center justify-content-center flex-column">
            <DownloadCloud size="50" />
            <h5>Upload Image II</h5>
          </div>
        </div>
        {files2.length ? (
          <Fragment>
            <ListGroup className='my-2'>{fileList2[0]}</ListGroup>
          </Fragment>
        ) : null}
      </Col>
      <Input
        id="image-2.Url_Image"
        type="hidden"
        name="image_2.Url_Image"
        innerRef={register()}
      />
      <Input
        id="image-2.Name_Image"
        type="hidden"
        name="image_2.Name_Image"
        innerRef={register()}
      />
      <Input
        id="image-2.Type_Image"
        type="hidden"
        name="image_2.Type_Image"
        innerRef={register()}
      />
      <Input
        id="image-2.Size_Image"
        type="hidden"
        name="image_2.Size_Image"
        innerRef={register()}
      />
    </Row>
  )
}

export default UploadImages;
