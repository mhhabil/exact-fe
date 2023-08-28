import { Button, Col, Form, FormGroup, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { OperativeFairyNursingNotesModel } from '../../models';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import PengkajianPascaOperasi from './pengkajian-pasca-operasi';
import ObservasiTandaVital from './observasi-tanda-vital';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { SubmitButton } from '@src/shared/button';
import { IPdfModel } from '@src/shared/pdf';

const RawatPascaOperasi = (props: { data: OperativeFairyNursingNotesModel, register: any, activeTab: string, errors: any, processing: boolean, setValue: any, getValues: any, defaultPattern: any }) => {
  const { data, register, activeTab, errors, processing, setValue, getValues, defaultPattern } = props;

  const { nurses } = useAppSelector(state => state.nurse);
  const [active, setActive] = useState<string>('1')
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);
  const { pdf } = useAppSelector(state => state.nursingInitialAssessment);
  const [postTreat, setPostTreat] = useState<string | undefined>(`${data?.ck_pasca_operasi?.Rawat_Pasca}`);
  const [transport, setTransport] = useState<string | undefined>(`${data?.ck_pasca_operasi?.Transport}`);

  useEffect(() => {
    if (data && data.ck_pasca_operasi) {
      setPostTreat(`${data?.ck_pasca_operasi?.Rawat_Pasca}`);
      setTransport(`${data?.ck_pasca_operasi?.Transport}`);
    }
  }, [data])

  useEffect(() => {
    if (defaultPattern === '1') {
      setValue('rawat_pasca', '2');
      setPostTreat('2')
      setValue('transport', '1');
      setTransport('1')
    } else if (defaultPattern === '0') {
      setValue('rawat_pasca', undefined);
      setPostTreat(undefined)
      setValue('transport', undefined);
      setTransport(undefined)
    }
  }, [defaultPattern]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleNurseSigned = (image: SignatureModel) => {
    setValue('ttd_perawat', image.Signature);
    setValue('id_perawat', image.ID_Karyawan);
  }

  const toggle = (tab: string) => {
    if (active && active !== tab) {
      setActive(tab);
    }
  };

  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId='3'>
        <FormGroup className="mt-1 form-group" row>
          <Row>
            <Col md='3'>
              <Label>Rawat Pasca Operasi</Label>
            </Col>
            <Col>
              <Input
                id="rawat_pasca_1"
                type="radio"
                name="rawat_pasca"
                className="me-1"
                value="1"
                onChange={(e) => {
                  handleRadioChange(e);
                  setPostTreat('1');
                }}
                checked={postTreat === '1'}
                style={{marginLeft:'-70px'}}
                innerRef={register("rawat_pasca") as any}
              />{' '}
              <Label>Ruang Pemulihan</Label>
            </Col>
            <Col>
              <Input
                id="rawat_pasca_2"
                type="radio"
                name="rawat_pasca"
                className="me-1"
                value="2"
                onChange={(e) => {
                  handleRadioChange(e);
                  setPostTreat('2');
                }}
                checked={postTreat === '2'}
                style={{marginLeft:'-70px'}}
                innerRef={register("rawat_pasca") as any}
              />{' '}
              <Label>Ruang Tunggu</Label>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row className='mt-1'>
            <Col md='3'>
              <Label>Transport</Label>
            </Col>
            <Col>
              <Input
                id="transport_1"
                type="radio"
                name="transport"
                className="me-1"
                value="1"
                onChange={(e) => {
                  handleRadioChange(e);
                  setTransport('1');
                }}
                checked={transport === '1'}
                style={{marginLeft:'-70px'}}
                innerRef={register("transport") as any}
              />{' '}
              <Label>Jalan Kaki</Label>
            </Col>
            <Col>
              <Input
                id="transport_2"
                type="radio"
                name="transport"
                className="me-1"
                value="2"
                onChange={(e) => {
                  handleRadioChange(e);
                  setTransport('2');
                }}
                checked={transport === '2'}
                style={{marginLeft:'-70px'}}
                innerRef={register("transport") as any}
              />{' '}
              <Label>Stretcher/Brangkat</Label>
            </Col>
            <Col>
              <Input
                id="transport_3"
                type="radio"
                name="transport"
                className="me-1"
                value="3"
                onChange={(e) => {
                  handleRadioChange(e);
                  setTransport('3');
                }}
                checked={transport === '3'}
                style={{marginLeft:'-70px'}}
                innerRef={register("transport") as any}
              />{' '}
              <Label>Kursi Roda</Label>
            </Col>
            <Col></Col>
          </Row>
          <Row className='mt-1'>
            <Col md='3'>
              <Label>Waktu</Label>
            </Col>
            <Col md='3'>
              <Input
                id="time_out_waktu_ckpo"
                type="time"
                name="time_out_waktu_ckpo"
                defaultValue={(data && data.ck_pasca_operasi && data.ck_pasca_operasi.Time_Out_Waktu) ? data.ck_pasca_operasi.Time_Out_Waktu : ''}
                style={{marginLeft:'-70px'}}
                innerRef={register()}
              />
            </Col>
          </Row>
        </FormGroup>
        <Nav tabs className="mt-2">
          <NavItem>
            <NavLink className={(active && active === '1') ? 'active' : ''} onClick={() => toggle('1')}>
            Pengkajian Pasca Operasi
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={(active && active === '2') ? 'active' : ''} onClick={() => toggle('2')}>
            Observasi Tanda-Tanda Vital Diruang Pulih Sadar
            </NavLink>
          </NavItem>
        </Nav>

        <Form>

          <PengkajianPascaOperasi
            data={data}
            active={active}
            processing={processing}
            {...{ register, errors, setValue, defaultPattern }}
          />

          <ObservasiTandaVital
            data={data}
            active={active}
            processing={processing}
            {...{ register, errors, setValue, getValues }}
          />

          <Row>
            <Col>
              <div className="mt-2 d-flex justify-content-around my-0">
                <Signature
                  label="Perawat Pemeriksa"
                  type="picker"
                  additionalLabel={(data && data.ck_pasca_operasi && data.ck_pasca_operasi.Nama_Perawat && data.ck_pasca_operasi.Nama_Perawat !== '') ? data.ck_pasca_operasi.Nama_Perawat : undefined}
                  initialImage={(data && data.ck_pasca_operasi && data.ck_pasca_operasi.TTD_Perawat && data.ck_pasca_operasi.TTD_Perawat !== '') ? data.ck_pasca_operasi.TTD_Perawat : undefined}
                  persons={nurses}
                  onSigned={(assigner: SignatureModel) => handleNurseSigned(assigner)}
                />
                <Input
                  type="hidden"
                  name="id_perawat"
                  innerRef={register()}
                  invalid={errors.id_perawat && true}
                />
                <Input
                  type="hidden"
                  name='ttd_perawat'
                  innerRef={register()}
                  invalid={errors.ttd_perawat && true}
                />
              </div>
            </Col>
          </Row>
        </Form>
      </TabPane>
    </TabContent>
  )
}

export default RawatPascaOperasi;
