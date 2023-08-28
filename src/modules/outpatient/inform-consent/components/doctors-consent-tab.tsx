import { Col, FormGroup, Input, Label, TabContent, TabPane } from "reactstrap";
import { ISignatureModel, SignatureModel } from "@src/shared/signature/models/signature.model";
import { useEffect, useState } from "react";
import { DoctorsConsentFormModel } from "../models/inform-consent.model";
import { Signature } from "@src/shared/signature/components";
import consentType from "../consts/consentType";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const DoctorsConsentTab = (props: { data: DoctorsConsentFormModel, register: any, setValue: any, activeTab: string }) => {
  const { data, register, setValue, activeTab } = props;
  const { treatment } = useAppSelector(state => state.patient);
  const { userData } = useAppSelector(state => state.auth);
  const { nurses } = useAppSelector(state => state.nurse);
  const [consent, setConsent] = useState(!!(data.Pernyataan_Id && data.Pernyataan_Id !== ''));
  const [signWali, setSignWali] = useState(!!(data.Tanda_Tangan && data.Tanda_Tangan === 'Wali'))
  const [toggleReadOnly, setToggleReadOnly] = useState(!!((data.Tanda_Tangan && data.Tanda_Tangan === 'Pasien')))
  const [dateLabel, setDateLabel] = useState<string>(data.Pernyataan_Id && data.Pernyataan_Id === '1' ? 'Rencana Tanggal Tindakan' : 'Tanggal & Jam')
  const [coba, setCoba] = useState<boolean>((data && data.Pernyataan_Id) ? !!(data.Pernyataan_Id === '1') : false);

  useEffect(() => {
    if (data.Tanda_Tangan) {
      if (data.Tanda_Tangan === 'Pasien') {
        setToggleReadOnly(true);
      }
      if (data.Tanda_Tangan === 'Wali') {
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

    if (e.target.value === '1') {
      setCoba(true);
    } else if (e.target.value === '0') {
      setCoba(false);
    }
  }

  const handleSignRadio = (e: any) => {
    if (e.target.value === '2') {
      setSignWali(true);
      setToggleReadOnly(false)
      setValue('tandaTangan-nama', treatment?.Wali?.Nama);
      setValue('tandaTangan-tglLahir', '');
      setValue('tandaTangan-jk', '');
      setValue('tandaTangan-telp', treatment?.Wali?.No_Telepon);
      setValue('tandaTangan-alamat', treatment?.Wali?.Alamat);
    } else {
      setSignWali(false);
      setToggleReadOnly(true);
      setValue('tandaTangan-nama', treatment?.Pasien?.Nama);
      setValue('tandaTangan-tglLahir', treatment?.Pasien?.Tgl_Lahir);
      setValue('tandaTangan-jk', treatment?.Pasien?.Jenis_Kelamin);
      setValue('tandaTangan-telp', treatment?.Pasien?.No_Telepon);
      setValue('tandaTangan-alamat', treatment?.Pasien?.Alamat);
    }
  }

  const handlePatientSigned = (image: string) => {
    setValue('tanda-tangan-pasien', image);
  }

  const handleWitnessSigned = (image: string) => {
    setValue('tanda-tangan-saksi-2', image);
  }

  const handleNurseSigned = (signature: ISignatureModel) => {
    setValue('id-saksi', signature.ID_Karyawan);
    setValue('tanda-tangan-saksi', signature.Signature);
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
                name="pasien-nomorMR"
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
                name="pasien-jk"
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
                name="pasien-nama"
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
                name="pasien-alamat"
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
                name="pasien-tindakanOperasi"
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
                          name="tandaTangan-radio"
                          className="me-1"
                          onChange={(e) => handleSignRadio(e)}
                          value='1'
                          defaultChecked={!!(data.Tanda_Tangan && data.Tanda_Tangan === 'Pasien')}
                          innerRef={register({ required: true })}
                        />
                        <Label>Pasien</Label>
                      </div>
                      <div className="ms-1">
                        <Input
                          type="radio"
                          name="tandaTangan-radio"
                          className="me-1"
                          onChange={(e) => handleSignRadio(e)}
                          value='2'
                          defaultChecked={!!(data.Tanda_Tangan && data.Tanda_Tangan === 'Wali')}
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
                      name="tandaTangan-nama"
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
                      id='tandaTangan-tglLahir'
                      name='tandaTangan-tglLahir'
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
                      name="tandaTangan-jk"
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
                      name="tandaTangan-telp"
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
                      name="tandaTangan-alamat"
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
                          name="tandaTangan-hubungan"
                          innerRef={register({ required: false })}
                        />
                      </Col>
                      <Col md='1'>saya</Col>
                    </FormGroup>
                  )
                }
                <FormGroup className="form-group align-items-center mt-2" row>
                  <Col md='2'>
                    <Label>Tanggal Rencana Tindakan</Label>
                  </Col>
                  <Col md='6'>
                    <Input
                      type="datetime-local"
                      id='pasien-tanggal'
                      defaultValue='pasien-tanggal'
                      name='pasien-tanggal'
                      innerRef={register({ required: false })}
                    />
                  </Col>
                </FormGroup>
                <FormGroup className="form-group align-items-center mt-2" row>
                  <Col md='2'>
                    <Label>Tanggal & Jam Tanda Tangan</Label>
                  </Col>
                  <Col md='6'>
                    <Input
                      type="datetime-local"
                      id='tanggal_ttd'
                      defaultValue='tanggal_ttd'
                      name='tanggal_ttd'
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
                  initialImage={(data.Tanda_Tangan_Pasien && data.Tanda_Tangan_Pasien !== '' && !data.Tanda_Tangan_Pasien.includes('null')) ? data.Tanda_Tangan_Pasien : undefined}
                  onSigned={(image: string) => handlePatientSigned(image)}
                />
                <Input
                  type="hidden"
                  name="tanda-tangan-pasien"
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
                  initialImage={(data.Tanda_Tangan_Saksi_2 && data.Tanda_Tangan_Saksi_2 !== '' && !data.Tanda_Tangan_Saksi_2.includes('null')) ? data.Tanda_Tangan_Saksi_2 : undefined}
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
                  additionalLabel={(data.Nama_Saksi && data.Nama_Saksi !== '') ? data.Nama_Saksi : undefined}
                  type="picker"
                  initialImage={(data.Tanda_Tangan_Saksi && data.Tanda_Tangan_Saksi !== '' && !data.Tanda_Tangan_Saksi.includes('null')) ? data.Tanda_Tangan_Saksi : undefined}
                  defaultPerson={(userData && userData.id) ? userData.id : ''}
                  persons={nurses}
                  onSigned={(assigner: SignatureModel) => handleNurseSigned(assigner)}
                />
                <Input
                  type="hidden"
                  name="tanda-tangan-saksi"
                  innerRef={register()}
                />
                <Input
                  type="hidden"
                  name="id-saksi"
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

export default DoctorsConsentTab;
