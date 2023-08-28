import { Button, Col, FormGroup, Input, Label, Row, TabContent, TabPane } from 'reactstrap';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { DateTimeInput } from '@src/shared/input';
import { SubmitButton } from '@src/shared/button';
import { IPdfModel } from '@src/shared/pdf';
import { OperativeFairyNursingNotesModel } from '../../models';


const PengkajianPascaOperasi = (props: { data: OperativeFairyNursingNotesModel, register: any, active: string, errors: any, processing: boolean, setValue: any, defaultPattern: any }) => {
  const { data, register, active, errors, processing, setValue, defaultPattern } = props;

  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);
  const [Ga, setGa] = useState((data && data.ck_pasca_operasi && data.ck_pasca_operasi.LA_GA) ? !!(data.ck_pasca_operasi.LA_GA) : false);
  const [steward, setSteward] = useState((data && data.ck_pasca_operasi && data.ck_pasca_operasi.Skor) ? !!(data.ck_pasca_operasi.Skor === 2) : false);
  const [aldrette, setAldrette] = useState((data && data.ck_pasca_operasi && data.ck_pasca_operasi.Skor) ? !!(data.ck_pasca_operasi.Skor === 1) : false);
  const [generalCondition, setGeneralCondition] = useState<string | undefined>(`${data?.ck_pasca_operasi?.Keadaan_Umum}`);
  const [consciusLevel, setConsciusLevel] = useState<string | undefined>(`${data?.ck_pasca_operasi?.Tingkat_Kesadaran}`);
  const [breathWay, setBreathWay] = useState<string | undefined>(`${data?.ck_pasca_operasi?.Jalan_Nafas}`);
  const [breath, setBreath] = useState<string | undefined>(`${data?.ck_pasca_operasi?.Pernafasan}`);
  const [oxyTherapy, setOxyTherapy] = useState<string | undefined>(`${data?.ck_pasca_operasi?.Terapi_Oksigen}`);
  const [inSkinWet, setInSkinWet] = useState<string | undefined>();
  const [outSkinWet, setOutSkinWet] = useState<string | undefined>();
  const [circulation, setCirculation] = useState<string | undefined>(`${data?.ck_pasca_operasi?.Sirkulasi}`);
  const [patientPos, setPatientPos] = useState<string | undefined>(`${data?.ck_pasca_operasi?.Posisi_Pasien}`);

  useEffect(() => {
    if (data && data.ck_pasca_operasi) {
      setGeneralCondition(`${data?.ck_pasca_operasi?.Keadaan_Umum}`);
      setConsciusLevel(`${data?.ck_pasca_operasi?.Tingkat_Kesadaran}`);
      setBreathWay(`${data?.ck_pasca_operasi?.Jalan_Nafas}`);
      setBreath(`${data?.ck_pasca_operasi?.Pernafasan}`);
      setOxyTherapy(`${data?.ck_pasca_operasi?.Terapi_Oksigen}`);
      setCirculation(`${data?.ck_pasca_operasi?.Sirkulasi}`);
      setPatientPos(`${data?.ck_pasca_operasi?.Posisi_Pasien}`);
    }
  }, [data])

  useEffect(() => {
    if (defaultPattern === '1') {
      setValue('keadaan_umum', '1');
      setGeneralCondition('1')
      setValue('tingkat_kesadaran_ckpo', '1');
      setConsciusLevel('1')
      setValue('jalan_nafas', '2');
      setBreathWay('2')
      setValue('pernafasan', '1');
      setBreath('1')
      setValue('terapi_oksigen', '1');
      setOxyTherapy('1')
      setValue('kulit_datang_lembab', '1');
      setInSkinWet('1')
      setValue('kulit_keluar_lembab', '1');
      setOutSkinWet('1')
      setValue('sirkulasi', '1');
      setCirculation('1')
      setValue('posisi_pasien', '2');
      setPatientPos('2')
    } else if (defaultPattern === '0') {
      setValue('keadaan_umum', undefined);
      setGeneralCondition(undefined)
      setValue('tingkat_kesadaran_ckpo', undefined);
      setConsciusLevel(undefined)
      setValue('jalan_nafas', undefined);
      setBreathWay(undefined)
      setValue('pernafasan', undefined);
      setBreath(undefined)
      setValue('terapi_oksigen', undefined);
      setOxyTherapy(undefined)
      setValue('kulit_datang_lembab', undefined);
      setInSkinWet(undefined)
      setValue('kulit_keluar_lembab', undefined);
      setOutSkinWet(undefined)
      setValue('sirkulasi', undefined);
      setCirculation(undefined)
      setValue('posisi_pasien', undefined);
      setPatientPos(undefined)
    }
  }, [defaultPattern]);

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleCheckboxChange = (val: any) => {
    setValue(`${val.target.name}`, (val.target.checked) ? '1' : '0')
  }

  return (
    <TabContent activeTab={active}>
      <TabPane tabId='1'>
        <FormGroup className="mt-1 form-group" row>
          <Row>
            <Col md='3'>
              <Label>1. Keadaan Umum</Label>
            </Col>
            <Col>
              <Input
                id="keadaan_umum_1"
                type="radio"
                name="keadaan_umum"
                className="me-1"
                value="1"
                onChange={(e) => {
                  handleRadioChange(e);
                  setGeneralCondition('1');
                }}
                checked={generalCondition === '1'}
                style={{marginLeft:'-70px'}}
                innerRef={register("keadaan_umum") as any}
              />{' '}
              <Label>Memuaskan</Label>
            </Col>
            <Col>
              <Input
                id="keadaan_umum_2"
                type="radio"
                name="keadaan_umum"
                className="me-1"
                value="2"
                onChange={(e) => {
                  handleRadioChange(e);
                  setGeneralCondition('2');
                }}
                checked={generalCondition === '2'}
                style={{marginLeft:'-70px'}}
                innerRef={register("keadaan_umum") as any}
              />{' '}
              <Label>Jelek</Label>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row className='mt-1'>
            <Col md='3'>
              <Label>2. Tingkat Kesadaran</Label>
            </Col>
            <Col>
              <Input
                id="tingkat_kesadaran_ckpo_1"
                type="radio"
                name="tingkat_kesadaran_ckpo"
                className="me-1"
                value="1"
                onChange={(e) => {
                  handleRadioChange(e);
                  setConsciusLevel('1');
                }}
                checked={consciusLevel === '1'}
                style={{marginLeft:'-70px'}}
                innerRef={register("tingkat_kesadaran_ckpo") as any}
              />{' '}
              <Label>Terjaga</Label>
            </Col>
            <Col>
              <Input
                id="tingkat_kesadaran_ckpo_2"
                type="radio"
                name="tingkat_kesadaran_ckpo"
                className="me-1"
                value="2"
                onChange={(e) => {
                  handleRadioChange(e);
                  setConsciusLevel('2');
                }}
                checked={consciusLevel === '2'}
                style={{marginLeft:'-70px'}}
                innerRef={register("tingkat_kesadaran_ckpo") as any}
              />{' '}
              <Label>Mudah Di Bangunkan</Label>
            </Col>
            <Col>
              <Input
                id="tingkat_kesadaran_ckpo_3"
                type="radio"
                name="tingkat_kesadaran_ckpo"
                className="me-1"
                value="3"
                onChange={(e) => {
                  handleRadioChange(e);
                  setConsciusLevel('3');
                }}
                checked={consciusLevel === '3'}
                style={{marginLeft:'-70px'}}
                innerRef={register("tingkat_kesadaran_ckpo") as any}
              />{' '}
              <Label>Tidak Berespon</Label>
            </Col>
            <Col></Col>
          </Row>
          <Row className='mt-1'>
            <Col md='3'>
              <Label>3. Jalan Nafas</Label>
            </Col>
            <Col>
              <Input
                id="jalan_nafas_1"
                type="radio"
                name="jalan_nafas"
                className="me-1"
                value="1"
                onChange={(e) => {
                  handleRadioChange(e);
                  setBreathWay('1');
                }}
                checked={breathWay === '1'}
                style={{marginLeft:'-70px'}}
                innerRef={register("jalan_nafas") as any}
              />{' '}
              <Label>Masalah</Label>
            </Col>
            <Col>
              <Input
                id="jalan_nafas_2"
                type="radio"
                name="jalan_nafas"
                className="me-1"
                value="2"
                onChange={(e) => {
                  handleRadioChange(e);
                  setBreathWay('2');
                }}
                checked={breathWay === '2'}
                style={{marginLeft:'-70px'}}
                innerRef={register("jalan_nafas") as any}
              />{' '}
              <Label>Tidak Masalah</Label>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row className='mt-1'>
            <Col md='3'>
              <Label>4. Pernafasan</Label>
            </Col>
            <Col>
              <Input
                id='pernafasan_1'
                type='radio'
                name='pernafasan'
                className='me-1'
                value='1'
                onChange={(e) => {
                  handleRadioChange(e);
                  setBreath('1');
                }}
                checked={breath === '1'}
                style={{marginLeft:'-70px'}}
                innerRef={register("pernafasan") as any}
              />{' '}
              <Label>Spontan</Label>
            </Col>
            <Col>
              <Input
                id='pernafasan_2'
                type='radio'
                name='pernafasan'
                className='me-1'
                value='2'
                onChange={(e) => {
                  handleRadioChange(e);
                  setBreath('2');
                }}
                checked={breath === '2'}
                style={{marginLeft:'-70px'}}
                innerRef={register("pernafasan") as any}
              />{' '}
              <Label>Dibantu</Label>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row className='mt-1'>
            <Col md='3'>
              <Label>5. Terapi Oksigen</Label>
            </Col>
            <Col>
              <Input
                id='terapi_oksigen'
                type='radio'
                name='terapi_oksigen'
                className='me-1'
                value='1'
                onChange={(e) => {
                  handleRadioChange(e);
                  setOxyTherapy('1');
                }}
                checked={oxyTherapy === '1'}
                style={{marginLeft:'-70px'}}
                innerRef={register("terapi_oksigen") as any}
              />{' '}
              <Label>Tidak</Label>
            </Col>
            <Col>
              <Input
                id='terapi_oksigen'
                type='radio'
                name='terapi_oksigen'
                className='me-1'
                value='2'
                onChange={(e) => {
                  handleRadioChange(e);
                  setOxyTherapy('2');
                }}
                checked={oxyTherapy === '2'}
                style={{marginLeft:'-70px'}}
                innerRef={register("terapi_oksigen") as any}
              />{' '}
              <Label>O2 Nasal</Label>
            </Col>
            <Col>
              <Input
                id='terapi_oksigen'
                type='radio'
                name='terapi_oksigen'
                className='me-1'
                value='3'
                onChange={(e) => {
                  handleRadioChange(e);
                  setOxyTherapy('3');
                }}
                checked={oxyTherapy === '3'}
                style={{marginLeft:'-70px'}}
                innerRef={register("terapi_oksigen") as any}
              />{' '}
              <Label>Lainnya</Label>
            </Col>
            <Col>
              <Input
                id="terapi_oksigen_lain_teks"
                type="text"
                style={{marginLeft:'-100px'}}
                placeholder='Ketikkan'
                name="terapi_oksigen_lain_teks"
                innerRef={register()}
                invalid={errors.terapi_oksigen_lain_teks && true}
              />
            </Col>
          </Row>
          <Row>
            <Col md='3'>
              <Label>6. Kulit</Label>
            </Col>
          </Row>
          <Row>
            <Col md='3'>
              <Label className='ms-5'>Datang</Label>
            </Col>
            <Col>
              <Input
                id='kulit_datang_kering_1'
                type='checkbox'
                name='kulit_datang_kering'
                className='me-1'
                value='1'
                onChange={(e) => handleCheckboxChange(e)}
                style={{marginLeft:'-70px'}}
                defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Kulit_Datang_Kering === 1}
                innerRef={register("kulit_datang_kering") as any}
              />{' '}
              <Label>Kering</Label>
            </Col>
            <Col>
              <Input
                id='kulit_datang_lembab_1'
                type='checkbox'
                name='kulit_datang_lembab'
                className='me-1'
                value='1'
                onChange={(e) => {
                  if (e.target.checked) {
                    setInSkinWet('1');
                  } else {
                    setInSkinWet(undefined);
                  }
                  handleCheckboxChange(e);
                }}
                style={{marginLeft:'-70px'}}
                checked={(data && data.ck_pasca_operasi && data.ck_pasca_operasi.Kulit_Datang_Lembab === 1) || inSkinWet === '1'}
                innerRef={register("kulit_datang_lembab") as any}
              />{' '}
              <Label>Lembab</Label>
            </Col>
            <Col>
              <Input
                id='kulit_datang_merah_muda'
                type='checkbox'
                name='kulit_datang_merah_muda'
                className='me-1'
                value='1'
                onChange={(e) => handleCheckboxChange(e)}
                style={{marginLeft:'-70px'}}
                defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Kulit_Datang_Merah_Muda === 1}
                innerRef={register("kulit_datang_merah_muda") as any}
              />{' '}
              <Label>Merah Muda</Label>
            </Col>
            <Col>
              <Input
                id='kulit_datang_biru_1'
                type='checkbox'
                name='kulit_datang_biru'
                className='me-1'
                value='1'
                onChange={(e) => handleCheckboxChange(e)}
                style={{marginLeft:'-70px'}}
                defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Kulit_Datang_Biru === 1}
                innerRef={register("kulit_datang_biru") as any}
              />{' '}
              <Label>Biru</Label>
            </Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col>
              <Input
                id='kulit_datang_hangat_1'
                type='checkbox'
                name='kulit_datang_hangat'
                className='me-1'
                value='1'
                onChange={(e) => handleCheckboxChange(e)}
                style={{marginLeft:'-70px'}}
                defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Kulit_Datang_Hangat === 1}
                innerRef={register("kulit_datang_hangat") as any}
              />{' '}
              <Label>Hangat</Label>
            </Col>
            <Col>
              <Input
                id='kulit_datang_dingin_1'
                type='checkbox'
                name='kulit_datang_dingin'
                className='me-1'
                value='1'
                onChange={(e) => handleCheckboxChange(e)}
                style={{marginLeft:'-70px'}}
                defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Kulit_Datang_Dingin === 1}
                innerRef={register("kulit_datang_dingin") as any}
              />{' '}
              <Label>Dingin</Label>
            </Col>
            <Col>
              <Input
                id='kulit_datang_lain_1'
                type='checkbox'
                name='kulit_datang_lain'
                className='me-1'
                value='1'
                onChange={(e) => handleCheckboxChange(e)}
                style={{marginLeft:'-70px'}}
                defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Kulit_Datang_Lain === 1}
                innerRef={register("kulit_datang_lain") as any}
              />{' '}
              <Label>Lainnya</Label>
            </Col>
            <Col>
              <Input
                id="kulit_datang_lain_teks"
                type="text"
                style={{marginLeft:'-100px'}}
                placeholder='Ketikkan'
                name="kulit_datang_lain_teks"
                innerRef={register()}
                invalid={errors.kulit_datang_lain_teks && true}
              />
            </Col>
          </Row>
          <Row className='mt-1'>
            <Col md='3'>
              <Label className='ms-5'>Keluar</Label>
            </Col>
            <Col>
              <Input
                id='kulit_keluar_kering_1'
                type='checkbox'
                name='kulit_keluar_kering'
                className='me-1'
                value='1'
                onChange={(e) => handleCheckboxChange(e)}
                style={{marginLeft:'-70px'}}
                defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Kulit_Keluar_Kering === 1}
                innerRef={register("kulit_keluar_kering") as any}
              />{' '}
              <Label>Kering</Label>
            </Col>
            <Col>
              <Input
                id='kulit_keluar_lembab_1'
                type='checkbox'
                name='kulit_keluar_lembab'
                className='me-1'
                value='1'
                onChange={(e) => {
                  if (e.target.checked) {
                    setOutSkinWet('1');
                  } else {
                    setOutSkinWet(undefined);
                  }
                  handleCheckboxChange(e);
                }}
                style={{marginLeft:'-70px'}}
                checked={(data && data.ck_pasca_operasi && data.ck_pasca_operasi.Kulit_Keluar_Lembab === 1) || outSkinWet === '1'}
                innerRef={register("kulit_keluar_lembab") as any}
              />{' '}
              <Label>Lembab</Label>
            </Col>
            <Col>
              <Input
                id='kulit_keluar_merah_muda_1'
                type='checkbox'
                name='kulit_keluar_merah_muda'
                className='me-1'
                value='1'
                onChange={(e) => handleCheckboxChange(e)}
                style={{marginLeft:'-70px'}}
                defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Kulit_Keluar_Merah_Muda === 1}
                innerRef={register("kulit_keluar_merah_muda") as any}
              />{' '}
              <Label>Merah Muda</Label>
            </Col>
            <Col>
              <Input
                id='kulit_keluar_biru'
                type='checkbox'
                name='kulit_keluar_biru'
                className='me-1'
                value='1'
                onChange={(e) => handleCheckboxChange(e)}
                style={{marginLeft:'-70px'}}
                defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Kulit_Keluar_Biru === 1}
                innerRef={register("kulit_keluar_biru") as any}
              />{' '}
              <Label>Biru</Label>
            </Col>
          </Row>
          <Row className='mt-1'>
            <Col md='3'></Col>
            <Col>
              <Input
                id='kulit_keluar_hangat_1'
                type='checkbox'
                name='kulit_keluar_hangat'
                className='me-1'
                value='1'
                onChange={(e) => handleCheckboxChange(e)}
                style={{marginLeft:'-70px'}}
                defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Kulit_Keluar_Hangat === 1}
                innerRef={register("kulit_keluar_hangat") as any}
              />{' '}
              <Label>Hangat</Label>
            </Col>
            <Col>
              <Input
                id='kulit_keluar_dingin_1'
                type='checkbox'
                name='kulit_keluar_dingin'
                className='me-1'
                value='1'
                onChange={(e) => handleCheckboxChange(e)}
                style={{marginLeft:'-70px'}}
                defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Kulit_Keluar_Dingin === 1}
                innerRef={register("kulit_keluar_dingin") as any}
              />{' '}
              <Label>Dingin</Label>
            </Col>
            <Col>
              <Input
                id='kulit_keluar_lain_1'
                type='checkbox'
                name='kulit_keluar_lain'
                className='me-1'
                value='1'
                onChange={(e) => handleCheckboxChange(e)}
                style={{marginLeft:'-70px'}}
                defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Kulit_Keluar_Lain === 1}
                innerRef={register("kulit_keluar_lain") as any}
              />{' '}
              <Label>Lainnya</Label>
            </Col>
            <Col>
              <Input
                id="kulit_keluar_lain_teks"
                type="text"
                style={{marginLeft:'-100px'}}
                placeholder='Ketikkan'
                name="kulit_keluar_lain_teks"
                innerRef={register()}
                invalid={errors.kulit_keluar_lain_teks && true}
              />
            </Col>
          </Row>
          <Row className='mt-1'>
            <Col md='3'>
              <Label>7. Sirkulasi</Label>
            </Col>
            <Col>
              <Input
                id='sirkulasi_1'
                type='radio'
                name='sirkulasi'
                className='me-1'
                value='1'
                onChange={(e) => {
                  handleRadioChange(e);
                  setCirculation('1');
                }}
                checked={circulation === '1'}
                style={{marginLeft:'-70px'}}
                innerRef={register("sirkulasi") as any}
              />{' '}
              <Label>Merah Muda</Label>
            </Col>
            <Col>
              <Input
                id='sirkulasi_2'
                type='radio'
                name='sirkulasi'
                className='me-1'
                value='2'
                onChange={(e) => {
                  handleRadioChange(e);
                  setCirculation('2');
                }}
                checked={circulation === '2'}
                style={{marginLeft:'-70px'}}
                defaultChecked={(data && data.ck_pasca_operasi && data.ck_pasca_operasi.Sirkulasi === 2) || circulation === '2'}
                innerRef={register("sirkulasi") as any}
              />{' '}
              <Label>Kebiru-Biruan</Label>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row className='mt-1'>
            <Col md='3'>
              <Label>8. Posisi Pasien</Label>
            </Col>
            <Col>
              <Input
                id='posisi_pasien_1'
                type='radio'
                name='posisi_pasien'
                className='me-1'
                value='1'
                onChange={(e) => {
                  handleRadioChange(e);
                  setPatientPos('1');
                }}
                checked={patientPos === '1'}
                style={{marginLeft:'-70px'}}
                innerRef={register("posisi_pasien") as any}
              />{' '}
              <Label>Lateral Ka/Ki</Label>
            </Col>
            <Col>
              <Input
                id='posisi_pasien_3'
                type='radio'
                name='posisi_pasien'
                className='me-1'
                value='2'
                onChange={(e) => {
                  handleRadioChange(e);
                  setPatientPos('2');
                }}
                checked={patientPos === '2'}
                style={{marginLeft:'-70px'}}
                innerRef={register("posisi_pasien") as any}
              />{' '}
              <Label>Duduk</Label>
            </Col>
            <Col></Col>
          </Row>
          <Row className='mt-1'>
            <Col md='3'></Col>
            <Col>
              <Input
                id='posisi_pasien_4'
                type='radio'
                name='posisi_pasien'
                className='me-1'
                value='3'
                onChange={(e) => {
                  handleRadioChange(e);
                  setPatientPos('3');
                }}
                checked={patientPos === '3'}
                style={{marginLeft:'-70px'}}
                innerRef={register("posisi_pasien") as any}
              />{' '}
              <Label>Lainnya</Label>
            </Col>
            <Col>
              <Input
                id="posisi_pasien_lain_teks"
                type="text"
                style={{marginLeft:'-70px'}}
                placeholder='Ketikkan'
                name="posisi_pasien_lain_teks"
                innerRef={register()}
                invalid={errors.posisi_pasien_lain_teks && true}
              />
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row className='mt-1'>
            <Col>
              <Input
                id='la_ga_1'
                type='radio'
                name='la_ga'
                className='me-1'
                value='1'
                onChange={(e) => {
                  if (e.target.checked) {
                    setGa(false);
                  } if (e.target.checked) {
                    setSteward(false);
                  } if (e.target.checked) {
                    setAldrette(false);
                  }
                  handleRadioChange(e)
                }}
                defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.LA_GA === '1'}
                innerRef={register("la_ga") as any}
              />{' '}
              <Label>LA</Label>
            </Col>
            <Col md='5'>
              <Input
                id='la_ga_2'
                type='radio'
                name='la_ga'
                className='me-1'
                value='2'
                onChange={(e) => {
                  setGa(e.target.checked)
                  handleRadioChange(e);
                }}
                defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.LA_GA === '2'}
                innerRef={register("la_ga") as any}
              />{' '}
              <Label>GA</Label>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
          {
            Ga && (
              <>
                <Row className='mt-1'>
                  <Col>
                    <Input
                      id='skor_1'
                      type='radio'
                      name='skor'
                      className='me-1'
                      value='1'
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSteward(false);
                        }  if (e.target.checked) {
                          setAldrette(true);
                        }
                        handleRadioChange(e)
                      }}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Skor === 1}
                      innerRef={register("skor") as any}
                    />{' '}
                    <Label>Skor Alderette</Label>
                  </Col>
                  <Col md='5'>
                    <Input
                      id='skor_2'
                      type='radio'
                      name='skor'
                      className='me-1'
                      value='2'
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSteward(true);
                        }  if (e.target.checked) {
                          setAldrette(false);
                        }
                        handleRadioChange(e)
                      }}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Skor === 2}
                      innerRef={register("skor") as any}
                    />{' '}
                    <Label>Skor Steward (Anak-Anak)</Label>
                  </Col>
                  <Col></Col>
                  <Col></Col>
                </Row>
              </>
            )
          }
          {
            steward && (
              <>
                <Row className='mt-1'>
                  <Col md='3'>
                    <Label>Pergerakan</Label>
                  </Col>
                  <Col>
                    <Input
                      id='steward_pergerakan'
                      type='radio'
                      name='steward_pergerakan'
                      className='me-1'
                      value='1'
                      onChange={(e) => handleRadioChange(e)}
                      style={{marginLeft:'-70px'}}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Steward_Pergerakan === 1}
                      innerRef={register("steward_pergerakan") as any}
                    />{' '}
                    <Label>Gerak Bertujuan (2)</Label>
                  </Col>
                </Row>
                <Row>
                  <Col md='3'></Col>
                  <Col>
                    <Input
                      id='steward_pergerakan_2'
                      type='radio'
                      name='steward_pergerakan'
                      className='me-1'
                      value='2'
                      onChange={(e) => handleRadioChange(e)}
                      style={{marginLeft:'-70px'}}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Steward_Pergerakan === 2}
                      innerRef={register("steward_pergerakan") as any}
                    />{' '}
                    <Label>Gerak Tak Bertujuan (1)</Label>
                  </Col>
                </Row>
                <Row>
                  <Col md='3'></Col>
                  <Col>
                    <Input
                      id='steward_pergerakan_3'
                      type='radio'
                      name='steward_pergerakan'
                      className='me-1'
                      value='3'
                      onChange={(e) => handleRadioChange(e)}
                      style={{marginLeft:'-70px'}}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Steward_Pergerakan === 3}
                      innerRef={register("steward_pergerakan") as any}
                    />{' '}
                    <Label>Tidak Bergerak (0)</Label>
                  </Col>
                </Row>
                <Row className='mt-1'>
                  <Col md='3'>
                    <Label>Pernafasan</Label>
                  </Col>
                  <Col>
                    <Input
                      id='steward_pernafasan_1'
                      type='radio'
                      name='steward_pernafasan'
                      className='me-1'
                      value='1'
                      onChange={(e) => handleRadioChange(e)}
                      style={{marginLeft:'-70px'}}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Steward_Pernafasan === 1}
                      innerRef={register("steward_pernafasan") as any}
                    />{' '}
                    <Label>Batuk, Menangis (2)</Label>
                  </Col>
                </Row>
                <Row>
                  <Col md='3'></Col>
                  <Col>
                    <Input
                      id='steward_pernafasan_2'
                      type='radio'
                      name='steward_pernafasan'
                      className='me-1'
                      value='2'
                      onChange={(e) => handleRadioChange(e)}
                      style={{marginLeft:'-70px'}}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Steward_Pernafasan === 2}
                      innerRef={register("steward_pernafasan") as any}
                    />{' '}
                    <Label>Pertahankan Jalan Nafas (1)</Label>
                  </Col>
                </Row>
                <Row>
                  <Col md='3'></Col>
                  <Col>
                    <Input
                      id='steward_pernafasan_3'
                      type='radio'
                      name='steward_pernafasan'
                      className='me-1'
                      value='3'
                      onChange={(e) => handleRadioChange(e)}
                      style={{marginLeft:'-70px'}}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Steward_Pernafasan === 3}
                      innerRef={register("steward_pernafasan") as any}
                    />{' '}
                    <Label>Perlu Bantuan (0)</Label>
                  </Col>
                </Row>
                <Row className='mt-1'>
                  <Col md='3'>
                    <Label>Kesadaran</Label>
                  </Col>
                  <Col>
                    <Input
                      id='steward_kesadaran_1'
                      type='radio'
                      name='steward_kesadaran'
                      className='me-1'
                      value='1'
                      onChange={(e) => handleRadioChange(e)}
                      style={{marginLeft:'-70px'}}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Steward_Kesadaran === 1}
                      innerRef={register("steward_kesadaran") as any}
                    />{' '}
                    <Label>Menangis (2)</Label>
                  </Col>
                </Row>
                <Row>
                  <Col md='3'></Col>
                  <Col>
                    <Input
                      id='steward_kesadaran_2'
                      type='radio'
                      name='steward_kesadaran'
                      className='me-1'
                      value='2'
                      onChange={(e) => handleRadioChange(e)}
                      style={{marginLeft:'-70px'}}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Steward_Kesadaran === 2}
                      innerRef={register("steward_kesadaran") as any}
                    />{' '}
                    <Label>Bereaksi Terhadap Rangsangan (1)</Label>
                  </Col>
                </Row>
                <Row>
                  <Col md='3'></Col>
                  <Col>
                    <Input
                      id='steward_kesadaran_3'
                      type='radio'
                      name='steward_kesadaran'
                      className='me-1'
                      value='3'
                      onChange={(e) => handleRadioChange(e)}
                      style={{marginLeft:'-70px'}}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Steward_Kesadaran === 3}
                      innerRef={register("steward_kesadaran") as any}
                    />{' '}
                    <Label>Tidak Bereaksi (0)</Label>
                  </Col>
                </Row>
              </>
            )
          }
          {
            aldrette && (
              <>
                <Row className='mt-1'>
                  <Col md='3'>
                    <Label>Aktivitas</Label>
                  </Col>
                  <Col>
                    <Input
                      id='aldrette_aktivitas_1'
                      type='radio'
                      name='aldrette_aktivitas'
                      className='me-1'
                      value='1'
                      onChange={(e) => handleRadioChange(e)}
                      style={{marginLeft:'-70px'}}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Aldrette_Aktivitas === 1}
                      innerRef={register("aldrette_aktivitas") as any}
                    />{' '}
                    <Label>4 Ekstremitas (2)</Label>
                  </Col>
                </Row>
                <Row>
                  <Col md='3'></Col>
                  <Col>
                    <Input
                      id='aldrette_aktivitas_2'
                      type='radio'
                      name='aldrette_aktivitas'
                      className='me-1'
                      value='2'
                      onChange={(e) => handleRadioChange(e)}
                      style={{marginLeft:'-70px'}}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Aldrette_Aktivitas === 2}
                      innerRef={register("aldrette_aktivitas") as any}
                    />{' '}
                    <Label>2 Ekstremitas (1)</Label>
                  </Col>
                </Row>
                <Row>
                  <Col md='3'></Col>
                  <Col>
                    <Input
                      id='aldrette_aktivitas_3'
                      type='radio'
                      name='aldrette_aktivitas'
                      className='me-1'
                      value='3'
                      onChange={(e) => handleRadioChange(e)}
                      style={{marginLeft:'-70px'}}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Aldrette_Aktivitas === 3}
                      innerRef={register("aldrette_aktivitas") as any}
                    />{' '}
                    <Label>Tidak AAda Gerakan (0)</Label>
                  </Col>
                </Row>
                <Row className='mt-1'>
                  <Col md='3'>
                    <Label>Pernafasan</Label>
                  </Col>
                  <Col>
                    <Input
                      id='aldrette_pernafasan_1'
                      type='radio'
                      name='aldrette_pernafasan'
                      className='me-1'
                      value='1'
                      onChange={(e) => handleRadioChange(e)}
                      style={{marginLeft:'-70px'}}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Aldrette_Pernafasan === 1}
                      innerRef={register("aldrette_pernafasan") as any}
                    />{' '}
                    <Label>Dapat Bernafas Dalam dan Batuk (2)</Label>
                  </Col>
                </Row>
                <Row>
                  <Col md='3'></Col>
                  <Col>
                    <Input
                      id='aldrette_pernafasan_2'
                      type='radio'
                      name='aldrette_pernafasan'
                      className='me-1'
                      value='2'
                      onChange={(e) => handleRadioChange(e)}
                      style={{marginLeft:'-70px'}}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Aldrette_Pernafasan === 2}
                      innerRef={register("aldrette_pernafasan") as any}
                    />{' '}
                    <Label>Dyspnea, Bernafas Dangkal Dan Terbatas (1)</Label>
                  </Col>
                </Row>
                <Row>
                  <Col md='3'></Col>
                  <Col>
                    <Input
                      id='aldrette_pernafasan_3'
                      type='radio'
                      name='aldrette_pernafasan'
                      className='me-1'
                      value='3'
                      onChange={(e) => handleRadioChange(e)}
                      style={{marginLeft:'-70px'}}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Aldrette_Pernafasan === 3}
                      innerRef={register("aldrette_pernafasan") as any}
                    />{' '}
                    <Label>Apnea (0)</Label>
                  </Col>
                </Row>
                <Row className='mt-1'>
                  <Col md='3'>
                    <Label>Sirkulasi</Label>
                  </Col>
                  <Col>
                    <Input
                      id='aldrette_sirkulasi_1'
                      type='radio'
                      name='aldrette_sirkulasi'
                      className='me-1'
                      value='1'
                      onChange={(e) => handleRadioChange(e)}
                      style={{marginLeft:'-70px'}}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Aldrette_Sirkulasi === 1}
                      innerRef={register("aldrette_sirkulasi") as any}
                    />{' '}
                    <Label>TD 20mmHg Dari Nilai Pra Anestesi (2)</Label>
                  </Col>
                </Row>
                <Row>
                  <Col md='3'></Col>
                  <Col>
                    <Input
                      id='aldrette_sirkulasi_2'
                      type='radio'
                      name='aldrette_sirkulasi'
                      className='me-1'
                      value='2'
                      onChange={(e) => handleRadioChange(e)}
                      style={{marginLeft:'-70px'}}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Aldrette_Sirkulasi === 2}
                      innerRef={register("aldrette_sirkulasi") as any}
                    />{' '}
                    <Label>TD 20-50 mmHg Dari Nilai Pra Anestesi (1)</Label>
                  </Col>
                </Row>
                <Row>
                  <Col md='3'></Col>
                  <Col>
                    <Input
                      id='aldrette_sirkulasi_3'
                      type='radio'
                      name='aldrette_sirkulasi'
                      className='me-1'
                      value='3'
                      onChange={(e) => handleRadioChange(e)}
                      style={{marginLeft:'-70px'}}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Aldrette_Sirkulasi === 3}
                      innerRef={register("aldrette_sirkulasi") as any}
                    />{' '}
                    <Label>TD 50 mmHg Dari Nilai Pra Anestesi (0)</Label>
                  </Col>
                </Row>
                <Row className='mt-1'>
                  <Col md='3'>
                    <Label>Kesadaran</Label>
                  </Col>
                  <Col>
                    <Input
                      id='aldrette_kesadaran_1'
                      type='radio'
                      name='aldrette_kesadaran'
                      className='me-1'
                      value='1'
                      onChange={(e) => handleRadioChange(e)}
                      style={{marginLeft:'-70px'}}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Aldrette_Kesadaran === 1}
                      innerRef={register("aldrette_kesadaran") as any}
                    />{' '}
                    <Label>Sadar Penuh (2)</Label>
                  </Col>
                </Row>
                <Row>
                  <Col md='3'></Col>
                  <Col>
                    <Input
                      id='aldrette_kesadaran_2'
                      type='radio'
                      name='aldrette_kesadaran'
                      className='me-1'
                      value='2'
                      onChange={(e) => handleRadioChange(e)}
                      style={{marginLeft:'-70px'}}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Aldrette_Kesadaran === 2}
                      innerRef={register("aldrette_kesadaran") as any}
                    />{' '}
                    <Label>Bangun Bila Dipanggil (1)</Label>
                  </Col>
                </Row>
                <Row>
                  <Col md='3'></Col>
                  <Col>
                    <Input
                      id='aldrette_kesadaran_3'
                      type='radio'
                      name='aldrette_kesadaran'
                      className='me-1'
                      value='3'
                      onChange={(e) => handleRadioChange(e)}
                      style={{marginLeft:'-70px'}}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Aldrette_Kesadaran === 3}
                      innerRef={register("aldrette_kesadaran") as any}
                    />{' '}
                    <Label>Tidak Ada Respon (0)</Label>
                  </Col>
                </Row>
                <Row className='mt-1'>
                  <Col md='3'>
                    <Label>Saturasi O2</Label>
                  </Col>
                  <Col>
                    <Input
                      id='aldrette_saturasi_1'
                      type='radio'
                      name='aldrette_saturasi'
                      className='me-1'
                      value='1'
                      onChange={(e) => handleRadioChange(e)}
                      style={{marginLeft:'-70px'}}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Aldrette_Saturasi === 1}
                      innerRef={register("aldrette_saturasi") as any}
                    />{' '}
                    <Label>{`>= 92% Dengan Udara Kamar (2)`}</Label>
                  </Col>
                </Row>
                <Row>
                  <Col md='3'></Col>
                  <Col>
                    <Input
                      id='aldrette_saturasi_2'
                      type='radio'
                      name='aldrette_saturasi'
                      className='me-1'
                      value='2'
                      onChange={(e) => handleRadioChange(e)}
                      style={{marginLeft:'-70px'}}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Aldrette_Saturasi === 2}
                      innerRef={register("aldrette_saturasi") as any}
                    />{' '}
                    <Label>{`>= 90% Dengan Oksigen (1)`}</Label>
                  </Col>
                </Row>
                <Row>
                  <Col md='3'></Col>
                  <Col>
                    <Input
                      id='aldrette_saturasi_3'
                      type='radio'
                      name='aldrette_saturasi'
                      className='me-1'
                      value='3'
                      onChange={(e) => handleRadioChange(e)}
                      style={{marginLeft:'-70px'}}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Aldrette_Saturasi === 3}
                      innerRef={register("aldrette_saturasi") as any}
                    />{' '}
                    <Label>{`>=  90%`}</Label>
                  </Col>
                </Row>
              </>
            )
          }

          <Row className='mt-1'>
            <Col md='3'>
              <Label>Tanggal</Label>
            </Col>
            <Col>
              <DateTimeInput
                name='tanggal_pasca_operasi'
                defaultValue='date'
                md={1}
                style={{marginTop: '-30px', marginLeft: '-70px'}}
                {...{ register, errors }}
              />
            </Col>
          </Row>
        </FormGroup>
      </TabPane>
    </TabContent>
  )
}

export default PengkajianPascaOperasi;
