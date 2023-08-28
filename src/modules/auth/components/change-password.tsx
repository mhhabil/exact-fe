import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { ChangePasswordRequest, IChangePasswordRequest } from "../requests";
import { ErrorMessage } from "@hookform/error-message";
import { SubmitButton } from "@src/shared/button";
import { handleLogout } from '@src/redux/authentication';
import { handlePatientDetail } from '@src/shared/header/stores/patient-detail.store';
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useForm } from "react-hook-form";
import { useState } from "react"
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { AuthService } from "../services";

const ChangePassword = () => {

  const [processing, setProcessing] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const { handleSubmit, register, errors } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    resolver: yupResolver(ChangePasswordRequest.schema()),
    defaultValues: {
      old_password: '',
      new_password: '',
      confirm_password: '',
    },
  })

  const handleSubmitForm = (value: IChangePasswordRequest) => {
    const params = new ChangePasswordRequest(value);
    AuthService()
      .changePassword(params)
      .then((resp) => {
        const { status } = resp;
        if (status === 200) {
          dispatch(handleLogout());
          dispatch(handlePatientDetail(undefined));
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <FormGroup className="form-group" row>
        <Col>
          <Label>
            Password anda telah expired, silahkan ubah password anda.
          </Label>
        </Col>
      </FormGroup>
      <FormGroup className="form-group align-items-center" row>
        <Col md='2'>
          <Label>Password Saat Ini</Label>
        </Col>
        <Col md='4'>
          <Input
            type="password"
            name="old_password"
            innerRef={register({ required: true })}
            invalid={errors.old_password && true}
          />
          <ErrorMessage
            errors={errors}
            name="old_password"
            render={({ messages }) => {
              return messages ? Object.entries(messages).map(([type, message]) => (
                <p key={type} className='text-danger' style={{ fontSize: '8pt' }}>{message}</p>
              )) : null;
            }}
          />
        </Col>
      </FormGroup>
      <FormGroup className="form-group align-items-center" row>
        <Col md='2'>
          <Label>Password Baru</Label>
        </Col>
        <Col md='4'>
          <Input
            type="password"
            name="new_password"
            innerRef={register({ required: true })}
            invalid={errors.old_password && true}
          />
          <ErrorMessage
            errors={errors}
            name="new_password"
            render={({ messages }) => {
              return messages ? Object.entries(messages).map(([type, message]) => (
                <p key={type} className='text-danger m-0' style={{ fontSize: '8pt' }}>{message}</p>
              )) : null;
            }}
          />
        </Col>
      </FormGroup>
      <FormGroup className="form-group align-items-center" row>
        <Col md='2'>
          <Label>Konfirmasi Password Baru</Label>
        </Col>
        <Col md='4'>
          <Input
            type="password"
            name="confirm_password"
            innerRef={register({ required: true })}
            invalid={errors.old_password && true}
          />
          <ErrorMessage
            errors={errors}
            name="confirm_password"
            render={({ messages }) => {
              return messages ? Object.entries(messages).map(([type, message]) => (
                <p key={type} className='text-danger m-0' style={{ fontSize: '8pt' }}>{message}</p>
              )) : null;
            }}
          />
        </Col>
      </FormGroup>
      <FormGroup className="form-group mt-2" row>
        <Col md='2'></Col>
        <Col md='4'>
          <SubmitButton
            label="Ubah Password"
            buttonColor='success'
            spinnerStyle={{ width: '1rem', height: '1rem' }}
            spinnerColor='light'
            processing={processing}
          />
          <Button
            color="warning"
            onClick={() => {
              dispatch(handleLogout());
              dispatch(handlePatientDetail(undefined));
            }}
          >
            Logout
          </Button>
        </Col>
      </FormGroup>
    </Form>
  )
}

export default ChangePassword;
