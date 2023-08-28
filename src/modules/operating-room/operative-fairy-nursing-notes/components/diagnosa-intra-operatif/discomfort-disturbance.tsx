import { Button, Col, FormGroup, Input, Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from 'react';
import { OperativeFairyNursingNotesModel } from '../../models';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';


const DiscomfortDisturbance = (props: {  data: OperativeFairyNursingNotesModel, register: any, activeTab: string, errors: any, processing: boolean, setValue: any, defaultPattern: any }) => {
  const { data, register, activeTab, errors, processing, setValue, defaultPattern } = props;
  const { nurses } = useAppSelector(state => state.nurse);
  const [diagnoseWorry, setDiagnoseWorry] = useState<string | undefined>();
  const [interventWorry1, setInterventWorry1] = useState<string | undefined>();
  const [interventWorry2, setInterventWorry2] = useState<string | undefined>();
  const [evaluationWorry1, setEvaluationWorry1] = useState<string | undefined>();


  useEffect(() => {
    if (defaultPattern === '1') {
      setValue('kecemasan_diagnosa_kurang_pengetahuan', '1');
      setDiagnoseWorry('1')
      setValue('kecemasan_intervensi_beri_waktu', '1');
      setInterventWorry1('1')
      setValue('kecemasan_intervensi_informasi', '1');
      setInterventWorry2('1')
      setValue('kecemasan_evaluasi_tenang', '1');
      setEvaluationWorry1('1')
    } else if (defaultPattern === '0') {
      setValue('kecemasan_diagnosa_kurang_pengetahuan', undefined);
      setDiagnoseWorry(undefined)
      setValue('kecemasan_intervensi_beri_waktu', undefined);
      setInterventWorry1(undefined)
      setValue('kecemasan_intervensi_informasi', undefined);
      setInterventWorry2(undefined)
      setValue('kecemasan_evaluasi_tenang', undefined);
      setEvaluationWorry1(undefined)
    }
  }, [defaultPattern]);

  const handleCheckboxChange = (val: any) => {
    setValue(`${val.target.name}`, (val.target.checked) ? '1' : '0')
  }

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handlePerawatNyeri = (image: SignatureModel) => {
    setValue('ttd_perawat_nyeri', image.Signature);
    setValue('id_perawat_nyeri', image.ID_Karyawan);
  }

  const handlePerawatPenglihatan = (image: SignatureModel) => {
    setValue('ttd_perawat_penglihatan', image.Signature);
    setValue('id_perawat_penglihatan', image.ID_Karyawan);
  }

  const handlePerawatKecemasan = (image: SignatureModel) => {
    setValue('ttd_perawat_kecemasan', image.Signature);
    setValue('id_perawat_kecemasan', image.ID_Karyawan);
  }

  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId='2'>
        <FormGroup>
          <hr />
          <h4>Gangguan Rasa Nyaman: Nyeri</h4>

          <FormGroup className="form-group" row>
            <Col md='4'>
              <Label>Diagnosa</Label>
              <div>
                <Input
                  id="nyeri_diagnosa_luka"
                  type="checkbox"
                  name="nyeri_diagnosa_luka"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Nyeri_Diagnosa_Luka === 1}
                  innerRef={register("nyeri_diagnosa_luka") as any}
                />{' '}
                <Label>Luka Operasi</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="nyeri_diagnosa_pemasangan_alat"
                  type="checkbox"
                  name="nyeri_diagnosa_pemasangan_alat"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Nyeri_Diagnosa_Pemasangan_Alat === 1}
                  innerRef={register("nyeri_diagnosa_pemasangan_alat") as any}
                />{' '}
                <Label>Pemasangan Alat Selama Pembedahan</Label>
              </div>
            </Col>
            <Col md='4'>
              <Label>Intervensi</Label>
              <div>
                <Input
                  id="nyeri_intervensi_skala_nyeri"
                  type="checkbox"
                  name="nyeri_intervensi_skala_nyeri"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Nyeri_Intervensi_Skala_Nyeri === 1}
                  innerRef={register("nyeri_intervensi_skala_nyeri") as any}
                />{' '}
                <Label>kaji Skala Nyeri Klien</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="nyeri_intervensi_teknik_relaksasi"
                  type="checkbox"
                  name="nyeri_intervensi_teknik_relaksasi"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Nyeri_Intervensi_Teknik_Relaksasi === 1}
                  innerRef={register("nyeri_intervensi_teknik_relaksasi") as any}
                />{' '}
                <Label>Ajarkan Teknik Relaksasi</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="nyeri_intervensi_posisi_nyaman"
                  type="checkbox"
                  name="nyeri_intervensi_posisi_nyaman"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Nyeri_Intervensi_Posisi_Nyaman === 1}
                  innerRef={register("nyeri_intervensi_posisi_nyaman") as any}
                />{' '}
                <Label>Berikan Posisi Yang Nyaman</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="nyeri_intervensi_teknik_distraksi"
                  type="checkbox"
                  name="nyeri_intervensi_teknik_distraksi"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Nyeri_Intervensi_Teknik_Distraksi === 1}
                  innerRef={register("nyeri_intervensi_teknik_distraksi") as any}
                />{' '}
                <Label>Ajarkan Teknik Distraksi</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="nyeri_intervensi_kolaborasi"
                  type="checkbox"
                  name="nyeri_intervensi_kolaborasi"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Nyeri_Intervensi_Kolaborasi === 1}
                  innerRef={register("nyeri_intervensi_kolaborasi") as any}
                />{' '}
                <Label>Lakukan Kolaborasi Pemberian Antalgesi</Label>
              </div>
            </Col>
            <Col md='4'>
              <Label>Evaluasi</Label>
              <div>
                <Input
                  id="nyeri_evaluasi_berkurang"
                  type="checkbox"
                  name="nyeri_evaluasi_berkurang"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Nyeri_Evaluasi_Berkurang === 1}
                  innerRef={register("nyeri_evaluasi_berkurang") as any}
                />{' '}
                <Label>Nyeri Berkurang</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="nyeri_evaluasi_teknik"
                  type="checkbox"
                  name="nyeri_evaluasi_teknik"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Nyeri_Evaluasi_Teknik === 1}
                  innerRef={register("nyeri_evaluasi_teknik") as any}
                />{' '}
                <Label style={{width:'85%'}}>Pasien Dapat Memahami Dan Melaksanakan Teknik Distraksi Dan Relaksasi</Label>
              </div>
              <div className='d-flex justify-content-center align-items-center mt-1'>
                <Signature
                  label="Perawat"
                  type="picker"
                  additionalLabel={(data && data.intra_operatif && data.intra_operatif.Nama_Perawat_Nyeri && data.intra_operatif.Nama_Perawat_Nyeri !== '') ? data.intra_operatif.Nama_Perawat_Nyeri : undefined}
                  initialImage={(data && data.intra_operatif && data.intra_operatif.TTD_Perawat_Nyeri && data.intra_operatif.TTD_Perawat_Nyeri !== '') ? data.intra_operatif.TTD_Perawat_Nyeri : undefined}
                  persons={nurses}
                  onSigned={(assigner: SignatureModel) => handlePerawatNyeri(assigner)}
                />
                <Input
                  type="hidden"
                  name="id_perawat_nyeri"
                  innerRef={register()}
                  invalid={errors.id_perawat_nyeri && true}
                />
                <Input
                  type="hidden"
                  name="ttd_perawat_nyeri"
                  innerRef={register()}
                  invalid={errors.ttd_perawat_nyeri && true}
                />
              </div>
              <div className='mt-1'>
                <Label>Tanggal Tanda Tangan :</Label>
                <Input
                  id="tanggal_perawat_nyeri"
                  type="date"
                  name="tanggal_perawat_nyeri"
                  innerRef={register()}
                  invalid={errors.tanggal_perawat_nyeri && true}
                />
              </div>
            </Col>
          </FormGroup>

          <hr />
          <h4>Gangguan Persepsi Sensori Penglihatan</h4>

          <FormGroup className="form-group" row>
            <Col md='4'>
              <Label>Diagnosa</Label>
              <div>
                <Input
                  id="penglihatan_diagnosa_penurunan"
                  type="checkbox"
                  name="penglihatan_diagnosa_penurunan"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Penglihatan_Diagnosa_Penurunan === 1}
                  innerRef={register("penglihatan_diagnosa_penurunan") as any}
                />{' '}
                <Label>Penurunan Tajam Penglihatan</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="penglihatan_diagnosa_perlindungan"
                  type="checkbox"
                  name="penglihatan_diagnosa_perlindungan"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Penglihatan_Diagnosa_Perlindungan === 1}
                  innerRef={register("penglihatan_diagnosa_perlindungan") as any}
                />{' '}
                <Label>Perlindungan Luka Operasi</Label>
              </div>
            </Col>
            <Col md='4'>
              <Label>Intervensi</Label>
              <div>
                <Input
                  id="penglihatan_intervensi_ketajaman"
                  type="checkbox"
                  name="penglihatan_intervensi_ketajaman"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Penglihatan_Intervensi_Ketajaman === 1}
                  innerRef={register("penglihatan_intervensi_ketajaman") as any}
                />{' '}
                <Label>Kaji Ketajaman Penglihatan</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="penglihatan_intervensi_orientasi"
                  type="checkbox"
                  name="penglihatan_intervensi_orientasi"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Penglihatan_Intervensi_Orientasi === 1}
                  innerRef={register("penglihatan_intervensi_orientasi") as any}
                />{' '}
                <Label style={{width:'80%'}}>Orientasikan Pasien Akan Lingkungan Fisik Sekitarnya</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="penglihatan_intervensi_alternative"
                  type="checkbox"
                  name="penglihatan_intervensi_alternative"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Penglihatan_Intervensi_Alternative === 1}
                  innerRef={register("penglihatan_intervensi_alternative") as any}
                />{' '}
                <Label style={{width:'80%'}}>Anjurkan Penggunaan Alternative Rangsang Lingkungan</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="penglihatan_intervensi_cegah_sinar"
                  type="checkbox"
                  name="penglihatan_intervensi_cegah_sinar"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Penglihatan_Intervensi_Cegah_Sinar === 1}
                  innerRef={register("penglihatan_intervensi_cegah_sinar") as any}
                />{' '}
                <Label>Cegah sinar yang menyilaukan</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="penglihatan_intervensi_optimal_lingkungan"
                  type="checkbox"
                  name="penglihatan_intervensi_optimal_lingkungan"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Penglihatan_Intervensi_Optimal_Lingkungan === 1}
                  innerRef={register("penglihatan_intervensi_optimal_lingkungan") as any}
                />{' '}
                <Label style={{width:'80%'}}>Optimalisasi Lingkungan Untuk Menurunkan Resiko Cedera</Label>
              </div>
            </Col>
            <Col md='4'>
              <Label>Evaluasi</Label>
              <div>
                <Input
                  id="penglihatan_evaluasi_kemampuan"
                  type="checkbox"
                  name="penglihatan_evaluasi_kemampuan"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Penglihatan_Evaluasi_Kemampuan === 1}
                  innerRef={register("penglihatan_evaluasi_kemampuan") as any}
                />{' '}
                <Label style={{width:'80%'}}>Kemampuan Yang Lebih Baik Untuk Rangsang Penglihatan</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="penglihatan_evaluasi_perubahan"
                  type="checkbox"
                  name="penglihatan_evaluasi_perubahan"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Penglihatan_Evaluasi_Perubahan === 1}
                  innerRef={register("penglihatan_evaluasi_perubahan") as any}
                />{' '}
                <Label style={{width:'80%'}}>Mampu Mengkomunikasikan Perubahan Visual</Label>
              </div>
              <div className='mt-1'>
                <Signature
                  label="Perawat"
                  type="picker"
                  additionalLabel={(data && data.intra_operatif && data.intra_operatif.Nama_Perawat_Penglihatan && data.intra_operatif.Nama_Perawat_Penglihatan !== '') ? data.intra_operatif.Nama_Perawat_Penglihatan : undefined}
                  initialImage={(data && data.intra_operatif && data.intra_operatif.TTD_Perawat_Penglihatan && data.intra_operatif.TTD_Perawat_Penglihatan !== '') ? data.intra_operatif.TTD_Perawat_Penglihatan : undefined}
                  persons={nurses}
                  onSigned={(assigner: SignatureModel) => handlePerawatPenglihatan(assigner)}
                />
                <Input
                  type="hidden"
                  name="id_perawat_penglihatan"
                  innerRef={register()}
                  invalid={errors.id_perawat_penglihatan && true}
                />
                <Input
                  type="hidden"
                  name="ttd_perawat_penglihatan"
                  innerRef={register()}
                  invalid={errors.ttd_perawat_penglihatan && true}
                />
              </div>
              <div className='mt-1'>
                <Label>Tanggal Tanda Tangan :</Label>
                <Input
                  id="tanggal_perawat_penglihatan"
                  type="date"
                  name="tanggal_perawat_penglihatan"
                  innerRef={register()}
                  invalid={errors.tanggal_perawat_penglihatan && true}
                />
              </div>
            </Col>
          </FormGroup>

          <hr />
          <h4>Kecemasan Intraoperatif</h4>

          <FormGroup className="form-group" row>
            <Col md='4'>
              <Label>Diagnosa</Label>
              <div>
                <Input
                  id="kecemasan_diagnosa_prosedur"
                  type="checkbox"
                  name="kecemasan_diagnosa_prosedur"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Kecemasan_Diagnosa_Prosedur === 1}
                  innerRef={register("kecemasan_diagnosa_prosedur") as any}
                />{' '}
                <Label>Prosedur Intra Bedah</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="kecemasan_diagnosa_kurang_pengetahuan"
                  type="checkbox"
                  name="kecemasan_diagnosa_kurang_pengetahuan"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDiagnoseWorry('1');
                    } else {
                      setDiagnoseWorry(undefined);
                    }
                    handleCheckboxChange(e);
                  }}
                  checked={(data && data.intra_operatif && data.intra_operatif.Kecemasan_Diagnosa_Kurang_Pengetahuan === 1) || diagnoseWorry === '1'}
                  innerRef={register("kecemasan_diagnosa_kurang_pengetahuan") as any}
                />{' '}
                <Label style={{width:'80%'}}>Kurang Pengetahuan Tentang Kejadian Operasi</Label>
              </div>
            </Col>
            <Col md='4'>
              <Label>Intervensi</Label>
              <div>
                <Input
                  id="kecemasan_intervensi_gambaran"
                  type="checkbox"
                  name="kecemasan_intervensi_gambaran"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Kecemasan_Intervensi_Gambaran === 1}
                  innerRef={register("kecemasan_intervensi_gambaran") as any}
                />{' '}
                <Label style={{width:'80%'}}>Jelaskan Gambaran Kejadian Intra Operatif, Manfaat Dan Sikap Yang Dilakukan Selama Masa Operasi</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="kecemasan_intervensi_beri_waktu"
                  type="checkbox"
                  name="kecemasan_intervensi_beri_waktu"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setInterventWorry1('1');
                    } else {
                      setInterventWorry1(undefined);
                    }
                    handleCheckboxChange(e);
                  }}
                  checked={(data && data.intra_operatif && data.intra_operatif.Kecemasan_Intervensi_Beri_Waktu === 1) || interventWorry1 === '1'}
                  innerRef={register("kecemasan_intervensi_beri_waktu") as any}
                />{' '}
                <Label style={{width:'80%'}}>Berikan Waktu Untuk Mengekspresikan Perasaan</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="kecemasan_intervensi_informasi"
                  type="checkbox"
                  name="kecemasan_intervensi_informasi"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setInterventWorry2('1');
                    } else {
                      setInterventWorry2(undefined);
                    }
                    handleCheckboxChange(e);
                  }}
                  checked={(data && data.intra_operatif && data.intra_operatif.Kecemasan_Intervensi_Informasi === 1) || interventWorry2 === '1'}
                  innerRef={register("kecemasan_intervensi_informasi") as any}
                />{' '}
                <Label style={{width:'80%'}}>Informasikan Bahwa Perbaikan Penglihatan Tidak Langsung, Tetapi Bertahap</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="kecemasan_intervensi_kesempatan"
                  type="checkbox"
                  name="kecemasan_intervensi_kesempatan"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Kecemasan_Intervensi_Kesempatan === 1}
                  innerRef={register("kecemasan_intervensi_kesempatan") as any}
                />{' '}
                <Label style={{width:'80%'}}>Memberikan Kesempatan Bertanya Dapat Memperjelas Pemahaman</Label>
              </div>
            </Col>
            <Col md='4'>
              <Label>Evaluasi</Label>
              <div>
                <Input
                  id="kecemasan_evaluasi_berkurang"
                  type="checkbox"
                  name="kecemasan_evaluasi_berkurang"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.intra_operatif && data.intra_operatif.Kecemasan_Evaluasi_Berkurang === 1}
                  innerRef={register("kecemasan_evaluasi_berkurang") as any}
                />{' '}
                <Label>Kecemasan Berkurang</Label>
              </div>
              <div className='mt-1'>
                <Input
                  id="kecemasan_evaluasi_tenang"
                  type="checkbox"
                  name="kecemasan_evaluasi_tenang"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setEvaluationWorry1('1');
                    } else {
                      setEvaluationWorry1(undefined);
                    }
                    handleCheckboxChange(e);
                  }}
                  checked={(data && data.intra_operatif && data.intra_operatif.Kecemasan_Evaluasi_Tenang === 1) || evaluationWorry1 === '1'}
                  innerRef={register("kecemasan_evaluasi_tenang") as any}
                />{' '}
                <Label>Tenang Selama Intra Pembedahan</Label>
              </div>
              <div className='d-flex justify-content-center align-items-center mt-1'>
                <Signature
                  label="Perawat"
                  type="picker"
                  additionalLabel={(data && data.intra_operatif && data.intra_operatif.Nama_Perawat_Kecemasan && data.intra_operatif.Nama_Perawat_Kecemasan !== '') ? data.intra_operatif.Nama_Perawat_Kecemasan : undefined}
                  initialImage={(data && data.intra_operatif && data.intra_operatif.TTD_Perawat_Kecemasan && data.intra_operatif.TTD_Perawat_Kecemasan !== '') ? data.intra_operatif.TTD_Perawat_Kecemasan : undefined}
                  persons={nurses}
                  onSigned={(assigner: SignatureModel) => handlePerawatKecemasan(assigner)}
                />
                <Input
                  type="hidden"
                  name="id_perawat_kecemasan"
                  innerRef={register()}
                  invalid={errors.id_perawat_kecemasan && true}
                />
                <Input
                  type="hidden"
                  name="ttd_perawat_kecemasan"
                  innerRef={register()}
                  invalid={errors.ttd_perawat_kecemasan && true}
                />
              </div>
              <div className='mt-1'>
                <Label>Tanggal Tanda Tangan :</Label>
                <Input
                  id="tanggal_perawat_kecemasan"
                  type="date"
                  name="tanggal_perawat_kecemasan"
                  innerRef={register()}
                  invalid={errors.tanggal_perawat_kecemasan && true}
                />
              </div>
            </Col>
          </FormGroup>
        </FormGroup>
      </TabPane>
    </TabContent>
  )
}

export default DiscomfortDisturbance;
