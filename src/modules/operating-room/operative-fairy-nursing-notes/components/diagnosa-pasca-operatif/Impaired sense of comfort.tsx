import { Button, Col, FormGroup, Input, Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from 'react';
import { OperativeFairyNursingNotesModel } from '../../models';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';


const ImpairedSenseOfComfort = (props: {  data: OperativeFairyNursingNotesModel, register: any, activeTab: string, errors: any, processing: boolean, setValue: any, defaultPattern: any }) => {
  const { data, register, activeTab, errors, processing, setValue, defaultPattern } = props;
  const { nurses } = useAppSelector(state => state.nurse);
  const [diagnoseSkin, setDiagnoseSkin] = useState<string | undefined>();
  const [intervent1, setIntervent1] = useState<string | undefined>();
  const [intervent2, setIntervent2] = useState<string | undefined>();
  const [evaluation1, setEvaluation1] = useState<string | undefined>();
  const [evaluation2, setEvaluation2] = useState<string | undefined>();

  useEffect(() => {
    if (defaultPattern === '1') {
      setValue('nyeri_diagnosa_gaangguan_kulit', '1');
      setDiagnoseSkin('1')
      setValue('nyeri_intervensi_teknik_relaksaksi', '1');
      setIntervent1('1')
      setValue('nyeri_intervensi_teknik_distraksi_pasca', '1');
      setIntervent2('1')
      setValue('nyeri_evaluasi_nyeri_terkontrol', '1');
      setEvaluation1('1')
      setValue('nyeri_evaluasi_nyeri_berkurang', '1');
      setEvaluation2('1')
    } else if (defaultPattern === '0') {
      setValue('nyeri_diagnosa_gaangguan_kulit', undefined);
      setDiagnoseSkin(undefined)
      setValue('nyeri_intervensi_teknik_relaksaksi', undefined);
      setIntervent1(undefined)
      setValue('nyeri_intervensi_teknik_distraksi_pasca', undefined);
      setIntervent2(undefined)
      setValue('nyeri_evaluasi_nyeri_terkontrol', undefined);
      setEvaluation1(undefined)
      setValue('nyeri_evaluasi_nyeri_berkurang', undefined);
      setEvaluation2(undefined)
    }
  }, [defaultPattern]);

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  const handlePerawatNyeri = (image: SignatureModel) => {
    setValue('ttd_perawat_nyeri_pasca', image.Signature);
    setValue('id_perawat_nyeri_pasca', image.ID_Karyawan);
  }

  const handlePerawatKecemasan = (image: SignatureModel) => {
    setValue('ttd_perawat_infeksi_pasca', image.Signature);
    setValue('id_perawat_infeksi_pasca', image.ID_Karyawan);
  }

  const handlePerawatPerubahan = (image: SignatureModel) => {
    setValue('ttd_perawat_perubahan', image.Signature);
    setValue('id_perawat_perubahan', image.ID_Karyawan);
  }

  const handlePerawatKecemasanPasca = (image: SignatureModel) => {
    setValue('ttd_perawat_kecemasan_pasca', image.Signature);
    setValue('id_perawat_kecemasan_pasca', image.ID_Karyawan);
  }

  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId='4'>
        <FormGroup>
          <hr />
          <h4>Gangguan Rasa Nyaman: Nyeri</h4>

          <FormGroup className="form-group" row>
            <Col md='4'>
              <Label>Diagnosa</Label>
              <div>
                <Input
                  id="nyeri_diagnosa_luka_pasca"
                  type="checkbox"
                  name="nyeri_diagnosa_luka_pasca"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Nyeri_Diagnosa_Luka === 1}
                  innerRef={register("nyeri_diagnosa_luka_pasca") as any}
                />{' '}
                <Label>Luka Operasi</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="nyeri_diagnosa_gaangguan_kulit"
                  type="checkbox"
                  name="nyeri_diagnosa_gaangguan_kulit"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDiagnoseSkin('1');
                    } else {
                      setDiagnoseSkin(undefined);
                    }
                    handleCheckboxChange(e);
                  }}
                  checked={(data && data.pasca_operatif && data.pasca_operatif.Nyeri_Diagnosa_Gaangguan_Kulit === 1) || diagnoseSkin === '1'}
                  innerRef={register("nyeri_diagnosa_gaangguan_kulit") as any}
                />{' '}
                <Label style={{width:'80%'}}>Gangguan Pada Kulit Jaringan Otot Dan Intergritas Kulit</Label>
              </div>
            </Col>
            <Col md='4'>
              <Label>Intervensi</Label>
              <div>
                <Input
                  id="nyeri_intervensi_kaji_lokasi"
                  type="checkbox"
                  name="nyeri_intervensi_kaji_lokasi"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Nyeri_Intervensi_Kaji_Lokasi === 1}
                  innerRef={register("nyeri_intervensi_kaji_lokasi") as any}
                />{' '}
                <Label>Kaji Lokasi, Intensitas Nyeri Klien</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="nyeri_intervensi_kaji_ttv"
                  type="checkbox"
                  name="nyeri_intervensi_kaji_ttv"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Nyeri_Intervensi_Kaji_Ttv === 1}
                  innerRef={register("nyeri_intervensi_kaji_ttv") as any}
                />{' '}
                <Label style={{width:'80%'}}>Kaji TTV, Perhatikan Takikardi, Peningkatan Pernafasan</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="nyeri_intervensi_teknik_relaksaksi"
                  type="checkbox"
                  name="nyeri_intervensi_teknik_relaksaksi"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setIntervent1('1');
                    } else {
                      setIntervent1(undefined);
                    }
                    handleCheckboxChange(e);
                  }}
                  checked={(data && data.pasca_operatif && data.pasca_operatif.Nyeri_Intervensi_Teknik_Relaksaksi === 1) || intervent1 === '1'}
                  innerRef={register("nyeri_intervensi_teknik_relaksaksi") as any}
                />{' '}
                <Label>Ajarkan Teknik Relaksasi</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="nyeri_intervensi_posisi_nyaman_pasca"
                  type="checkbox"
                  name="nyeri_intervensi_posisi_nyaman_pasca"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Nyeri_Intervensi_Posisi_Nyaman === 1}
                  innerRef={register("nyeri_intervensi_posisi_nyaman_pasca") as any}
                />{' '}
                <Label>Berikan Posisi Nyaman</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="nyeri_intervensi_teknik_distraksi_pasca"
                  type="checkbox"
                  name="nyeri_intervensi_teknik_distraksi_pasca"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setIntervent2('1');
                    } else {
                      setIntervent2(undefined);
                    }
                    handleCheckboxChange(e);
                  }}
                  checked={(data && data.pasca_operatif && data.pasca_operatif.Nyeri_Intervensi_Teknik_Distraksi === 1) || intervent2 === '1'}
                  innerRef={register("nyeri_intervensi_teknik_distraksi_pasca") as any}
                />{' '}
                <Label>Ajarkan Teknik Distraksi</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="nyeri_intervensi_pemeberian_analgesi"
                  type="checkbox"
                  name="nyeri_intervensi_pemeberian_analgesi"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Nyeri_Intervensi_Pemeberian_Analgesi === 1}
                  innerRef={register("nyeri_intervensi_pemeberian_analgesi") as any}
                />{' '}
                <Label> Lakukan Kolaborasi Pemberian Antalgesi</Label>
              </div>
            </Col>
            <Col md='4'>
              <Label>Evaluasi</Label>
              <div>
                <Input
                  id="nyeri_evaluasi_ttv"
                  type="checkbox"
                  name="nyeri_evaluasi_ttv"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Nyeri_Evaluasi_Ttv === 1}
                  innerRef={register("nyeri_evaluasi_ttv") as any}
                />{' '}
                <Label> TTV Dalam Batas Normal</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="nyeri_evaluasi_nyeri_terkontrol"
                  type="checkbox"
                  name="nyeri_evaluasi_nyeri_terkontrol"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setEvaluation1('1');
                    } else {
                      setEvaluation1(undefined);
                    }
                    handleCheckboxChange(e);
                  }}
                  checked={(data && data.pasca_operatif && data.pasca_operatif.Nyeri_Evaluasi_Nyeri_Terkontrol === 1) || evaluation1 === '1'}
                  innerRef={register("nyeri_evaluasi_nyeri_terkontrol") as any}
                />{' '}
                <Label>Nyeri Terkontrol</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="nyeri_evaluasi_nyeri_berkurang"
                  type="checkbox"
                  name="nyeri_evaluasi_nyeri_berkurang"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setEvaluation2('1');
                    } else {
                      setEvaluation2(undefined);
                    }
                    handleCheckboxChange(e);
                  }}
                  checked={(data && data.pasca_operatif && data.pasca_operatif.Nyeri_Evaluasi_Nyeri_Berkurang === 1) || evaluation2 === '1'}
                  innerRef={register("nyeri_evaluasi_nyeri_berkurang") as any}
                />{' '}
                <Label>Pasien Mengatakan Nyeri Berkurang</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="nyeri_evaluasi_diobservasi"
                  type="checkbox"
                  name="nyeri_evaluasi_diobservasi"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Nyeri_Evaluasi_Diobservasi === 1}
                  innerRef={register("nyeri_evaluasi_diobservasi") as any}
                />{' '}
                <Label>Selanjutnya Diobservasi Diruangan</Label>
              </div>
              <div className='d-flex justify-content-center align-items-center mt-1'>
                <Signature
                  label="Perawat"
                  type="picker"
                  additionalLabel={(data && data.pasca_operatif && data.pasca_operatif.Nama_Perawat_Nyeri && data.pasca_operatif.Nama_Perawat_Nyeri !== '') ? data.pasca_operatif.Nama_Perawat_Nyeri : undefined}
                  initialImage={(data && data.pasca_operatif && data.pasca_operatif.TTD_Perawat_Nyeri && data.pasca_operatif.TTD_Perawat_Nyeri !== '') ? data.pasca_operatif.TTD_Perawat_Nyeri : undefined}
                  persons={nurses}
                  onSigned={(assigner: SignatureModel) => handlePerawatNyeri(assigner)}
                />
                <Input
                  type="hidden"
                  name="id_perawat_nyeri_pasca"
                  innerRef={register()}
                  invalid={errors.id_perawat_nyeri_pasca && true}
                />
                <Input
                  type="hidden"
                  name="ttd_perawat_nyeri_pasca"
                  innerRef={register()}
                  invalid={errors.ttd_perawat_nyeri_pasca && true}
                />
              </div>
              <div className='mt-1'>
                <Label>Tanggal Tanda Tangan :</Label>
                <Input
                  id="tanggal_perawat_nyeri_pasca"
                  type="date"
                  name="tanggal_perawat_nyeri_pasca"
                  innerRef={register()}
                  invalid={errors.tanggal_perawat_nyeri_pasca && true}
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
                  id="infeksi_diagnosa_trauma_pasca"
                  type="checkbox"
                  name="infeksi_diagnosa_trauma_pasca"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Infeksi_Diagnosa_Trauma === 1}
                  innerRef={register("infeksi_diagnosa_trauma_pasca") as any}
                />{' '}
                <Label>Trauma Post Operasi</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="infeksi_diagnosa_lingkungan_pasca"
                  type="checkbox"
                  name="infeksi_diagnosa_lingkungan_pasca"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Infeksi_Diagnosa_Lingkungan === 1}
                  innerRef={register("infeksi_diagnosa_lingkungan_pasca") as any}
                />{' '}
                <Label>Pemajanan Lingkungan</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="infeksi_diagnosa_peralatan_pasca"
                  type="checkbox"
                  name="infeksi_diagnosa_peralatan_pasca"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Infeksi_Diagnosa_Peralatan === 1}
                  innerRef={register("infeksi_diagnosa_peralatan_pasca") as any}
                />{' '}
                <Label>Pemajanan Peralatan Operasi</Label>
              </div>
            </Col>
            <Col md='4'>
              <Label>Intervensi</Label>
              <div>
                <Input
                  id="infeksi_intervensi_cuci_tangan_pasca"
                  type="checkbox"
                  name="infeksi_intervensi_cuci_tangan_pasca"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Infeksi_Intervensi_Cuci_Tangan === 1}
                  innerRef={register("infeksi_intervensi_cuci_tangan_pasca") as any}
                />{' '}
                <Label style={{width:'80%'}}>Pastikan Semua Tim Bedah Telah Melakukan Cuci Tangan Dengan Benar</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="infeksi_intervensi_disinfeksi_pasca"
                  type="checkbox"
                  name="infeksi_intervensi_disinfeksi_pasca"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Infeksi_Intervensi_Disinfeksi === 1}
                  innerRef={register("infeksi_intervensi_disinfeksi_pasca") as any}
                />{' '}
                <Label style={{width:'80%'}}>Lakukan Desinfeksi Area Pembedahan Dan Pasang Duk / Drape Steril Pada Area Pembedahan</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="infeksi_intervensi_kadaluarsa_pasca"
                  type="checkbox"
                  name="infeksi_intervensi_kadaluarsa_pasca"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Infeksi_Intervensi_Kadaluarsa === 1}
                  innerRef={register("infeksi_intervensi_kadaluarsa_pasca") as any}
                />{' '}
                <Label>Cek Kadaluarsa Alkes Yang Digunakan</Label>
              </div>
              <div>
                <Input
                  id="infeksi_intervensi_sterilitas_pasca"
                  type="checkbox"
                  name="infeksi_intervensi_sterilitas_pasca"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Infeksi_Intervensi_Sterilitas === 1}
                  innerRef={register("infeksi_intervensi_sterilitas_pasca") as any}
                />{' '}
                <Label>Pertahan Sterilitas Selama Pembedahan</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="infeksi_intervensi_penutup_pasca"
                  type="checkbox"
                  name="infeksi_intervensi_penutup_pasca"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Infeksi_Intervensi_Penutup === 1}
                  innerRef={register("infeksi_intervensi_penutup_pasca") as any}
                />{' '}
                <Label>Lindungi Luka Dengan Penutup Yang Steril</Label>
              </div>
            </Col>
            <Col md='4'>
              <Label>Evaluasi</Label>
              <div>
                <Input
                  id="infeksi_evaluasi_pertahankan_pasca"
                  type="checkbox"
                  name="infeksi_evaluasi_pertahankan_pasca"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Infeksi_Evaluasi_Pertahankan === 1}
                  innerRef={register("infeksi_evaluasi_pertahankan_pasca") as any}
                />{' '}
                <Label style={{width:'80%'}}>Selama Operasi Lingkungan Yang Steril Dapat Dipertahankan</Label>
              </div>
              <div className='d-flex justify-content-center align-items-center mt-1'>
                <Signature
                  label="Perawat"
                  type="picker"
                  additionalLabel={(data && data.pasca_operatif && data.pasca_operatif.Nama_Perawat_Infeksi && data.pasca_operatif.Nama_Perawat_Infeksi !== '') ? data.pasca_operatif.Nama_Perawat_Infeksi : undefined}
                  initialImage={(data && data.pasca_operatif && data.pasca_operatif.TTD_Perawat_Infeksi && data.pasca_operatif.TTD_Perawat_Infeksi !== '') ? data.pasca_operatif.TTD_Perawat_Infeksi : undefined}
                  persons={nurses}
                  onSigned={(assigner: SignatureModel) => handlePerawatKecemasan(assigner)}
                />
                <Input
                  type="hidden"
                  name="id_perawat_infeksi_pasca"
                  innerRef={register()}
                  invalid={errors.id_perawat_infeksi_pasca && true}
                />
                <Input
                  type="hidden"
                  name="ttd_perawat_infeksi_pasca"
                  innerRef={register()}
                  invalid={errors.ttd_perawat_infeksi_pasca && true}
                />
              </div>
              <div className='mt-1'>
                <Label>Tanggal Tanda Tangan :</Label>
                <Input
                  id="tanggal_perawat_infeksi_pasca"
                  type="date"
                  name="tanggal_perawat_infeksi_pasca"
                  innerRef={register()}
                  invalid={errors.tanggal_perawat_infeksi_pasca && true}
                />
              </div>
            </Col>
          </FormGroup>

          <hr />
          <h4>Resiko Tinggi Perubahan Tubuh Tubuh</h4>

          <FormGroup className="form-group" row>
            <Col md='4'>
              <Label>Diagnosa</Label>
              <div>
                <Input
                  id="perubahan_diagnosa_suhu"
                  type="checkbox"
                  name="perubahan_diagnosa_suhu"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Perubahan_Diagnosa_Suhu === 1}
                  innerRef={register("perubahan_diagnosa_suhu") as any}
                />{' '}
                <Label style={{width:'80%'}}>Pemajaan Suhu Rendah Dalam Jangka Lama</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="perubahan_diagnosa_obat"
                  type="checkbox"
                  name="perubahan_diagnosa_obat"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Perubahan_Diagnosa_Obat === 1}
                  innerRef={register("perubahan_diagnosa_obat") as any}
                />{' '}
                <Label>Penggunaan Obat,Zat Anestesi</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="perubahan_diagnosa_dehidrasi"
                  type="checkbox"
                  name="perubahan_diagnosa_dehidrasi"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Perubahan_Diagnosa_Dehidrasi === 1}
                  innerRef={register("perubahan_diagnosa_dehidrasi") as any}
                />{' '}
                <Label>Dehidrasi</Label>
              </div>
            </Col>
            <Col md='4'>
              <Label>Intervensi</Label>
              <div>
                <Input
                  id="perubahan_intervensi_catatan_suhu"
                  type="checkbox"
                  name="perubahan_intervensi_catatan_suhu"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Perubahan_Intervensi_Catatan_Suhu === 1}
                  innerRef={register("perubahan_intervensi_catatan_suhu") as any}
                />{' '}
                <Label>Catatan Suhu Post</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="perubahan_intervensi_kaji_suhu"
                  type="checkbox"
                  name="perubahan_intervensi_kaji_suhu"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Perubahan_Intervensi_Kaji_Suhu === 1}
                  innerRef={register("perubahan_intervensi_kaji_suhu") as any}
                />{' '}
                <Label style={{width:'80%'}}>Kaji Suhu Lingkungan Dan Modifikasi Sesuai Kebutuhan ( Selimut Penghangat Meningkatkan Suhu Ruangan )</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="perubahan_intervensi_kolaborasi"
                  type="checkbox"
                  name="perubahan_intervensi_kolaborasi"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Perubahan_Intervensi_Kolaborasi === 1}
                  innerRef={register("perubahan_intervensi_kolaborasi") as any}
                />{' '}
                <Label>Kolaborasi Penggunaan Obat</Label>
              </div>
            </Col>
            <Col md='4'>
              <Label>Evaluasi</Label>
              <div>
                <Input
                  id="perubahan_evaluasi_pasien_dingin"
                  type="checkbox"
                  name="perubahan_evaluasi_pasien_dingin"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Perubahan_Evaluasi_Pasien_Dingin === 1}
                  innerRef={register("perubahan_evaluasi_pasien_dingin") as any}
                />{' '}
                <Label>Pasien Mengatakan Dingin Berkurang</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="perubahan_evaluasi_pasien_menggigil"
                  type="checkbox"
                  name="perubahan_evaluasi_pasien_menggigil"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Perubahan_Evaluasi_Pasien_Menggigil === 1}
                  innerRef={register("perubahan_evaluasi_pasien_menggigil") as any}
                />{' '}
                <Label>Pasien Tidak Menggigil</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="perubahan_evaluasi_suhu_ruangan"
                  type="checkbox"
                  name="perubahan_evaluasi_suhu_ruangan"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Perubahan_Evaluasi_Suhu_Ruangan === 1}
                  innerRef={register("perubahan_evaluasi_suhu_ruangan") as any}
                />{' '}
                <Label>Suhu Ruangan</Label>
              </div>
              <div>
                <Input
                  id="evaluasi_suhu_ruangan_teks"
                  type="text"
                  style={{width: '200px'}}
                  name="evaluasi_suhu_ruangan_teks"
                  innerRef={register()}
                  invalid={errors.evaluasi_suhu_ruangan_teks && true}
                />
              </div>
              <div className='d-flex justify-content-center align-items-center mt-1'>
                <Signature
                  label="Perawat"
                  type="picker"
                  additionalLabel={(data && data.pasca_operatif && data.pasca_operatif.Nama_Perawat_Perubahan && data.pasca_operatif.Nama_Perawat_Perubahan !== '') ? data.pasca_operatif.Nama_Perawat_Perubahan : undefined}
                  initialImage={(data && data.pasca_operatif && data.pasca_operatif.TTD_Perawat_Perubahan && data.pasca_operatif.TTD_Perawat_Perubahan !== '') ? data.pasca_operatif.TTD_Perawat_Perubahan : undefined}
                  persons={nurses}
                  onSigned={(assigner: SignatureModel) => handlePerawatPerubahan(assigner)}
                />
                <Input
                  type="hidden"
                  name="id_perawat_perubahan"
                  innerRef={register()}
                  invalid={errors.id_perawat_perubahan && true}
                />
                <Input
                  type="hidden"
                  name="ttd_perawat_perubahan"
                  innerRef={register()}
                  invalid={errors.ttd_perawat_perubahan && true}
                />
              </div>
              <div className='mt-1'>
                <Label>Tanggal Tanda Tangan :</Label>
                <Input
                  id="tanggal_perawat_perubahan"
                  type="date"
                  name="tanggal_perawat_perubahan"
                  innerRef={register()}
                  invalid={errors.tanggal_perawat_perubahan && true}
                />
              </div>
            </Col>
          </FormGroup>

          <hr />
          <h4>Kecemasan pasca operatif</h4>

          <FormGroup className="form-group" row>
            <Col md='4'>
              <Label>Diagnosa</Label>
              <div>
                <Input
                  id="kecemasan_pasca_operatif_diagnosa_perawatan_luka"
                  type="checkbox"
                  name="kecemasan_pasca_operatif_diagnosa_perawatan_luka"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Kecemasan_Pasca_Operatif_Diagnosa_Perawatan_Luka === 1}
                  innerRef={register("kecemasan_pasca_operatif_diagnosa_perawatan_luka") as any}
                />{' '}
                <Label style={{width:'80%'}}>Kurang Pengetahuan Tentang Perawatan Luka Pasca Bedah</Label>
              </div>
            </Col>
            <Col md='4'>
              <Label>Intervensi</Label>
              <div>
                <Input
                  id="kecemasan_pasca_operatif_intervensi_gambar_luka"
                  type="checkbox"
                  name="kecemasan_pasca_operatif_intervensi_gambar_luka"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Kecemasan_Pasca_Operatif_Intervensi_Gambar_Luka === 1}
                  innerRef={register("kecemasan_pasca_operatif_intervensi_gambar_luka") as any}
                />{' '}
                <Label>Jelaskan Gambaran Luka Operasi</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="kecemasan_pasca_operatif_intervensi_waktu_perasaan"
                  type="checkbox"
                  name="kecemasan_pasca_operatif_intervensi_waktu_perasaan"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Kecemasan_Pasca_Operatif_Intervensi_Waktu_Perasaan === 1}
                  innerRef={register("kecemasan_pasca_operatif_intervensi_waktu_perasaan") as any}
                />{' '}
                <Label style={{width:'80%'}}>Berikan Waktu Untuk Mengepersikan Perasaan</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="kecemasan_pasca_operatif_intervensi_beri_informasi"
                  type="checkbox"
                  name="kecemasan_pasca_operatif_intervensi_beri_informasi"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Kecemasan_Pasca_Operatif_Intervensi_Beri_Informasi === 1}
                  innerRef={register("kecemasan_pasca_operatif_intervensi_beri_informasi") as any}
                />{' '}
                <Label style={{width:'80%'}}>Beri Informasi Kepada Pasien Tentang Pantangan / Larangan Pasca Operasi</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="kecemasan_pasca_operatif_intervensi_perbaikan_pengelihatan"
                  type="checkbox"
                  name="kecemasan_pasca_operatif_intervensi_perbaikan_pengelihatan"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Kecemasan_Pasca_Operatif_Intervensi_Perbaikan_Pengelihatan === 1}
                  innerRef={register("kecemasan_pasca_operatif_intervensi_perbaikan_pengelihatan") as any}
                />{' '}
                <Label style={{width:'80%'}}>Informasikan Bahwa Perbaikan Pengelihatan Tidak Terjadi Secara Langsung, Tetapi Bertahap Sesuai Penurunan Bengkak Pada Mata Dan Perbaikan Kornea</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="kecemasan_pasca_operatif_intervensi_perasaan_klien"
                  type="checkbox"
                  name="kecemasan_pasca_operatif_intervensi_perasaan_klien"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Kecemasan_Pasca_Operatif_Intervensi_Perasaan_Klien === 1}
                  innerRef={register("kecemasan_pasca_operatif_intervensi_perasaan_klien") as any}
                />{' '}
                <Label style={{width:'80%'}}>Mendorong Klien Mengukapkan Perasaannya</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="kecemasan_pasca_operatif_intervensi_kesempatan_bertanya"
                  type="checkbox"
                  name="kecemasan_pasca_operatif_intervensi_kesempatan_bertanya"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Kecemasan_Pasca_Operatif_Intervensi_Kesempatan_Bertanya === 1}
                  innerRef={register("kecemasan_pasca_operatif_intervensi_kesempatan_bertanya") as any}
                />{' '}
                <Label style={{width:'80%'}}>Memberikan Kesempatan Bertanya Dapat Memeperjelas Pemahaman</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="kecemasan_pasca_operatif_intervensi_nomor_pasien"
                  type="checkbox"
                  name="kecemasan_pasca_operatif_intervensi_nomor_pasien"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Kecemasan_Pasca_Operatif_Intervensi_Nomor_Pasien === 1}
                  innerRef={register("kecemasan_pasca_operatif_intervensi_nomor_pasien") as any}
                />{' '}
                <Label style={{width:'80%'}}>Berikan Nomor Yang Bisa Diberikan Jika Pesien Ingin Menanyakan Sesuatu</Label>
              </div>
            </Col>
            <Col md='4'>
              <Label>Evaluasi</Label>
              <div>
                <Input
                  id="kecemasan_pasca_operatif_evaluasi_kecemasan"
                  type="checkbox"
                  name="kecemasan_pasca_operatif_evaluasi_kecemasan"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Kecemasan_Pasca_Operatif_Evaluasi_Kecemasan === 1}
                  innerRef={register("kecemasan_pasca_operatif_evaluasi_kecemasan") as any}
                />{' '}
                <Label>Kecamata Berkurang</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="kecemasan_pasca_operatif_evaluasi_tenang_selama"
                  type="checkbox"
                  name="kecemasan_pasca_operatif_evaluasi_tenang_selama"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleCheckboxChange(e)}
                  defaultChecked={data && data.pasca_operatif && data.pasca_operatif.Kecemasan_Pasca_Operatif_Evaluasi_Tenang_Selama === 1}
                  innerRef={register("kecemasan_pasca_operatif_evaluasi_tenang_selama") as any}
                />{' '}
                <Label>Tenang Selama Intra Pemebedaan</Label>
              </div>
              <div className='d-flex justify-content-center align-items-center mt-1'>
                <Signature
                  label="Perawat"
                  type="picker"
                  additionalLabel={(data && data.pasca_operatif && data.pasca_operatif.Nama_Perawat_Kecemasan_Pasca && data.pasca_operatif.Nama_Perawat_Kecemasan_Pasca !== '') ? data.pasca_operatif.Nama_Perawat_Kecemasan_Pasca : undefined}
                  initialImage={(data && data.pasca_operatif && data.pasca_operatif.TTD_Perawat_Kecemasan_Pasca && data.pasca_operatif.TTD_Perawat_Kecemasan_Pasca !== '') ? data.pasca_operatif.TTD_Perawat_Kecemasan_Pasca : undefined}
                  persons={nurses}
                  onSigned={(assigner: SignatureModel) => handlePerawatKecemasanPasca(assigner)}
                />
                <Input
                  type="hidden"
                  name="id_perawat_kecemasan_pasca"
                  innerRef={register()}
                  invalid={errors.id_perawat_kecemasan_pasca && true}
                />
                <Input
                  type="hidden"
                  name="ttd_perawat_kecemasan_pasca"
                  innerRef={register()}
                  invalid={errors.ttd_perawat_kecemasan_pasca && true}
                />
              </div>
              <div className='mt-1'>
                <Label>Tanggal Tanda Tangan :</Label>
                <Input
                  id="tanggal_perawat_kecemasan_pasca"
                  type="date"
                  name="tanggal_perawat_kecemasan_pasca"
                  innerRef={register()}
                  invalid={errors.tanggal_perawat_kecemasan_pasca && true}
                />
              </div>
            </Col>
          </FormGroup>
        </FormGroup>
      </TabPane>
    </TabContent>
  )
}

export default ImpairedSenseOfComfort;
