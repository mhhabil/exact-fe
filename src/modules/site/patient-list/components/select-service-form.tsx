import * as yup from 'yup';
import { Col, Form, FormGroup, Input, Label } from 'reactstrap';
import { PatientFilterRequest } from '@modules/site/patient-list/requests';
import { handleFilter } from '@modules/site/patient-list/stores/patient.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

const services = [
  {
    name: '',
    label: 'All',
  },
  {
    name: 'BPJS',
    label: 'BPJS',
  },
  {
    name: 'UMUM',
    label: 'UMUM',
  },
];

const SelectServiceForm = () => {

  const { filter } = useAppSelector(state => state.patient);
  const dispatch = useAppDispatch();

  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange',
    resolver: yupResolver(yup.object().shape({
      service: yup.string(),
    })),
    defaultValues: {
      service: (filter && filter.tipe_pasien) ? filter.tipe_pasien : '',
    },
  });

  const handleChangeService = (e: any) => {
    const newFilter = PatientFilterRequest.createFromJson({ ...filter, tipe_pasien: e.target.value, offset: 0 });
    dispatch(handleFilter(newFilter));
  }

  return (
    <>
      <Form onSubmit={handleSubmit(() => {})}>
        <FormGroup className="form-group" row>
          <Label for="service" md="2" xxl="4" sm="12">Pilih Pelayanan</Label>
          <Col md="8" sm="12" className="mb-1">
            <Input
              type="select"
              id="service"
              name="service"
              innerRef={register({ required: true })}
              invalid={errors.service && true}
              onChange={(e) => handleChangeService(e)}>
              {
                services && services.map((service, key) => {
                  return <option key={key} value={service.name}>{service.label}</option>
                })
              }
            </Input>
          </Col>
        </FormGroup>
      </Form>
    </>
  );
}

export default SelectServiceForm;
