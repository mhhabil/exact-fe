import { Button, Col, Label, Row, Table } from "reactstrap";
import { CPPTPDFRequest, RootPDFRequest } from "@src/shared/request/requests/cppt-pdf.request";
import { Fragment, useState } from "react";
import { fetchCpptNutritionDayPdf, fetchCpptNutritionPdf, handlePdf, handlePdfAll } from "../stores/cppt-nutrition.store";
import { AppRequest } from "@src/shared/request";
import { CpptNutritionModel } from "../models/cppt-nutrition.model";
import { CpptNutritionService } from "../services";
import { CpptRoService } from "@src/modules/ro/cppt/services";
import { FindPdfRequest } from "@src/shared/pdf";
import Image from 'next/image';
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { ValidateCpptRoRequest } from "@src/modules/ro/cppt/requests/validate-cppt-ro.request";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const CpptNutritionDetail = (props: { cpptGizi: CpptNutritionModel | undefined, validate?: boolean, onSuccessValidate?: any }) => {
  const { cpptGizi, validate = false, onSuccessValidate } = props;

  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const { treatment } = useAppSelector(state => state.patient);

  const dispatch = useAppDispatch();

  const [doctorSignature, setDoctorSignature] = useState<SignatureModel | undefined>(cpptGizi && cpptGizi.Id_Dokter_Pengkaji ? { Last_Updated: '', PIN: '', Signature: cpptGizi.TTD_Dokter_Pengkaji, ID_Karyawan: cpptGizi.Id_Dokter_Pengkaji } : undefined);

  if (!cpptGizi) {
    return null;
  }

  const handleDoctorAssigned = (assigner: SignatureModel) => {
    if (assigner) {
      setDoctorSignature(assigner);
    }
  }

  const handleSubmitValidate = () => {
    if (!treatment || !doctorSignature || !cpptGizi) {
      alert('Parameter tidak lengkap');
      return;
    }
    const appRequest = AppRequest.createFromStore(treatment);
    const request = ValidateCpptRoRequest.createFromJson({...appRequest, ID: cpptGizi?.ID ?? '', dokter_dpjp: doctorSignature?.ID_Karyawan ?? '', emr_id: cpptGizi.EMR_ID });
    CpptRoService().validate(request)
      .then(() => {
        dispatch(handlePdfAll(undefined));
        if (cpptGizi.EMR_ID === treatment.EMR_ID) {
          dispatch(handlePdf(undefined));
          CpptNutritionService().showDay({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'day');
            CpptNutritionService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptNutritionDayPdf(FindPdfRequest.createFromJson({
                emr_id: treatment.EMR_ID,
                form_name: 'cppt_day_v3',
              })))
            }).catch((err) => {
              console.log(err)
            })
          });
        }
        CpptNutritionService().show({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
          const { records } = resp.data.data;
          const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
          const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
          CpptNutritionService().pdfNew(pdfParams).then(() => {
            dispatch(fetchCpptNutritionPdf(FindPdfRequest.createFromJson({
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
            <td>A</td>
            <td>{ cpptGizi.Data_A }</td>
          </tr>
          <tr>
            <td>D</td>
            <td>
              { cpptGizi.Data_D }
            </td>
          </tr>
          <tr>
            <td>I</td>
            <td>
              { cpptGizi.Data_I }
            </td>
          </tr>
          <tr>
            <td>M</td>
            <td>{ cpptGizi.Data_M }</td>
          </tr>
          <tr>
            <td>E</td>
            <td>{ cpptGizi.Data_E }</td>
          </tr>
          <tr>
            <td>Instruksi PPA</td>
            <td>{ cpptGizi.Instruksi_PPA }</td>
          </tr>
        </tbody>
      </Table>
      <Table className="mb-1">
        <tbody>
          <tr>
            <td className="fw-bolder">Waktu</td>
            <td>{ cpptGizi.Waktu }</td>
          </tr>
          <tr>
            <td className="fw-bolder">Nama Petugas</td>
            <td>{ cpptGizi.Nama_Petugas }</td>
          </tr>
          <tr>
            <td className="fw-bolder">Unit</td>
            <td>{ cpptGizi.Unit }</td>
          </tr>
        </tbody>
      </Table>
      {
        !validate && (
          <Fragment>
            <div className="d-flex justify-content-around my-1">
              {
                cpptGizi && cpptGizi.TTD_Perawat_Cppt && cpptGizi.TTD_Perawat_Cppt !== '' && (
                  <Signature
                    label="Perawat"
                    type="picker"
                    persons={nurses}
                    disabled
                    initialImage={(cpptGizi && cpptGizi.TTD_Perawat_Cppt && cpptGizi.TTD_Perawat_Cppt !== '') ? cpptGizi.TTD_Perawat_Cppt : undefined}
                    additionalLabel={(cpptGizi) ? cpptGizi.Nama_Perawat_Cppt : undefined}
                    onSigned={(assigner: SignatureModel) => handleDoctorAssigned(assigner)} />
                )
              }
              {
                cpptGizi && cpptGizi.TTD_Dokter_Pengkaji && cpptGizi.TTD_Dokter_Pengkaji !== '' && (
                  <Signature
                    label="Dokter"
                    type="picker"
                    persons={doctors}
                    disabled
                    initialImage={(cpptGizi && cpptGizi.TTD_Dokter_Pengkaji && cpptGizi.TTD_Dokter_Pengkaji !== '') ? cpptGizi.TTD_Dokter_Pengkaji : undefined}
                    additionalLabel={(cpptGizi) ? cpptGizi.Nama_Dokter_Pengkaji : undefined}
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
                  initialImage={(cpptGizi && cpptGizi.TTD_Dokter_Pengkaji && cpptGizi.TTD_Dokter_Pengkaji !== '') ? cpptGizi.TTD_Dokter_Pengkaji : undefined}
                  additionalLabel={(cpptGizi) ? cpptGizi.Nama_Dokter_Pengkaji : undefined}
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

export default CpptNutritionDetail;
