import { Button, Col, Label, Row, Table } from "reactstrap";
import { CPPTPDFRequest, RootPDFRequest } from "@src/shared/request/requests/cppt-pdf.request";
import { CpptInpatientModel, IDoctorVisit } from "../models/cppt-inpatient.model";
import { Fragment, useState } from "react";
import { IDaftarTebus, IPrescription } from "@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model";
import { fetchCpptInpatientDayPdf, fetchCpptInpatientPdf, handlePdf, handlePdfAll } from "../stores/cppt-inpatient.store";
import { AppRequest } from "@src/shared/request";
import { CpptInpatientService } from "../services";
import { CpptRoService } from "@src/modules/ro/cppt/services";
import { DataO } from "@src/shared/template";
import { FindPdfRequest } from "@src/shared/pdf";
import Image from 'next/image';
import PediatricView from "@src/modules/outpatient/doctor-preliminary-study/components/pediatric-view";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { ValidateCpptRoRequest } from "@src/modules/ro/cppt/requests/validate-cppt-ro.request";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const CpptInpatientDetail = (props: { cpptRanap: CpptInpatientModel | undefined, validate?: boolean, onSuccessValidate?: any, visits: Array<IDoctorVisit> }) => {
  const { cpptRanap, validate = false, onSuccessValidate, visits } = props;

  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const { treatment } = useAppSelector(state => state.patient);

  const dispatch = useAppDispatch();

  const [doctorSignatureLabel, setDoctorSignatureLabel] = useState('Dokter DPJP');
  const [doctorSignature, setDoctorSignature] = useState<SignatureModel | undefined>(cpptRanap && cpptRanap.Id_Dokter_Pengkaji ? { Last_Updated: '', PIN: '', Signature: cpptRanap.TTD_Dokter_Pengkaji, ID_Karyawan: cpptRanap.Id_Dokter_Pengkaji } : undefined);

  if (!cpptRanap) {
    return null;
  }

  const preliminaryStudy = undefined;

  const handleDoctorAssigned = (assigner: SignatureModel) => {
    if (assigner) {
      setDoctorSignature(assigner);
    }
  }

  const getVisitData = (id: string) => {
    const visit = visits.find((item: IDoctorVisit) => item.ID_Berobat === id);
    if (visit) {
      return `${visit.ID_Berobat} (${visit.Dokter_Nama}, ${visit.Waktu_Visit})`
    } else {
      return ''
    }
  }

  const handleSubmitValidate = () => {
    if (!treatment || !doctorSignature || !cpptRanap) {
      alert('Parameter tidak lengkap');
      return;
    }
    const appRequest = AppRequest.createFromStore(treatment);
    const request = ValidateCpptRoRequest.createFromJson({...appRequest, ID: cpptRanap?.ID ?? '', dokter_dpjp: doctorSignature?.ID_Karyawan ?? '', emr_id: cpptRanap.EMR_ID });
    CpptRoService().validate(request)
      .then(() => {
        dispatch(handlePdfAll(undefined));
        if (cpptRanap.EMR_ID === treatment.EMR_ID) {
          dispatch(handlePdf(undefined));
          CpptInpatientService().showDay({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'day');
            CpptInpatientService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptInpatientDayPdf(FindPdfRequest.createFromJson({
                emr_id: treatment.EMR_ID,
                form_name: 'cppt_day_v3',
              })))
            }).catch((err) => {
              console.log(err)
            })
          });
        }
        CpptInpatientService().show({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
          const { records } = resp.data.data;
          const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
          const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
          CpptInpatientService().pdfNew(pdfParams).then(() => {
            dispatch(fetchCpptInpatientPdf(FindPdfRequest.createFromJson({
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
            <td className="fw-bolder">Visit</td>
            <td className="fw-bolder">{getVisitData(cpptRanap.ID_Berobat)}</td>
          </tr>
          <tr>
            <td>S</td>
            <td>{ cpptRanap.Data_S }</td>
          </tr>
          <tr>
            <td>O</td>
            <td>
              <DataO cpptData={cpptRanap}/>
            </td>
          </tr>
          <tr>
            <td>Gambar</td>
            <td>
              {
                cpptRanap && cpptRanap.Picture_Data_O && cpptRanap.Picture_Data_O.Url_Image_Cppt_Data_O && cpptRanap.Picture_Data_O.Url_Image_Cppt_Data_O !== '' ? (
                  <Image
                    src={cpptRanap.Picture_Data_O.Url_Image_Cppt_Data_O}
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
                cpptRanap && cpptRanap.Submit_Mata && cpptRanap.Submit_Mata === 1 ? (
                  <Row>
                    <Col>
                      <div className='d-flex'>
                        <Label>Mata OD : </Label>
                        <Image src={cpptRanap.Gambar_Mata_OD && cpptRanap.Gambar_Mata_OD !== '' ? cpptRanap.Gambar_Mata_OD : '/assets/default/eye-clean.jpg'} alt='' width='150rem' height='150rem'/>
                      </div>
                    </Col>
                    <Col>
                      <div className='d-flex'>
                        <Label>Mata OS : </Label>
                        <Image src={cpptRanap.Gambar_Mata_OS && cpptRanap.Gambar_Mata_OS !== '' ? cpptRanap.Gambar_Mata_OS : '/assets/default/eye-clean.jpg'} alt='' width='150rem' height='150rem'/>
                      </div>
                    </Col>
                  </Row>
                ) : null
              }
              {
                cpptRanap && cpptRanap.Submit_Retina && cpptRanap.Submit_Retina === 1 ? (
                  <Row>
                    <Col>
                      <div className='d-flex'>
                        <Label>Retina OD : </Label>
                        <Image src={cpptRanap.Gambar_Retina_OD && cpptRanap.Gambar_Retina_OD !== '' ? cpptRanap.Gambar_Retina_OD : '/assets/default/retina-right.jpg'} alt='' width='150rem' height='150rem'/>
                      </div>
                    </Col>
                    <Col>
                      <div className='d-flex'>
                        <Label>Retina OS : </Label>
                        <Image src={cpptRanap.Gambar_Retina_OS && cpptRanap.Gambar_Retina_OS !== '' ? cpptRanap.Gambar_Retina_OS : '/assets/default/retina-left.jpg'} alt='' width='150rem' height='150rem'/>
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
                cpptRanap && cpptRanap.Submit_Pediatrik && cpptRanap.Submit_Pediatrik === 1 ? (
                  <Row>
                    <Col>
                      <PediatricView data={cpptRanap.Pediatrik}/>
                    </Col>
                  </Row>
                ) : null
              }
            </td>
          </tr>
          <tr>
            <td>A</td>
            <td>{ cpptRanap.Data_A }</td>
          </tr>
          <tr>
            <td>P</td>
            <td>
              <Row>
                <Col>
                  {cpptRanap.Data_P}
                </Col>
              </Row>
              <Row>
                <Col>
                  {
                    cpptRanap && cpptRanap.Resep && cpptRanap.Resep.length !== 0 && (
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
                            cpptRanap.Resep.map((resep: IPrescription, key: number) => (
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
                    cpptRanap && cpptRanap.formFarmasi && cpptRanap.formFarmasi.Status_Tebus && cpptRanap.formFarmasi.Status_Tebus === '1' && (
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
                            {cpptRanap && cpptRanap.formFarmasi && cpptRanap.formFarmasi.Daftar_Tebus && Array.isArray(cpptRanap.formFarmasi.Daftar_Tebus) && cpptRanap.formFarmasi.Daftar_Tebus.length > 0 && cpptRanap.formFarmasi.Daftar_Tebus.map((item: IDaftarTebus, key: number) => (
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
            <td>{ cpptRanap.Waktu }</td>
          </tr>
          <tr>
            <td className="fw-bolder">Nama Petugas</td>
            <td>{ cpptRanap.Nama_Petugas }</td>
          </tr>
          <tr>
            <td className="fw-bolder">Unit</td>
            <td>{ cpptRanap.Unit }</td>
          </tr>
        </tbody>
      </Table>
      {
        !validate && (
          <Fragment>
            <div className="d-flex justify-content-around my-1">
              {
                cpptRanap && cpptRanap.TTD_Perawat_Cppt && cpptRanap.TTD_Perawat_Cppt !== '' && (
                  <Signature
                    label="Perawat"
                    type="picker"
                    persons={nurses}
                    disabled
                    initialImage={(cpptRanap && cpptRanap.TTD_Perawat_Cppt && cpptRanap.TTD_Perawat_Cppt !== '') ? cpptRanap.TTD_Perawat_Cppt : undefined}
                    additionalLabel={(cpptRanap) ? cpptRanap.Nama_Perawat_Cppt : undefined}
                    onSigned={(assigner: SignatureModel) => handleDoctorAssigned(assigner)} />
                )
              }
              {
                cpptRanap && cpptRanap.TTD_Dokter_Pengkaji && cpptRanap.TTD_Dokter_Pengkaji !== '' && (
                  <Signature
                    label="Dokter"
                    type="picker"
                    persons={doctors}
                    disabled
                    initialImage={(cpptRanap && cpptRanap.TTD_Dokter_Pengkaji && cpptRanap.TTD_Dokter_Pengkaji !== '') ? cpptRanap.TTD_Dokter_Pengkaji : undefined}
                    additionalLabel={(cpptRanap) ? cpptRanap.Nama_Dokter_Pengkaji : undefined}
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
                  initialImage={(cpptRanap && cpptRanap.TTD_Dokter_Pengkaji && cpptRanap.TTD_Dokter_Pengkaji !== '') ? cpptRanap.TTD_Dokter_Pengkaji : undefined}
                  additionalLabel={(cpptRanap) ? cpptRanap.Nama_Dokter_Pengkaji : undefined}
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
  )
}

export default CpptInpatientDetail;
