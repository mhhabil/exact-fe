import { Button, Col, Input, Label, Row, Table } from 'reactstrap';
import { Fragment, useState } from 'react';
import { fetchCpptPharmacyDayPdf, fetchCpptPharmacyPdf, handlePdf, handlePdfAll } from '@modules/pharmacy/cppt/stores/cppt-pharmacy.store';
import { AppRequest } from '@shared/request';
import { CpptPharmacyService } from '../services';
import { CpptRoService } from '@src/modules/ro/cppt/services';
import { CpptpharmacyModel } from '../models/cppt-pharmacy';
import { Signature } from '@shared/signature/components';
import { SignatureModel } from '@shared/signature/models/signature.model';
import { ValidateCpptRoRequest } from '@src/modules/ro/cppt/requests/validate-cppt-ro.request';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { CPPTPDFRequest, RootPDFRequest } from '@src/shared/request/requests/cppt-pdf.request';
import { FindPdfRequest } from '@src/shared/pdf';

const CpptPharmacyDetail = (props: { cpptFarmasi: CpptpharmacyModel | undefined | any, validate?: boolean, onSuccessValidate?: any}) => {

  const { cpptFarmasi, validate = false, onSuccessValidate} = props;

  const dispatch = useAppDispatch();

  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const { treatment } = useAppSelector(state => state.patient);
  const [terkaitobat, setTerkaitObat] = useState(!!(cpptFarmasi && cpptFarmasi.Masalah_Obat_Radio && cpptFarmasi.Masalah_Obat_Radio === '2'));

  const [doctorSignatureLabel, setDoctorSignatureLabel] = useState('Dokter DPJP');
  const [doctorSignature, setDoctorSignature] = useState<SignatureModel | undefined>(cpptFarmasi && cpptFarmasi.Id_Dokter_Pengkaji ? { Last_Updated: '', PIN: '', Signature: cpptFarmasi.TTD_Dokter_Pengkaji, ID_Karyawan: cpptFarmasi.Id_Dokter_Pengkaji } : undefined);
  const [efekObatText, setEfekObatText] = useState(!!(cpptFarmasi && cpptFarmasi.Efek_Samping_Obat_Radio && cpptFarmasi.Efek_Samping_Obat_Radio === '2') || (cpptFarmasi && cpptFarmasi.Efek_Samping_Obat !== ''));
  const [interaksiObatText, setInteraksiObatText] = useState(!!(cpptFarmasi && cpptFarmasi.Interaksi_Obat_Radio && cpptFarmasi.Interaksi_Obat_Radio === '2') || (cpptFarmasi && cpptFarmasi.Interaksi_Obat !== ''));

  const getEfekSampingObatRadio = () => {
    if (cpptFarmasi) {
      if (cpptFarmasi.Efek_Samping_Obat_Radio && cpptFarmasi.Efek_Samping_Obat_Radio !== '') {
        return cpptFarmasi.Efek_Samping_Obat_Radio;
      } else if (!cpptFarmasi.Efek_Samping_Obat_Radio) {
        if (cpptFarmasi.Efek_Samping_Obat && cpptFarmasi.Efek_Samping_Obat === '') {
          return '1';
        }
        if (cpptFarmasi.Efek_Samping_Obat && cpptFarmasi.Efek_Samping_Obat !== '') {
          return '2';
        }
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  const getInteraksiObatRadio = () => {
    if (cpptFarmasi) {
      if (cpptFarmasi.Interaksi_Obat_Radio && cpptFarmasi.Interaksi_Obat_Radio !== '') {
        return cpptFarmasi.Interaksi_Obat_Radio;
      } else if (!cpptFarmasi.Interaksi_Obat_Radio) {
        if (cpptFarmasi.Interaksi_Obat && cpptFarmasi.Interaksi_Obat === '') {
          return '1';
        }
        if (cpptFarmasi.Interaksi_Obat && cpptFarmasi.Interaksi_Obat !== '') {
          return '2';
        }
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  const { register, handleSubmit, errors, setValue, formState, reset } = useForm({
    mode: 'onChange',
    // resolver: yupResolver(CreateCpptRoRequest.scheme()),
    defaultValues: {
      masalah_obat_radio: cpptFarmasi?.Masalah_Obat_Radio ?? '',
      masalah_obat_teks: cpptFarmasi?.Masalah_Obat_Teks ?? '',
      efek_samping_obat: cpptFarmasi?.Efek_Samping_Obat ?? '',
      interaksi_obat: cpptFarmasi?.Interaksi_Obat ?? '',
      monitor_terapi: cpptFarmasi?.Monitor_Terapi ?? '',
      monitor_efek_samping: cpptFarmasi?.Monitor_Efek_Samping ?? '',
      anjuran_dokter: cpptFarmasi?.Anjuran_Dokter ?? '',
      anjuran_perawat: cpptFarmasi?.Anjuran_Perawat ?? '',
      id_perawat_cppt: cpptFarmasi?.Id_Perawat_Cppt ?? '',
      ttd_perawat_cppt: cpptFarmasi?.TTD_Perawat_Cppt ?? '',
      interaksi_obat_radio: getInteraksiObatRadio(),
      efek_samping_obat_radio: getEfekSampingObatRadio(),
    },
  });

  if (!cpptFarmasi) {
    return null;
  }

  const handleDoctorAssigned = (assigner: SignatureModel) => {
    if (assigner) {
      setDoctorSignature(assigner);
    }
  }

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleSubmitValidate = () => {
    if (!treatment || !doctorSignature || !cpptFarmasi) {
      alert('Parameter tidak lengkap');
      return;
    }
    const appRequest = AppRequest.createFromStore(treatment);
    const request = ValidateCpptRoRequest.createFromJson({...appRequest, ID: cpptFarmasi?.ID ?? '', dokter_dpjp: doctorSignature?.ID_Karyawan ?? ''});
    CpptRoService().validate(request)
      .then(() => {
        dispatch(handlePdfAll(undefined));
        if (cpptFarmasi.EMR_ID === treatment.EMR_ID) {
          dispatch(handlePdf(undefined));
          CpptPharmacyService().showDay({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
            CpptPharmacyService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptPharmacyDayPdf(FindPdfRequest.createFromJson({
                emr_id: treatment.EMR_ID,
                form_name: 'cppt_day_v3',
              })))
            }).catch((err) => {
              console.log(err)
            })
          })
        }
        CpptPharmacyService().show({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
          const { records } = resp.data.data;
          const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
          const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
          CpptPharmacyService().pdfNew(pdfParams).then(() => {
            dispatch(fetchCpptPharmacyPdf(FindPdfRequest.createFromJson({
              emr_id: treatment.EMR_ID,
              form_name: 'cppt_v3',
            })))
          }).catch((err) => {
            console.log(err)
          })
        });
        if (onSuccessValidate) {
          onSuccessValidate();
        }
      });
  }

  return (
    <Fragment>
      <Table className="mb-2">
        <tbody>
          <tr>
            <td className="fw-bolder">Nama</td>
            <td className="fw-bolder">Nilai</td>
          </tr>
          <tr>
            <td>S</td>
            <td>{ cpptFarmasi.Data_S }</td>
          </tr>
          <tr>
            <td>O</td>
            <td>{ cpptFarmasi.Data_O }</td>
          </tr>
          <tr>
            <td>A</td>
            <td>
              <Row>
                <Col>
                  <Label>1. Masalah Terkait Obat</Label>
                </Col>
                <Col md="1">
                  <Input
                    disabled
                    id="masalah_obat_radio_1"
                    type="radio"
                    name="masalah_obat_radio"
                    className="me-1"
                    style={{marginLeft: '-50px'}}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setTerkaitObat(true);
                      }
                      handleRadioChange(e)
                    }}
                    defaultChecked={cpptFarmasi?.Masalah_Obat_Radio === '1'}
                    value="1"
                    innerRef={register("masalah_obat_radio") as any}
                  />{' '}
                  <Label>Tidak</Label>
                </Col>
                <Col>
                  <Input
                    disabled
                    id="masalah_obat_radio_2"
                    type="radio"
                    name="masalah_obat_radio"
                    className="me-1"
                    onChange={(e) => {
                      setTerkaitObat(e.target.checked)
                      handleRadioChange(e);
                    }}
                    defaultChecked={cpptFarmasi?.Masalah_Obat_Radio === '2'}
                    value="2"
                    innerRef={register("masalah_obat_radio") as any}
                  />{' '}
                  <Label>Ya</Label>
                </Col>
              </Row>
              {
                terkaitobat && (
                  <>
                    <Row className='mt-1'>
                      {/* <Col md="2"></Col> */}
                      <Col></Col>
                      <Col>
                        <Input
                          md="1"
                          disabled
                          placeholder='Jelaskan...'
                          type="textarea"
                          id="masalah_obat_teks"
                          name="masalah_obat_teks"
                          // style={{marginLeft: '-100px'}}
                          innerRef={register({ required: true })}
                          invalid={errors.masalah_obat_teks && true}
                        />
                      </Col>
                    </Row>
                  </>
                )
              }
              <Row>
                <Col>
                  <Label>2. Efek Samping Obat</Label>
                </Col>
                <Col md='1'>
                  <Input
                    disabled
                    id='efek_samping_obat_radio_1'
                    name='efek_samping_obat_radio'
                    type='radio'
                    style={{marginLeft: '-50px'}}
                    className='me-1'
                    onChange={(e) => {
                      if (e.target.checked) {
                        setEfekObatText(false);
                      }
                      handleRadioChange(e)
                    }}
                    defaultChecked={!!(getEfekSampingObatRadio() === '1')}
                    value='1'
                    innerRef={register("efek_samping_obat_radio") as any}
                  />{' '}
                  <Label>Tidak</Label>
                </Col>
                <Col>
                  <Input
                    disabled
                    id='efek_samping_obat_radio'
                    name='efek_samping_obat_radio'
                    type='radio'
                    className='me-1'
                    onChange={(e) => {
                      setEfekObatText(e.target.checked)
                      handleRadioChange(e);
                    }}
                    defaultChecked={!!(getEfekSampingObatRadio() === '2')}
                    value='2'
                    innerRef={register("efek_samping_obat_radio") as any}
                  />{' '}
                  <Label>Ya</Label>
                </Col>
              </Row>
              {
                efekObatText && (
                  <>
                    <Row className='mt-1'>
                      <Col></Col>
                      <Col>
                        <Input
                          disabled
                          md="1"
                          placeholder='Jelaskan...'
                          type="textarea"
                          id="efek_samping_obat"
                          name="efek_samping_obat"
                          innerRef={register({ required: true })}
                          invalid={errors.efek_samping_obat && true}
                        />
                      </Col>
                    </Row>
                  </>
                )
              }
              <Row className='mt-1'>
                <Col>
                  <Label>3. Interaksi Obat</Label>
                </Col>
                <Col md='1'>
                  <Input
                    disabled
                    id='interaksi_obat_radio_1'
                    name='interaksi_obat_radio'
                    type='radio'
                    style={{marginLeft: '-50px'}}
                    className='me-1'
                    onChange={(e) => {
                      if (e.target.checked) {
                        setInteraksiObatText(false)
                      }
                      handleRadioChange(e)
                    }}
                    defaultChecked={!!(getInteraksiObatRadio() === '1')}
                    value='1'
                    innerRef={register('interaksi_obat_radio')as any}
                  />{' '}
                  <Label>Tidak</Label>
                </Col>
                <Col>
                  <Input
                    disabled
                    id='interaksi_obat_radio'
                    name='interaksi_obat_radio'
                    type='radio'
                    className='me-1'
                    onChange={(e) => {
                      setInteraksiObatText(e.target.checked)
                      handleRadioChange(e);
                    }}
                    defaultChecked={!!(getInteraksiObatRadio() === '2')}
                    value='2'
                    innerRef={register('interaksi_obat_radio')as any}
                  />{' '}
                  <Label>Ya</Label>
                </Col>
              </Row>
              {
                interaksiObatText && (
                  <>
                    <Row className='mt-1'>
                      <Col></Col>
                      <Col>
                        <Input
                          disabled
                          md="1"
                          type="textarea"
                          id="interaksi_obat"
                          name="interaksi_obat"
                          innerRef={register({ required: true })}
                          invalid={errors.interaksi_obat && true}
                        />
                      </Col>
                    </Row>
                  </>
                )
              }
            </td>
            <td></td>
          </tr>
          <tr>
            <td>P</td>
            <td>
              <Row>
                <Col>
                  <Label className='mt-2'>1. Monitor Terapi Lanjutan</Label>
                </Col>
                <Col className='mt-1'>
                  <Input
                    md="1"
                    disabled
                    type="textarea"
                    id="monitor_terapi"
                    name="monitor_terapi"
                    // style={{marginLeft: '-100px'}}
                    innerRef={register({ required: true })}
                    invalid={errors.monitor_terapi && true}
                  />
                </Col>
              </Row>
              <Row className='mt-1'>
                {/* <Col md="2"></Col> */}
                <Col>
                  <Label>2. Monitor Efek Samping Obat dan Edukasi Interfensi</Label>
                </Col>
                <Col>
                  <Input
                    md="1"
                    disabled
                    type="textarea"
                    id="monitor_efek_samping"
                    // style={{marginLeft: '-100px'}}
                    name="monitor_efek_samping"
                    innerRef={register({ required: true })}
                    invalid={errors.monitor_efek_samping && true}
                  />
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>Anjuran Untuk Dokter </td>
            <td>{ cpptFarmasi.Anjuran_Dokter }</td>
          </tr>
          <tr>
            <td>Anjuran Untuk Perawat </td>
            <td>{ cpptFarmasi.Anjuran_Perawat }</td>
          </tr>
        </tbody>
      </Table>

      <Table className="mb-1">
        <tbody>
          <tr>
            <td className="fw-bolder">Waktu</td>
            <td>{ cpptFarmasi.Waktu }</td>
          </tr>
          <tr>
            <td className="fw-bolder">Nama Petugas</td>
            <td>{ cpptFarmasi.Nama_Petugas }</td>
          </tr>
          <tr>
            <td className="fw-bolder">Unit</td>
            <td>{ cpptFarmasi.Unit }</td>
          </tr>
        </tbody>
      </Table>
      {
        !validate && (
          <Fragment>

            <div className="d-flex justify-content-around my-1">
              <Signature
                label="Perawat"
                type="picker"
                persons={[]}
                disabled
                initialImage={(cpptFarmasi) ? cpptFarmasi.TTD_Perawat_Cppt : undefined}
                additionalLabel={(cpptFarmasi) ? cpptFarmasi.Nama_Perawat_Cppt : undefined}
                onSigned={(assigner: SignatureModel) => undefined} />
              <Signature
                label="Dokter"
                type="picker"
                persons={doctors}
                disabled
                initialImage={(cpptFarmasi) ? cpptFarmasi.TTD_Dokter_Pengkaji : undefined}
                additionalLabel={(cpptFarmasi) ? cpptFarmasi.Nama_Dokter_Pengkaji : undefined}
                // pickerTitle="Dokter DPJP"
                onSigned={(assigner: SignatureModel) => handleDoctorAssigned(assigner)} />
            </div>
          </Fragment>
        )
      }
      {
        validate && (
          <Fragment>
            <Row>
              <Col className="d-flex justify-content-center mb-1">
                <Signature
                  label="Dokter"
                  type="picker"
                  persons={doctors}
                  // disabled
                  initialImage={(cpptFarmasi) ? cpptFarmasi.TTD_Dokter_Pengkaji : undefined}
                  additionalLabel={(cpptFarmasi) ? cpptFarmasi.Nama_Dokter_Pengkaji : undefined}
                  // pickerTitle="Dokter DPJP"
                  onSigned={(assigner: SignatureModel) => handleDoctorAssigned(assigner)} />
                <Signature
                  label="Perawat"
                  type="picker"
                  persons={nurses}
                  // disabled
                  initialImage={(cpptFarmasi) ? cpptFarmasi.TTD_Perawat_Cppt : undefined}
                  additionalLabel={(cpptFarmasi) ? cpptFarmasi.Nama_Perawat_Cppt : undefined}
                  // pickerTitle="Dokter DPJP"
                  onSigned={(assigner: SignatureModel) => undefined} />
                {/* <Signature
                  label={doctorSignatureLabel}
                  type="picker"
                  persons={doctors}
                  pickerTitle="Dokter DPJP"
                  onSigned={(assigner: SignatureModel) => handleDoctorAssigned(assigner)} /> */}
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center mb-1">
                <Button type="button" color="primary" onClick={() => handleSubmitValidate()}>Simpan</Button>
              </Col>
            </Row>
          </Fragment>
        )
      }
    </Fragment>
  );
}

export default CpptPharmacyDetail;
