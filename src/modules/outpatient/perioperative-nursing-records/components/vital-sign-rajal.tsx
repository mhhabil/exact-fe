import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTimeInput } from "@src/shared/input";
import { PerioperativeNursingRecordRajalsModel } from '../models/perioperative-nursing-records-rajal-model';

const VitalSignRajal = (props: { data: PerioperativeNursingRecordRajalsModel, setValue:any, initialImage?: string, register: any, errors: any, defaultPattern: string }) => {
  const { data, setValue, initialImage, register, errors, defaultPattern } = props;

  const [fullyConscious, setFullyConscious] = useState<boolean>(!!(data?.form?.Status_Mental?.Sadar_Penuh === 1));
  const [noneHistory, setNoneHistory] = useState<boolean>(!!(data?.form?.Riwayat_Penyakit?.Tidak_Ada === 1));
  const [currentTreat, setCurrentTreat] = useState<string | undefined>(`${data?.form?.Pengobatan_Saat_Ini}`)
  const [helpingTool, setHelpingTool] = useState<string | undefined>(`${data?.form?.Alat_Bantu}`)
  const [prevOp, setPrevOp] = useState<string | undefined>(`${data?.form?.Operasi_Sebelumnya}`)
  const [allergy, setAllergy] = useState<string | undefined>(`${data?.form?.Alergi}`);
  const [verifikasiPasien_1, setVerifikasiPasien_1] = useState<any>(`${data?.form?.Verifikasi_Periksa_Identitas}`);
  const [verifikasiPasien_2, setVerifikasiPasien_2] = useState<any>(`${data?.form?.Verifikasi_Periksa_Gelang}`);
  const [verifikasiPasien_3, setVerifikasiPasien_3] = useState<any>(`${data?.form?.Verifikasi_Surat_Pengantar_Operasi}`);
  const [verifikasiPasien_4, setVerifikasiPasien_4] = useState<any>(`${data?.form?.Verifikasi_Jenis_Lokasi_Operasi}`)

  useEffect(() => {
    if (data && data.form) {
      setFullyConscious(!!(data?.form?.Status_Mental?.Sadar_Penuh === 1));
      setNoneHistory(!!(data?.form?.Riwayat_Penyakit?.Tidak_Ada === 1));
      setCurrentTreat(`${data?.form?.Pengobatan_Saat_Ini}`);
      setHelpingTool(`${data?.form?.Alat_Bantu}`);
      setPrevOp(`${data?.form?.Operasi_Sebelumnya}`);
      setAllergy(`${data?.form?.Alergi}`);
    }
  }, [data])

  const handleChangePengobatan = (e: any) => {
    if (e.target.value === '0') {
      setValue('alergi_keterangan', '');
    }
    setCurrentTreat(e.target.value)
    setValue('pengobatan_saat_ini', e.target.value)
  }

  const handleChangeAlatBantu = (e: any) => {
    if (e.target.value === '0') {
      setValue('alat_bantu_keterangan', '');
    }
    setHelpingTool(e.target.value)
    setValue('alat_bantu', e.target.value)
  }

  const handleChangeAlergi = (e: any) => {
    if (e.target.value === '0') {
      setValue('alergi_keterangan', '');
    }
    setAllergy(e.target.value)
    setValue('alergi', e.target.value)
  }

  const handleChangeOperasi = (e: any) => {
    if (e.target.value === '0') {
      setValue('operasi_sebelumnya_keterangan', '');
      setValue('operasi_sebelumnya_di', '');
      setValue('operasi_sebelumnya_tanggal', '');
    }
    setPrevOp(e.target.value)
    setValue('operasi_sebelumnya', e.target.value)
  }

  const getPemeriksaPenunjang = () => {
    const pemeriksa: Array<string> = [];
    if (data && data.form && data.form.Pemeriksaan_Penunjang) {
      const helpingTools = data.form.Pemeriksaan_Penunjang;
      if (helpingTools.Laboratorium) {
        pemeriksa.push('1')
      }
      if (helpingTools.Rongent) {
        pemeriksa.push('2')
      }
      if (helpingTools.Foto_Fundus) {
        pemeriksa.push('3')
      }
      if (helpingTools.USG_Mata) {
        pemeriksa.push('4')
      }
      if (helpingTools.Koma) {
        pemeriksa.push('5')
      }
      if (helpingTools.Biometri) {
        pemeriksa.push('6')
      }
      if (helpingTools.Tidak_Ada) {
        pemeriksa.push('7')
      }
      if (helpingTools.Lain_lain) {
        pemeriksa.push('8')
      }
    }
    return pemeriksa;
  }

  const getStatusMental = () => {
    const status: Array<string> = [];
    if (data && data.form && data.form.Status_Mental) {
      const helpingTools = data.form.Status_Mental;
      if (helpingTools.Sadar_Penuh) {
        status.push('1')
      }
      if (helpingTools.Bingung) {
        status.push('2')
      }
      if (helpingTools.Agitasi) {
        status.push('3')
      }
      if (helpingTools.Mengantuk) {
        status.push('4')
      }
      if (helpingTools.Koma) {
        status.push('5')
      }
    }
    return status;
  }

  const getRiwayatPenyakit = () => {
    const penyakit: Array<string> = [];
    if (data && data.form && data.form.Riwayat_Penyakit) {
      const helpingTools = data.form.Riwayat_Penyakit;
      if (helpingTools.Tidak_Ada) {
        penyakit.push('1')
      }
      if (helpingTools.Hipertensi) {
        penyakit.push('2')
      }
      if (helpingTools.Diabetes) {
        penyakit.push('3')
      }
      if (helpingTools.Hepatitis) {
        penyakit.push('4')
      }
      if (helpingTools.Lain_lain) {
        penyakit.push('5')
      }
    }
    return penyakit;
  }

  const [pemeriksaPenunjang, setPemeriksaPenunjang] = useState<Array<string>>(getPemeriksaPenunjang())
  const [statusMental, setStatusMental] = useState<Array<string>>(getStatusMental())
  const [riwayatPenyakit, setRiwayatPenyakit] = useState<Array<string>>(getRiwayatPenyakit())

  const handlePemeriksaPenunjangCheckbox = (e: any) => {
    if (e.target.checked) {
      if (pemeriksaPenunjang && pemeriksaPenunjang.includes(e.target.value)) {
        return;
      } else {
        setPemeriksaPenunjang([...pemeriksaPenunjang, e.target.value])
      }
    }
    if (!e.target.checked) {
      if (pemeriksaPenunjang && pemeriksaPenunjang.includes(e.target.value)) {
        const newLists = pemeriksaPenunjang.filter((val: string) => val !== e.target.value)
        setPemeriksaPenunjang(newLists);
      } else {
        return 0;
      }
    }
  }

  const handleStatusMentalCheckbox = (e: any) => {
    if (e.target.checked) {
      if (statusMental && statusMental.includes(e.target.value)) {
        return;
      } else {
        setStatusMental([...statusMental, e.target.value])
      }
    }
    if (!e.target.checked) {
      if (statusMental && statusMental.includes(e.target.value)) {
        const newLists = statusMental.filter((val: string) => val !== e.target.value)
        setStatusMental(newLists);
      } else {
        return 0;
      }
    }
  }

  const handleRiwayatPenyakitCheckbox = (e: any) => {
    if (e.target.checked) {
      if (riwayatPenyakit && riwayatPenyakit.includes(e.target.value)) {
        return;
      } else {
        setRiwayatPenyakit([...riwayatPenyakit, e.target.value])
      }
    }
    if (!e.target.checked) {
      if (riwayatPenyakit && riwayatPenyakit.includes(e.target.value)) {
        const newLists = riwayatPenyakit.filter((val: string) => val !== e.target.value)
        setRiwayatPenyakit(newLists);
      } else {
        return 0;
      }
    }
  }

  useEffect(() => {
    if (defaultPattern === '1') {
      const e = {
        target: {
          value: '1',
          checked: true,
        },
      }
      handleStatusMentalCheckbox(e);
      setFullyConscious(true);
      handleRiwayatPenyakitCheckbox(e);
      setNoneHistory(true);
      setValue('pengobatan_saat_ini', '0');
      setCurrentTreat('0')
      setValue('alat_bantu', '0');
      setHelpingTool('0')
      setValue('operasi_sebelumnya', '0');
      setPrevOp('0');
      setValue('alergi', '0');
      setAllergy('0');
      setValue('verifikasi_periksa_identitas', '1');
      setVerifikasiPasien_1('1');
      setValue('verifikasi_periksa_gelang', '1');
      setVerifikasiPasien_2('1');
      setValue('verifikasi_surat_pengantar_operasi', '1');
      setVerifikasiPasien_3('1');
      setValue('verifikasi_jenis_lokasi_operasi', '1');
      setVerifikasiPasien_4('1');
    } else if (defaultPattern === '0') {
      const e = {
        target: {
          value: '1',
          checked: false,
        },
      }
      handleStatusMentalCheckbox(e);
      setFullyConscious(false);
      handleRiwayatPenyakitCheckbox(e);
      setNoneHistory(false);
      setValue('pengobatan_saat_ini', undefined);
      setCurrentTreat(undefined)
      setValue('alat_bantu', undefined);
      setHelpingTool(undefined)
      setValue('operasi_sebelumnya', undefined);
      setPrevOp(undefined);
      setValue('alergi', undefined);
      setAllergy(undefined);
      setValue('verifikasi_periksa_identitas', undefined);
      setVerifikasiPasien_1(undefined);
      setValue('verifikasi_periksa_gelang', undefined);
      setVerifikasiPasien_2(undefined);
      setValue('verifikasi_surat_pengantar_operasi', undefined);
      setVerifikasiPasien_3(undefined);
      setValue('verifikasi_jenis_lokasi_operasi', undefined);
      setVerifikasiPasien_4(undefined);
    }
  }, [defaultPattern])

  useEffect(() => {
    setValue('pemeriksaan_penunjang', pemeriksaPenunjang)
  }, [pemeriksaPenunjang])

  useEffect(() => {
    setValue('status_mental', statusMental)
  }, [statusMental])

  useEffect(() => {
    setValue('riwayat_penyakit', riwayatPenyakit)
  }, [riwayatPenyakit])

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  return (
    <FormGroup>
      <h4 className='mt-2'>Catatan Keperawatan Pra Operasi</h4>
      <hr />
      <FormGroup className="form-group" row>
        <Row md="8">
          <Col style={{width: '100%'}}>
            <Label>1. Tanda-tanda Vital</Label>
          </Col>
          <Col>
            <Label>T</Label>
          </Col>
          <Col>
            <Input
              id="suhu"
              type="text"
              name="suhu"
              style={{marginLeft:'-60px', width:'150px'}}
              innerRef={register() as any}
            />
          </Col>
          <Col>
            <Label>RR</Label>
          </Col>
          <Col>
            <Input
              id="rr"
              type="text"
              name="rr"
              style={{marginLeft:'-60px', width:'150px'}}
              innerRef={register() as any}
            />
          </Col>
          <Col>
            <Label>TB</Label>
          </Col>
          <Col>
            <Input
              id="tb"
              type="text"
              name="tb"
              style={{marginLeft:'-60px', width:'150px'}}
              innerRef={register() as any}
            />
          </Col>
          <Col>
            <Label>Skor Nyeri</Label>
          </Col>
          <Col>
            <Input
              id="skala_nyeri"
              type="text"
              name="skala_nyeri"
              style={{marginLeft:'-40px', width:'140px'}}
              innerRef={register() as any}
            />
          </Col>
        </Row>

        <Row md="8">
          <Col>
          </Col>
          <Col>
            <Label>KGD</Label>
          </Col>
          <Col>
            <Input
              id="kgd"
              type="text"
              name="kgd"
              style={{marginLeft:'-60px', width:'150px'}}
              innerRef={register() as any}
            />
          </Col>
          <Col>
            <Label style={{marginLeft:'-5px'}}>TD</Label>
          </Col>
          <Col>
            <Input
              id="td"
              type="text"
              name="td"
              style={{marginLeft:'-60px', width:'150px'}}
              innerRef={register() as any}
            />
          </Col>
          <Col style={{width: '100%'}}>
            <Label style={{marginLeft:'-5px'}}>BB</Label>
          </Col>
          <Col>
            <Input
              id="bb"
              type="text"
              name="bb"
              style={{marginLeft:'-60px', width:'150px'}}
              innerRef={register() as any}
            />
          </Col>
          <Col style={{width: '100%'}}>
            <Label style={{marginLeft:'-5px'}}>HR</Label>
          </Col>
          <Col>
            <Input
              type="text"
              name="nadi"
              style={{marginLeft:'-40px', width:'140px'}}
              innerRef={register() as any}
              invalid={errors.nadi && true}
            />
          </Col>
        </Row>
      </FormGroup>

      <FormGroup className="mt-2 form-group" row>
        <Row>
          <Col md='3'>
            <Label>2. Status Mental</Label>
          </Col>
          <Col>
            <Input
              id="status_mental_1"
              type="checkbox"
              name="status_mental"
              className="me-1"
              value="1"
              style={{marginLeft:'-70px'}}
              onChange={(e) => {
                if (e.target.checked) {
                  setFullyConscious(true);
                } else {
                  setFullyConscious(false);
                }
                handleStatusMentalCheckbox(e);
              }}
              checked={fullyConscious}
              innerRef={register('status_mental') as any}
            />{' '}
            <Label>Sadar Penuh</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Input
              id="status_mental_2"
              type="checkbox"
              name="status_mental"
              className="me-1"
              onChange={(e) => handleStatusMentalCheckbox(e)}
              defaultChecked={!!(data?.form?.Status_Mental?.Bingung === 1)}
              value="2"
              style={{marginLeft:'-70px'}}
              innerRef={register("status_mental") as any}
            />{' '}
            <Label>Bingung</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Input
              id="status_mental_3"
              type="checkbox"
              name="status_mental"
              className="me-1"
              onChange={(e) => handleStatusMentalCheckbox(e)}
              defaultChecked={!!(data?.form?.Status_Mental?.Agitasi === 1)}
              value="3"
              style={{marginLeft:'-70px'}}
              innerRef={register("status_mental") as any}
            />{' '}
            <Label>Agitasi</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Input
              id="status_mental_4"
              type="checkbox"
              name="status_mental"
              className="me-1"
              onChange={(e) => handleStatusMentalCheckbox(e)}
              defaultChecked={!!(data?.form?.Status_Mental?.Mengantuk === 1)}
              value="4"
              style={{marginLeft:'-70px'}}
              innerRef={register("status_mental") as any}
            />{' '}
            <Label>Mengantuk</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Input
              id="status_mental_5"
              type="checkbox"
              name="status_mental"
              className="me-1"
              onChange={(e) => handleStatusMentalCheckbox(e)}
              defaultChecked={!!(data?.form?.Status_Mental?.Koma === 1)}
              value="5"
              style={{marginLeft:'-70px'}}
              innerRef={register("status_mental") as any}
            />{' '}
            <Label>Koma</Label>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup className="mt-1 form-group" row>
        <Row>
          <Col md='3'>
            <Label>3. Riwayat Penyakit</Label>
          </Col>
          <Col>
            <Input
              id="riwayat_penyakit_1"
              type="checkbox"
              name="riwayat_penyakit"
              style={{marginLeft:'-70px'}}
              className="me-1"
              value="1"
              onChange={(e) => {
                if (e.target.checked) {
                  setNoneHistory(true);
                } else {
                  setNoneHistory(false);
                }
                handleRiwayatPenyakitCheckbox(e);
              }}
              checked={noneHistory}
              innerRef={register('riwayat_penyakit') as any}
            />{' '}
            <Label>Tidak Ada</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Input
              id="riwayat_penyakit_2"
              type="checkbox"
              name="riwayat_penyakit"
              className="me-1"
              onChange={(e) => handleRiwayatPenyakitCheckbox(e)}
              defaultChecked={!!(data?.form?.Riwayat_Penyakit?.Hipertensi === 1)}
              value="2"
              style={{marginLeft:'-70px'}}
              innerRef={register("riwayat_penyakit") as any}
            />{' '}
            <Label>Hipertensi</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Input
              id="riwayat_penyakit_3"
              type="checkbox"
              name="riwayat_penyakit"
              className="me-1"
              onChange={(e) => handleRiwayatPenyakitCheckbox(e)}
              defaultChecked={!!(data?.form?.Riwayat_Penyakit?.Diabetes === 1)}
              value="3"
              style={{marginLeft:'-70px'}}
              innerRef={register("riwayat_penyakit") as any}
            />{' '}
            <Label>Diabetes</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Input
              id="riwayat_penyakit_4"
              type="checkbox"
              name="riwayat_penyakit"
              className="me-1"
              onChange={(e) => handleRiwayatPenyakitCheckbox(e)}
              defaultChecked={!!(data?.form?.Riwayat_Penyakit?.Hepatitis === 1)}
              value="4"
              style={{marginLeft:'-70px'}}
              innerRef={register("riwayat_penyakit") as any}
            />{' '}
            <Label>Hepatitis</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Input
              id="riwayat_penyakit_5"
              type="checkbox"
              name="riwayat_penyakit"
              className="me-1"
              onChange={(e) => handleRiwayatPenyakitCheckbox(e)}
              defaultChecked={!!(data?.form?.Riwayat_Penyakit?.Lain_lain === 1)}
              value="5"
              style={{marginLeft:'-70px'}}
              innerRef={register("riwayat_penyakit") as any}
            />{' '}
            <Label>Lain-lain</Label>
          </Col>
          <Col>
            <Input
              id="riwayat_penyakit_keterangan"
              type="text"
              name="riwayat_penyakit_keterangan"
              style={{marginLeft:'-150px'}}
              innerRef={register() as any}
            />
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </FormGroup>

      <FormGroup className="mt-1 form-group" row>
        <Row>
          <Col md='3'>
            <Label>4. Pengobatan Saat ini</Label>
          </Col>
          <Col>
            <Input
              id="pengobatan_saat_ini_1"
              type="radio"
              name="pengobatan_saat_ini"
              className="me-1"
              value="0"
              onChange={(e) => handleChangePengobatan(e)}
              style={{marginLeft:'-70px'}}
              checked={currentTreat === '0'}
              innerRef={register('pengobatan_saat_ini') as any}
            />{' '}
            <Label>Tidak Ada</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Input
              id="pengobatan_saat_ini"
              type="radio"
              name="pengobatan_saat_ini"
              className="me-1"
              value="1"
              onChange={(e) => handleChangePengobatan(e)}
              style={{marginLeft:'-70px'}}
              checked={currentTreat === '1'}
              innerRef={register('pengobatan_saat_ini') as any}
            />{' '}
            <Label>Ada</Label>
          </Col>
          <Col>
            <Input
              id="pengobatan_saat_ini_keterangan"
              type="text"
              name="pengobatan_saat_ini_keterangan"
              style={{marginLeft:'-150px'}}
              innerRef={register() as any}
              readOnly={(currentTreat) ? currentTreat !== '1' : undefined}
            />
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </FormGroup>
      <FormGroup className="mt-1 form-group" row>
        <Row>
          <Col md='3'>
            <Label>5. Alat Bantu yang Digunakan</Label>
          </Col>
          <Col>
            <Input
              id="alat_bantu"
              type="radio"
              name="alat_bantu"
              className="me-1"
              value="0"
              onChange={(e) => handleChangeAlatBantu(e)}
              style={{marginLeft:'-70px'}}
              checked={helpingTool === '0'}
              innerRef={register('alat_bantu') as any}
            />{' '}
            <Label>Tidak Ada</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Input
              id="alat_bantu_2"
              type="radio"
              name="alat_bantu"
              className="me-1"
              value="1"
              onChange={(e) => handleChangeAlatBantu(e)}
              style={{marginLeft:'-70px'}}
              checked={helpingTool === '1'}
              innerRef={register('alat_bantu') as any}
            />{' '}
            <Label>Ada</Label>
          </Col>
          <Col>
            <Input
              id="alat_bantu_keterangan"
              type="text"
              name="alat_bantu_keterangan"
              style={{marginLeft:'-150px'}}
              innerRef={register() as any}
              readOnly={(helpingTool) ? helpingTool !== '1' : undefined}
            />
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </FormGroup>

      <FormGroup className="mt-1 form-group" row>
        <Row>
          <Col md='3'>
            <Label>6. Operasi Sebelumnya</Label>
          </Col>
          <Col>
            <Input
              id="operasi_sebelumnya"
              type="radio"
              name="operasi_sebelumnya"
              className="me-1"
              value="0"
              onChange={(e) => handleChangeOperasi(e)}
              style={{marginLeft:'-70px'}}
              checked={prevOp === '0'}
              innerRef={register('operasi_sebelumnya') as any}
            />{' '}
            <Label>Tidak Ada</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Input
              id="operasi_sebelumnya_2"
              type="radio"
              name="operasi_sebelumnya"
              className="me-1"
              value="1"
              onChange={(e) => handleChangeOperasi(e)}
              style={{marginLeft:'-70px'}}
              checked={prevOp === '1'}
              innerRef={register('operasi_sebelumnya') as any}
            />{' '}
            <Label>Ada</Label>
          </Col>
          <Col>
            <Input
              id="operasi_sebelumnya_keterangan"
              type="text"
              name="operasi_sebelumnya_keterangan"
              style={{marginLeft:'-150px'}}
              innerRef={register() as any}
              readOnly={(prevOp) ? prevOp !== '1' : undefined}
            />
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Label className='mt-1' style={{marginLeft:'-40px'}}>Tanggal</Label>
          </Col>
          <Col>
            <DateTimeInput
              name='operasi_sebelumnya_tanggal'
              defaultValue='date'
              md={1}
              style={{marginTop: '-20px', marginLeft:'-150px'}}
              {...{ register, errors }}
              readOnly={(prevOp) ? prevOp !== '1' : undefined}
            />
          </Col>
          <Col>
            <Label className='mt-1' style={{marginLeft:'-150px'}}>Di</Label>
          </Col>
          <Col>
            <Input
              id="operasi_sebelumnya_di"
              type="text"
              name="operasi_sebelumnya_di"
              style={{marginLeft:'-320px', marginTop:'3px'}}
              innerRef={register() as any}
              readOnly={(prevOp) ? prevOp !== '1' : undefined}
            />
          </Col>
        </Row>
      </FormGroup>

      <FormGroup className="mt-1 form-group" row>
        <Row>
          <Col md='3'>
            <Label>7. Alergi</Label>
          </Col>
          <Col>
            <Input
              id="alergi"
              type="radio"
              name="alergi"
              className="me-1"
              value="0"
              onChange={(e) => handleChangeAlergi(e)}
              style={{marginLeft:'-70px'}}
              checked={allergy === '0'}
              innerRef={register('alergi') as any}
            />{' '}
            <Label>Tidak Ada</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Input
              id="alergi_2"
              type="radio"
              name="alergi"
              className="me-1"
              value="1"
              onChange={(e) => handleChangeAlergi(e)}
              style={{marginLeft:'-70px'}}
              checked={allergy === '1'}
              innerRef={register('alergi') as any}
            />{' '}
            <Label>Tidak Diketahui</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Input
              id="alergi_3"
              type="radio"
              name="alergi"
              className="me-1"
              value="2"
              onChange={(e) => handleChangeAlergi(e)}
              style={{marginLeft:'-70px'}}
              defaultChecked={data && data.form && data.form.Alergi === '2'}
              innerRef={register("alergi") as any}
            />{' '}
            <Label>Ada</Label>
          </Col>
          <Col>
            <Input
              id="alergi_keterangan"
              type="text"
              name="alergi_keterangan"
              style={{marginLeft:'-150px'}}
              innerRef={register() as any}
              readOnly={(allergy) ? allergy !== '2' : undefined}
            />
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </FormGroup>

      <FormGroup className="mt-2 form-group" row>
        <Row>
          <Col md='3'>
            <Label>8.Pemeriksaan Penunjang</Label>
          </Col>
          <Col>
            <Input
              id="pemeriksaan_penunjang_1"
              type="checkbox"
              name="pemeriksaan_penunjang"
              className="me-1"
              onChange={(e) => handlePemeriksaPenunjangCheckbox(e)}
              defaultChecked={getPemeriksaPenunjang() && getPemeriksaPenunjang().length > 0 && getPemeriksaPenunjang().includes('1')}
              value="1"
              style={{marginLeft:'-70px'}}
              innerRef={register("pemeriksaan_penunjang") as any}
            />{' '}
            <Label>Laboratorium</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Input
              id="pemeriksaan_penunjang_2"
              type="checkbox"
              name="pemeriksaan_penunjang"
              className="me-1"
              onChange={(e) => handlePemeriksaPenunjangCheckbox(e)}
              defaultChecked={getPemeriksaPenunjang() && getPemeriksaPenunjang().length > 0 && getPemeriksaPenunjang().includes('2')}
              value="2"
              style={{marginLeft:'-70px'}}
              innerRef={register("pemeriksaan_penunjang") as any}
            />{' '}
            <Label>Rongent</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Input
              id="pemeriksaan_penunjang_3"
              type="checkbox"
              name="pemeriksaan_penunjang"
              className="me-1"
              onChange={(e) => handlePemeriksaPenunjangCheckbox(e)}
              defaultChecked={getPemeriksaPenunjang() && getPemeriksaPenunjang().length > 0 && getPemeriksaPenunjang().includes('3')}
              value="3"
              style={{marginLeft:'-70px'}}
              innerRef={register("pemeriksaan_penunjang") as any}
            />{' '}
            <Label>Foto Fundus</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Input
              id="pemeriksaan_penunjang_4"
              type="checkbox"
              name="pemeriksaan_penunjang"
              className="me-1"
              onChange={(e) => handlePemeriksaPenunjangCheckbox(e)}
              defaultChecked={getPemeriksaPenunjang() && getPemeriksaPenunjang().length > 0 && getPemeriksaPenunjang().includes('4')}
              value="4"
              style={{marginLeft:'-70px'}}
              innerRef={register("pemeriksaan_penunjang") as any}
            />{' '}
            <Label>USG Mata</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Input
              id="pemeriksaan_penunjang_5"
              type="checkbox"
              name="pemeriksaan_penunjang"
              className="me-1"
              onChange={(e) => handlePemeriksaPenunjangCheckbox(e)}
              defaultChecked={getPemeriksaPenunjang() && getPemeriksaPenunjang().length > 0 && getPemeriksaPenunjang().includes('5')}
              value="5"
              style={{marginLeft:'-70px'}}
              innerRef={register("pemeriksaan_penunjang") as any}
            />{' '}
            <Label>Koma</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Input
              id="pemeriksaan_penunjang_6"
              type="checkbox"
              name="pemeriksaan_penunjang"
              className="me-1"
              onChange={(e) => handlePemeriksaPenunjangCheckbox(e)}
              defaultChecked={getPemeriksaPenunjang() && getPemeriksaPenunjang().length > 0 && getPemeriksaPenunjang().includes('6')}
              value="6"
              style={{marginLeft:'-70px'}}
              innerRef={register("pemeriksaan_penunjang") as any}
            />{' '}
            <Label>Biometri</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Input
              id="pemeriksaan_penunjang_7"
              type="checkbox"
              name="pemeriksaan_penunjang"
              className="me-1"
              onChange={(e) => handlePemeriksaPenunjangCheckbox(e)}
              defaultChecked={getPemeriksaPenunjang() && getPemeriksaPenunjang().length > 0 && getPemeriksaPenunjang().includes('7')}
              value="7"
              style={{marginLeft:'-70px'}}
              innerRef={register("pemeriksaan_penunjang") as any}
            />{' '}
            <Label>Tidak Ada</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Input
              id="pemeriksaan_penunjang_8"
              type="checkbox"
              name="pemeriksaan_penunjang"
              className="me-1"
              onChange={(e) => handlePemeriksaPenunjangCheckbox(e)}
              defaultChecked={getPemeriksaPenunjang() && getPemeriksaPenunjang().length > 0 && getPemeriksaPenunjang().includes('8')}
              value="8"
              style={{marginLeft:'-70px'}}
              innerRef={register("pemeriksaan_penunjang") as any}
            />{' '}
            <Label>Lain-lain</Label>
          </Col>
          <Col>
            <Input
              id="pemeriksaan_penunjang_keterangan"
              type="text"
              name="pemeriksaan_penunjang_keterangan"
              style={{marginLeft:'-150px'}}
              innerRef={register() as any}
            />
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </FormGroup>
      <h4 className='mt-2'>Checklist Persiapan Operasi</h4>
      <hr />
      <FormGroup className="mt-1 form-group" row>
        <Row>
          <Col md='3'>
            <Label>1. VERIFIKASI PASIEN</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'>
            <Label>Periksa Identitas Pasien</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_periksa_identitas_1"
              type="radio"
              name="verifikasi_periksa_identitas"
              className="me-1"
              value="1"
              onChange={(e) => {
                handleRadioChange(e);
                setVerifikasiPasien_1('1');
              }}
              defaultChecked={ verifikasiPasien_1 === 1}
              innerRef={register({ required: false })}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_periksa_identitas"
              type="radio"
              name="verifikasi_periksa_identitas"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              style={{marginLeft:'-50px'}}
              defaultChecked={data && data.form && data.form.Verifikasi_Periksa_Identitas === 0}
              innerRef={register("verifikasi_periksa_identitas") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_periksa_identitas_keterangan"
              type="text"
              name="verifikasi_periksa_identitas_keterangan"
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
            <Label>Periksa Gelang Identitas</Label>
          </Col>
          <Col>
            <Input
              id='verifikasi_periksa_gelang_1'
              type='radio'
              name='verifikasi_periksa_gelang'
              className='me-1'
              value="1"
              onChange={(e) => {
                handleRadioChange(e);
                setVerifikasiPasien_2('1');
              }}
              defaultChecked={verifikasiPasien_2 === 1}
              innerRef={register({ required: false })}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_periksa_gelang"
              type="radio"
              name="verifikasi_periksa_gelang"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              style={{marginLeft:'-50px'}}
              defaultChecked={data && data.form && data.form.Verifikasi_Periksa_Gelang === 0}
              innerRef={register("verifikasi_periksa_gelang") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_periksa_gelang_keterangan"
              type="text"
              name="verifikasi_periksa_gelang_keterangan"
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
            <Label>Surat Pengantar Operasi</Label>
          </Col>
          <Col>
            <Input
              id='verifikasi_surat_pengantar_operasi_1'
              type='radio'
              name='verifikasi_surat_pengantar_operasi'
              className='me-1'
              value='1'
              onChange={(e) => {
                handleRadioChange(e);
                setVerifikasiPasien_3('1');
              }}
              defaultChecked={verifikasiPasien_3 === 1}
              innerRef={register({ required: false })}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_surat_pengantar_operasi"
              type="radio"
              name="verifikasi_surat_pengantar_operasi"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              style={{marginLeft:'-50px'}}
              defaultChecked={data && data.form && data.form.Verifikasi_Surat_Pengantar_Operasi === 0}
              innerRef={register("verifikasi_surat_pengantar_operasi") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_surat_pengantar_operasi_keterangan"
              type="text"
              name="verifikasi_surat_pengantar_operasi_keterangan"
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
            <Label>Jenis dan lokasi operasi bersama pasien</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_jenis_lokasi_operasi_1"
              type="radio"
              name="verifikasi_jenis_lokasi_operasi"
              className="me-1"
              value="1"
              onChange={(e) => {
                handleRadioChange(e);
                setVerifikasiPasien_4('1');
              }}
              defaultChecked={verifikasiPasien_4 === 1}
              innerRef={register({ required: false })}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_jenis_lokasi_operasi"
              type="radio"
              name="verifikasi_jenis_lokasi_operasi"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              style={{marginLeft:'-50px'}}
              defaultChecked={data && data.form && data.form.Verifikasi_Jenis_Lokasi_Operasi === 0}
              innerRef={register("verifikasi_jenis_lokasi_operasi") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_jenis_lokasi_operasi_keterangan"
              type="text"
              name="verifikasi_jenis_lokasi_operasi_keterangan"
              style={{marginLeft:'-70px', width: '300px'}}
              innerRef={register() as any}
              placeholder='Keterangan'
            />
          </Col>
          <Col></Col>
        </Row>
      </FormGroup>
    </FormGroup>
  )
}

export default VitalSignRajal;
