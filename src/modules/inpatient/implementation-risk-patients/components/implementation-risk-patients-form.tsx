import {ImplementationRiskPatientsItemModel} from '@modules/inpatient/implementation-risk-patients/models/implementation-risk-patients.model';
import {useAppSelector} from '@hooks/useAppSelector';
import {useRouter} from 'next/router';
import {useAppDispatch} from '@hooks/useAppDispatch';
import Image from 'next/image';
import {Fragment, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import { DateTimeInput, NumberInput, TextInput } from "@shared/input";
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import {SignatureModel} from '@shared/signature/models/signature.model';
import {AppRequest} from '@shared/request';
import {
  fetchImplementationRiskPatients,
  fetchImplementationRiskPatientsItem,
  fetchImplementationRiskPatientsPdf,
  handleImplementationRiskPatientsItem,
  handlePdf,
} from '@modules/inpatient/implementation-risk-patients/stores/implementation-risk-patients.store';
import { FindPdfRequest } from '@shared/pdf';
import {
  CreateImplementationRiskPatientsRequest,
  ICreateImplementationRiskPatientsRequest,
} from '@modules/inpatient/implementation-risk-patients/requests/create-implementation-risk-patients.request';
import {ImplementationRiskPatientsService} from '@modules/inpatient/implementation-risk-patients/services';
import {UpdateImplementationRiskPatientsRequest} from '@modules/inpatient/implementation-risk-patients/requests/update-implementation-risk-patients.request';
import {Col, Form, FormFeedback, FormGroup, Input, Label, Table} from 'reactstrap';
import {Signature} from '@shared/signature/components';
import {SubmitButton} from '@shared/button';
import { ErrorMessage } from '@hookform/error-message';
import { PdfImplementationRiskPatientsRequest } from '@modules/inpatient/implementation-risk-patients/requests/pdf-implementation-risk-patients.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';


const ImplementationRiskPatientsForm = (props: { item?: ImplementationRiskPatientsItemModel | undefined, itemButton: any, onSuccessSubmit: any, unit: string }) => {

  const { officers } = useAppSelector(state => state.officer);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const { nurses } = useAppSelector(state => state.nurse);
  const { item, itemButton, onSuccessSubmit, unit } = props;
  const [processing, setProcessing] = useState(false);
  const { treatment } = useAppSelector(state => state.patient);
  const [defaultPattern, setDefaultPattern] = useState<any>(true);

  const [isPengkajianAwalCheck, setIsPengkajianAwalCheck] = useState<any>((item && item.Pengkajian_Awal_Check) ? item.Pengkajian_Awal_Check  : undefined);
  const [isRemTempatTidurCheck, setIsRemTempatTidurCheck] = useState<any>((item && item.Rem_Tempat_Tidur_Check) ? item.Rem_Tempat_Tidur_Check  : undefined);
  const [isDalamJangkauanCheck, setIsDalamJangkauanCheck] = useState<any>((item && item.Dalam_Jangkauan_Check) ? item.Dalam_Jangkauan_Check  : undefined);

  useEffect(() => {
    if (defaultPattern === '1') {
      setValue('pengkajian_awal_check', '1');
      setIsPengkajianAwalCheck('1');
      setValue('rem_tempat_tidur_check', '1');
      setIsRemTempatTidurCheck('1');
      setValue('dalam_jangkauan_check', '1');
      setIsDalamJangkauanCheck('1');
    } else if (defaultPattern === '0') {
      setValue('pengkajian_awal_check', undefined);
      setIsPengkajianAwalCheck(undefined);
      setValue('rem_tempat_tidur_check', undefined);
      setIsRemTempatTidurCheck(undefined);
      setValue('dalam_jangkauan_check', undefined);
      setIsDalamJangkauanCheck(undefined);
    }
  }, [defaultPattern]);


  const convertDatetimeToUTC = (date?: any) => {
    const d = date ? new Date(date) : new Date();
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}T${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }

  const { register, handleSubmit, errors, getValues, setValue } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    resolver: yupResolver(CreateImplementationRiskPatientsRequest.scheme()),
    defaultValues: {
      waktu_implementasi: item?.Waktu_Implementasi ?? convertDatetimeToUTC(),
      ttd_perawat : item?.TTD_Perawat  ?? '',
      pengkajian_awal_check: item?.Pengkajian_Awal_Check ?? '',
      rem_tempat_tidur_check: item?.Rem_Tempat_Tidur_Check ?? '',
      dalam_jangkauan_check: item?.Dalam_Jangkauan_Check ?? '',
      tidak_menghalangi_check: item?.Tidak_Menghalangi_Check ?? '',
      palang_tempat_tidur_check: item?.Palang_Tempat_Tidur_Check ?? '',
      penanda_resiko_jatuh_check: item?.Penanda_Resiko_Jatuh_Check ?? '',
      libatkan_keluarga_check: item?.Libatkan_Keluarga_Check ?? '',
      cepat_menanggapi_check: item?.Cepat_Menanggapi_Check ?? '',
      memantau_respon_check: item?.Memantau_Respon_Check ?? '',
      lakukan_pengkajian_ulang_check: item?.Lakukan_Pengkajian_Ulang_Check ?? '',
      id_perawat : item?.ID_Perawat  ?? '',
    },
  });

  const handleCheckboxChange = (e: any) => {
    if (e.target.type === "checkbox") {
      setValue(e.target.name, (e.target.checked) ? '1' : '0');
    }
  }

  const handleCheckboxPengkajianAwal = (e: any) => {
    if (e.target.type === "checkbox") {
      setValue(e.target.name, (e.target.checked) ? '1' : '0');
    }
  }


  const handleTandaTangan = (image: SignatureModel) => {
    setValue("ttd_perawat", image.Signature);
    setValue("id_perawat", image.ID_Karyawan);
  };


  const handleSubmitForm = (value: ICreateImplementationRiskPatientsRequest) => {

    if (!treatment) {
      return false;
    }
    setProcessing(true)
    const appRequest = AppRequest.createFromStore(treatment);
    dispatch(handlePdf(undefined));
    if (!item) {
      const params = CreateImplementationRiskPatientsRequest.createFromJson({...value, ...appRequest, unit });
      ImplementationRiskPatientsService().create(params)
        .then(() => {
          ImplementationRiskPatientsService().show(appRequest)
            .then((resp) => {
              const { data } = resp.data;
              const params = PdfImplementationRiskPatientsRequest.createPdfRequest(data, appRequest.emr_id, treatment);
              ImplementationRiskPatientsService().pdfv3(params)
                .then(() => {
                  if (onSuccessSubmit) {
                    dispatch(fetchImplementationRiskPatientsPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_implementasi-pasien-risiko-jatuh' })));
                    setProcessing(false);
                    onSuccessSubmit(false);
                    return true;
                  }
                });
            });
          /*
          if (onSuccessSubmit) {
            onSuccessSubmit();
          }
          */
        });
    } else {
      const params = UpdateImplementationRiskPatientsRequest.createFromJson({...value, ...appRequest, ID: item.ID, unit, emr_id: appRequest.emr_id });
      ImplementationRiskPatientsService().update(params)
        .then(() => {
          ImplementationRiskPatientsService().show(appRequest)
            .then((resp) => {
              const { data } = resp.data;
              const params = PdfImplementationRiskPatientsRequest.createPdfRequest(data, appRequest.emr_id, treatment);
              ImplementationRiskPatientsService().pdfv3(params)
                .then(() => {
                  if (onSuccessSubmit) {
                    dispatch(fetchImplementationRiskPatientsPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_implementasi-pasien-risiko-jatuh' })));
                    setProcessing(false);
                    onSuccessSubmit(false);
                    return true;
                  }
                });
            });
          /*
          if (onSuccessSubmit) {
            onSuccessSubmit();
          }
          */
        });
    }
  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <FormGroup className="form-group" row>
          <Label md="2">Tanggal Tindakan Implementasi</Label>
          <Col>
            <Input
              type="datetime-local"
              id="waktu_implementasi"
              name="waktu_implementasi"
              innerRef={register({ required: true })}
              invalid={errors.waktu_implementasi && true} 
              readOnly={(itemButton === "view")}/>
          </Col>
          <Col>
            <Label></Label>
          </Col>
          {errors && errors.waktu_implementasi && <FormFeedback>{errors.waktu_implementasi.message}</FormFeedback>}
        </FormGroup>
        <FormGroup className="form-group" row>
          <Col>
            <Table className='mt-1 mb-1'>
              <thead>
                <tr>
                  <th>Tindakan</th>
                  <th>
                    <Col>Checklist</Col>
                    <Col>
                      <Input
                        type="checkbox"
                        className="me-1"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setDefaultPattern('1');
                          } else {
                            setDefaultPattern('0');
                          }
                        }}
                        disabled={(itemButton === "view")}
                      />
                      <label>Pilih Default  </label>
                    </Col>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                Melakukan Pengkajian Awal Resiko Jatuh
                  </td>
                  <td>
                    <FormGroup className="form-group">
                      <Input
                        id="pengkajian_awal_check"
                        type="checkbox"
                        className="me-1"
                        name="pengkajian_awal_check"
                        checked={isPengkajianAwalCheck === '1'}
                        onChange={(e) => {
                          handleCheckboxChange(e);
                          if (e.target.checked) {
                            setIsPengkajianAwalCheck('1');
                          } else {
                            setIsPengkajianAwalCheck('0');
                          }
                        }}
                        defaultChecked={item && item.Pengkajian_Awal_Check === '1'}
                        innerRef={register("pengkajian_awal_check") as any}
                        disabled={(itemButton === "view")}
                      />
                    </FormGroup>
                  </td>
                </tr>
                <tr>
                  <td>
                Pastikan Rem Tempat Tidur Terkunci
                  </td>
                  <td>
                    <Input
                      id="rem_tempat_tidur_check"
                      type="checkbox"
                      name="rem_tempat_tidur_check"
                      checked={(isRemTempatTidurCheck === '1')}
                      onChange={(e) => {
                        handleCheckboxChange(e);
                        if (e.target.checked) {
                          setIsRemTempatTidurCheck('1');
                        } else {
                          setIsRemTempatTidurCheck('0');
                        }
                      }}
                      className="me-1"
                      defaultChecked={item && item.Rem_Tempat_Tidur_Check === '1'}
                      innerRef={register("rem_tempat_tidur_check") as any}
                      disabled={(itemButton === "view")}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                Pastikan Semua Kebutuhan Pasien Dalam Jangkauan
                  </td>
                  <td>
                    <Input
                      id="dalam_jangkauan_check"
                      type="checkbox"
                      name="dalam_jangkauan_check"
                      checked={(isDalamJangkauanCheck === '1')}
                      onChange={(e) => {
                        handleCheckboxChange(e);
                        if (e.target.checked) {
                          setIsDalamJangkauanCheck('1');
                        } else {
                          setIsDalamJangkauanCheck('0');
                        }
                      }}
                      className="me-1"
                      defaultChecked={item && item.Dalam_Jangkauan_Check === '1'}
                      innerRef={register("dalam_jangkauan_check") as any}
                      disabled={(itemButton === "view")}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                Tempatkan Meja Kursi dan Lainnya dengan Baik Agar Tidak Menghalangi
                  </td>
                  <td>
                    <Input
                      id="tidak_menghalangi_check"
                      type="checkbox"
                      name="tidak_menghalangi_check"
                      onChange={(e) => handleCheckboxChange(e)}
                      className="me-1"
                      defaultChecked={item && item.Tidak_Menghalangi_Check === '1'}
                      innerRef={register("tidak_menghalangi_check") as any}
                      disabled={(itemButton === "view")}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                Pasang Palang Tempat Tidur
                  </td>
                  <td>
                    <Input
                      id="palang_tempat_tidur_check"
                      type="checkbox"
                      name="palang_tempat_tidur_check"
                      onChange={(e) => handleCheckboxChange(e)}
                      className="me-1"
                      defaultChecked={item && item.Palang_Tempat_Tidur_Check === '1'}
                      innerRef={register("palang_tempat_tidur_check") as any}
                      disabled={(itemButton === "view")}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                Pasang Penanda Resiko Jatuh Dengan Memakai Gelang Berwarna Kuning
                  </td>
                  <td>
                    <Input
                      id="penanda_resiko_jatuh_check"
                      type="checkbox"
                      name="penanda_resiko_jatuh_check"
                      onChange={(e) => handleCheckboxChange(e)}
                      className="me-1"
                      defaultChecked={item && item.Penanda_Resiko_Jatuh_Check === '1'}
                      innerRef={register("penanda_resiko_jatuh_check") as any}
                      disabled={(itemButton === "view")}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                Libatkan Keluarga / Penunggu Pasien Untuk Mendampingi Pasien di Samping Tempat Tidur Selama Perawatan
                  </td>
                  <td>
                    <Input
                      id="libatkan_keluarga_check"
                      type="checkbox"
                      name="libatkan_keluarga_check"
                      onChange={(e) => handleCheckboxChange(e)}
                      className="me-1"
                      defaultChecked={item && item.Libatkan_Keluarga_Check === '1'}
                      innerRef={register("libatkan_keluarga_check") as any}
                      disabled={(itemButton === "view")}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                Cepat Menanggapi Keluhan Pasien
                  </td>
                  <td>
                    <Input
                      id="cepat_menanggapi_check"
                      type="checkbox"
                      name="cepat_menanggapi_check"
                      onChange={(e) => handleCheckboxChange(e)}
                      className="me-1"
                      defaultChecked={item && item.Cepat_Menanggapi_Check === '1'}
                      innerRef={register("cepat_menanggapi_check") as any}
                      disabled={(itemButton === "view")}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
               Memantau Respon Terapetik Yang Menimbulkan Perubahan Keseimbangan Pasien Yang Akan Meningkatkan Resiko Jatuh
                  </td>
                  <td>
                    <Input
                      id="memantau_respon_check"
                      type="checkbox"
                      name="memantau_respon_check"
                      onChange={(e) => handleCheckboxChange(e)}
                      className="me-1"
                      defaultChecked={item && item.Memantau_Respon_Check === '1'}
                      innerRef={register("memantau_respon_check") as any}
                      disabled={(itemButton === "view")}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
               Lakukan Pengkajian Ulang Sesuai Kondisi Pasien
                  </td>
                  <td>
                    <Input
                      id="lakukan_pengkajian_ulang_check"
                      type="checkbox"
                      name="lakukan_pengkajian_ulang_check"
                      onChange={(e) => handleCheckboxChange(e)}
                      className="me-1"
                      defaultChecked={item && item.Lakukan_Pengkajian_Ulang_Check === '1'}
                      innerRef={register("lakukan_pengkajian_ulang_check") as any}
                      disabled={(itemButton === "view")}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </FormGroup>
        <FormGroup style={{ marginTop: '20px' }} className="d-flex mb-0 justify-content-center">
          <Signature
            label="Perawat "
            type="picker"
            additionalLabel={ item && item.Nama_Perawat ? item.Nama_Perawat : ""}
            initialImage={ item && item.TTD_Perawat && item.TTD_Perawat !== "" ? item.TTD_Perawat : undefined}
            persons={nurses}
            onSigned={(assigner: SignatureModel) => handleTandaTangan(assigner)}
            disabled={(itemButton === "view")}
          />
          <Input
            type="hidden"
            name="ttd_perawat"
            innerRef={register({ required: true })}
            invalid={errors["ttd_perawat"] && true}
          />
          <Input
            type="hidden"
            name="id_perawat"
            innerRef={register({ required: true })}
            invalid={errors["id_perawat"] && true}
          />

        </FormGroup>
        <FormGroup className="d-flex mb-0 justify-content-center">
          {
            (itemButton !== "view") && (
              <SubmitButton
                buttonColor='primary'
                spinnerColor='light'
                processing={processing}
                label="Simpan"
                spinnerStyle={{ width: '1rem', height: '1rem' }}
              />
            )
          }
        </FormGroup>
        <FormGroup className='form-group mt-0' row>
          <div className='d-flex justify-content-center align-items-center'>
            <Label className='me-1'>Terakhir Disimpan: </Label>
            {/* <Label>{(item && item.Updated_At) ? item.Updated_At : ''}</Label> */}
            <Label>{ `${DateTimeConverter.convertToDateTimeSecond(item?.Updated_At)}` }</Label>
          </div>
        </FormGroup>
      </Form>
    </Fragment>
  )
}

export default ImplementationRiskPatientsForm;
