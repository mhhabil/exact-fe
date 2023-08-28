import { Button, Col, Label, Row, Table } from 'reactstrap';
import { Fragment, useEffect, useState } from 'react';
import { AppRequest } from '@shared/request';
import {CpptOutPatientModel} from '@modules/outpatient/cppt/models/cppt-out-patient.model';
import { CpptRoModel } from '@modules/ro/cppt/models/cppt-ro.model';
import { CpptRoService } from '@modules/ro/cppt/services';
import Image from 'next/image';
import { Signature } from '@shared/signature/components';
import { SignatureModel } from '@shared/signature/models/signature.model';
import { ValidateCpptRoRequest } from '@modules/ro/cppt/requests/validate-cppt-ro.request';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useFieldArray } from 'react-hook-form';
import { DoctorPreliminaryStudyModel, IDaftarTebus, IPrescription } from '../../doctor-preliminary-study/models/doctor-preliminary-study.model';
import { DataO } from '@src/shared/template';
import { fetchCpptOutPatientDayPdf, fetchCpptOutPatientPdf, handlePdf, handlePdfAll } from '../stores/cppt-out-patient.store';
import { CpptOutPatientService } from '../services';
import { CPPTPDFRequest, RootPDFRequest } from '@src/shared/request/requests/cppt-pdf.request';
import { FindPdfRequest } from '@src/shared/pdf';
import PediatricView from '../../doctor-preliminary-study/components/pediatric-view';

const CpptOutPatientDetail = (props: { cpptRajal: CpptOutPatientModel | undefined, validate?: boolean, onSuccessValidate?: any, doctorPreliminaryStudy: DoctorPreliminaryStudyModel }) => {

  const { cpptRajal, validate = false, onSuccessValidate, doctorPreliminaryStudy } = props;

  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const { treatment } = useAppSelector(state => state.patient);

  const dispatch = useAppDispatch();

  const [doctorSignatureLabel, setDoctorSignatureLabel] = useState('Dokter DPJP');
  const [doctorSignature, setDoctorSignature] = useState<SignatureModel | undefined>(cpptRajal && cpptRajal.Id_Dokter_Pengkaji ? { Last_Updated: '', PIN: '', Signature: cpptRajal.TTD_Dokter_Pengkaji, ID_Karyawan: cpptRajal.Id_Dokter_Pengkaji } : undefined);

  if (!cpptRajal) {
    return null;
  }

  const preliminaryStudy = undefined;

  const handleDoctorAssigned = (assigner: SignatureModel) => {
    if (assigner) {
      setDoctorSignature(assigner);
    }
  }

  const handleSubmitValidate = () => {
    if (!treatment || !doctorSignature || !cpptRajal) {
      alert('Parameter tidak lengkap');
      return;
    }
    const appRequest = AppRequest.createFromStore(treatment);
    const request = ValidateCpptRoRequest.createFromJson({...appRequest, ID: cpptRajal?.ID ?? '', dokter_dpjp: doctorSignature?.ID_Karyawan ?? '', emr_id: cpptRajal.EMR_ID });
    CpptRoService().validate(request)
      .then(() => {
        dispatch(handlePdfAll(undefined));
        if (cpptRajal.EMR_ID === treatment.EMR_ID) {
          dispatch(handlePdf(undefined));
          CpptOutPatientService().showDay({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'day');
            CpptOutPatientService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptOutPatientDayPdf(FindPdfRequest.createFromJson({
                emr_id: treatment.EMR_ID,
                form_name: 'cppt_day_v3',
              })))
            }).catch((err) => {
              console.log(err)
            })
          });
        }
        CpptOutPatientService().show({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
          const { records } = resp.data.data;
          const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
          const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
          CpptOutPatientService().pdfNew(pdfParams).then(() => {
            dispatch(fetchCpptOutPatientPdf(FindPdfRequest.createFromJson({
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
            <td>{ cpptRajal.Data_S && cpptRajal.Data_S === 'Lain-lain' ? cpptRajal.Data_S_Lain_Text : cpptRajal.Data_S }</td>
          </tr>
          <tr>
            <td>O</td>
            <td>
              <DataO cpptData={cpptRajal}/>
            </td>
          </tr>
          <tr>
            <td>Gambar</td>
            <td>
              {
                cpptRajal && cpptRajal.Picture_Data_O && cpptRajal.Picture_Data_O.Url_Image_Cppt_Data_O && cpptRajal.Picture_Data_O.Url_Image_Cppt_Data_O !== '' ? (
                  <Image
                    src={cpptRajal.Picture_Data_O.Url_Image_Cppt_Data_O}
                    alt='gambar'
                    width='300rem'
                    height='300rem'
                    objectFit='contain'
                  />
                ) : (
                  null
                )
              }
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              {
                cpptRajal && cpptRajal.Image_2 && cpptRajal.Image_2.Url_Image && cpptRajal.Image_2.Url_Image !== '' ? (
                  <Image
                    src={cpptRajal.Image_2.Url_Image}
                    alt='gambar2'
                    width='300rem'
                    height='300rem'
                    objectFit='contain'
                  />
                ) : (
                  null
                )
              }
            </td>
          </tr>
          <tr>
            <td>Hasil Periksa</td>
            <td>
              {
                cpptRajal && cpptRajal.Submit_Mata && cpptRajal.Submit_Mata === 1 ? (
                  <Row>
                    <Col>
                      <div className='d-flex'>
                        <Label>Mata OD : </Label>
                        <Image src={cpptRajal.Gambar_Mata_OD && cpptRajal.Gambar_Mata_OD !== '' ? cpptRajal.Gambar_Mata_OD : '/assets/default/eye-clean.jpg'} alt='' width='150rem' height='150rem'/>
                      </div>
                    </Col>
                    <Col>
                      <div className='d-flex'>
                        <Label>Mata OS : </Label>
                        <Image src={cpptRajal.Gambar_Mata_OS && cpptRajal.Gambar_Mata_OS !== '' ? cpptRajal.Gambar_Mata_OS : '/assets/default/eye-clean.jpg'} alt='' width='150rem' height='150rem'/>
                      </div>
                    </Col>
                  </Row>
                ) : null
              }
              {
                cpptRajal && cpptRajal.Submit_Retina && cpptRajal.Submit_Retina === 1 ? (
                  <Row>
                    <Col>
                      <div className='d-flex'>
                        <Label>Retina OD : </Label>
                        <Image src={cpptRajal.Gambar_Retina_OD && cpptRajal.Gambar_Retina_OD !== '' ? cpptRajal.Gambar_Retina_OD : '/assets/default/retina-right.jpg'} alt='' width='150rem' height='150rem'/>
                      </div>
                    </Col>
                    <Col>
                      <div className='d-flex'>
                        <Label>Retina OS : </Label>
                        <Image src={cpptRajal.Gambar_Retina_OS && cpptRajal.Gambar_Retina_OS !== '' ? cpptRajal.Gambar_Retina_OS : '/assets/default/retina-left.jpg'} alt='' width='150rem' height='150rem'/>
                      </div>
                    </Col>
                  </Row>
                ) : null
              }
            </td>
          </tr>
          <tr>
            <td>Pediatrik</td>
            <td>
              {
                cpptRajal && cpptRajal.Submit_Pediatrik && cpptRajal.Submit_Pediatrik === 1 ? (
                  <Row>
                    <Col>
                      <PediatricView data={cpptRajal.Pediatrik}/>
                    </Col>
                  </Row>
                ) : null
              }
            </td>
          </tr>
          <tr>
            <td>A</td>
            <td>{ cpptRajal.Data_A }</td>
          </tr>
          <tr>
            <td>P</td>
            <td>
              <Row>
                <Col>
                  {cpptRajal.Data_P}
                </Col>
              </Row>
              <Row>
                <Col>
                  {
                    cpptRajal && cpptRajal.Resep && cpptRajal.Resep.length !== 0 && (
                      <Table>
                        <thead>
                          <tr style={{ textAlign: 'center' }}>
                            <td style={{ width: '5%' }}><b>#</b></td>
                            <td><b>{`Nama & Dosis`}</b></td>
                            <td><b>Satuan</b></td>
                            <td style={{ width: '10%' }}><b>Jumlah</b></td>
                            <td><b>Aturan Pakai</b></td>
                            <td><b>Catatan</b></td>
                            <td style={{ width: '5%' }}></td>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            cpptRajal.Resep.map((resep: IPrescription, key: number) => (
                              <tr key={key} style={{ textAlign: 'center' }}>
                                <td>
                                  {key + 1}
                                </td>
                                <td>
                                  {resep.Nama_Obat ? resep.Nama_Obat : ''}
                                </td>
                                <td>
                                  {resep.Nama_Satuan ? resep.Nama_Satuan : ''}
                                </td>
                                <td>
                                  {resep.Jumlah ? resep.Jumlah : ''}
                                </td>
                                <td>
                                  {resep.Kode_AturanPakai ? resep.Kode_AturanPakai : ''}
                                </td>
                                <td>
                                  {resep.Catatan ? resep.Catatan : ''}
                                </td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </Table>
                    )
                  }
                </Col>
              </Row>
              <Row>
                <Col>
                  {
                    cpptRajal && cpptRajal.formFarmasi && cpptRajal.formFarmasi.Status_Tebus && cpptRajal.formFarmasi.Status_Tebus === '1' && (
                      <>
                        <Label className='text-danger mt-2'>
                          *Resep yang sudah ditebus
                        </Label>
                        <Table bordered style={{ width: '100%' }}>
                          <thead>
                            <tr style={{ textAlign: 'center' }}>
                              <td style={{ width: '5%' }}><b>No</b></td>
                              <td style={{ width: '30%' }}><b>{`Nama & Dosis`}</b></td>
                              <td style={{ width: '10%' }}><b>Satuan</b></td>
                              <td><b>Jumlah</b></td>
                              <td style={{ width: '35%' }}><b>Aturan Pakai</b></td>
                              <td style={{ width: '32%' }}><b>Catatan</b></td>
                            </tr>
                          </thead>
                          <tbody>
                            {cpptRajal && cpptRajal.formFarmasi && cpptRajal.formFarmasi.Daftar_Tebus && Array.isArray(cpptRajal.formFarmasi.Daftar_Tebus) && cpptRajal.formFarmasi.Daftar_Tebus.length > 0 && cpptRajal.formFarmasi.Daftar_Tebus.map((item: IDaftarTebus, key: number) => (
                              <tr key={key}>
                                <td>{`${key + 1}`}</td>
                                <td>{item.Nama_Obat}</td>
                                <td>{item.Nama_Satuan}</td>
                                <td>{item.Jumlah}</td>
                                <td>{item.Kode_AturanPakai}</td>
                                <td>{item.Catatan}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table></>
                    )
                  }
                </Col>
              </Row>
            </td>
          </tr>
        </tbody>
      </Table>

      <Table className="mb-1">
        <tbody>
          <tr>
            <td className="fw-bolder">Waktu</td>
            <td>{ cpptRajal.Waktu }</td>
          </tr>
          <tr>
            <td className="fw-bolder">Nama Petugas</td>
            <td>{ cpptRajal.Nama_Petugas }</td>
          </tr>
          <tr>
            <td className="fw-bolder">Unit</td>
            <td>{ cpptRajal.Unit }</td>
          </tr>
        </tbody>
      </Table>
      {
        !validate && (
          <Fragment>
            <div className="d-flex justify-content-around my-1">
              {
                cpptRajal && cpptRajal.TTD_Perawat_Cppt && cpptRajal.TTD_Perawat_Cppt !== '' && (
                  <Signature
                    label="Perawat"
                    type="picker"
                    persons={nurses}
                    disabled
                    initialImage={(cpptRajal && cpptRajal.TTD_Perawat_Cppt && cpptRajal.TTD_Perawat_Cppt !== '') ? cpptRajal.TTD_Perawat_Cppt : undefined}
                    additionalLabel={(cpptRajal) ? cpptRajal.Nama_Perawat_Cppt : undefined}
                    onSigned={(assigner: SignatureModel) => handleDoctorAssigned(assigner)} />
                )
              }
              {
                cpptRajal && cpptRajal.TTD_Dokter_Pengkaji && cpptRajal.TTD_Dokter_Pengkaji !== '' && (
                  <Signature
                    label="Dokter"
                    type="picker"
                    persons={doctors}
                    disabled
                    initialImage={(cpptRajal && cpptRajal.TTD_Dokter_Pengkaji && cpptRajal.TTD_Dokter_Pengkaji !== '') ? cpptRajal.TTD_Dokter_Pengkaji : undefined}
                    additionalLabel={(cpptRajal) ? cpptRajal.Nama_Dokter_Pengkaji : undefined}
                    onSigned={(assigner: SignatureModel) => handleDoctorAssigned(assigner)} />
                )
              }
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
                  label="Dokter DPJP"
                  type="picker"
                  persons={doctors}
                  initialImage={(cpptRajal && cpptRajal.TTD_Dokter_Pengkaji && cpptRajal.TTD_Dokter_Pengkaji !== '') ? cpptRajal.TTD_Dokter_Pengkaji : undefined}
                  additionalLabel={(cpptRajal) ? cpptRajal.Nama_Dokter_Pengkaji : undefined}
                  onSigned={(assigner: SignatureModel) => handleDoctorAssigned(assigner)} />
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

export default CpptOutPatientDetail;
