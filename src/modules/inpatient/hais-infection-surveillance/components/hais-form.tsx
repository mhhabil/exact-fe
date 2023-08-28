import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { CreateHaisSurveillanceInfectionListRequest, UpdateHaisSurveillanceInfectionListRequest } from "../requests";
import { Fragment, useEffect, useState } from "react";
import { AppRequest } from "@src/shared/request";
import { DateTimeConverter } from "@src/shared/datetime-converter";
import HaisInfectionSurveillanceService from "../services";
import { IHaisSurveillanceInfectionListDetail } from "../models/hais-infection-surveillance-list.model";
import { Signature } from "@src/shared/signature/components";
import { SignatureModel } from "@src/shared/signature/models/signature.model";
import { SubmitButton } from "@src/shared/button";
import { fetchHaisSurveillanceInfectionList } from "../stores/hais-infection-surveillance.store";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useForm } from "react-hook-form";

const HaisForm = (props: { data?: IHaisSurveillanceInfectionListDetail, action: string, onCancel: any, day?: string }) => {
  const { data, action, onCancel, day } = props;
  const dispatch = useAppDispatch();
  const { treatment } = useAppSelector(state => state.patient);
  const { userData } = useAppSelector(state => state.auth);
  const { nurses } = useAppSelector(state => state.nurse);
  const [processing, setProcessing] = useState(false);

  const { register, setValue, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      id_pegawai: data?.ID_Pegawai ?? '',
      ttd_pegawai: data?.TTD_Pegawai ?? '',
      hari: data && data.Hari ? data.Hari : day ? day : '',
      waktu: data && data.Waktu ? DateTimeConverter.convertDatetimeToUTC(data.Waktu) : DateTimeConverter.convertDatetimeToUTC(),
      krs: data && data?.KRS ? '1' : '0',
      kontrol: data && data?.Kontrol ? '1' : '0',
      pelindung_kasa: data && data?.Pelindung_Kasa ? '1' : '0',
      pelindung_eyeshield: data && data?.Pelindung_Eyeshield ? '1' : '0',
      antibiotik_topikal: data && data?.Antibiotik_Topikal ? '1' : '0',
      antibiotik_oral: data && data?.Antibiotik_Oral ? '1' : '0',
      mata_air: data && data?.Mata_Air ? '1' : '0',
      mata_asap: data && data?.Mata_Asap ? '1' : '0',
      mata_debu: data && data?.Mata_Debu ? '1' : '0',
      gda: data && data?.GDA ? '1' : '0',
      ido_kabur: data && data?.IDO_Kabur ? '1' : '0',
      ido_merah: data && data?.IDO_Merah ? '1' : '0',
      ido_nyeri: data && data?.IDO_Nyeri ? '1' : '0',
      ido_tio: data && data?.IDO_TIO ? '1' : '0',
      ido_odem_kornea: data && data?.IDO_Odem_Kornea ? '1' : '0',
      ido_flare: data && data?.IDO_Flare ? '1' : '0',
      ido_hiporpion: data && data?.IDO_Hiporpion ? '1' : '0',
      ido_membran: data && data?.IDO_Membran ? '1' : '0',
      ido_pupil: data && data?.IDO_Pupil ? '1' : '0',
      ido_kekeruhan: data && data?.IDO_Kekeruhan ? '1' : '0',
      ido_kultur: data && data?.IDO_Kultur ? '1' : '0',
      ido_dx: data && data?.IDO_Dx ? '1' : '0',
      keterangan: data?.Keterangan ?? '',
    } as any,
  });

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.value === '1') ? '1' : '0');
  }

  const handleNurseSigned = (signature: SignatureModel) => {
    setValue('id_pegawai', signature.ID_Karyawan);
    setValue('ttd_pegawai', signature.Signature);
  }

  const handleSubmitForm = (value: any) => {
    if (!treatment) {
      return;
    }
    setProcessing(true)
    const appRequest = AppRequest.createFromStore(treatment);
    if (!data || (action === 'create')) {
      const params = CreateHaisSurveillanceInfectionListRequest.createFromJson({
        ...value,
        ...appRequest,
      });
      HaisInfectionSurveillanceService().createList(params)
        .then(() => {
          setProcessing(false);
          dispatch(fetchHaisSurveillanceInfectionList(appRequest));
          onCancel();
        })
        .catch((err) => {
          setProcessing(false);
          onCancel();
        });
    } else {
      const params = UpdateHaisSurveillanceInfectionListRequest.createFromJson({
        ...value,
        ...appRequest,
        id: data.ID,
      });
      HaisInfectionSurveillanceService().updateList(params)
        .then(() => {
          setProcessing(false);
          dispatch(fetchHaisSurveillanceInfectionList(appRequest));
          onCancel();
        })
        .catch((err) => {
          setProcessing(false);
          onCancel();
        });
    }
  }


  return (
    <Fragment>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="border p-1 my-1">
          <Row className="align-items-center my-1">
            <Col sm='2'>
              <Label>Hari ke-</Label>
            </Col>
            <Col sm='2'>
              <Input
                type="text"
                name="hari"
                readOnly
                innerRef={register({ required: false })}
              />
            </Col>
          </Row>
          <Row className="align-items-center my-1">
            <Col sm='2'>
              <Label>Waktu Visit</Label>
            </Col>
            <Col sm='2'>
              <Input
                type="datetime-local"
                id="waktu"
                defaultValue='waktu'
                name="waktu"
                innerRef={register({ required: false })}
              />
            </Col>
          </Row>
        </div>
        <div className="d-flex justify-content-center">
          <div className="border p-1 mx-1 my-1" style={{ width: '30%' }}>
            <Row className="mb-1">
              <Col>
                <Label className="fs-4 fw-bolder">Ruang Perawatan</Label>
              </Col>
            </Row>
            <Row className="ms-1 mb-1">
              <Col>
                <Label>KRS</Label>
              </Col>
              <Col>
                <Input
                  type="checkbox"
                  defaultChecked={!!(data && data.KRS && data.KRS === 1)}
                  name='krs'
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  innerRef={register('krs') as any}
                />
              </Col>
            </Row>
            <Row className="ms-1 mb-1">
              <Col>
                <Label>Kontrol</Label>
              </Col>
              <Col>
                <Input
                  type="checkbox"
                  defaultChecked={!!(data?.Kontrol && data?.Kontrol === 1)}
                  name='kontrol'
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  innerRef={register('kontrol') as any}
                />
              </Col>
            </Row>
            <Row className="ms-1 mb-1">
              <Col>
                <Label>Pelindung (Kasa)</Label>
              </Col>
              <Col>
                <Input
                  type="checkbox"
                  defaultChecked={!!(data?.Pelindung_Kasa && data?.Pelindung_Kasa === 1)}
                  name='pelindung_kasa'
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  innerRef={register('pelindung_kasa') as any}
                />
              </Col>
            </Row>
            <Row className="ms-1 mb-1">
              <Col>
                <Label>Pelindung (Eyeshield)</Label>
              </Col>
              <Col>
                <Input
                  type="checkbox"
                  defaultChecked={!!(data?.Pelindung_Eyeshield && data?.Pelindung_Eyeshield === 1)}
                  name='pelindung_eyeshield'
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  innerRef={register('pelindung_eyeshield') as any}
                />
              </Col>
            </Row>
            <Row className="ms-1 mb-1">
              <Col>
                <Label>Antibiotik Topikal</Label>
              </Col>
              <Col>
                <Input
                  type="checkbox"
                  defaultChecked={!!(data?.Antibiotik_Topikal && data?.Antibiotik_Topikal === 1)}
                  name='antibiotik_topikal'
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  innerRef={register('antibiotik_topikal') as any}
                />
              </Col>
            </Row>
            <Row className="ms-1 mb-1">
              <Col>
                <Label>Antibiotik Oral</Label>
              </Col>
              <Col>
                <Input
                  type="checkbox"
                  defaultChecked={!!(data?.Antibiotik_Oral && data?.Antibiotik_Oral === 1)}
                  name='antibiotik_oral'
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  innerRef={register('antibiotik_oral') as any}
                />
              </Col>
            </Row>
            <Row className="ms-1 mb-1">
              <Col>
                <Label>Mata Kena Air</Label>
              </Col>
              <Col>
                <Input
                  type="checkbox"
                  defaultChecked={!!(data?.Mata_Air && data?.Mata_Air === 1)}
                  name='mata_air'
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  innerRef={register('mata_air') as any}
                />
              </Col>
            </Row>
            <Row className="ms-1 mb-1">
              <Col>
                <Label>Mata Kena Asap</Label>
              </Col>
              <Col>
                <Input
                  type="checkbox"
                  defaultChecked={!!(data?.Mata_Asap && data?.Mata_Asap === 1)}
                  name='mata_asap'
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  innerRef={register('mata_asap') as any}
                />
              </Col>
            </Row>
            <Row className="ms-1 mb-1">
              <Col>
                <Label>Mata Kena Debu</Label>
              </Col>
              <Col>
                <Input
                  type="checkbox"
                  defaultChecked={!!(data?.Mata_Debu && data?.Mata_Debu === 1)}
                  name='mata_debu'
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  innerRef={register('mata_debu') as any}
                />
              </Col>
            </Row>
            <Row className="ms-1 mb-1">
              <Col>
                <Label>{`GDA > 200`}</Label>
              </Col>
              <Col>
                <Input
                  type="checkbox"
                  defaultChecked={!!(data?.GDA && data?.GDA === 1)}
                  name='gda'
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  innerRef={register('gda') as any}
                />
              </Col>
            </Row>
          </div>
          <div className="border p-1 mx-1 my-1" style={{ width: '30%' }}>
            <Row className="mb-1">
              <Col>
                <Label className="fs-4 fw-bolder">Identifikasi IDO</Label>
              </Col>
            </Row>
            <Row className="ms-1 mb-1">
              <Col>
                <Label>Kabur / Visus</Label>
              </Col>
              <Col>
                <Input
                  type="checkbox"
                  defaultChecked={!!(data?.IDO_Kabur && data?.IDO_Kabur === 1)}
                  name='ido_kabur'
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  innerRef={register('ido_kabur') as any}
                />
              </Col>
            </Row>
            <Row className="ms-1 mb-1">
              <Col>
                <Label>Mata Merah</Label>
              </Col>
              <Col>
                <Input
                  type="checkbox"
                  defaultChecked={!!(data?.IDO_Merah && data?.IDO_Merah === 1)}
                  name='ido_merah'
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  innerRef={register('ido_merah') as any}
                />
              </Col>
            </Row>
            <Row className="ms-1 mb-1">
              <Col>
                <Label>Nyeri</Label>
              </Col>
              <Col>
                <Input
                  type="checkbox"
                  defaultChecked={!!(data?.IDO_Nyeri && data?.IDO_Nyeri === 1)}
                  name='ido_nyeri'
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  innerRef={register('ido_nyeri') as any}
                />
              </Col>
            </Row>
            <Row className="ms-1 mb-1">
              <Col>
                <Label>TIO</Label>
              </Col>
              <Col>
                <Input
                  type="checkbox"
                  defaultChecked={!!(data?.IDO_TIO && data?.IDO_TIO === 1)}
                  name='ido_tio'
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  innerRef={register('ido_tio') as any}
                />
              </Col>
            </Row>
            <Row className="ms-1 mb-1">
              <Col>
                <Label>Odem Kornea</Label>
              </Col>
              <Col>
                <Input
                  type="checkbox"
                  defaultChecked={!!(data?.IDO_Odem_Kornea && data?.IDO_Odem_Kornea === 1)}
                  name='ido_odem_kornea'
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  innerRef={register('ido_odem_kornea') as any}
                />
              </Col>
            </Row>
            <Row className="ms-1 mb-1">
              <Col>
                <Label>Flare / Cell</Label>
              </Col>
              <Col>
                <Input
                  type="checkbox"
                  defaultChecked={!!(data?.IDO_Flare && data?.IDO_Flare === 1)}
                  name='ido_flare'
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  innerRef={register('ido_flare') as any}
                />
              </Col>
            </Row>
            <Row className="ms-1 mb-1">
              <Col>
                <Label>Hiporpion</Label>
              </Col>
              <Col>
                <Input
                  type="checkbox"
                  defaultChecked={!!(data?.IDO_Hiporpion && data?.IDO_Hiporpion === 1)}
                  name='ido_hiporpion'
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  innerRef={register('ido_hiporpion') as any}
                />
              </Col>
            </Row>
            <Row className="ms-1 mb-1">
              <Col>
                <Label>Membran</Label>
              </Col>
              <Col>
                <Input
                  type="checkbox"
                  defaultChecked={!!(data?.IDO_Membran && data?.IDO_Membran === 1)}
                  name='ido_membran'
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  innerRef={register('ido_membran') as any}
                />
              </Col>
            </Row>
            <Row className="ms-1 mb-1">
              <Col>
                <Label>Pupil Tidak Bulat</Label>
              </Col>
              <Col>
                <Input
                  type="checkbox"
                  defaultChecked={!!(data?.IDO_Pupil && data?.IDO_Pupil === 1)}
                  name='ido_pupil'
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  innerRef={register('ido_pupil') as any}
                />
              </Col>
            </Row>
            <Row className="ms-1 mb-1">
              <Col>
                <Label>Kekeruhan Vitreus / USG</Label>
              </Col>
              <Col>
                <Input
                  type="checkbox"
                  defaultChecked={!!(data?.IDO_Kekeruhan && data?.IDO_Kekeruhan === 1)}
                  name='ido_kekeruhan'
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  innerRef={register('ido_kekeruhan') as any}
                />
              </Col>
            </Row>
            <Row className="ms-1 mb-1">
              <Col>
                <Label>Kultur</Label>
              </Col>
              <Col>
                <Input
                  type="checkbox"
                  defaultChecked={!!(data?.IDO_Kultur && data?.IDO_Kultur === 1)}
                  name='ido_kultur'
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  innerRef={register('ido_kultur') as any}
                />
              </Col>
            </Row>
            <Row className="ms-1 mb-1">
              <Col>
                <Label>Dx Endoflaknitis</Label>
              </Col>
              <Col>
                <Input
                  type="checkbox"
                  defaultChecked={!!(data?.IDO_Dx && data?.IDO_Dx === 1)}
                  name='ido_dx'
                  className="me-1"
                  onChange={(e) => handleCheckboxChange(e)}
                  value='1'
                  innerRef={register('ido_dx') as any}
                />
              </Col>
            </Row>
          </div>
        </div>
        <div className="border p-1 my-1">
          <Row>
            <Col sm='2'>
              <Label>Keterangan</Label>
            </Col>
            <Col sm='2'>
              <Input
                type="textarea"
                name='keterangan'
                innerRef={register({ required: false })}
              />
            </Col>
          </Row>
        </div>
        <FormGroup className="form-group align-items-center mt-4" row>
          <Col>
            <Signature
              label="IPCN"
              additionalLabel={(data?.Nama_Pegawai && data?.Nama_Pegawai !== '') ? data?.Nama_Pegawai : undefined}
              type="picker"
              initialImage={(data?.TTD_Pegawai && data?.TTD_Pegawai !== '' && !data?.TTD_Pegawai.includes('null')) ? data?.TTD_Pegawai : undefined}
              defaultPerson={(userData && userData.id) ? userData.id : ''}
              persons={nurses}
              onSigned={(assigner: SignatureModel) => handleNurseSigned(assigner)}
            />
            <Input
              type="hidden"
              name="id_pegawai"
              innerRef={register()}
            />
            <Input
              type="hidden"
              name="ttd_pegawai"
              innerRef={register()}
            />
          </Col>
        </FormGroup>
        <FormGroup className="d-flex mb-0 justify-content-center">
          <SubmitButton
            buttonColor='primary'
            spinnerColor='light'
            processing={processing}
            label="Simpan"
            spinnerStyle={{ width: '1rem', height: '1rem' }}
          />
          <Button color="warning" type="button" onClick={() => {
            if (onCancel) {
              onCancel();
            }
          }}>Cancel</Button>
        </FormGroup>
      </Form>
    </Fragment>
  )
}

export default HaisForm;
