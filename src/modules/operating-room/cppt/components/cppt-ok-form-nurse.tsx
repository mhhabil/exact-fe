import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, ListGroup, ListGroupItem, Row } from 'reactstrap';
import {
  CreateCpptOkNurseRequest,
  ICreateCpptOkNurseRequest,
} from '@modules/operating-room/cppt/requests/create-cppt-ok-nurse.request';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { AppRequest } from '@shared/request';
import { CpptOkService } from '@modules/operating-room/cppt/services';
import { Signature } from '@shared/signature/components';
import { SignatureModel } from '@shared/signature/models/signature.model';
import { SubmitButton } from '@shared/button';
import { UpdateCpptOkNurseRequest } from '@modules/operating-room/cppt/requests/update-cppt-ok-nurse.request';
import { fetchCpptOkDayPdf, fetchCpptOkPdf, handlePdf, handlePdfAll } from '@modules/operating-room/cppt/stores/cppt-ok.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { ErrorMessage } from '@hookform/error-message';
import { useWarnIfUnsavedChanges } from '@src/shared/alert';
import { DoctorPreliminaryStudyModel } from '@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model';
import { CPPTPDFRequest, RootPDFRequest } from '@src/shared/request/requests/cppt-pdf.request';
import { FindPdfRequest } from '@src/shared/pdf';
import { useDropzone } from 'react-dropzone';
import { UploadToCloudService } from '@src/shared/upload-cloud-storage/services';
import Image from 'next/image';
import { DownloadCloud, FileText, X } from 'react-feather';
import Compressor from 'compressorjs';

const CpptOkFormNurse = (props: { doctorPreliminaryStudy?: DoctorPreliminaryStudyModel, cpptOk?: any, onSuccessSubmit?: any, onCancel?: any, action?: any }) => {

  const { officers } = useAppSelector(state => state.officer);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const { cpptOk, onSuccessSubmit, onCancel, action, doctorPreliminaryStudy } = props;
  const [processing, setProcessing] = useState(false);
  const [files, setFiles] = useState<any>([])
  const { treatment } = useAppSelector(state => state.patient);
  const [signatureErr, setSignatureErr] = useState({ error: false, message: '' });

  const convertDatetimeToUTC = (date?: any) => {
    const d = date ? new Date(date) : new Date();
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}T${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }

  const { register, handleSubmit, errors, setValue, formState, reset } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    shouldFocusError: true,
    resolver: yupResolver(CreateCpptOkNurseRequest.scheme()),
    defaultValues: {
      data_s: cpptOk?.Data_S ?? '',
      data_o: cpptOk?.Data_O ?? '',
      data_a: cpptOk?.Data_A ?? '',
      data_p: cpptOk?.Data_P ?? 'Kolaborasi dengan Dokter',
      instruksi_ppa: cpptOk?.Instruksi_PPA ?? '',
      waktu: cpptOk?.Waktu ?? convertDatetimeToUTC(),
      id_perawat_cppt: cpptOk?.Id_Perawat_Cppt ?? '',
      ttd_perawat_cppt: cpptOk?.TTD_Perawat_Cppt ?? '',
      picture: {
        Url_Image_Cppt_Ok: cpptOk && cpptOk.Picture && cpptOk.Picture.Url_Image_Cppt_Ok ? cpptOk.Picture.Url_Image_Cppt_Ok : '',
        Name_Image_Cppt_Ok: cpptOk && cpptOk.Picture && cpptOk.Picture.Name_Image_Cppt_Ok ? cpptOk.Picture.Name_Image_Cppt_Ok : '',
        Type_Image_Cppt_Ok: cpptOk && cpptOk.Picture && cpptOk.Picture.Type_Image_Cppt_Ok ? cpptOk.Picture.Type_Image_Cppt_Ok : '',
        Size_Image_Cppt_Ok: cpptOk && cpptOk.Picture && cpptOk.Picture.Size_Image_Cppt_Ok ? cpptOk.Picture.Size_Image_Cppt_Ok : '',
      },
      // id_dokter_pengkaji: '',
      // ttd_dokter_pengkaji: '',
    },
  });

  const { isDirty } = formState;

  useWarnIfUnsavedChanges(isDirty, () => {
    return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  })

  const handleOfficerSigned = (image: SignatureModel) => {
    setValue('id_perawat_cppt', image.ID_Karyawan);
    setValue('ttd_perawat_cppt', image.Signature);
  }

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
      new Compressor(toUpload[0], {
        quality: 0.2,
        async success(res: any) {
          toBase64(res).then((base64: any) => {
            if (!treatment) return;
            UploadToCloudService().uploadImageCloud({
              emr_id: treatment.EMR_ID,
              form_name: 'cppt/ok',
              component_id: 'picture',
              image: base64,
            }).then(response => {
              const { data } = response.data;
              const p = {
                Url_Image_Cppt_Ok: data.signUrl,
                Name_Image_Cppt_Ok: toUpload[0].name,
                Size_Image_Cppt_Ok: toUpload[0].size,
                Type_Image_Cppt_Ok: toUpload[0].type,
              }
              setValue('picture', p);
            })
          })
        },
        error(err) {
          console.log(err);
        },
      })
      setFiles(toUpload)
    }, [files])})

  const handleRemoveFile = (file: any) => {
    setFiles([]);
    const p = {
      Url_Image_Cppt_Ok: '',
      Name_Image_Cppt_Ok: '',
      Size_Image_Cppt_Ok: '',
      Type_Image_Cppt_Ok: '',
    }
    setValue('picture', p);
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

  useEffect(() => {
    if (cpptOk && cpptOk.Picture && cpptOk.Picture.Url_Image_Cppt_Ok && cpptOk.Picture.Url_Image_Cppt_Ok !== '') {
      setFiles([
        {
          name: `${cpptOk.Picture.Name_Image_Cppt_Ok}`,
          size: cpptOk.Picture.Size_Image_Cppt_Ok,
          url_real: cpptOk.Picture.Url_Image_Cppt_Ok,
        },
      ])
    }
  }, [cpptOk]);

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

  const handleSubmitForm = (value: ICreateCpptOkNurseRequest) => {
    setSignatureErr({ error: false, message: '' });
    if (!treatment) {
      return false;
    }
    if ((value.id_perawat_cppt === '')) {
      if (value.id_perawat_cppt === '') {
        setSignatureErr({ error: true, message: 'Tanda Tangan harus diisi' });
      }
      return;
    }
    setProcessing(true);
    reset(value)
    const appRequest = AppRequest.createFromStore(treatment);
    dispatch(handlePdf(undefined));
    if (!cpptOk) {
      const params = CreateCpptOkNurseRequest.createFromJson({...value, ...appRequest });
      CpptOkService().createNurse(params)
        .then(() => {
          dispatch(handlePdfAll(undefined));
          dispatch(handlePdf(undefined));
          CpptOkService().show({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
            CpptOkService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptOkPdf(FindPdfRequest.createFromJson({
                emr_id: treatment.EMR_ID,
                form_name: 'cppt_v3',
              })))
            }).catch(() => {
              setProcessing(false);
            })
          });
          CpptOkService().showDay({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'day');
            CpptOkService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptOkDayPdf(FindPdfRequest.createFromJson({
                emr_id: treatment.EMR_ID,
                form_name: 'cppt_day_v3',
              })))
            }).catch(() => {
              setProcessing(false);
            })
          });
          if (onSuccessSubmit) {
            onSuccessSubmit();
          }
        });
    } else {
      const params = UpdateCpptOkNurseRequest.createFromJson({...value, ...appRequest, ID: cpptOk.ID });
      CpptOkService().updateNurse(params)
        .then(() => {
          dispatch(handlePdfAll(undefined));
          if (cpptOk.EMR_ID === treatment.EMR_ID) {
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
              }).catch(() => {
                setProcessing(false);
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
            }).catch(() => {
              setProcessing(false);
            })
          });
          if (onSuccessSubmit) {
            onSuccessSubmit();
          }
        });
    }
  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <Input
          type='hidden'
          name='picture.Url_Image_Cppt_Ok'
          innerRef={register({ required: true })}
        />
        <Input
          type='hidden'
          name='picture.Name_Image_Cppt_Ok'
          innerRef={register({ required: true })}
        />
        <Input
          type='hidden'
          name='picture.Type_Image_Cppt_Ok'
          innerRef={register({ required: true })}
        />
        <Input
          type='hidden'
          name='picture.Size_Image_Cppt_Ok'
          innerRef={register({ required: true })}
        />
        <FormGroup className="form-group" row>
          <Label md="2">Waktu</Label>
          <Col>
            <Input
              type="datetime-local"
              id="waktu"
              name="waktu"
              innerRef={register({ required: true })}
              invalid={errors.waktu && true} />
            <ErrorMessage
              errors={errors}
              name="waktu"
              render={({ messages }) => {
                return messages ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                )) : null;
              }}
            />
          </Col>
          {errors && errors.waktu && <FormFeedback>{errors.waktu.message}</FormFeedback>}
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">S</Label>
          <Col>
            <Input
              className="mb-1"
              type="textarea"
              id="data_s"
              name="data_s"
              innerRef={register({ required: true })}
              invalid={errors.data_s && true}>
            </Input>
            <ErrorMessage
              errors={errors}
              name="data_s"
              render={({ messages }) => {
                return messages ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                )) : null;
              }}
            />
          </Col>
          {errors && errors.data_s && <FormFeedback>{errors.data_s.message}</FormFeedback>}
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">O</Label>
          <Col>
            <Input
              type="textarea"
              id="data_o"
              name="data_o"
              innerRef={register({ required: true })}
              invalid={errors.data_o && true} />
            <ErrorMessage
              errors={errors}
              name="data_o"
              render={({ messages }) => {
                return messages ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                )) : null;
              }}
            />
          </Col>
          {errors && errors.data_o && <FormFeedback>{errors.data_o.message}</FormFeedback>}
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">A</Label>
          <Col>
            <Input
              className="mb-1"
              type="textarea"
              id="data_a"
              name="data_a"
              innerRef={register({ required: true })}
              invalid={errors.data_a && true}>
            </Input>
            <ErrorMessage
              errors={errors}
              name="data_a"
              render={({ messages }) => {
                return messages ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                )) : null;
              }}
            />
          </Col>
          {errors && errors.data_a && <FormFeedback>{errors.data_a.message}</FormFeedback>}
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">P</Label>
          <Col>
            <Input
              type="text"
              id="data_p"
              name="data_p"
              readOnly
              innerRef={register({ required: true })}
              invalid={errors.data_p && true} />
          </Col>
          {errors && errors.data_p && <FormFeedback>{errors.data_p.message}</FormFeedback>}
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">Instruksi PPA</Label>
          <Col>
            <div>
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
            </div>
            <Input
              type="textarea"
              id="instruksi_ppa"
              name="instruksi_ppa"
              innerRef={register({ required: true })}
              invalid={errors.instruksi_ppa && true} />
          </Col>
          {errors && errors.instruksi_ppa && <FormFeedback>{errors.instruksi_ppa.message}</FormFeedback>}
        </FormGroup>
        <div className="d-flex justify-content-around my-1">
          <Signature
            label="Perawat"
            type="picker"
            persons={officers}
            initialImage={(cpptOk) ? cpptOk.TTD_Perawat_Cppt : undefined}
            additionalLabel={(cpptOk) ? cpptOk.Nama_Perawat_Cppt : undefined}
            onSigned={(assigner: SignatureModel) => handleOfficerSigned(assigner)} />
          <Input
            type="hidden"
            name="id_perawat_cppt"
            innerRef={register({ required: true })}
            invalid={errors.id_perawat_cppt && true} />
          <Input
            type="hidden"
            name="ttd_perawat_cppt"
            innerRef={register({ required: true })}
            invalid={errors.ttd_perawat_cppt && true} />
        </div>
        {
          signatureErr && signatureErr.error && (
            <div className='text-center align-items-center justify-content-center'>
              <p style={{ fontSize: '10pt' }} className='text-danger'>{signatureErr.message}</p>
            </div>
          )
        }
        <FormGroup className="d-flex mb-0 justify-content-center">
          <SubmitButton
            buttonColor='primary'
            spinnerColor='light'
            processing={processing}
            label="Simpan"
            spinnerStyle={{ width: '1rem', height: '1rem' }}
          />
          <Button color="warning" type="button" onClick={() => {
            if (onCancel) {
              onCancel();
            }
          }}>Cancel</Button>
        </FormGroup>
      </Form>
    </Fragment>
  )
}

export default CpptOkFormNurse;
