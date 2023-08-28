import { Button, Col, Label, Row, Table } from 'reactstrap';
import { CPPTPDFRequest, RootPDFRequest } from '@src/shared/request/requests/cppt-pdf.request';
import { DoctorPreliminaryStudyModel, IDaftarTebus, IPrescription } from '@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model';
import { Fragment, useEffect, useState } from 'react';
import { fetchCpptEmergencyRoomDayPdf, fetchCpptEmergencyRoomPdf, handlePdf, handlePdfAll } from '../stores/cppt-emergency-room.store';
import { AppRequest } from '@shared/request';
import { CpptEmergencyRoomModel } from '../models/cppt-emergency-room-model';
import { CpptEmergencyRoomService } from '../services';
import { CpptRoService } from '@modules/ro/cppt/services';
import { DataO } from '@src/shared/template';
import { FindPdfRequest } from '@src/shared/pdf';
import Image from 'next/image';
import PediatricView from '@src/modules/outpatient/doctor-preliminary-study/components/pediatric-view';
import { Signature } from '@shared/signature/components';
import { SignatureModel } from '@shared/signature/models/signature.model';
import { ValidateCpptRoRequest } from '@modules/ro/cppt/requests/validate-cppt-ro.request';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';

const CpptEmergencyRoomDetail = (props: { cpptUgd: CpptEmergencyRoomModel | undefined, validate?: boolean, onSuccessValidate?: any, doctorPreliminaryStudy: DoctorPreliminaryStudyModel }) => {

  const { cpptUgd, validate = false, onSuccessValidate, doctorPreliminaryStudy } = props;

  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const { treatment } = useAppSelector(state => state.patient);

  const dispatch = useAppDispatch();

  const [doctorSignatureLabel, setDoctorSignatureLabel] = useState('Dokter DPJP');
  const [doctorSignature, setDoctorSignature] = useState<SignatureModel | undefined>(cpptUgd && cpptUgd.Id_Dokter_Pengkaji ? { Last_Updated: '', PIN: '', Signature: cpptUgd.TTD_Dokter_Pengkaji, ID_Karyawan: cpptUgd.Id_Dokter_Pengkaji } : undefined);

  if (!cpptUgd) {
    return null;
  }

  const preliminaryStudy = undefined;

  const handleDoctorAssigned = (assigner: SignatureModel) => {
    if (assigner) {
      setDoctorSignature(assigner);
    }
  }

  const handleSubmitValidate = () => {
    if (!treatment || !doctorSignature || !cpptUgd) {
      alert('Parameter tidak lengkap');
      return;
    }
    const appRequest = AppRequest.createFromStore(treatment);
    const request = ValidateCpptRoRequest.createFromJson({...appRequest, ID: cpptUgd?.ID ?? '', dokter_dpjp: doctorSignature?.ID_Karyawan ?? '', emr_id: cpptUgd.EMR_ID });
    CpptRoService().validate(request)
      .then(() => {
        dispatch(handlePdfAll(undefined));
        if (cpptUgd.EMR_ID === treatment.EMR_ID) {
          dispatch(handlePdf(undefined));
          CpptEmergencyRoomService().showDay({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'day');
            CpptEmergencyRoomService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptEmergencyRoomDayPdf(FindPdfRequest.createFromJson({
                emr_id: treatment.EMR_ID,
                form_name: 'cppt_day_v3',
              })))
            }).catch((err) => {
              console.log(err)
            })
          });
        }
        CpptEmergencyRoomService().show({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
          const { records } = resp.data.data;
          const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
          const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
          CpptEmergencyRoomService().pdfNew(pdfParams).then(() => {
            dispatch(fetchCpptEmergencyRoomPdf(FindPdfRequest.createFromJson({
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
            <td>{ cpptUgd.Data_S && cpptUgd.Data_S === 'Lain-lain' ? cpptUgd.Data_S_Lain_Text : cpptUgd.Data_S }</td>
          </tr>
          <tr>
            <td>O</td>
            <td>
              <DataO cpptData={cpptUgd}/>
            </td>
          </tr>
          <tr>
            <td>Gambar</td>
            <td>
              {
                cpptUgd && cpptUgd.Picture_Data_O && cpptUgd.Picture_Data_O.Url_Image_Cppt_Data_O && cpptUgd.Picture_Data_O.Url_Image_Cppt_Data_O !== '' ? (
                  <Image
                    src={cpptUgd.Picture_Data_O.Url_Image_Cppt_Data_O}
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
            <td>Hasil Periksa</td>
            <td>
              {
                cpptUgd && cpptUgd.Submit_Mata && cpptUgd.Submit_Mata === 1 ? (
                  <Row>
                    <Col>
                      <div className='d-flex'>
                        <Label>Mata OD : </Label>
                        <Image src={cpptUgd.Gambar_Mata_OD && cpptUgd.Gambar_Mata_OD !== '' ? cpptUgd.Gambar_Mata_OD : '/assets/default/eye-clean.jpg'} alt='' width='150rem' height='150rem'/>
                      </div>
                    </Col>
                    <Col>
                      <div className='d-flex'>
                        <Label>Mata OS : </Label>
                        <Image src={cpptUgd.Gambar_Mata_OS && cpptUgd.Gambar_Mata_OS !== '' ? cpptUgd.Gambar_Mata_OS : '/assets/default/eye-clean.jpg'} alt='' width='150rem' height='150rem'/>
                      </div>
                    </Col>
                  </Row>
                ) : null
              }
              {
                cpptUgd && cpptUgd.Submit_Retina && cpptUgd.Submit_Retina === 1 ? (
                  <Row>
                    <Col>
                      <div className='d-flex'>
                        <Label>Retina OD : </Label>
                        <Image src={cpptUgd.Gambar_Retina_OD && cpptUgd.Gambar_Retina_OD !== '' ? cpptUgd.Gambar_Retina_OD : '/assets/default/retina-right.jpg'} alt='' width='150rem' height='150rem'/>
                      </div>
                    </Col>
                    <Col>
                      <div className='d-flex'>
                        <Label>Retina OS : </Label>
                        <Image src={cpptUgd.Gambar_Retina_OS && cpptUgd.Gambar_Retina_OS !== '' ? cpptUgd.Gambar_Retina_OS : '/assets/default/retina-left.jpg'} alt='' width='150rem' height='150rem'/>
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
                cpptUgd && cpptUgd.Submit_Pediatrik && cpptUgd.Submit_Pediatrik === 1 ? (
                  <Row>
                    <Col>
                      <PediatricView data={cpptUgd.Pediatrik}/>
                    </Col>
                  </Row>
                ) : null
              }
            </td>
          </tr>
          <tr>
            <td>A</td>
            <td>{ cpptUgd.Data_A }</td>
          </tr>
          <tr>
            <td>P</td>
            <td>
              <Row>
                <Col>
                  {cpptUgd.Data_P}
                </Col>
              </Row>
              <Row>
                <Col>
                  {
                    cpptUgd && cpptUgd.Resep && cpptUgd.Resep.length !== 0 && (
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
                            cpptUgd.Resep.map((resep: IPrescription, key: number) => (
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
                    cpptUgd && cpptUgd.formFarmasi && cpptUgd.formFarmasi.Status_Tebus && cpptUgd.formFarmasi.Status_Tebus === '1' && (
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
                            {cpptUgd && cpptUgd.formFarmasi && cpptUgd.formFarmasi.Daftar_Tebus && Array.isArray(cpptUgd.formFarmasi.Daftar_Tebus) && cpptUgd.formFarmasi.Daftar_Tebus.length > 0 && cpptUgd.formFarmasi.Daftar_Tebus.map((item: IDaftarTebus, key: number) => (
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
            <td>{ cpptUgd.Waktu }</td>
          </tr>
          <tr>
            <td className="fw-bolder">Nama Petugas</td>
            <td>{ cpptUgd.Nama_Petugas }</td>
          </tr>
          <tr>
            <td className="fw-bolder">Unit</td>
            <td>{ cpptUgd.Unit }</td>
          </tr>
        </tbody>
      </Table>
      {
        !validate && (
          <Fragment>
            <div className="d-flex justify-content-around my-1">
              {
                cpptUgd && cpptUgd.TTD_Perawat_Cppt && cpptUgd.TTD_Perawat_Cppt !== '' && (
                  <Signature
                    label="Perawat"
                    type="picker"
                    persons={nurses}
                    disabled
                    initialImage={(cpptUgd && cpptUgd.TTD_Perawat_Cppt && cpptUgd.TTD_Perawat_Cppt !== '') ? cpptUgd.TTD_Perawat_Cppt : undefined}
                    additionalLabel={(cpptUgd) ? cpptUgd.Nama_Perawat_Cppt : undefined}
                    onSigned={(assigner: SignatureModel) => handleDoctorAssigned(assigner)} />
                )
              }
              {
                cpptUgd && cpptUgd.TTD_Dokter_Pengkaji && cpptUgd.TTD_Dokter_Pengkaji !== '' && (
                  <Signature
                    label="Dokter"
                    type="picker"
                    persons={doctors}
                    disabled
                    initialImage={(cpptUgd && cpptUgd.TTD_Dokter_Pengkaji && cpptUgd.TTD_Dokter_Pengkaji !== '') ? cpptUgd.TTD_Dokter_Pengkaji : undefined}
                    additionalLabel={(cpptUgd) ? cpptUgd.Nama_Dokter_Pengkaji : undefined}
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
                  initialImage={(cpptUgd && cpptUgd.TTD_Dokter_Pengkaji && cpptUgd.TTD_Dokter_Pengkaji !== '') ? cpptUgd.TTD_Dokter_Pengkaji : undefined}
                  additionalLabel={(cpptUgd) ? cpptUgd.Nama_Dokter_Pengkaji : undefined}
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

export default CpptEmergencyRoomDetail;
