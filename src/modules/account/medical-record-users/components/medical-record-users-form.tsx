import { Button, Col, Label, List, Row, Table } from "reactstrap";
import { DataRequest, UpdateMedicalRecordUsersRequest } from "../requests/medical-record-users.request";
import { Fragment, useState } from "react";
import { IOfficerModel } from "@src/shared/officer";
import { MedicalRecordUsersService } from "../services";
import { SubmitButton } from "@src/shared/button";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const MedicalRecordUsersForm = (props: { data: Array<IOfficerModel>, employeeList: Array<IOfficerModel> }) => {
  const { data, employeeList } = props;
  const { companyCode } = useAppSelector(state => state.selectCompany);
  const [selectedRows, setSelectedRows] = useState<IOfficerModel[] | undefined>(data && Array.isArray(data) && data.length > 0 ? data : undefined);
  const [ids, setIds] = useState<IOfficerModel[] | undefined>(data && Array.isArray(data) && data.length > 0 ? data : undefined);
  const [processing, setProcessing] = useState<boolean>(false);

  const getRowClass = (id: string) => {
    if (selectedRows && selectedRows.find(c => c.ID_Karyawan === id)) {
      return 'bg-primary cursor-pointer'
    }
    return 'cursor-pointer'
  }

  const handleClickList = (id: string) => {
    const row = employeeList.find((item) => item.ID_Karyawan === id);
    if (selectedRows) {
      const rows = selectedRows.map(c => c);
      if (rows.find(c => c.ID_Karyawan === id) && rows.length > 0) {
        const duplicate = rows.findIndex(c => c.ID_Karyawan === id);
        if (duplicate > -1) {
          rows.splice(duplicate, 1);
          setSelectedRows(rows);
        }
      } else {
        if (row) {
          setSelectedRows([...selectedRows, row]);
        }
      }
    } else {
      if (row) {
        setSelectedRows([row]);
      }
    }

    if (ids) {
      const rows = ids.map(c => c);
      if (rows.find(c => c.ID_Karyawan === id && rows.length > 0)) {
        const duplicate = rows.findIndex(c => c.ID_Karyawan === id);
        if (duplicate > -1) {
          rows.splice(duplicate, 1);
          setIds(rows);
        }
      } else {
        if (row) {
          setIds([...ids, row])
        }
      }
    } else {
      if (row) {
        setIds([row])
      }
    }
  }

  const handleSubmitIds = () => {
    if (!ids || !companyCode) {
      return;
    }
    setProcessing(true);
    const paramsData = ids.map(c => DataRequest.createFromJson(c));
    const params = UpdateMedicalRecordUsersRequest.createFromJson({ branch_code: companyCode, data: paramsData });
    MedicalRecordUsersService().insert(params)
      .then((response) => {
        setProcessing(false);
      })
      .catch((err) => {
        setProcessing(false);
      });
  }

  return (
    <Fragment>
      <div className="border-1 border-dark rounded p-1 mt-3">
        <Row>
          <Col className="text-center" md='7'>
            <Label className="fw-bolder fs-5">Existing Users</Label>
          </Col>
        </Row>
        <Row>
          <Col md='7'>
            <Table bordered>
              <thead>
                <tr>
                  <th className="text-center" style={{ width: '11%' }}>#</th>
                  <th>ID Karyawan</th>
                  <th className="text-center">Nama Karyawan</th>
                </tr>
              </thead>
              <tbody>
                {
                  data && Array.isArray(data) && data.map((item: IOfficerModel, key: number) => {
                    return (
                      <tr key={key}>
                        <td className="text-center">{key + 1}</td>
                        <td>{item.ID_Karyawan.length > 10 ? `${item.ID_Karyawan.slice(0, -12)}************` : item.ID_Karyawan}</td>
                        <td>{item.Nama}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
      <div className="border-1 border-dark rounded p-1 mt-3">
        <Row>
          <Col className="text-center" md='7'>
            <Label className="fw-bolder fs-5">All Users</Label>
          </Col>
        </Row>
        <Row>
          <Col md='7'>
            <div>
              <Table bordered>
                <thead>
                  <tr>
                    <th className="text-center" style={{ width: '11%' }}>#</th>
                    <th className="text-center">Nama Karyawan</th>
                  </tr>
                </thead>
              </Table>
            </div>
            <div style={{ height: '500px' }} className="overflow-auto">
              <Table bordered>
                <tbody>
                  {
                    employeeList && Array.isArray(employeeList) && employeeList.map((item: IOfficerModel, key: number) => (
                      <tr
                        key={key}
                        className={getRowClass(item.ID_Karyawan)}
                        onClick={() => handleClickList(item.ID_Karyawan)}
                      >
                        <td className="text-center" style={{ width: '11%' }}>{key + 1}</td>
                        <td>{item.Nama}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
            </div>
          </Col>
          <Col>
            <List>
              {
                ids && Array.isArray(ids) && ids.map((item: IOfficerModel, key: number) => (
                  <li key={key}>
                    {item.Nama}
                  </li>
                ))
              }
            </List>
          </Col>
        </Row>
        <Row>
          <Col md='7'></Col>
          <Col className="text-center">
            <SubmitButton
              label="Simpan"
              buttonColor='primary'
              onClick={() => handleSubmitIds()}
              spinnerStyle={{ width: '1rem', height: '1rem' }}
              spinnerColor='light'
              processing={processing}
            />
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}

export default MedicalRecordUsersForm;
