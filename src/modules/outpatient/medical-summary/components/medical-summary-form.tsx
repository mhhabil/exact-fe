import { Button, Col, Form, FormGroup, Input, Label, Row, Table } from "reactstrap";
import { Down, Up, UpdateResumeMedisPdf } from "../requests/pdf-summary-model-request";
import { fetchMedicalSummary, fetchMedicalSummaryPdf, handlePdf } from "../stores/medical-summary.store";
import { useEffect, useState } from "react";
import { AppRequest } from "@src/shared/request";
import { DateTimeConverter } from "@src/shared/datetime-converter";
import { FindPdfRequest } from "@src/shared/pdf";
import { IPrescription } from "../../doctor-preliminary-study/models/doctor-preliminary-study.model";
import { MedicalSummaryModel } from "../models/medical-summary-model";
import { MedicalSummaryService } from "../services";
import { SubmitButton } from "@src/shared/button";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useForm } from "react-hook-form";
import { useWarnIfUnsavedChanges } from "@src/shared/alert";

const MedicalSummaryForm = (props: { data: MedicalSummaryModel}) => {
  const { data } = props;
  const [processing, setProcessing] = useState(false);
  const dispatch = useAppDispatch();
  const { treatment } = useAppSelector(state => state.patient);

  const { pdf } = useAppSelector(state => state.medicalSummaryStore);
  const [pdfData, setPdfData] = useState<any | undefined>(undefined);

  useEffect(() => {
    if (treatment) {
      dispatch(fetchMedicalSummaryPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-jalan_resume-medis' })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])

  const { register, handleSubmit, errors, setValue, reset, formState, watch } = useForm<any>({
    mode: 'onChange',
  });

  const { isDirty } = formState;

  useWarnIfUnsavedChanges(isDirty, () => {
    return confirm(`Perubahan data belum disimpan. Apakah anda yakin ingin melanjutkan ke halaman lain?`);
  })

  const handleProcessing = () => {
    setProcessing(true);
  }

  const getResep = (resep: any) => {
    const namaresep = resep && Array.isArray(resep) ? resep : [] 
    const newStringResep = namaresep.map((item: any) => {
      return `${item.Nama_Obat} - ${item.Kode_AturanPakai}\n`
    })
    return newStringResep.join('');
  }

  const handleSubmitForm = () => {
    if (!treatment) {
      return;
    }
    const rawUp = data.encounters ?? [];
    const up = rawUp.map((encounter) => new Up({
      date: encounter.Tgl_Berobat ?? '',
      dokter_rawat: encounter.Nama_Dokter ?? '',
      nama_tindakan: encounter.Nama_Paket_Operasi ?? '',
    }))
    const rawDown = data.records ?? [];
    const down = rawDown.map((records) => new Down({
      tgl: records.Tanggal ?? '',
      nama_dokter: records.Nama_Dokter ?? '',
      diagnosa: records.Diagnosa ?? '',
      terapi: `${getResep(records?.Resep)}`,
      keterangan: `${records?.Terapi}\n${records?.Anjuran}`,

    }))
    setProcessing(true);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateResumeMedisPdf.createFromJson({up, down, ...appRequest, 'pasien.Jenis_Kelamin': treatment?.Pasien?.Jenis_Kelamin ?? '', 'pasien.Nama': treatment?.Pasien?.Nama ?? '', 'pasien.Tgl_Lahir': treatment?.Pasien?.Tgl_Lahir ?? '', 'pasien.Umur':  treatment?.Pasien?.Umur ?? '', nik: treatment?.Pasien?.NIK ?? ''});
    dispatch(handlePdf(undefined));
    MedicalSummaryService().update(params).then((resp) => {
      dispatch(fetchMedicalSummaryPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-jalan_resume-medis' })));
      setProcessing(false);
      dispatch(fetchMedicalSummary(appRequest));
    }).catch((errors) => {
      console.error(errors);
    })
  }

  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <FormGroup className="form-group" row>
          <FormGroup>
            <Row>
              <Col md="12">
                <Table responsive bordered>
                  <thead>
                    <tr className="fw-bolder text-center">
                      <td>No</td>
                      <td>
                        <div className='d-flex'>
                  Tanggal
                        </div>
                      </td>
                      <td>Dokter Yang Merawat</td>
                      <td>Rawat Inap/ Riwayat Operasi / Tindakan</td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data && data.encounters && Array.isArray(data.encounters) && (
                        data.encounters.map((row, key) => {
                          return (
                            <tr key={key}>
                              <td>{`${key + 1}`}</td>
                              <td>
                                <pre className="bg-white p-0">{ `${DateTimeConverter.convertToNormalDate(row.Tgl_Berobat)}` }</pre>
                              </td>
                              <td>
                                <pre className="bg-white p-0">{ `${row.Nama_Dokter}` }</pre>
                              </td>
                              <td>
                                <pre className="bg-white p-0">{ `${row.Nama_Paket_Operasi}` }</pre>
                              </td>
                            </tr>
                          )
                        })
                      )
                    }
                  </tbody>
                </Table>
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Row className="mt-2">
              <Col md="12">
                <Table responsive bordered>
                  <thead>
                    <tr className="fw-bolder text-center">
                      <td>No</td>
                      <td>Tanggal</td>
                      <td>Nama Dokter</td>
                      <td>Diagnosa</td>
                      <td>Terapi</td>
                      <td style={{width:'40%'}}>Keterangan</td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data && data.records && Array.isArray(data.records) && (
                        data.records.map((row, key) => {
                          return (
                            <tr key={key}>
                              <td>{`${key + 1}`}</td>
                              <td>
                                <pre className="bg-white p-0">{ `${DateTimeConverter.convertToDateTime(row.Tanggal)}` }</pre>
                              </td>
                              <td>
                                <pre className="bg-white p-0">{ `${row.Nama_Dokter}` }</pre>
                              </td>
                              <td>
                                <pre className="bg-white p-0">{ `${row.Diagnosa}` }</pre>
                              </td>
                              <td>
                                {
                                  row.Resep && Array.isArray(row.Resep) && row.Resep.map((val: IPrescription, key: number) => (
                                    <pre key={key} className='p-0 bg-white'>{`${val.Nama_Obat} - ${val.Kode_AturanPakai}\n`}</pre>
                                  ))
                                }
                              </td>
                              <td>
                                <pre className="bg-white p-0">{ `${row.Terapi}\n${row.Anjuran}` }</pre>
                              </td>
                            </tr>
                          )
                        })
                      )
                    }
                  </tbody>
                </Table>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup className="d-flex mb-0 justify-content-center mt-2">
            <SubmitButton
              label="Simpan"
              buttonColor='primary'
              spinnerStyle={{ width: '1rem', height: '1rem' }}
              spinnerColor='light'
              processing={processing}
            />
            {
              pdfData && Array.isArray(pdfData) && pdfData.length > 0 && (
                <a color='success' href={`${pdfData[0].URL}`} target="_blank" rel="noreferrer">
                  <Button className='me-1' color='success' type='button'>
                Cetak
                  </Button>
                </a>
              )
            }
            {
              (!pdfData || (pdfData && Array.isArray(pdfData) && pdfData.length === 0)) && (
                <Button className='me-1' color='success' type='button' disabled>
              Cetak
                </Button>
              )
            }
          </FormGroup>

        </FormGroup>
      </Form>
    </>
  );
}
export default MedicalSummaryForm;
