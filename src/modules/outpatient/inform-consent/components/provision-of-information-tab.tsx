import { Button, Col, FormGroup, Input, Label, TabContent, TabPane } from "reactstrap";
import { useEffect, useState } from "react";
import { ProvisionOfInformationFormModel } from "../models/inform-consent.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import diagnose from "../consts/diagnose";
import templates from "../consts/templates";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const ProvisionOfInformationTab = (props: { data: ProvisionOfInformationFormModel, register: any, setValue: any, activeTab: string }) => {
  const { data, register, setValue, activeTab } = props;
  const { doctors } = useAppSelector(state => state.doctor);
  const { userData } = useAppSelector(state => state.auth);
  const [customDiagnose, setCustomDiagnose] = useState(!!(data.Diagnosis && data.Diagnosis === 'custom'))
  const [waliName, setWaliName] = useState(!!(data.Penerima_Informasi && data.Penerima_Informasi === 'Wali'))

  useEffect(() => {
    if (doctors) {
      setValue('dokter-pelaksana', data.ID_Dokter_Pelaksana ? data.ID_Dokter_Pelaksana : '')
      setValue('pemberi-informasi', data.ID_Pemberi_Informasi ? data.ID_Pemberi_Informasi : '')
    }
  }, [doctors])

  const handleChangeDiagnose = (e: any) => {
    if (e.target.value === 'custom') {
      setCustomDiagnose(true);
    } else {
      setCustomDiagnose(false);
    }

    const selectedDiagnose = templates.find((item: any) => item.id === e.target.value);
    if (selectedDiagnose) {
      setValue('diagnosis', selectedDiagnose.diagnose_wd_dd);
      setValue('dasar-diagnosis', selectedDiagnose.base_diagnose);
      setValue('tindakan-kedokteran', selectedDiagnose.doctor_action);
      setValue('indikasi-tindakan', selectedDiagnose.action_indication);
      setValue('tata-cara', selectedDiagnose.how_to);
      setValue('tujuan', selectedDiagnose.goals);
      setValue('risiko', selectedDiagnose.risk);
      setValue('komplikasi', selectedDiagnose.complication);
      setValue('prognosis', selectedDiagnose.prognosis);
      setValue('alternatif-risiko', selectedDiagnose.alternative_risk);
      setValue('hal-lain', selectedDiagnose.other_things);
    } else {
      setValue('diagnosis', '');
      setValue('dasar-diagnosis', '');
      setValue('tindakan-kedokteran', '');
      setValue('indikasi-tindakan', '');
      setValue('tata-cara', '');
      setValue('tujuan', '');
      setValue('risiko', '');
      setValue('komplikasi', '');
      setValue('prognosis', '');
      setValue('alternatif-risiko', '');
      setValue('hal-lain', '');
    }
  }

  const handlePatientSigned = (image: string) => {
    setValue('ttd-pasien', image);
  }

  const handleOfficerSigned = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue('ttd-dokter-pelaksana', image.Signature);
      setValue('dokter_pelaksana_informasi', image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue('ttd-dokter-pelaksana', image.Signature);
      setValue('dokter_pelaksana_informasi', image.ID_Karyawan);
    }
  }

  const handleWaliName = (e: any) => {
    if (e.target.value === '2') {
      setWaliName(true);
    } else {
      setWaliName(false);
    }
  }

  return (
    <TabContent {...{ activeTab }}>
      <TabPane tabId='1'>
        <div className="border-dark mt-2 p-1">
          <Label className="fs-5" >Pemberian Informasi</Label>
          <hr/>
          <FormGroup className="form-group align-items-center" row>
            <Col md='2'>
              <Label>Dokter Pelaksana Tindakan*</Label>
            </Col>
            <Col md='4'>
              <Input
                className="mt-1"
                type="select"
                id="dokter-pelaksana"
                name="dokter-pelaksana"
                innerRef={register()}
              >
                <option value="" disabled={true}>--</option>
                {
                  doctors && doctors.map((item: any, key: number) => {
                    return <option value={item.ID_Karyawan} key={key}>{ item.Nama }</option>;
                  })
                }
              </Input>
            </Col>
          </FormGroup>
          <FormGroup className="form-group align-items-center" row>
            <Col md='2'>
              <Label>Pemberi Informasi*</Label>
            </Col>
            <Col md='4'>
              <Input
                className="mt-1"
                type="select"
                id="pemberi-informasi"
                name="pemberi-informasi"
                innerRef={register()}
              >
                <option value="" disabled={true}>--</option>
                {
                  doctors && doctors.map((item: any, key: number) => {
                    return <option value={item.ID_Karyawan} key={key}>{ item.Nama }</option>;
                  })
                }
              </Input>
            </Col>
          </FormGroup>
          <FormGroup className="form-group align-items-center mt-1" row>
            <Col md='2'>
              <Label>Penerima Informasi*</Label>
            </Col>
            <Col sm='2'>
              <Input
                type="radio"
                className="me-1"
                name="penerima-informasi"
                onChange={(e) => handleWaliName(e)}
                defaultChecked={data?.Penerima_Informasi === 'Pasien'}
                value='1'
                innerRef={register({ required: true })}
              />
              <Label>Pasien</Label>
            </Col>
            <Col sm='2'>
              <Input
                type="radio"
                className="me-1"
                name="penerima-informasi"
                onChange={(e) => handleWaliName(e)}
                defaultChecked={data?.Penerima_Informasi === 'Wali'}
                value='2'
                innerRef={register({ required: true })}
              />
              <Label>Wali</Label>
            </Col>
            {
              waliName && (
                <Col sm='3'>
                  <Input
                    type="text"
                    placeholder="Nama Wali"
                    name="nama_wali"
                    innerRef={register({ required: false })}
                  />
                </Col>
              )
            }
          </FormGroup>
        </div>
        <div className="border-dark mt-2 p-1">
          <FormGroup className="form-group align-items-center" row>
            <Col md='5'>
              <Label>Template</Label>
            </Col>
            <Col md='4'>
              <Input
                type="select"
                id='nama_template'
                name="nama_template"
                onChange={(e) => handleChangeDiagnose(e)}
                innerRef={register()}
              >
                <option value="">--</option>
                {
                  diagnose.map((item: string, key: number) => (
                    <option key={key} value={item}>{item}</option>
                  ))
                }
              </Input>
              {
                customDiagnose && (
                  <Input
                    type="textarea"
                    className="mt-1"
                    name="diagnosis-custom"
                    innerRef={register({ required: false })}
                  />
                )
              }
            </Col>
            <Col md='2' className="align-items-center">

            </Col>
          </FormGroup>
          <FormGroup className="form-group align-items-center mt-2" row>
            <Col md='5'>
              <Label>1. Diagnosis (WD && DD)*</Label>
            </Col>
            <Col md='4'>
              <Input
                type="textarea"
                name="diagnosis"
                innerRef={register({ required: false })}
              />
            </Col>
            <Col md='2' className="align-items-center">
              <Input
                type="checkbox"
                className="me-1"
                name="diagnosis-check"
                value='1'
                defaultChecked={!!(data.Diagnosis_Check && data.Diagnosis_Check === '1')}
                innerRef={register({ required: false })}
              />
              <Label>Tandai</Label>
            </Col>
          </FormGroup>
          <FormGroup className="form-group align-items-center mt-2" row>
            <Col md='5'>
              <Label>2. Dasar Diagnosis*</Label>
            </Col>
            <Col md='4'>
              <Input
                type="textarea"
                name="dasar-diagnosis"
                innerRef={register({ required: false })}
              />
            </Col>
            <Col md='2' className="align-items-center">
              <Input
                type="checkbox"
                className="me-1"
                name="dasar-diagnosis-check"
                value='1'
                defaultChecked={!!(data.Dasar_Diagnosis_Check && data.Dasar_Diagnosis_Check === '1')}
                innerRef={register({ required: false })}
              />
              <Label>Tandai</Label>
            </Col>
          </FormGroup>
          <FormGroup className="form-group align-items-center mt-2" row>
            <Col md='5'>
              <Label>3. Tindakan Kedokteran*</Label>
            </Col>
            <Col md='4'>
              <Input
                type="textarea"
                name="tindakan-kedokteran"
                innerRef={register({ required: false })}
              />
            </Col>
            <Col md='2' className="align-items-center">
              <Input
                type="checkbox"
                className="me-1"
                name="tindakan-kedokteran-check"
                value='1'
                defaultChecked={!!(data.Tindakan_Kedokteran_Check && data.Tindakan_Kedokteran_Check === '1')}
                innerRef={register({ required: false })}
              />
              <Label>Tandai</Label>
            </Col>
          </FormGroup>
          <FormGroup className="form-group align-items-center mt-2" row>
            <Col md='5'>
              <Label>4. Indikasi Tindakan*</Label>
            </Col>
            <Col md='4'>
              <Input
                type="textarea"
                name="indikasi-tindakan"
                innerRef={register({ required: false })}
              />
            </Col>
            <Col md='2' className="align-items-center">
              <Input
                type="checkbox"
                className="me-1"
                name="indikasi-tindakan-check"
                value='1'
                defaultChecked={!!(data.Indikasi_Tindakan_Check && data.Indikasi_Tindakan_Check === '1')}
                innerRef={register({ required: false })}
              />
              <Label>Tandai</Label>
            </Col>
          </FormGroup>
          <FormGroup className="form-group align-items-center mt-2" row>
            <Col md='5'>
              <Label>5. Tata Cara*</Label>
              <div>
                <Input
                  type="checkbox"
                  className="me-1"
                  name="tata-cara-tipe-sedasi"
                  value='1'
                  defaultChecked={!!(data.Tata_Cara_Tipe_Sedasi && data.Tata_Cara_Tipe_Sedasi)}
                  innerRef={register({ required: false })}
                />
                <Label>Tipe Sedasi / Anestesi</Label>
              </div>
              <div>
                <Input
                  type="checkbox"
                  className="me-1"
                  name="tata-cara-uraian-singkat"
                  value='1'
                  defaultChecked={!!(data.Tata_Cara_Uraian_Singkat && data.Tata_Cara_Uraian_Singkat)}
                  innerRef={register({ required: false })}
                />
                <Label>Uraian Singkat Prosedur Dan Tahapan Yang Penting</Label>
              </div>
            </Col>
            <Col md='4'>
              <Input
                type="textarea"
                name="tata-cara"
                innerRef={register({ required: false })}
              />
            </Col>
            <Col md='2' className="align-items-center">
              <Input
                type="checkbox"
                className="me-1"
                name="tata-cara-check"
                value='1'
                defaultChecked={!!(data.Indikasi_Tindakan_Check && data.Indikasi_Tindakan_Check === '1')}
                innerRef={register({ required: false })}
              />
              <Label>Tandai</Label>
            </Col>
          </FormGroup>
          <FormGroup className="form-group align-items-center mt-2" row>
            <Col md='5'>
              <Label>6. Tujuan*</Label>
            </Col>
            <Col md='4'>
              <Input
                type="textarea"
                name="tujuan"
                innerRef={register({ required: false })}
              />
            </Col>
            <Col md='2' className="align-items-center">
              <Input
                type="checkbox"
                className="me-1"
                name="tujuan-check"
                value='1'
                defaultChecked={!!(data.Tujuan_Check && data.Tujuan_Check === '1')}
                innerRef={register({ required: false })}
              />
              <Label>Tandai</Label>
            </Col>
          </FormGroup>
          <FormGroup className="form-group align-items-center mt-2" row>
            <Col md='5'>
              <Label>7. Risiko*</Label>
            </Col>
            <Col md='4'>
              <Input
                type="textarea"
                name="risiko"
                innerRef={register({ required: false })}
              />
            </Col>
            <Col md='2' className="align-items-center">
              <Input
                type="checkbox"
                className="me-1"
                name="risiko-check"
                value='1'
                defaultChecked={!!(data.Risiko_Check && data.Risiko_Check === '1')}
                innerRef={register({ required: false })}
              />
              <Label>Tandai</Label>
            </Col>
          </FormGroup>
          <FormGroup className="form-group align-items-center mt-2" row>
            <Col md='5'>
              <Label>8. Komplikasi*</Label>
            </Col>
            <Col md='4'>
              <Input
                type="textarea"
                name="komplikasi"
                innerRef={register({ required: false })}
              />
            </Col>
            <Col md='2' className="align-items-center">
              <Input
                type="checkbox"
                className="me-1"
                name="komplikasi-check"
                value='1'
                defaultChecked={!!(data.Komplikasi_Check && data.Komplikasi_Check === '1')}
                innerRef={register({ required: false })}
              />
              <Label>Tandai</Label>
            </Col>
          </FormGroup>
          <FormGroup className="form-group align-items-center mt-2" row>
            <Col md='5'>
              <Label>9. Prognosis*</Label>
            </Col>
            <Col md='4'>
              <Input
                type="textarea"
                name="prognosis"
                innerRef={register({ required: false })}
              />
            </Col>
            <Col md='2' className="align-items-center">
              <Input
                type="checkbox"
                className="me-1"
                name="prognosis-check"
                value='1'
                defaultChecked={!!(data.Prognosis_Check && data.Prognosis_Check === '1')}
                innerRef={register({ required: false })}
              />
              <Label>Tandai</Label>
            </Col>
          </FormGroup>
          <FormGroup className="form-group align-items-center mt-2" row>
            <Col md='5'>
              <Label>10. Alternatif & Risiko*</Label>
              <div>
                <Input
                  type="checkbox"
                  className="me-1"
                  name="alternatif-risiko-pilihan-pengobatan"
                  value='1'
                  defaultChecked={!!(data.Alternatif_Risiko_Pilihan_Pengobatan && data.Alternatif_Risiko_Pilihan_Pengobatan)}
                  innerRef={register({ required: false })}
                />
                <Label>Pilihan Pengobatan / Penatalaksanaan</Label>
              </div>
            </Col>
            <Col md='4'>
              <Input
                type="textarea"
                name="alternatif-risiko"
                innerRef={register({ required: false })}
              />
            </Col>
            <Col md='2' className="align-items-center">
              <Input
                type="checkbox"
                className="me-1"
                name="alternatif-resiko-check"
                value='1'
                defaultChecked={!!(data.Alternatif_Resiko_Check && data.Alternatif_Resiko_Check === '1')}
                innerRef={register({ required: false })}
              />
              <Label>Tandai</Label>
            </Col>
          </FormGroup>
          <FormGroup className="form-group align-items-center mt-2" row>
            <Col md='5'>
              <Label>11. Hal lain yang akan dilakukan untuk menyelamatkan pasien*</Label>
              <div>
                <Input
                  type="checkbox"
                  className="me-1"
                  name="hal-lain-perluasan-tindakan"
                  value='1'
                  defaultChecked={!!(data.Hal_Lain_Perluasan_Tindakan && data.Hal_Lain_Perluasan_Tindakan)}
                  innerRef={register({ required: false })}
                />
                <Label>Perluasan Tindakan</Label>
              </div>
              <div>
                <Input
                  type="checkbox"
                  className="me-1"
                  name="hal-lain-konsultasi"
                  value='1'
                  defaultChecked={!!(data.Hal_Lain_Konsultasi && data.Hal_Lain_Konsultasi)}
                  innerRef={register({ required: false })}
                />
                <Label>Konsultasi Selama Tindakan Resusitasi</Label>
              </div>
            </Col>
            <Col md='4'>
              <Input
                type="textarea"
                name="hal-lain"
                innerRef={register({ required: false })}
              />
            </Col>
            <Col md='2' className="align-items-center">
              <Input
                type="checkbox"
                className="me-1"
                name="hal-lain-check"
                value='1'
                defaultChecked={!!(data.Hal_Lain_Check && data.Hal_Lain_Check === '1')}
                innerRef={register({ required: false })}
              />
              <Label>Tandai</Label>
            </Col>
          </FormGroup>
          <FormGroup className="form-group align-items-center mt-2" row>
            <Col>
              <div className="d-flex justify-content-around my-0">
                <Signature
                  label="Dokter Pelaksana"
                  additionalLabel={(data.Nama_Dokter_Pelaksana && data.Nama_Dokter_Pelaksana !== '') ? data.Nama_Dokter_Pelaksana : undefined}
                  type="picker"
                  initialImage={(data.TTD_Dokter_Pelaksana && data.TTD_Dokter_Pelaksana !== '' && !data.TTD_Dokter_Pelaksana.includes('null')) ? data.TTD_Dokter_Pelaksana : undefined}
                  defaultPerson={(userData && userData.id) ? userData.id : ''}
                  persons={doctors}
                  unit='dokter'
                  onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                    if (isFormDoctor) {
                      handleOfficerSigned(assigner, isFormDoctor)
                    }
                    if (!isFormDoctor) {
                      handleOfficerSigned(assigner)
                    }
                  }}
                />
                <Input
                  type="hidden"
                  name="ttd-dokter-pelaksana"
                  innerRef={register()}
                />
                <Input
                  type="hidden"
                  name="dokter_pelaksana_informasi"
                  innerRef={register()}
                />
              </div>
            </Col>
            <Col>
              <div className="d-flex justify-content-around my-0">
                <Signature
                  label="Pasien"
                  type="drawer"
                  formName='rawat-jalan/pemberian-informasi'
                  component='ttd_pasien'
                  initialImage={(data.TTD_Pasien && data.TTD_Pasien !== '' && !data.TTD_Pasien.includes('null')) ? data.TTD_Pasien : undefined}
                  onSigned={(image: string) => handlePatientSigned(image)}
                />
                <Input
                  type="hidden"
                  name="ttd-pasien"
                  innerRef={register()}
                />
              </div>
            </Col>
          </FormGroup>
        </div>
      </TabPane>
    </TabContent>
  )
}

export default ProvisionOfInformationTab;
