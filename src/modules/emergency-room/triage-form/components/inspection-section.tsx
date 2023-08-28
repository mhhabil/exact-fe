import { Button, Col, Form, FormGroup, Input, Label, Row, Table } from "reactstrap";
import { Fragment, useEffect, useState } from "react";
import { breath1, breath2, breath3, breath4, breath5, breath6 } from '@modules/emergency-room/triage-form/consts/breath';
import { breathWay1, breathWay2, breathWay3, breathWay4, breathWay5, breathWay6 } from '@modules/emergency-room/triage-form/consts/breath-way'
import { circulation1, circulation2, circulation3, circulation4, circulation5, circulation6 } from '@modules/emergency-room/triage-form/consts/circulation'
import { conscious1, conscious2, conscious3, conscious4, conscious5, conscious6 } from '@modules/emergency-room/triage-form/consts/consciousness';
import { otherSign1, otherSign2, otherSign3, otherSign4, otherSign5, otherSign6 } from '@modules/emergency-room/triage-form/consts/other-sign';


const InspectionSection = (props: { data: any, setValue: any, getValues: any, register: any, errors: any }) => {
  const { setValue, getValues, register, errors, data } = props;

  const getCategory = (value: string) => {
    if (value === '1') {
      return 'Kategori I'
    } else if (value === '2') {
      return 'Kategori II'
    } else if (value === '3') {
      return 'Kategori III'
    } else if (value === '4') {
      return 'Kategori IV'
    } else if (value === '5') {
      return 'Kategori V'
    } else if (value === '6') {
      return 'Kategori VI'
    } else {
      return undefined;
    }
  }

  const getResponseColor = (value: string) => {
    if (value === 'SEGERA') {
      return 'red'
    } else if (value === '< 10 MENIT') {
      return 'red'
    } else if (value === '30 MENIT') {
      return 'yellow'
    } else if (value === '60 MENIT') {
      return 'yellow'
    } else if (value === '120 MENIT') {
      return '#1EDD00'
    } else if (value === 'DOA (Death Of Arrival)') {
      return 'black'
    } else {
      return 'black'
    }
  }

  const [conscious, setConscious] = useState(data?.form?.Kesadaran_Kategori);
  const [breathWay, setBreathWay] = useState(data?.form?.Jalan_Nafas_Kategori);
  const [breath, setBreath] = useState(data?.form?.Pernafasan_Kategori);
  const [circulation, setCirculation] = useState(data?.form?.Sirkulasi_Kategori);
  const [otherSign, setOtherSign] = useState(data?.form?.Tanda_Lain_Kategori);

  const [consciousTitle, setConsciousTitle] = useState(getCategory(data?.form?.Kesadaran_Kategori));
  const [breathWayTitle, setBreathWayTitle] = useState(getCategory(data?.form?.Jalan_Nafas_Kategori));
  const [breathTitle, setBreathTitle] = useState(getCategory(data?.form?.Pernafasan_Kategori));
  const [circulationTitle, setCirculationTitle] = useState(getCategory(data?.form?.Sirkulasi_Kategori));
  const [otherSignTitle, setOtherSignTitle] = useState(getCategory(data?.form?.Tanda_Lain_Kategori));

  const [responseTime, setResponseTime] = useState(data && data.form && data.form.Respon_Time ? data.form.Respon_Time : 'DOA (Death Of Arrival)');
  const [responseColor, setResponseColor] = useState(getResponseColor(data?.form?.Respon_Time));
  const [textColor, setTextColor] = useState('text-dark');
  const res = {
    'kesadaran-kategori': '',
    'jalan-nafas-kategori': '',
    'pernafasan-kategori': '',
    'sirkulasi-kategori': '',
    'tanda-lain-kategori': '',
  }
  const [result, setResult] = useState<any>(res);

  const getFrequent = (arr: any[], n: number) => {
    arr.sort((a, b) => b - a);
    let max_count = 1, res = arr[0];
    let curr_count = 1;
    for (let i = 1; i < n; i++) {
      if (arr[i] === arr[i - 1]) {
        curr_count++;
      } else {
        curr_count = 1;
      }
      if (curr_count > max_count) {
        max_count = curr_count;
        res = arr[i - 1];
      }

    }
    if (res !== '') {
      return res
    } else {
      return arr[0]
    }
  }

  useEffect(() => {
    if (data) {
      const res = {
        'kesadaran-kategori': data.form.Kesadaran_Kategori ?? '',
        'jalan-nafas-kategori': data.form.Jalan_Nafas_Kategori ?? '',
        'pernafasan-kategori': data.form.Pernafasan_Kategori ?? '',
        'sirkulasi-kategori': data.form.Sirkulasi_Kategori ?? '',
        'tanda-lain-kategori': data.form.Tanda_Lain_Kategori ?? '',
      }
      setResult(res);
    }
  }, [data])

  useEffect(() => {
    if (result) {
      const arrayValues = Object.values(result);
      const n = arrayValues.length;
      const frequent = getFrequent(arrayValues, n);
      if (frequent === '1') {
        setTextColor('text-dark');
        setResponseColor('red')
        setResponseTime('SEGERA');
        setValue('respon-time', 'SEGERA');
        setValue('warna-triase', 'Merah');
      } else if (frequent === '2') {
        setTextColor('text-dark');
        setResponseColor('red');
        setResponseTime('< 10 MENIT');
        setValue('respon-time', '< 10 MENIT');
        setValue('warna-triase', 'Merah');
      } else if (frequent === '3') {
        setTextColor('text-dark');
        setResponseColor('yellow');
        setResponseTime('30 MENIT');
        setValue('respon-time', '30 MENIT');
        setValue('warna-triase', 'Kuning');
      } else if (frequent === '4') {
        setTextColor('text-dark');
        setResponseColor('yellow');
        setResponseTime('60 MENIT');
        setValue('respon-time', '60 MENIT');
        setValue('warna-triase', 'Kuning');
      } else if (frequent === '5') {
        setTextColor('text-dark');
        setResponseColor('#1EDD00');
        setResponseTime('120 MENIT')
        setValue('respon-time', '120 MENIT');
        setValue('warna-triase', 'Hijau');
      } else if (frequent === '6') {
        setTextColor('text-white');
        setResponseColor('black');
        setResponseTime('DOA (Death Of Arrival)')
        setValue('respon-time', 'DOA (Death Of Arrival)');
        setValue('warna-triase', 'Hitam');
      } else {
        setTextColor('text-white');
        setResponseColor('white');
        setResponseTime('')
        setValue('respon-time', '');
      }
    }
  }, [result])

  const handleConscious = (value: any) => {
    setResult({ ...result, 'kesadaran-kategori': value })
    setConsciousTitle(getCategory(value))
    setConscious(value);
  }

  const handleBreathWay = (value: any) => {
    setResult({ ...result, 'jalan-nafas-kategori': value })
    setBreathWayTitle(getCategory(value))
    setBreathWay(value);
  }

  const handleBreath = (value: any) => {
    setResult({ ...result, 'pernafasan-kategori': value })
    setBreathTitle(getCategory(value))
    setBreath(value);
  }

  const handleCirculation = (value: any) => {
    setResult({ ...result, 'sirkulasi-kategori': value })
    setCirculationTitle(getCategory(value))
    setCirculation(value);
  }

  const handleOtherSign = (value: any) => {
    setResult({ ...result, 'tanda-lain-kategori': value })
    setOtherSignTitle(getCategory(value))
    setOtherSign(value);
  }

  return (
    <Row className="mb-2 align-items-center" style={{ border: 'solid 1px black' }}>
      <Col className="align-items-center">
        <Input
          type="hidden"
          name="respon-time"
          innerRef={register({ required: true })}
        />
        <Input
          type="hidden"
          name="warna-triase"
          innerRef={register({ required: true })}
        />
        <FormGroup row className="align-items-center">
          <Col className="my-1">
            <Label className="fs-5">Pemeriksaan</Label>
            <hr className="m-0"/>
          </Col>
        </FormGroup>
        <FormGroup row className="align-items-center justify-content-between">
          <Col md='2'>
            <Label>1. Kesadaran*</Label>
          </Col>
          <Col className="d-flex align-items-center justify-content-between">
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'red' }}>
              <Input
                type="radio"
                className="me-1"
                name="kesadaran-kategori"
                onChange={(e) => handleConscious(e.target.value)}
                defaultChecked={data?.form?.Kesadaran_Kategori === '1'}
                value='1'
                innerRef={register({ required: true })}
              />
              <Label className="text-dark">Kategori I</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'red' }}>
              <Input
                type="radio"
                className="me-1"
                name="kesadaran-kategori"
                onChange={(e) => handleConscious(e.target.value)}
                defaultChecked={data?.form?.Kesadaran_Kategori === '2'}
                value='2'
                innerRef={register({ required: true })}
              />
              <Label>Kategori II</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'yellow' }}>
              <Input
                type="radio"
                className="me-1"
                name="kesadaran-kategori"
                onChange={(e) => handleConscious(e.target.value)}
                defaultChecked={data?.form?.Kesadaran_Kategori === '3'}
                value='3'
                innerRef={register({ required: true })}
              />
              <Label>Kategori III</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'yellow' }}>
              <Input
                type="radio"
                className="me-1"
                name="kesadaran-kategori"
                onChange={(e) => handleConscious(e.target.value)}
                defaultChecked={data?.form?.Kesadaran_Kategori === '4'}
                value='4'
                innerRef={register({ required: true })}
              />
              <Label>Kategori IV</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: '#1EDD00' }}>
              <Input
                type="radio"
                className="me-1"
                name="kesadaran-kategori"
                onChange={(e) => handleConscious(e.target.value)}
                defaultChecked={data?.form?.Kesadaran_Kategori === '5'}
                value='5'
                innerRef={register({ required: true })}
              />
              <Label>Kategori V</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'black' }}>
              <Input
                type="radio"
                className="me-1"
                name="kesadaran-kategori"
                onChange={(e) => handleConscious(e.target.value)}
                defaultChecked={data?.form?.Kesadaran_Kategori === '6'}
                value='6'
                innerRef={register({ required: true })}
              />
              <Label className="text-white">Kategori VI</Label>
            </div>
          </Col>
        </FormGroup>
        <FormGroup row style={{ marginTop: -25 }}>
          <Col md='2'></Col>
          {
            conscious && conscious === '1' && (
              <Col>
                <Label>{consciousTitle}</Label>
                {
                  conscious1.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            conscious && conscious === '2' && (
              <Col>
                <Label>{consciousTitle}</Label>
                {
                  conscious2.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            conscious && conscious === '3' && (
              <Col>
                <Label>{consciousTitle}</Label>
                {
                  conscious3.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            conscious && conscious === '4' && (
              <Col>
                <Label>{consciousTitle}</Label>
                {
                  conscious4.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            conscious && conscious === '5' && (
              <Col>
                <Label>{consciousTitle}</Label>
                {
                  conscious5.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            conscious && conscious === '6' && (
              <Col>
                <Label>{consciousTitle}</Label>
                {
                  conscious6.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
        </FormGroup>
        <FormGroup row className="align-items-center justify-content-between">
          <Col md='2'>
            <Label>2. Jalan Nafas*</Label>
          </Col>
          <Col className="d-flex align-items-center justify-content-between">
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'red' }}>
              <Input
                type="radio"
                className="me-1"
                name="jalan-nafas-kategori"
                onChange={(e) => handleBreathWay(e.target.value)}
                defaultChecked={data?.form?.Jalan_Nafas_Kategori === '1'}
                value='1'
                innerRef={register({ required: true })}
              />
              <Label className="text-dark">Kategori I</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'red' }}>
              <Input
                type="radio"
                className="me-1"
                name="jalan-nafas-kategori"
                onChange={(e) => handleBreathWay(e.target.value)}
                defaultChecked={data?.form?.Jalan_Nafas_Kategori === '2'}
                value='2'
                innerRef={register({ required: true })}
              />
              <Label>Kategori II</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'yellow' }}>
              <Input
                type="radio"
                className="me-1"
                name="jalan-nafas-kategori"
                onChange={(e) => handleBreathWay(e.target.value)}
                defaultChecked={data?.form?.Jalan_Nafas_Kategori === '3'}
                value='3'
                innerRef={register({ required: true })}
              />
              <Label>Kategori III</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'yellow' }}>
              <Input
                type="radio"
                className="me-1"
                name="jalan-nafas-kategori"
                onChange={(e) => handleBreathWay(e.target.value)}
                defaultChecked={data?.form?.Jalan_Nafas_Kategori === '4'}
                value='4'
                innerRef={register({ required: true })}
              />
              <Label>Kategori IV</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: '#1EDD00' }}>
              <Input
                type="radio"
                className="me-1"
                name="jalan-nafas-kategori"
                onChange={(e) => handleBreathWay(e.target.value)}
                defaultChecked={data?.form?.Jalan_Nafas_Kategori === '5'}
                value='5'
                innerRef={register({ required: true })}
              />
              <Label>Kategori V</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'black' }}>
              <Input
                type="radio"
                className="me-1"
                name="jalan-nafas-kategori"
                onChange={(e) => handleBreathWay(e.target.value)}
                defaultChecked={data?.form?.Jalan_Nafas_Kategori === '6'}
                value='6'
                innerRef={register({ required: true })}
              />
              <Label className="text-white">Kategori VI</Label>
            </div>
          </Col>
        </FormGroup>
        <FormGroup row style={{ marginTop: -25 }}>
          <Col md='2'></Col>
          {
            breathWay && breathWay === '1' && (
              <Col>
                <Label>{breathWayTitle}</Label>
                {
                  breathWay1.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            breathWay && breathWay === '2' && (
              <Col>
                <Label>{breathWayTitle}</Label>
                {
                  breathWay2.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            breathWay && breathWay === '3' && (
              <Col>
                <Label>{breathWayTitle}</Label>
                {
                  breathWay3.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            breathWay && breathWay === '4' && (
              <Col>
                <Label>{breathWayTitle}</Label>
                {
                  breathWay4.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            breathWay && breathWay === '5' && (
              <Col>
                <Label>{breathWayTitle}</Label>
                {
                  breathWay5.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            breathWay && breathWay === '6' && (
              <Col>
                <Label>{breathWayTitle}</Label>
                {
                  breathWay6.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
        </FormGroup>
        <FormGroup row className="align-items-center justify-content-between">
          <Col md='2'>
            <Label>3. Pernafasan*</Label>
          </Col>
          <Col className="d-flex align-items-center justify-content-between">
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'red' }}>
              <Input
                type="radio"
                className="me-1"
                name="pernafasan-kategori"
                onChange={(e) => handleBreath(e.target.value)}
                defaultChecked={data?.form?.Pernafasan_Kategori === '1'}
                value='1'
                innerRef={register({ required: true })}
              />
              <Label className="text-dark">Kategori I</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'red' }}>
              <Input
                type="radio"
                className="me-1"
                name="pernafasan-kategori"
                onChange={(e) => handleBreath(e.target.value)}
                defaultChecked={data?.form?.Pernafasan_Kategori === '2'}
                value='2'
                innerRef={register({ required: true })}
              />
              <Label>Kategori II</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'yellow' }}>
              <Input
                type="radio"
                className="me-1"
                name="pernafasan-kategori"
                onChange={(e) => handleBreath(e.target.value)}
                defaultChecked={data?.form?.Pernafasan_Kategori === '3'}
                value='3'
                innerRef={register({ required: true })}
              />
              <Label>Kategori III</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'yellow' }}>
              <Input
                type="radio"
                className="me-1"
                name="pernafasan-kategori"
                onChange={(e) => handleBreath(e.target.value)}
                defaultChecked={data?.form?.Pernafasan_Kategori === '4'}
                value='4'
                innerRef={register({ required: true })}
              />
              <Label>Kategori IV</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: '#1EDD00' }}>
              <Input
                type="radio"
                className="me-1"
                name="pernafasan-kategori"
                onChange={(e) => handleBreath(e.target.value)}
                defaultChecked={data?.form?.Pernafasan_Kategori === '5'}
                value='5'
                innerRef={register({ required: true })}
              />
              <Label>Kategori V</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'black' }}>
              <Input
                type="radio"
                className="me-1"
                name="pernafasan-kategori"
                onChange={(e) => handleBreath(e.target.value)}
                defaultChecked={data?.form?.Pernafasan_Kategori === '6'}
                value='6'
                innerRef={register({ required: true })}
              />
              <Label className="text-white">Kategori VI</Label>
            </div>
          </Col>
        </FormGroup>
        <FormGroup row style={{ marginTop: -25 }}>
          <Col md='2'></Col>
          {
            breath && breath === '1' && (
              <Col>
                <Label>{breathTitle}</Label>
                {
                  breath1.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            breath && breath === '2' && (
              <Col>
                <Label>{breathTitle}</Label>
                {
                  breath2.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            breath && breath === '3' && (
              <Col>
                <Label>{breathTitle}</Label>
                {
                  breath3.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            breath && breath === '4' && (
              <Col>
                <Label>{breathTitle}</Label>
                {
                  breath4.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            breath && breath === '5' && (
              <Col>
                <Label>{breathTitle}</Label>
                {
                  breath5.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            breath && breath === '6' && (
              <Col>
                <Label>{breathTitle}</Label>
                {
                  breath6.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
        </FormGroup>
        <FormGroup row className="align-items-center justify-content-between">
          <Col md='2'>
            <Label>4. Sirkulasi*</Label>
          </Col>
          <Col className="d-flex align-items-center justify-content-between">
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'red' }}>
              <Input
                type="radio"
                className="me-1"
                name="sirkulasi-kategori"
                onChange={(e) => handleCirculation(e.target.value)}
                defaultChecked={data?.form?.Sirkulasi_Kategori === '1'}
                value='1'
                innerRef={register({ required: true })}
              />
              <Label className="text-dark">Kategori I</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'red' }}>
              <Input
                type="radio"
                className="me-1"
                name="sirkulasi-kategori"
                onChange={(e) => handleCirculation(e.target.value)}
                defaultChecked={data?.form?.Sirkulasi_Kategori === '2'}
                value='2'
                innerRef={register({ required: true })}
              />
              <Label>Kategori II</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'yellow' }}>
              <Input
                type="radio"
                className="me-1"
                name="sirkulasi-kategori"
                onChange={(e) => handleCirculation(e.target.value)}
                defaultChecked={data?.form?.Sirkulasi_Kategori === '3'}
                value='3'
                innerRef={register({ required: true })}
              />
              <Label>Kategori III</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'yellow' }}>
              <Input
                type="radio"
                className="me-1"
                name="sirkulasi-kategori"
                onChange={(e) => handleCirculation(e.target.value)}
                defaultChecked={data?.form?.Sirkulasi_Kategori === '4'}
                value='4'
                innerRef={register({ required: true })}
              />
              <Label>Kategori IV</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: '#1EDD00' }}>
              <Input
                type="radio"
                className="me-1"
                name="sirkulasi-kategori"
                onChange={(e) => handleCirculation(e.target.value)}
                defaultChecked={data?.form?.Sirkulasi_Kategori === '5'}
                value='5'
                innerRef={register({ required: true })}
              />
              <Label>Kategori V</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'black' }}>
              <Input
                type="radio"
                className="me-1"
                name="sirkulasi-kategori"
                onChange={(e) => handleCirculation(e.target.value)}
                defaultChecked={data?.form?.Sirkulasi_Kategori === '6'}
                value='6'
                innerRef={register({ required: true })}
              />
              <Label className="text-white">Kategori VI</Label>
            </div>
          </Col>
        </FormGroup>
        <FormGroup row style={{ marginTop: -25 }}>
          <Col md='2'></Col>
          {
            circulation && circulation === '1' && (
              <Col>
                <Label>{circulationTitle}</Label>
                {
                  circulation1.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            circulation && circulation === '2' && (
              <Col>
                <Label>{circulationTitle}</Label>
                {
                  circulation2.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            circulation && circulation === '3' && (
              <Col>
                <Label>{circulationTitle}</Label>
                {
                  circulation3.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            circulation && circulation === '4' && (
              <Col>
                <Label>{circulationTitle}</Label>
                {
                  circulation4.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            circulation && circulation === '5' && (
              <Col>
                <Label>{circulationTitle}</Label>
                {
                  circulation5.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            circulation && circulation === '6' && (
              <Col>
                <Label>{circulationTitle}</Label>
                {
                  circulation6.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
        </FormGroup>
        <FormGroup row className="align-items-center justify-content-between">
          <Col md='2'>
            <Label>5. Tanda Lain (Disability)*</Label>
          </Col>
          <Col className="d-flex align-items-center justify-content-between">
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'red' }}>
              <Input
                type="radio"
                className="me-1"
                name="tanda-lain-kategori"
                onChange={(e) => handleOtherSign(e.target.value)}
                defaultChecked={data?.form?.Tanda_Lain_Kategori === '1'}
                value='1'
                innerRef={register({ required: true })}
              />
              <Label className="text-dark">Kategori I</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'red' }}>
              <Input
                type="radio"
                className="me-1"
                name="tanda-lain-kategori"
                onChange={(e) => handleOtherSign(e.target.value)}
                defaultChecked={data?.form?.Tanda_Lain_Kategori === '2'}
                value='2'
                innerRef={register({ required: true })}
              />
              <Label>Kategori II</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'yellow' }}>
              <Input
                type="radio"
                className="me-1"
                name="tanda-lain-kategori"
                onChange={(e) => handleOtherSign(e.target.value)}
                defaultChecked={data?.form?.Tanda_Lain_Kategori === '3'}
                value='3'
                innerRef={register({ required: true })}
              />
              <Label>Kategori III</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'yellow' }}>
              <Input
                type="radio"
                className="me-1"
                name="tanda-lain-kategori"
                onChange={(e) => handleOtherSign(e.target.value)}
                defaultChecked={data?.form?.Tanda_Lain_Kategori === '4'}
                value='4'
                innerRef={register({ required: true })}
              />
              <Label>Kategori IV</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: '#1EDD00' }}>
              <Input
                type="radio"
                className="me-1"
                name="tanda-lain-kategori"
                onChange={(e) => handleOtherSign(e.target.value)}
                defaultChecked={data?.form?.Tanda_Lain_Kategori === '5'}
                value='5'
                innerRef={register({ required: true })}
              />
              <Label>Kategori V</Label>
            </div>
            <div className="py-1 px-1 rounded" style={{ backgroundColor: 'black' }}>
              <Input
                type="radio"
                className="me-1"
                name="tanda-lain-kategori"
                onChange={(e) => handleOtherSign(e.target.value)}
                defaultChecked={data?.form?.Tanda_Lain_Kategori === '6'}
                value='6'
                innerRef={register({ required: true })}
              />
              <Label className="text-white">Kategori VI</Label>
            </div>
          </Col>
        </FormGroup>
        <FormGroup row style={{ marginTop: -25 }}>
          <Col md='2'></Col>
          {
            otherSign && otherSign === '1' && (
              <Col>
                <Label>{otherSignTitle}</Label>
                {
                  otherSign1.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            otherSign && otherSign === '2' && (
              <Col>
                <Label>{otherSignTitle}</Label>
                {
                  otherSign2.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            otherSign && otherSign === '3' && (
              <Col>
                <Label>{otherSignTitle}</Label>
                {
                  otherSign3.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            otherSign && otherSign === '4' && (
              <Col>
                <Label>{otherSignTitle}</Label>
                {
                  otherSign4.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            otherSign && otherSign === '5' && (
              <Col>
                <Label>{otherSignTitle}</Label>
                {
                  otherSign5.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          {
            otherSign && otherSign === '6' && (
              <Col>
                <Label>{otherSignTitle}</Label>
                {
                  otherSign6.map((item: any, key: number) => (
                    <Row key={key}>
                      <Col>
                        <Input
                          type='checkbox'
                          name={item.id}
                          className='me-1'
                          value='1'
                          defaultChecked={data && data.form && data.form[`${item.name}`] && data.form[`${item.name}`] === 1}
                          innerRef={register({ required: false })}
                        />
                        <Label>{item.label}</Label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
        </FormGroup>
        <FormGroup row className="align-items-center">
          <Col md='2'>
            <Label>6. Respon Time*</Label>
          </Col>
          <Col className={`px-1 py-1 ${textColor} fw-bolder`} style={{ backgroundColor: responseColor }}>
            {responseTime}
          </Col>
        </FormGroup>
        <FormGroup row className="align-items-center">
          <Col md='2'>
            <Label>Jenis Emergency*</Label>
          </Col>
          <Col md='2' className="me-1">
            <Input
              type="radio"
              className="me-1"
              name="jenis-emergency"
              defaultChecked={data?.form?.Jenis_Emergency === 'True Emergency'}
              value='True Emergency'
              innerRef={register({ required: true })}
            />
            <Label>True Emergency</Label>
          </Col>
          <Col md='2' className="me-1">
            <Input
              type="radio"
              className="me-1"
              name="jenis-emergency"
              defaultChecked={data?.form?.Jenis_Emergency === 'False Emergency'}
              value='False Emergency'
              innerRef={register({ required: true })}
            />
            <Label>False Emergency</Label>
          </Col>
        </FormGroup>
      </Col>
    </Row>
  )
}

export default InspectionSection;
