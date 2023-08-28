import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { Fragment, useState } from "react";
import { Plus } from "react-feather";
import RequestHistoryTable from "./request-history-table";
import RequestMRForm from '@modules/account/request-mr/components/user-role/request-mr-form';
import RequestPatientTable from '@modules/account/request-mr/components/user-role/available-patient-table';
import { handleMrList } from "../../stores/request-mr.store";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";

const UserDashboard = () => {
  const dispatch = useAppDispatch();
  const [selectMr, setSelectMr] = useState<boolean>(false);
  const toggle = () => {
    setSelectMr(false)
    dispatch(handleMrList(undefined));
  }
  return (
    <Fragment>
      <Row>
        <Col>
          <div className="d-flex justify-content-end">
            <Button
              type='button'
              size="sm"
              color="primary"
              onClick={() => setSelectMr(true)}
            >
              <Plus
                size={20}
              />
              Request Akses MR
            </Button>
          </div>
        </Col>
      </Row>
      <RequestHistoryTable/>
      <RequestPatientTable/>
      <Modal isOpen={selectMr} className="modal-dialog modal-lg">
        <ModalHeader toggle={() => toggle()}>Request Akses MR</ModalHeader>
        <ModalBody>
          <RequestMRForm
            onSuccessSubmit={() => toggle()}
          />
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default UserDashboard;
