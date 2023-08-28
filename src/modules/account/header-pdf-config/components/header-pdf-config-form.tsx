import { Button, Col, Form, FormGroup, Input, Label, ListGroup, ListGroupItem, Progress } from "reactstrap";
import { DownloadCloud, FileText, X } from "react-feather";
import { Fragment, useCallback, useEffect, useState } from "react";
import { IUpdateHeaderPdfConfigRequest, UpdateHeaderPdfConfigRequest } from "../requests";
import Compressor from "compressorjs";
import { HeaderPdfConfigService } from "../services";
import { IHeaderPdfConfigModel } from "../models/header-pdf-config.model";
import Image from 'next/image';
import { SubmitButton } from "@src/shared/button";
import { UploadToCloudService } from "@src/shared/upload-cloud-storage/services";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";

const HeaderPdfConfigForm = (props: { data: IHeaderPdfConfigModel }) => {
  const { data } = props;
  const { treatment } = useAppSelector(state => state.patient);
  const { companyCode } = useAppSelector(state => state.selectCompany);
  const dispatch = useAppDispatch();

  const [files, setFiles] = useState<any>([])
  const [inProgress, setInProgress] = useState<any>(undefined);
  const [processing, setProcessing] = useState<boolean>(false);

  useEffect(() => {
    if (data && data.logo_url) {
      setFiles([
        {
          name: `${data.logo_name ?? ''}`,
          size: data.logo_size,
          url_real: data.logo_url,
        },
      ])
    }
  }, [data]);

  const { register, setValue, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      company_code: companyCode ?? '',
      logo_url: data.logo_url ?? '',
      logo_name: data.logo_name ?? '',
      logo_size: data.logo_size ?? '',
      logo_type: data.logo_type ?? '',
      text_1: data.text_1 ?? '',
      text_2: data.text_2 ?? '',
      text_3: data.text_3 ?? '',
    },
  });

  const toBase64 = (file: any) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  })

  const { getRootProps, getInputProps } = useDropzone({ multiple: false,
    accept: 'image/jpg,image/jpeg,image/png',
    onDrop: useCallback(acceptedFiles => {
      const toUpload = acceptedFiles.map((file: any) => Object.assign(file));
      setInProgress({ value: 10, label: 'Compressing image', percentage: '10%' })
      new Compressor(toUpload[0], {
        quality: 0.8,
        async success(res: any) {
          setInProgress({ value: 50, label: 'Uploading image', percentage: '50%' })
          setValue('logo_name', res.name);
          setValue('logo_type', res.type);
          setValue('logo_size', res.size);
          toBase64(res).then((base64: any) => {
            if (!companyCode) return;
            UploadToCloudService().uploadImage({
              company_code: companyCode,
              component_id: 'image_logo',
              image: base64,
            }).then(response => {
              const { signUrl } = response.data;
              setValue('logo_url', signUrl)
              setInProgress({ value: 100, label: 'Image uploaded', percentage: '100%' })
              setTimeout(() => setInProgress(undefined), 3000);
            })
          })
        },
        error(err) {
          console.log(err);
        },
      });
      setFiles(toUpload)
    }, [files])})

  const handleRemoveFile = (file: any) => {
    setFiles([]);
    setValue('logo_name', '');
    setValue('logo_type', '');
    setValue('logo_size', '');
    setValue('logo_url', '');
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

  const fileList = files.map((file: any, index: any) => (
    <>
      <ListGroupItem key={`${file.name}-${index}`} className='d-flex align-items-center justify-content-between'>
        <div className='file-details d-flex align-items-center'>
          <div className='file-preview me-1'>{renderFilePreview(file)}</div>
          <div>
            <p className='file-name mb-0'>{file.name}</p>
            <p className='file-size mb-0'>{renderFileSize(file.size)}</p>
          </div>
        </div>
        <Button color='danger' outline size='sm' className='btn-icon' onClick={() => handleRemoveFile(file)}>
          <X size={14} color='red'/>
        </Button>
      </ListGroupItem>
      {
        inProgress ? (
          <div style={{ width: '100%' }} className='d-flex flex-column justify-content-center align-items-center mt-1'>
            <Label>{inProgress.label}</Label>
            <Progress
              value={inProgress.value}
              max={100}
              bar
              striped
              animated
            >
              {inProgress.percentage}
            </Progress>
          </div>
        ) : (
          null
        )
      }
    </>
  ));

  const handleSubmitForm = (value: IUpdateHeaderPdfConfigRequest) => {
    if (!companyCode) {
      return;
    }
    setProcessing(true)
    const params = UpdateHeaderPdfConfigRequest.createFromJson(value);
    HeaderPdfConfigService().insert(params)
      .then(() => {
        setProcessing(false)
      })
      .catch((err) => {
        setProcessing(false)
        console.error(err)
      })
  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <Input
          type="hidden"
          name="company_code"
          innerRef={register()}
        />
        <Input
          type="hidden"
          name="logo_url"
          innerRef={register()}
        />
        <Input
          type="hidden"
          name="logo_name"
          innerRef={register()}
        />
        <Input
          type="hidden"
          name="logo_size"
          innerRef={register()}
        />
        <Input
          type="hidden"
          name="logo_type"
          innerRef={register()}
        />
        <FormGroup className="form-group my-1" row>
          <Col md='2' className="d-flex align-items-center">
            <Label>Logo Image</Label>
          </Col>
          <Col xxl='8'>
            <div {...getRootProps()} className="dropzone my-3">
              <input name="logo" placeholder='Logo'  {...getInputProps()} />
              <div className="d-flex align-items-center justify-content-center flex-column">
                <DownloadCloud size="50" />
                <h5>Drop Files here or click to upload</h5>
                <p className="text-secondary">
                  Drop Files here or click browse through your machine
                </p>
              </div>
            </div>
            {
              files.length ? (
                <Fragment>
                  <ListGroup className='my-2'>{fileList[0]}</ListGroup>
                </Fragment>
              ) : null
            }
          </Col>
        </FormGroup>
        <FormGroup className="form-group my-1" row>
          <Col md='2'>
            <Label>Text (First Line)</Label>
          </Col>
          <Col xxl='8'>
            <Input
              type="text"
              name="text_1"
              innerRef={register()}
            />
          </Col>
        </FormGroup>
        <FormGroup className="form-group my-1" row>
          <Col md='2'>
            <Label>Text (Second Line)</Label>
          </Col>
          <Col xxl='8'>
            <Input
              type="text"
              name="text_2"
              innerRef={register()}
            />
          </Col>
        </FormGroup>
        <FormGroup className="form-group my-1" row>
          <Col md='2'>
            <Label>Text (Third Line)</Label>
          </Col>
          <Col xxl='8'>
            <Input
              type="text"
              name="text_3"
              innerRef={register()}
            />
          </Col>
        </FormGroup>
        <FormGroup className="form-group my-1" row>
          <Col className="text-center">
            <SubmitButton
              label="Simpan"
              buttonColor='primary'
              spinnerStyle={{ width: '1rem', height: '1rem' }}
              spinnerColor='light'
              processing={processing}
            />
          </Col>
        </FormGroup>
      </Form>
    </Fragment>
  )

}

export default HeaderPdfConfigForm;
