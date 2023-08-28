import { DateTimeInput } from '@src/shared/input';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { PerioperativeNursingRecordRajalsModel } from '../models/perioperative-nursing-records-rajal-model';
import { useEffect, useState } from 'react';

const PatientVerificationRajal = (props: { data: PerioperativeNursingRecordRajalsModel, setValue:any, initialImage?: string, register: any, errors: any, defaultPattern: string }) => {
  const { data, setValue, initialImage, register, errors, defaultPattern } = props;

  const [verifikasiPasien_5, setVerifikasiPasien_5] = useState<any>(`${data?.form?.Verifikasi_Masalah_Bahasa_Komunikasi}`);
  const [verifikasiPasien_6, setVerifikasiPasien_6] = useState<any>(`${data?.form?.Verifikasi_Surat_Izin_Operasi}`);
  const [verifikasiPasien_7, setVerifikasiPasien_7] = useState<any>(`${data?.form?.Verifikasi_Persetujuan_Anestesi}`);
  const [verifikasiPasien_8, setVerifikasiPasien_8] = useState<any>(`${data?.form?.Verifikasi_Kelengkapan_Resume_Medis}`);
  const [verifikasiPasien_9, setVerifikasiPasien_9] = useState<any>(`${data?.form?.Verifikasi_Kelengkapan_X_Ray}`);
  const [persiapanFisikPasien_1, setPersiapanFisikPasien_1] = useState<any>(`${data?.form?.Persiapan_Puasa}`);
  const [persiapanFisikPasien_2, setPersiapanFisikPasien_2] = useState<any>(`${data?.form?.Persiapan_Prothese_Luar}`);
  const [persiapanFisikPasien_3, setPersiapanFisikPasien_3] = useState<any>(`${data?.form?.Persiapan_Prothese_Dalam}`);
  const [persiapanFisikPasien_4, setPersiapanFisikPasien_4] = useState<any>(`${data?.form?.Persiapan_Penjepit_Rambut}`);
  const [persiapanFisikPasien_5, setPersiapanFisikPasien_5] = useState<any>(`${data?.form?.Persiapan_Kulit}`);
  const [persiapanFisikPasien_6, setPersiapanFisikPasien_6] = useState<any>(`${data?.form?.Persiapan_Alat_Bantu}`);
  const [persiapanFisikPasien_7, setPersiapanFisikPasien_7] = useState<any>(`${data?.form?.Persiapan_Obat_Disertakan}`)
  const [persiapanFisikPasien_8, setPersiapanFisikPasien_8] = useState<any>(`${data?.form?.Persiapan_Obat_Terakhir_Diberikan}`)
  const [persiapanFisikPasien_9, setPersiapanFisikPasien_9] = useState<any>(`${data?.form?.Persiapan_Vaskuler_Akses}`)

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  useEffect(() => {
    if (defaultPattern === '1') {
      const e = {
        target: {
          value: '1',
          checked: true,
        },
      }
      setValue('verifikasi_masalah_bahasa_komunikasi', '0');
      setVerifikasiPasien_5('0');
      setValue('verifikasi_surat_izin_operasi', '1');
      setVerifikasiPasien_6('1');
      setValue('verifikasi_persetujuan_anestesi', '1');
      setVerifikasiPasien_7('1');
      setValue('verifikasi_kelengkapan_resume_medis', '1');
      setVerifikasiPasien_8('1');
      setValue('verifikasi_kelengkapan_x_ray', '1');
      setVerifikasiPasien_9('1');
      setValue('persiapan_puasa', '0');
      setPersiapanFisikPasien_1('1');
      setValue('persiapan_prothese_luar', '0');
      setPersiapanFisikPasien_2('0');
      setValue('persiapan_prothese_dalam', '0');
      setPersiapanFisikPasien_3('0');
      setValue('persiapan_penjepit_rambut', '0');
      setPersiapanFisikPasien_4('0')
      setValue('persiapan_kulit', '1');
      setPersiapanFisikPasien_5('1');
      setValue('persiapan_alat_bantu', '0');
      setPersiapanFisikPasien_6('0');
      setValue('persiapan_obat_disertakan', '0');
      setPersiapanFisikPasien_7('0');
      setValue('persiapan_obat_terakhir_diberikan', '0');
      setPersiapanFisikPasien_8('0');
      setValue('persiapan_vaskuler_akses', '0');
      setPersiapanFisikPasien_9('0')
    } else if (defaultPattern === '0') {
      const e = {
        target: {
          value: '1',
          checked: false,
        },
      }
      setValue('verifikasi_masalah_bahasa_komunikasi', undefined);
      setVerifikasiPasien_5(undefined);
      setValue('verifikasi_surat_izin_operasi',  undefined);
      setVerifikasiPasien_6(undefined);
      setValue('verifikasi_persetujuan_anestesi', undefined);
      setVerifikasiPasien_7(undefined);
      setValue('verifikasi_kelengkapan_resume_medis', undefined);
      setVerifikasiPasien_8(undefined);
      setValue('verifikasi_kelengkapan_x_ray', undefined);
      setVerifikasiPasien_9(undefined);
      setValue('persiapan_puasa', undefined);
      setPersiapanFisikPasien_1(undefined);
      setValue('persiapan_prothese_luar', undefined);
      setPersiapanFisikPasien_2(undefined);
      setValue('persiapan_prothese_dalam', undefined);
      setPersiapanFisikPasien_3(undefined);
      setValue('persiapan_penjepit_rambut', undefined);
      setPersiapanFisikPasien_4(undefined);
      setValue('persiapan_kulit', undefined);
      setPersiapanFisikPasien_5(undefined);
      setValue('persiapan_alat_bantu', undefined);
      setPersiapanFisikPasien_6(undefined);
      setValue('persiapan_obat_disertakan', undefined);
      setPersiapanFisikPasien_7(undefined);
      setValue('persiapan_obat_terakhir_diberikan', undefined);
      setPersiapanFisikPasien_8(undefined);
      setValue('persiapan_vaskuler_akses', undefined);
      setPersiapanFisikPasien_9(undefined);
    }
  }, [defaultPattern])

  return (
    <FormGroup>
      <FormGroup style={{marginTop:'-30px'}} className="form-group" row>
        <Row>
          <Col md='3'>
            <Label>Masalah Bahasa / Komunikasi</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_masalah_bahasa_komunikasi_1"
              type="radio"
              name="verifikasi_masalah_bahasa_komunikasi"
              className="me-1"
              value="1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form  && data.form.Verifikasi_Masalah_Bahasa_Komunikasi === 1}
              innerRef={register("verifikasi_masalah_bahasa_komunikasi") as any}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_masalah_bahasa_komunikasi"
              type="radio"
              name="verifikasi_masalah_bahasa_komunikasi"
              className="me-1"
              value="0"
              onChange={(e) => {
                handleRadioChange(e);
                setVerifikasiPasien_5('0');
              }}
              style={{marginLeft:'-50px'}}
              defaultChecked={verifikasiPasien_5 === 0}
              innerRef={register({ required: false })}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_masalah_bahasa_komunikasi_keterangan"
              type="text"
              name="verifikasi_masalah_bahasa_komunikasi_keterangan"
              style={{marginLeft:'-70px', width: '300px'}}
              innerRef={register() as any}
              placeholder='Keterangan'
            />
          </Col>
          <Col></Col>
        </Row>
      </FormGroup>
      <FormGroup className="mt-1 form-group" row>
        <Row>
          <Col md='3'>
            <Label>Periksa Kelengkapan Persetujuan Pembedahan</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_surat_izin_operasi_1"
              type="radio"
              name="verifikasi_surat_izin_operasi"
              className="me-1"
              value="1"
              onChange={(e) => {
                handleRadioChange(e);
                setVerifikasiPasien_6('1');
              }}
              defaultChecked={verifikasiPasien_6 === 1}
              innerRef={register({required: false})}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_surat_izin_operasi"
              type="radio"
              name="verifikasi_surat_izin_operasi"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              style={{marginLeft:'-50px'}}
              defaultChecked={data && data.form && data.form.Verifikasi_Surat_Izin_Operasi === 0}
              innerRef={register("verifikasi_surat_izin_operasi") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_surat_izin_operasi_keterangan"
              type="text"
              name="verifikasi_surat_izin_operasi_keterangan"
              style={{marginLeft:'-70px', width: '300px'}}
              innerRef={register() as any}
              placeholder='Keterangan'
            />
          </Col>
          <Col></Col>
        </Row>
      </FormGroup>
      <FormGroup className="mt-1 form-group" row>
        <Row>
          <Col md='3'>
            <Label>Periksa kelengkapan persetujuan anestesi</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_persetujuan_anestesi_1"
              type="radio"
              name="verifikasi_persetujuan_anestesi"
              className="me-1"
              value="1"
              onChange={(e) => {
                handleRadioChange(e);
                setVerifikasiPasien_7('1');
              }}
              defaultChecked={verifikasiPasien_7 === 1}
              innerRef={register({required: false})}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_persetujuan_anestesi"
              type="radio"
              name="verifikasi_persetujuan_anestesi"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              style={{marginLeft:'-50px'}}
              defaultChecked={data && data.form && data.form.Verifikasi_Persetujuan_Anestesi === 0}
              innerRef={register("verifikasi_persetujuan_anestesi") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_persetujuan_anestesi_keterangan"
              type="text"
              name="verifikasi_persetujuan_anestesi_keterangan"
              style={{marginLeft:'-70px', width: '300px'}}
              innerRef={register() as any}
              placeholder='Keterangan'
            />
          </Col>
          <Col></Col>
        </Row>
      </FormGroup>

      <FormGroup className="mt-1 form-group" row>
        <Row>
          <Col md='3'>
            <Label>Periksa kelengkapan resume medis (rawat inap dan rawat jalan)</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_kelengkapan_resume_medis_1"
              type="radio"
              name="verifikasi_kelengkapan_resume_medis"
              className="me-1"
              value="1"
              onChange={(e) => {
                handleRadioChange(e);
                setVerifikasiPasien_8('1');
              }}
              defaultChecked={verifikasiPasien_8 === 1}
              innerRef={register({ required: false })}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_kelengkapan_resume_medis"
              type="radio"
              name="verifikasi_kelengkapan_resume_medis"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              style={{marginLeft:'-50px'}}
              defaultChecked={data && data.form && data.form.Verifikasi_Kelengkapan_Resume_Medis === 0}
              innerRef={register("verifikasi_kelengkapan_resume_medis") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_kelengkapan_resume_medis_keterangan"
              type="text"
              name="verifikasi_kelengkapan_resume_medis_keterangan"
              style={{marginLeft:'-70px', width: '300px'}}
              innerRef={register() as any}
              placeholder='Keterangan'
            />
          </Col>
          <Col></Col>
        </Row>
      </FormGroup>
      <FormGroup className="mt-1 form-group" row>
        <Row>
          <Col md='3'>
            <Label>Periksa Kelengkapan X-Ray / CT-Scan / MRI / EKG Angiografi / Echo / Biometri / USG Mata / Foto Fundus / OCT MAKULA / OCT PAPIL / Perimetri</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_kelengkapan_x_ray_1"
              type="radio"
              name="verifikasi_kelengkapan_x_ray"
              className="me-1"
              value="1"
              onChange={(e) => {
                handleRadioChange(e);
                setVerifikasiPasien_9('1');
              }}
              defaultChecked={verifikasiPasien_9 === 1}
              innerRef={register({ required: false })}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_kelengkapan_x_ray"
              type="radio"
              name="verifikasi_kelengkapan_x_ray"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              style={{marginLeft:'-50px'}}
              defaultChecked={data && data.form && data.form.Verifikasi_Kelengkapan_X_Ray === 0}
              innerRef={register("verifikasi_kelengkapan_x_ray") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_kelengkapan_x_ray_keterangan"
              type="text"
              name="verifikasi_kelengkapan_x_ray_keterangan"
              style={{marginLeft:'-70px', width: '300px'}}
              innerRef={register() as any}
              placeholder='Keterangan'
            />
          </Col>
          <Col></Col>
        </Row>
      </FormGroup>
      <hr />

      <FormGroup className="form-group" row>
        <Row>
          <Col>
            <Label>2. PERSIAPAN FISIK PASIEN</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'>
            <Label>Puasa / makan dan minum terakhir</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_puasa_1"
              type="radio"
              name="persiapan_puasa"
              className="me-1"
              value="1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Persiapan_Puasa === 1}
              innerRef={register("persiapan_puasa") as any}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_puasa"
              type="radio"
              name="persiapan_puasa"
              className="me-1"
              value="0"
              onChange={(e) => {
                handleRadioChange(e);
                setPersiapanFisikPasien_1('0');
              }}
              style={{marginLeft:'-50px'}}
              defaultChecked={persiapanFisikPasien_1 === 0}
              innerRef={register({ required: false })}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_puasa_keterangan"
              type="text"
              name="persiapan_puasa_keterangan"
              style={{marginLeft:'-70px', width: '300px'}}
              innerRef={register() as any}
              placeholder='Keterangan'
            />
          </Col>
          <Col></Col>
        </Row>
      </FormGroup>
      <FormGroup className="mt-1 form-group" row>
        <Row>
          <Col md='3'>
            <Label>Prohtose luar dilepaskan (gigi palsu, lensa kontak)</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_prothese_luar_1"
              type="radio"
              name="persiapan_prothese_luar"
              className="me-1"
              value="1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Persiapan_Prothese_Luar === 1}
              innerRef={register("persiapan_prothese_luar") as any}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_prothese_luar"
              type="radio"
              name="persiapan_prothese_luar"
              className="me-1"
              value="0"
              onChange={(e) => {
                handleRadioChange(e);
                setPersiapanFisikPasien_2('0');
              }}
              style={{marginLeft:'-50px'}}
              defaultChecked={persiapanFisikPasien_2 === 0}
              innerRef={register({ required: false })}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_prothese_luar_keterangan"
              type="text"
              name="persiapan_prothese_luar_keterangan"
              style={{marginLeft:'-70px', width: '300px'}}
              innerRef={register() as any}
              placeholder='Keterangan'
            />
          </Col>
          <Col></Col>
        </Row>
      </FormGroup>
      <FormGroup className="mt-1 form-group" row>
        <Row>
          <Col md='3'>
            <Label>Menggunakan prothese dalam (pacemaker, implant, prothese panggul / bahu / VP Shunt)</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_prothese_dalam_1"
              type="radio"
              name="persiapan_prothese_dalam"
              className="me-1"
              value="1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Persiapan_Prothese_Dalam === 1}
              innerRef={register("persiapan_prothese_dalam") as any}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_prothese_dalam"
              type="radio"
              name="persiapan_prothese_dalam"
              className="me-1"
              value="0"
              onChange={(e) => {
                handleRadioChange(e);
                setPersiapanFisikPasien_3('0');
              }}
              style={{marginLeft:'-50px'}}
              defaultChecked={persiapanFisikPasien_3 === 0}
              innerRef={register({required: false})}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_prothese_dalam_keterangan"
              type="text"
              name="persiapan_prothese_dalam_keterangan"
              style={{marginLeft:'-70px', width: '300px'}}
              innerRef={register() as any}
              placeholder='Keterangan'
            />
          </Col>
          <Col></Col>
        </Row>
      </FormGroup>
      <FormGroup className="mt-1 form-group" row>
        <Row>
          <Col md='3'>
            <Label>Penjepit Rambut / cat kuku / perhiasan dilepaskan</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_penjepit_rambut_1"
              type="radio"
              name="persiapan_penjepit_rambut"
              className="me-1"
              value="1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Persiapan_Penjepit_Rambut === 1}
              innerRef={register("persiapan_penjepit_rambut") as any}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_penjepit_rambut"
              type="radio"
              name="persiapan_penjepit_rambut"
              className="me-1"
              value="0"
              onChange={(e) => {
                handleRadioChange(e);
                setPersiapanFisikPasien_4('0');
              }}
              style={{marginLeft:'-50px'}}
              defaultChecked={persiapanFisikPasien_4 === 0}
              innerRef={register({ required: false })}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_penjepit_rambut_keterangan"
              type="text"
              name="persiapan_penjepit_rambut_keterangan"
              style={{marginLeft:'-70px', width: '300px'}}
              innerRef={register() as any}
              placeholder='Keterangan'
            />
          </Col>
          <Col></Col>
        </Row>
      </FormGroup>
      <FormGroup className="mt-1 form-group" row>
        <Row>
          <Col md='3'>
            <Label>Perisapan Kulit / Cukur</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_kulit"
              type="radio"
              name="persiapan_kulit"
              className="me-1"
              value="1"
              onChange={(e) => {
                handleRadioChange(e);
                setPersiapanFisikPasien_5('1');
              }}
              defaultChecked={persiapanFisikPasien_5 === 1}
              innerRef={register({required: false})}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_kulit"
              type="radio"
              name="persiapan_kulit"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              style={{marginLeft:'-50px'}}
              defaultChecked={data && data.form && data.form.Persiapan_Kulit === 0}
              innerRef={register("persiapan_kulit") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_kulit_keterangan"
              type="text"
              name="persiapan_kulit_keterangan"
              style={{marginLeft:'-70px', width: '300px'}}
              innerRef={register() as any}
              placeholder='Keterangan'
            />
          </Col>
          <Col></Col>
        </Row>
      </FormGroup>

      <FormGroup className="mt-1 form-group" row>
        <Row>
          <Col md='3'>
            <Label>Alat bantu (kacamata, alat bantu pendengaran) disimpan</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_alat_bantu_1"
              type="radio"
              name="persiapan_alat_bantu"
              className="me-1"
              value="1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Persiapan_Alat_Bantu === 1}
              innerRef={register("persiapan_alat_bantu") as any}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_alat_bantu"
              type="radio"
              name="persiapan_alat_bantu"
              className="me-1"
              value="0"
              onChange={(e) => {
                handleRadioChange(e);
                setPersiapanFisikPasien_6('0');
              }}
              style={{marginLeft:'-50px'}}
              defaultChecked={persiapanFisikPasien_6 === 0}
              innerRef={register({required: false})}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_alat_bantu_keterangan"
              type="text"
              name="persiapan_alat_bantu_keterangan"
              style={{marginLeft:'-70px', width: '300px'}}
              innerRef={register() as any}
              placeholder='Keterangan'
            />
          </Col>
          <Col></Col>
        </Row>
      </FormGroup>

      <FormGroup className="form-group" row>
        <Row>
          <Col md='3'>
            <Label>Obat yang disertakan</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_obat_disertakan_1"
              type="radio"
              name="persiapan_obat_disertakan"
              className="me-1"
              value="1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Persiapan_Obat_Disertakan === 1}
              innerRef={register("persiapan_obat_disertakan") as any}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_obat_disertakan"
              type="radio"
              name="persiapan_obat_disertakan"
              className="me-1"
              value="0"
              onChange={(e) => {
                handleRadioChange(e);
                setPersiapanFisikPasien_7('0');
              }}
              style={{marginLeft:'-50px'}}
              defaultChecked={persiapanFisikPasien_7 === 0}
              innerRef={register({required: false})}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_obat_disertakan_keterangan"
              type="text"
              name="persiapan_obat_disertakan_keterangan"
              style={{marginLeft:'-70px', width: '300px'}}
              innerRef={register() as any}
              placeholder='Keterangan'
            />
          </Col>
          <Col></Col>
        </Row>
      </FormGroup>
      <FormGroup className="mt-1 form-group" row>
        <Row>
          <Col md='3'>
            <Label>Obat terakhir yang diberikan</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_obat_terakhir_diberikan_1"
              type="radio"
              name="persiapan_obat_terakhir_diberikan"
              className="me-1"
              value="1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Persiapan_Obat_Terakhir_Diberikan === 1}
              innerRef={register("persiapan_obat_terakhir_diberikan") as any}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_obat_terakhir_diberikan"
              type="radio"
              name="persiapan_obat_terakhir_diberikan"
              className="me-1"
              value="0"
              onChange={(e) => {
                handleRadioChange(e);
                setPersiapanFisikPasien_8('0');
              }}
              style={{marginLeft:'-50px'}}
              defaultChecked={persiapanFisikPasien_8 === 0}
              innerRef={register({required: false})}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_obat_terakhir_diberikan_keterangan"
              type="text"
              name="persiapan_obat_terakhir_diberikan_keterangan"
              style={{marginLeft:'-70px', width: '300px'}}
              innerRef={register() as any}
              placeholder='Keterangan'
            />
          </Col>
          <Col></Col>
        </Row>
      </FormGroup>
      <FormGroup className="mt-1 form-group" row>
        <Row>
          <Col md='3'>
            <Label>Vaskuler akses (cimino) dll</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_vaskuler_akses"
              type="radio"
              name="persiapan_vaskuler_akses"
              className="me-1"
              value="1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Persiapan_Vaskuler_Akses === 1}
              innerRef={register("persiapan_vaskuler_akses") as any}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_vaskuler_akses"
              type="radio"
              name="persiapan_vaskuler_akses"
              className="me-1"
              value="0"
              onChange={(e) => {
                handleRadioChange(e);
                setPersiapanFisikPasien_9('0');
              }}
              style={{marginLeft:'-50px'}}
              defaultChecked={persiapanFisikPasien_9 === 0}
              innerRef={register({required: false})}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_vaskuler_akses_keterangan"
              type="text"
              name="persiapan_vaskuler_akses_keterangan"
              style={{marginLeft:'-70px', width: '300px'}}
              innerRef={register() as any}
              placeholder='Keterangan'
            />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <Label className='mt-2'>Tanggal</Label>
          </Col>
          <Col>
            <DateTimeInput
              name='tanggal'
              defaultValue='date'
              md={1}
              style={{marginTop: '-10px', marginLeft:'-265px'}}
              {...{ register, errors }}
            />
          </Col>
        </Row>
      </FormGroup>

      {/* <hr />
      <FormGroup className="form-group" row>
        <Row>
          <Col>
            <Label>3.Persiapan Lain - Lain</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'>
            <Label>Site Marking</Label>
          </Col>
          <Col>
            <Input
              id="site_marking_1"
              type="radio"
              name="site_marking"
              className="me-1"
              value="1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Site_Marking === 1}
              innerRef={register("site_marking") as any}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="site_marking_2"
              type="radio"
              name="site_marking"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              style={{marginLeft:'-50px'}}
              defaultChecked={data && data.form && data.form.Site_Marking === 0}
              innerRef={register("site_marking") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="site_marking_keterangan"
              type="text"
              name="site_marking_keterangan"
              style={{marginLeft:'-70px', width: '300px'}}
              innerRef={register() as any}
              placeholder='Keterangan'
            />
          </Col>
          <Col></Col>
        </Row>
      </FormGroup>
      <FormGroup className="form-group" row>
        <Row className='mt-1'>
          <Col md='3'>
            <Label>Penjelasan Singkat Oleh Dokter Bedah Tentang Prosedur Yang Akan Dilakukan Kepada Klien</Label>
          </Col>
          <Col>
            <Input
              id="penjelasan_singkat_1"
              type="radio"
              name="penjelasan_singkat"
              className="me-1"
              value="1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Penjelasan_Singkat === 1}
              innerRef={register("penjelasan_singkat") as any}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="penjelasan_singkat_2"
              type="radio"
              name="penjelasan_singkat"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              style={{marginLeft:'-50px'}}
              defaultChecked={data && data.form && data.form.Penjelasan_Singkat === 0}
              innerRef={register("penjelasan_singkat") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="penjelasan_singkat_keterangan"
              type="text"
              name="penjelasan_singkat_keterangan"
              style={{marginLeft:'-70px', width: '300px'}}
              innerRef={register() as any}
              placeholder='Keterangan'
            />
          </Col>
          <Col></Col>
        </Row>
      </FormGroup> */}
    </FormGroup>
  )
}

export default PatientVerificationRajal;
