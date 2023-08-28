import { Button, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { Fragment, useState } from "react";
import { Minus, Plus } from 'react-feather';
import { EyeImage } from '@src/shared/eye-image/components';
import { InpatientMedicalNote } from "../models/inpatient-medical-note.model";
import { RetinaImage } from '@src/shared/retina-image/components';

const ImageEditors = (props: { register: any, data: InpatientMedicalNote, setValue: any, errors: any }) => {
  const { register, data, setValue, errors } = props;
  const [showRetina, setShowRetina] = useState<boolean>(!!(data.form && data.form.Submit_Retina && data.form.Submit_Retina === '1'))

  const handleImageOD = (image: string) => {
    setValue('gambar_mata_od', image);
  }

  const handleImageOS = (image: string) => {
    setValue('gambar_mata_os', image);
  }

  const handleRetinaOD = (image: string) => {
    setValue('gambar_retina_od', image);
  }
  const handleRetinaOS = (image: string) => {
    setValue('gambar_retina_os', image);
  }

  return (
    <Fragment>
      <Input
        type='hidden'
        name='submit_retina'
        innerRef={register()}
      />
      <FormGroup className='form-group' row>
        <Col className='text-center'>
          <Label>OD</Label>
        </Col>
        <Col className='text-center'>
          <Label>OS</Label>
        </Col>
      </FormGroup>
      <FormGroup className='form-group' row>
        <Col>
          <EyeImage
            initialImage={(data && data.form && data.form.Gambar_Mata_OD && data.form.Gambar_Mata_OD !== '') ? data.form.Gambar_Mata_OD : undefined}
            formName='rawat-inap/catatan-medis-awal'
            component='catatan_medis_awal_eye_od'
            onSaved={(image: string) => handleImageOD(image)}
          />
          <Input
            id="od-eye-image"
            type="hidden"
            name="gambar_mata_od"
            innerRef={register({ required: true })}
            invalid={errors.gambar_mata_od && true}
          />
        </Col>
        <Col>
          <EyeImage
            initialImage={(data && data.form && data.form.Gambar_Mata_OS && data.form.Gambar_Mata_OS !== '') ? data.form.Gambar_Mata_OS : undefined}
            formName='rawat-inap/catatan-medis-awal'
            component='catatan_medis_awal_eye_os'
            onSaved={(image: string) => handleImageOS(image)}
          />
          <Input
            id="os-eye-image"
            type="hidden"
            name="gambar_mata_os"
            innerRef={register({ required: true })}
            invalid={errors.gambar_mata_os && true} />
        </Col>
      </FormGroup>
      {
        showRetina ? (
          <FormGroup className='form-group' row>
            <Col>
              <RetinaImage
                type='od'
                initialImage={(data && data.form && data.form.Gambar_Retina_OD && data.form.Gambar_Retina_OD !== '') ? data.form.Gambar_Retina_OD : undefined}
                formName='rawat-inap/catatan-medis-awal'
                component='catatan_medis_awal_retina_od'
                onSaved={(image: string) => handleRetinaOD(image)}
              />
              <Input
                id="od-eye-image"
                type="hidden"
                name="gambar_retina_od"
                innerRef={register({ required: true })}
                invalid={errors.gambar_retina_od && true}
              />
            </Col>
            <Col>
              <RetinaImage
                type='os'
                initialImage={(data && data.form && data.form.Gambar_Retina_OS && data.form.Gambar_Retina_OS !== '') ? data.form.Gambar_Retina_OS : undefined}
                formName='rawat-inap/catatan-medis-awal'
                component='catatan_medis_awal_retina_os'
                onSaved={(image: string) => handleRetinaOS(image)}
              />
              <Input
                id="os-eye-image"
                type="hidden"
                name="gambar_retina_os"
                innerRef={register({ required: true })}
                invalid={errors.gambar_retina_os && true} />
            </Col>
            <Row>
              <Col md='3'>
                <Button color='danger' type='button' onClick={() => {
                  setValue('submit_retina', '0')
                  setShowRetina(false)
                }}>
                  <Minus size={15}/>
                  <span className="align-middle ml-50" style={{ fontSize: '9pt' }}>Gambar Retina</span>
                </Button>
              </Col>
            </Row>
          </FormGroup>
        ) : (
          <FormGroup className='form-group' row>
            <Row>
              <Col md='3'>
                <Button color='primary' type='button' onClick={() => {
                  setValue('submit_retina', '1')
                  setShowRetina(true)
                }}>
                  <Plus size={15}/>
                  <span className="align-middle ml-50" style={{ fontSize: '9pt' }}>Gambar Retina</span>
                </Button>
              </Col>
            </Row>
            <Input
              type='hidden'
              name='gambar_retina_od'
              innerRef={register()}
            />
            <Input
              type='hidden'
              name='gambar_retina_os'
              innerRef={register()}
            />
          </FormGroup>
        )
      }
    </Fragment>
  )
}

export default ImageEditors;
