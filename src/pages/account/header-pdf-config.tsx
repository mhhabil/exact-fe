import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { Fragment, useEffect } from 'react';
import { HeaderPdfConfigForm } from '@src/modules/account/header-pdf-config/components';
import { PageTitleLabel } from '@shared/label';
import { fetchHeaderPdfConfig } from '@src/modules/account/header-pdf-config/stores/header-pdf-config.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';

const MedicalRecordUsers = () => {

  const { headerPdfConfig } = useAppSelector(state => state.headerPdfConfig);
  const { companyCode } = useAppSelector(state => state.selectCompany);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (companyCode) {
      dispatch(fetchHeaderPdfConfig(companyCode));
    }
  }, [companyCode]);

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <PageTitleLabel>PDF Header Config</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col className="mb-1">
              {
                headerPdfConfig && (
                  <HeaderPdfConfigForm
                    data={headerPdfConfig}
                  />
                )
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default MedicalRecordUsers;
