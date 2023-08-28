import { Button, Col, Form, FormGroup, Input, Label, Row, Table } from "reactstrap";
import { useEffect, useState } from "react";
import { ChangePinRequest } from "../requests";
import { ChangePinService } from "../services";
import { ErrorMessage } from "@hookform/error-message";
import { SignaturePin } from "@src/shared/signature-pin/components";
import { SubmitButton } from "@src/shared/button";
import { fetchChangePin } from "../stores/change-pin.store";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

const NewPinForm = () => {

  const [processing, setProcessing] = useState(false);
  const dispatch = useAppDispatch()

  const { register, setValue, errors, handleSubmit } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
    resolver: yupResolver(ChangePinRequest.schema()),
    defaultValues: {
      signature: '',
      new_pin: '',
      verification_pin: '',
    },
  })

  const handleSubmitForm = (val: any) => {
    const params = ChangePinRequest.createFromJson(val);
    setProcessing(true);
    ChangePinService().update(params).then((response: any) => {
      setProcessing(false);
      dispatch(fetchChangePin())
    })
  }

  const handleSigned = (image: string) => {
    setValue('signature', image);
  }
  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <Row>
        <Col>
          <Table style={{ width: '100%' }} borderless>
            <tr>
              <td style={{ width: '10%' }}></td>
              <td style={{ width: '20%' }}>
                <Label>
                  Tanda Tangan
                </Label>
              </td>
              <td style={{ width: '70%' }}>
                <Row>
                  <Col>
                    <SignaturePin
                      label="Tanda Tangan Pegawai"
                      formName='account/change-pin'
                      component='change_pin_signature_01'
                      initialImage={undefined}
                      onSigned={(image: string) => handleSigned(image)}
                    />
                    <Input
                      id="signature"
                      type="hidden"
                      name="signature"
                      innerRef={register({ required: true })}
                      invalid={errors.signature && true}
                    />
                  </Col>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td style={{ width: '10%' }}></td>
              <td style={{ width: '20%' }}>
                <Row className="mt-2">
                  <Col>
                    <Label>
                    PIN Baru
                    </Label>
                  </Col>
                </Row>
              </td>
              <td style={{ width: '70%' }}>
                <Row className="mt-2">
                  <Col>
                    <Input
                      id="new-pin"
                      style={{ width: '300px' }}
                      type="password"
                      name="new_pin"
                      innerRef={register({ required: true })}
                      invalid={errors.new_pin && true}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="new_pin"
                      render={({ messages }) => {
                        return messages ? Object.entries(messages).map(([type, message]) => (
                          <p key={type}>{message}</p>
                        )) : null;
                      }}
                    />
                  </Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td style={{ width: '10%' }}></td>
              <td style={{ width: '20%' }}>
                <Row>
                  <Col>
                    <Label>
                    Verifikasi PIN Baru
                    </Label>
                  </Col>
                </Row>
              </td>
              <td style={{ width: '70%' }}>
                <Row>
                  <Col>
                    <Input
                      id="verification-pin"
                      style={{ width: '300px' }}
                      type="password"
                      name="verification_pin"
                      innerRef={register({ required: true })}
                      invalid={errors.verification_pin && true}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="verification_pin"
                      render={({ messages }) => {
                        return messages ? Object.entries(messages).map(([type, message]) => (
                          <p key={type}>{message}</p>
                        )) : null;
                      }}
                    />
                  </Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td style={{ width: '10%' }}></td>
              <td style={{ width: '20%' }}></td>
              <td style={{ width: '70%' }}>
                <FormGroup>
                  <SubmitButton
                    label="Simpan"
                    buttonColor='success'
                    spinnerStyle={{ width: '1rem', height: '1rem' }}
                    spinnerColor='light'
                    processing={processing}
                  />
                </FormGroup>
              </td>
            </tr>
          </Table>
        </Col>
      </Row>
    </Form>
  )
}

export default NewPinForm;
