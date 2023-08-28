import { Button, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane, Table, ListGroup, ListGroupItem, Form, FormGroup, Input, Label } from "reactstrap";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { DownloadCloud, FileText, X } from 'react-feather';
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { IDicomSearch, IModality, DicomSearch, Modality, IModalityDetail } from "../models/tool-inspection-result.model";
import { IPacsRequest, IUploadPacsRequest, PacsRequest, UploadPacsRequest } from "../requests";
import { AppRequest } from "@src/shared/request";
import { ITreatmentModel } from "@src/modules/site/patient-list/models";
import { ToolInspectionResultService } from "../services";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useDropzone } from 'react-dropzone';
import { useRouter } from 'next/router';

import Compressor from 'compressorjs';
import FixRequiredSelect from "@src/shared/input/components/FixRequiredSelect";
import { IDoctorModel } from "@src/shared/doctor";
import { INurseModel } from "@src/shared/nurse";
import Image from 'next/image';
import Select from 'react-select';
import { SubmitButton } from "@src/shared/button";
import { fetchDicom } from "../stores/tool-inspection-result.store";
import getConfig from 'next/config';
import { useWarnIfUnsavedChanges } from "@src/shared/alert";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

const ResultUpload = (props: { modality: IModality | undefined }) => {
  const { modality } = props;
  const { publicRuntimeConfig } = getConfig();
  const dispatch = useAppDispatch();
  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const { userData } = useAppSelector(state => state.auth);
  const { treatment } = useAppSelector(state => state.patient);
  const [processing, setProcessing] = useState<boolean | undefined>(false);
  const [doctorName, setDoctorName] = useState('');
  const [doctor, setDoctor] = useState({label: '', value: ''})

  useEffect(() => {
    if (treatment && doctors && Array.isArray(doctors)) {
      const dokter = doctors.find((val: any) => val.ID_Karyawan === treatment.ID_Dokter)
      if (dokter) {
        setDoctor({
          label: dokter.Nama,
          value: dokter.ID_Karyawan,
        })
        setDoctorName(dokter.Nama);
      }
    }
  }, [doctors, treatment])

  const { register, handleSubmit, errors, setValue, control, formState, watch } = useForm({
    mode: 'onChange',
    // resolver: yupResolver(UploadPacsRequest.schema()),
    // defaultValues: {

    // },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'dicom_instance',
  })

  const { getRootProps: getFilesProps, getInputProps: getInputFilesProps } = useDropzone({ multiple: true,
    accept: ['image/jpeg', 'image/tiff'],
    onDrop: useCallback(acceptedFiles => {
      const toUpload = acceptedFiles.map((file: any) => Object.assign(file));
      for (let i = 0; i < toUpload.length; i += 1) {
        append({ file: toUpload[i], modality_id: '', doctor_id: '', operator_id: '', modality_code: '', modality_name: '', series_description: '' })
      }
    }, [fields])})

  const { isDirty } = formState;

  useWarnIfUnsavedChanges(isDirty, () => {
    return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  })

  const handleRemoveFile = (index: any) => {
    remove(index);
  }

  const renderFilePreview = (file: any) => {
    if (file.url_real) {
      const { publicRuntimeConfig } = getConfig();
      return <Image className='rounded' alt={file.name} src={`${publicRuntimeConfig.env.pacsUrl}/dicom/previewInstance?instance_id=${file.url_real}`} width='100' height='100' />
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

  const handleSubmitForm = (value: any, key: number) => {
    if (!treatment) return;
    setProcessing(true);
    new Compressor(fields[key].file, {
      quality: 0.8,
      success(result: File) {
        const param = new FormData();
        param.append('image', result);
        param.append('image_thumbnail', result);
        param.append('emr_id', treatment.EMR_ID);
        param.append('series_date', treatment.Tgl_Berobat);
        param.append('series_time', `${treatment.Jam_Kunjungan}:00`);
        param.append('doctor_id', value.dicom_instance[key].doctor_id.value);
        param.append('modality_code', value.dicom_instance[key].modality_id.code);
        param.append('modality_id', value.dicom_instance[key].modality_id.value);
        param.append('modality_name', value.dicom_instance[key].modality_id.label);
        param.append('operator_id', value.dicom_instance[key].operator_id.value);
        param.append('series_description', value.dicom_instance[key].series_description);

        ToolInspectionResultService().uploadPacs(param).then((resp) => {
          handleRemoveFile(key)
          setProcessing(false)
          dispatch(fetchDicom(AppRequest.createFromStore(treatment)));
        })
          .catch((err) => console.log(err));
      },
      error(err) {
        console.log(err.message)
      },
    });
  };

  const fileList = fields.map((field: any, index: any) => (
    <ListGroupItem key={`${field.file.name}-${index}`} className='d-flex align-items-center justify-content-between'>
      <div className='file-details d-flex align-items-center'>
        <div className='file-preview me-1'>{renderFilePreview(field.file)}</div>
        <div>
          <p className='file-name mb-0'>{field.file.name}</p>
          <p className='file-size mb-0'>{renderFileSize(field.file.size)}</p>
        </div>
      </div>
      <Button color='danger' outline size='sm' className='btn-icon' onClick={() => handleRemoveFile(index)}>
        <X size={14} color='red'/>
      </Button>
    </ListGroupItem>
  ));


  return (
    <Fragment>
      <Row>
        <Col>
          <div {...getFilesProps()} className="dropzone my-1">
            <input name="logo" placeholder='Logo'  {...getInputFilesProps()} />
            <div className="d-flex align-items-center justify-content-center flex-column">
              <DownloadCloud size="50" />
              <h5>Drop Files here or click to upload</h5>
              <p className="text-secondary">
                Drop Files here or click browse through your machine
              </p>
            </div>
          </div>
          {fields.length ? (
            <Fragment>
              <ListGroup className='my-2'>{fileList}</ListGroup>
            </Fragment>
          ) : null}
        </Col>
      </Row>
      <Row>
        {
          fields && fields.length !== 0 && fields.map((field: any, key: number) => (
            <Row key={field.id}>
              <Col md='5'>
                <div className="d-flex flex-column align-items-left">
                  <div className="border-1 border-dark rounded-3 p-1 mb-1" style={{ width: '400px' }}>
                    <Image className="img-thumbnail" alt={(fields && fields.length !== 0) ? field.file.name : ''} src={URL.createObjectURL((fields && fields.length !== 0) ? field.file : {})} height="400rem" width="400rem" objectFit="contain" />
                  </div>
                </div>
              </Col>
              <Col md='4'>
                <Label>
                  Nomor Berobat
                </Label>
                <Input
                  id="list-treatment"
                  type="text"
                  name='list_treatment'
                  style={{ width: '500px', color: '#303030' }}
                  value={(treatment && treatment.Jenis_Pelayanan && treatment.Jenis_Pelayanan === 'RawatJalan') ? `${treatment.ID_Pelayanan} (${doctorName}, ${treatment.Tgl_Berobat} ${treatment.Jam_Kunjungan})` : ''}
                  readOnly />
                <Form onSubmit={handleSubmit((e: IUploadPacsRequest) => handleSubmitForm(e, key))}>
                  <Row className="mb-0">
                    <Label style={{ marginTop: '30px' }}>
                      Alat Pemeriksaan
                    </Label>
                    <Controller
                      control={control}
                      name={`dicom_instance[${key}].modality_id`}
                      defaultValue={userData && userData.isRO ? {label: 'ARK AR', value: '1', code: 'AR'} : ''}
                      render={({ onChange, name, ref }) => (
                        <Fragment>
                          <FixRequiredSelect
                            {...props}
                            required={true}
                            name={name}
                            defaultValue={userData && userData.isRO ? {label: 'ARK AR', value: '1', code: 'AR'} : ''}
                            onChange={(val: any) => {
                              onChange(val);
                            }}
                            SelectComponent={Select}
                            options={modality && modality.modality.map((tool: IModalityDetail) => ({ label: tool.modality_name, value: tool.modality_id, code: tool.modality_code }))}
                          />
                        </Fragment>
                      )}
                    />
                    {/* <Input
                      type="select"
                      name={`dicom_instance[${key}].modality_id`}
                      style={{ width: '500px' }}
                      id="type"
                      innerRef={register({})}
                      onChange={(e) => handleChangeTool(e, key)}
                      defaultValue=''
                      required
                    >
                      <option value="" disabled={true}>--</option>
                      {modality && modality.modality.map((alat: IModalityDetail, key: number) => {
                        return <option value={alat.modality_id} key={key}>{alat.modality_name}</option>;
                      })}
                    </Input> */}

                    <Input
                      id="modality-name"
                      type="hidden"
                      name={`dicom_instance[${key}].modality_name`}
                      innerRef={register({})}
                    />
                    <Input
                      id="modality-code"
                      type="hidden"
                      name={`dicom_instance[${key}].modality_code`}
                      innerRef={register({})}
                    />
                  </Row>
                  <Row>
                    <Label>
                      Dokter Pemeriksaan
                    </Label>
                    <Controller
                      control={control}
                      name={`dicom_instance[${key}].doctor_id`}
                      defaultValue={doctor}
                      render={({ onChange, name, ref }) => (
                        <Fragment>
                          <FixRequiredSelect
                            {...props}
                            required={true}
                            name={name}
                            defaultValue={doctor}
                            onChange={(val: any) => {
                              onChange(val);
                            }}
                            SelectComponent={Select}
                            options={doctors && doctors.map((doctor: IDoctorModel) => ({ label: doctor.Nama, value: doctor.ID_Karyawan }))}
                          />
                        </Fragment>
                      )}
                    />
                    {/* <Input
                      type="select"
                      name={`dicom_instance[${key}].doctor_id`}
                      style={{ width: '500px' }}
                      id="doctor_id"
                      innerRef={register({})}
                      required
                      defaultValue=''
                    >
                      <option value="" disabled={true}>--</option>
                      {doctors && doctors.map((doctor: IDoctorModel, key: number) => {
                        return <option value={doctor.ID_Karyawan} key={key}>{doctor.Nama}</option>;
                      })}
                    </Input> */}
                  </Row>
                  <Row>
                    <Label>
                      Perawat Pemeriksaan
                    </Label>
                    <Controller
                      control={control}
                      name={`dicom_instance[${key}].operator_id`}
                      defaultValue=''
                      render={({ onChange, name, ref }) => (
                        <Fragment>
                          <FixRequiredSelect
                            {...props}
                            required={true}
                            name={name}
                            defaultValue=''
                            onChange={(val: any) => {
                              onChange(val);
                            }}
                            SelectComponent={Select}
                            options={nurses && nurses.map((nurse: INurseModel) => ({ label: nurse.Nama, value: nurse.ID_Karyawan }))}
                          />
                        </Fragment>
                      )}
                    />
                    {/* <Input
                      type="select"
                      name={`dicom_instance[${key}].operator_id`}
                      style={{ width: '500px' }}
                      id="operator_id"
                      innerRef={register({})}
                      required
                      defaultValue=''
                    >
                      <option value="" disabled={true}>--</option>
                      {nurses && nurses.map((nurse: INurseModel, key: number) => {
                        return <option value={nurse.ID_Karyawan} key={key}>{nurse.Nama}</option>;
                      })}
                    </Input> */}
                  </Row>
                  <FormGroup>
                    <Label>
                      Catatan
                    </Label>
                    <Input
                      type="textarea"
                      name={`dicom_instance[${key}].series_description`}
                      style={{ width: '500px' }}
                      id="series_description"
                      innerRef={register({})}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <SubmitButton
                      label="Simpan"
                      buttonColor='primary'
                      spinnerStyle={{ width: '1rem', height: '1rem' }}
                      spinnerColor='light'
                      processing={processing}
                    />
                    <Button className='me-1' style={{ marginLeft: '20px' }} color='danger' onClick={() => {
                      handleRemoveFile(key)
                    }}>
                      Batal
                    </Button>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          ))
        }
      </Row>
    </Fragment>
  )
}

export default ResultUpload;
