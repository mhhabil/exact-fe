import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { HistoryFilterForm, HistoryTable } from '@modules/history/components';
import { Fragment } from 'react';
import { PageTitleLabel } from '@shared/label';

const DaftarRiwayat = () => {
  return (
    <Fragment>
      <Card>
        <CardHeader>
          <PageTitleLabel>Riwayat Berobat Pasien</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col sm="12" md="12" xxl="8" className='mb-1'>
              <HistoryFilterForm/>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              <HistoryTable/>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default DaftarRiwayat;
