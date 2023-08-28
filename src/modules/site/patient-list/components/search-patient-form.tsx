import * as yup from 'yup';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { PatientFilterRequest } from '@modules/site/patient-list/requests';
import { handleFilter } from '@modules/site/patient-list/stores/patient.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

interface IFormValue {
  name: string;
  from: string;
  to: string;
}

const SearchPatientForm = () => {

  const { filter } = useAppSelector(state => state.patient);
  const { userData } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange',
    resolver: yupResolver(yup.object().shape({
      name: yup.string(),
      from: yup.string(),
      to: yup.string(),
    })),
    defaultValues: {
      name: (filter && filter.search) ? filter.search : '',
      from: (filter && filter.tgl_mulai) ? filter.tgl_mulai : '',
      to: (filter && filter.tgl_selesai) ? filter.tgl_selesai : '',
    },
  });

  const normalDate = () => {
    const d = new Date();
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`
    return dateFormat;
  }

  const handleSubmitForm = (data: IFormValue) => {
    if (data && data.name && data.name !== '') {
      if (userData) {
        if (userData.isAllAccess) {
          const newFilter = PatientFilterRequest.createFromJson({ ...filter, search: data.name, offset: 0, tgl_mulai: '2000-01-01', tgl_selesai: normalDate() });
          dispatch(handleFilter(newFilter));
        } else if (userData && !userData.isRM && userData.isDokter) {
          const newFilter = PatientFilterRequest.createFromJson({ ...filter, search: data.name, offset: 0, isDokter: 1, isRM: 0, isOther: 0, tgl_mulai: data.from, tgl_selesai: data.to });
          dispatch(handleFilter(newFilter));
        } else if (userData && userData.isDokter && userData.isRM) {
          const newFilter = PatientFilterRequest.createFromJson({ ...filter, search: data.name, offset: 0, isDokter: 1, isRM: 0, isOther: 0, tgl_mulai: '2000-01-01', tgl_selesai: normalDate() });
          dispatch(handleFilter(newFilter));
        } else if (userData && !userData.isRM) {
          const newFilter = PatientFilterRequest.createFromJson({ ...filter, search: data.name, offset: 0, tgl_mulai: data.from, tgl_selesai: data.to });
          dispatch(handleFilter(newFilter));
        } else {
          const newFilter = PatientFilterRequest.createFromJson({ ...filter, search: data.name, offset: 0, tgl_mulai: '2000-01-01', tgl_selesai: normalDate() });
          dispatch(handleFilter(newFilter));
        }
      }
    } else {
      if (userData) {
        if (userData.isAllAccess) {
          const newFilter = PatientFilterRequest.createFromJson({ ...filter, search: data.name, offset: 0, tgl_mulai: data.from, tgl_selesai: data.to });
          dispatch(handleFilter(newFilter));
        } else if (userData.isRM && userData.isDokter) {
          const newFilter = PatientFilterRequest.createFromJson({ ...filter, search: data.name, offset: 0, isDokter: 1, isRM: 0, isOther: 0, tgl_mulai: data.from, tgl_selesai: data.to });
          dispatch(handleFilter(newFilter));
        } else {
          const newFilter = PatientFilterRequest.createFromJson({ ...filter, search: data.name, offset: 0, tgl_mulai: data.from, tgl_selesai: data.to });
          dispatch(handleFilter(newFilter));
        }
      }
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <FormGroup className="form-group" row>
          <Label for="name" md="2" sm="12">Pencarian</Label>
          <Col md="8" className="mb-1">
            <Input
              placeholder="Masukkan Nama atau Nomor MR"
              id="name"
              name="name"
              innerRef={register({ required: false })}
              invalid={errors.name && true}
            />
          </Col>
          <Col md="1">
            <Button className="ml-1" color="primary" type="submit">Cari</Button>
          </Col>
        </FormGroup>
        {
          userData && (userData.isRM || userData.isAllAccess) && (
            <FormGroup className="form-group align-items-center" row>
              <Col sm='1'>
                <Label>Tanggal</Label>
              </Col>
              <Col sm='1' style={{ marginLeft: '97px' }}>
                <Label style={{ marginLeft: '-15px'}}>From</Label>
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
                  style={{ width: '200px', marginLeft: '-10px' }}
                  type='date'
                  id="to"
                  name="to"
                  innerRef={register({ required: true })}
                  invalid={errors.to && true}
                />
              </Col>
              <Col></Col>
            </FormGroup>
          )
        }
      </Form>
    </>
  );
}

export default SearchPatientForm;
