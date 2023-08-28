import { Fragment, useState } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { EyeImage } from '@shared/eye-image/components';

const EyeForm = (props: { component: string, formName: string }) => {

  const { component, formName } = props;

  const [show, setShow] = useState<boolean>(false);

  return (
    <Fragment>
      {
        show && (
          <Fragment>
            <Row>
              <Col>
                <div className="d-flex justify-content-around">
                  <EyeImage onSaved={undefined} component={component} formName={formName} />
                  <EyeImage onSaved={undefined} component={component} formName={formName} />
                </div>
              </Col>
            </Row>
          </Fragment>
        )
      }
      <Row>
        <Col>
          {
            !show && <Button type="button" color="primary" onClick={() => setShow(true)}>+ Gambar Mata</Button>
          }
          {
            show && <Button type="button" color="danger" onClick={() => setShow(false)}>Hapus Gambar Mata</Button>
          }
        </Col>
      </Row>
    </Fragment>
  )
}

export default EyeForm;
