import { Button, Col, Form, FormGroup, Input, Label, List, Modal, ModalBody, ModalHeader, Row, Table } from "reactstrap";
import { Fragment, useEffect, useState } from "react";
import { IRequestMRActionRequest, ListMRFilterRequest, RequestMRActionRequest } from "../../requests";
import { fetchMrs, fetchRequestHistories, handleFilterListMr, handleMrList } from "../../stores/request-mr.store";
import AppPagination from "@src/shared/pagination/components";
import RequestMRLimit from "./request-mr-limit";
import { RequestMRService } from "@modules/account/request-mr/services";
import { SubmitButton } from "@src/shared/button";
import { Trash } from "react-feather";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useForm } from "react-hook-form";

const RequestAccessForm = (props: { onSuccessSubmit: any }) => {
  const { onSuccessSubmit } = props;
  const dispatch = useAppDispatch()
  const { mrList, mrs, filterListMr, filterRequests } = useAppSelector(state => state.requestMr);
  const [showMrList, setShowMrList] = useState<boolean>(false);
  const [selectedRows, setSelectedRows] = useState<string[] | undefined>(undefined);
  const [search, setSearch] = useState<string>('');
  const [processing, setProcessing] = useState<boolean>(false);
  const nowDate = new Date()
  const x = nowDate.setDate(nowDate.getDate() + 1);
  const y = new Date(x);
  const tomorrowDate = y.toISOString().slice(0, 16);

  useEffect(() => {
    if (filterListMr) {
      dispatch(fetchMrs(filterListMr))
    }
  }, [filterListMr])

  const { register, setValue, handleSubmit, control } = useForm({
    mode: 'onChange',
  })

  useEffect(() => {
    if (mrList) {
      setValue('mr_list', mrList);
    }
  }, [mrList])

  const handleSubmitForm = (value: IRequestMRActionRequest) => {
    setProcessing(true)
    const params = RequestMRActionRequest.createFromJson(value);
    RequestMRService().request(params)
      .then(() => {
        onSuccessSubmit();
        setProcessing(false);
        dispatch(fetchRequestHistories(filterRequests))
      })
      .catch((err) => {
        setProcessing(false);
        console.error(err);
      });
  }

  const getRowClass = (mr: string) => {
    if (selectedRows && selectedRows.find(c => c === mr)) {
      return 'bg-primary cursor-pointer'
    }
    return 'cursor-pointer'
  }

  const handleClickList = (mr: string) => {
    if (selectedRows) {
      const rows = selectedRows.map(c => c);
      if (rows.find(c => c === mr) && rows.length > 0) {
        const duplicate = rows.findIndex(c => c === mr);
        if (duplicate > -1) {
          rows.splice(duplicate, 1);
          setSelectedRows(rows);
        }
      } else {
        setSelectedRows([...selectedRows, mr]);
      }
    } else {
      setSelectedRows([mr]);
    }

    if (mrList) {
      const rows = mrList.map(c => c);
      if (rows.find(c => c === mr && rows.length > 0)) {
        const duplicate = rows.findIndex(c => c === mr);
        if (duplicate > -1) {
          rows.splice(duplicate, 1);
          dispatch(handleMrList(rows));
        }
      } else {
        dispatch(handleMrList([...mrList, mr]))
      }
    } else {
      dispatch(handleMrList([mr]))
    }
  }

  const handleDeleteMr = (key: number) => {
    if (!mrList) {
      return;
    }
    const rows = mrList.map(c => c);
    rows.splice(key, 1);
    dispatch(handleMrList(rows));

    if (!selectedRows) {
      return;
    }
    const selecteds = selectedRows.map(c => c);
    selecteds.splice(key, 1);
    setSelectedRows(selecteds);
  }

  const handleChangeParams = (e: any) => {
    setSearch(e.target.value);
  }

  const handleSearch = () => {
    if (filterListMr) {
      dispatch(fetchMrs(ListMRFilterRequest.createFromJson({ ...filterListMr, search })));
    }
  }

  const toggle = () => {
    setShowMrList(false)
    dispatch(handleMrList(undefined));
    setSelectedRows(undefined);
  }

  if (!mrs) {
    return null;
  }
  return (
    <Fragment>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <FormGroup className="form-group my-1" row>
          <Col md='3'>
            <Label>Nomor MR Yang Diberi Akses*</Label>
          </Col>
          <Col className="d-flex align-items-center">
            <Input
              type="hidden"
              name="mr_list"
              innerRef={register({ required: true })}
            />
            {
              mrList && Array.isArray(mrList) && mrList.length > 0 ? (
                <Table responsive>
                  <tbody>
                    {
                      mrList.map((mr: string, key: number) => (
                        <tr key={key}>
                          <td>{mr}</td>
                          <td>
                            <Button style={{ padding: '4px' }} color='danger' type='button' onClick={ () => handleDeleteMr(key)}>
                              <Trash size={15} />
                            </Button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </Table>
              ) : (
                <Label>Belum ada Nomor MR yang dipilih</Label>
              )
            }
            <Button
              type="button"
              size='sm'
              className="ms-2"
              color="primary"
              onClick={() => setShowMrList(true)}
            >
              Pilih Nomor MR
            </Button>
          </Col>
        </FormGroup>
        <FormGroup className="form-group my-1 align-items-center" row>
          <Col md='3'>
            <Label>Tujuan / Alasan Diberi Akses*</Label>
          </Col>
          <Col md='7'>
            <Input
              type="textarea"
              name="purpose"
              innerRef={register({ required: true })}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup className="form-group my-1 align-items-center" row>
          <Col md='3'>
            <Label>Tanggal Expired Akses*</Label>
          </Col>
          <Col md='7'>
            <Input
              type="datetime-local"
              name="expired_at"
              min={tomorrowDate}
              innerRef={register({ required: true })}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup className="d-flex mb-0 mt-2 justify-content-center">
          <SubmitButton
            label="Simpan"
            buttonColor='primary'
            spinnerStyle={{ width: '1rem', height: '1rem' }}
            spinnerColor='light'
            processing={processing}
          />
        </FormGroup>
      </Form>

      <Modal isOpen={showMrList} className="modal-dialog modal-xl">
        <ModalHeader toggle={() => toggle()}>Pilih Nomor MR</ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <Row className="my-2">
                <Col md='2' className="align-items-center">
                  <Label>Pencarian</Label>
                </Col>
                <Col className="align-items-center">
                  <Input
                    placeholder="Masukkan Nama atau Nomor MR"
                    id="name"
                    name="name"
                    onChange={(e) => handleChangeParams(e)}
                  />
                </Col>
                <Col className="align-items-center">
                  <Button
                    type="button"
                    color="primary"
                    onClick={() => handleSearch()}
                  >
                    Cari
                  </Button>
                </Col>
              </Row>
              <Row>
                <RequestMRLimit />
              </Row>
              <Row>
                <Table responsive>
                  <thead>
                    <tr className='text-center'>
                      <th>#</th>
                      <th>Nomor MR</th>
                      <th>Nama</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      mrs && mrs.records.map((patient, key) => {
                        return (
                          <tr
                            key={key}
                            className={getRowClass(patient.No_MR)}
                            onClick={() => handleClickList(patient.No_MR)}
                          >
                            <td className='text-center'>{ key + 1 + (filterListMr.offset) }</td>
                            <td className='text-center'>{ patient.No_MR }</td>
                            <td>{ patient.Pasien.Nama }</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </Table>
              </Row>
              <Row>
                <AppPagination
                  currentPage={mrs.currentPage}
                  totalPages={mrs.totalPage}
                  itemsPerPage={filterListMr.limit}
                  totalItems={mrs.total}
                  onChangePage={
                    (page: number) => {
                      dispatch(handleFilterListMr(ListMRFilterRequest.createFromJson({ ...filterListMr, offset: ((+page * +filterListMr.limit) - +(filterListMr.limit)) })));
                    }
                  } />
              </Row>
            </Col>
            <Col>
              <List>
                {
                  mrList && mrList.map((item: string, key: number) => (
                    <li key={key}>{item}</li>
                  ))
                }
              </List>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col className="text-center">
              <Button
                type="button"
                size="sm"
                className="justify-content-center align-items-center"
                color="success"
                onClick={() => setShowMrList(false)}
              >
                Simpan
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default RequestAccessForm;
