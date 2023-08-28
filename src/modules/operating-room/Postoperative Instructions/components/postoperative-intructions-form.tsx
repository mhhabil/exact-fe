import { Button, Col, Form, FormGroup, Input, Label, Row, Table } from "reactstrap";
import { useEffect, useState } from "react";
import { AppRequest } from "@src/shared/request";
import { DateTimeInput } from "@src/shared/input";
import { FindPdfRequest } from "@src/shared/pdf";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { SubmitButton } from "@src/shared/button";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useForm } from "react-hook-form";
import { useWarnIfUnsavedChanges } from "@src/shared/alert";
import { PostoperativeInstructionsModel } from "../models/postoperative-instructions-model";
import { IUpdatePostoperativeInstructionsRequest, UpdatePostoperativeInstructionsRequest } from "../requests";
import { fetchPostoperativeInstructions, fetchPostoperativeInstructionsPdf, handlePdf } from "../stores/postoperative-instructions.store";
import { PostoperativeInstructionsService } from "../services";
import { PdfPostOperativeInstructionRequest } from "../requests/pdf-postoperative-instruction.request";
import { DateTimeConverter } from "@src/shared/datetime-converter";

const PostoperativeInstructionsForm = (props: { data: PostoperativeInstructionsModel}) => {
  const { data } = props;

  const [processing, setProcessing] = useState(false);
  const dispatch = useAppDispatch();
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);

  const { pdf } = useAppSelector(state => state.postoperativeInstructionsStore);
  const [pdfData, setPdfData] = useState<any | undefined>(undefined);

  useEffect(() => {
    if (treatment) {
      dispatch(fetchPostoperativeInstructionsPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'ok_instruksi-pasca-bedah' })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])

  const { register, handleSubmit, errors, setValue, reset, formState } = useForm<any>({
    mode: 'onChange',
    // resolver: yupResolver(UpdatePostoperativeInstructionsRequest.schema()),
    defaultValues: {
      keluhan_rumah: data?.form?.Keluhan_Rumah ?? '',
      terjadi_rumah: data?.form?.Terjadi_Rumah ?? '',
      mobilisasi: data?.form?.Mobilisasi ?? '',
      anjuran_kendaraan: data.form.Anjuran_Kendaraan === 1 ? '1' : '',
      anjuran_alat_berat: data.form.Anjuran_Alat_Berat === 1 ? '1' : '',
      anjuran_alkohol: data.form.Anjuran_Alkohol === 1 ? '1' :  '',
      anjuran_ekstremitas: data.form.Anjuran_Ekstremitas === 1 ? '1' : '',
      anjuran_obat: data.form.Anjuran_Obat === 1 ? '1' : '',
      anjuran_lain: data.form.Anjuran_Lain === 1 ? '1' : '',
      anjuran_lain_teks: data?.form?.Anjuran_Lain_Teks ?? '',
      anjuran_terkena: data.form.Anjuran_Terkena === 1 ? '1' : '',
      anjuran_tidur_telentang: data.form.Anjuran_Tidur_Telentang === 1 ? '1' :  '',
      anjuran_tidur_telungkup: data.form.Anjuran_Tidur_Telungkup === 1 ? '1' :  '',
      anjuran_tidur_membungkuk: data.form.Anjuran_Tidur_Membungkuk === 1 ? '1' :  '',
      anjuran_tidur_dll: data.form.Anjuran_Tidur_Dll === 1 ? '1' : '',
      anjuran_tidur_eyeshield: data.form.Anjuran_Tidur_Eyeshield === 1 ? '1' : '',
      anjuran_tidur_lain_teks: data?.form?.Anjuran_Tidur_Lain_Teks ?? '',
      pendamping_keluarga: data.form.Pendamping_Keluarga === 1 ? '1' : '',
      pendamping_keluarga_teks: data?.form?.Pendamping_Keluarga_Teks ?? '',
      pendamping_medis: data.form.Pendamping_Medis === 1 ? '1' : '',
      pendamping_lain: data.form.Pendamping_Lain === 1 ? '1' : '',
      pendamping_lain_teks: data?.form?.Pendamping_Lain_Teks ?? '',
      nomor_dihubungi: data?.form?.Nomor_Dihubungi ?? '',
      jadwal_kontrol: (data && data.form && data.form.Jadwal_Kontrol) ? data.form.Jadwal_Kontrol.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}`,
      lain_lain: data?.form?.Lain_Lain ?? '',
      ttd_pasien: data?.form?.TTD_Pasien ?? '',
      ttd_dpjp: data?.form?.TTD_DPJP ?? '',
      id_dpjp: data?.form?.ID_DPJP ?? '',
    },
  });

  const { isDirty } = formState;

  // useWarnIfUnsavedChanges(isDirty, () => {
  //   return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  // })

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  const handleDoctorSigned = (image: SignatureModel, isFormDokter?: boolean) => {
    if (isFormDokter) {
      setValue('ttd_dpjp', image.Signature);
      setValue('id_dpjp', image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDokter) {
      setValue('ttd_dpjp', image.Signature);
      setValue('id_dpjp', image.ID_Karyawan);
    }
  }

  const handlePatientSigned = (image: string) => {
    setValue('ttd_pasien', image);
  }

  const handleProcessing = () => {
    setProcessing(true);
  }

  const handleSubmitForm = (value: IUpdatePostoperativeInstructionsRequest) => {
    if (!treatment) {
      return;
    }
    setProcessing(true);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdatePostoperativeInstructionsRequest.createFromJson({...value, ...appRequest});
    dispatch(handlePdf(undefined));
    PostoperativeInstructionsService().update(params)
      .then(() => {
        PostoperativeInstructionsService().show(appRequest)
          .then((resp) => {
            const { data } = resp.data;
            PostoperativeInstructionsService().pdfv3(PdfPostOperativeInstructionRequest.createPdfRequest({ ...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest))
              .then(() => {
                setProcessing(false);
                dispatch(fetchPostoperativeInstructionsPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'ok_instruksi-pasca-bedah' })))
              })
          });
        setProcessing(false);
        dispatch(fetchPostoperativeInstructions(appRequest));
      });
  }

  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <FormGroup className="form-group" row>
          <FormGroup>
            <Row>
              <Col md='3' className='mt-1'>
                <Label>Keluhan yang mungkin terjadi di rumah</Label>
              </Col>
              <Col md='9' className='mt-1'>
                <Input
                  id="keluhan_rumah"
                  type="textarea"
                  name="keluhan_rumah"
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <Row>
              <Col md='3' className='mt-1'>
                <Label>Tata Laksana Apabila Terjadi Keluhan</Label>
              </Col>
              <Col md='9' className='mt-1'>
                <Input
                  id="terjadi_rumah"
                  type="textarea"
                  name="terjadi_rumah"
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <Row>
              <Col md='3' className='mt-1'>
                <Label>Mobilisasi</Label>
              </Col>
              <Col md='9' className='mt-1'>
                <Input
                  id="mobilisasi"
                  type="textarea"
                  name="mobilisasi"
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <Row>
              <Col md='3' className="mt-1">
                <Label>Anjuran</Label>
              </Col>
              <Col className="mt-1">
                <Input
                  id="anjuran_kendaraan"
                  type="checkbox"
                  name="anjuran_kendaraan"
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value="1"
                  defaultChecked={data && data.form && data.form.Anjuran_Kendaraan === 1}
                  innerRef={register("anjuran_kendaraan") as any}
                />{' '}
                <Label>Tidak Mengendarai Kendaraan Bermotor</Label>
              </Col>
            </Row>
            <Row>
              <Col md='3' className="mt-1"></Col>
              <Col className="mt-1">
                <Input
                  id="anjuran_alat_berat"
                  type="checkbox"
                  name="anjuran_alat_berat"
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value="1"
                  defaultChecked={data && data.form && data.form.Anjuran_Alat_Berat === 1}
                  innerRef={register("anjuran_alat_berat") as any}
                />{' '}
                <Label>Tidak Mengoperasikan Alat Berat</Label>
              </Col>
            </Row>
            <Row>
              <Col md='3' className="mt-1"></Col>
              <Col className="mt-1">
                <Input
                  id="anjuran_alkohol"
                  type="checkbox"
                  name="anjuran_alkohol"
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value="1"
                  defaultChecked={data && data.form && data.form.Anjuran_Alkohol === 1}
                  innerRef={register("anjuran_alkohol") as any}
                />{' '}
                <Label>Tidak Mengonsumsi Alkohol</Label>
              </Col>
            </Row>
            <Row>
              <Col md='3' className="mt-1"></Col>
              <Col className="mt-1">
                <Input
                  id="anjuran_ekstremitas"
                  type="checkbox"
                  name="anjuran_ekstremitas"
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value="1"
                  defaultChecked={data && data.form && data.form.Anjuran_Ekstremitas === 1}
                  innerRef={register("anjuran_ekstremitas") as any}
                />{' '}
                <Label>Memperhatikan Ekstremitas Yang Diblok</Label>
              </Col>
            </Row>
            <Row>
              <Col md='3' className="mt-1"></Col>
              <Col className="mt-1">
                <Input
                  id="anjuran_obat"
                  type="checkbox"
                  name="anjuran_obat"
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value="1"
                  defaultChecked={data && data.form && data.form.Anjuran_Obat === 1}
                  innerRef={register("anjuran_obat") as any}
                />{' '}
                <Label>Berikan Obat Sesuai Aturan</Label>
              </Col>
            </Row>
            <Row>
              <Col md='3' className="mt-1"></Col>
              <Col className="mt-1">
                <Input
                  id="anjuran_lain"
                  type="checkbox"
                  name="anjuran_lain"
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value="2"
                  defaultChecked={data && data.form && data.form.Anjuran_Lain === 1}
                  innerRef={register("anjuran_lain") as any}
                />{' '}
                <Label>Lain-Lain</Label>
              </Col>
              <Col md='6'>
                <Input
                  id="anjuran_lain_teks"
                  type="textarea"
                  name="anjuran_lain_teks"
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <Row>
              <Col md='3' className="mt-1"></Col>
              <Col className="mt-1">
                <Input
                  id="anjuran_terkena"
                  type="checkbox"
                  name="anjuran_terkena"
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value="1"
                  defaultChecked={data && data.form && data.form.Anjuran_Terkena === 1}
                  innerRef={register("anjuran_terkena") as any}
                />{' '}
                <Label>Mata Yang Dioperasikan Tidak Boleh Terkena Air, Debu, Asap</Label>
              </Col>
            </Row>
            <Row>
              <Col md='3' className="mt-1"></Col>
              <Col className="mt-2">
                <Label>Posisi Tidur</Label>
              </Col>
            </Row>
            <Row>
              <Col md='3' className="mt-1"></Col>
              <Col className="mt-1">
                <Input
                  id="anjuran_tidur_telentang"
                  type="checkbox"
                  name="anjuran_tidur_telentang"
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value="1"
                  defaultChecked={data && data.form && data.form.Anjuran_Tidur_Telentang === 1}
                  innerRef={register("anjuran_tidur_telentang") as any}
                />{' '}
                <Label>Telentang</Label>
              </Col>
              <Col className="mt-1">
                <Input
                  id="anjuran_tidur_telungkup"
                  type="checkbox"
                  name="anjuran_tidur_telungkup"
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value="1"
                  defaultChecked={data && data.form && data.form.Anjuran_Tidur_Telungkup === 1}
                  innerRef={register("anjuran_tidur_telungkup") as any}
                />{' '}
                <Label>Telungkup</Label>
              </Col>
              <Col className="mt-1">
                <Input
                  id="anjuran_tidur_membungkuk"
                  type="checkbox"
                  name="anjuran_tidur_membungkuk"
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value="1"
                  defaultChecked={data && data.form && data.form.Anjuran_Tidur_Membungkuk === 1}
                  innerRef={register("anjuran_tidur_membungkuk") as any}
                />{' '}
                <Label>Membungkuk</Label>
              </Col>
            </Row>
            <Row>
              <Col md='3' className="mt-1"></Col>
              <Col className="mt-1">
                <Input
                  id="anjuran_tidur_dll"
                  type="checkbox"
                  name="anjuran_tidur_dll"
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value="1"
                  defaultChecked={data && data.form && data.form.Anjuran_Tidur_Dll === 1}
                  innerRef={register("anjuran_tidur_dll") as any}
                />{' '}
                <Label>Dll</Label>
              </Col>
              <Col md='6'>
                <Input
                  id="anjuran_tidur_lain_teks"
                  type="textarea"
                  name="anjuran_tidur_lain_teks"
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <Row>
              <Col md='3' className="mt-1"></Col>
              <Col className="mt-1">
                <Input
                  id="anjuran_tidur_eyeshield"
                  type="checkbox"
                  name="anjuran_tidur_eyeshield"
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value="1"
                  defaultChecked={data && data.form && data.form.Anjuran_Tidur_Eyeshield === 1}
                  innerRef={register("anjuran_tidur_eyeshield") as any}
                />{' '}
                <Label>Memakai Eyeshield Ketika Tidur</Label>
              </Col>
            </Row>
            <Row className="mt-1">
              <Col md='3' className="mt-1">
                <Label>Pendamping Pasien Pulang</Label>
              </Col>
              <Col className="mt-1">
                <Input
                  id="pendamping_keluarga"
                  type="checkbox"
                  name="pendamping_keluarga"
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value="1"
                  defaultChecked={data && data.form && data.form.Pendamping_Keluarga === 1}
                  innerRef={register("pendamping_keluarga") as any}
                />{' '}
                <Label>Keluarga</Label>
              </Col>
              <Col md='6'>
                <Input
                  id="pendamping_keluarga_teks"
                  type="textarea"
                  name="pendamping_keluarga_teks"
                  placeholder="Sebutkan Nama Keluarga"
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <Row className="mt-1">
              <Col md='3' className="mt-1"></Col>
              <Col className="mt-1">
                <Input
                  id="pendamping_medis"
                  type="checkbox"
                  name="pendamping_medis"
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value="1"
                  defaultChecked={data && data.form && data.form.Pendamping_Medis === 1}
                  innerRef={register("pendamping_medis") as any}
                />{' '}
                <Label>Staff Medis</Label>
              </Col>
            </Row>
            <Row>
              <Col md='3' className="mt-1"></Col>
              <Col className="mt-1">
                <Input
                  id="pendamping_lain"
                  type="checkbox"
                  name="pendamping_lain"
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value="1"
                  defaultChecked={data && data.form && data.form.Pendamping_Lain === 1}
                  innerRef={register("pendamping_lain") as any}
                />{' '}
                <Label>Lain-Lain</Label>
              </Col>
              <Col md='6'>
                <Input
                  id="pendamping_lain_teks"
                  type="textarea"
                  name="pendamping_lain_teks"
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <Row>
              <Col md='3' className='mt-1'>
                <Label>Nomor Yang Dapat Dihubungi</Label>
              </Col>
              <Col md='9' className='mt-1'>
                <Input
                  id="nomor_dihubungi"
                  type="text"
                  name="nomor_dihubungi"
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <Row className="mt-1">
              <Col md='3'>
                <Label>Jadwal Kontrol Kembali</Label>
              </Col>
              <Col md='9'>
                <Input
                  id="jadwal_kontrol"
                  type="date"
                  name="jadwal_kontrol"
                  innerRef={register()}
                  invalid={errors.tanggal_perawat_gangguan_pola_nafas && true}
                />
              </Col>
            </Row>
            <Row>
              <Col md='3' className='mt-1'>
                <Label>Lain-lain</Label>
              </Col>
              <Col md='9' className='mt-1'>
                <Input
                  id="lain_lain"
                  type="text"
                  name="lain_lain"
                  innerRef={register() as any}
                />
              </Col>
            </Row>

            <Row className="mt-2">
              <Col>
                <div className="mt-2 d-flex justify-content-around my-0">
                  <Signature
                    label="Pasien/Wali"
                    type="drawer"
                    formName='informasi/general-consent'
                    component='general_consent_sign_01'
                    initialImage={(data && data.form && data.form.TTD_Pasien && data.form.TTD_Pasien !== '') ? data.form.TTD_Pasien : undefined}
                    onSigned={(image: string) => handlePatientSigned(image)} />
                  <Input
                    type="hidden"
                    name="ttd_pasien"
                    innerRef={register()}
                    invalid={errors.ttd_pasien && true} />
                </div>
              </Col>
              <Col>
                <div className="mt-2 d-flex justify-content-around my-0">
                  <Signature
                    label="DPJP"
                    type="picker"
                    additionalLabel={(data && data.form && data.form.Nama_DPJP) ? data.form.Nama_DPJP : ''}
                    initialImage={(data && data.form && data.form.TTD_DPJP && data.form.TTD_DPJP !== '') ? data.form.TTD_DPJP : undefined}
                    persons={doctors}
                    unit='dokter'
                    onSigned={(assigner: SignatureModel, isFormDokter?: boolean) => {
                      if (isFormDokter) {
                        handleDoctorSigned(assigner, isFormDokter)
                      }
                      if (!isFormDokter) {
                        handleDoctorSigned(assigner)
                      }
                    }}
                  />
                  <Input
                    type="hidden"
                    name="ttd_dpjp"
                    innerRef={register()}
                    invalid={errors.ttd_dpjp && true}
                  />
                  <Input
                    type="hidden"
                    name="id_dpjp"
                    innerRef={register()}
                    invalid={errors.id_dpjp && true}
                  />
                </div>
              </Col>
            </Row>
            <FormGroup className="d-flex mb-0 justify-content-center mt-2">
              <SubmitButton
                label="Simpan"
                buttonColor='primary'
                spinnerStyle={{ width: '1rem', height: '1rem' }}
                spinnerColor='light'
                processing={processing}
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
            <FormGroup className="form-group mt-0" row>
              <div className="d-flex justify-content-center align-items-center">
                <Label className="me-1">Terakhir Disimpan: </Label>
                <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
              </div>
            </FormGroup>
          </FormGroup>
        </FormGroup>
      </Form>
    </>
  );
}
export default PostoperativeInstructionsForm;
