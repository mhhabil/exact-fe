import * as yup from 'yup';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import { HistoryRequest } from '@modules/history/requests';
import { handleFilter } from '@modules/history/stores/history.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

interface IFormValue {
  from: string;
  to: string;
  name: string;
}

const HistoryFilterForm = () => {

  const { filter } = useAppSelector(state => state.histories);
  const dispatch = useAppDispatch();

  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange',
    resolver: yupResolver(yup.object().shape({
      from: yup.string(),
      to: yup.string(),
      name: yup.string(),
    })),
    defaultValues: {
      from: (filter && filter.tgl_awal) ? filter.tgl_awal : '',
      to: (filter && filter.tgl_akhir) ? filter.tgl_akhir : '',
      name: (filter && filter.search_regex) ? filter.search_regex : '',
    },
  });

  const handleSubmitForm = (data: IFormValue) => {
    const newFilter = HistoryRequest.createFromJson({ ...filter, tgl_awal: data.from, tgl_akhir: data.to, search_regex: data.name });
    dispatch(handleFilter(newFilter));
  }

  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <FormGroup className="form-group align-items-center" row>
          <Col sm='1'>
            <Label>Date</Label>
          </Col>
          <Col sm='1' style={{ marginLeft: '90px' }}>
            <Label>From</Label>
          </Col>
          <Col>
            <Input
              style={{ width: '200px' }}
              type='date'
              id="from"
              name="from"
              innerRef={register({ required: true })}
              invalid={errors.from && true}
            />
          </Col>
          <Col sm="1">
          </Col>
          <Col sm="1">
            <Label>To</Label>
          </Col>
          <Col>
            <Input
              style={{ width: '200px' }}
              type='date'
              id="to"
              name="to"
              innerRef={register({ required: true })}
              invalid={errors.to && true}
            />
          </Col>
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label for="name" md="2" sm="12">Pencarian</Label>
          <Col md="8" className="mt-1 mb-1">
            <Input
              placeholder="Masukkan Nama atau Nomor MR"
              id="name"
              name="name"
              innerRef={register({ required: true })}
              invalid={errors.name && true}
            />
          </Col>
          <Col md="1" className='mt-1'>
            <Button className="ml-1" color="primary" type="submit">Cari</Button>
          </Col>
        </FormGroup>
      </Form>
    </>
  );
}

export default HistoryFilterForm;
