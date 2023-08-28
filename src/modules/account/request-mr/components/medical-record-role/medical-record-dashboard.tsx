import { Button, Col, Label, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { Fragment, useState } from "react";
import ApprovalHistoryTable from "./approval-history-table";
import GrantAccessForm from "./grant-access-form";
import PendingRequestTable from "./pending-request-table";
import { Plus } from "react-feather";
import { handleMrList } from "../../stores/request-mr.store";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";

const MedicalRecordDashboard = () => {
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
              Beri Akses RM
            </Button>
          </div>
        </Col>
      </Row>
      <PendingRequestTable/>
      <ApprovalHistoryTable/>
      <Modal isOpen={selectMr} className="modal-dialog modal-lg">
        <ModalHeader toggle={() => toggle()}>Beri Akses RM</ModalHeader>
        <ModalBody>
          <GrantAccessForm
            onSuccessSubmit={() => toggle()}
          />
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default MedicalRecordDashboard;
