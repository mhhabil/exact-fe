import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { Fragment, useEffect } from 'react';
import { fetchAllOfficers, fetchMedicalRecordUsers } from '@src/modules/account/medical-record-users/stores/medical-record-users.store';
import { MedicalRecordUsersForm } from '@src/modules/account/medical-record-users/components';
import { PageTitleLabel } from '@shared/label';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';

const MedicalRecordUsers = () => {

  const { allOfficers, medicalRecordUsers } = useAppSelector(state => state.medicalRecordUsers);
  const { companyCode } = useAppSelector(state => state.selectCompany);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (companyCode) {
      dispatch(fetchMedicalRecordUsers(companyCode));
      dispatch(fetchAllOfficers(companyCode));
    }
  }, [companyCode]);

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <PageTitleLabel>Tambah User Penerima Notifikasi Request MR</PageTitleLabel>
        </CardHeader>
        <CardBody>
          <Row>
            <Col className="mb-1">
              {
                allOfficers && medicalRecordUsers && (
                  <MedicalRecordUsersForm
                    data={medicalRecordUsers}
                    employeeList={allOfficers}
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
