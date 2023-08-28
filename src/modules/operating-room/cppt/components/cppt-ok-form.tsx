import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, ListGroup, ListGroupItem, Row, Table } from 'reactstrap';
import { Fragment, useCallback, useEffect, useState } from 'react';
import BaseSelect from 'react-select';
import FixRequiredSelect from '@src/shared/input/components/FixRequiredSelect';
import { Signature } from '@shared/signature/components';
import { SubmitButton } from '@shared/button';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { SignatureModel } from '@shared/signature/models/signature.model';
import { useAppSelector } from '@hooks/useAppSelector';
import { AppRequest } from '@shared/request';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { CreateCpptRoRequest } from '@modules/ro/cppt/requests';
import { EyeImage } from '@shared/eye-image/components';
import { RetinaImage } from '@shared/retina-image/components';
import { fetchCpptOkDayPdf, fetchCpptOkPdf, handlePdf, handlePdfAll } from '@modules/operating-room/cppt/stores/cppt-ok.store';
import { CreateCpptOkRequest, ICreateCpptOkRequest } from '@modules/operating-room/cppt/requests/create-cppt-ok.request';
import { CpptOkService } from '@modules/operating-room/cppt/services';
import { UpdateCpptOkRequest } from '@modules/operating-room/cppt/requests/update-cppt-ok.request';
import { DownloadCloud, FileText, Plus, Trash, X } from 'react-feather';
import { DoctorPreliminaryStudyModel, HowToUse, IDaftarTebus, IPrescription, Medicine } from '@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model';
import { ArrayPrescription } from '@src/modules/outpatient/doctor-preliminary-study/requests/update-doctor-preliminary-study.request';
import { useWarnIfUnsavedChanges } from '@src/shared/alert';
import { useDropzone } from 'react-dropzone';
import { UploadToCloudService } from '@src/shared/upload-cloud-storage/services';
import Image from 'next/image';
import { CPPTPDFRequest, RootPDFRequest } from '@src/shared/request/requests/cppt-pdf.request';
import { FindPdfRequest } from '@src/shared/pdf';
import { MedsPackage } from '@src/shared/meds-package/components';

import { Slide, toast } from 'react-toastify';
import { PrescriptionToast } from '@src/shared/alert/components';

const CpptOkForm = (props: { doctorPreliminaryStudy: DoctorPreliminaryStudyModel, cpptOk?: any, onSuccessSubmit?: any, onCancel?: any, action?: any, copy?: boolean }) => {


  const router = useRouter();
  const dispatch = useAppDispatch();

  const { doctors } = useAppSelector(state => state.doctor);
  const { cpptOk, onSuccessSubmit, doctorPreliminaryStudy, onCancel, action, copy } = props;
  const [processing, setProcessing] = useState(false);
  const { treatment } = useAppSelector(state => state.patient);

  const [files, setFiles] = useState<any>([])
  const [showEye, setShowEye] = useState<boolean>(false);
  const [showRetina, setShowRetina] = useState<boolean>(false);
  const [recipe, setRecipe] = useState<any>(cpptOk && cpptOk.Resep ? cpptOk.Resep : []);
  const [signatureErr, setSignatureErr] = useState({ error: false, message: '' });
  const [datasErr, setDatasErr] = useState({ error: false, message: '' });
  const [dataoErr, setDataoErr] = useState({ error: false, message: '' });
  const [dataAErr, setDataAErr] = useState({ error: false, message: '' });
  const [datapErr, setDatapErr] = useState({ error: false, message: '' });
  const [timeErr, setTimeErr] = useState({ error: false, message: '' });

  const convertDatetimeToUTC = (date?: any) => {
    const d = date ? new Date(date) : new Date();
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}T${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }

  useEffect(() => {
    if (!showEye) {
      setValue('gambar_mata_od', undefined);
      setValue('gambar_mata_os', undefined);
    }
  }, [showEye]);

  useEffect(() => {
    if (!showRetina) {
      setValue('gambar_retina_od', undefined);
      setValue('gambar_retina_os', undefined);
    }
  }, [showRetina]);

  const { register, handleSubmit, errors, setValue, getValues, control, formState, reset } = useForm({
    mode: 'onChange',
    resolver: yupResolver(CreateCpptRoRequest.scheme()),
    defaultValues: {
      data_s: cpptOk?.Data_S ?? '',
      data_o: cpptOk?.Data_O ?? '',
      data_a: cpptOk?.Data_A ?? '',
      data_p: cpptOk?.Data_P ?? '',
      anjuran: cpptOk?.Anjuran ?? '',
      instruksi_ppa: cpptOk?.Instruksi_PPA ?? '',
      waktu: copy ? convertDatetimeToUTC() : cpptOk && cpptOk.Waktu ? cpptOk.Waktu : convertDatetimeToUTC(),
      id_perawat_cppt: cpptOk?.Id_Perawat_Cppt ?? '',
      ttd_perawat_cppt: cpptOk?.TTD_Perawat_Cppt ?? '',
      id_dokter_pengkaji: cpptOk?.Id_Dokter_Pengkaji ?? '',
      ttd_dokter_pengkaji: cpptOk?.TTD_Dokter_Pengkaji ?? '',
      retina_submit: cpptOk?.Submit_Retina ?? 0,
      eye_submit: cpptOk?.Submit_Mata ?? 0,
      picture_data_o: {
        Url_Image_Cppt_Data_O: cpptOk && cpptOk.Picture_Data_O && cpptOk.Picture_Data_O.Url_Image_Cppt_Data_O ? cpptOk.Picture_Data_O.Url_Image_Cppt_Data_O : '',
        Name_Image_Cppt_Data_O: cpptOk && cpptOk.Picture_Data_O && cpptOk.Picture_Data_O.Name_Image_Cppt_Data_O ? cpptOk.Picture_Data_O.Name_Image_Cppt_Data_O : '',
        Type_Image_Cppt_Data_O: cpptOk && cpptOk.Picture_Data_O && cpptOk.Picture_Data_O.Type_Image_Cppt_Data_O ? cpptOk.Picture_Data_O.Type_Image_Cppt_Data_O : '',
        Size_Image_Cppt_Data_O: cpptOk && cpptOk.Picture_Data_O && cpptOk.Picture_Data_O.Size_Image_Cppt_Data_O ? cpptOk.Picture_Data_O.Size_Image_Cppt_Data_O : '',
      },
    },
  });

  const { isDirty } = formState;

  useWarnIfUnsavedChanges(isDirty, () => {
    return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  })

  const { fields, append, remove, insert } = useFieldArray({ name: 'resep', control })


  useEffect(() => {
    if (cpptOk && cpptOk.Submit_Mata && cpptOk.Submit_Mata === 0) {
      setShowEye(false);
    } else if (cpptOk && cpptOk.Submit_Mata && cpptOk.Submit_Mata === 1) {
      setShowEye(true);
    }

    if (cpptOk && cpptOk.Submit_Retina && cpptOk.Submit_Retina === 0) {
      setShowRetina(false);
    } else if (cpptOk && cpptOk.Submit_Retina && cpptOk.Submit_Retina === 1) {
      setShowRetina(true);
    }
  }, [cpptOk])

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
          form_name: 'cppt/ok',
          component_id: 'picture_data_o',
          image: base64,
        }).then(response => {
          const { data } = response.data;
          const p = {
            Url_Image_Cppt_Data_O: data.signUrl,
            Name_Image_Cppt_Data_O: toUpload[0].name,
            Size_Image_Cppt_Data_O: toUpload[0].size,
            Type_Image_Cppt_Data_O: toUpload[0].type,
          }
          setValue('picture_data_o', p);
        })
      })
      setFiles(toUpload)
    }, [files])})

  const handleRemoveFile = (file: any) => {
    setFiles([]);
    const p = {
      Url_Image_Cppt_Data_O: '',
      Name_Image_Cppt_Data_O: '',
      Size_Image_Cppt_Data_O: '',
      Type_Image_Cppt_Data_O: '',
    }
    setValue('picture_data_o', p);
  }

  useEffect(() => {
    if (cpptOk && cpptOk.Picture_Data_O && cpptOk.Picture_Data_O.Url_Image_Cppt_Data_O && cpptOk.Picture_Data_O.Url_Image_Cppt_Data_O !== '') {
      setFiles([
        {
          name: `${cpptOk.Picture_Data_O.Name_Image_Cppt_Data_O}`,
          size: cpptOk.Picture_Data_O.Size_Image_Cppt_Data_O,
          url_real: cpptOk.Picture_Data_O.Url_Image_Cppt_Data_O,
        },
      ])
    }
  }, [cpptOk]);

  useEffect(() => {
    if (recipe && Array.isArray(recipe)) {
      const destructured = recipe.map((item: IPrescription) => {
        return {
          meds_name: item.ID_Obat,
          total: item.Jumlah,
          how_to_use: item.ID_AturanPakai,
          notes: item.Catatan,
          nama_obat: item.Nama_Obat,
          aturan_pakai: item.Kode_AturanPakai,
          satuan: item.Nama_Satuan,
        }
      })
      append(destructured, false);
    }
  }, [recipe])

  const handleAddMedsFromPackage = (items: Array<IPrescription>) => {
    const newRecipe = items.map((item: IPrescription) => {
      return {
        meds_name: item.ID_Obat,
        total: item.Jumlah,
        how_to_use: item.ID_AturanPakai,
        notes: item.Catatan,
        nama_obat: item.Nama_Obat,
        aturan_pakai: item.Kode_AturanPakai,
        satuan: item.Nama_Satuan,
      }
    })
    append(newRecipe);
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

  useEffect(() => {
    if (showRetina) {
      setValue('retina_submit', '1');
    } else if (!showRetina) {
      setValue('retina_submit', '0');
    }
  }, [showRetina])

  useEffect(() => {
    if (showEye) {
      setValue('eye_submit', '1');
    } else if (!showEye) {
      setValue('eye_submit', '0');
    }
  }, [showEye])


  const handleDeleteMed = (index: any) => {
    remove(index);
  }

  const handleAddMed = () => {
    append({ meds_name: '', total: '', how_to_use: '', notes: '', satuan: '' })
  }

  const handleChangeMed = (val: any, i: number) => {
    fields[i].satuan = val.satuan;
    insert(i, fields[i]);
    remove(i);
  }

  const handleDoctorSigned = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue('ttd_dokter_pengkaji', image.Signature);
      setValue('id_dokter_pengkaji', image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue('ttd_dokter_pengkaji', image.Signature);
      setValue('id_dokter_pengkaji', image.ID_Karyawan);
    }
  }

  const storeToastPrescription = (response: any) => {
    if (response && response.data && response.data.prescription) {
      const presc = response.data.prescription;
      if (!presc.statusCode && presc.message && presc.message === 'socket not found') {
        toast.error(
          <PrescriptionToast error={true} message='Resep gagal terkirim ke SIMRS. Silahkan simpan ulang form!!!'/>,
          { transition: Slide, icon: false, hideProgressBar: true, autoClose: 7000, position: toast.POSITION.TOP_CENTER, className: 'bg-danger' },
        )
      }
      if (presc.statusCode && presc.statusCode === 400) {
        toast.warning(
          <PrescriptionToast error={true} message='Resep gagal terkirim ke SIMRS. Resep sudah ditebus.'/>,
          { transition: Slide, icon: false, hideProgressBar: true, autoClose: 7000, position: toast.POSITION.TOP_CENTER, className: 'bg-warning' },
        )
      }
      if (presc.statusCode && presc.statusCode === 200) {
        toast.success(
          <PrescriptionToast error={false} message='Resep berhasil terkirim ke SIMRS.'/>,
          { transition: Slide, icon: false, hideProgressBar: true, autoClose: 7000, position: toast.POSITION.TOP_CENTER, className: 'bg-success' },
        )
      }
    }
  }

  const handleSubmitForm = (value: ICreateCpptOkRequest) => {
    setSignatureErr({ error: false, message: '' });
    setDatasErr({ error: false, message: '' });
    setDataoErr({ error: false, message: '' });
    setDataAErr({ error: false, message: '' });
    setDatapErr({ error: false, message: '' });
    setTimeErr({ error: false, message: '' });
    if (!treatment) {
      return;
    }
    if ((value.id_dokter_pengkaji === '' || value.data_s === '' || value.data_o === '' || value.data_a === '' || value.data_p === '' || value.anjuran || value.waktu === '')) {
      if (value.waktu === '') {
        setTimeErr({ error: true, message: 'Waktu harus diisi' });
        document.getElementById('waktu')?.focus()
        return;
      }
      if (value.data_s === '') {
        setDatasErr({ error: true, message: 'S harus diisi' });
        document.getElementById('data_s')?.focus()
        return;
      }
      if (value.data_o === '') {
        setDataoErr({ error: true, message: 'O harus diisi' });
        document.getElementById('data_o')?.focus()
        return;
      }
      if (value.data_a === '') {
        setDataAErr({ error: true, message: 'A harus diisi' });
        document.getElementById('data_a')?.focus()
        return;
      }
      if (value.data_p === '' && value.anjuran === '') {
        setDatapErr({ error: true, message: 'P harus diisi' });
        document.getElementById('data_p')?.focus()
        return;
      }
      if (value.id_dokter_pengkaji === '') {
        setSignatureErr({ error: true, message: 'Tanda tangan harus diisi' });
        return;
      }
    }
    setProcessing(true);
    reset(value)
    const appRequest = AppRequest.createFromStore(treatment);
    dispatch(handlePdf(undefined));
    if (!cpptOk) {
      const resep = value.resep;
      const prescriptionModel = ArrayPrescription.createFromForm(resep, doctorPreliminaryStudy?.aturan_pakai);
      const params = CreateCpptOkRequest.createFromJson({...value, ...appRequest, ...prescriptionModel, is_form_doctor: true });
      CpptOkService().create(params)
        .then((response: any) => {
          storeToastPrescription(response)
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
      const resep = value.resep;
      const prescriptionModel = ArrayPrescription.createFromForm(resep, doctorPreliminaryStudy?.aturan_pakai);
      const params = UpdateCpptOkRequest.createFromJson({...value, ...appRequest, ID: cpptOk.ID, ...prescriptionModel, is_form_doctor: true });
      CpptOkService().update(params)
        .then((response: any) => {
          storeToastPrescription(response)
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
          id="retina-submit"
          type="hidden"
          name="retina_submit"
          innerRef={register({ required: true })}
          invalid={errors.retina_submit && true} />
        <Input
          id='eye-submit'
          type='hidden'
          name='eye_submit'
          innerRef={register({ required: true })}
          invalid={errors.eye_submit && true}
        />
        <Input
          type='hidden'
          name='picture_data_o.Url_Image_Cppt_Data_O'
          innerRef={register({ required: true })}
        />
        <Input
          type='hidden'
          name='picture_data_o.Name_Image_Cppt_Data_O'
          innerRef={register({ required: true })}
        />
        <Input
          type='hidden'
          name='picture_data_o.Type_Image_Cppt_Data_O'
          innerRef={register({ required: true })}
        />
        <Input
          type='hidden'
          name='picture_data_o.Size_Image_Cppt_Data_O'
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
          </Col>
          {errors && errors.waktu && <FormFeedback>{errors.waktu.message}</FormFeedback>}
        </FormGroup>
        {
          timeErr && timeErr.error && (
            <Row>
              <Col md='2'></Col>
              <Col>
                <p style={{ fontSize: '10pt' }} className='text-danger'>{timeErr.message}</p>
              </Col>
            </Row>
          )
        }
        <FormGroup className="form-group" row>
          <Label md="2">S</Label>
          <Col>
            <Input
              type="textarea"
              id="data_s"
              name="data_s"
              innerRef={register({ required: true })}
              invalid={errors.data_s && true} />
            <Row>
              <div>
                {errors && errors.data_s && <FormFeedback>{errors.data_s.message}</FormFeedback>}
              </div>
            </Row>
          </Col>
          {
            datasErr && datasErr.error && (
              <Row>
                <Col md='2'></Col>
                <Col>
                  <p style={{ fontSize: '10pt' }} className='text-danger'>{datasErr.message}</p>
                </Col>
              </Row>
            )
          }
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">O</Label>
          <Col md="10">
            <Input
              type="textarea"
              id="data_o"
              name="data_o"
              innerRef={register({ required: true })}
              invalid={errors.data_o && true} />
          </Col>
          {
            dataoErr && dataoErr.error && (
              <Row>
                <Col md='2'></Col>
                <Col>
                  <p style={{ fontSize: '10pt' }} className='text-danger'>{dataoErr.message}</p>
                </Col>
              </Row>
            )
          }
          {errors && errors.data_o && <FormFeedback>{errors.data_o.message}</FormFeedback>}
        </FormGroup>
        <FormGroup className='form-group' row>
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
        </FormGroup>
        <FormGroup className="form-group">
          <Row>
            <Col md="2">

            </Col>
            <Col md="10">
              {
                showEye && (
                  <div className="d-flex justify-content-around">
                    <EyeImage onSaved={(image: any) => setValue('gambar_mata_od', image)} component="cppt_out_patient_left" formName="gambar_mata_od" initialImage={(cpptOk && cpptOk.Gambar_Mata_OD && cpptOk.Gambar_Mata_OD !== '') ? cpptOk.Gambar_Mata_OD : undefined} />
                    <EyeImage onSaved={(image: any) => setValue('gambar_mata_os', image)} component="cppt_out_patient_right" formName="gambar_mata_os" initialImage={(cpptOk && cpptOk.Gambar_Mata_OS && cpptOk.Gambar_Mata_OS !== '') ? cpptOk.Gambar_Mata_OS : undefined} />
                    <Input type="hidden" {...register('gambar_mata_od') as any} />
                    <Input type="hidden" {...register('gambar_mata_os') as any} />
                  </div>
                )
              }
              <Row>
                <Col>
                  {
                    !showEye && <Button type="button" color="primary" size='sm' onClick={() => setShowEye(true)}>+ Gambar Mata</Button>
                  }
                  {
                    showEye && <Button type="button" color="danger" size='sm' onClick={() => setShowEye(false)}>Hapus Gambar Mata</Button>
                  }
                </Col>
              </Row>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup className="form-group">
          <Row>
            <Col md="2">

            </Col>
            <Col md="10">
              {
                showRetina && (
                  <div className="d-flex justify-content-around">
                    <RetinaImage onSaved={(image: any) => setValue('gambar_retina_od', image)} type="right"  component="cppt_out_patient_retina_left" formName="gambar_retina_od" initialImage={(cpptOk && cpptOk.Gambar_Retina_OD && cpptOk.Gambar_Retina_OD !== '') ? cpptOk.Gambar_Retina_OD : undefined} />
                    <RetinaImage onSaved={(image: any) => setValue('gambar_retina_os', image)} type="left"  component="cppt_out_patient_retina_right" formName="gambar_retina_os" initialImage={(cpptOk && cpptOk.Gambar_Retina_OS && cpptOk.Gambar_Retina_OS !== '') ? cpptOk.Gambar_Retina_OS : undefined} />
                    <Input type="hidden" {...register('gambar_retina_od') as any}/>
                    <Input type="hidden" {...register('gambar_retina_os') as any} />
                  </div>
                )
              }
              <Row>
                <Col>
                  {
                    !showRetina && <Button type="button" color="primary" size='sm' onClick={() => setShowRetina(true)}>+ Gambar Retina</Button>
                  }
                  {
                    showRetina && <Button type="button" color="danger" size='sm' onClick={() => setShowRetina(false)}>Hapus Gambar Retina</Button>
                  }
                </Col>
              </Row>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">A</Label>
          <Col>
            <Input
              type="textarea"
              id="data_a"
              name="data_a"
              innerRef={register({ required: true })}
              invalid={errors.data_a && true} />
          </Col>
          {errors && errors.data_a && <FormFeedback>{errors.data_a.message}</FormFeedback>}
        </FormGroup>
        {
          dataAErr && dataAErr.error && (
            <Row>
              <Col md='2'></Col>
              <Col>
                <p style={{ fontSize: '10pt' }} className='text-danger'>{dataAErr.message}</p>
              </Col>
            </Row>
          )
        }
        <FormGroup className="form-group mt-2" row>
          <Label md="2">P</Label>
          <Col>
            <Input
              type="textarea"
              id="data_p"
              style={{ height: '110px' }}
              name="data_p"
              innerRef={register({ required: true })}
              invalid={errors.data_p && true} />
          </Col>
        </FormGroup>
        <FormGroup className="form-group mt-2" row>
          <Label md="2">Anjuran</Label>
          <Col>
            <Input
              type="textarea"
              id="anjuran"
              name="anjuran"
              innerRef={register({ required: true })}
              invalid={errors.anjuran && true} />
            {errors && errors.anjuran && <FormFeedback>{errors.anjuran.message}</FormFeedback>}
          </Col>
        </FormGroup>
        {
          datapErr && datapErr.error && (
            <Row>
              <Col md='2'></Col>
              <Col>
                <p style={{ fontSize: '10pt' }} className='text-danger'>{datapErr.message}</p>
              </Col>
            </Row>
          )
        }
        <FormGroup className='form-group' row>
          {
            doctorPreliminaryStudy && cpptOk && cpptOk.formFarmasi && cpptOk.formFarmasi.Status_Tebus && cpptOk.formFarmasi.Status_Tebus === '1' && !copy ? (
              <>
                <Table bordered style={{ width: '100%' }}>
                  <thead>
                    <tr style={{ textAlign: 'center' }}>
                      <td className='pt-0' style={{ width: '5%' }}><b>No</b></td>
                      <td className='pt-2' style={{ width: '40%' }}><b>{`Nama & Dosis`}</b></td>
                      <td className='pt-0'><b>Satuan</b></td>
                      <td className='pt-0' style={{ width: '50px' }}><b>Jumlah</b></td>
                      <td className='pt-2' style={{ width: '25%' }}><b>Aturan Pakai</b></td>
                      <td className='pt-2'style={{ width: '30%' }}><b>Catatan</b></td>
                      <td className='pt-0' style={{ width: '5%' }}></td>
                    </tr>
                  </thead>
                  <tbody>
                    {fields && fields.map((rec, i: number) => {
                      return (
                        <tr key={rec.id}>
                          <td>{`${i + 1}`}</td>
                          <td>
                            <Controller
                              control={control}
                              name={`resep[${i}].meds_name` as const}
                              defaultValue={{ label: rec.nama_obat, value: rec.meds_name }}
                              render={({ onChange, name, ref }) => (
                                <BaseSelect
                                  ref={ref}
                                  defaultValue={{ label: rec.nama_obat, value: rec.meds_name }}
                                  options={doctorPreliminaryStudy && doctorPreliminaryStudy?.obat.map((med: Medicine) => ({ label: med.Nama_Inventory, value: med.Kode_Inventory, satuan: med.Nama_Satuan }))}
                                  name={name}
                                  isDisabled
                                  onChange={(val) => {
                                    onChange(val);
                                    handleChangeMed(val, i);
                                  } } />
                              )} />
                          </td>
                          <td>
                            {rec.satuan}
                          </td>
                          <td>
                            <Input
                              type='number'
                              name={`resep[${i}].total` as const}
                              defaultValue={rec.total}
                              innerRef={register()}
                              style={{ width: '75px' }}
                              readOnly />
                          </td>
                          <td>
                            <Controller
                              control={control}
                              name={`resep[${i}].how_to_use` as const}
                              defaultValue={{ label: rec.aturan_pakai, value: rec.aturan_pakai, id: rec.how_to_use }}
                              render={({ onChange, name, ref }) => (
                                <BaseSelect
                                  ref={ref}
                                  defaultValue={{ label: rec.aturan_pakai, value: rec.aturan_pakai, id: rec.how_to_use }}
                                  options={doctorPreliminaryStudy && doctorPreliminaryStudy?.aturan_pakai.map((med: HowToUse) => ({ label: med.Kode, value: med.Kode, id: med.ID_AturanPakai }))}
                                  name={name}
                                  isDisabled
                                  onChange={(val: any) => {
                                    onChange(val);
                                  } } />
                              )} />
                          </td>
                          <td>
                            <Input
                              type='text'
                              name={`resep[${i}].notes` as const}
                              defaultValue={rec.notes}
                              readOnly
                              innerRef={register()} />
                          </td>
                          <td>
                            <Button style={{ padding: '4px' }} color='danger' type='button' disabled>
                              <Trash size={15} />
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table></>
            ) : (
              <Table bordered style={{ width: '100%' }}>
                <thead>
                  <tr style={{ textAlign: 'center' }}>
                    <td className='pt-0' style={{ width: '5%' }}><b>No</b></td>
                    <td className='pt-2' style={{ width: '40%' }}><b>{`Nama & Dosis`}</b></td>
                    <td className='pt-0'><b>Satuan</b></td>
                    <td className='pt-0' style={{ width: '50px' }}><b>Jumlah</b></td>
                    <td className='pt-2' style={{ width: '25%' }}><b>Aturan Pakai</b></td>
                    <td className='pt-2'style={{ width: '30%' }}><b>Catatan</b></td>
                    <td className='pt-0' style={{ width: '5%' }}></td>
                  </tr>
                </thead>
                <tbody>
                  {
                    fields && fields.map((rec, i: number) => {
                      return (
                        <tr key={rec.id}>
                          <td className='pt-0'>{`${i + 1}`}</td>
                          <td className='pt-2'>
                            <Controller
                              control={control}
                              name={`resep[${i}].meds_name`}
                              defaultValue={{ label: rec.nama_obat, value: rec.meds_name }}
                              render={({ onChange, name, ref }) => (
                                <Fragment>
                                  <FixRequiredSelect
                                    {...props}
                                    required={true}
                                    name={name}
                                    defaultValue={{ label: rec.nama_obat, value: rec.meds_name }}
                                    onChange={(val: any) => {
                                      onChange(val);
                                      handleChangeMed(val, i);
                                    }}
                                    SelectComponent={BaseSelect}
                                    options={doctorPreliminaryStudy && doctorPreliminaryStudy?.obat.map((med: Medicine) => ({ label: med.Nama_Inventory, value: med.Kode_Inventory, satuan: med.Nama_Satuan }))}
                                  />
                                </Fragment>
                              )}
                            />
                          </td>
                          <td className='pt-0'>
                            {
                              rec.satuan
                            }
                          </td>
                          <td className='pt-0'>
                            <Input
                              type='number'
                              name={`resep[${i}].total`}
                              defaultValue={rec.total}
                              innerRef={register()}
                              style={{ width: '100px', marginLeft: '5%' }}
                              required
                            />
                          </td>
                          <td className='pt-2'>
                            <Controller
                              control={control}
                              name={`resep[${i}].how_to_use`}
                              defaultValue={{ label: rec.aturan_pakai, value: rec.aturan_pakai, id: rec.how_to_use }}
                              render={({ onChange, name, ref }) => (
                                <Fragment>
                                  <FixRequiredSelect
                                    {...props}
                                    required={true}
                                    name={name}
                                    defaultValue={{ label: rec.aturan_pakai, value: rec.aturan_pakai, id: rec.how_to_use }}
                                    onChange={(val: any) => {
                                      onChange(val);
                                    }}
                                    SelectComponent={BaseSelect}
                                    options={doctorPreliminaryStudy && doctorPreliminaryStudy.aturan_pakai.map((med: HowToUse) => ({ label: med.Kode, value: med.Kode, id: med.ID_AturanPakai }))}
                                  />
                                </Fragment>
                              )}
                            />
                          </td>
                          <td className='pt-0'>
                            <Input
                              type='text'
                              name={`resep[${i}].notes`}
                              defaultValue={rec.notes}
                              innerRef={register()}
                            />
                          </td>
                          <td>
                            <Button style={{ padding: '4px' }} color='danger' type='button' onClick={ () => handleDeleteMed(i)}>
                              <Trash size={15} />
                            </Button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </Table>
            )
          }
        </FormGroup>
        <FormGroup>
          {
            cpptOk && cpptOk.formFarmasi && cpptOk.formFarmasi.Status_Tebus && cpptOk.formFarmasi.Status_Tebus === '1' && !copy ? (
              <>
                <Button style={{ padding: '4px', marginTop: '8px' }} color='primary' type='button' className='me-1' disabled>
                  <Plus size={15} />
                  Tambah Obat
                </Button>
                <MedsPackage
                  disabled
                  data={doctorPreliminaryStudy.paket_obat ? doctorPreliminaryStudy.paket_obat : undefined}
                  allMeds={doctorPreliminaryStudy.obat ? doctorPreliminaryStudy.obat : undefined}
                  allHtu={doctorPreliminaryStudy.aturan_pakai ? doctorPreliminaryStudy.aturan_pakai : undefined}
                  onSelectPackage={(selected: any) => handleAddMedsFromPackage(selected)}
                />
              </>
            ) : (
              <>
                <Button style={{ padding: '4px', marginTop: '8px' }} color='primary' type='button' className='me-1' onClick={() => handleAddMed()}>
                  <Plus size={15} />
                  Tambah Obat
                </Button>
                <MedsPackage
                  data={doctorPreliminaryStudy.paket_obat ? doctorPreliminaryStudy.paket_obat : undefined}
                  allMeds={doctorPreliminaryStudy.obat ? doctorPreliminaryStudy.obat : undefined}
                  allHtu={doctorPreliminaryStudy.aturan_pakai ? doctorPreliminaryStudy.aturan_pakai : undefined}
                  onSelectPackage={(selected: any) => handleAddMedsFromPackage(selected)}
                />
              </>
            )
          }
        </FormGroup>
        <FormGroup>
          {
            cpptOk && cpptOk.formFarmasi && cpptOk.formFarmasi.Status_Tebus && cpptOk.formFarmasi.Status_Tebus === '1' && (
              <>
                <Label className='text-danger mt-2'>
                  *Resep yang sudah ditebus
                </Label>
                <Table bordered style={{ width: '100%' }}>
                  <thead>
                    <tr style={{ textAlign: 'center' }}>
                      <td className='pt-0' style={{ width: '5%' }}><b>No</b></td>
                      <td className='pt-2' style={{ width: '40%' }}><b>{`Nama & Dosis`}</b></td>
                      <td className='pt-0'><b>Satuan</b></td>
                      <td className='pt-0' style={{ width: '50px' }}><b>Jumlah</b></td>
                      <td className='pt-2' style={{ width: '25%' }}><b>Aturan Pakai</b></td>
                      <td className='pt-2'style={{ width: '30%' }}><b>Catatan</b></td>
                    </tr>
                  </thead>
                  <tbody>
                    {cpptOk && cpptOk.formFarmasi && cpptOk.formFarmasi.Daftar_Tebus && Array.isArray(cpptOk.formFarmasi.Daftar_Tebus) && cpptOk.formFarmasi.Daftar_Tebus.length > 0 && cpptOk.formFarmasi.Daftar_Tebus.map((item: IDaftarTebus, key: number) => (
                      <tr key={key}>
                        <td>{`${key + 1}`}</td>
                        <td>{item.Nama_Obat}</td>
                        <td>{item.Nama_Satuan}</td>
                        <td>{item.Jumlah}</td>
                        <td>{item.Kode_AturanPakai}</td>
                        <td>{item.Catatan}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table></>
            )
          }
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md="2">Instruksi PPA</Label>
          <Col>
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
            label="Dokter"
            type="picker"
            unit='dokter'
            persons={doctors}
            initialImage={(cpptOk && cpptOk.TTD_Dokter_Pengkaji && cpptOk.TTD_Dokter_Pengkaji !== '') ? cpptOk.TTD_Dokter_Pengkaji : undefined}
            additionalLabel={(cpptOk) ? cpptOk.Nama_Dokter_Pengkaji : undefined}
            onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
              if (isFormDoctor) {
                handleDoctorSigned(assigner, isFormDoctor)
              }
              if (!isFormDoctor) {
                handleDoctorSigned(assigner)
              }
            }} />
          <Input
            type="hidden"
            name="id_dokter_pengkaji"
            innerRef={register({ required: true })}
            invalid={errors.id_dokter_pengkaji && true} />
          <Input
            type="hidden"
            name="ttd_dokter_pengkaji"
            innerRef={register({ required: true })}
            invalid={errors.ttd_dokter_pengkaji && true} />
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

export default CpptOkForm;
