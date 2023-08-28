import { Button, Col, Row, Table } from 'reactstrap';
import { Fragment, useEffect, useState } from 'react';
import { CpptRoModel } from '@modules/ro/cppt/models/cppt-ro.model';
import { Signature } from '@shared/signature/components';
import { SignatureModel } from '@shared/signature/models/signature.model';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { AppRequest } from '@shared/request';
import { ValidateCpptRoRequest } from '@modules/ro/cppt/requests/validate-cppt-ro.request';
import { CpptRoService } from '@modules/ro/cppt/services';
import PreliminaryStudyDetail from '@modules/ro/preliminary-study/components/preliminary-study-detail';
import { DataO } from '@src/shared/template';
import { fetchCpptRoDayPdf, fetchCpptRoPdf, handlePdf, handlePdfAll } from '../stores/cppt-ro.store';
import { CPPTPDFRequest, RootPDFRequest } from '@src/shared/request/requests/cppt-pdf.request';
import { FindPdfRequest } from '@src/shared/pdf';

const CpptRoDetail = (props: { ro: CpptRoModel | undefined, validate?: boolean, onSuccessValidate?: any }) => {

  const { ro, validate = false, onSuccessValidate} = props;

  const { doctors } = useAppSelector(state => state.doctor);
  const { treatment } = useAppSelector(state => state.patient);
  const dispatch = useAppDispatch();

  const [doctorSignatureLabel, setDoctorSignatureLabel] = useState('Dokter DPJP');
  const [doctorSignature, setDoctorSignature] = useState<SignatureModel | undefined>(ro && ro.Id_Dokter_Pengkaji ? { Last_Updated: '', PIN: '', Signature: ro.TTD_Dokter_Pengkaji, ID_Karyawan: ro.Id_Dokter_Pengkaji } : undefined);

  if (!ro) {
    return null;
  }
  const handleDoctorAssigned = (assigner: SignatureModel) => {
    if (assigner) {
      setDoctorSignature(assigner);
    }
  }

  const handleSubmitValidate = () => {
    if (!treatment || !doctorSignature || !ro) {
      alert('Parameter tidak lengkap');
      return;
    }
    const appRequest = AppRequest.createFromStore(treatment);
    const request = ValidateCpptRoRequest.createFromJson({...appRequest, ID: ro?.ID ?? '', dokter_dpjp: doctorSignature?.ID_Karyawan ?? '', emr_id: ro.EMR_ID });
    CpptRoService().validate(request)
      .then(() => {
        dispatch(handlePdfAll(undefined));
        if (ro.EMR_ID === treatment.EMR_ID) {
          dispatch(handlePdf(undefined));
          CpptRoService().showDay({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
            const { records } = resp.data.data;
            const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
            const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'day');
            CpptRoService().pdfNew(pdfParams).then(() => {
              dispatch(fetchCpptRoDayPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'cppt_day_v3' })))
            }).catch((err) => {
              console.log(err)
            })
          })
        }
        CpptRoService().show({ ...appRequest, sort: 'ASC' }).then((resp: any) => {
          const { records } = resp.data.data;
          const pdfReqData = CPPTPDFRequest.createFromRecords(records, treatment);
          const pdfParams = RootPDFRequest.createPdfRequest(pdfReqData, treatment, 'all');
          CpptRoService().pdfNew(pdfParams).then(() => {
            dispatch(fetchCpptRoPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'cppt_v3' })));
          }).catch((err) => {
            console.log(err);
          });
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
            <td>{ ro.Data_S }</td>
          </tr>
          <tr>
            <td>O</td>
            <td>
              <DataO cpptData={ro}/>
            </td>
          </tr>
          <tr>
            <td>A</td>
            <td>{ ro.Data_A } | { ro.Data_A_Text }</td>
          </tr>
          <tr>
            <td>P</td>
            <td>{ ro.Data_P }</td>
          </tr>
          <tr>
            <td>Instruksi PPA</td>
            <td>{ ro.Instruksi_PPA }</td>
          </tr>
        </tbody>
      </Table>

      <Table className="mb-1">
        <tbody>
          <tr>
            <td className="fw-bolder">Waktu</td>
            <td>{ ro.Waktu }</td>
          </tr>
          <tr>
            <td className="fw-bolder">Nama Petugas</td>
            <td>{ ro.Nama_Petugas }</td>
          </tr>
          <tr>
            <td className="fw-bolder">Unit</td>
            <td>{ ro.Unit }</td>
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
                initialImage={(ro) ? ro.TTD_Perawat_Cppt : undefined}
                additionalLabel={(ro) ? ro.Nama_Perawat_Cppt : undefined}
                onSigned={(assigner: SignatureModel) => undefined} />
              <Signature
                label="Dokter"
                type="picker"
                persons={[]}
                disabled
                initialImage={(ro) ? ro.TTD_Dokter_Pengkaji : undefined}
                additionalLabel={(ro) ? ro.Nama_Dokter_Pengkaji : undefined}
                onSigned={(assigner: SignatureModel) => undefined} />
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
                  label={doctorSignatureLabel}
                  type="picker"
                  persons={doctors}
                  pickerTitle="Dokter DPJP"
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

export default CpptRoDetail;
