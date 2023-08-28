import { RetinaImage } from '@shared/retina-image/components';
import { Button, Col, Row } from 'reactstrap';
import { Fragment, useState } from 'react';

const RetinaForm = () => {

  const [show, setShow] = useState<boolean>(false);

  return (
    <Fragment>
      {
        show && (
          <Fragment>
            <Row>
              <Col>
                <div className="d-flex justify-content-around">
                  {/*<RetinaImage onSaved={undefined} type="right" />*/}
                  {/*<RetinaImage onSaved={undefined} type="left" />*/}
                </div>
              </Col>
            </Row>
          </Fragment>
        )
      }
      <Row>
        <Col>
          {
            !show && <Button type="button" color="primary" onClick={() => setShow(true)}>+ Gambar Retina</Button>
          }
          {
            show && <Button type="button" color="danger" onClick={() => setShow(false)}>Hapus Gambar Retina</Button>
          }
        </Col>
      </Row>
    </Fragment>
  )
}

export default RetinaForm;
