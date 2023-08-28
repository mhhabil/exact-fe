import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { ChecklistPraOperasiModel } from '../models/checklist-pra-operasi-models';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useEffect, useState } from 'react';


const InformConsentBedah = (props: { data: ChecklistPraOperasiModel, setValue:any, initialImage?: string, register: any, errors: any, defaultPattern: string | undefined }) => {
  const { data, setValue, register, errors, initialImage, defaultPattern } = props;

  const [alergi, setAlergi] = useState<string | undefined>((data && data.form && data.form.Alergi) ? data.form.Alergi : undefined)
  const [puasa, setPuasa] = useState<string | undefined>((data && data.form && data.form.Puasa) ? data.form.Puasa : undefined)
  const [anestesi, setAnestesi] = useState<string | undefined>((data && data.form && data.form.Anestesi) ? data.form.Anestesi : undefined)
  const [informConsentBedah, setInformConsentBedah] = useState<any>(`${data?.form?.Inform_Consent_Bedah}`);
  const [informConsentAnestesi, setInformConsentAnestesi] = useState<string | undefined>(`${data?.form?.Inform_Consent}`);
  const [hamil, setHamil] = useState<any>(`${data?.form?.Hamil}`);
  const [izinSterilisasi, setIzinSterilisasi] = useState<any>(`${data?.form?.Izin_Sterilisasi}`);
  const [gelangPengenal, setGelangPengenal] = useState<any>(`${data?.form?.Gelang_Pengenal}`);
  const [gelangAlergi, setGelangAlergi] = useState<any>(`${data?.form?.Gelang_Alergi}`);
  const [ekg, setEkg] = useState<any>(`${data?.form?.Ekg}`);
  const [radiologi, setRadiologi] = useState<any>(`${data?.form?.Radiologi}`);
  const [jenisPasien, setJenisPasien] = useState<any>(`${data?.form?.Jenis_Pasien}`);
  const [preMedikasi, setPreMedikasi] = useState<any>(`${data?.form?.Pre_Medikasi}`);
  const [gigiPalsu, setGigiPalsu] = useState<any>(`${data?.form?.Gigi_Palsu}`);
  const [kacamata, setKacamata] = useState<any>(`${data?.form?.Lensa}`);
  const [perhiasan, setPerhiasan] = useState<any>(`${data?.form?.Perhiasan}`);
  const [rambut, setRambut] = useState<any>(`${data?.form?.Rambut}`);
  const [kosmetik, setKosmetik] = useState<any>(`${data?.form?.Kosmetik}`);
  const [kandungKemih, setKandungKemih] = useState<any>(`${data?.form?.Kandung_Kemih}`);
  const [gliserin, setGliserin] = useState<any>(`${data?.form?.Gliserin}`);
  const [lokasi, setLokasi] = useState<any>(`${data?.form?.Pembedahan}`);

  const { doctors } = useAppSelector(state => state.doctor);

  useEffect(() => {
    if (data && data.form) {
      setInformConsentBedah(`${data?.form?.Inform_Consent_Bedah}`)
      setInformConsentAnestesi(`${data?.form?.Inform_Consent}`)
      setIzinSterilisasi(`${data?.form?.Izin_Sterilisasi}`)
      setHamil(`${data?.form?.Hamil}`)
      setGelangPengenal(`${data?.form?.Gelang_Pengenal}`)
      setGelangAlergi(`${data?.form?.Gelang_Alergi}`)
      setEkg(`${data?.form?.Ekg}`)
      setRadiologi(`${data?.form?.Radiologi}`)
      setJenisPasien(`${data?.form?.Jenis_Pasien}`)
      setPreMedikasi(`${data?.form?.Pre_Medikasi}`)
      setGigiPalsu(`${data?.form?.Gigi_Palsu}`)
      setKacamata(`${data?.form?.Lensa}`)
      setPerhiasan(`${data?.form?.Perhiasan}`)
      setRambut(`${data?.form?.Rambut}`)
      setKosmetik(`${data?.form?.Kosmetik}`)
      setKandungKemih(`${data?.form?.Kandung_Kemih}`)
      setGliserin(`${data?.form?.Gliserin}`)
      setLokasi(`${data?.form?.Pembedahan}`)
    }
  }, [data]);

  useEffect(() => {
    if (defaultPattern === '1') {
      setValue('inform_consent_bedah', '1');
      setInformConsentBedah('1');
      setValue('inform_consent', '2');
      setInformConsentAnestesi('2');
      setValue('hamil', '2');
      setHamil('2');
      setValue('izin_sterilisasi', '2');
      setIzinSterilisasi('2');
      setValue('gelang_pengenal', '1');
      setGelangPengenal('1');
      setValue('gelang_alergi', '2');
      setGelangAlergi('2');
      setValue('ekg', '2');
      setEkg('2');
      setValue('jenis_pasien', '2');
      setJenisPasien('2');
      setValue('radiologi', '2');
      setRadiologi('2');
      setValue('pre_medikasi', '2');
      setPreMedikasi('2');
      setValue('gigi_palsu', '2');
      setGigiPalsu('2');
      setValue('lensa', '2');
      setKacamata('2');
      setValue('perhiasan', '3');
      setPerhiasan('3');
      setValue('rambut', '2');
      setRambut('2')
      setValue('kosmetik', '3');
      setKosmetik('3');
      setValue('kandung_kemih', '2');
      setKandungKemih('2');
      setValue('gliserin', '2');
      setGliserin('2');
      setValue('pembedahan', '1');
      setLokasi('1');
    } else if (defaultPattern === '0') {
      setValue('inform_consent_bedah', undefined);
      setInformConsentBedah(undefined);
      setValue('inform_consent', undefined);
      setInformConsentAnestesi(undefined);
      setValue('hamil', undefined);
      setHamil(undefined);
      setValue('izin_sterilisasi', undefined);
      setIzinSterilisasi(undefined);
      setValue('gelang_pengenal', undefined);
      setGelangPengenal(undefined);
      setValue('gelang_alergi', undefined);
      setGelangAlergi(undefined);
      setValue('ekg', undefined);
      setEkg(undefined);
      setValue('jenis_pasien', undefined);
      setJenisPasien(undefined);
      setValue('radiologi', undefined);
      setRadiologi(undefined);
      setValue('pre_medikasi', undefined);
      setPreMedikasi(undefined);
      setValue('gigi_palsu', undefined);
      setGigiPalsu(undefined);
      setValue('lensa', undefined);
      setKacamata(undefined);
      setValue('perhiasan', undefined);
      setPerhiasan(undefined);
      setValue('rambut', undefined);
      setRambut(undefined);
      setValue('kosmetik', undefined);
      setKosmetik(undefined);
      setValue('kandung_kemih', undefined);
      setKandungKemih(undefined);
      setValue('gliserin', undefined);
      setGliserin(undefined);
      setValue('pembedahan', undefined);
      setLokasi(undefined);
    }
  }, [defaultPattern])

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleChangeAlergi = (e: any) => {
    if (e.target.value === '2') {
      setValue('alergi_keterangan', '');
    }
    setAlergi(e.target.value)
    setValue('alergi', e.target.value)
  }

  const handleChangePuasa = (e: any) => {
    if (e.target.value === '2') {
      setValue('puasa_keterangan', '');
    }
    setPuasa(e.target.value)
    setValue('puasa', e.target.value)
  }

  const handleChangeAnestesi = (e: any) => {
    // if (e.target.value === '2') {
    //   setValue('dokter_id', '');
    // }
    setAnestesi(e.target.value)
    setValue('anestesi', e.target.value)
  }

  useEffect(() => {
    if (data) {
      setValue('dokter_id', data?.form?.Dokter_Anestesi_Id)
    }
  }, [data])

  return (
    <FormGroup>
      <FormGroup className="form-group" row>
        <Row md="8">
          <Col>
            <Label style={{marginTop:'5px'}}>BB</Label>
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
          <Col>
            <Label style={{marginTop:'5px'}}>TD</Label>
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
          <Col>
            <Label style={{marginTop:'5px'}}>RR</Label>
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
            <Label style={{marginTop:'5px'}}>Sat O2</Label>
          </Col>
          <Col>
            <Input
              id="sat"
              type="text"
              name="sat"
              style={{marginLeft:'-40px', width:'140px'}}
              innerRef={register() as any}
            />
          </Col>
        </Row>

        <Row md="8">
          <Col>
            <Label className='mt-2'>TB</Label>
          </Col>
          <Col>
            <Input
              id="tb"
              type="text"
              name="tb"
              className='mt-1'
              style={{marginLeft:'-60px', width:'150px'}}
              innerRef={register() as any}
            />
          </Col>
          <Col>
            <Label className='mt-2'>HR</Label>
          </Col>
          <Col>
            <Input
              id="nadi"
              type="text"
              name="nadi"
              className='mt-1'
              style={{marginLeft:'-60px', width:'150px'}}
              innerRef={register() as any}
            />
          </Col>
          <Col>
            <Label className='mt-2'>T</Label>
          </Col>
          <Col>
            <Input
              id="t"
              type="text"
              name="t"
              className='mt-1'
              style={{marginLeft:'-60px', width:'150px'}}
              innerRef={register() as any}
            />
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </FormGroup>
      <FormGroup className="form-group" row>
        <Row className="my-2">
          <Col md="6" sm="12">
            <Row>
              <Col md='5'>
                <Label>1. Inform Consent Bedah</Label>
              </Col>
              <Col>
                <Input
                  type="radio"
                  name="inform_consent_bedah"
                  className='me-1'
                  value='1'
                  onChange={(e) => {
                    handleRadioChange(e);
                    setInformConsentBedah('1');
                  }}
                  checked={informConsentBedah === '1'}
                  innerRef={register("inform_consent_bedah")}
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col>
                <Input
                  type="radio"
                  name="inform_consent_bedah"
                  className='me-1'
                  value='2'
                  onChange={(e) => {
                    handleRadioChange(e);
                    setInformConsentBedah('2');
                  }}
                  checked={informConsentBedah === '2'}
                  innerRef={register("inform_consent_bedah")}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>2. Inform Consent Anestesi</Label>
              </Col>
              <Col>
                <Input
                  id="inform_consent_1"
                  type="radio"
                  name="inform_consent"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setInformConsentAnestesi('1');
                  }}
                  checked={informConsentAnestesi === '1'}
                  innerRef={register("inform_consent")}
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col>
                <Input
                  id="inform_consent_2"
                  type="radio"
                  name="inform_consent"
                  className="me-1"
                  value="2"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setInformConsentAnestesi('2');
                  }}
                  checked={informConsentAnestesi === '2'}
                  innerRef={register("inform_consent")}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>3. Hamil</Label>
              </Col>
              <Col>
                <Input
                  id="hamil_1"
                  type="radio"
                  name="hamil"
                  className="me-1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setHamil('1');
                  }}
                  value="1"
                  checked={hamil === '1'}
                  innerRef={register("hamil")}
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col>
                <Input
                  id="hamil_2"
                  type="radio"
                  name="hamil"
                  className="me-1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setHamil('2');
                  }}
                  value="2"
                  checked={hamil === '2'}
                  innerRef={register("hamil")}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>4. Izin Sterilisasi</Label>
              </Col>
              <Col>
                <Input
                  id="izin_sterilisasi_1"
                  type="radio"
                  name="izin_sterilisasi"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setIzinSterilisasi('1');
                  }}
                  checked={izinSterilisasi === '1'}
                  innerRef={register('izin_sterilisasi')}
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col>
                <Input
                  id="izin_sterilisasi_2"
                  type="radio"
                  name="izin_sterilisasi"
                  className="me-1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setIzinSterilisasi('2');
                  }}
                  value="2"
                  checked={(izinSterilisasi === '2')}
                  innerRef={register('izin_sterilisasi')}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>5. Gelang Pengenal</Label>
              </Col>
              <Col>
                <Input
                  id="gelang_pengenal_1"
                  type="radio"
                  name="gelang_pengenal"
                  className="me-1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setGelangPengenal('1');
                  }}
                  value="1"
                  checked={gelangPengenal === '1'}
                  innerRef={register("gelang_pengenal")}
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col>
                <Input
                  id="gelang_pengenal_2"
                  type="radio"
                  name="gelang_pengenal"
                  className="me-1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setGelangPengenal('2');
                  }}
                  value="2"
                  checked={gelangPengenal === '2'}
                  innerRef={register("gelang_pengenal")}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>6. Gelang Alergi</Label>
              </Col>
              <Col>
                <Input
                  id="gelang_alergi_1"
                  type="radio"
                  name="gelang_alergi"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setGelangAlergi('1');
                  }}
                  checked={gelangAlergi === '1'}
                  innerRef={register("gelang_alergi") as any}
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col>
                <Input
                  id="gelang_alergi_2"
                  type="radio"
                  name="gelang_alergi"
                  className="me-1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setGelangAlergi('2');
                  }}
                  value="2"
                  checked={gelangAlergi === '2'}
                  innerRef={register('gelang_alergi')}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>7. Implant</Label>
              </Col>
              <Col>
                <Input
                  id="implant_1"
                  type="radio"
                  name="implant"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.form && data.form.Implant === '1'}
                  innerRef={register("implant") as any}
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col>
                <Input
                  id="implant_2"
                  type="radio"
                  name="implant"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.form && data.form.Implant === '2'}
                  innerRef={register("implant") as any}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>8. EKG</Label>
              </Col>
              <Col>
                <Input
                  id="ekg_1"
                  type="radio"
                  name="ekg"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setEkg('1');
                  }}
                  checked={ekg === '1'}
                  innerRef={register("ekg")}
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col>
                <Input
                  id="ekg_2"
                  type="radio"
                  name="ekg"
                  className="me-1"
                  value="2"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setEkg('2');
                  }}
                  checked={ekg === '2'}
                  innerRef={register("ekg")}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>9. Foto Fundus</Label>
              </Col>
              <Col>
                <Input
                  id="foto_fundus_1"
                  type="radio"
                  name="foto_fundus"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.form && data.form.Foto_Fundus === '1'}
                  innerRef={register("foto_fundus") as any}
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col>
                <Input
                  id="foto_fundus_2"
                  type="radio"
                  name="foto_fundus"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.form && data.form.Foto_Fundus === '2'}
                  innerRef={register("foto_fundus") as any}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>10. USG Mata</Label>
              </Col>
              <Col>
                <Input
                  id="usg_mata_1"
                  type="radio"
                  name="usg_mata"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.form && data.form.Usg_Mata === '1'}
                  innerRef={register("usg_mata") as any}
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col>
                <Input
                  id="usg_mata_2"
                  type="radio"
                  name="usg_mata"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.form && data.form.Usg_Mata === '2'}
                  innerRef={register("usg_mata") as any}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>11. Biometri</Label>
              </Col>
              <Col>
                <Input
                  id="biometri_1"
                  type="radio"
                  name="biometri"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.form && data.form.Biometri === '1'}
                  innerRef={register("biometri") as any}
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col>
                <Input
                  id="biometri_2"
                  type="radio"
                  name="biometri"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.form  && data.form.Biometri === '2'}
                  innerRef={register("biometri") as any}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>12. OCT Makula / OCT Papil</Label>
              </Col>
              <Col>
                <Input
                  id="makula_1"
                  type="radio"
                  name="makula"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.form && data.form.Makula === '1'}
                  innerRef={register("makula") as any}
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col>
                <Input
                  id="makula_2"
                  type="radio"
                  name="makula"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.form && data.form.Makula === '2'}
                  innerRef={register("makula") as any}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>13. Laboratorium</Label>
              </Col>
              <Col>
                <Input
                  id="laboratorium_1"
                  type="radio"
                  name="laboratorium"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.form  && data.form.Laboratorium === '1'}
                  innerRef={register("laboratorium") as any}
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col>
                <Input
                  id="laboratorium_2"
                  type="radio"
                  name="laboratorium"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.form && data.form.Laboratorium === '2'}
                  innerRef={register("laboratorium") as any}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>14. Radiologi</Label>
              </Col>
              <Col>
                <Input
                  id="radiologi_1"
                  type="radio"
                  name="radiologi"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setRadiologi('1');
                  }}
                  checked={radiologi === '1'}
                  innerRef={register('radiologi')}
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col>
                <Input
                  id="radiologi_2"
                  type="radio"
                  name="radiologi"
                  className="me-1"
                  value="2"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setRadiologi('2');
                  }}
                  checked={radiologi === '2'}
                  innerRef={register('radiologi')}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>15. Resiko Jatuh</Label>
              </Col>
              <Col>
                <Input
                  id="resiko_jatuh_1"
                  type="radio"
                  name="resiko_jatuh"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.form && data.form.Resiko_Jatuh === '1'}
                  innerRef={register("resiko_jatuh") as any}
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col>
                <Input
                  id="resiko_jatuh_2"
                  type="radio"
                  name="resiko_jatuh"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleRadioChange(e)}
                  defaultChecked={data && data.form && data.form.Resiko_Jatuh === '2'}
                  innerRef={register("resiko_jatuh") as any}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
          </Col>

          {/* sampingnya  */}
          <Col md="6" sm="12">
            <Row>
              <Col md='4'>
                <Label>16. Jenis Pasien</Label>
              </Col>
              <Col md='4' style={{marginLeft:'51px'}}>
                <Input
                  id="jenis_pasien_1"
                  type="radio"
                  name="jenis_pasien"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setJenisPasien('1');
                  }}
                  checked={jenisPasien === '1'}
                  innerRef={register('jenis_pasien')}
                />{' '}
                <Label>Pasien Cito</Label>
              </Col>
              <Col md='3' style={{marginLeft:'-20px'}}>
                <Input
                  id="jenis_pasien_2"
                  type="radio"
                  name="jenis_pasien"
                  className="me-1"
                  value="2"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setJenisPasien('2');
                  }}
                  checked={jenisPasien === '2'}
                  innerRef={register('jenis_pasien')}
                />{' '}
                <Label>Pasien Elektif</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>17. Puasa</Label>
              </Col>
              <Col md='5'>
                <Input
                  id="puasa_1"
                  type="radio"
                  name="puasa"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleChangePuasa(e)}
                  defaultChecked={data && data.form && data.form.Puasa === '1'}
                  innerRef={register("puasa") as any}
                />{' '}
                <Label>Ya, sejak jam : </Label>
              </Col>
              <Col md='2'>
                <Input
                  id="puasa_keterangan"
                  type="time"
                  name="puasa_keterangan"
                  defaultValue={(data && data.form && data.form.Puasa_Keterangan) ? data.form.Puasa_Keterangan : ''}
                  style={{marginLeft:'-80px', width:  '150px'}}
                  innerRef={register()}
                  readOnly={(puasa) ? puasa !== '1' : undefined}
                />
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md='5'></Col>
              <Col md='5'>
                <Input
                  id="puasa_2"
                  type="radio"
                  name="puasa"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleChangePuasa(e)}
                  defaultChecked={data && data.form && data.form.Puasa === '2'}
                  innerRef={register("puasa") as any}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>18. Pre-OP dr. Anestesi</Label>
              </Col>
              <Col md='5'>
                <Input
                  id="anestesi_1"
                  type="radio"
                  name="anestesi"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleChangeAnestesi(e)}
                  defaultChecked={data && data.form && data.form.Anestesi === '1'}
                  innerRef={register("anestesi") as any}
                />{' '}
                <Label>Ya, Oleh :   </Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
              <Col>
                <Input
                  type="select"
                  id="dokter_id"
                  name="dokter_id"
                  style={{marginLeft: '-10px'}}
                  innerRef={register()}
                  readOnly={(anestesi) ? anestesi !== '1' : undefined}
                >
                  <option value="" disabled={false}>--</option>
                  {
                    doctors && Array.isArray(doctors) && doctors.map((item: any, key: number) => {
                      return <option value={item.ID_Karyawan} key={key}>{ item.Nama }</option>;
                    })
                  }
                </Input>
              </Col>
            </Row>
            <Row>
              <Col md='5'></Col>
              <Col md='5'>
                <Input
                  id="anestesi_2"
                  type="radio"
                  name="anestesi"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleChangeAnestesi(e)}
                  defaultChecked={data && data.form && data.form.Anestesi === '2'}
                  innerRef={register("anestesi") as any}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>19. Alergi</Label>
              </Col>
              <Col md='5'>
                <Input
                  id="alergi_1"
                  type="radio"
                  name="alergi"
                  className="me-1"
                  value="1"
                  onChange={(e) => handleChangeAlergi(e)}
                  defaultChecked={data && data.form && data.form.Alergi === '1'}
                  innerRef={register("alergi") as any}
                />{' '}
                <Label>Ya,</Label>
              </Col>
              <Col>
                <Input
                  id="alergi_keterangan"
                  type="text"
                  name="alergi_keterangan"
                  style={{marginLeft:'-150px', width:'200px'}}
                  innerRef={register() as any}
                  readOnly={(alergi) ? alergi !== '1' : undefined}
                />
              </Col>
            </Row>
            <Row>
              <Col md='5'></Col>
              <Col md='5'>
                <Input
                  id="alergi_2"
                  type="radio"
                  name="alergi"
                  className="me-1"
                  value="2"
                  onChange={(e) => handleChangeAlergi(e)}
                  defaultChecked={data && data.form && data.form.Alergi === '2'}
                  innerRef={register("alergi") as any}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>20. Pre-Medikasi</Label>
              </Col>
              <Col md='5'>
                <Input
                  id="pre_medikasi_1"
                  type="radio"
                  name="pre_medikasi"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setPreMedikasi('1');
                  }}
                  checked={preMedikasi === '1'}
                  innerRef={register('pre_medikasi')}
                />{' '}
                <Label>Ya, Lihat daftar obat</Label>
              </Col>
              <Col style={{marginLeft:'-30px'}}>
                <Input
                  id="pre_medikasi_2"
                  type="radio"
                  name="pre_medikasi"
                  className="me-1"
                  value="2"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setPreMedikasi('2');
                  }}
                  checked={preMedikasi === '2'}
                  innerRef={register('pre_medikasi')}
                />{' '}
                <Label>Tidak</Label>
              </Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>21. Gigi Palsu Dilepaskan</Label>
              </Col>
              <Col md='5'>
                <Input
                  id="gigi_palsu_1"
                  type="radio"
                  name="gigi_palsu"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setGigiPalsu('1');
                  }}
                  checked={gigiPalsu === '1'}
                  innerRef={register("gigi_palsu")}
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md='5'></Col>
              <Col md='5'>
                <Input
                  id="gigi_palsu_2"
                  type="radio"
                  name="gigi_palsu"
                  className="me-1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setGigiPalsu('2');
                  }}
                  value="2"
                  checked={gigiPalsu === '2'}
                  innerRef={register("gigi_palsu")}
                />{' '}
                <Label>Tidak Ada</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md='5'></Col>
              <Col md='5'>
                <Input
                  id="gigi_palsu_3"
                  type="radio"
                  name="gigi_palsu"
                  className="me-1"
                  value="3"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setGigiPalsu('3');
                  }}
                  checked={(gigiPalsu === '3')}
                  innerRef={register("gigi_palsu")}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>22. Kacamata / Lensa Kontak Dilepaskan</Label>
              </Col>
              <Col md='5'>
                <Input
                  id="lensa_1"
                  type="radio"
                  name="lensa"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setKacamata('1');
                  }}
                  checked={kacamata === '1'}
                  innerRef={register("lensa")}
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md='5'></Col>
              <Col md='5'>
                <Input
                  id="lensa_2"
                  type="radio"
                  name="lensa"
                  className="me-1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setKacamata('2');
                  }}
                  value="2"
                  checked={kacamata === '2'}
                  innerRef={register('lensa')}
                />{' '}
                <Label>Tidak Ada</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md='5'></Col>
              <Col md='5'>
                <Input
                  id="lensa_3"
                  type="radio"
                  name="lensa"
                  className="me-1"
                  value="3"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setKacamata('3');
                  }}
                  checked={kacamata === '3'}
                  innerRef={register("lensa")}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>23. Perhiasan Dilepaskan</Label>
              </Col>
              <Col md='5'>
                <Input
                  id="perhiasan_1"
                  type="radio"
                  name="perhiasan"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setPerhiasan('1');
                  }}
                  checked={perhiasan === '1'}
                  innerRef={register("perhiasan")}
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md='5'></Col>
              <Col md='5'>
                <Input
                  id="perhiasan_2"
                  type="radio"
                  name="perhiasan"
                  className="me-1"
                  value="2"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setPerhiasan('2');
                  }}
                  checked={perhiasan === '2'}
                  innerRef={register("perhiasan")}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md='5'></Col>
              <Col md='5'>
                <Input
                  id="perhiasan_3"
                  type="radio"
                  name="perhiasan"
                  className="me-1"
                  value="3"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setPerhiasan('3');
                  }}
                  checked={perhiasan === '3'}
                  innerRef={register('perhiasan')}
                />{' '}
                <Label>Tidak Ada</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>24. Rambut Palsu Dilepaskan</Label>
              </Col>
              <Col md='5'>
                <Input
                  id="rambut_1"
                  type="radio"
                  name="rambut"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setRambut('1');
                  }}
                  checked={rambut === '1'}
                  innerRef={register('rambut')}
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md='5'></Col>
              <Col md='5'>
                <Input
                  id="rambut_2"
                  type="radio"
                  name="rambut"
                  className="me-1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setRambut('2');
                  }}
                  value="2"
                  checked={rambut === '2'}
                  innerRef={register("rambut")}
                />{' '}
                <Label>Tidak Ada</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md='5'></Col>
              <Col md='5'>
                <Input
                  id="rambut_3"
                  type="radio"
                  name="rambut"
                  className="me-1"
                  value="3"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setRambut('3');
                  }}
                  checked={rambut === '3'}
                  innerRef={register('rambut')}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>25. Kosmetik Dihilangkan</Label>
              </Col>
              <Col md='5'>
                <Input
                  id="kosmetik_1"
                  type="radio"
                  name="kosmetik"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setKosmetik('1');
                  }}
                  checked={kosmetik === '1'}
                  innerRef={register("kosmetik")}
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md='5'></Col>
              <Col md='5'>
                <Input
                  id="kosmetik_2"
                  type="radio"
                  name="kosmetik"
                  className="me-1"
                  value="2"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setKosmetik('2');
                  }}
                  checked={kosmetik === '2'}
                  innerRef={register("kosmetik")}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md='5'></Col>
              <Col md='5'>
                <Input
                  id="kosmetik_3"
                  type="radio"
                  name="kosmetik"
                  className="me-1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setKosmetik('3');
                  }}
                  value="3"
                  checked={kosmetik === '3'}
                  innerRef={register("kosmetik")}
                />{' '}
                <Label>Tidak Ada</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>26. Kandung Kemih Dikosongkan</Label>
              </Col>
              <Col md='5'>
                <Input
                  id="kandung_kemih_1"
                  type="radio"
                  name="kandung_kemih"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setKandungKemih('1');
                  }}
                  checked={kandungKemih === '1'}
                  innerRef={register("kandung_kemih")}
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md='5'></Col>
              <Col md='5'>
                <Input
                  id="kandung_kemih_2"
                  type="radio"
                  name="kandung_kemih"
                  className="me-1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setKandungKemih('2');
                  }}
                  value="2"
                  checked={kandungKemih === '2'}
                  innerRef={register("kandung_kemih")}
                />{' '}
                <Label>Tidak Ada</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md='5'></Col>
              <Col md='5'>
                <Input
                  id="kandung_kemih_3"
                  type="radio"
                  name="kandung_kemih"
                  className="me-1"
                  value="3"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setKandungKemih('3');
                  }}
                  checked={kandungKemih === '3'}
                  innerRef={register("kandung_kemih")}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>27. Gliserin Huknah Dilakukan</Label>
              </Col>
              <Col md='5'>
                <Input
                  id="gliserin_1"
                  type="radio"
                  name="gliserin"
                  className="me-1"
                  value="1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setGliserin('1');
                  }}
                  checked={gliserin === '1'}
                  innerRef={register("gliserin")}
                />{' '}
                <Label>Ya</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md='5'></Col>
              <Col md='5'>
                <Input
                  id="gliserin_2"
                  type="radio"
                  name="gliserin"
                  className="me-1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setGliserin('2');
                  }}
                  value="2"
                  checked={gliserin === '2'}
                  innerRef={register("gliserin")}
                />{' '}
                <Label>Tidak Ada</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md='5'></Col>
              <Col md='5'>
                <Input
                  id="gliserin_3"
                  type="radio"
                  name="gliserin"
                  className="me-1"
                  value="3"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setGliserin('3');
                  }}
                  checked={gliserin === '3'}
                  innerRef={register("gliserin")}
                />{' '}
                <Label>Tidak</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-1'>
              <Col md='5'>
                <Label>28. Lokasi Pembedahan</Label>
              </Col>
              <Col md='5'>
                <Input
                  id="pembedahan_1"
                  type="radio"
                  name="pembedahan"
                  className="me-1"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setLokasi('1');
                  }}
                  value="1"
                  checked={lokasi === '1'}
                  innerRef={register("pembedahan")}
                />{' '}
                <Label>Penandaan</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md='5'></Col>
              <Col md='5'>
                <Input
                  id="pembedahan_2"
                  type="radio"
                  name="pembedahan"
                  className="me-1"
                  value="2"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setLokasi('2');
                  }}
                  checked={lokasi === '2'}
                  innerRef={register('pembedahan')}
                />{' '}
                <Label>Cukur</Label>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md='5'></Col>
              <Col md='5'>
                <Input
                  id="pembedahan_3"
                  type="radio"
                  name="pembedahan"
                  className="me-1"
                  value="3"
                  onChange={(e) => {
                    handleRadioChange(e);
                    setLokasi('3');
                  }}
                  checked={lokasi === '3'}
                  innerRef={register("pembedahan")}
                />{' '}
                <Label>Pencucian</Label>
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>
      <hr />
    </FormGroup>
  )
}

export default InformConsentBedah;
