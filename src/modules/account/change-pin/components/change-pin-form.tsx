import { Button, Col, Form, FormGroup, Input, Label, Row, Table } from "reactstrap";
import { Fragment, useEffect, useState } from "react";
import { ChangePin } from "../models/change-pin.model";
import { ChangePinRequest } from "../requests";
import { ChangePinService } from "../services";
import { ErrorMessage } from "@hookform/error-message";
import { RefreshCcw } from "react-feather";
import { SignaturePin } from "@src/shared/signature-pin/components";
import { SubmitButton } from "@src/shared/button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

const ChangePinForm = (props: { data: ChangePin }) => {
  const { data } = props;

  const [processing, setProcessing] = useState(false);
  const [sign, setSign] = useState<string | undefined>((data && data.Tanda_Tangan) ? data.Tanda_Tangan : undefined)
  const router = useRouter();

  const { register, setError, setValue, errors, handleSubmit } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
    resolver: yupResolver(ChangePinRequest.schema()),
    defaultValues: {
      signature: (data && data.Tanda_Tangan) ? data.Tanda_Tangan : '',
      new_pin: '',
      verification_pin: '',
      old_pin: '',
    },
  })

  useEffect(() => {
    if (data && data.Tanda_Tangan.includes('localhost')) {
      const newSign = data.Tanda_Tangan.replace('localhost', '192.168.100.250')
      setSign(newSign);
      setValue('signature', newSign)
    }
  }, [data])

  const handleSubmitForm = (val: any) => {
    const params = ChangePinRequest.createFromJson(val);
    setProcessing(true);
    ChangePinService().update(params).then((response: any) => {
      setProcessing(false);
    }).catch(error => {
      setError('old_pin', { message: 'PIN Lama salah' })
      setProcessing(false);
    })
  }

  const handleSigned = (image: string) => {
    setValue('signature', image);
  }

  const handleResetPin = () => {
    ChangePinService().reset()
  }
  return (
    <Fragment>
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
                        initialImage={sign}
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
                <td style={{ width: '20%' }}>
                  <Row>
                    <Col>
                      <Label>
                        PIN Lama
                      </Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '70%' }}>
                  <Row>
                    <Col>
                      <Input
                        id="old-pin"
                        style={{ width: '300px' }}
                        type="password"
                        name="old_pin"
                        innerRef={register({ required: true })}
                        invalid={errors.old_pin && true}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="old_pin"
                        render={({ messages }) => {
                          if (errors && errors.old_pin && errors.old_pin.message) {
                            return (
                              <p>{errors.old_pin.message}</p>
                            )
                          }
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
        <Row>
          <Col>
            <Button
              color="primary"
              onClick={() => handleResetPin()}
            >
              <RefreshCcw style={{ marginRight: '10px' }}/>
              Reset
            </Button>
          </Col>
        </Row>
      </Form>
    </Fragment>
  )
}

export default ChangePinForm;
