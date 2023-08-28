import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { PerioperativeNursingRecordsModel } from '../models/perioperative-nursing-records.model';

const PatientVerification = (props: { data: PerioperativeNursingRecordsModel, setValue:any, initialImage?: string, register: any, errors: any }) => {
  const { data, setValue, initialImage, register, errors } = props;

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  return (
    <FormGroup>
      <FormGroup className="form-group" row>
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
              defaultChecked={data && data.form && data.form.Verifikasi_Masalah_Bahasa_Komunikasi === 1}
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
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form  && data.form.Verifikasi_Masalah_Bahasa_Komunikasi === 0}
              innerRef={register("verifikasi_masalah_bahasa_komunikasi") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_masalah_bahasa_komunikasi_rajal_keterangan"
              type="checkbox"
              name="verifikasi_masalah_bahasa_komunikasi_rajal_keterangan"
              className="me-1"
              value="1"
              disabled
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data?.rajal?.Verifikasi_Masalah_Bahasa_Komunikasi === 1}
              innerRef={register("verifikasi_masalah_bahasa_komunikasi_rajal_keterangan") as any}
            />{' '}
            <Label>Data Rajal / Ranap</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col sm='4'>
            <Input
              id="verifikasi_masalah_bahasa_komunikasi_keterangan"
              type="text"
              name="verifikasi_masalah_bahasa_komunikasi_keterangan"
              innerRef={register() as any}
              placeholder='Keterangan'
              disabled
            />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className="mt-2 form-group" row>
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
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form  && data.form.Verifikasi_Surat_Izin_Operasi === 1}
              innerRef={register("verifikasi_surat_izin_operasi") as any}
            />{' '}
            <Label>Ya</Label>
            <Input
              id="verifikasi_surat_izin_operasi_keterangan"
              type="text"
              style={{width:'138%'}}
              name="verifikasi_surat_izin_operasi_keterangan"
              innerRef={register() as any}
              placeholder='Keterangan'
              disabled
            />
          </Col>
          <Col>
            <Input
              id="verifikasi_surat_izin_operasi"
              type="radio"
              name="verifikasi_surat_izin_operasi"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Verifikasi_Surat_Izin_Operasi === 0}
              innerRef={register("verifikasi_surat_izin_operasi") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_surat_izin_operasi_rajal_keterangan"
              type="checkbox"
              name="verifikasi_surat_izin_operasi_rajal_keterangan"
              className="me-1"
              value="1"
              disabled
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data?.rajal?.Verifikasi_Surat_Izin_Operasi === 1}
              innerRef={register("verifikasi_surat_izin_operasi_rajal_keterangan") as any}
            />{' '}
            <Label>Data Rajal / Ranap</Label>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className="mt-2 form-group" row>
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
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Verifikasi_Persetujuan_Anestesi === 1}
              innerRef={register("verifikasi_persetujuan_anestesi") as any}
            />{' '}
            <Label>Ya</Label>
            <Input
              id="verifikasi_persetujuan_anestesi_keterangan"
              type="text"
              style={{width:'138%'}}
              name="verifikasi_persetujuan_anestesi_keterangan"
              innerRef={register() as any}
              placeholder='Keterangan'
              disabled
            />
          </Col>
          <Col>
            <Input
              id="verifikasi_persetujuan_anestesi"
              type="radio"
              name="verifikasi_persetujuan_anestesi"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Verifikasi_Persetujuan_Anestesi === 0}
              innerRef={register("verifikasi_persetujuan_anestesi") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_persetujuan_anestesi_rajal_keterangan"
              type="checkbox"
              name="verifikasi_persetujuan_anestesi_rajal_keterangan"
              className="me-1"
              value="1"
              disabled
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data?.rajal?.Verifikasi_Persetujuan_Anestesi === 1}
              innerRef={register("verifikasi_persetujuan_anestesi_rajal_keterangan") as any}
            />{' '}
            <Label>Data Rajal / Ranap</Label>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup className="mt-2 form-group" row>
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
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Verifikasi_Kelengkapan_Resume_Medis === 1}
              innerRef={register("verifikasi_kelengkapan_resume_medis") as any}
            />{' '}
            <Label>Ya</Label>
            <Input
              id="verifikasi_kelengkapan_resume_medis_keterangan"
              type="text"
              style={{width:'138%'}}
              name="verifikasi_kelengkapan_resume_medis_keterangan"
              innerRef={register() as any}
              placeholder='Keterangan'
              disabled
            />
          </Col>
          <Col>
            <Input
              id="verifikasi_kelengkapan_resume_medis"
              type="radio"
              name="verifikasi_kelengkapan_resume_medis"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Verifikasi_Kelengkapan_Resume_Medis === 0}
              innerRef={register("verifikasi_kelengkapan_resume_medis") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_kelengkapan_resume_medis_rajal_keterangan"
              type="checkbox"
              name="verifikasi_kelengkapan_resume_medis_rajal_keterangan"
              className="me-1"
              value="1"
              disabled
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data?.rajal?.Verifikasi_Kelengkapan_Resume_Medis === 1}
              innerRef={register("verifikasi_kelengkapan_resume_medis_rajal_keterangan") as any}
            />{' '}
            <Label>Data Rajal / Ranap</Label>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className="mt-2 form-group" row>
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
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Verifikasi_Kelengkapan_X_Ray === 1}
              innerRef={register("verifikasi_kelengkapan_x_ray") as any}
            />{' '}
            <Label>Ya</Label>
            <Input
              id="verifikasi_kelengkapan_x_ray_keterangan"
              type="text"
              style={{width:'138%'}}
              name="verifikasi_kelengkapan_x_ray_keterangan"
              innerRef={register() as any}
              placeholder='Keterangan'
              disabled
            />
          </Col>
          <Col>
            <Input
              id="verifikasi_kelengkapan_x_ray"
              type="radio"
              name="verifikasi_kelengkapan_x_ray"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Verifikasi_Kelengkapan_X_Ray === 0}
              innerRef={register("verifikasi_kelengkapan_x_ray") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_kelengkapan_x_ray_rajal_keterangan"
              type="checkbox"
              name="verifikasi_kelengkapan_x_ray_rajal_keterangan"
              className="me-1"
              value="1"
              disabled
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data?.rajal?.Verifikasi_Kelengkapan_X_Ray === 1}
              innerRef={register("verifikasi_kelengkapan_x_ray_rajal_keterangan") as any}
            />{' '}
            <Label>Data Rajal / Ranap</Label>
          </Col>
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
            <Input
              id="persiapan_puasa_keterangan"
              type="text"
              style={{width:'138%'}}
              name="persiapan_puasa_keterangan"
              innerRef={register() as any}
              placeholder='Keterangan'
              disabled
            />
          </Col>
          <Col>
            <Input
              id="persiapan_puasa"
              type="radio"
              name="persiapan_puasa"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Persiapan_Puasa === 0}
              innerRef={register("persiapan_puasa") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_puasa_rajal_keterangan"
              type="checkbox"
              name="persiapan_puasa_rajal_keterangan"
              className="me-1"
              value="1"
              disabled
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data?.rajal?.Persiapan_Puasa === 1}
              innerRef={register("persiapan_puasa_rajal_keterangan") as any}
            />{' '}
            <Label>Data Rajal / Ranap</Label>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className="mt-2 form-group" row>
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
            <Input
              id="persiapan_prothese_luar_keterangan"
              type="text"
              name="persiapan_prothese_luar_keterangan"
              style={{width:'138%'}}
              innerRef={register() as any}
              placeholder='Keterangan'
              disabled
            />
          </Col>
          <Col>
            <Input
              id="persiapan_prothese_luar"
              type="radio"
              name="persiapan_prothese_luar"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Persiapan_Prothese_Luar === 0}
              innerRef={register("persiapan_prothese_luar") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_prothese_luar_rajal_keterangan"
              type="checkbox"
              name="persiapan_prothese_luar_rajal_keterangan"
              className="me-1"
              value="1"
              disabled
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.rajal?.Persiapan_Prothese_Luar === 1}
              innerRef={register("persiapan_prothese_luar_rajal_keterangan") as any}
            />{' '}
            <Label>Data Rajal / Ranap</Label>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className="mt-2 form-group" row>
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
            <Input
              id="persiapan_prothese_dalam_keterangan"
              type="text"
              name="persiapan_prothese_dalam_keterangan"
              style={{width:'138%'}}
              innerRef={register() as any}
              placeholder='Keterangan'
              disabled
            />
          </Col>
          <Col>
            <Input
              id="persiapan_prothese_dalam"
              type="radio"
              name="persiapan_prothese_dalam"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Persiapan_Prothese_Dalam === 0}
              innerRef={register("persiapan_prothese_dalam") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_prothese_dalam_rajal_keterangan"
              type="checkbox"
              name="persiapan_prothese_dalam_rajal_keterangan"
              className="me-1"
              value="1"
              disabled
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data?.rajal?.Persiapan_Prothese_Dalam === 1}
              innerRef={register("persiapan_prothese_dalam_rajal_keterangan") as any}
            />{' '}
            <Label>Data Rajal / Ranap</Label>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className="mt-2 form-group" row>
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
            <Input
              id="persiapan_penjepit_rambut_keterangan"
              type="text"
              name="persiapan_penjepit_rambut_keterangan"
              style={{width:'138%'}}
              innerRef={register() as any}
              placeholder='Keterangan'
              disabled
            />
          </Col>
          <Col>
            <Input
              id="persiapan_penjepit_rambut"
              type="radio"
              name="persiapan_penjepit_rambut"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Persiapan_Penjepit_Rambut === 0}
              innerRef={register("persiapan_penjepit_rambut") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_penjepit_rambut_rajal_keterangan"
              type="checkbox"
              name="persiapan_penjepit_rambut_rajal_keterangan"
              className="me-1"
              value="1"
              disabled
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data?.rajal?.Persiapan_Penjepit_Rambut === 1}
              innerRef={register("persiapan_penjepit_rambut_rajal_keterangan") as any}
            />{' '}
            <Label>Data Rajal / Ranap</Label>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className="mt-2 form-group" row>
        <Row>
          <Col md='3'>
            <Label>Persiapan Kulit / Cukur</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_kulit"
              type="radio"
              name="persiapan_kulit"
              className="me-1"
              value="1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Persiapan_Kulit === 1}
              innerRef={register("persiapan_kulit") as any}
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
              defaultChecked={data && data.form && data.form.Persiapan_Kulit === 0}
              innerRef={register("persiapan_kulit") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_kulit_rajal_keterangan"
              type="checkbox"
              name="persiapan_kulit_rajal_keterangan"
              className="me-1"
              value="1"
              disabled
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data?.rajal?.Persiapan_Kulit === 1}
              innerRef={register("persiapan_kulit_rajal_keterangan") as any}
            />{' '}
            <Label>Data Rajal / Ranap</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col sm='4'>
            <Input
              id="persiapan_kulit_keterangan"
              type="text"
              name="persiapan_kulit_keterangan"
              innerRef={register() as any}
              placeholder='Keterangan'
              disabled
            />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className="mt-2 form-group" row>
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
            <Input
              id="persiapan_alat_bantu_keterangan"
              type="text"
              name="persiapan_alat_bantu_keterangan"
              style={{width:'138%'}}
              innerRef={register() as any}
              placeholder='Keterangan'
              disabled
            />
          </Col>
          <Col>
            <Input
              id="persiapan_alat_bantu"
              type="radio"
              name="persiapan_alat_bantu"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Persiapan_Alat_Bantu === 0}
              innerRef={register("persiapan_alat_bantu") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_alat_bantu_rajal_keterangan"
              type="checkbox"
              name="persiapan_alat_bantu_rajal_keterangan"
              className="me-1"
              value="1"
              disabled
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data?.rajal?.Persiapan_Alat_Bantu === 1}
              innerRef={register("persiapan_alat_bantu_rajal_keterangan") as any}
            />{' '}
            <Label>Data Rajal / Ranap</Label>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className="mt-2 form-group" row>
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
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Persiapan_Obat_Disertakan === 0}
              innerRef={register("persiapan_obat_disertakan") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_obat_disertakan_rajal_keterangan"
              type="checkbox"
              name="persiapan_obat_disertakan_rajal_keterangan"
              className="me-1"
              value="1"
              disabled
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data?.rajal?.Persiapan_Obat_Disertakan === 1}
              innerRef={register("persiapan_obat_disertakan_rajal_keterangan") as any}
            />{' '}
            <Label>Data Rajal / Ranap</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col sm='4'>
            <Input
              id="persiapan_obat_disertakan_keterangan"
              type="text"
              name="persiapan_obat_disertakan_keterangan"
              innerRef={register() as any}
              placeholder='Keterangan'
              disabled
            />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className="mt-2 form-group" row>
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
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Persiapan_Obat_Terakhir_Diberikan === 0}
              innerRef={register("persiapan_obat_terakhir_diberikan") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_obat_terakhir_diberikan_rajal_keterangan"
              type="checkbox"
              name="persiapan_obat_terakhir_diberikan_rajal_keterangan"
              className="me-1"
              value="1"
              disabled
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data?.rajal?.Persiapan_Obat_Terakhir_Diberikan === 1}
              innerRef={register("persiapan_obat_terakhir_diberikan_rajal_keterangan") as any}
            />{' '}
            <Label>Data Rajal / Ranap</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col sm='4'>
            <Input
              id="persiapan_obat_terakhir_diberikan_keterangan"
              type="text"
              name="persiapan_obat_terakhir_diberikan_keterangan"
              innerRef={register() as any}
              placeholder='Keterangan'
              disabled
            />
          </Col>
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
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Persiapan_Vaskuler_Akses === 0}
              innerRef={register("persiapan_vaskuler_akses") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_vaskuler_akses_rajal_keterangan"
              type="checkbox"
              name="persiapan_vaskuler_akses_rajal_keterangan"
              className="me-1"
              value="1"
              disabled
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data?.rajal?.Persiapan_Vaskuler_Akses === 1}
              innerRef={register("persiapan_vaskuler_akses_rajal_keterangan") as any}
            />{' '}
            <Label>Data Rajal / Ranap</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col sm='4'>
            <Input
              id="persiapan_vaskuler_akses_keterangan"
              type="text"
              name="persiapan_vaskuler_akses_keterangan"
              innerRef={register() as any}
              placeholder='Keterangan'
              disabled
            />
          </Col>
        </Row>
      </FormGroup>
    </FormGroup>
  )
}

export default PatientVerification;
