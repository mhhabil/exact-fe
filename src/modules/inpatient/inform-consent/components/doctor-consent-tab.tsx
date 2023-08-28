import { Col, FormGroup, Input, Label, TabContent, TabPane } from "reactstrap";
import { ISignatureModel, SignatureModel } from "@src/shared/signature/models/signature.model";
import { useEffect, useState } from "react";
// import { DoctorsConsentFormModel } from "../models/inform-consent.model";
import { ApprovalOrRefusalOfAnestheticActionModel } from "../models/approval-or-refusal-of-anesthetic-action-model";
import { Signature } from "@src/shared/signature/components";
import consentType from "../const/consent-type";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const DoctorsConsentInPatient = (props: { data: ApprovalOrRefusalOfAnestheticActionModel, register: any, setValue: any, activeTab: string }) => {
  const { data, register, setValue, activeTab } = props;
  const { treatment } = useAppSelector(state => state.patient);
  const { userData } = useAppSelector(state => state.auth);
  const { nurses } = useAppSelector(state => state.nurse);
  const [consent, setConsent] = useState(!!(data?.form?.Pernyataan_Id && data?.form?.Pernyataan_Id !== ''));
  const [signWali, setSignWali] = useState(!!(data?.form?.Tanda_Tangan && data?.form?.Tanda_Tangan === 'Wali'))
  const [toggleReadOnly, setToggleReadOnly] = useState(!!((data?.form?.Tanda_Tangan && data?.form?.Tanda_Tangan === 'Pasien')))
  const [dateLabel, setDateLabel] = useState<string>(data?.form?.Pernyataan_Id && data?.form?.Pernyataan_Id === '1' ? 'Tanggal & Jam Tindakan' : 'Tanggal & Jam')

  useEffect(() => {
    if (data?.form?.Tanda_Tangan) {
      if (data?.form?.Tanda_Tangan === 'Pasien') {
        setToggleReadOnly(true);
      }
      if (data?.form?.Tanda_Tangan === 'Wali') {
        setToggleReadOnly(false);
      }
    } else {
      setToggleReadOnly(true)
    }
  }, [data])

  const handleChangeConsent = (e: any) => {
    if (e.target.value !== '') {
      setConsent(true);
    } else {
      setConsent(false);
    }

    if (e.target.value === '1') {
      setDateLabel('Tanggal & Jam Tindakan');
    } else if (e.target.value === '0') {
      setDateLabel('Tanggal & Jam');
    }
  }

  const handleSignRadio = (e: any) => {
    if (e.target.value === '2') {
      setSignWali(true);
      setToggleReadOnly(false)
      setValue('tanda_tangan_nama', treatment?.Wali?.Nama);
      setValue('tanda_tangan_tgl_lahir', '');
      setValue('tanda_tangan_jk', '');
      setValue('tanda_tangan_telp', treatment?.Wali?.No_Telepon);
      setValue('tanda_tangan_alamat', treatment?.Wali?.Alamat);
    } else {
      setSignWali(false);
      setToggleReadOnly(true);
      setValue('tanda_tangan_nama', treatment?.Pasien?.Nama);
      setValue('tanda_tangan_tgl_lahir', treatment?.Pasien?.Tgl_Lahir);
      setValue('tanda_tangan_jk', treatment?.Pasien?.Jenis_Kelamin);
      setValue('tanda_tangan_telp', treatment?.Pasien?.No_Telepon);
      setValue('tanda_tangan_alamat', treatment?.Pasien?.Alamat);
    }
  }

  const handlePatientSigned = (image: string) => {
    setValue('tanda_tangan_pasien', image);
  }

  const handleWitnessSigned = (image: string) => {
    setValue('tanda_tangan_saksi_2', image);
  }

  const handleNurseSigned = (signature: ISignatureModel) => {
    setValue('id_saksi', signature.ID_Karyawan);
    setValue('tanda_tangan_saksi', signature.Signature);
  }

  return (
    <TabContent {...{ activeTab }}>
      <TabPane tabId='2'>
        <div className="border-dark mt-2 p-1">
          <Label className="fs-5">Identitas Pasien</Label>
          <hr/>
          <FormGroup className="form-group align-items-center" row>
            <Col md='2'>
              <Label>Nomor RM*</Label>
            </Col>
            <Col md='4'>
              <Input
                type="text"
                name="pasien_nomor_mr"
                readOnly
                innerRef={register({ required: false })}
              />
            </Col>
            <Col md='2'>
              <Label>Jenis Kelamin*</Label>
            </Col>
            <Col md='4'>
              <Input
                type="text"
                name="pasien_jk"
                readOnly
                innerRef={register({ required: false })}
              />
            </Col>
          </FormGroup>
          <FormGroup className="form-group align-items-center mt-1" row>
            <Col md='2'>
              <Label>Nama*</Label>
            </Col>
            <Col md='4'>
              <Input
                type="text"
                readOnly
                name="pasien_nama"
                innerRef={register({ required: false })}
              />
            </Col>
            <Col md='2'>
              <Label>Alamat*</Label>
            </Col>
            <Col md='4'>
              <Input
                type="textarea"
                readOnly
                name="pasien_alamat"
                innerRef={register({ required: false })}
              />
            </Col>
          </FormGroup>
          <FormGroup className="form-group align-items-center mt-2" row>
            <Col md='2'>
              <Label>Tindakan Operasi</Label>
            </Col>
            <Col md='4'>
              <Input
                type="textarea"
                name="pasien_tindakan_operasi"
                innerRef={register({ required: false })}
              />
            </Col>
          </FormGroup>
          <FormGroup className="form-group align-items-center mt-2" row>
            <Col md='2'>
              <Label>Jenis Pernyataan</Label>
            </Col>
            <Col md='4'>
              <Input
                type="select"
                readOnly
                name="pernyataan"
                onChange={(e) => handleChangeConsent(e)}
                innerRef={register()}
              >
                <option value="">--</option>
                {
                  consentType.map((item: any, key: number) => (
                    <option value={item.id} key={key}>{item.name}</option>
                  ))
                }
              </Input>
            </Col>
          </FormGroup>
          {
            consent && (
              <>
                <FormGroup className="form-group align-items-center mt-2" row>
                  <Col>
                    <Label>Yang bertanda tangan di bawah ini</Label>
                    <div className="d-flex">
                      <div className="me-1">
                        <Input
                          type="radio"
                          name="tanda_tangan_radio"
                          className="me-1"
                          onChange={(e) => handleSignRadio(e)}
                          value='1'
                          defaultChecked={!!(data?.form?.Tanda_Tangan && data?.form?.Tanda_Tangan === 'Pasien')}
                          innerRef={register({ required: true })}
                        />
                        <Label>Pasien</Label>
                      </div>
                      <div className="ms-1">
                        <Input
                          type="radio"
                          name="tanda_tangan_radio"
                          className="me-1"
                          onChange={(e) => handleSignRadio(e)}
                          value='2'
                          defaultChecked={!!(data?.form?.Tanda_Tangan && data?.form?.Tanda_Tangan === 'Wali')}
                          innerRef={register({ required: true })}
                        />
                        <Label>Keluarga / Wali</Label>
                      </div>
                    </div>
                  </Col>
                </FormGroup>
                <FormGroup className="form-group align-items-center mt-2" row>
                  <Col md='2'>
                    <Label>Nama*</Label>
                  </Col>
                  <Col md='6'>
                    <Input
                      type="text"
                      name="tanda_tangan_nama"
                      readOnly={toggleReadOnly}
                      innerRef={register({ required: false })}
                    />
                  </Col>
                </FormGroup>
                <FormGroup className="form-group align-items-center mt-2" row>
                  <Col md='2'>
                    <Label>Tanggal Lahir</Label>
                  </Col>
                  <Col md='6'>
                    <Input
                      type="date"
                      readOnly={toggleReadOnly}
                      id='tanda_tangan_tgl_lahir'
                      name='tanda_tangan_tgl_lahir'
                      innerRef={register({ required: false })}
                    />
                  </Col>
                </FormGroup>
                <FormGroup className="form-group align-items-center mt-2" row>
                  <Col md='2'>
                    <Label>Jenis Kelamin</Label>
                  </Col>
                  <Col md='6'>
                    <Input
                      type="text"
                      readOnly={toggleReadOnly}
                      name="tanda_tangan_jk"
                      innerRef={register({ required: false })}
                    />
                  </Col>
                </FormGroup>
                <FormGroup className="form-group align-items-center mt-2" row>
                  <Col md='2'>
                    <Label>No. Telp / HP*</Label>
                  </Col>
                  <Col md='6'>
                    <Input
                      type="text"
                      readOnly={toggleReadOnly}
                      name="tanda_tangan_telp"
                      innerRef={register({ required: false })}
                    />
                  </Col>
                </FormGroup>
                <FormGroup className="form-group align-items-center mt-2" row>
                  <Col md='2'>
                    <Label>Alamat*</Label>
                  </Col>
                  <Col md='6'>
                    <Input
                      type="text"
                      readOnly={toggleReadOnly}
                      name="tanda_tangan_alamat"
                      innerRef={register({ required: false })}
                    />
                  </Col>
                </FormGroup>
                {
                  signWali && (
                    <FormGroup className="form-group align-items-center mt-2" row>
                      <Col md='2'>
                        <Label>Pasien adalah</Label>
                      </Col>
                      <Col md='5'>
                        <Input
                          type="text"
                          name="tanda_tangan_hubungan"
                          innerRef={register({ required: false })}
                        />
                      </Col>
                      <Col md='1'>saya</Col>
                    </FormGroup>
                  )
                }
                <FormGroup className="form-group align-items-center mt-2" row>
                  <Col md='2'>
                    <Label>{dateLabel}</Label>
                  </Col>
                  <Col md='6'>
                    <Input
                      type="datetime-local"
                      id='pasien_tanggal'
                      defaultValue='pasien_tanggal'
                      name='pasien_tanggal'
                      innerRef={register({ required: false })}
                    />
                  </Col>
                </FormGroup>
                <FormGroup className="form-group align-items-center mt-2" row>
                  <Col md='2'>
                    <Label>Nama Saksi Keluarga</Label>
                  </Col>
                  <Col md='6'>
                    <Input
                      type="text"
                      name="nama-saksi-keluarga"
                      innerRef={register({ required: false })}
                    />
                  </Col>
                </FormGroup>
              </>
            )
          }
          <FormGroup className="form-group align-items-center mt-4" row>
            <Col>
              <div className="d-flex justify-content-around my-0">
                <Signature
                  label="Pasien/Wali"
                  type="drawer"
                  formName='rawat-jalan/persetujuan-tindakan-dokter'
                  component='ttd_pasien'
                  initialImage={(data?.form?.Tanda_Tangan_Pasien && data?.form?.Tanda_Tangan_Pasien !== '' && !data?.form?.Tanda_Tangan_Pasien.includes('null')) ? data?.form?.Tanda_Tangan_Pasien : undefined}
                  onSigned={(image: string) => handlePatientSigned(image)}
                />
                <Input
                  type="hidden"
                  name="tanda_tangan_pasien"
                  innerRef={register()}
                />
              </div>
            </Col>
            <Col>
              <div className="d-flex justify-content-around my-0">
                <Signature
                  label="Saksi Keluarga"
                  type="drawer"
                  formName='rawat-jalan/persetujuan-tindakan-dokter'
                  component='ttd_saksi_keluarga'
                  initialImage={(data?.form?.Tanda_Tangan_Saksi_2 && data?.form?.Tanda_Tangan_Saksi_2 !== '' && !data?.form?.Tanda_Tangan_Saksi_2.includes('null')) ? data?.form?.Tanda_Tangan_Saksi_2 : undefined}
                  onSigned={(image: string) => handleWitnessSigned(image)}
                />
                <Input
                  type="hidden"
                  name="tanda-tangan-saksi-2"
                  innerRef={register()}
                />
              </div>
            </Col>
            <Col>
              <div className="d-flex justify-content-around my-0">
                <Signature
                  label="Saksi"
                  additionalLabel={(data?.form?.Nama_Saksi && data?.form?.Nama_Saksi !== '') ? data?.form?.Nama_Saksi : undefined}
                  type="picker"
                  initialImage={(data?.form?.Tanda_Tangan_Saksi && data?.form?.Tanda_Tangan_Saksi !== '' && !data?.form?.Tanda_Tangan_Saksi.includes('null')) ? data?.form?.Tanda_Tangan_Saksi : undefined}
                  defaultPerson={(userData && userData.id) ? userData.id : ''}
                  persons={nurses}
                  onSigned={(assigner: SignatureModel) => handleNurseSigned(assigner)}
                />
                <Input
                  type="hidden"
                  name="tanda_tangan_saksi"
                  innerRef={register()}
                />
                <Input
                  type="hidden"
                  name="id_saksi"
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

export default DoctorsConsentInPatient;
