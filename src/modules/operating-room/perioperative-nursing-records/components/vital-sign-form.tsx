import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { DateTimeInput } from "@src/shared/input";
import { useEffect, useState } from "react";
import { PerioperativeNursingRecordsModel } from '../models/perioperative-nursing-records.model';

const VitalSign = (props: { data: PerioperativeNursingRecordsModel, setValue:any, initialImage?: string, register: any, errors: any }) => {
  const { data, setValue, initialImage, register, errors } = props;
  const { patientDetail, meds } = useAppSelector(state => state.patientDetail);

  const getAllergyText = () => {
    if (!patientDetail) {
      return '';
    }
    if (!patientDetail.Pengkajian_Keperawatan) {
      return patientDetail.Alergi;
    }
    if (patientDetail.Pengkajian_Keperawatan && patientDetail.Pengkajian_Keperawatan.Alergi_Radio === '1') {
      return `${patientDetail.Pengkajian_Keperawatan.Alergi ?? patientDetail.Alergi ?? ''}\n`
    } else {
      return '';
    }
  }

  const getRptText = () => {
    if (!patientDetail) {
      return '';
    }
    if (patientDetail.Pengkajian_Keperawatan && patientDetail.Pengkajian_Keperawatan.RPT_Radio === '1') {
      return `${patientDetail.Pengkajian_Keperawatan.RPT ?? ''}\n`
    } else {
      return '';
    }
  }

  const getRpoText = () => {
    if (!patientDetail) {
      return '';
    }
    if (patientDetail.Pengkajian_Keperawatan && patientDetail.Pengkajian_Keperawatan.RPO_Radio === '1') {
      return `${patientDetail.Pengkajian_Keperawatan.RPO ?? ''}\n`
    } else {
      return '';
    }
  }

  const getPemeriksaPenunjang = () => {
    const pemeriksa: Array<string> = [];
    if (data && data.rajal && data.rajal.Pemeriksaan_Penunjang) {
      const helpingTools = data.rajal.Pemeriksaan_Penunjang;
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
    if (data && data.rajal && data.rajal.Status_Mental) {
      const helpingTools = data.rajal.Status_Mental;
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
  const [alergi, setAlergi] = useState<any>(`${data?.form?.Alergi}`);
  const [riwayatPenyakit, setRiwayatPenyakit] = useState<any>(`${data?.form?.Riwayat_Penyakit}`);
  const [pengobatanSaatIni, setPengobatanSaatIni] = useState<any>(`${data?.form?.Pengobatan_Saat_Ini}`);

  const [pemeriksaPenunjang, setPemeriksaPenunjang] = useState<Array<string>>(getPemeriksaPenunjang())
  const [statusMental, setStatusMental] = useState<Array<string>>(getStatusMental())
  //const [riwayatPenyakit, setRiwayatPenyakit] = useState<Array<string>>(getRiwayatPenyakit())

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
    setValue('pemeriksaan_penunjang', pemeriksaPenunjang)
  }, [pemeriksaPenunjang])

  useEffect(() => {
    setValue('status_mental', statusMental)
  }, [statusMental])

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  return (
    <FormGroup>
      <h5>Catatan Keperawatan Pra Operasi (Diisi Oleh Perawat Pengantar Maksimal 1 Jam Sebelum Diantar Ke Kamar Operasi)</h5>
      <hr />
      <FormGroup className="form-group" row>
        <Row md="8">
          <Col style={{width: '100%'}}>
            <Label>1. Tanda-tanda Vital</Label>
          </Col>
          <Col>
            <Label>Suhu</Label>
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
            <Label>Nadi</Label>
          </Col>
          <Col>
            <Input
              id="nadi"
              type="text"
              name="nadi"
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
              style={{marginLeft:'-65px', width:'150px'}}
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
              style={{marginLeft:'-65px', width:'150px'}}
              innerRef={register() as any}
            />
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </FormGroup>

      <div className='border border-dark rounded p-1 my-1 w-50 mt-2'>
        <Label className='text-danger fw-bolder'>Data tidak bisa diubah, silahkan ubah dari form Catatan Keperawatan Peri-Operatif (Pra-Operasi) Rawat Jalan/Rawat Inap!!!</Label>
      </div>

      <FormGroup className="mt-2 form-group" row>
        <Row>
          <Col md='3'>
            <Label>2. Status Mental</Label>
          </Col>
          <Col>
            <Input
              id="status_mental"
              type="checkbox"
              name="status_mental"
              className="me-1"
              value="1"
              onChange={(e) => handleStatusMentalCheckbox(e)}
              defaultChecked={getStatusMental() && getStatusMental().length > 0 && getStatusMental().includes('1')}
              innerRef={register("status_mental")}
              disabled
            />{' '}
            <Label>Sadar Penuh</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Input
              id="status_mental"
              type="checkbox"
              name="status_mental"
              className="me-1"
              onChange={(e) => handleStatusMentalCheckbox(e)}
              defaultChecked={getStatusMental() && getStatusMental().length > 0 && getStatusMental().includes('2')}
              value="2"
              innerRef={register("status_mental") as any}
              disabled
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
              defaultChecked={getStatusMental() && getStatusMental().length > 0 && getStatusMental().includes('3')}
              value="3"
              innerRef={register("status_mental") as any}
              disabled
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
              defaultChecked={getStatusMental() && getStatusMental().length > 0 && getStatusMental().includes('4')}
              value="4"
              innerRef={register("status_mental") as any}
              disabled
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
              onChange={(e) => handleCheckboxChange(e)}
              defaultChecked={getStatusMental() && getStatusMental().length > 0 && getStatusMental().includes('5')}
              value="5"
              innerRef={register("status_mental") as any}
              disabled
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
              type="radio"
              name="riwayat_penyakit"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              //defaultChecked={data && data.rajal && data.rajal.Riwayat_Penyakit === '0'}
              checked={riwayatPenyakit === '0'}
              innerRef={register("riwayat_penyakit") as any}
              readOnly
            />{' '}
            <Label>Tidak Ada</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Input
              id="riwayat_penyakit_2"
              type="radio"
              name="riwayat_penyakit"
              className="me-1"
              value="1"
              onChange={(e) => handleRadioChange(e)}
              //defaultChecked={data && data.rajal && data.rajal.Riwayat_Penyakit === '1'}
              checked={riwayatPenyakit === '1'}
              innerRef={register("riwayat_penyakit") as any}
              readOnly
            />{' '}
            <Label>Ada</Label>
          </Col>
          <Col md='6'>
            <Input
              id="riwayat_penyakit_keterangan"
              type="textarea"
              name="riwayat_penyakit_keterangan"
              innerRef={register() as any}
              readOnly
            />
          </Col>
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
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.rajal && data.rajal.Pengobatan_Saat_Ini === '0'}
              checked={pengobatanSaatIni === '0'}
              innerRef={register("pengobatan_saat_ini") as any}
              readOnly
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
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.rajal && data.rajal.Pengobatan_Saat_Ini === '1'}
              checked={pengobatanSaatIni === '1'}
              innerRef={register("pengobatan_saat_ini") as any}
              readOnly
            />{' '}
            <Label>Ada</Label>
          </Col>
          <Col md='6'>
            <Input
              id="pengobatan_saat_ini_keterangan"
              type="textarea"
              name="pengobatan_saat_ini_keterangan"
              innerRef={register() as any}
              readOnly
            />
          </Col>
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
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.rajal  && data.rajal.Alat_Bantu === '0'}
              innerRef={register("alat_bantu") as any}
              disabled
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
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.rajal && data.rajal.Alat_Bantu === '1'}
              innerRef={register("alat_bantu") as any}
              disabled
            />{' '}
            <Label>Ada</Label>
          </Col>
          <Col md='4'>
            <Input
              id="alat_bantu_keterangan"
              type="text"
              name="alat_bantu_keterangan"
              innerRef={register() as any}
              disabled
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
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.rajal && data.rajal.Operasi_Sebelumnya === '0'}
              innerRef={register("operasi_sebelumnya") as any}
              disabled
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
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.rajal && data.rajal.Operasi_Sebelumnya === '1'}
              innerRef={register("operasi_sebelumnya") as any}
              disabled
            />{' '}
            <Label>Ada</Label>
          </Col>
          <Col md='4'>
            <Input
              id="operasi_sebelumnya_keterangan"
              type="text"
              name="operasi_sebelumnya_keterangan"
              innerRef={register() as any}
              disabled
            />
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Label className='mt-2 ms-3'>Tanggal</Label>
          </Col>
          <Col>
            <DateTimeInput
              name='operasi_sebelumnya_tanggal'
              defaultValue='date'
              md={1}
              {...{ register, errors }}
              readOnly
            />
          </Col>
          <Col>
            <Label className='mt-2'>Di</Label>
          </Col>
          <Col md='4'>
            <Input
              id="operasi_sebelumnya_di"
              type="text"
              className='mt-2'
              name="operasi_sebelumnya_di"
              innerRef={register() as any}
              disabled
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
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.rajal && data.rajal.Alergi === '0'}
              checked={alergi === '0'}
              innerRef={register("alergi") as any}
              disabled
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
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.rajal && data.rajal.Alergi === '1'}
              checked={alergi === '1'}
              innerRef={register("alergi") as any}
              readOnly
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
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.rajal && data.rajal.Alergi === '2'}
              checked={alergi === '2'}
              innerRef={register("alergi") as any}
              readOnly
            />{' '}
            <Label>Ada</Label>
          </Col>
          <Col md='6'>
            <Input
              id="alergi_keterangan"
              type="textarea"
              name="alergi_keterangan"
              innerRef={register() as any}
              readOnly
            />
          </Col>
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
              innerRef={register("pemeriksaan_penunjang") as any}
              disabled
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
              innerRef={register("pemeriksaan_penunjang") as any}
              disabled
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
              innerRef={register("pemeriksaan_penunjang") as any}
              disabled
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
              innerRef={register("pemeriksaan_penunjang") as any}
              disabled
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
              innerRef={register("pemeriksaan_penunjang") as any}
              disabled
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
              innerRef={register("pemeriksaan_penunjang") as any}
              disabled
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
              innerRef={register("pemeriksaan_penunjang") as any}
              disabled
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
              innerRef={register("pemeriksaan_penunjang") as any}
              disabled
            />{' '}
            <Label>Lain-lain</Label>
          </Col>
          <Col md='4'>
            <Input
              id="pemeriksaan_penunjang_keterangan"
              type="text"
              name="pemeriksaan_penunjang_keterangan"
              innerRef={register() as any}
              disabled
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
              id="verifikasi_periksa_identitas"
              type="radio"
              name="verifikasi_periksa_identitas"
              className="me-1"
              value="1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Verifikasi_Periksa_Identitas === 1}
              innerRef={register("verifikasi_periksa_identitas") as any}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_periksa_identitas_2"
              type="radio"
              name="verifikasi_periksa_identitas"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Verifikasi_Periksa_Identitas === 0}
              innerRef={register("verifikasi_periksa_identitas") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_periksa_identitas_rajal_keterangan"
              type="checkbox"
              name="verifikasi_periksa_identitas_rajal_keterangan"
              className="me-1"
              value="4"
              disabled
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.rajal.Verifikasi_Periksa_Identitas === 1}
              innerRef={register("verifikasi_periksa_identitas_rajal_keterangan") as any}
            />{' '}
            <Label>Data Rajal / Ranap</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col sm='4'>
            <Input
              id="verifikasi_periksa_identitas_keterangan"
              type="text"
              name="verifikasi_periksa_identitas_keterangan"
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
            <Label>Periksa Gelang Identittas</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_periksa_gelang"
              type="radio"
              name="verifikasi_periksa_gelang"
              className="me-1"
              value="1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Verifikasi_Periksa_Gelang === 1}
              innerRef={register("verifikasi_periksa_gelang") as any}
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
              defaultChecked={data && data.form && data.form.Verifikasi_Periksa_Gelang === 0}
              innerRef={register("verifikasi_periksa_gelang") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_periksa_gelang_rajal_keterangan"
              type="checkbox"
              name="verifikasi_periksa_gelang_rajal_keterangan"
              className="me-1"
              value="1"
              disabled
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data?.rajal?.Verifikasi_Periksa_Gelang === 1}
              innerRef={register("verifikasi_periksa_gelang_rajal_keterangan") as any}
            />{' '}
            <Label>Data Rajal / Ranap</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col sm='4'>
            <Input
              id="verifikasi_periksa_gelang_keterangan"
              type="text"
              name="verifikasi_periksa_gelang_keterangan"
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
            <Label>Surat Pengantar Operasi</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_surat_pengantar_operasi_1"
              type="radio"
              name="verifikasi_surat_pengantar_operasi"
              className="me-1"
              value="1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Verifikasi_Surat_Pengantar_Operasi === 1}
              innerRef={register("verifikasi_surat_pengantar_operasi") as any}
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
              defaultChecked={data && data.form && data.form.Verifikasi_Surat_Pengantar_Operasi === 0}
              innerRef={register("verifikasi_surat_pengantar_operasi") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_surat_pengantar_operasi_rajal_keterangan"
              type="checkbox"
              disabled
              name="verifikasi_surat_pengantar_operasi_rajal_keterangan"
              className="me-1"
              value="1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data?.rajal?.Verifikasi_Surat_Pengantar_Operasi === 1}
              innerRef={register("verifikasi_surat_pengantar_operasi_rajal_keterangan") as any}
            />{' '}
            <Label>Data Rajal / Ranap</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col sm='4'>
            <Input
              id="verifikasi_surat_pengantar_operasi_keterangan"
              type="text"
              name="verifikasi_surat_pengantar_operasi_keterangan"
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
            <Label>Jenis dan lokasi operasi bersama pasien</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_jenis_lokasi_operasi_1"
              type="radio"
              name="verifikasi_jenis_lokasi_operasi"
              className="me-1"
              value="1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Verifikasi_Jenis_Lokasi_Operasi === 1}
              innerRef={register("verifikasi_jenis_lokasi_operasi") as any}
            />{' '}
            <Label>Ya</Label>
            <Input
              id="verifikasi_jenis_lokasi_operasi_keterangan"
              type="text"
              style={{width:'138%'}}
              name="verifikasi_jenis_lokasi_operasi_keterangan"
              innerRef={register() as any}
              placeholder='Keterangan'
              disabled
            />
          </Col>
          <Col>
            <Input
              id="verifikasi_jenis_lokasi_operasi"
              type="radio"
              name="verifikasi_jenis_lokasi_operasi"
              className="me-1"
              value="0"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Verifikasi_Jenis_Lokasi_Operasi === 0}
              innerRef={register("verifikasi_jenis_lokasi_operasi") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col>
            <Input
              id="verifikasi_jenis_lokasi_operasi_rajal_keterangan"
              type="checkbox"
              name="verifikasi_jenis_lokasi_operasi_rajal_keterangan"
              className="me-1"
              value="1"
              disabled
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data?.rajal?.Verifikasi_Jenis_Lokasi_Operasi === 1}
              innerRef={register("verifikasi_jenis_lokasi_operasi_rajal_keterangan") as any}
            />{' '}
            <Label>Data Rajal / Ranap</Label>
          </Col>
        </Row>
      </FormGroup>
    </FormGroup>
  )
}

export default VitalSign;
