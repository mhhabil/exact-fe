import * as yup from 'yup';
import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { Controller, useForm } from 'react-hook-form';
import Select, { components } from 'react-select';
import { IVerifyPinRequest } from '@shared/signature/requests';
import { SignatureModel } from '@shared/signature/models/signature.model';
import { SignatureService } from '@shared/signature/services';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useContext } from 'react';
import { AbilityContext } from '@src/utility/context/Can';

const SignaturePicker = (props: { isOpen: boolean, onClose: any, title: string, onPicked: any, persons: Array<any>, defaultPerson?: string, unit?: string }) => {

  const { userData } = useAppSelector(state => state.auth);

  const { isOpen, title, onClose, onPicked, persons, defaultPerson = userData.id, unit } = props;

  const ability = useContext(AbilityContext);

  const user = persons && persons.find((val: any) => val.ID_Karyawan === defaultPerson);
  const canByPass = (user && ability.can('read', 'EMR.VerifikasiPIN'));

  const { register, handleSubmit, errors, control } = useForm({
    mode: 'onChange',
    resolver: yupResolver(yup.object().shape({
      employeeId: yup.object().shape({
        label: yup.string(),
        value: yup.string(),
      }).required(),
      pin: (!canByPass) ? yup.string().required() : yup.mixed(),
    })),
    defaultValues: {
      employeeId: defaultPerson ? { label: userData.fullName, value: defaultPerson } : {},
      pin: '',
    },
  });

  const handleSubmitForm = (data: any) => {
    const action = (canByPass) ? SignatureService().verifyTanpaPin(data) : SignatureService().verifyPin(data);
    action.then(response => {
      const { data } = response.data;
      if (data) {
        const assigner: SignatureModel = new SignatureModel(data);
        onPicked(assigner);
        onClose();
      }
    }).catch((err) => {
      alert('Gagal memverifikasi PIN')
      console.log('err', err);
    });
  }

  const handleSubmitFormDoctor = (data: any) => {
    const action = (canByPass) ? SignatureService().verifyTanpaPin(data) : SignatureService().verifyPin(data);
    action.then(response => {
      const { data } = response.data;
      if (data) {
        const assigner: SignatureModel = new SignatureModel(data);
        onPicked(assigner, true);
        onClose();
      }
    }).catch((err) => {
      alert('Gagal memverifikasi PIN')
      console.log('err', err);
    });
  }

  const handleResetSignature = () => {
    onPicked({
      Signature: '/assets/default/ttd.png',
    })
    onClose();
  }

  return (
    <Modal isOpen={isOpen} className="modal-dialog modal-lg">
      <ModalHeader toggle={() => onClose()}>{ title }</ModalHeader>
      <ModalBody>
        <Row>
          <Col md="12">
            <Form autoComplete='new-password'>
              <FormGroup className="form-group">
                <Label for="employeeId">Nama</Label>
                {
                  persons && (
                    <Controller
                      control={control}
                      name='employeeId'
                      defaultValue={{ label: (persons && persons.find((val: any) => val.ID_Karyawan === defaultPerson)?.Nama) ?? '', value: defaultPerson ?? '' }}
                      render={({ onChange, name, ref }) => (
                        <Select
                          ref={ref}
                          defaultValue={{ label: (persons && persons.find((val: any) => val.ID_Karyawan === defaultPerson)?.Nama) ?? '', value: defaultPerson ?? '' }}
                          options={persons && persons.map((person: any) => ({ label: person.Nama, value: person.ID_Karyawan }))}
                          name={name}
                          isDisabled={canByPass}
                          onChange={(val) => {
                            onChange(val);
                          }}
                        />
                      )}
                    />
                  )
                }
              </FormGroup>
              {
                !canByPass && (
                  <FormGroup className="form-group">
                    <Label for="pin">PIN</Label>
                    <Input
                      type="password"
                      id="pin"
                      name="pin"
                      innerRef={register({ required: true })}
                      invalid={errors.pin && true}
                    />
                    {errors && errors.pin && <FormFeedback>{errors.pin.message}</FormFeedback>}
                  </FormGroup>
                )
              }
              <FormGroup className="form-group d-flex justify-content-center">
                <Button className='me-1' color='primary' type='button' onClick={handleSubmit(handleSubmitForm)}>
                  Proses
                </Button>
                {
                  unit && unit === 'dokter' && (
                    <Button className='me-1' id='button-save-signature' color='success' type='button' onClick={handleSubmit(handleSubmitFormDoctor)}>
                      Simpan TTD Dan Halaman
                    </Button>
                  )
                }
                <Button color='danger' className='me-1' type='button' onClick={() => handleResetSignature()}>
                  Reset TTD
                </Button>
                <Button color='secondary' type='button' onClick={() => onClose()}>
                  Batal
                </Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  )
}

export default SignaturePicker;
