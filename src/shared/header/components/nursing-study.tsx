import BaseSelect, { StylesConfig } from 'react-select';
import { Col, Form, FormGroup, Input, Label } from "reactstrap";
import { useEffect, useState } from "react";
import { AppRequest } from "@src/shared/request";
import FixRequiredSelect from '@shared/input/components/FixRequiredSelect';
import { Information } from "@shared/header/models/detail-information.model";
import { PatientInformationService } from "@shared/header/services";
import { SubmitButton } from "@src/shared/button";
import { UpdateInformationRequest } from "@shared/header/requests";
import allergiess from "../consts/allergies";
import { fetchPatientDetail } from "../stores/patient-detail.store";
import rptss from "../consts/rpts";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

interface IColourOptions {
  label: string;
  value: string;
  isDisabled: boolean;
}

const NursingStudy = (props: { data: Information, onSuccessSubmit: any, meds: Array<string> }) => {

  const { treatment } = useAppSelector(state => state.patient);
  const { userData } = useAppSelector(state => state.auth);
  const { companyCode } = useAppSelector(state => state.selectCompany);
  const { data, onSuccessSubmit, meds } = props;
  const dispatch = useAppDispatch();
  const [processing, setProcessing] = useState<boolean>(false);

  const [allergyRadio, setAllergyRadio] = useState<string>(data.Pengkajian_Keperawatan && data.Pengkajian_Keperawatan.Alergi_Radio ? data.Pengkajian_Keperawatan.Alergi_Radio : (data.Alergi && !data.Pengkajian_Keperawatan?.Alergi) ? '1' : '');
  const [allergies, setAllergies] = useState<any>(data.Pengkajian_Keperawatan && data.Pengkajian_Keperawatan.Alergi_Select && Array.isArray(data.Pengkajian_Keperawatan.Alergi_Select) ? data.Pengkajian_Keperawatan.Alergi_Select : []);
  const [otherAllergy, setOtherAllergy] = useState<boolean>(!!((data.Pengkajian_Keperawatan?.Alergi_Lain === '1') || (data.Alergi && !data.Pengkajian_Keperawatan?.Alergi)));
  // const [sendAllergy, setSendAllergy] = useState<string>(data.Pengkajian_Keperawatan && data.Pengkajian_Keperawatan.Alergi ? data.Pengkajian_Keperawatan.Alergi : '');

  const [rptRadio, setRptRadio] = useState<string>(data.Pengkajian_Keperawatan && data.Pengkajian_Keperawatan.RPT_Radio ? data.Pengkajian_Keperawatan.RPT_Radio : '');
  const [rpts, setRpts] = useState<any>(data.Pengkajian_Keperawatan && data.Pengkajian_Keperawatan.RPT_Select && Array.isArray(data.Pengkajian_Keperawatan.RPT_Select) ? data.Pengkajian_Keperawatan.RPT_Select : []);
  const [otherRpt, setOtherRpt] = useState<boolean>(!!(data.Pengkajian_Keperawatan?.RPT_Lain === '1'));
  // const [sendRPT, setSendRPT] = useState<string>(data.Pengkajian_Keperawatan && data.Pengkajian_Keperawatan.RPT ? data.Pengkajian_Keperawatan.RPT : '');

  const [rpoRadio, setRpoRadio] = useState<string>(data.Pengkajian_Keperawatan && data.Pengkajian_Keperawatan.RPO_Radio ? data.Pengkajian_Keperawatan.RPO_Radio : '');
  const [rpos, setRpos] = useState<any>(data.Pengkajian_Keperawatan && data.Pengkajian_Keperawatan.RPO_Select && Array.isArray(data.Pengkajian_Keperawatan.RPO_Select) ? data.Pengkajian_Keperawatan.RPO_Select : [])
  const [otherRpo, setOtherRpo] = useState<boolean>(!!(data.Pengkajian_Keperawatan?.RPO_Lain === '1'));
  // const [sendRPO, setSendRPO] = useState<string>(data.Pengkajian_Keperawatan && data.Pengkajian_Keperawatan.RPO ? data.Pengkajian_Keperawatan.RPO : '');

  const { register, handleSubmit, setValue, getValues, errors } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(UpdateInformationRequest.schema()),
    defaultValues: {
      allergy: data.Pengkajian_Keperawatan && data.Pengkajian_Keperawatan.Alergi ? data.Pengkajian_Keperawatan.Alergi : data.Alergi ? data.Alergi : '',
      allergy_radio: data.Pengkajian_Keperawatan && data.Pengkajian_Keperawatan.Alergi_Radio ? data.Pengkajian_Keperawatan.Alergi_Radio : (!data.Pengkajian_Keperawatan?.Alergi && data.Alergi) ? '1' : '',
      other_allergy: data.Pengkajian_Keperawatan && data.Pengkajian_Keperawatan.Alergi_Lain ? data.Pengkajian_Keperawatan.Alergi_Lain : (!data.Pengkajian_Keperawatan && data.Alergi) ? '1' : '',
      other_allergy_text: data?.Pengkajian_Keperawatan?.Alergi_Lain_Teks ?? data?.Alergi ?? '',
      rpt: data.Pengkajian_Keperawatan && data.Pengkajian_Keperawatan.RPT ? data.Pengkajian_Keperawatan.RPT : '',
      rpt_radio: data?.Pengkajian_Keperawatan?.RPT_Radio ?? '',
      other_rpt: data?.Pengkajian_Keperawatan?.RPT_Lain ?? '',
      other_rpt_text: data?.Pengkajian_Keperawatan?.RPT_Lain_Teks ?? '',
      rpo: data.Pengkajian_Keperawatan && data.Pengkajian_Keperawatan.RPO ? data.Pengkajian_Keperawatan.RPO : '',
      rpo_radio: data?.Pengkajian_Keperawatan?.RPO_Radio ?? '',
      other_rpo: data?.Pengkajian_Keperawatan?.RPO_Lain ?? '',
      other_rpo_text: data?.Pengkajian_Keperawatan?.RPO_Lain_Teks ?? '',
      kll_radio: data?.Pengkajian_Keperawatan?.KLL_Radio ?? '',
      officer_id: userData.id ?? '',
      company_code: companyCode ?? '',
    },
  })

  const handleSubmitForm = (value: UpdateInformationRequest) => {
    if (!treatment) {
      return;
    }
    setProcessing(true);
    const stringsAllergy = allergies.map((item: any) => item.value);
    const stringsRPT = rpts.map((item: any) => item.value);
    const stringsRPO = rpos.map((item: any) => item.value);

    let finalAllergy,
      finalRPT,
      finalRPO

    if (value.other_allergy_text && value.other_allergy_text !== '') {
      stringsAllergy.push(value.other_allergy_text);
    }
    if (value.other_rpt_text && value.other_rpt_text !== '') {
      stringsRPT.push(value.other_rpt_text);
    }
    if (value.other_rpo_text && value.other_rpo_text !== '') {
      stringsRPO.push(value.other_rpo_text);
    }

    finalAllergy = stringsAllergy.join(', ');
    finalRPT = stringsRPT.join(', ');
    finalRPO = stringsRPO.join(', ');

    if (value.allergy_radio === '0') {
      finalAllergy = 'Tidak Ada'
    }
    if (value.rpt_radio === '0') {
      finalRPT = 'Tidak Ada'
    }
    if (value.rpo_radio === '0') {
      finalRPO = 'Tidak Ada'
    }

    const appRequest = AppRequest.createFromStore(treatment)
    const params = UpdateInformationRequest.createFromJson({ ...appRequest, ...value, allergy_select: allergies, rpt_select: rpts, rpo_select: rpos, allergy: finalAllergy, rpt: finalRPT, rpo: finalRPO });

    PatientInformationService().updateAllergy(params)
      .then(() => {
        dispatch(fetchPatientDetail(AppRequest.createFromStore(treatment)));
        setProcessing(false)
        onSuccessSubmit()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleChangeAllergyRadio = (e: any) => {
    if (e.target.value === '0') {
      setValue('allergy', 'Tidak Ada');
      setAllergies([]);
    }
    setOtherAllergy(false);
    setAllergyRadio(e.target.value);
  }

  const handleAllergyCheck = (e: any) => {
    setValue('other_allergy', e.target.checked ? '1' : '0');
    setOtherAllergy(e.target.checked);
  }

  const handleAddAllergies = (value: any) => {
    if (value && Array.isArray(value)) {
      setAllergies(value);
    }
  }

  const handleChangeRPTRadio = (e: any) => {
    if (e.target.value === '0') {
      setOtherRpt(false);
      setRpts([]);
      setValue('rpt', 'Tidak Ada')
    }
    setRptRadio(e.target.value);
  }

  const handleRPTCheck = (e: any) => {
    setValue('other_rpt', e.target.checked ? '1' : '0');
    setOtherRpt(e.target.checked);
  }

  const handleAddRPT = (value: any) => {
    if (value && Array.isArray(value)) {
      setRpts(value);
    }
  }

  const handleChangeRPORadio = (e: any) => {
    if (e.target.value === '0') {
      setOtherRpo(false);
      setRpos([]);
      setValue('rpo', 'Tidak Ada')
    }
    setRpoRadio(e.target.value);
  }

  const handleRPOCheck = (e: any) => {
    setValue('other_rpo', e.target.checked ? '1' : '0');
    setOtherRpo(e.target.checked);
  }

  const handleAddRPO = (value: any) => {
    if (value && Array.isArray(value)) {
      setRpos(value);
    }
  }

  const colourStyles: StylesConfig<IColourOptions> = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { isDisabled }) => {
      return {
        ...styles,
        backgroundColor: isDisabled ? 'gray' : 'white',
        color: isDisabled ? 'black' : 'black',
        fontSize: isDisabled ? '12pt' : '10pt',
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
  };

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <FormGroup className="form-group align-items-center mt-1" row>
        <Input
          type="hidden"
          name="officer_id"
          innerRef={register({ required: true })}
        />
        <Col md='3'>
          Alergi
        </Col>
        <Col md='3'>
          <Input
            type="radio"
            name="allergy_radio"
            required
            value='0'
            style={{ marginRight: '2px' }}
            innerRef={register({ required: false })}
            defaultChecked={!!(data.Pengkajian_Keperawatan && data.Pengkajian_Keperawatan.Alergi_Radio && data.Pengkajian_Keperawatan.Alergi_Radio === '0')}
            invalid={errors.allergy_radio && true}
            onChange={(e) => handleChangeAllergyRadio(e)}
          />{' '}
          <Label>Tidak Ada</Label>
        </Col>
        <Col md='3'>
          <Input
            type="radio"
            name="allergy_radio"
            required
            value='1'
            style={{ marginRight: '2px' }}
            innerRef={register({ required: false })}
            defaultChecked={!!((data.Pengkajian_Keperawatan && data.Pengkajian_Keperawatan.Alergi_Radio && data.Pengkajian_Keperawatan.Alergi_Radio === '1') || (!data.Pengkajian_Keperawatan && data.Alergi))}
            invalid={errors.allergy_radio && true}
            onChange={(e) => handleChangeAllergyRadio(e)}
          />{' '}
          <Label>Ada</Label>
        </Col>
      </FormGroup>
      {
        allergyRadio === '1' ? (
          <>
            <FormGroup className="form-group align-items-center mt-1" row>
              <Col md='3'></Col>
              <Col md='8'>
                <FixRequiredSelect
                  {...props}
                  required={!otherAllergy}
                  isMulti
                  onChange={(val: any) => {
                    handleAddAllergies(val);
                  }}
                  styles={colourStyles}
                  defaultValue={data.Pengkajian_Keperawatan && data.Pengkajian_Keperawatan.Alergi_Select ? data.Pengkajian_Keperawatan.Alergi_Select : []}
                  placeholder='Pilih Alergi'
                  SelectComponent={BaseSelect}
                  options={allergiess && allergiess.map((allergy) => ({ label: allergy.label, value: allergy.label, isDisabled: allergy.disabled }))}
                />
              </Col>
            </FormGroup>
            <FormGroup className="form-group align-items-center" style={{ marginTop: '2px', marginBottom: '2px' }} row>
              <Col md='3'></Col>
              <Col md='8'>
                <Input
                  type="checkbox"
                  name="other_allergy"
                  value='1'
                  defaultChecked={otherAllergy}
                  innerRef={register('other_allergy') as any}
                  invalid={errors.other_allergy && true}
                  onChange={(e) => handleAllergyCheck(e)}
                />{' '}
                <Label>Lain-lain</Label>
                {
                  otherAllergy && (
                    <Input
                      type="textarea"
                      name="other_allergy_text"
                      innerRef={register({ required: true })}
                      invalid={errors.other_allergy_text && true}
                      required
                    />
                  )
                }
              </Col>
            </FormGroup>
          </>
        ) : null
      }
      <FormGroup className="form-group align-items-center mt-3" row>
        <Col md='3'>
          RPT
        </Col>
        <Col md='3'>
          <Input
            type="radio"
            name="rpt_radio"
            required
            value='0'
            style={{ marginRight: '2px' }}
            innerRef={register({ required: true })}
            defaultChecked={!!(data?.Pengkajian_Keperawatan?.RPT_Radio === '0')}
            invalid={errors.rpt_radio && true}
            onChange={(e) => handleChangeRPTRadio(e)}
          />{' '}
          <Label>Tidak Ada</Label>
        </Col>
        <Col md='3'>
          <Input
            type="radio"
            name="rpt_radio"
            required
            value='1'
            style={{ marginRight: '2px' }}
            innerRef={register({ required: true })}
            defaultChecked={!!(data?.Pengkajian_Keperawatan?.RPT_Radio === '1')}
            invalid={errors.rpt_radio && true}
            onChange={(e) => handleChangeRPTRadio(e)}
          />{' '}
          <Label>Ada</Label>
        </Col>
      </FormGroup>
      {
        rptRadio === '1' ? (
          <>
            <FormGroup className="form-group align-items-center mt-1" row>
              <Col md='3'></Col>
              <Col md='8'>
                <FixRequiredSelect
                  {...props}
                  required={!otherRpt}
                  isMulti
                  onChange={(val: any) => {
                    handleAddRPT(val);
                  }}
                  styles={colourStyles}
                  defaultValue={data.Pengkajian_Keperawatan && data.Pengkajian_Keperawatan.RPT_Select ? data.Pengkajian_Keperawatan.RPT_Select : []}
                  placeholder='Pilih RPT'
                  SelectComponent={BaseSelect}
                  options={rptss && rptss.map((rpt: string) => ({ label: rpt, value: rpt }))}
                />
              </Col>
            </FormGroup>
            <FormGroup className="form-group align-items-center" style={{ marginTop: '2px', marginBottom: '2px' }} row>
              <Col md='3'></Col>
              <Col md='8'>
                <Input
                  type="checkbox"
                  name="other_rpt"
                  defaultChecked={!!(data?.Pengkajian_Keperawatan && data.Pengkajian_Keperawatan.RPT_Lain && data.Pengkajian_Keperawatan.RPT_Lain === '1')}
                  innerRef={register('other_rpt') as any}
                  value='1'
                  onChange={(e) => handleRPTCheck(e)}
                  invalid={errors.other_rpt && true}
                />{' '}
                <Label>Lain-lain</Label>
                {
                  otherRpt && (
                    <Input
                      type="textarea"
                      name="other_rpt_text"
                      innerRef={register({ required: true })}
                      invalid={errors.other_rpt_text && true}
                      required
                    />
                  )
                }
              </Col>
            </FormGroup>
          </>
        ) : null
      }
      <FormGroup className="form-group align-items-center mt-3" row>
        <Col md='3'>
          RPO
        </Col>
        <Col md='3'>
          <Input
            type="radio"
            name="rpo_radio"
            value='0'
            style={{ marginRight: '2px' }}
            defaultChecked={!!(data?.Pengkajian_Keperawatan?.RPO_Radio === '0')}
            innerRef={register({ required: false })}
            invalid={errors.rpo_radio && true}
            onChange={(e) => handleChangeRPORadio(e)}
          />{' '}
          <Label>Tidak Ada</Label>
        </Col>
        <Col md='3'>
          <Input
            type="radio"
            name="rpo_radio"
            value='1'
            style={{ marginRight: '2px' }}
            defaultChecked={!!(data?.Pengkajian_Keperawatan?.RPO_Radio === '1')}
            innerRef={register({ required: false })}
            invalid={errors.rpo_radio && true}
            onChange={(e) => handleChangeRPORadio(e)}
          />{' '}
          <Label>Ada</Label>
        </Col>
      </FormGroup>
      {
        rpoRadio === '1' ? (
          <>
            <FormGroup className="form-group align-items-center mt-1" row>
              <Col md='3'></Col>
              <Col md='8'>
                <FixRequiredSelect
                  {...props}
                  required={!otherRpo}
                  isMulti
                  onChange={(val: any) => {
                    handleAddRPO(val);
                  }}
                  styles={colourStyles}
                  defaultValue={data.Pengkajian_Keperawatan && data.Pengkajian_Keperawatan.RPO_Select ? data.Pengkajian_Keperawatan.RPO_Select : []}
                  placeholder='Pilih RPO'
                  SelectComponent={BaseSelect}
                  options={meds && meds.map((med: string) => ({ label: med, value: med }))}
                />
              </Col>
            </FormGroup>
            <FormGroup className="form-group align-items-center" style={{ marginTop: '2px', marginBottom: '2px' }} row>
              <Col md='3'></Col>
              <Col md='8'>
                <Input
                  type="checkbox"
                  name="other_rpo"
                  defaultChecked={!!(data?.Pengkajian_Keperawatan && data.Pengkajian_Keperawatan.RPO_Lain && data.Pengkajian_Keperawatan.RPO_Lain === '1')}
                  innerRef={register('other_rpo') as any}
                  value='1'
                  invalid={errors.other_rpo && true}
                  onChange={(e) => handleRPOCheck(e)}
                />{' '}
                <Label>Lain-lain</Label>
                {
                  otherRpo && (
                    <Input
                      type="textarea"
                      name="other_rpo_text"
                      innerRef={register({ required: true })}
                      invalid={errors.other_rpo_text && true}
                      required
                    />
                  )
                }
              </Col>
            </FormGroup>
          </>
        ) : null
      }
      <FormGroup className="form-group align-items-center mt-3" row>
        <Col md='3'>
          KLL
        </Col>
        <Col md='3'>
          <Input
            type="radio"
            name="kll_radio"
            value='1'
            style={{ marginRight: '2px' }}
            defaultChecked={!!(data?.Pengkajian_Keperawatan?.KLL_Radio === '1')}
            innerRef={register({ required: false })}
            invalid={errors.kll_radio && true}
          />{' '}
          <Label>Ya</Label>
        </Col>
        <Col md='3'>
          <Input
            type="radio"
            name="kll_radio"
            value='0'
            style={{ marginRight: '2px' }}
            defaultChecked={!!(data?.Pengkajian_Keperawatan?.KLL_Radio === '0')}
            innerRef={register({ required: false })}
            invalid={errors.kll_radio && true}
          />{' '}
          <Label>Tidak</Label>
        </Col>
      </FormGroup>
      <FormGroup className="form-group align-items-center text-center mt-1" row>
        <Col>
          <SubmitButton
            label="Simpan"
            style={{ fontSize: '9pt' }}
            processing={processing}
            buttonColor='success'
            spinnerStyle={{ width: '1rem', height: '1rem' }}
            spinnerColor='light'
          />
        </Col>
      </FormGroup>
    </Form>
  )
}

export default NursingStudy;
