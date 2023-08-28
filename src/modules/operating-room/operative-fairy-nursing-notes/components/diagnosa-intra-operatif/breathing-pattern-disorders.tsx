import { Col, FormGroup, Input, Label, Row, TabContent, TabPane } from 'reactstrap';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { DateTimeInput } from '@src/shared/input';
import { OperativeFairyNursingNotesModel } from '../../models';
import { useEffect } from 'react';


const BreathingPatternDisorders = (props: { data: OperativeFairyNursingNotesModel, register: any, activeTab: string, errors: any, processing: boolean, setValue: any }) => {
  const { data, register, activeTab, errors, processing, setValue } = props;

  const { nurses } = useAppSelector(state => state.nurse);

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  const handleNurseSigned = (image: SignatureModel) => {
    setValue('ttd_perawat_gangguan_pola_nafas', image.Signature);
    setValue('id_perawat_gangguan_pola_nafas', image.ID_Karyawan);
  }

  const handlePerawatKekuranganCairan = (image: SignatureModel) => {
    setValue('ttd_perawat_kekurangan_cairan', image.Signature);
    setValue('id_perawat_kekurangan_cairan', image.ID_Karyawan);
  }

  const handlePerawatTinggiCedera = (image: SignatureModel) => {
    setValue('ttd_perawat_tinggi_cedera', image.Signature);
    setValue('id_perawat_tinggi_cedera', image.ID_Karyawan);
  }

  const handlePerawatInfeksi = (image: SignatureModel) => {
    setValue('ttd_perawat_infeksi', image.Signature);
    setValue('id_perawat_infeksi', image.ID_Karyawan);
  }

  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId='2'>
        <FormGroup>
          <h4>Gangguan Pola Nafas</h4>
          <FormGroup className="form-group" row>
            <Row>
              <Col>
                <Label>Diagnosa</Label>
              </Col>
              <Col>
                <Label>Intervensi</Label>
              </Col>
              <Col>
                <Label>Evaluasi</Label>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <Input
                  id="gangguan_pola_nafas_diagnosa_neuromuskular"
                  type="checkbox"
                  name="gangguan_pola_nafas_diagnosa_neuromuskular"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Gangguan_Pola_Nafas_Diagnosa_Neuromuskular === 1}
                  innerRef={register("gangguan_pola_nafas_diagnosa_neuromuskular") as any}
                />{' '}
                <Label>Neuromuskular</Label>
              </Col>
              <Col md='4'>
                <Input
                  id="gangguan_pola_nafas_intervensi_miringkan_kepala"
                  type="checkbox"
                  name="gangguan_pola_nafas_intervensi_miringkan_kepala"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Gangguan_Pola_Nafas_Intervensi_Miringkan_Kepala === 1}
                  innerRef={register("gangguan_pola_nafas_intervensi_miringkan_kepala") as any}
                />{' '}
                <Label>Pertahankan jalan nafas pasien dengan</Label>
                <Label>Memiringkan Kepala</Label>
              </Col>
              <Col md='4'>
                <Input
                  id="gangguan_pola_nafas_evaluasi_ttv"
                  type="checkbox"
                  name="gangguan_pola_nafas_evaluasi_ttv"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Gangguan_Pola_Nafas_Evaluasi_TTV === 1}
                  innerRef={register("gangguan_pola_nafas_evaluasi_ttv") as any}
                />{' '}
                <Label>TTV Dalam Normal</Label>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup className="form-group" row>
            <Row>
              <Col md='4'>
                <Input
                  id="gangguan_pola_nafas_diagnosa_sekret"
                  type="checkbox"
                  name="gangguan_pola_nafas_diagnosa_sekret"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Gangguan_Pola_Nafas_Diagnosa_Sekret === 1}
                  innerRef={register("gangguan_pola_nafas_diagnosa_sekret") as any}
                />{' '}
                <Label>Penumpukan Sekret</Label>
              </Col>
              <Col md='4'>
                <Input
                  id="gangguan_pola_nafas_intervensi_rahang"
                  type="checkbox"
                  name="gangguan_pola_nafas_intervensi_rahang"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Gangguan_Pola_Nafas_Intervensi_Rahang === 1}
                  innerRef={register("gangguan_pola_nafas_intervensi_rahang") as any}
                />{' '}
                <Label>Hiperekstensi Rahang</Label>
              </Col>
              <Col md='4'>
                <Input
                  id="gangguan_pola_nafas_evaluasi_nafas_spontan"
                  type="checkbox"
                  name="gangguan_pola_nafas_evaluasi_nafas_spontan"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Gangguan_Pola_Nafas_Evaluasi_Nafas_Spontan === 1}
                  innerRef={register("gangguan_pola_nafas_evaluasi_nafas_spontan") as any}
                />{' '}
                <Label>Nafas Spontan</Label>
              </Col>
            </Row>
          </FormGroup>

          <FormGroup className="form-group" row>
            <Row>
              <Col md='4'></Col>
              <Col md='4'>
                <Input
                  id="gangguan_pola_nafas_intervensi_observasi"
                  type="checkbox"
                  name="gangguan_pola_nafas_intervensi_observasi"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Gangguan_Pola_Nafas_Intervensi_Observasi === 1}
                  innerRef={register("gangguan_pola_nafas_intervensi_observasi") as any}
                />{' '}
                <Label>Observasi RR dan Kedalaman Pernafasan,</Label>
                <Label>Cuping Hidung</Label>
              </Col>
              <Col md='4'>
                <Input
                  id="gangguan_pola_nafas_evaluasi_sianosis"
                  type="checkbox"
                  name="gangguan_pola_nafas_evaluasi_sianosis"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Gangguan_Pola_Nafas_Evaluasi_Sianosis === 1}
                  innerRef={register("gangguan_pola_nafas_evaluasi_sianosis") as any}
                />{' '}
                <Label>Sianosis</Label>
              </Col>
            </Row>
          </FormGroup>

          <FormGroup className="form-group" row>
            <Row>
              <Col md='4'></Col>
              <Col md='4'>
                <Input
                  id="gangguan_pola_nafas_intervensi_ttv"
                  type="checkbox"
                  name="gangguan_pola_nafas_intervensi_ttv"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Gangguan_Pola_Nafas_Intervensi_TTV === 1}
                  innerRef={register("gangguan_pola_nafas_intervensi_ttv") as any}
                />{' '}
                <Label>Pantau TTV secara kontinu</Label>
              </Col>
              <Col md='4'>
                <Input
                  id="gangguan_pola_nafas_evaluasi_o2"
                  type="checkbox"
                  name="gangguan_pola_nafas_evaluasi_o2"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Gangguan_Pola_Nafas_Evaluasi_O2 === 1}
                  innerRef={register("gangguan_pola_nafas_evaluasi_o2") as any}
                />{' '}
                <Label>O2</Label>
              </Col>
            </Row>
          </FormGroup>

          <FormGroup className="form-group" row>
            <Row>
              <Col md='4'></Col>
              <Col md='4'>
                <Input
                  id="gangguan_pola_nafas_intervensi_suction"
                  type="checkbox"
                  name="gangguan_pola_nafas_intervensi_suction"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Gangguan_Pola_Nafas_Intervensi_Suction === 1}
                  innerRef={register("gangguan_pola_nafas_intervensi_suction") as any}
                />{' '}
                <Label>Lakukan suction jika diperlukan</Label>
              </Col>
              <Col md='4'>
                <Input
                  id="gangguan_pola_nafas_evaluasi_o2_teks"
                  type="text"
                  style={{width: '200px'}}
                  name="gangguan_pola_nafas_evaluasi_o2_teks"
                  innerRef={register()}
                  invalid={errors.gangguan_pola_nafas_evaluasi_o2_teks && true}
                />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup className="form-group" row>
            <Row>
              <Col md='4'></Col>
              <Col md='4'>
                <Input
                  id="gangguan_pola_nafas_intervensi_o2"
                  type="checkbox"
                  name="gangguan_pola_nafas_intervensi_o2"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Gangguan_Pola_Nafas_Intervensi_O2 === 1}
                  innerRef={register("gangguan_pola_nafas_intervensi_o2") as any}
                />{' '}
                <Label>Pemberian O2 Sesuai Kebutuhan</Label>
              </Col>
              <Col md='4'>
                <Input
                  id="gangguan_pola_nafas_evaluasi_observasi"
                  type="checkbox"
                  name="gangguan_pola_nafas_evaluasi_observasi"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Gangguan_Pola_Nafas_Evaluasi_Observasi === 1}
                  innerRef={register("gangguan_pola_nafas_evaluasi_observasi") as any}
                />{' '}
                <Label>Selanjutnya Diobservasi Diruangan</Label>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup className="form-group" row>
            <Row>
              <Col md='4'></Col>
              <Col md='4'>
                <Input
                  id="gangguan_pola_nafas_intervensi_obat"
                  type="checkbox"
                  name="gangguan_pola_nafas_intervensi_obat"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Gangguan_Pola_Nafas_Intervensi_Obat === 1}
                  innerRef={register("gangguan_pola_nafas_intervensi_obat") as any}
                />{' '}
                <Label>Pemberian Obat</Label>
              </Col>
              <Col md='4'>
                <div className="d-flex justify-content-around my-0" style={{marginLeft:'-140px'}}>
                  <Signature
                    label="Perawat"
                    type="picker"
                    additionalLabel={(data && data.intra_operatif && data.intra_operatif.Nama_Perawat_Gangguan_Pola_Nafas && data.intra_operatif.Nama_Perawat_Gangguan_Pola_Nafas !== '') ? data.intra_operatif.Nama_Perawat_Gangguan_Pola_Nafas : undefined}
                    initialImage={(data && data.intra_operatif && data.intra_operatif.TTD_Perawat_Gangguan_Pola_Nafas && data.intra_operatif.TTD_Perawat_Gangguan_Pola_Nafas !== '') ? data.intra_operatif.TTD_Perawat_Gangguan_Pola_Nafas : undefined}
                    persons={nurses}
                    onSigned={(assigner: SignatureModel) => handleNurseSigned(assigner)}
                  />
                  <Input
                    type="hidden"
                    name="id_perawat_gangguan_pola_nafas"
                    innerRef={register()}
                    invalid={errors.id_perawat_gangguan_pola_nafas && true}
                  />
                  <Input
                    type="hidden"
                    name="ttd_perawat_gangguan_pola_nafas"
                    innerRef={register()}
                    invalid={errors.ttd_perawat_gangguan_pola_nafas && true}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md='4'></Col>
              <Col md='4'></Col>
              <Col md='4'>
                <Label>Tanggal Tanda Tangan :</Label>
                <Input
                  id="tanggal_perawat_gangguan_pola_nafas"
                  type="date"
                  name="tanggal_perawat_gangguan_pola_nafas"
                  innerRef={register()}
                  invalid={errors.tanggal_perawat_gangguan_pola_nafas && true}
                />
              </Col>
            </Row>
          </FormGroup>

          <hr />
          <h4>Resiko Tinggi Kekurangan Cairan</h4>

          <FormGroup className="form-group" row>
            <Row>
              <Col>
                <Label>Diagnosa</Label>
              </Col>
              <Col>
                <Label>Intervensi</Label>
              </Col>
              <Col>
                <Label>Evaluasi</Label>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <Input
                  id="kekurangan_cairan_diagnosa_intake"
                  type="checkbox"
                  name="kekurangan_cairan_diagnosa_intake"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Kekurangan_Cairan_Diagnosa_Intake === 1}
                  innerRef={register("kekurangan_cairan_diagnosa_intake") as any}
                />{' '}
                <Label>Pembatasan Intake</Label>
              </Col>
              <Col md='4'>
                <Input
                  id="kekurangan_cairan_intervensi_ukur"
                  type="checkbox"
                  name="kekurangan_cairan_intervensi_ukur"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Kekurangan_Cairan_Intervensi_Ukur === 1}
                  innerRef={register("kekurangan_cairan_intervensi_ukur") as any}
                />{' '}
                <Label>Ukur Input Dan Output Cairan</Label>
              </Col>
              <Col md='4'>
                <Input
                  id="kekurangan_cairan_evaluasi_ttv"
                  type="checkbox"
                  name="kekurangan_cairan_evaluasi_ttv"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Kekurangan_Cairan_Evaluasi_TTV === 1}
                  innerRef={register("kekurangan_cairan_evaluasi_ttv") as any}
                />{' '}
                <Label>TTV Dalam Batas Normal</Label>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <Input
                  id="kekurangan_cairan_diagnosa_abnormal"
                  type="checkbox"
                  name="kekurangan_cairan_diagnosa_abnormal"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Kekurangan_Cairan_Diagnosa_Abnormal === 1}
                  innerRef={register("kekurangan_cairan_diagnosa_abnormal") as any}
                />{' '}
                <Label>Hilangnya Cairan Tubuh Secara Abnormal</Label>
              </Col>
              <Col md='4'>
                <Input
                  id="kekurangan_cairan_intervensi_ttv"
                  type="checkbox"
                  name="kekurangan_cairan_intervensi_ttv"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Kekurangan_Cairan_Intervensi_TTV === 1}
                  innerRef={register("kekurangan_cairan_intervensi_ttv") as any}
                />{' '}
                <Label>Pantau TTV Secara Kontinu</Label>
              </Col>
              <Col md='4'>
                <Input
                  id="kekurangan_cairan_evaluasi_input"
                  type="checkbox"
                  name="kekurangan_cairan_evaluasi_input"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Kekurangan_Cairan_Evaluasi_Input === 1}
                  innerRef={register("kekurangan_cairan_evaluasi_input") as any}
                />{' '}
                <Label>Input</Label>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <Input
                  id="kekurangan_cairan_diagnosa_integritas"
                  type="checkbox"
                  name="kekurangan_cairan_diagnosa_integritas"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Kekurangan_Cairan_Diagnosa_Integritas === 1}
                  innerRef={register("kekurangan_cairan_diagnosa_integritas") as any}
                />{' '}
                <Label>Pengeluaran Integritas Pembuluh Darah</Label>
              </Col>
              <Col md='4'>
                <Input
                  id="kekurangan_cairan_intervensi_mual_muntah"
                  type="checkbox"
                  name="kekurangan_cairan_intervensi_mual_muntah"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Kekurangan_Cairan_Intervensi_Mual_Muntah === 1}
                  innerRef={register("kekurangan_cairan_intervensi_mual_muntah") as any}
                />{' '}
                <Label>Catat Munculnya Mual Muntah</Label>
              </Col>
              <Col md='4'>
                <Input
                  id="kekurangan_cairan_evaluasi_input_teks"
                  type="text"
                  style={{width: '200px'}}
                  name="kekurangan_cairan_evaluasi_input_teks"
                  placeholder='Ketikkan'
                  innerRef={register()}
                  invalid={errors.kekurangan_cairan_evaluasi_input_teks && true}
                />
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <Input
                  id="kekurangan_cairan_diagnosa_puasa"
                  type="checkbox"
                  name="kekurangan_cairan_diagnosa_puasa"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Kekurangan_Cairan_Diagnosa_Puasa === 1}
                  innerRef={register("kekurangan_cairan_diagnosa_puasa") as any}
                />{' '}
                <Label>Intervensi Praanestesi, Puasa</Label>
              </Col>
              <Col md='4'>
                <Input
                  id="kekurangan_cairan_intervensi_pembalut_luka"
                  type="checkbox"
                  name="kekurangan_cairan_intervensi_pembalut_luka"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Kekurangan_Cairan_Intervensi_Pembalut_Luka === 1}
                  innerRef={register("kekurangan_cairan_intervensi_pembalut_luka") as any}
                />{' '}
                <Label>Periksa Pembalut Luka</Label>
              </Col>
              <Col md='4'>
                <Input
                  id="kekurangan_cairan_evaluasi_output"
                  type="checkbox"
                  name="kekurangan_cairan_evaluasi_output"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Kekurangan_Cairan_Evaluasi_Output === 1}
                  innerRef={register("kekurangan_cairan_evaluasi_output") as any}
                />{' '}
                <Label>Output</Label>
              </Col>
            </Row>
            <Row>
              <Col md='4'></Col>
              <Col md='4'>
                <Input
                  id="kekurangan_cairan_intervensi_suhu_tubuh"
                  type="checkbox"
                  name="kekurangan_cairan_intervensi_suhu_tubuh"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Kekurangan_Cairan_Intervensi_Suhu_Tubuh === 1}
                  innerRef={register("kekurangan_cairan_intervensi_suhu_tubuh") as any}
                />{' '}
                <Label>Pantau Suhu Tubuh, Palpasi Denyut Perifer</Label>
              </Col>
              <Col md='4'>
                <Input
                  id="kekurangan_cairan_evaluasi_output_teks"
                  type="text"
                  style={{width: '200px'}}
                  name="kekurangan_cairan_evaluasi_output_teks"
                  innerRef={register()}
                  placeholder='Ketikkan'
                  invalid={errors.kekurangan_cairan_evaluasi_output_teks && true}
                />
              </Col>
            </Row>
            <Row>
              <Col md='4'></Col>
              <Col md='4'></Col>
              <Col md='4'>
                <Input
                  id="kekurangan_cairan_evaluasi_mukosa"
                  type="checkbox"
                  name="kekurangan_cairan_evaluasi_mukosa"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Kekurangan_Cairan_Evaluasi_Mukosa === 1}
                  innerRef={register("kekurangan_cairan_evaluasi_mukosa") as any}
                />{' '}
                <Label>Mukosa Bibir Lembab</Label>
              </Col>
            </Row>
            <Row>
              <Col md='4'></Col>
              <Col md='4'></Col>
              <Col md='4'>
                <Input
                  id="kekurangan_cairan_evaluasi_turgor"
                  type="checkbox"
                  name="kekurangan_cairan_evaluasi_turgor"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Kekurangan_Cairan_Evaluasi_Turgor === 1}
                  innerRef={register("kekurangan_cairan_evaluasi_turgor") as any}
                />{' '}
                <Label>Turgor elastis</Label>
              </Col>
            </Row>
            <Row>
              <Col md='4'></Col>
              <Col md='4'></Col>
              <Col md='4'>
                <div className="d-flex justify-content-around my-0" style={{marginLeft:'-140px'}}>
                  <Signature
                    label="Perawat"
                    type="picker"
                    additionalLabel={(data && data.intra_operatif && data.intra_operatif.Nama_Perawat_Kekurangan_Cairan && data.intra_operatif.Nama_Perawat_Kekurangan_Cairan !== '') ? data.intra_operatif.Nama_Perawat_Kekurangan_Cairan : undefined}
                    initialImage={(data && data.intra_operatif && data.intra_operatif.TTD_Perawat_Kekurangan_Cairan && data.intra_operatif.TTD_Perawat_Kekurangan_Cairan !== '') ? data.intra_operatif.TTD_Perawat_Kekurangan_Cairan : undefined}
                    persons={nurses}
                    onSigned={(assigner: SignatureModel) => handlePerawatKekuranganCairan(assigner)}
                  />
                  <Input
                    type="hidden"
                    name="id_perawat_kekurangan_cairan"
                    innerRef={register()}
                    invalid={errors.id_perawat_kekurangan_cairan && true}
                  />
                  <Input
                    type="hidden"
                    name="ttd_perawat_kekurangan_cairan"
                    innerRef={register()}
                    invalid={errors.ttd_perawat_kekurangan_cairan && true}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md='4'></Col>
              <Col md='4'></Col>
              <Col md='4'>
                <Label>Tanggal Tanda Tangan :</Label>
                <Input
                  id="tanggal_perawat_kekurangan_cairan"
                  type="date"
                  name="tanggal_perawat_kekurangan_cairan"
                  innerRef={register()}
                  invalid={errors.tanggal_perawat_kekurangan_cairan && true}
                />
              </Col>
            </Row>
          </FormGroup>

          <hr />
          <h4>Resiko Tinggi Cedera</h4>

          <FormGroup className="form-group w-100" row>
            <Col md='4'>
              <Label>Diagnosa</Label>
              <div>
                <Input
                  id="tinggi_cedera_diagnosa_pemajanan"
                  type="checkbox"
                  name="tinggi_cedera_diagnosa_pemajanan"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Tinggi_Cedera_Diagnosa_Pemajanan === 1}
                  innerRef={register("tinggi_cedera_diagnosa_pemajanan") as any}
                />{' '}
                <Label style={{width:'80%'}}>Pemajanan Peralatan Operasi</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="tinggi_cedera_diagnosa_hipoksia"
                  type="checkbox"
                  name="tinggi_cedera_diagnosa_hipoksia"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Tinggi_Cedera_Diagnosa_Hipoksia === 1}
                  innerRef={register("tinggi_cedera_diagnosa_hipoksia") as any}
                />{' '}
                <Label style={{width:'80%'}}>Hipoksia Jaringan, Perubahan Posisi, Faktor Pembekuan, Kerusakan Kulit</Label>
              </div>
            </Col>
            <Col md='4'>
              <Label>Intervensi</Label>
              <div>
                <Input
                  id="tinggi_cedera_intervensi_lepas_gigi"
                  type="checkbox"
                  name="tinggi_cedera_intervensi_lepas_gigi"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Tinggi_Cedera_Intervensi_Lepas_Gigi === 1}
                  innerRef={register("tinggi_cedera_intervensi_lepas_gigi") as any}
                />{' '}
                <Label style={{width:'80%'}}>Lepaskan Gigi Palsu / Kawat Gigi, Kontak Lensa, Perhiasan Sesuai Protokol Preoperasi</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="tinggi_cedera_intervensi_periksa_identitas"
                  type="checkbox"
                  name="tinggi_cedera_intervensi_periksa_identitas"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Tinggi_Cedera_Intervensi_Periksa_Identitas === 1}
                  innerRef={register("tinggi_cedera_intervensi_periksa_identitas") as any}
                />{' '}
                <Label style={{width:'80%'}}>Periksa Identitas Pasien Dan Jadwal Prosedur Operasi, Sesuaikan Gelang Nama Dengan Jadwal</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="tinggi_cedera_intervensi_terkunci"
                  type="checkbox"
                  name="tinggi_cedera_intervensi_terkunci"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Tinggi_Cedera_Intervensi_Terkunci === 1}
                  innerRef={register("tinggi_cedera_intervensi_terkunci") as any}
                />{' '}
                <Label style={{width:'80%'}}>Pastikan Brankar Atau Meja Operasi Terkunci Pada Waktu Pemindahan Pasien</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="tinggi_cedera_intervensi_sabuk_pengaman"
                  type="checkbox"
                  name="tinggi_cedera_intervensi_sabuk_pengaman"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Tinggi_Cedera_Intervensi_Sabuk_Pengaman === 1}
                  innerRef={register("tinggi_cedera_intervensi_sabuk_pengaman") as any}
                />{' '}
                <Label style={{width:'80%'}}>Pastikan Penggunaan Sabuk Pengaman Pada Paha Sesuai Kebutuhan</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="tinggi_cedera_intervensi_posisi"
                  type="checkbox"
                  name="tinggi_cedera_intervensi_posisi"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Tinggi_Cedera_Intervensi_Posisi === 1}
                  innerRef={register("tinggi_cedera_intervensi_posisi") as any}
                />{' '}
                <Label style={{width:'80%'}}>Siapkan Peralatan Dan Bantalan Untuk Posisi</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="tinggi_cedera_intervensi_elektrikal"
                  type="checkbox"
                  name="tinggi_cedera_intervensi_elektrikal"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Tinggi_Cedera_Intervensi_Elektrikal === 1}
                  innerRef={register("tinggi_cedera_intervensi_elektrikal") as any}
                />{' '}
                <Label style={{width:'80%'}}>Pastikan Keamanan Elektrikal Selama Prosedur Operasi</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="tinggi_cedera_intervensi_plate_diatermi"
                  type="checkbox"
                  name="tinggi_cedera_intervensi_plate_diatermi"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Tinggi_Cedera_Intervensi_Plate_Diatermi === 1}
                  innerRef={register("tinggi_cedera_intervensi_plate_diatermi") as any}
                />{' '}
                <Label style={{width:'80%'}}>Letakkan Plate Diatermi Sesuai Prosedur</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="tinggi_cedera_intervensi_cairan"
                  type="checkbox"
                  name="tinggi_cedera_intervensi_cairan"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Tinggi_Cedera_Intervensi_Cairan === 1}
                  innerRef={register("tinggi_cedera_intervensi_cairan") as any}
                />{' '}
                <Label>Pantau Input Dan Output Cairan</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="tinggi_cedera_intervensi_jumlah_pemakaian"
                  type="checkbox"
                  name="tinggi_cedera_intervensi_jumlah_pemakaian"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Tinggi_Cedera_Intervensi_Jumlah_Pemakaian === 1}
                  innerRef={register("tinggi_cedera_intervensi_jumlah_pemakaian") as any}
                />{' '}
                <Label style={{width:'80%'}}>Pastikan Dan Catat Jumlah Pemakaian Kasa, Alat, Jarum, Mata Pisau</Label>
              </div>
            </Col>
            <Col md='4'>
              <Label>Evaluasi</Label>
              <div >
                <Input
                  id="tinggi_cedera_evaluasi_posisi"
                  type="checkbox"
                  name="tinggi_cedera_evaluasi_posisi"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Tinggi_Cedera_Evaluasi_Posisi === 1}
                  innerRef={register("tinggi_cedera_evaluasi_posisi") as any}
                />{' '}
                <Label style={{width:'80%'}}>Posisi Pasien Sesuai Kebutuhan Sirkulasi Darah Tidak Terganggu, Tidak Ada Penekanan Pada Sistem Persarafan</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="tinggi_cedera_evaluasi_prosedur"
                  type="checkbox"
                  name="tinggi_cedera_evaluasi_prosedur"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Tinggi_Cedera_Evaluasi_Prosedur === 1}
                  innerRef={register("tinggi_cedera_evaluasi_prosedur") as any}
                />{' '}
                <Label style={{width:'80%'}}>Penggunaan alat elektrosurgikal sesuai Prosedur</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="tinggi_cedera_evaluasi_jumlah"
                  type="checkbox"
                  name="tinggi_cedera_evaluasi_jumlah"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Tinggi_Cedera_Evaluasi_Jumlah === 1}
                  innerRef={register("tinggi_cedera_evaluasi_jumlah") as any}
                />{' '}
                <Label style={{width:'80%'}}>Jumlah Kasa, Jarum, Instrumen, Pisau Operasi Sebelum Dan Sesudah Tindakan</Label>
              </div>
              <div className='d-flex justify-content-center align-items-center mt-1'>
                <Signature
                  label="Perawat"
                  type="picker"
                  additionalLabel={(data && data.intra_operatif && data.intra_operatif.Nama_Perawat_Tinggi_Cedera && data.intra_operatif.Nama_Perawat_Tinggi_Cedera !== '') ? data.intra_operatif.Nama_Perawat_Tinggi_Cedera : undefined}
                  initialImage={(data && data.intra_operatif && data.intra_operatif.TTD_Perawat_Tinggi_Cedera && data.intra_operatif.TTD_Perawat_Tinggi_Cedera !== '') ? data.intra_operatif.TTD_Perawat_Tinggi_Cedera : undefined}
                  persons={nurses}
                  onSigned={(assigner: SignatureModel) => handlePerawatTinggiCedera(assigner)}
                />
              </div>
              <Input
                type="hidden"
                name="id_perawat_tinggi_cedera"
                innerRef={register()}
                invalid={errors.id_perawat_tinggi_cedera && true}
              />
              <Input
                type="hidden"
                name="ttd_perawat_tinggi_cedera"
                innerRef={register()}
                invalid={errors.ttd_perawat_tinggi_cedera && true}
              />
              <div>
                <Label>Tanggal Tanda Tangan :</Label>
                <Input
                  id="tanggal_perawat_tinggi_cedera"
                  type="date"
                  name="tanggal_perawat_tinggi_cedera"
                  innerRef={register()}
                  invalid={errors.tanggal_perawat_tinggi_cedera && true}
                />
              </div>
            </Col>
          </FormGroup>

          <hr />
          <h4>Resiko Infeksi</h4>

          <FormGroup className="form-group" row>
            <Col md='4'>
              <Label>Diagnosa</Label>
              <div>
                <Input
                  id="infeksi_diagnosa_trauma"
                  type="checkbox"
                  name="infeksi_diagnosa_trauma"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Infeksi_Diagnosa_Trauma === 1}
                  innerRef={register("infeksi_diagnosa_trauma") as any}
                />{' '}
                <Label>Trauma post operasi</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="infeksi_diagnosa_lingkungan"
                  type="checkbox"
                  name="infeksi_diagnosa_lingkungan"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Infeksi_Diagnosa_Lingkungan === 1}
                  innerRef={register("infeksi_diagnosa_lingkungan") as any}
                />{' '}
                <Label>Pemajanan Lingkungan</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="infeksi_diagnosa_peralatan"
                  type="checkbox"
                  name="infeksi_diagnosa_peralatan"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Infeksi_Diagnosa_Peralatan === 1}
                  innerRef={register("infeksi_diagnosa_peralatan") as any}
                />{' '}
                <Label>Pemajanan Peralatan</Label>
              </div>
            </Col>
            <Col md='4'>
              <Label>Intervensi</Label>
              <div>
                <Input
                  id="infeksi_intervensi_cuci_tangan"
                  type="checkbox"
                  name="infeksi_intervensi_cuci_tangan"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Infeksi_Intervensi_Cuci_Tangan === 1}
                  innerRef={register("infeksi_intervensi_cuci_tangan") as any}
                />{' '}
                <Label style={{width:'80%'}}>Pastikan Semua Tim Bedah Telah Melakukan Cuci Tangan Dengan Benar</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="infeksi_intervensi_disinfeksi"
                  type="checkbox"
                  name="infeksi_intervensi_disinfeksi"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Infeksi_Intervensi_Disinfeksi === 1}
                  innerRef={register("infeksi_intervensi_disinfeksi") as any}
                />{' '}
                <Label style={{width:'80%'}}>Lakukan Desinfeksi Area Pembedahan Dan Pasang Duk / Drape Steril Pada Area Pembedahan</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="infeksi_intervensi_kadaluarsa"
                  type="checkbox"
                  name="infeksi_intervensi_kadaluarsa"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Infeksi_Intervensi_Kadaluarsa === 1}
                  innerRef={register("infeksi_intervensi_kadaluarsa") as any}
                />{' '}
                <Label>Cek Kadaluarsa Alkes Yang Digunakan</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="infeksi_intervensi_sterilitas"
                  type="checkbox"
                  name="infeksi_intervensi_sterilitas"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Infeksi_Intervensi_Sterilitas === 1}
                  innerRef={register("infeksi_intervensi_sterilitas") as any}
                />{' '}
                <Label>Pertahan Sterilitas Selama Pembedahan</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="infeksi_intervensi_penutup"
                  type="checkbox"
                  name="infeksi_intervensi_penutup"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Infeksi_Intervensi_Penutup === 1}
                  innerRef={register("infeksi_intervensi_penutup") as any}
                />{' '}
                <Label>Lindungi</Label>
              </div>
            </Col>
            <Col md='4'>
              <Label>Evaluasi</Label>
              <div>
                <Input
                  id="infeksi_evaluasi_pertahankan"
                  type="checkbox"
                  name="infeksi_evaluasi_pertahankan"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Infeksi_Evaluasi_Pertahankan === 1}
                  innerRef={register("infeksi_evaluasi_pertahankan") as any}
                />{' '}
                <Label style={{width:'85%'}}>Selama Operasi Lingkungan Yang Steril Dapat Dipertahankan</Label>
              </div>
              <div className='d-flex justify-content-center align-items-center mt-1'>
                <Signature
                  label="Perawat"
                  type="picker"
                  additionalLabel={(data &&  data.intra_operatif && data.intra_operatif.Nama_Perawat_Infeksi && data.intra_operatif.Nama_Perawat_Infeksi !== '') ? data.intra_operatif.Nama_Perawat_Infeksi : undefined}
                  initialImage={(data && data.intra_operatif && data.intra_operatif.TTD_Perawat_Infeksi && data.intra_operatif.TTD_Perawat_Infeksi !== '') ? data.intra_operatif.TTD_Perawat_Infeksi : undefined}
                  persons={nurses}
                  onSigned={(assigner: SignatureModel) => handlePerawatInfeksi(assigner)}
                />
                <Input
                  type="hidden"
                  name="id_perawat_infeksi"
                  innerRef={register()}
                  invalid={errors.id_perawat_infeksi && true}
                />
                <Input
                  type="hidden"
                  name="ttd_perawat_infeksi"
                  innerRef={register()}
                  invalid={errors.ttd_perawat_infeksi && true}
                />
              </div>
              <div className='mt-1'>
                <Label>Tanggal Tanda Tangan :</Label>
                <Input
                  id="tanggal_perawat_infeksi"
                  type="date"
                  name="tanggal_perawat_infeksi"
                  innerRef={register()}
                  invalid={errors.tanggal_perawat_infeksi && true}
                />
              </div>
            </Col>
          </FormGroup>
        </FormGroup>
      </TabPane>
    </TabContent>
  )
}

export default BreathingPatternDisorders;
