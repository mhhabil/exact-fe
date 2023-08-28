import { Aktual, IAktual } from '../../models/catatan-keperawatan-pasca-operasi';
import { Button, Col, FormGroup, Input, Label, Row, TabContent, Table, TabPane } from 'reactstrap';
import { useEffect, useState } from 'react';
import { GridChart } from '@src/shared/grid-chart';
import { IPdfModel } from '@src/shared/pdf';
import { OperativeFairyNursingNotesModel } from '../../models';
import { Trash } from 'react-feather';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';


const ObservasiTandaVital = (props: { data: OperativeFairyNursingNotesModel, register: any, active: string, errors: any, processing: boolean, setValue: any, getValues: any }) => {
  const { data, register, active, errors, processing, setValue, getValues } = props;
  const [actuals, setActuals] = useState<any>(data.ck_pasca_operasi && data.ck_pasca_operasi.Aktual && Array.isArray(data.ck_pasca_operasi.Aktual) ? data.ck_pasca_operasi.Aktual.map((c) => Aktual.createFromModel(c)) : []);

  const { nurses } = useAppSelector(state => state.nurse);

  useEffect(() => {
    setValue('actual', actuals);
  }, [actuals])

  const handleAddActual = () => {
    const actua = actuals.map((n: any, key: number) => {
      return {
        time_masalah_aktual: getValues(`actual[${key}].time_masalah_aktual`),
        masalah_aktual_teks: getValues(`actual[${key}].masalah_aktual_teks`),
        masalah_aktual_intruksi_teks: getValues(`actual[${key}].masalah_aktual_intruksi_teks`),
        masalah_aktual_tindakan_teks: getValues(`actual[${key}].masalah_aktual_tindakan_teks`),
      };
    });
    setActuals([...actua, { time_masalah_aktual: '', masalah_aktual_teks: '', masalah_aktual_intruksi_teks: '', masalah_aktual_tindakan_teks: '' }]);
  }

  const handleDeleteActual = (index: number) => {
    const actua = actuals.map((n: any, key: number) => {
      return {
        time_masalah_aktual: getValues(`actual[${key}].time_masalah_aktual`),
        masalah_aktual_teks: getValues(`actual[${key}].masalah_aktual_teks`),
        masalah_aktual_intruksi_teks: getValues(`actual[${key}].masalah_aktual_intruksi_teks`),
        masalah_aktual_tindakan_teks: getValues(`actual[${key}].masalah_aktual_tindakan_teks`),
      };
    });
    actua.splice(index, 1);
    setActuals(actua);
  }

  const handleCheckboxChange = (val: any) => {
    setValue(`${val.target.name}`, (val.target.checked) ? '1' : '0')
  }

  const handleGridChartData = (data: string) => {
    setValue('grid_chart_data', data)
  }

  const handleGridChartImage = (image: string) => {
    setValue('grid_chart_img', image)
  }

  const handleGridChartScale = (scale: string) => {
    setValue('skala_anestesi', scale);
  }

  return (
    <TabContent activeTab={active}>
      <TabPane tabId='2'>
        <Row>
          <GridChart
            initialData={(data && data.ck_pasca_operasi && data.ck_pasca_operasi.Grid_Chart_Data) ? data.ck_pasca_operasi.Grid_Chart_Data : undefined}
            anesthesiaScale={(data && data.ck_pasca_operasi && data.ck_pasca_operasi.Skala_Anestesi) ? data.ck_pasca_operasi.Skala_Anestesi : '5'}
            onSavedData={(data: string) => {
              handleGridChartData(data)
            }}
            onSavedScale={(scale: string) => handleGridChartScale(scale)}
            onSavedImage={(image: string) => handleGridChartImage(image)}
            component='grid_chart_img'
            formName="ok/ck-pasca-operasi"
          />
          <Input
            id="grid_chart_data"
            type="hidden"
            name="grid_chart_data"
            innerRef={register()}
          />
          <Input
            id="grid_chart_img"
            type="hidden"
            name="grid_chart_img"
            innerRef={register()}
          />
        </Row>
        <Row className='mt-4'>
          <Col>
            <h2>Nadi</h2>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Nadi</th>
                  <th className="d-flex justify-content-center">Waktu Masuk</th>
                  <th>Waktu Keluar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Label>Teratur</Label>
                  </td>
                  <td>
                    <td className="d-flex justify-content-center">
                      <Input
                        id='time_nadi_teratur_masuk'
                        type='checkbox'
                        name='time_nadi_teratur_masuk'
                        className='me-1'
                        value='1'
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Nadi_Teratur_Masuk === '1'}
                        innerRef={register("time_nadi_teratur_masuk") as any}
                      />{' '}
                    </td>
                  </td>
                  <td>
                    <td className="d-flex justify-content-center">
                      <Input
                        id='time_nadi_teratur_keluar'
                        type='checkbox'
                        name='time_nadi_teratur_keluar'
                        className='me-1'
                        value='1'
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Nadi_Teratur_Keluar === '1'}
                        innerRef={register("time_nadi_teratur_keluar") as any}
                      />{' '}
                    </td>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Label>Tidak Teratur</Label>
                  </td>
                  <td>
                    <td className="d-flex justify-content-center">
                      <Input
                        id='time_nadi_tidakteratur_masuk'
                        type='checkbox'
                        name='time_nadi_tidakteratur_masuk'
                        className='me-1'
                        value='1'
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Nadi_Tidakteratur_Masuk === '1'}
                        innerRef={register("time_nadi_tidakteratur_masuk") as any}
                      />{' '}
                    </td>
                  </td>
                  <td>
                    <td className="d-flex justify-content-center">
                      <Input
                        id='time_nadi_tidakteratur_keluar'
                        type='checkbox'
                        name='time_nadi_tidakteratur_keluar'
                        className='me-1'
                        value='1'
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Nadi_Tidakteratur_Keluar === '1'}
                        innerRef={register("time_nadi_tidakteratur_keluar") as any}
                      />{' '}
                    </td>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Label>Lemah</Label>
                  </td>
                  <td>
                    <td className="d-flex justify-content-center">
                      <Input
                        id='time_nadi_lemah_masuk'
                        type='checkbox'
                        name='time_nadi_lemah_masuk'
                        className='me-1'
                        value='1'
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Nadi_Lemah_Masuk === '1'}
                        innerRef={register("time_nadi_lemah_masuk") as any}
                      />{' '}
                    </td>
                  </td>
                  <td>
                    <td className="d-flex justify-content-center">
                      <Input
                        id='time_nadi_lemah_keluar'
                        type='checkbox'
                        name='time_nadi_lemah_keluar'
                        className='me-1'
                        value='1'
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Nadi_Lemah_Keluar === '1'}
                        innerRef={register("time_nadi_lemah_keluar") as any}
                      />{' '}
                    </td>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Label>Kuat</Label>
                  </td>
                  <td>
                    <td className="d-flex justify-content-center">
                      <Input
                        id='time_nadi_kuat_masuk'
                        type='checkbox'
                        name='time_nadi_kuat_masuk'
                        className='me-1'
                        value='1'
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Nadi_Kuat_Masuk === '1'}
                        innerRef={register("time_nadi_kuat_masuk") as any}
                      />{' '}
                    </td>
                  </td>
                  <td>
                    <td className="d-flex justify-content-center">
                      <Input
                        id='time_nadi_kuat_keluar'
                        type='checkbox'
                        name='time_nadi_kuat_keluar'
                        className='me-1'
                        value='1'
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Nadi_Kuat_Keluar === '1'}
                        innerRef={register("time_nadi_kuat_keluar") as any}
                      />{' '}
                    </td>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>

          <Col>
            <h2>Napas</h2>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Napas</th>
                  <th>Waktu Masuk</th>
                  <th>Waktu Keluar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Label>Teratur</Label>
                  </td>
                  <td>
                    <Input
                      id='time_napas_teratur_masuk'
                      type='checkbox'
                      name='time_napas_teratur_masuk'
                      className='me-1'
                      value='1'
                      onChange={(e) => handleCheckboxChange(e)}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Napas_Teratur_Masuk === '1'}
                      innerRef={register("time_napas_teratur_masuk") as any}
                    />{' '}
                  </td>
                  <td>
                    <Input
                      id='time_napas_teratur_keluar'
                      type='checkbox'
                      name='time_napas_teratur_keluar'
                      className='me-1'
                      value='1'
                      onChange={(e) => handleCheckboxChange(e)}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Napas_Teratur_Masuk === '1'}
                      innerRef={register("time_napas_teratur_keluar") as any}
                    />{' '}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Label>Tidak Teratur</Label>
                  </td>
                  <td>
                    <Input
                      id='time_napas_tidakteratur_masuk'
                      type='checkbox'
                      name='time_napas_tidakteratur_masuk'
                      className='me-1'
                      value='1'
                      onChange={(e) => handleCheckboxChange(e)}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Napas_Tidakteratur_Keluar === '1'}
                      innerRef={register("time_napas_tidakteratur_masuk") as any}
                    />{' '}
                  </td>
                  <td>
                    <Input
                      id='time_napas_tidakteratur_keluar'
                      type='checkbox'
                      name='time_napas_tidakteratur_keluar'
                      className='me-1'
                      value='1'
                      onChange={(e) => handleCheckboxChange(e)}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Napas_Tidakteratur_Keluar === '1'}
                      innerRef={register("time_napas_tidakteratur_keluar") as any}
                    />{' '}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Label>Dangkal</Label>
                  </td>
                  <td>
                    <td>
                      <Input
                        id='time_napas_dangkal_masuk'
                        type='checkbox'
                        name='time_napas_dangkal_masuk'
                        className='me-1'
                        value='1'
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Napas_Dangkal_Masuk === '1'}
                        innerRef={register("time_napas_dangkal_masuk") as any}
                      />{' '}
                    </td>
                  </td>
                  <td>
                    <td>
                      <Input
                        id='time_napas_dangkal_keluar'
                        type='checkbox'
                        name='time_napas_dangkal_keluar'
                        className='me-1'
                        value='1'
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Napas_Dangkal_Keluar === '1'}
                        innerRef={register("time_napas_dangkal_keluar") as any}
                      />{' '}
                    </td>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Label>Dalam</Label>
                  </td>
                  <td>
                    <td>
                      <Input
                        id='time_napas_dalam_masuk'
                        type='checkbox'
                        name='time_napas_dalam_masuk'
                        className='me-1'
                        value='1'
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Napas_Dalam_Masuk === '1'}
                        innerRef={register("time_napas_dalam_masuk") as any}
                      />{' '}
                    </td>
                  </td>
                  <td>
                    <td>
                      <Input
                        id='time_napas_dalam_keluar'
                        type='checkbox'
                        name='time_napas_dalam_keluar'
                        className='me-1'
                        value='1'
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Napas_Dalam_Keluar === '1'}
                        innerRef={register("time_napas_dalam_keluar") as any}
                      />{' '}
                    </td>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Label>Sukar</Label>
                  </td>
                  <td>
                    <td>
                      <Input
                        id='time_napas_sukar_masuk'
                        type='checkbox'
                        name='time_napas_sukar_masuk'
                        className='me-1'
                        value='1'
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Napas_Sukar_Masuk === '1'}
                        innerRef={register("time_napas_sukar_masuk") as any}
                      />{' '}
                    </td>
                  </td>
                  <td>
                    <td>
                      <Input
                        id='time_napas_sukar_keluar'
                        type='checkbox'
                        name='time_napas_sukar_keluar'
                        className='me-1'
                        value='1'
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Napas_Sukar_Keluar === '1'}
                        innerRef={register("time_napas_sukar_keluar") as any}
                      />{' '}
                    </td>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Label>Terapi O2</Label>
                  </td>
                  <td>
                    <td>
                      <Input
                        id='time_napas_terapi_masuk'
                        type='checkbox'
                        name='time_napas_terapi_masuk'
                        className='me-1'
                        value='1'
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Napas_Terapi_Masuk === '1'}
                        innerRef={register("time_napas_terapi_masuk") as any}
                      />{' '}
                    </td>
                  </td>
                  <td>
                    <td>
                      <Input
                        id='time_napas_terapi_keluar'
                        type='checkbox'
                        name='time_napas_terapi_keluar'
                        className='me-1'
                        value='1'
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Napas_Terapi_Keluar === '1'}
                        innerRef={register("time_napas_terapi_keluar") as any}
                      />{' '}
                    </td>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Label>Sp O2</Label>
                  </td>
                  <td>
                    <td>
                      <Input
                        id='time_spo_masuk'
                        type='checkbox'
                        name='time_spo_masuk'
                        className='me-1'
                        value='1'
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Spo_Masuk === '1'}
                        innerRef={register("time_spo_masuk") as any}
                      />{' '}
                    </td>
                  </td>
                  <td>
                    <td>
                      <Input
                        id='time_spo_keluar'
                        type='checkbox'
                        name='time_spo_keluar'
                        className='me-1'
                        value='1'
                        onChange={(e) => handleCheckboxChange(e)}
                        defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Spo_Keluar === '1'}
                        innerRef={register("time_spo_keluar") as any}
                      />{' '}
                    </td>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table responsive bordered className='my-2'>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Waktu</th>
                  <th>Masalah Aktual</th>
                  <th>Instruksi</th>
                  <th>Tindakan</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  actuals && actuals.map((item: IAktual, key: number) => (
                    <tr key={key}>
                      <td>
                        {`${key + 1}`}
                      </td>
                      <td>
                        <Input
                          id={`actual_time_${key}`}
                          type='text'
                          name={`actual[${key}].time_masalah_aktual`}
                          innerRef={register({ required: true })}
                          required
                        />
                      </td>
                      <td>
                        <Input
                          id={`actual_masalah_${key}`}
                          type='text'
                          name={`actual[${key}].masalah_aktual_teks`}
                          innerRef={register({ required: true })}
                          required
                        />
                      </td>
                      <td>
                        <Input
                          id={`actual_instruksi_${key}`}
                          type='text'
                          name={`actual[${key}].masalah_aktual_intruksi_teks`}
                          innerRef={register({ required: true })}
                          required
                        />
                      </td>
                      <td>
                        <Input
                          id={`actual_tindakan_${key}`}
                          type='text'
                          name={`actual[${key}].masalah_aktual_tindakan_teks`}
                          innerRef={register({ required: true })}
                          required
                        />
                      </td>
                      <td className='text-center'>
                        <Button style={{ padding: '4px' }} color='danger' type='button' onClick={ () => handleDeleteActual(key)}>
                          <Trash size={15} />
                        </Button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
            <span
              className="text-warning cursor-pointer"
              onClick={() => handleAddActual()}
            >
              +Tambah Aktual
            </span>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th rowSpan={5}>Output</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Label>Jam I</Label>
                  </td>
                  <td>
                    <Label>Jam II</Label>
                  </td>
                  <td>
                    <Label>Jam III</Label>
                  </td>
                  <td>
                    <Label>Jam IV</Label>
                  </td>
                  <td>
                    <Label>Total  Skor</Label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Input
                      id='time_urine_satu'
                      type='checkbox'
                      name='time_urine_satu'
                      className='me-1'
                      value='1'
                      onChange={(e) => handleCheckboxChange(e)}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Urine_Satu === '1'}
                      innerRef={register("time_urine_satu") as any}
                    />{' '}
                  </td>
                  <td>
                    <Input
                      id='time_urine_dua'
                      type='checkbox'
                      name='time_urine_dua'
                      className='me-1'
                      value='1'
                      onChange={(e) => handleCheckboxChange(e)}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Urine_Dua === '1'}
                      innerRef={register("time_urine_dua") as any}
                    />{' '}
                  </td>
                  <td>
                    <Input
                      id='time_urine_tiga'
                      type='checkbox'
                      name='time_urine_tiga'
                      className='me-1'
                      value='1'
                      onChange={(e) => handleCheckboxChange(e)}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Urine_Tiga === '1'}
                      innerRef={register("time_urine_tiga") as any}
                    />{' '}
                  </td>
                  <td>
                    <Input
                      id='time_urine_empat'
                      type='checkbox'
                      name='time_urine_empat'
                      className='me-1'
                      value='1'
                      onChange={(e) => handleCheckboxChange(e)}
                      defaultChecked={data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Urine_Empat === '1'}
                      innerRef={register("time_urine_empat") as any}
                    />{' '}
                  </td>

                  <td>
                    <Input
                      id="time_urine_total"
                      type="text"
                      placeholder='Ketikkan'
                      name="time_urine_total"
                      innerRef={register()}
                      style={{width:'150px'}}
                      invalid={errors.time_urine_total && true}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col>
            <Row>
              <Col>
                <Label className='mt-3'>Jam Pemberitahuan Perawat Ruangan</Label>
              </Col>
              <Col>
                <Input
                  id="time_pemberitahu_ruang"
                  type="text"
                  placeholder='Ketikkan'
                  name="time_pemberitahu_ruang"
                  innerRef={register()}
                  style={{width:'200px'}}
                  className='mt-3'
                  invalid={errors.time_pemberitahu_ruang && true}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Label className='mt-2'>Jam Perawat Ruangan</Label>
              </Col>
              <Col>
                <Input
                  id="time_perawat_ruang"
                  type="text"
                  placeholder='Ketikkan'
                  name="time_perawat_ruang"
                  innerRef={register()}
                  style={{width:'200px'}}
                  className='mt-2'
                  invalid={errors.time_perawat_ruang && true}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Label className="mt-3" style={{ fontSize: '10pt' }}>Nama Perawat Ruangan</Label>
              </Col>
              <Col>
                <Input
                  className="mt-3"
                  type="select"
                  id="id_perawat_dokter"
                  name="id_perawat_dokter"
                  innerRef={register()}
                >
                  <option value="" disabled={false}>--</option>
                  {
                    nurses && Array.isArray(nurses) && nurses.map((item: any, key: number) => {
                      return <option value={item.ID_Karyawan} key={key}>{ item.Nama }</option>;
                    })
                  }
                </Input>
              </Col>
            </Row>
          </Col>
        </Row>
      </TabPane>
    </TabContent>
  )
}

export default ObservasiTandaVital;
