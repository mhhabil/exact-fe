import { Button, Col, Form, Input, Label, Row } from 'reactstrap';
import { handleCompanyCode, handleCompanyName } from '../stores/select-company.store';
import { handleFilter, handleTreatment } from '@src/modules/site/patient-list/stores/patient.store';
import { ICompanyDetail } from '../models/companies.model';
import Image from 'next/image';
import { PatientFilterRequest } from '@src/modules/site/patient-list/requests';
import { handleLogout } from '@src/redux/authentication';
import { handlePatientDetail } from '@src/shared/header/stores/patient-detail.store';
import { useAppDispatch } from '@src/utility/hooks/useAppDispatch';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IApp {
  company_code: string;
  company_name: string;
}

const SelectCompany = (props: { userCompanies: Array<ICompanyDetail> }) => {
  const { userCompanies } = props;
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { filter } = useAppSelector(state => state.patient);
  const { userData } = useAppSelector(state => state.auth);
  const { companyCode, companyName } = useAppSelector(state => state.selectCompany);
  const { treatment } = useAppSelector(state => state.patient);
  const { patientDetail } = useAppSelector(state => state.patientDetail);


  const { register, errors, handleSubmit, setValue } = useForm({
    mode: 'onChange',
    defaultValues: {
      company_code: companyCode ? companyCode : '',
      company_name: companyName ? companyName : '',
    },
  });

  const handleCompanyChange = (e: any) => {
    const selected = userCompanies.find(item => item.code === e.target.value);
    if (selected) {
      setValue('company_name', selected.name);
    }
  }

  const handleSubmitForm = (value: IApp) => {
    if (treatment) {
      dispatch(handleTreatment(undefined));
    }
    if (patientDetail) {
      dispatch(handlePatientDetail(undefined));
    }
    if (value && value.company_code && value.company_code !== '') {
      dispatch(handleCompanyCode(value.company_code));
      dispatch(handleCompanyName(value.company_name));
      dispatch(handleFilter(PatientFilterRequest.createFromJson({
        ...filter,
        kode_cabang: value.company_code,
      })));
      router.push('/dashboard/home');
    }
  }
  return (
    <div className='h-100 d-flex flex-column'>
      <div className='d-flex align-items-end justify-content-end me-5 mt-2'>
        <Button
          onClick={() => {
            dispatch(handleLogout());
            dispatch(handlePatientDetail(undefined));
            dispatch(handleFilter(PatientFilterRequest.createFromJson({})));
          }}
          color='success'
        >
          Logout
        </Button>
      </div>
      <div className='h-100 d-flex flex-column align-items-center justify-content-center align-middle'>
        <Row>
          <Col className='d-flex flex-column align-items-center'>
            <Label className='fs-1 fw-bolder'>
              {
                `Selamat Datang ${userData.fullName} di Electronic Medical Record`
              }
            </Label>
            <Label className='fs-3 fw-bold mt-5'>
              Silahkan Pilih Nama RS/Klinik
            </Label>
            <Form className='d-flex flex-column align-items-center' onSubmit={handleSubmit(handleSubmitForm)}>
              <Input
                type='hidden'
                name='company_name'
                innerRef={register({ required: true })}
              />
              {
                userCompanies && (
                  <Input
                    className='mt-1'
                    style={{ width: '200px' }}
                    type='select'
                    name='company_code'
                    onChange={(e) => handleCompanyChange(e)}
                    innerRef={register({ required: true })}
                    invalid={errors.company_code && true}
                  >
                    <option value="">--Pilih Cabang--</option>
                    {
                      Array.isArray(userCompanies) && userCompanies.map((value: ICompanyDetail, key: number) => (
                        <option key={key} value={value.code}>{value.name}</option>
                      ))
                    }
                  </Input>
                )
              }
              <Button
                className='mt-2'
                type='submit'
                color='primary'
              >
                Pilih
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex flex-column align-items-center'>
            <Label style={{ marginBottom: '0px', marginTop: '50px' }}>
              &copy; {new Date().getFullYear()}{' '} Global Inovasi Cahaya
            </Label>
            <Image
                src='/assets/default/gic-logo.png'
                width='150rem'
                height='150rem'
                objectFit="contain"
                className='m-0'
              />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default SelectCompany;
