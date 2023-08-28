import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { DateTimeInput, TextInput } from "@src/shared/input";
// import { PupilOCTResultModel, TreatmentNumber } from "../models/pupil-oct-result.model";
import { useEffect, useState } from "react";
import ToolInspection from "@src/shared/tool-inspection/tool-inspection";
// import { UpdatePupilOCTResultRequest } from '../requests';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { SubmitButton } from '@src/shared/button';
import { IPdfModel } from '@src/shared/pdf';
import agama from '@src/modules/outpatient/nursing-initial-assessment/const/agama';
import kondisiKulit from '../const/kondisi-kulit';
import { ChecklistPraOperasiModel } from '../models/checklist-pra-operasi-models';


const BloodPreparation = (props: { data: ChecklistPraOperasiModel, setValue:any, initialImage?: string, register: any, errors: any }) => {
  const { data, setValue, register, errors, initialImage } = props;

  const [darah, setDarah] = useState<string | undefined>((data && data.form && data.form.Persiapan_Darah) ? data.form.Persiapan_Darah : undefined)

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleChangeDarah = (e: any) => {
    if (e.target.value === '2') {
      setValue('persiapan_darah_keterangan', '');
    }
    setDarah(e.target.value)
    setValue('persiapan_darah', e.target.value)
  }

  return (
    <FormGroup className="form-group" row>
      <h4>Checklist Pra Operasi</h4>
      <FormGroup className='mt-1'>
        <Row>
          <Col md='3'>
            <Label>1.Persiapan Darah</Label>
          </Col>
          <Col>
            <Input
              id="persiapan_darah_1"
              type="radio"
              name="persiapan_darah"
              className="me-1"
              value="1"
              style={{marginLeft:'-70px'}}
              onChange={(e) => handleChangeDarah(e)}
              defaultChecked={data && data.form && data.form.Persiapan_Darah === '1'}
              innerRef={register("persiapan_darah")}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col md='8'>
            <Input
              id="persiapan_darah_keterangan"
              type="text"
              name="persiapan_darah_keterangan"
              style={{marginLeft:'-90px', width:'200px'}}
              innerRef={register() as any}
              readOnly={(darah) ? darah !== '1' : undefined}
            />
          </Col>
        </Row>
        <Row>
          <Col md='3'></Col>
          <Col>
            <Input
              id="persiapan_darah_2"
              type="radio"
              name="persiapan_darah"
              className="me-1"
              onChange={(e) => handleChangeDarah(e)}
              value="2"
              defaultChecked={data && data.form && data.form.Persiapan_Darah === '2'}
              style={{marginLeft:'-70px'}}
              innerRef={register("persiapan_darah") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
        </Row>
        <Row>
          <Col md='3' className='mt-1'>
            <Label>2. Golongan Darah</Label>
          </Col>
          <Col className='mt-1'>
            <Input
              id="golongan_darah_1"
              type="radio"
              name="golongan_darah"
              className="me-1"
              value="1"
              style={{marginLeft:'-70px'}}
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Golongan_Darah === '1'}
              innerRef={register("golongan_darah")}
            />{' '}
            <Label>A</Label>
          </Col>
          <Col className='mt-1'>
            <Input
              id="golongan_darah_2"
              type="radio"
              name="golongan_darah"
              className="me-1"
              value="2"
              style={{marginLeft:'-70px'}}
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Golongan_Darah === '2'}
              innerRef={register("golongan_darah")}
            />{' '}
            <Label>B</Label>
          </Col>
          <Col className='mt-1'>
            <Input
              id="golongan_darah_3"
              type="radio"
              name="golongan_darah"
              className="me-1"
              value="3"
              style={{marginLeft:'-70px'}}
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Golongan_Darah === '3'}
              innerRef={register("golongan_darah")}
            />{' '}
            <Label>AB</Label>
          </Col>
          <Col className='mt-1'>
            <Input
              id="golongan_darah_4"
              type="radio"
              name="golongan_darah"
              className="me-1"
              value="4"
              style={{marginLeft:'-70px'}}
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.Golongan_Darah === '4'}
              innerRef={register("golongan_darah")}
            />{' '}
            <Label>O</Label>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col md='3' className='mt-1'>
            <Label>3. Rhesus Faktor</Label>
          </Col>
          <Col md='8' className='mt-1'>
            <Input
              id="rhesus_fektor"
              type="text"
              name="rhesus_fektor"
              style={{marginLeft:'-70px', width:'400px'}}
              innerRef={register() as any}
            />
          </Col>
        </Row>
        <Row>
          <Col md='3' className='mt-1'>
            <Label>4. Kondisi Kulit</Label>
          </Col>
          <Col md='8' className='mt-1'>
            <Input
              type="select"
              id='kondisi_kulit_id'
              name='kondisi_kulit_id'
              style={{marginLeft: '-70px', width:'400px'}}
              innerRef={register()}
            >
              <option value="" disabled={false}>--</option>
              {
                kondisiKulit && kondisiKulit.map((item: any, key: number) => {
                  return <option value={item.value} key={key}>{ item.name }</option>;
                })
              }
            </Input>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup className="form-group" row>
        <Row style={{marginTop:'-30px'}}>
          <Col md="6" sm="12">
            <Row>
              <Col>
                <Label>5. Cairan Parenteral (Jika ada pemasangan infus)</Label>
              </Col>
            </Row>
            <Row>
              <Col md='3'>
                <Label className='mt-2'>Jenis Cairan</Label>
              </Col>
              <Input
                id="jenis_cairan"
                type="text"
                name="jenis_cairan"
                className='mt-1'
                style={{ width:'300px'}}
                innerRef={register() as any}
              />
              <Col></Col>
            </Row>
            <Row>
              <Col md='3'>
                <Label className='mt-2'>Cairan Masuk</Label>
              </Col>
              <Input
                id="cairan_masuk"
                type="text"
                name="cairan_masuk"
                className='mt-1'
                style={{ width:'300px'}}
                innerRef={register() as any}
              />
              <Col></Col>
            </Row>
            <Row>
              <Col md='3'>
                <Label className='mt-2'>Jam Mulai</Label>
              </Col>
              <Input
                id="jam_mulai"
                type="time"
                name="jam_mulai"
                className='mt-1'
                style={{ width:'300px'}}
                innerRef={register() as any}
              />
              <Col></Col>
            </Row>
          </Col>

          <Col md="6" sm="12">
            <Row>
              <Col>
                <Label></Label>
              </Col>
            </Row>
            <Row>
              <Col md='3'>
                <Label className='mt-2'>Needle No</Label>
              </Col>
              <Input
                id="needle_no"
                type="text"
                name="needle_no"
                className='mt-1'
                style={{ width:'300px'}}
                innerRef={register() as any}
              />
              <Col></Col>
            </Row>
            <Row>
              <Col md='3'>
                <Label className='mt-2'>Lokasi</Label>
              </Col>
              <Input
                id="lokasi"
                type="text"
                name="lokasi"
                className='mt-1'
                style={{ width:'300px'}}
                innerRef={register() as any}
              />
              <Col></Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup>
        <Row>
          <Col md='3' className='mt-1'>
            <Label>6. Infus Dipasang Oleh </Label>
          </Col>
          <Col md='9' className='mt-1'>
            <Input
              id="infus_dipasang"
              type="text"
              name="infus_dipasang"
              style={{marginLeft:'-70px'}}
              innerRef={register() as any}
            />
          </Col>
        </Row>
        <Row>
          <Col md='3' className='mt-1'>
            <Label>7. Pemeriksaan Lainnya</Label>
          </Col>
          <Col md='9' className='mt-1'>
            <Input 
              id='pemeriksaan_lainnya'
              type='text'
              name='pemeriksaan_lainnya'
              style={{marginLeft: '-70px'}}
              innerRef={register() as any}
            />
          </Col>
        </Row>
        <Row>
          <Col md='3' className='mt-1'>
            <Label>8. Catatan Perawat Ruang</Label>
          </Col>
          <Col md='9' className='mt-1'>
            <Input
              id='catatan_perawat'
              type='text'
              name='catatan_perawat'
              style={{marginLeft: '-70px'}}
              innerRef={register() as  any}
            />
          </Col>
        </Row>
        <Row>
          <Col md='3' className='mt-1'>
            <Label>Tanggal</Label>
          </Col>
          <Col className='mt-1'>
            <DateTimeInput
              name='tanggal'
              defaultValue='date'
              md={1}
              style={{marginLeft: '-70px', marginTop:'-25px'}}
              {...{ register, errors }}
            />
          </Col>
        </Row>
      </FormGroup>
    </FormGroup>
  )
}

export default BloodPreparation;
