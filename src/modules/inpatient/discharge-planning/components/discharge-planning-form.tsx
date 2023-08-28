import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useEffect, useState } from 'react';
import { DateTimeInput, SelectInput } from '@src/shared/input';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useForm } from 'react-hook-form';
import { SubmitButton } from '@src/shared/button';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { Signature } from '@src/shared/signature/components';
import { DischargePlanningModel } from '../models/discharge-planning-models';
import { AppRequest } from '@src/shared/request';
import { UpdateDischargePlanningRequest } from '../requests';
import { fetchDischargePlanning, fetchDischargePlanningPdf, handlePdf } from '../stores/discharge-planning.store';
import { DischargePlanningService } from '../services';
import { useWarnIfUnsavedChanges } from '@src/shared/alert';
import { FindPdfRequest } from '@src/shared/pdf';
import { PdfDischargePlanningRequest } from '../requests/pdf-discharge-planning-request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

const DischargePlanning = (props: { data: DischargePlanningModel}) => {
  const { data } = props;

  const getBantuan = () => {
    const mata: Array<string> = [];
    if (data && data.form && data.form.Bantuan) {
      const helpingTools = data.form.Bantuan;
      if (helpingTools.Minum) {
        mata.push('1')
      }
      if (helpingTools.Makan) {
        mata.push('2')
      }
      if (helpingTools.Menyiapkan_Makanan) {
        mata.push('3')
      }
      if (helpingTools.Edukasi) {
        mata.push('4')
      }
      if (helpingTools.Mandi) {
        mata.push('5')
      }
      if (helpingTools.Diet) {
        mata.push('6')
      }
      if (helpingTools.Berpakaian) {
        mata.push('7')
      }
      if (helpingTools.Transportasi) {
        mata.push('8')
      }
    }
    return mata;
  }

  const [processing, setProcessing] = useState(false);
  const dispatch = useAppDispatch();
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);

  const { pdf } = useAppSelector(state => state.dischargePlanningStore);
  const [pdfData, setPdfData] = useState<any | undefined>(undefined);
  const { nurses } = useAppSelector(state => state.nurse);
  const [defaultPattern, setDefaultPattern] = useState<any>();
  const [toolLists, setToolLists] = useState<Array<string>>(getBantuan())
  const [antisipasi, setAntisipasi] = useState((data && data.form && data.form.Antisipasi_Pulang) ? !!(data.form.Antisipasi_Pulang === '1') : false);
  const [keperluan, setKeperluan] = useState((data && data.form && data.form.Membantu_Keperluan) ? !!(data.form.Membantu_Keperluan === '1') : false);
  const [sendiri, setSendiri] = useState((data && data.form && data.form.Tinggal_Sendiri) ? !!(data.form.Tinggal_Sendiri === '1') : false);
  const [peralatan, setPeralatan] = useState((data && data.form && data.form.Peralatan_Sendiri) ? !!(data.form.Peralatan_Sendiri === '1') : false);
  const [alatBantu, setAlatBantu] = useState((data && data.form && data.form.Alat_Bantu_Sendiri) ? !!(data.form.Alat_Bantu_Sendiri === '1') : false);
  const [bantuanKhusus, setBantuanKhusus] = useState((data && data.form && data.form.Bantuan_Khusus) ? !!(data.form.Bantuan_Khusus === '1') : false);
  const [bantuanPribadi, setBantuanPribadi] = useState((data && data.form && data.form.Nyeri_Kronis) ? !!(data.form.Nyeri_Kronis === '1') : false);
  const [edukasi, setEdukasi] = useState((data && data.form && data.form.Edukasi_Kesehatan) ? !!(data.form.Edukasi_Kesehatan === '1') : false);
  const [keterampilanKhusus, setKeterampilanKhusus] = useState((data && data.form && data.form.Keterampilan_Khusus) ? !!(data.form.Keterampilan_Khusus === '1') : false);
  const [jadwalKontrol, setJadwalKontrol] = useState((data && data.form && data.form.Jadwal_Kontrol) ? !!(data.form.Jadwal_Kontrol === '1') : false);
  const [nyeriKronis, setNyeriKronis] = useState((data && data.form && data.form.Bantuan_Pribadi) ? !!(data.form.Bantuan_Pribadi === '1') : false);
  const [pasienDanKeluarga, setPasienDanKeluarga] = useState<any>(`${data?.form?.Pengaruh_Keluarga}`);
  const [pekerjaan, setPekerjaan] = useState<any>(`${data?.form?.Pengaruh_Pekerjaan}`);
  const [keuangan, setKeuangan] = useState<any>(`${data?.form?.Pengaruh_Keuangan}`);
  const [masalahPulang, setMasalahPulang] = useState<any>(`${data?.form?.Antisipasi_Pulang}`);
  const [membantuKeperluan, setMembantuKeperluan] = useState<any>(`${data?.form?.Membantu_Keperluan}`);
  const [pasienTinggalSendiri, setPasienTinggalSendiri] = useState<any>(`${data?.form?.Tinggal_Sendiri}`);
  const [peralatanSendiri, setPeralatanSendiri] = useState<any>(`${data?.form?.Peralatan_Sendiri}`);
  const [alatBantuSendiri, setAlatBantuSendiri] = useState<any>(`${data?.form?.Alat_Bantu_Sendiri}`);
  const [bantuanKhususRumah, setBantuanKhususRumah] = useState<any>(`${data?.form?.Bantuan_Khusus}`);
  const [memenuhiKebutuhan, setMemenuhiKebutuhan] = useState<any>(`${data?.form?.Bantuan_Pribadi}`);
  const [memilikiNyeriKronis, setMemilikiNyeriKronis] = useState<any>(`${data?.form?.Nyeri_Kronis}`);
  const [edukasiKesehatan, setEdukasiKesehatan] = useState<any>(`${data?.form?.Edukasi_Kesehatan}`);
  const [memerlukanKeterampilanKhusus, setMemerlukanKeterampilanKhusus] = useState<any>(`${data?.form?.Keterampilan_Khusus}`);
  const [obatPulang, setObatPulang] = useState<string | undefined>(`${data?.form?.Obat_Pulang_Check}`);
  const [suratKontrol, setSuratKontrol] = useState<string | undefined>(`${data?.form?.Surat_Kontrol_Check}`);
  const [jadwal, setjadwal] = useState<any>(`${data?.form?.Jadwal_Kontrol}`);

  useEffect(() => {
    if (treatment) {
      dispatch(fetchDischargePlanningPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_rencana-pemulangan-pasien' })))
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])

  const handleMataCheckbox = (e: any) => {
    if (e.target.checked) {
      if (toolLists && toolLists.includes(e.target.value)) {
        return;
      } else {
        setToolLists([...toolLists, e.target.value])
      }
    }
    if (!e.target.checked) {
      if (toolLists && toolLists.includes(e.target.value)) {
        const newLists = toolLists.filter((val: string) => val !== e.target.value)
        setToolLists(newLists);
      } else {
        return 0;
      }
    }
  }

  useEffect(() => {
    if (data && data.form) {
      setObatPulang(`${data?.form?.Obat_Pulang_Check}`);
      setSuratKontrol(`${data?.form?.Surat_Kontrol_Check}`);
    }
  }, [data])

  useEffect(() => {
    if (defaultPattern === '1') {
      setValue('keterangan_pasien', '0');
      setPasienDanKeluarga('0');
      setValue('keterangan_pekerjaan', '0');
      setPekerjaan('0');
      setValue('keterangan_keuangan', '1');
      setKeuangan('1');
      setValue('keterangan_antisipasi', '0');
      setMasalahPulang('0');
      setValue('keterangan_membantu_keperluan', '0');
      setMembantuKeperluan('0');
      setValue('keterangan_tinggal_sendiri', '0');
      setMembantuKeperluan('0');
      setValue('keterangan_peralatan_sendiri', '0');
      setPeralatanSendiri('0');
      setValue('keterangan_alat_bantu_sendiri', '0');
      setAlatBantuSendiri('0');
      setValue('keterangan_bantuan_khusus', '0');
      setBantuanKhususRumah('0');
      setValue('keterangan_bantuan_pribadi', '0');
      setMemenuhiKebutuhan('0');
      setValue('keterangan_nyeri_kronis', '0');
      setMemilikiNyeriKronis('0');
      setValue('edukasi_kesehatan', '0');
      setEdukasiKesehatan('0');
      setValue('keterampilan_khusus', '0');
      setMemerlukanKeterampilanKhusus('0');
      setValue('obat_pulang_check', '1');
      setObatPulang('1');
      setValue('surat_kontrol_check', '1');
      setSuratKontrol('1');
      setValue('jadwal_kontrol', '0');
      setjadwal('0');
    } else if (defaultPattern === '0') {
      setValue('keterangan_pasien', undefined);
      setPasienDanKeluarga(undefined);
      setValue('keterangan_pekerjaan', undefined);
      setPekerjaan(undefined);
      setValue('keterangan_keuangan', undefined);
      setKeuangan(undefined);
      setValue('keterangan_antisipasi', undefined);
      setMasalahPulang(undefined);
      setValue('keterangan_membantu_keperluan', undefined);
      setMembantuKeperluan(undefined);
      setValue('keterangan_tinggal_sendiri', undefined);
      setMembantuKeperluan(undefined);
      setValue('keterangan_peralatan_sendiri', undefined);
      setPeralatanSendiri(undefined);
      setValue('keterangan_alat_bantu_sendiri', undefined);
      setAlatBantuSendiri(undefined);
      setValue('keterangan_bantuan_khusus', undefined);
      setBantuanKhususRumah(undefined);
      setValue('keterangan_bantuan_pribadi', undefined);
      setMemenuhiKebutuhan(undefined);
      setValue('keterangan_nyeri_kronis', undefined);
      setMemilikiNyeriKronis(undefined);
      setValue('edukasi_kesehatan', undefined);
      setEdukasiKesehatan(undefined);
      setValue('keterampilan_khusus', undefined);
      setMemerlukanKeterampilanKhusus(undefined);
      setValue('obat_pulang_check', undefined);
      setObatPulang(undefined);
      setValue('surat_kontrol_check', undefined);
      setSuratKontrol(undefined);
      setValue('jadwal_kontrol', undefined);
      setjadwal(undefined);
    }
  }, [defaultPattern]);

  useEffect(() => {
    setValue('uraian_value', toolLists)
  }, [toolLists])

  useEffect(() => {
    if (doctors) {
      setValue('pasien_perawat', data.form.Pasien_Perawat ? data.form.Pasien_Perawat : '')
    }
  }, [doctors])

  const getKesimpulan = () => {
    if (data.inform_consent.Diagnosis === 'custom') {
      return data.inform_consent.Diagnosis_Custom;
    } else {
      return data.inform_consent.Diagnosis;
    }
  }

  const { register, handleSubmit, errors, setValue, reset, formState } = useForm<any>({
    mode: 'onChange',
    // resolver: yupResolver(UpdatePostoperativeInstructionsRequest.schema()),
    defaultValues: {
      pasien_dm: (data.form && data.form.Pasien_Diagnosa_Medis ? data.form.Pasien_Diagnosa_Medis : data.cppt && data.cppt.Data_A ? data.cppt.Data_A : '') || getKesimpulan(),
      pasien_dpjp: (data && data.form && data.form.Pasien_Dpjp) ? data.form.Pasien_Dpjp : (treatment && treatment.ID_Dokter) ? treatment.ID_Dokter : '',
      pasien_alasan: data?.form?.Pasien_Alasan ?? '',
      pasien_perawat: data?.form?.Pasien_Perawat ?? '',
      pasien_tanggal: data.form && data.form.Pasien_Tanggal ? data.form.Pasien_Tanggal.replace(/\s/g, 'T') : treatment && treatment.Tgl_Jam_Berobat ? treatment.Tgl_Jam_Berobat.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      pasien_discharge: data?.form?.Waktu_Discharge ?? '',
      pasien_estimasi: (data && data.form && data.form.Estimasi_Pemulangan_Pasien) ? data.form.Estimasi_Pemulangan_Pasien.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      keterangan_pasien: data?.form?.Pengaruh_Keluarga ?? '',
      keterangan_pekerjaan: data?.form?.Pengaruh_Pekerjaan ?? '',
      keterangan_keuangan: data?.form?.Pengaruh_Keuangan ?? '',
      keterangan_antisipasi: data?.form?.Antisipasi_Pulang ?? '',
      keterangan_antisipasi_keterangan: data?.form?.Antisipasi_Pulang_Keterangan ?? '',
      uraian_value: data?.form?.Bantuan ?? '',
      keterangan_membantu_keperluan: data?.form?.Membantu_Keperluan ?? '',
      keterangan_membantu_keperluan_keterangan: data?.form?.Membantu_Keperluan_Keterangan ?? '',
      keterangan_tinggal_sendiri: data?.form?.Tinggal_Sendiri ?? '',
      keterangan_tinggal_sendiri_keterangan: data?.form?.Tinggal_Sendiri_Keterangan ?? '',
      keterangan_peralatan_sendiri: data?.form?.Peralatan_Sendiri ?? '',
      keterangan_peralatan_sendiri_keterangan: data?.form?.Peralatan_Sendiri_Keterangan ?? '',
      keterangan_alat_bantu_sendiri: data?.form?.Alat_Bantu_Sendiri ?? '',
      keterangan_alat_bantu_sendiri_keterangan: data?.form?.Alat_Bantu_Sendiri_Keterangan ?? '',
      keterangan_bantuan_khusus: data?.form?.Bantuan_Khusus ?? '',
      keterangan_bantuan_khusus_keterangan: data?.form?.Bantuan_Khusus_Keterangan ?? '',
      keterangan_bantuan_pribadi: data?.form?.Bantuan_Pribadi ?? '',
      keterangan_bantuan_pribadi_keterangan: data?.form?.Bantuan_Pribadi_Keterangan ?? '',
      keterangan_nyeri_kronis: data?.form?.Nyeri_Kronis ?? '',
      keterangan_nyeri_kronis_keterangan: data?.form?.Nyeri_Kronis_Keterangan ?? '',
      edukasi_kesehatan: data?.form?.Edukasi_Kesehatan ?? '',
      edukasi_kesehatan_keterangan: data?.form?.Edukasi_Kesehatan_Keterangan ?? '',
      keterampilan_khusus: data?.form?.Keterampilan_Khusus ?? '',
      keterampilan_khusus_keterangan: data?.form?.Keterampilan_Khusus_Keterangan ?? '',
      jadwal_kontrol: data?.form?.Jadwal_Kontrol ?? '',
      jadwal_kontrol_keterangan: data?.form?.Jadwal_Kontrol_Keterangan ?? '',
      obat_pulang_check: data?.form?.Obat_Pulang_Check ?? '',
      obat_pulang_waktu: data?.form?.Obat_Pulang_Waktu ?? '',
      obat_pulang_keterangan: data?.form?.Obat_Pulang_Keterangan ?? '',
      surat_kontrol_check: data?.form?.Surat_Kontrol_Check ?? '',
      surat_kontrol_waktu: data?.form?.Surat_Kontrol_Waktu ?? '',
      surat_kontrol_keterangan: data?.form?.Surat_Kontrol_Keterangan ?? '',
      id_perawat_pengkaji: data?.form?.ID_Perawat_Pengkaji ?? '',
      tanda_tangan_perawat_pengkaji: data?.form?.Tanda_Tangan_Perawat_Pengkaji ?? '',
      tanda_tangan_pasien: data?.form?.Tanda_Tangan_Pasien ?? '',
    },
  });

  const { isDirty } = formState;

  // useWarnIfUnsavedChanges(isDirty, () => {
  //   return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  // })

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handlePerawatPengkaji = (image: SignatureModel) => {
    setValue('tanda_tangan_perawat_pengkaji', image.Signature);
    setValue('id_perawat_pengkaji', image.ID_Karyawan);
  }

  const handlePatientSigned = (image: string) => {
    setValue('tanda_tangan_pasien', image);
  }

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  const handleProcessing = () => {
    setProcessing(true);
  }

  const handleSubmitForm = (value: any) => {
    if (!treatment) {
      return;
    }
    setProcessing(true);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateDischargePlanningRequest.createFromJson({...value, ...appRequest});
    dispatch(handlePdf(undefined));
    DischargePlanningService().update(params)
      .then(() => {
        DischargePlanningService().show(appRequest)
          .then((resp) => {
            const { data } = resp.data;
            DischargePlanningService().pdfv3(PdfDischargePlanningRequest.createPdfRequest({...data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
              .then(() => {
                setProcessing(false);
                dispatch(fetchDischargePlanningPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_rencana-pemulangan-pasien' })))
              })
          });
        setProcessing(false);
        dispatch(fetchDischargePlanning(appRequest));
      });
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <FormGroup>
        <div className="border-dark mt-2 p-1">
          <FormGroup className="form-group" row>
            <Row className='mt-1'>
              <Col md='3'>
                <Label>Diagnosa Medis</Label>
              </Col>
              <Col md='9'>
                <Input
                  id="pasien-dm"
                  type="text"
                  name="pasien_dm"
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col md='3'>
                <Label>Nama Dokter DPJP</Label>
              </Col>
              <Col md='9'>
                <Input
                  type="select"
                  id="pasien_dpjp"
                  name="pasien_dpjp"
                  innerRef={register()}
                  defaultValue={(data && data.form) ? data.form.Pasien_Dpjp : (treatment && treatment.ID_Dokter) ? treatment.ID_Dokter : ''}
                  {...{ register, errors }}
                >
                  {/* <option value="" disabled={false}>Pilih Salah Satu</option> */}
                  {doctors && doctors.map((doctorObj: any, key: number) => {
                    return <option key={key} value={doctorObj.ID_Karyawan}>{doctorObj.Nama}</option>;
                  })}
                </Input>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col md='3'>
                <Label>Tanggal / Jam Masuk RS</Label>
              </Col>
              <Col>
                <Input
                  type="datetime-local"
                  id='pasien-tanggal'
                  defaultValue='pasien_tanggal'
                  name='pasien_tanggal'
                  innerRef={register({ required: true })}
                  invalid={errors['pasien_tanggal'] && true}
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col md='3'>
                <Label>Alasan Masuk RS</Label>
              </Col>
              <Col>
                <Input
                  id='pasien_alasan'
                  name='pasien_alasan'
                  type='text'
                  innerRef={register() as any}
                />
              </Col>
            </Row>
            <Row>
              <Col md='3' className='mt-1'>
                <Label>Nama Perawat</Label>
              </Col>
              <Col md='9' className='mt-1'>
                <Input
                  type="select"
                  id="pasien_perawat"
                  name="pasien_perawat"
                  innerRef={register()}
                >
                  <option value="" disabled={false}>Pilih Salah Satu</option>
                  {
                    nurses && Array.isArray(nurses) && nurses.map((item: any, key: number) => {
                      return <option value={item.ID_Karyawan} key={key}>{ item.Nama }</option>;
                    })
                  }
                </Input>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col md='3'>
                <Label>Waktu Dilakukan Dicharge Planning</Label>
              </Col>
              <Col>
                <DateTimeInput
                  name='pasien_discharge'
                  defaultValue='date'
                  md={0}
                  style={{  marginTop:'-26px'}}
                  {...{ register, errors }}
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col md='3'>
                <Label>Estimasi Pemulangan Pasien</Label>
              </Col>
              <Col>
                <Input
                  type="datetime-local"
                  id="pasien_estimasi"
                  name="pasien_estimasi"
                  innerRef={register()}
                  invalid={errors.pasien_estimasi && true} />
              </Col>
            </Row>
          </FormGroup>
        </div>
        <div className="border-dark mt-2 p-1">
          <FormGroup className="form-group" row>
            <h4>Keterangan Rencana Pemulangan</h4>
            <hr />
            <Row>
              <Col>
                <Input
                  className="me-1"
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDefaultPattern('1');
                    } else {
                      setDefaultPattern('0');
                    }
                  }}
                />
                <Label>Checklist Default</Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Label>1. Pengaruh Rawat Inap Terhadap</Label>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <Label>Pasien Dan Keluarga</Label>
              </Col>
              <Col md='2'>
                <Input
                  id="keterangan_pasien_1"
                  type="radio"
                  name="keterangan_pasien"
                  className="me-1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setPasienDanKeluarga('0');
                  }}
                  value="0"
                  defaultChecked={!!(pasienDanKeluarga === '0')}
                  innerRef={register({ required: false })}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col>
                <Input
                  id="keterangan_pasien"
                  type="radio"
                  name="keterangan_pasien"
                  className="me-1"
                  onChange={(e) => handleRadioChange(e)}
                  value="1"
                  defaultChecked={!!(data && data.form && data.form.Pengaruh_Keluarga === '1')}
                  innerRef={register({ required: false })}
                />{' '}
                <Label>Ya</Label>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col md='4'>
                <Label>Pekerjaan</Label>
              </Col>
              <Col md='2'>
                <Input
                  id='keterangan_pekerjaan'
                  type='radio'
                  name='keterangan_pekerjaan'
                  className='me-1'
                  onChange={(e) => {
                    handleRadioChange(e);
                    setPekerjaan('0');
                  }}
                  value='0'
                  defaultChecked={!!(pekerjaan === '0')}
                  innerRef={register({ required: false })}
                />
                <Label>Tidak</Label>
              </Col>
              <Col md='2'>
                <Input
                  id='keterangan_pekerjaan_1'
                  type='radio'
                  name='keterangan_pekerjaan'
                  className='me-1'
                  onChange={(e) => handleRadioChange(e)}
                  value='1'
                  defaultChecked={!!(data && data.form && data.form.Pengaruh_Pekerjaan === '1')}
                  innerRef={register({ required: false })}
                />
                <Label>Ya</Label>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col md='4'>
                <Label>Keuangan</Label>
              </Col>
              <Col md='2'>
                <Input
                  id='keterangan_keuangan'
                  type='radio'
                  name='keterangan_keuangan'
                  className='me-1'
                  onChange={(e) => handleRadioChange(e)}
                  value='0'
                  defaultChecked={!!(data && data.form && data.form.Pengaruh_Keuangan === '0')}
                  innerRef={register({ required: false })}
                />
                <Label>Tidak</Label>
              </Col>
              <Col>
                <Input
                  id='keterangan_keuangan_1'
                  type='radio'
                  name='keterangan_keuangan'
                  className='me-1'
                  onChange={(e) => {
                    handleRadioChange(e);
                    setKeuangan('1');
                  }}
                  value='1'
                  defaultChecked={!!(keuangan === '1')}
                  innerRef={register({ required: false })}
                />
                <Label>Ya</Label>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col md='4'>
                <Label>2. Antisipasi terhadap masalah pulang</Label>
              </Col>
              <Col md='2'>
                <Input
                  id='keterangan_antisipasi'
                  type='radio'
                  name='keterangan_antisipasi'
                  className='me-1'
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAntisipasi(false);
                    }
                    handleRadioChange(e)
                    setMasalahPulang('0');
                  }}
                  value='0'
                  defaultChecked={!!(masalahPulang === '0')}
                  innerRef={register({ required: false })}
                />
                <Label>Tidak</Label>
              </Col>
              <Col>
                <Input
                  id='keterangan_antisipasi_1'
                  type='radio'
                  name='keterangan_antisipasi'
                  className='me-1'
                  onChange={(e) => {
                    setAntisipasi(e.target.checked)
                    handleRadioChange(e);
                  }}
                  value='1'
                  defaultChecked={!!(data && data.form && data.form.Antisipasi_Pulang === '1')}
                  innerRef={register({ required: false })}
                />
                <Label>Ya</Label>
              </Col>
              {
                antisipasi && (
                  <>
                    <Col md='5'>
                      <Input
                        id="keterangan_antisipasi_keterangan"
                        type="text"
                        placeholder='Jelaskan'
                        name="keterangan_antisipasi_keterangan"
                        innerRef={register()}
                      />
                    </Col>
                  </>
                )
              }
            </Row>
          </FormGroup>
          <FormGroup className="form-group" row>
            <Row className='mt-1'>
              <Label>3. Bantuan Diperlukan Dalam Hal</Label>
            </Row>
            <Row className="mt-1">
              <Col>
                <Input
                  id="mata_1"
                  type="checkbox"
                  name="uraian_value[]"
                  className="me-1"
                  onChange={(e) => handleMataCheckbox(e)}
                  defaultChecked={getBantuan() && getBantuan().length > 0 && getBantuan().includes('1')}
                  value="1"
                  innerRef={register("uraian_value") as any}
                />{' '}
                <Label>Minum / Menetes Obat</Label>
              </Col>
              <Col>
                <Input
                  id="mata_2"
                  type="checkbox"
                  name="uraian_value[]"
                  className="me-1"
                  onChange={(e) => handleMataCheckbox(e)}
                  defaultChecked={getBantuan() && getBantuan().length > 0 && getBantuan().includes('2')}
                  value="2"
                  innerRef={register("uraian_value") as any}
                />{' '}
                <Label>Makan</Label>
              </Col>
              <Col>
                <Input
                  id="mata_1"
                  type="checkbox"
                  name="uraian_value[]"
                  className="me-1"
                  onChange={(e) => handleMataCheckbox(e)}
                  defaultChecked={getBantuan() && getBantuan().length > 0 && getBantuan().includes('3')}
                  value="3"
                  innerRef={register("uraian_value") as any}
                />{' '}
                <Label>Menyiapkan Makanan</Label>
              </Col>
              <Col>
                <Input
                  id="mata_2"
                  type="checkbox"
                  name="uraian_value[]"
                  className="me-1"
                  onChange={(e) => handleMataCheckbox(e)}
                  defaultChecked={getBantuan() && getBantuan().length > 0 && getBantuan().includes('4')}
                  value="4"
                  innerRef={register("uraian_value") as any}
                />{' '}
                <Label>Edukasi Kesehatan</Label>
              </Col>
            </Row>
            <Row className="mt-1">
              <Col>
                <Input
                  id="mata_1"
                  type="checkbox"
                  name="uraian_value[]"
                  className="me-1"
                  onChange={(e) => handleMataCheckbox(e)}
                  defaultChecked={getBantuan() && getBantuan().length > 0 && getBantuan().includes('5')}
                  value="5"
                  innerRef={register("uraian_value") as any}
                />{' '}
                <Label>Mandi</Label>
              </Col>
              <Col>
                <Input
                  id="mata_2"
                  type="checkbox"
                  name="uraian_value[]"
                  className="me-1"
                  onChange={(e) => handleMataCheckbox(e)}
                  defaultChecked={getBantuan() && getBantuan().length > 0 && getBantuan().includes('6')}
                  value="6"
                  innerRef={register("uraian_value") as any}
                />{' '}
                <Label>Diet</Label>
              </Col>
              <Col>
                <Input
                  id="mata_1"
                  type="checkbox"
                  name="uraian_value[]"
                  className="me-1"
                  onChange={(e) => handleMataCheckbox(e)}
                  defaultChecked={getBantuan() && getBantuan().length > 0 && getBantuan().includes('7')}
                  value="7"
                  innerRef={register("uraian_value") as any}
                />{' '}
                <Label>Berpakaian</Label>
              </Col>
              <Col>
                <Input
                  id="mata_2"
                  type="checkbox"
                  name="uraian_value[]"
                  className="me-1"
                  onChange={(e) => handleMataCheckbox(e)}
                  defaultChecked={getBantuan() && getBantuan().length > 0 && getBantuan().includes('8')}
                  value="8"
                  innerRef={register("uraian_value") as any}
                />{' '}
                <Label>Transportasi</Label>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup className='form-group' row>
            <Row className='mt-1'>
              <Col md='4'>
                <Label>4. Adakah Yang Membantu Keperluan Tersebut Diatas</Label>
              </Col>
              <Col md='2'>
                <Input
                  id='keterangan_membantu_keperluan'
                  type='radio'
                  name='keterangan_membantu_keperluan'
                  className='me-1'
                  onChange={(e) => {
                    if (e.target.checked) {
                      setKeperluan(false);
                    }
                    handleRadioChange(e)
                    setMembantuKeperluan('0');
                  }}
                  value='0'
                  defaultChecked={!!(membantuKeperluan === '0')}
                  innerRef={register({ required: false })}
                />
                <Label>Tidak</Label>
              </Col>
              <Col>
                <Input
                  id='keterangan_membantu_keperluan_1'
                  type='radio'
                  name='keterangan_membantu_keperluan'
                  className='me-1'
                  onChange={(e) => {
                    setKeperluan(e.target.checked)
                    handleRadioChange(e);
                  }}
                  value='1'
                  defaultChecked={!!(data && data.form && data.form.Membantu_Keperluan === '1')}
                  innerRef={register({ required: false })}
                />
                <Label>Ya</Label>
              </Col>
              {
                keperluan && (
                  <>
                    <Col md='5'>
                      <Input
                        id="keterangan_membantu_keperluan_keterangan"
                        type="text"
                        placeholder='Jelaskan'
                        name="keterangan_membantu_keperluan_keterangan"
                        innerRef={register()}
                      />
                    </Col>
                  </>
                )
              }
            </Row>
            <Row className='mt-1'>
              <Col md='4'>
                <Label>5. Apakah Pasien Tinggal Sendiri Setelah Keluar RS?</Label>
              </Col>
              <Col md='2'>
                <Input
                  id='keterangan_tinggal_sendiri'
                  type='radio'
                  name='keterangan_tinggal_sendiri'
                  className='me-1'
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSendiri(false);
                    }
                    setPasienTinggalSendiri('0');
                    handleRadioChange(e)
                  }}
                  value='0'
                  defaultChecked={!!(pasienTinggalSendiri === '0')}
                  innerRef={register({ required: false })}
                />
                <Label>Tidak</Label>
              </Col>
              <Col>
                <Input
                  id='keterangan_tinggal_sendiri'
                  type='radio'
                  name='keterangan_tinggal_sendiri'
                  className='me-1'
                  onChange={(e) => {
                    setSendiri(e.target.checked)
                    handleRadioChange(e);
                  }}
                  value='1'
                  defaultChecked={!!(data && data.form && data.form.Tinggal_Sendiri === '1')}
                  innerRef={register({ required: false })}
                />
                <Label>Ya</Label>
              </Col>
              {
                sendiri && (
                  <>
                    <Col md='5'>
                      <Input
                        id="keterangan_tinggal_sendiri_keterangan"
                        type="text"
                        placeholder='Jelaskan'
                        name="keterangan_tinggal_sendiri_keterangan"
                        innerRef={register()}
                      />
                    </Col>
                  </>
                )
              }
            </Row>
            <Row className='mt-1'>
              <Col md='4'>
                <Label>6. Apakah Pasien Menggunakan Peralatan Medis Di Rumah Setelah Keluar RS (Kacamata, Eye Shield, Kursi Vitrec)?</Label>
              </Col>
              <Col md='2'>
                <Input
                  id='keterangan_peralatan_sendiri'
                  type='radio'
                  name='keterangan_peralatan_sendiri'
                  className='me-1'
                  onChange={(e) => {
                    if (e.target.checked) {
                      setPeralatan(false);
                    }
                    setPeralatanSendiri('0');
                    handleRadioChange(e)
                  }}
                  value='0'
                  defaultChecked={!!(peralatanSendiri === '0')}
                  innerRef={register({ required: false })}
                />
                <Label>Tidak</Label>
              </Col>
              <Col>
                <Input
                  id='keterangan_peralatan_sendiri_1'
                  type='radio'
                  name='keterangan_peralatan_sendiri'
                  className='me-1'
                  onChange={(e) => {
                    setPeralatan(e.target.checked)
                    handleRadioChange(e);
                  }}
                  value='1'
                  defaultChecked={!!(data && data.form && data.form.Peralatan_Sendiri === '1')}
                  innerRef={register({ required: false })}
                />
                <Label>Ya</Label>
              </Col>
              {
                peralatan && (
                  <>
                    <Col md='5'>
                      <Input
                        id="keterangan_peralatan_sendiri_keterangan"
                        type="text"
                        placeholder='Jelaskan'
                        name="keterangan_peralatan_sendiri_keterangan"
                        innerRef={register()}
                      />
                    </Col>
                  </>
                )
              }
            </Row>
            <Row className='mt-1'>
              <Col md='4'>
                <Label>7. Apakah Pasien Memerlukan Alat Bantu Setelah Keluar RS (Tongkat, Kursi Roda, Walker Dll)?</Label>
              </Col>
              <Col md='2'>
                <Input
                  id='keterangan_alat_bantu_sendiri'
                  type='radio'
                  name='keterangan_alat_bantu_sendiri'
                  className='me-1'
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAlatBantu(false);
                    }
                    setAlatBantuSendiri('0');
                    handleRadioChange(e)
                  }}
                  value='0'
                  defaultChecked={!!(alatBantuSendiri === '0')}
                  innerRef={register({ required: false })}
                />
                <Label>Tidak</Label>
              </Col>
              <Col>
                <Input
                  id='keterangan_alat_bantu_sendiri_1'
                  type='radio'
                  name='keterangan_alat_bantu_sendiri'
                  className='me-1'
                  onChange={(e) => {
                    setAlatBantu(e.target.checked)
                    handleRadioChange(e);
                  }}
                  value='1'
                  defaultChecked={!!(data && data.form && data.form.Alat_Bantu_Sendiri === '1')}
                  innerRef={register({ required: false })}
                />
                <Label>Ya</Label>
              </Col>
              {
                alatBantu && (
                  <>
                    <Col md='5'>
                      <Input
                        id="keterangan_alat_bantu_sendiri_keterangan"
                        type="text"
                        placeholder='Jelaskan'
                        name="keterangan_alat_bantu_sendiri_keterangan"
                        innerRef={register()}
                      />
                    </Col>
                  </>
                )
              }
            </Row>
            <Row className='mt-1'>
              <Col md='4'>
                <Label>8. Apakah Memerlukan Bantuan / Perawatan Khusus Di Rumah Setelah Keluar RS?</Label>
              </Col>
              <Col md='2'>
                <Input
                  id='keterangan_bantuan_khusus'
                  type='radio'
                  name='keterangan_bantuan_khusus'
                  className='me-1'
                  onChange={(e) => {
                    if (e.target.checked) {
                      setBantuanKhusus(false);
                    }
                    setBantuanKhususRumah('0');
                    handleRadioChange(e)
                  }}
                  value='0'
                  defaultChecked={!!(bantuanKhususRumah === '0')}
                  innerRef={register({ required: false })}
                />
                <Label>Tidak</Label>
              </Col>
              <Col>
                <Input
                  id='keterangan_bantuan_khusus_1'
                  type='radio'
                  name='keterangan_bantuan_khusus'
                  className='me-1'
                  onChange={(e) => {
                    setBantuanKhusus(e.target.checked)
                    handleRadioChange(e);
                  }}
                  value='1'
                  defaultChecked={!!(data && data.form && data.form.Bantuan_Khusus === '1')}
                  innerRef={register({ required: false })}
                />
                <Label>Ya</Label>
              </Col>
              {
                bantuanKhusus && (
                  <>
                    <Col md='5'>
                      <Input
                        id="keterangan_bantuan_khusus_keterangan"
                        type="text"
                        placeholder='Jelaskan'
                        name="keterangan_bantuan_khusus_keterangan"
                        innerRef={register()}
                      />
                    </Col>
                  </>
                )
              }
            </Row>
            <Row className='mt-1'>
              <Col md='4'>
                <Label>9. Apakah Pasien Bermasalah Dalam Memenuhi Kebutuhan Pribadinya Setelah Keluar RS (Makan, Minum, Toileting, Dll)?</Label>
              </Col>
              <Col md='2'>
                <Input
                  id='keterangan_bantuan_pribadi'
                  type='radio'
                  name='keterangan_bantuan_pribadi'
                  className='me-1'
                  onChange={(e) => {
                    if (e.target.checked) {
                      setNyeriKronis(false);
                    }
                    setMemenuhiKebutuhan('0');
                    handleRadioChange(e)
                  }}
                  value='0'
                  defaultChecked={!!(memenuhiKebutuhan === '0')}
                  innerRef={register({ required: false })}
                />
                <Label>Tidak</Label>
              </Col>
              <Col>
                <Input
                  id='keterangan_bantuan_pribadi_1'
                  type='radio'
                  name='keterangan_bantuan_pribadi'
                  className='me-1'
                  onChange={(e) => {
                    setNyeriKronis(e.target.checked)
                    handleRadioChange(e);
                  }}
                  value='1'
                  defaultChecked={!!(data && data.form && data.form.Bantuan_Pribadi === '1')}
                  innerRef={register({ required: false })}
                />
                <Label>Ya</Label>
              </Col>
              {
                nyeriKronis && (
                  <>
                    <Col md='5'>
                      <Input
                        id="keterangan_bantuan_pribadi_keterangan"
                        type="text"
                        placeholder='Jelaskan'
                        name="keterangan_bantuan_pribadi_keterangan"
                        innerRef={register()}
                      />
                    </Col>
                  </>
                )
              }
            </Row>
            <Row className='mt-1'>
              <Col md='4'>
                <Label>10. Apakah pasien memiliki nyeri kronis dan kelelahan setelah keluar dari RS?</Label>
              </Col>
              <Col md='2'>
                <Input
                  id='keterangan_nyeri_kronis'
                  type='radio'
                  name='keterangan_nyeri_kronis'
                  className='me-1'
                  onChange={(e) => {
                    if (e.target.checked) {
                      setBantuanPribadi(false);
                    }
                    setMemilikiNyeriKronis('0');
                    handleRadioChange(e)
                  }}
                  value='0'
                  defaultChecked={!!(memilikiNyeriKronis === '0')}
                  innerRef={register({ required: false })}
                />
                <Label>Tidak</Label>
              </Col>
              <Col>
                <Input
                  id='keterangan_nyeri_kronis_1'
                  type='radio'
                  name='keterangan_nyeri_kronis'
                  className='me-1'
                  onChange={(e) => {
                    setBantuanPribadi(e.target.checked)
                    handleRadioChange(e);
                  }}
                  value='1'
                  defaultChecked={!!(data && data.form && data.form.Nyeri_Kronis === '1')}
                  innerRef={register({ required: false })}
                />
                <Label>Ya</Label>
              </Col>
              {
                bantuanPribadi && (
                  <>
                    <Col md='5'>
                      <Input
                        id="keterangan_nyeri_kronis_keterangan"
                        type="text"
                        placeholder='Jelaskan'
                        name="keterangan_nyeri_kronis_keterangan"
                        innerRef={register()}
                      />
                    </Col>
                  </>
                )
              }
            </Row>
            <Row className='mt-1'>
              <Col md='4'>
                <Label>11. Apakah Pasien Dan Keluarga Memerlukan Eduakasi Kesehatan Setelah Keluar Dari Rumah Sakit (Obat-Obatan, Nyeri, Diet, Mencari Pertolongan, Followup, Dll)?</Label>
              </Col>
              <Col md='2'>
                <Input
                  id='edukasi_kesehatan'
                  type='radio'
                  name='edukasi_kesehatan'
                  className='me-1'
                  onChange={(e) => {
                    if (e.target.checked) {
                      setEdukasi(false);
                    }
                    setEdukasiKesehatan('0');
                    handleRadioChange(e)
                  }}
                  value='0'
                  defaultChecked={!!(edukasiKesehatan === '0')}
                  innerRef={register({ required: false })}
                />
                <Label>Tidak</Label>
              </Col>
              <Col>
                <Input
                  id='edukasi_kesehatan_1'
                  type='radio'
                  name='edukasi_kesehatan'
                  className='me-1'
                  onChange={(e) => {
                    setEdukasi(e.target.checked)
                    handleRadioChange(e);
                  }}
                  value='1'
                  defaultChecked={!!(data && data.form && data.form.Edukasi_Kesehatan === '1')}
                  innerRef={register({ required: false })}
                />
                <Label>Ya</Label>
              </Col>
              {
                edukasi && (
                  <>
                    <Col md='5'>
                      <Input
                        id="edukasi_kesehatan_keterangan"
                        type="text"
                        placeholder='Jelaskan'
                        name="edukasi_kesehatan_keterangan"
                        innerRef={register()}
                      />
                    </Col>
                  </>
                )
              }
            </Row>
            <Row className='mt-1'>
              <Col md='4'>
                <Label>12. Apakah Pasien Dan Keluarga Memerlukan Keterampilan Khusus Setelah Keluar Dari Rumah Sakit (Cara Menetes Mata, Cara Membersihkan Mata, Cara Memakaikan Eye Shield, Dll)?</Label>
              </Col>
              <Col md='2'>
                <Input
                  id='keterampilan_khusus'
                  type='radio'
                  name='keterampilan_khusus'
                  className='me-1'
                  onChange={(e) => {
                    if (e.target.checked) {
                      setJadwalKontrol(false);
                    }
                    setMemerlukanKeterampilanKhusus('0');
                    handleRadioChange(e)
                  }}
                  value='0'
                  defaultChecked={!!(memerlukanKeterampilanKhusus === '0')}
                  innerRef={register({ required: false })}
                />
                <Label>Tidak</Label>
              </Col>
              <Col>
                <Input
                  id='keterampilan_khusus_1'
                  type='radio'
                  name='keterampilan_khusus'
                  className='me-1'
                  onChange={(e) => {
                    setJadwalKontrol(e.target.checked)
                    handleRadioChange(e);
                  }}
                  value='1'
                  defaultChecked={!!(data && data.form && data.form.Keterampilan_Khusus === '1')}
                  innerRef={register({ required: false })}
                />
                <Label>Ya</Label>
              </Col>
              {
                jadwalKontrol && (
                  <>
                    <Col md='5'>
                      <Input
                        id="keterampilan_khusus_keterangan"
                        type="text"
                        placeholder='Jelaskan'
                        name="keterampilan_khusus_keterangan"
                        innerRef={register()}
                      />
                    </Col>
                  </>
                )
              }
            </Row>
            <Row className='mt-1'>
              <Col md='4'>
                <Label>13. Jadwal Kontrol / Perawatan Lanjutan</Label>
              </Col>
              <Col md='2'>
                <Input
                  id='jadwal_kontrol'
                  type='radio'
                  name='jadwal_kontrol'
                  className='me-1'
                  onChange={(e) => {
                    if (e.target.checked) {
                      setKeterampilanKhusus(false);
                    }
                    setjadwal('0')
                    handleRadioChange(e)
                  }}
                  value='0'
                  defaultChecked={!!(jadwal === '0')}
                  innerRef={register({ required: false })}
                />
                <Label>Tidak</Label>
              </Col>
              <Col>
                <Input
                  id='jadwal_kontrol_1'
                  type='radio'
                  name='jadwal_kontrol'
                  className='me-1'
                  onChange={(e) => {
                    setKeterampilanKhusus(e.target.checked)
                    handleRadioChange(e);
                  }}
                  value='1'
                  defaultChecked={!!(data && data.form && data.form.Jadwal_Kontrol === '1')}
                  innerRef={register({ required: false })}
                />
                <Label>Ya</Label>
              </Col>
              {
                keterampilanKhusus && (
                  <>
                    <Col md='5'>
                      <Input
                        id="jadwal_kontrol_keterangan"
                        type="text"
                        placeholder='Jelaskan'
                        name="jadwal_kontrol_keterangan"
                        innerRef={register()}
                      />
                    </Col>
                  </>
                )
              }
            </Row>
            <Row className='mt-1'>
              <Col >
                <Input
                  id='obat_pulang_check'
                  type='checkbox'
                  name='obat_pulang_check'
                  className='me-1'
                  onChange={(e) => {
                    if (e.target.checked) {
                      setObatPulang('1');
                    } else {
                      setObatPulang(undefined);
                    }
                    handleCheckboxChange(e);
                  }}
                  value='1'
                  checked={obatPulang === '1'}
                  innerRef={register('obat_pulang_check')as any}
                />
                <Label>Obat - Obat Pulang</Label>
              </Col>
              <Col>
                <DateTimeInput
                  name='obat_pulang_waktu'
                  defaultValue='date'
                  md={4}
                  style={{ marginTop:'-26px'}}
                  {...{ register, errors }}
                />
              </Col>
              <Col>
                <Input
                  id='obat_pulang_keterangan'
                  type='text'
                  placeholder='Keterangan'
                  name='obat_pulang_keterangan'
                  innerRef={register()}
                />
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col >
                <Input
                  id='surat_kontrol_check'
                  type='checkbox'
                  name='surat_kontrol_check'
                  className='me-1'
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSuratKontrol('1');
                    } else {
                      setSuratKontrol(undefined);
                    }
                    handleCheckboxChange(e);
                  }}
                  value='1'
                  checked={suratKontrol === '1'}
                  innerRef={register('surat_kontrol_check')as any}
                />
                <Label>Surat Kontrol</Label>
              </Col>
              <Col>
                <DateTimeInput
                  name='surat_kontrol_waktu'
                  defaultValue='date'
                  md={4}
                  style={{ marginTop:'-26px'}}
                  {...{ register, errors }}
                />
              </Col>
              <Col>
                <Input
                  id='surat_kontrol_keterangan'
                  type='text'
                  placeholder='Keterangan'
                  name='surat_kontrol_keterangan'
                  innerRef={register()}
                />
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <div className="mt-2 d-flex justify-content-around my-0">
                  <Signature
                    label="Perawat Pengkaji"
                    type="picker"
                    additionalLabel={(data && data.form && data.form.Nama_Perawat_Pengkaji) ? data.form.Nama_Perawat_Pengkaji : ''}
                    initialImage={(data && data.form && data.form.Tanda_Tangan_Perawat_Pengkaji && data.form.Tanda_Tangan_Perawat_Pengkaji !== '') ? data.form.Tanda_Tangan_Perawat_Pengkaji : undefined}
                    persons={nurses}
                    onSigned={(assigner: SignatureModel) => handlePerawatPengkaji(assigner)}
                  />
                  <Input
                    type="hidden"
                    name='tanda_tangan_perawat_pengkaji'
                    innerRef={register()}
                    invalid={errors.tanda_tangan_perawat_pengkaji && true}
                  />
                  <Input
                    type="hidden"
                    name='id_perawat_pengkaji'
                    innerRef={register()}
                    invalid={errors.id_perawat_pengkaji && true}
                  />
                </div>
              </Col>
              <Col>
                <div className="mt-2 d-flex justify-content-around my-0">
                  <Signature
                    label="Pasien"
                    type="drawer"
                    formName='rawat-jalan/pemberian-informasi'
                    component='ttd_pasien'
                    initialImage={(data && data.form && data.form.Tanda_Tangan_Pasien && data.form.Tanda_Tangan_Pasien !== '') ? data.form.Tanda_Tangan_Pasien : undefined}
                    onSigned={(image: string) => handlePatientSigned(image)}
                  />
                  <Input
                    type="hidden"
                    name="tanda_tangan_pasien"
                    innerRef={register()}
                  />
                </div>
              </Col>
            </Row>
          </FormGroup>
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
        </div>
      </FormGroup>
    </Form>
  )
}

export default DischargePlanning;
