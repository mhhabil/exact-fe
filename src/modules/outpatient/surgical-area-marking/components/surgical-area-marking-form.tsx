import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { ISignatureModel, SignatureModel } from "@src/shared/signature/models/signature.model";
import { fetchSurgicalAreaMarking, fetchSurgicalAreaMarkingPdf, handlePdf } from "../stores/surgical-area-marking.store";
import { Fragment, useEffect, useState } from "react";
import { AppRequest } from "@src/shared/request";
import { BodyImage } from "@src/shared/body-image/components";
import { FindPdfRequest } from "@src/shared/pdf";
import { HeadImage } from "@src/shared/head-image/components";
import { IUpdateSurgicalAreaMarking } from "../requests";
import { PdfSurgicalAreaMarkingRequest } from "../requests/pdf-surgical-area-marking.request";
import { Signature } from "@src/shared/signature/components";
import { SubmitButton } from "@src/shared/button";
import { SurgicalAreaMarkingModel } from "../models/surgical-area-marking.model";
import { SurgicalAreaMarkingService } from "../services";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { Controller, useForm, useFieldArray } from "react-hook-form";
import FixRequiredSelect from "@src/shared/input/components/FixRequiredSelect";
import { IDoctorModel } from "@src/shared/doctor";
import Select from 'react-select';
import { DateTimeConverter } from "@src/shared/datetime-converter";

const SurgicalAreaMarkingForm = (props: { data: SurgicalAreaMarkingModel }) => {
  const { data } = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const { treatment } = useAppSelector(state => state.patient);
  const { userData } = useAppSelector(state => state.auth);
  const { pdf } = useAppSelector(state => state.surgicalAreaMarking);
  const [processing, setProcessing] = useState<boolean>(false)
  const [pdfData, setPdfData] = useState<any>(undefined);
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (treatment) {
      dispatch(fetchSurgicalAreaMarkingPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-jalan_penandaan-area-pembedahan' })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf]);

  const { register, setValue, handleSubmit, control, errors } = useForm({
    mode: 'onChange',
    defaultValues: {
      tanggal_operasi: (data && data.form && data.form.Tanggal_Operasi) ? data.form.Tanggal_Operasi.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      prosedur_operasi: data.form?.Prosedur_Operasi ?? data.paket_operasi,
      dokter_operasi: {label: data.form?.Dokter_Operasi_Nama ?? '', value: data.form?.Dokter_Operasi_Id ?? ''},
      'tanda-tangan-pasien': data.form?.Tanda_Tangan_Pasien ?? '',
      'ttd-dokter-pelaksana': data.form?.TTD_Dokter_Pelaksana ?? '',
      dokter_pelaksana: data.form?.Dokter_Pelaksana ?? '',
      'tanda-tangan-perawat': data.form?.Tanda_Tangan_Perawat ?? '',
      'id-perawat': data.form?.ID_Perawat ?? '',
      gambar_head: data.form?.Gambar_Head ?? '',
      gambar_body: data.form?.Gambar_Body ?? '',
    },
  })

  const handleImageBody = (image: string) => {
    setValue('gambar_body', image);
  }

  const handleImageHead = (image: string) => {
    setValue('gambar_head', image);
  }

  const handlePatientSigned = (image: string) => {
    setValue('tanda-tangan-pasien', image);
  }
  const handleDoctorSigned = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue('ttd-dokter-pelaksana', image.Signature);
      setValue('dokter_pelaksana', image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue('ttd-dokter-pelaksana', image.Signature);
      setValue('dokter_pelaksana', image.ID_Karyawan);
    }
  }

  const handleNurseSigned = (image: ISignatureModel) => {
    setValue('id-perawat', image.ID_Karyawan);
    setValue('tanda-tangan-perawat', image.Signature);
  }

  const handleSubmitForm = (value: IUpdateSurgicalAreaMarking) => {
    value = {...value, dokter_operasi:value.dokter_operasi.value}
    if (!treatment) {
      return;
    }
    setProcessing(true);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = { ...appRequest, ...value };
    dispatch(handlePdf(undefined));
    SurgicalAreaMarkingService().update(params)
      .then((resp: any) => {
        const { data } = resp.data;
        const paramsPdf = PdfSurgicalAreaMarkingRequest.createPdfRequest({ ...data, params, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest);
        SurgicalAreaMarkingService().pdfNew(paramsPdf)
          .then(() => {
            dispatch(fetchSurgicalAreaMarkingPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-jalan_penandaan-area-pembedahan' })));
          })
          .catch((err) => setProcessing(false));
        setProcessing(false)
        dispatch(fetchSurgicalAreaMarking(appRequest));
      })
      .catch((err: any) => {
        setProcessing(false)
      })
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="border-dark mt-2 p-1">
        <FormGroup className="form-group align-items-center" row>
          <Col md='2' className="align-items-center">
            <Label>Tanggal Operasi</Label>
          </Col>
          <Col md='4'>
            <Input
              type="datetime-local"
              id='tanggal_operasi'
              defaultValue='tanggal_operasi'
              name='tanggal_operasi'
              innerRef={register({ required: false })}
            />
          </Col>
        </FormGroup>
        <FormGroup className="form-group align-items-center mt-2" row>
          <Col md='2' className="align-items-center">
            <Label>Prosedur Operasi</Label>
          </Col>
          <Col md='4'>
            <Input
              type="text"
              id='prosedur_operasi'
              name='prosedur_operasi'
              innerRef={register({ required: false })}
            />
          </Col>
        </FormGroup>
        <FormGroup className="form-group align-items-center mt-2" row>
          {/* <Col md='2' className="align-items-center">
            <Label>Operator</Label>
          </Col> */}
          {/* <Col md='4'>
            <Input
              type="select"
              id='dokter_operasi'
              name='dokter_operasi'
              defaultValue={data.form && data.form.Dokter_Operasi_Id ? data.form.Dokter_Operasi_Id : ''}
              innerRef={register({ required: false })}
              invalid={errors.dokter_operasi && true}
            >
              <option value="" disabled>--</option>
              {
                doctors && Array.isArray(doctors) && doctors.map((item: any, key: number) => (
                  <option key={key} value={item.ID_Karyawan}>{item.Nama}</option>
                ))
              }
            </Input>
          </Col> */}
          <Col md='2'>
            <Label className="mb-2"> Operator</Label>
          </Col>
          <Col>
            <Controller
              control={control}
              name='dokter_operasi'
              defaultValue={{label: data.form?.Dokter_Operasi_Nama, value: data.form?.Dokter_Operasi_Id}}
              render={({ onChange, name, ref }) => (
                <Fragment>
                  <FixRequiredSelect
                    {...props}
                    required={true}
                    name='dokter_operasi'
                    // defaultValue={doctor}
                    defaultValue={{label: data.form?.Dokter_Operasi_Nama, value: data.form?.Dokter_Operasi_Id}}
                    onChange={(val: any) => {
                      onChange(val);
                    }}
                    SelectComponent={Select}
                    options={doctors && doctors.map((doctor: IDoctorModel) => ({ label: doctor.Nama, value: doctor.ID_Karyawan }))}
                  />
                </Fragment>
              )}
            />
          </Col>
        </FormGroup>
      </div>
      <div className="border-dark mt-2 p-1">
        <FormGroup className="d-flex align-items-start" row>
          <Col>
            <BodyImage
              initialImage={(data && data.form && data.form.Gambar_Body && data.form.Gambar_Body !== '') ? data.form.Gambar_Body : undefined}
              formName='rawat-jalan/penandaan-area-pembedahan'
              component='penandaan_area_pembedahan_body'
              onSaved={(image: string) => handleImageBody(image)}
            />
            <Input
              type="hidden"
              name="gambar_body"
              innerRef={register()}
            />
          </Col>
          <Col>
            <HeadImage
              initialImage={(data && data.form && data.form.Gambar_Head && data.form.Gambar_Head !== '') ? data.form.Gambar_Head : undefined}
              formName='rawat-jalan/penandaan-area-pembedahan'
              component='penandaan_area_pembedahan_head'
              onSaved={(image: string) => handleImageHead(image)}
            />
            <Input
              type="hidden"
              name="gambar_head"
              innerRef={register()}
            />
          </Col>
        </FormGroup>
      </div>
      <FormGroup className="form-group align-items-center mt-2" row>
        <Col>
          <div className="mt-2 d-flex justify-content-around my-0">
            <Signature
              label="Pasien/Wali"
              type="drawer"
              formName='rawat-jalan/penandaan-area-pembedahan'
              component='ttd_pasien'
              initialImage={(data.form && data.form.Tanda_Tangan_Pasien && data.form.Tanda_Tangan_Pasien !== '' && !data.form.Tanda_Tangan_Pasien.includes('null')) ? data.form.Tanda_Tangan_Pasien : undefined}
              onSigned={(image: string) => handlePatientSigned(image)}
            />
            <Input
              type="hidden"
              name="tanda-tangan-pasien"
              innerRef={register()}
            />
          </div>
        </Col>
        <Col>
          <div className="mt-2 d-flex justify-content-around my-0">
            <Signature
              label="Dokter"
              additionalLabel={(data.form && data.form.Nama_Dokter_Pelaksana && data.form.Nama_Dokter_Pelaksana !== '') ? data.form.Nama_Dokter_Pelaksana : undefined}
              type="picker"
              initialImage={(data.form && data.form.TTD_Dokter_Pelaksana && data.form.TTD_Dokter_Pelaksana !== '' && !data.form.TTD_Dokter_Pelaksana.includes('null')) ? data.form.TTD_Dokter_Pelaksana : undefined}
              defaultPerson={(userData && userData.id) ? userData.id : ''}
              persons={doctors}
              unit='dokter'
              onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                if (isFormDoctor) {
                  handleDoctorSigned(assigner, isFormDoctor)
                }
                if (!isFormDoctor) {
                  handleDoctorSigned(assigner)
                }
              }}
            />
            <Input
              type="hidden"
              name="ttd-dokter-pelaksana"
              innerRef={register()}
            />
            <Input
              type="hidden"
              name="dokter_pelaksana"
              innerRef={register()}
            />
          </div>
        </Col>
        <Col>
          <div className="mt-2 d-flex justify-content-around my-0">
            <Signature
              label="Perawat"
              additionalLabel={(data.form && data.form.Nama_Perawat && data.form.Nama_Perawat !== '') ? data.form.Nama_Perawat : undefined}
              type="picker"
              initialImage={(data.form && data.form.Tanda_Tangan_Perawat && data.form.Tanda_Tangan_Perawat !== '' && !data.form.Tanda_Tangan_Perawat.includes('null')) ? data.form.Tanda_Tangan_Perawat : undefined}
              defaultPerson={(userData && userData.id) ? userData.id : ''}
              persons={nurses}
              onSigned={(assigner: SignatureModel) => handleNurseSigned(assigner)}
            />
            <Input
              type="hidden"
              name="tanda-tangan-perawat"
              innerRef={register()}
            />
            <Input
              type="hidden"
              name="id-perawat"
              innerRef={register()}
            />
          </div>
        </Col>
      </FormGroup>
      <FormGroup className="d-flex mb-0 mt-2 justify-content-center">
        <SubmitButton
          label="Simpan"
          buttonColor='primary'
          spinnerColor='light'
          processing={processing}
          spinnerStyle={{ width: '1rem', height: '1rem' }}
        />
        {
          pdfData && Array.isArray(pdfData) && pdfData.length > 0 && (
            <a color='success' href={`${pdfData[0].URL}`} target="_blank" rel="noreferrer">
              <Button className='me-1' color='success' type='button'>
                Cetak
              </Button>
            </a>
          )
        }
        {
          (!pdfData || (pdfData && Array.isArray(pdfData) && pdfData.length === 0)) && (
            <Button className='me-1' color='success' type='button' disabled>
              Cetak
            </Button>
          )
        }
      </FormGroup>
      <FormGroup className='form-group mt-0' row>
        <div className='d-flex justify-content-center align-items-center'>
          <Label className='me-1'>Terakhir disimpan: </Label>
          <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
        </div>
      </FormGroup>
    </Form>
  )
}

export default SurgicalAreaMarkingForm;
