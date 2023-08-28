import { Button, Col, FormGroup, Input, Label, Row, TabContent, TabPane } from "reactstrap";
import { useEffect, useState } from "react";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import PreAnesthesiaFormConstant from "../../pre-anesthesia-form/constants/pre-anesthesia-form.constant";
import { ApprovalOrRefusalOfAnestheticActionModel } from "../models/approval-or-refusal-of-anesthetic-action-model";

const ProvisionOfInformationTabInPatient = (props: { data?: any, register: any, setValue: any, activeTab: string }) => {
  const { data, register, setValue, activeTab } = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);
  const [waliName, setWaliName] = useState(!!(data?.form?.Penerima_Informasi && data?.form?.Penerima_Informasi === 'Wali'))

  const handlePatientSigned = (image: string) => {
    setValue('ttd_penerima_informasi', image);
  }

  useEffect(() => {
    if (doctors) {
      setValue('id_pemberi_informasi', data.form.ID_Pemberi_Informasi ? data.form.ID_Pemberi_Informasi : '')
      setValue('id_dokter_pelaksana', data.form.ID_Dokter_Pelaksana ? data.form.ID_Dokter_Pelaksana : '')
    }
  }, [doctors])

  const handleOfficerSigned = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue('ttd_dokter_pelaksana', image.Signature);
      setValue('id_dokter_pelaksana_ttd', image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue('ttd_dokter_pelaksana', image.Signature);
      setValue('id_dokter_pelaksana_ttd', image.ID_Karyawan);
    }
  }

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  const handleWaliName = (e: any) => {
    if (e.target.value === '2') {
      setWaliName(true);
    } else {
      setWaliName(false);
    }
  }

  return (
    <TabContent {...{ activeTab }}>
      <TabPane tabId='1'>
        <div className="border-dark mt-2 p-1">
          <Label className="fs-5" >Pemberian Informasi</Label>
          <hr/>
          <FormGroup className="form-group align-items-center" row>
            <Col md='3'>
              <Label>Dokter Pelaksana Tindakan*</Label>
            </Col>
            <Col md='4'>
              <Input
                className="mt-1"
                type="select"
                id="id_dokter_pelaksana"
                name="id_dokter_pelaksana"
                innerRef={register()}
              >
                <option value="" disabled={true}>--</option>
                {
                  doctors && doctors.map((item: any, key: number) => {
                    return <option value={item.ID_Karyawan} key={key}>{ item.Nama }</option>;
                  })
                }
              </Input>
            </Col>
          </FormGroup>
          <FormGroup className="form-group align-items-center" row>
            <Col md='3'>
              <Label>Pemberi Informasi*</Label>
            </Col>
            <Col md='4'>
              <Input
                className="mt-1"
                type="select"
                id="id_pemberi_informasi"
                name="id_pemberi_informasi"
                innerRef={register()}
              >
                <option value="" disabled={true}>--</option>
                {
                  doctors && doctors.map((item: any, key: number) => {
                    return <option value={item.ID_Karyawan} key={key}>{ item.Nama }</option>;
                  })
                }
              </Input>
            </Col>
          </FormGroup>
          <FormGroup className="form-group align-items-center mt-1" row>
            <Col md='2'>
              <Label>Penerima Informasi*</Label>
            </Col>
            <Col sm='2'>
              <Input
                type="radio"
                className="me-1"
                name="penerima_informasi"
                onChange={(e) => handleWaliName(e)}
                defaultChecked={data?.form?.Penerima_Informasi === 'Pasien'}
                value='1'
                innerRef={register({ required: false })}
              />
              <Label>Pasien</Label>
            </Col>
            <Col sm='2'>
              <Input
                type="radio"
                className="me-1"
                name="penerima_informasi"
                onChange={(e) => handleWaliName(e)}
                defaultChecked={data?.form?.Penerima_Informasi === 'Wali'}
                value='2'
                innerRef={register({ required: false })}
              />
              <Label>Wali</Label>
            </Col>
            {
              waliName && (
                <Col sm='3'>
                  <Input
                    type="text"
                    placeholder="Nama Wali"
                    name="nama_wali"
                    innerRef={register({ required: false })}
                  />
                </Col>
              )
            }
          </FormGroup>
        </div>
        <div className="border-dark mt-2 p-1">
          <FormGroup>
            <FormGroup className="form-group align-items-center" row>
              <Row  className="mt-1">
                <Col>
                  <Label>1. Diagnosis (WD && DD)*</Label>
                </Col>
                <Col md='6'>
                  <Label>Pasien Aman Dari Risiko Jatuh Selama Menjalani Perawatan Dirumah Sakit</Label>
                </Col>
                <Col>
                  <Input
                    id="diagnosis_check"
                    type="checkbox"
                    name="diagnosis_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Diagnosis_Check === '1'}
                    innerRef={register('diagnosis_check')as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col md='2'>
                  <Label>2.Dasar Diagnosis</Label>
                </Col>
                <Col md='2'>
                  <Label style={{marginLeft:'48%'}}>Klinis</Label>
                </Col>
                <Col md='2'>
                  <Input
                    id='dasar_klinis'
                    name="dasar_klinis"
                    type="text"
                    innerRef={register() as any}
                    style={{width:'400px'}}
                  />
                </Col>
                <Col></Col>
              </Row>
              <Row className="mt-1">
                <Col md='2'></Col>
                <Col md='2'>
                  <Label style={{marginLeft:'48%'}}>Radiologi</Label>
                </Col>
                <Col md='5'>
                  <Input
                    id='dasar_radiologi'
                    name="dasar_radiologi"
                    type="text"
                    innerRef={register() as any}
                    style={{width:'400px'}}
                  />
                </Col>
                <Col>
                  <Input
                    id="dasar_diagnosis_check"
                    name="dasar_diagnosis_check"
                    type="checkbox"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Dasar_Diagnosis_Check === '1'}
                    innerRef={register('dasar_diagnosis_check') as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col md='2'></Col>
                <Col md='2'>
                  <Label style={{marginLeft:'48%'}}>EKG</Label>
                </Col>
                <Col md='2'>
                  <Input
                    id='dasar_ekg'
                    name="dasar_ekg"
                    type="text"
                    innerRef={register() as any}
                    style={{width:'400px'}}
                  />
                </Col>
                <Col></Col>
              </Row>
              <Row className="mt-1">
                <Col md='2'></Col>
                <Col md='2'>
                  <Label style={{marginLeft:'48%'}}>Laboratorium</Label>
                </Col>
                <Col md='2'>
                  <Input
                    id='dasar_laboratorium'
                    name="dasar_laboratorium"
                    type="text"
                    innerRef={register() as any}
                    style={{width:'400px'}}
                  />
                </Col>
                <Col></Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <Label>3. Tindakan Kedokteran</Label>
                </Col>
                <Col>
                  <Label>Anestesi / Pembiusan</Label>
                </Col>
                <Col></Col>
                <Col></Col>
              </Row>
              <Row className="mt-1">
                <Col style={{marginLeft:'12%'}}>
                  <Label>Umum :</Label>
                </Col>
                <Col >
                  <Input
                    id="anestesi_umum_intubasi_check"
                    type="checkbox"
                    name="anestesi_umum_intubasi_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Anestesi_Umum_Intubasi_Check === '1'}
                    innerRef={register('anestesi_umum_intubasi_check') as any}
                  />
                  <Label>Intubasi</Label>
                </Col>
                <Col >
                  <Input
                    id="anestesi_umum_lma_check"
                    type="checkbox"
                    name="anestesi_umum_lma_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Anestesi_Umum_LMA_Check === '1'}
                    innerRef={register('anestesi_umum_lma_check') as any}
                  />
                  <Label>LMA</Label>
                </Col>
                <Col >
                  <Input
                    id="anestesi_umum_fm_check"
                    type="checkbox"
                    name="anestesi_umum_fm_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Anestesi_Umum_FM_Check === '1'}
                    innerRef={register('anestesi_umum_fm_check') as any}
                  />
                  <Label>FM</Label>
                </Col>
                <Col >
                  <Input
                    id="anestesi_umum_tiva_check"
                    type="checkbox"
                    name="anestesi_umum_tiva_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Anestesi_Umum_TIVA_Check === '1'}
                    innerRef={register('anestesi_umum_tiva_check') as any}
                  />
                  <Label>TIVA</Label>
                </Col>
                <Col></Col>
                <Col></Col>
              </Row>
              <Row className="mt-1">
                <Col style={{marginLeft:'12%'}}>
                  <Label>Regional :</Label>
                </Col>
                <Col >
                  <Input
                    id="anestesi_regional_spinal_check"
                    type="checkbox"
                    name="anestesi_regional_spinal_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Anestesi_Regional_Spinal_Check === '1'}
                    innerRef={register('anestesi_regional_spinal_check') as any}
                  />
                  <Label>Spinal</Label>
                </Col>
                <Col >
                  <Input
                    id="anestesi_regional_epidural_check"
                    type="checkbox"
                    name="anestesi_regional_epidural_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Anestesi_Regional_Epidural_Check === '1'}
                    innerRef={register('anestesi_regional_epidural_check') as any}
                  />
                  <Label>Epidural</Label>
                </Col>
                <Col >
                  <Input
                    id="anestesi_regional_perifer_check"
                    type="checkbox"
                    name="anestesi_regional_perifer_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Anestesi_Regional_Perifer_Check === '1'}
                    innerRef={register('anestesi_regional_perifer_check') as any}
                  />
                  <Label>Blok Perifer</Label>
                </Col>
                <Col></Col>
                <Col></Col>
              </Row>
              <Row>
                <Col></Col>
                <Col md='3' style={{marginTop:'-50px'}}>
                  <Input
                    id="tindakan_kedokteran_check"
                    type="checkbox"
                    name="tindakan_kedokteran_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Tindakan_Kedokteran_Check === '1'}
                    innerRef={register('tindakan_kedokteran_check') as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row  className="mt-2">
                <Col>
                  <Label>4. Indikasi Tindakan & Tujuan</Label>
                </Col>
                <Col md='6'>
                  <Label>Memfasilitasi Operasi, Menghilangkan Rasa Sakit Saat Operasi</Label>
                </Col>
                <Col>
                  <Input
                    id="indikasi_tindakan_tujuan_check"
                    type="checkbox"
                    name="indikasi_tindakan_tujuan_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Indikasi_Tindakan_Tujuan_Check === '1'}
                    innerRef={register('indikasi_tindakan_tujuan_check')as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row  className="mt-2">
                <Col>
                  <Label>5. Tata Cara Tindakan</Label>
                </Col>
                <Col md='6'>
                  <Input
                    id="tata_cara_tindakan"
                    name="tata_cara_tindakan"
                    type="text"
                    innerRef={register()}
                  />
                </Col>
                <Col>
                  <Input
                    id="tata_cara_tindakan_check"
                    type="checkbox"
                    name="tata_cara_tindakan_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Tata_Cara_Tindakan_Check === '1'}
                    innerRef={register('tata_cara_tindakan_check')as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row  className="mt-2">
                <Col>
                  <Label>6. Risiko</Label>
                </Col>
                <Col>
                  <Input
                    id="shock_check"
                    type="checkbox"
                    name="shock_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Shock_Check === '1'}
                    innerRef={register('shock_check')as any}
                  />
                  <Label>Shock</Label>
                </Col>
                <Col>
                  <Input
                    id="henti_jantung_check"
                    type="checkbox"
                    name="henti_jantung_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Henti_Jantung_Check === '1'}
                    innerRef={register('henti_jantung_check')as any}
                  />
                  <Label>Henti</Label>
                </Col>
                <Col></Col>
              </Row>
              <Row  className="mt-1">
                <Col></Col>
                <Col md='6'>
                  <Input
                    id="meninggal_check"
                    type="checkbox"
                    name="meninggal_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Meninggal_Check === '1'}
                    innerRef={register('meninggal_check')as any}
                  />
                  <Label>Jantung Meninggal Dunia DiMeja Operasi</Label>
                </Col>
                <Col style={{marginTop:'-30px'}}>
                  <Input
                    id="risiko_check"
                    type="checkbox"
                    name="risiko_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Risiko_Check === '1'}
                    innerRef={register('risiko_check')as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row  className="mt-2">
                <Col>
                  <Label>7. Tujuan</Label>
                </Col>
                <Col md='6'>
                  <Input
                    id="tujuan"
                    name="tujuan"
                    type="text"
                    innerRef={register()}
                  />
                </Col>
                <Col>
                  <Input
                    id="tujuan_check"
                    type="checkbox"
                    name="tujuan_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Tujuan_Check === '1'}
                    innerRef={register('tujuan_check')as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row  className="mt-1">
                <Col>
                  <Label>8. Komplikasi</Label>
                </Col>
                <Col md='6'>
                  <Input
                    id="komplikasi_umum_1"
                    type="checkbox"
                    name="komplikasi_umum_1"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komplikasi_Umum_1 === '1'}
                    innerRef={register('komplikasi_umum_1')as any}
                  />
                  <Label style={{width:'93%'}}>Sistem Pernafasan : Kejang Dan Penyempitan Jalan Nafas, Kekurangan Kadar O2 Dalam Darah, Kekurangan Atau Kelebihan Co2 Dalam Darah, Aspirasi Pneumenia / Masuknya Isi Lambung Kedalam Saluran Nafas / Paru. </Label>
                </Col>
                <Col>
                  <Input
                    id="komplikasi_check"
                    type="checkbox"
                    name="komplikasi_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komplikasi_Check === '1'}
                    innerRef={register('komplikasi_check')as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col></Col>
                <Col md='6'>
                  <Input
                    id="komplikasi_umum_2"
                    type="checkbox"
                    name="komplikasi_umum_2"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komplikasi_Umum_2 === '1'}
                    innerRef={register('komplikasi_umum_2')as any}
                  />
                  <Label style={{width:'93%'}}>Jantung dan pembuluh darah : tekanan darah turun, tekanan darah naik, gangguan irama jantung sampai henti jantung.</Label>
                </Col>
                <Col></Col>
              </Row>
              <Row className="mt-1">
                <Col></Col>
                <Col md='6'>
                  <Input
                    id="komplikasi_umum_3"
                    type="checkbox"
                    name="komplikasi_umum_3"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komplikasi_Umum_3 === '1'}
                    innerRef={register('komplikasi_umum_3')as any}
                  />
                  <Label style={{width:'93%'}}>Sistem saraf : kejang, bangun lambat, trauma saraf tepi.</Label>
                </Col>
                <Col></Col>
              </Row>
              <Row className="mt-1">
                <Col></Col>
                <Col md='6'>
                  <Input
                    id="komplikasi_umum_4"
                    type="checkbox"
                    name="komplikasi_umum_4"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komplikasi_Umum_4 === '1'}
                    innerRef={register('komplikasi_umum_4')as any}
                  />
                  <Label style={{width:'93%'}}>Tindakan laringoskopi intubasi (gigi patah, luka mulut, pendarahan).</Label>
                </Col>
                <Col></Col>
              </Row>
              <Row className="mt-1">
                <Col></Col>
                <Col md='6'>
                  <Input
                    id="komplikasi_umum_5"
                    type="checkbox"
                    name="komplikasi_umum_5"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komplikasi_Umum_5 === '1'}
                    innerRef={register('komplikasi_umum_5')as any}
                  />
                  <Label style={{width:'93%'}}>Suhu tubuh naik/turun</Label>
                  <Input
                    id="komplikasi_umum_6"
                    type="checkbox"
                    name="komplikasi_umum_6"
                    className="me-1 mt-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komplikasi_Umum_6 === '1'}
                    innerRef={register('komplikasi_umum_6')as any}
                  />
                  <Label style={{width:'93%'}} className='mt-1'>Efek merugikan obat dan alergi (syok anafiatik sampai meninggal dunia)</Label>
                  <Input
                    id="komplikasi_umum_7"
                    type="checkbox"
                    name="komplikasi_umum_7"
                    className="me-1 mt-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komplikasi_Umum_7 === '1'}
                    innerRef={register('komplikasi_umum_7')as any}
                  />
                  <Label style={{width:'93%'}} className='mt-1'>Cedera akibat posisi saat operasi.</Label>
                  <Input
                    id="komplikasi_umum_8"
                    type="checkbox"
                    name="komplikasi_umum_8"
                    className="me-1 mt-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komplikasi_Umum_8 === '1'}
                    innerRef={register('komplikasi_umum_8')as any}
                  />
                  <Label style={{width:'93%'}} className='mt-1'>Muntah</Label>
                  <Input
                    id="komplikasi_umum_9"
                    type="checkbox"
                    name="komplikasi_umum_9"
                    className="me-1 mt-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komplikasi_Umum_9 === '1'}
                    innerRef={register('komplikasi_umum_9')as any}
                  />
                  <Label style={{width:'93%'}} className='mt-1'>Perut Kembung.</Label>
                  <Input
                    id="komplikasi_umum_10"
                    type="checkbox"
                    name="komplikasi_umum_10"
                    className="me-1 mt-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komplikasi_Umum_10 === '1'}
                    innerRef={register('komplikasi_umum_10')as any}
                  />
                  <Label style={{width:'93%'}} className='mt-1'>Tenggorokan Serat.</Label>
                </Col>
                <Col></Col>
              </Row>
              <Row  className="mt-1">
                <Col></Col>
                <Col md='6'>
                  <b>2. Anestesi Regional: Spinal / Epidural</b>
                </Col>
                <Col style={{marginTop:'-30px'}}></Col>
              </Row>
              <Row  className="mt-2">
                <Col></Col>
                <Col>
                  <Input
                    id="komplikasi_regional_1"
                    type="checkbox"
                    name="komplikasi_regional_1"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komplikasi_Regional_1 === '1'}
                    innerRef={register('komplikasi_regional_1')as any}
                  />
                  <Label>Komplikasi Segera</Label>
                </Col>
                <Col>
                  <Input
                    id="komplikasi_regional_2"
                    type="checkbox"
                    name="komplikasi_regional_2"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komplikasi_Regional_2 === '1'}
                    innerRef={register('komplikasi_regional_2')as any}
                  />
                  <Label>Penurunan Tekanan Darah</Label>
                </Col>
                <Col></Col>
              </Row>
              <Row  className="mt-1">
                <Col></Col>
                <Col md='6'>
                  <Input
                    id="komplikasi_regional_3"
                    type="checkbox"
                    name="komplikasi_regional_3"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komplikasi_Regional_3 === '1'}
                    innerRef={register('komplikasi_regional_3')as any}
                  />
                  <Label style={{width:'93%'}}>Anestesi spinal total (penurunan kesadaran, penurunan denyut jantung, nafas berhenti)</Label>
                </Col>
                <Col style={{marginTop:'-30px'}}></Col>
              </Row>
              <Row  className="mt-1">
                <Col></Col>
                <Col md='6'>
                  <Input
                    id="komplikasi_regional_4"
                    type="checkbox"
                    name="komplikasi_regional_4"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komplikasi_Regional_4 === '1'}
                    innerRef={register('komplikasi_regional_4')as any}
                  />
                  <Label style={{width:'93%'}}>Reaksi toksik (kejang, henti jantung)</Label>
                </Col>
                <Col style={{marginTop:'-30px'}}></Col>
              </Row>
              <Row  className="mt-1">
                <Col></Col>
                <Col md='6'>
                  <Input
                    id="komplikasi_regional_5"
                    type="checkbox"
                    name="komplikasi_regional_5"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komplikasi_Regional_5 === '1'}
                    innerRef={register('komplikasi_regional_5')as any}
                  />
                  <Label style={{width:'93%'}}>Reaksi alergi (syok anafilatik sampai meninggal)</Label>
                </Col>
                <Col style={{marginTop:'-30px'}}></Col>
              </Row>
              <Row  className="mt-2">
                <Col></Col>
                <Col>
                  <Input
                    id="komplikasi_regional_6"
                    type="checkbox"
                    name="komplikasi_regional_6"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komplikasi_Regional_6 === '1'}
                    innerRef={register('komplikasi_regional_6')as any}
                  />
                  <Label>Komplikasi Lanjutan</Label>
                </Col>
                <Col>
                  <Input
                    id="komplikasi_regional_7"
                    type="checkbox"
                    name="komplikasi_regional_7"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komplikasi_Regional_7 === '1'}
                    innerRef={register('komplikasi_regional_7')as any}
                  />
                  <Label>Nyeri Kepala Cekot-Cekot</Label>
                </Col>
                <Col></Col>
              </Row>
              <Row  className="mt-2">
                <Col></Col>
                <Col>
                  <Input
                    id="komplikasi_regional_8"
                    type="checkbox"
                    name="komplikasi_regional_8"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komplikasi_Regional_8 === '1'}
                    innerRef={register('komplikasi_regional_8')as any}
                  />
                  <Label>Nyeri Punggung</Label>
                </Col>
                <Col>
                  <Input
                    id="komplikasi_regional_9"
                    type="checkbox"
                    name="komplikasi_regional_9"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komplikasi_Regional_9 === '1'}
                    innerRef={register('komplikasi_regional_9')as any}
                  />
                  <Label>Infeksi</Label>
                </Col>
                <Col></Col>
              </Row>
              <Row  className="mt-2">
                <Col></Col>
                <Col>
                  <Input
                    id="komplikasi_regional_10"
                    type="checkbox"
                    name="komplikasi_regional_10"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komplikasi_Regional_10 === '1'}
                    innerRef={register('komplikasi_regional_10')as any}
                  />
                  <Label>Tidak Bisa Berkemih</Label>
                </Col>
                <Col>
                  <Input
                    id="komplikasi_regional_11"
                    type="checkbox"
                    name="komplikasi_regional_11"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komplikasi_Regional_11 === '1'}
                    innerRef={register('komplikasi_regional_11')as any}
                  />
                  <Label>Cedera Saraf</Label>
                </Col>
                <Col></Col>
              </Row>
              <Row  className="mt-1">
                <Col></Col>
                <Col md='6'>
                  <Input
                    id="komplikasi_regional_12"
                    type="checkbox"
                    name="komplikasi_regional_12"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Komplikasi_Regional_12 === '1'}
                    innerRef={register('komplikasi_regional_12')as any}
                  />
                  <Label style={{width:'93%'}}>Pendarahan</Label>
                </Col>
                <Col></Col>
              </Row>
              <Row  className="mt-2">
                <Col>
                  <Label>9. Prognosis </Label>
                </Col>
                <Col md='6'>
                  <Input
                    id="prognosis"
                    name="prognosis"
                    type="text"
                    innerRef={register()}
                  />
                </Col>
                <Col>
                  <Input
                    id="prognosis_check"
                    type="checkbox"
                    name="prognosis_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Prognosis_Check === '1'}
                    innerRef={register('prognosis_check')as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row  className="mt-2">
                <Col>
                  <Label>10. Alternatif Tindakan</Label>
                </Col>
                <Col md='6'>
                  <Input
                    id="alternatif_tindakan"
                    name="alternatif_tindakan"
                    type="text"
                    innerRef={register()}
                  />
                </Col>
                <Col>
                  <Input
                    id="alternatif_tindakan_check"
                    type="checkbox"
                    name="alternatif_tindakan_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Alternatif_Tindakan_Check === '1'}
                    innerRef={register('alternatif_tindakan_check')as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
              <Row  className="mt-2">
                <Col>
                  <Label>11. Lain-Lain</Label>
                </Col>
                <Col md='6'>
                  <Input
                    id="lain_lain"
                    name="lain_lain"
                    type="text"
                    innerRef={register()}
                  />
                </Col>
                <Col>
                  <Input
                    id="lain_lain_check"
                    type="checkbox"
                    name="lain_lain_check"
                    className="me-1"
                    onChange={(e) => handleCheckboxChange(e)}
                    value='1'
                    defaultChecked={data && data.form && data.form.Lain_Lain_Check === '1'}
                    innerRef={register('lain_lain_check')as any}
                  />
                  <Label>Tandai</Label>
                </Col>
              </Row>
            </FormGroup>
          </FormGroup>
          <FormGroup className="form-group align-items-center mt-2" row>
            <Col>
              <div className="d-flex justify-content-around my-0">
                <Signature
                  label="Pasien"
                  type="drawer"
                  formName='rawat-jalan/pemberian-informasi'
                  component='ttd_pasien'
                  initialImage={(data.form && data.form.TTD_Penerima_Informasi && data.form.TTD_Penerima_Informasi !== '' && !data.form.TTD_Penerima_Informasi.includes('null')) ? data.form.TTD_Penerima_Informasi : undefined}
                  onSigned={(image: string) => handlePatientSigned(image)}
                />
                <Input
                  type="hidden"
                  name="ttd_penerima_informasi"
                  innerRef={register()}
                />
              </div>
            </Col>
            <Col>
              <div className="d-flex justify-content-around my-0">
                <Signature
                  label="Dokter Pelaksana"
                  additionalLabel={(data.form?.Nama_Dokter_Pelaksana_TTD && data.form.Nama_Dokter_Pelaksana_TTD !== '') ? data.form.Nama_Dokter_Pelaksana_TTD : undefined}
                  type="picker"
                  initialImage={(data && data.form && data.form.TTD_Dokter_Pelaksana && data.form.TTD_Dokter_Pelaksana !== '' && !data.form.TTD_Dokter_Pelaksana.includes('null')) ? data.form.TTD_Dokter_Pelaksana : undefined}
                  defaultPerson={(userData && userData.id) ? userData.id : ''}
                  persons={doctors}
                  unit="dokter"
                  onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                    if (isFormDoctor) {
                      handleOfficerSigned(assigner, isFormDoctor)
                    }
                    if (!isFormDoctor) {
                      handleOfficerSigned(assigner)
                    }
                  }}
                />
                <Input
                  type="hidden"
                  name="ttd_dokter_pelaksana"
                  innerRef={register()}
                />
                <Input
                  type="hidden"
                  name="id_dokter_pelaksana_ttd"
                  innerRef={register()}
                />
              </div>
            </Col>
          </FormGroup>
        </div>
      </TabPane>
    </TabContent>
  )
}

export default ProvisionOfInformationTabInPatient;
