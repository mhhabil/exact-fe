import * as yup from 'yup';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { PDFDashFilter } from '../requests';
import { handleFilter } from '@modules/medical-record/pdf-dashboard/stores/pdf-dashboard.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

interface IFormValue {
  form_name: string;
}

const SearchPDFForm = () => {

  const { filter } = useAppSelector(state => state.pdfDashboard);
  const dispatch = useAppDispatch();

  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange',
    resolver: yupResolver(yup.object().shape({
      form_name: yup.string(),
    })),
    defaultValues: {
      form_name: (filter && filter.search) ? filter.search : '',
    },
  });

  const handleSubmitForm = (data: IFormValue) => {
    const newFilter = PDFDashFilter.createFromJson({ ...filter, search: data.form_name });
    dispatch(handleFilter(newFilter));
  }

  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <FormGroup className="form-group" row>
          <Label for="form_name" md="2" sm="12">Pencarian</Label>
          <Col md="8" className="mb-1">
            <Input
              placeholder="Masukkan Nama Form"
              id="form_name"
              name="form_name"
              innerRef={register({ required: false })}
              invalid={errors.form_name && true}
            />
          </Col>
          <Col md="1">
            <Button className="ml-1" color="primary" type="submit">Cari</Button>
          </Col>
        </FormGroup>
      </Form>
    </>
  );
}

export default SearchPDFForm;
