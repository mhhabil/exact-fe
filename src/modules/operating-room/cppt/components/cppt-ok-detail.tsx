import { Button, Col, Label, Row, Table } from 'reactstrap';
import { Fragment, useEffect, useState } from 'react';
import { CpptRoModel } from '@modules/ro/cppt/models/cppt-ro.model';
import { Signature } from '@shared/signature/components';
import { SignatureModel } from '@shared/signature/models/signature.model';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import Image from 'next/image';
import { AppRequest } from '@shared/request';
import { ValidateCpptRoRequest } from '@modules/ro/cppt/requests/validate-cppt-ro.request';
import { CpptRoService } from '@modules/ro/cppt/services';
import {CpptOkModel} from '@modules/operating-room/cppt/models/cppt-ok.model';
import { DataO } from '@src/shared/template';
import { fetchCpptOkDayPdf, fetchCpptOkPdf, handlePdf, handlePdfAll } from '../stores/cppt-ok.store';
import { CpptOkService } from '../services';
import { CPPTPDFRequest, RootPDFRequest } from '@src/shared/request/requests/cppt-pdf.request';
import { FindPdfRequest } from '@src/shared/pdf';
import { DoctorPreliminaryStudyModel, IDaftarTebus, IPrescription } from '@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model';

const CpptOkDetail = (props: { cpptOk: CpptOkModel | undefined | any, validate?: boolean, onSuccessValidate?: any, doctorPreliminaryStudy: DoctorPreliminaryStudyModel }) => {

  const { cpptOk, validate = false, onSuccessValidate, doctorPreliminaryStudy } = props;

  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const { treatment } = useAppSelector(state => state.patient);
  const dispatch = useAppDispatch();

  const [doctorSignatureLabel, setDoctorSignatureLabel] = useState('Dokter DPJP');
  const [doctorSignature, setDoctorSignature] = useState<SignatureModel | undefined>(cpptOk && cpptOk.Id_Dokter_Pengkaji ? { Last_Updated: '', PIN: '', Signature: cpptOk.TTD_Dokter_Pengkaji, ID_Karyawan: cpptOk.Id_Dokter_Pengkaji } : undefined);

  if (!cpptOk) {
    return null;
  }


  const handleDoctorAssigned = (assigner: SignatureModel) => {
    if (assigner) {
      setDoctorSignature(assigner);
    }
  }

  const handleSubmitValidate = () => {
    if (!treatment || !doctorSignature || !cpptOk) {
      alert('Parameter tidak lengkap');
      return;
    }
    const appRequest = AppRequest.createFromStore(treatment);
    const request = ValidateCpptRoRequest.createFromJson({...appRequest, ID: cpptOk?.ID ?? '', dokter_dpjp: doctorSignature?.ID_Karyawan ?? ''});
    CpptRoService().validate(request)
      .then(() => {
        dispatch(handlePdfAll(undefined));
        if (cpptOk.EMR_ID === treatment.EMR_ID) {
          dispatch(handlePdf(undefined));
          CpptOkService().showDay({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'day');
            CpptOkService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptOkDayPdf(FindPdfRequest.createFromJson({
                emr_id: treatment.EMR_ID,
                form_name: 'cppt_day_v3',
              })))
            }).catch((err) => {
              console.log(err);
            })
          });
        }
        CpptOkService().show({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
          const { records } = resp.data.data;
          const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
          const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
          CpptOkService().pdfNew(pdfParams).then(() => {
            dispatch(fetchCpptOkPdf(FindPdfRequest.createFromJson({
              emr_id: treatment.EMR_ID,
              form_name: 'cppt_v3',
            })))
          }).catch((err) => {
            console.log(err);
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
            <td>{ cpptOk.Data_S }</td>
          </tr>
          <tr>
            <td>O</td>
            <td>
              <DataO cpptData={cpptOk}/>
            </td>
          </tr>
          <tr>
            <td>Gambar</td>
            <td>
              {
                cpptOk && cpptOk.Picture_Data_O && cpptOk.Picture_Data_O.Url_Image_Cppt_Data_O && cpptOk.Picture_Data_O.Url_Image_Cppt_Data_O !== '' ? (
                  <Image
                    src={cpptOk.Picture_Data_O.Url_Image_Cppt_Data_O}
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
                cpptOk && cpptOk.Submit_Mata && cpptOk.Submit_Mata === 1 ? (
                  <Row>
                    <Col>
                      <div className='d-flex'>
                        <Label>Mata OD : </Label>
                        <Image src={cpptOk.Gambar_Mata_OD && cpptOk.Gambar_Mata_OD !== '' ? cpptOk.Gambar_Mata_OD : '/assets/default/eye-clean.jpg'} alt='' width='150rem' height='150rem'/>
                      </div>
                    </Col>
                    <Col>
                      <div className='d-flex'>
                        <Label>Mata OS : </Label>
                        <Image src={cpptOk.Gambar_Mata_OS && cpptOk.Gambar_Mata_OS !== '' ? cpptOk.Gambar_Mata_OS : '/assets/default/eye-clean.jpg'} alt='' width='150rem' height='150rem'/>
                      </div>
                    </Col>
                  </Row>
                ) : null
              }
              {
                cpptOk && cpptOk.Submit_Retina && cpptOk.Submit_Retina === 1 ? (
                  <Row>
                    <Col>
                      <div className='d-flex'>
                        <Label>Retina OD : </Label>
                        <Image src={cpptOk.Gambar_Retina_OD && cpptOk.Gambar_Retina_OD !== '' ? cpptOk.Gambar_Retina_OD : '/assets/default/retina-right.jpg'} alt='' width='150rem' height='150rem'/>
                      </div>
                    </Col>
                    <Col>
                      <div className='d-flex'>
                        <Label>Retina OS : </Label>
                        <Image src={cpptOk.Gambar_Retina_OS && cpptOk.Gambar_Retina_OS !== '' ? cpptOk.Gambar_Retina_OS : '/assets/default/retina-left.jpg'} alt='' width='150rem' height='150rem'/>
                      </div>
                    </Col>
                  </Row>
                ) : null
              }
            </td>
          </tr>
          <tr>
            <td>A</td>
            <td>{ cpptOk.Data_A }</td>
          </tr>
          <tr>
            <td>P</td>
            <td>
              <Row>
                <Col>
                  { cpptOk.Data_P }
                </Col>
              </Row>
              {
                cpptOk.Picture && cpptOk.Picture.Url_Image_Cppt_Ok && cpptOk.Picture.Url_Image_Cppt_Ok !== '' && (
                  <Row>
                    <Col>
                      <Image
                        src={cpptOk.Picture.Url_Image_Cppt_Ok}
                        className='img-thumbnail mt-1'
                        alt='url-image-cppt'
                        width='150rem'
                        height='150rem'
                        objectFit='contain'
                      />
                    </Col>
                  </Row>
                )
              }
              <Row>
                <Col>
                  {
                    cpptOk && cpptOk.Resep && cpptOk.Resep.length !== 0 && (
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
                            cpptOk.Resep.map((resep: IPrescription, key: number) => (
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
                    cpptOk && cpptOk.formFarmasi && cpptOk.formFarmasi.Status_Tebus && cpptOk.formFarmasi.Status_Tebus === '1' && (
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
                            {cpptOk && cpptOk.formFarmasi && cpptOk.formFarmasi.Daftar_Tebus && Array.isArray(cpptOk.formFarmasi.Daftar_Tebus) && cpptOk.formFarmasi.Daftar_Tebus.length > 0 && cpptOk.formFarmasi.Daftar_Tebus.map((item: IDaftarTebus, key: number) => (
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
            <td>{ cpptOk.Waktu }</td>
          </tr>
          <tr>
            <td className="fw-bolder">Nama Petugas</td>
            <td>{ cpptOk.Nama_Petugas }</td>
          </tr>
          <tr>
            <td className="fw-bolder">Unit</td>
            <td>{ cpptOk.Unit }</td>
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
                initialImage={(cpptOk) ? cpptOk.TTD_Perawat_Cppt : undefined}
                additionalLabel={(cpptOk) ? cpptOk.Nama_Perawat_Cppt : undefined}
                onSigned={(assigner: SignatureModel) => undefined} />
              <Signature
                label="Dokter"
                type="picker"
                persons={doctors}
                disabled
                initialImage={(cpptOk) ? cpptOk.TTD_Dokter_Pengkaji : undefined}
                additionalLabel={(cpptOk) ? cpptOk.Nama_Dokter_Pengkaji : undefined}
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
                  initialImage={(cpptOk) ? cpptOk.TTD_Dokter_Pengkaji : undefined}
                  additionalLabel={(cpptOk) ? cpptOk.Nama_Dokter_Pengkaji : undefined}
                  // pickerTitle="Dokter DPJP"
                  onSigned={(assigner: SignatureModel) => handleDoctorAssigned(assigner)} />
                <Signature
                  label="Perawat"
                  type="picker"
                  persons={nurses}
                  // disabled
                  initialImage={(cpptOk) ? cpptOk.TTD_Perawat_Cppt : undefined}
                  additionalLabel={(cpptOk) ? cpptOk.Nama_Perawat_Cppt : undefined}
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

export default CpptOkDetail;
