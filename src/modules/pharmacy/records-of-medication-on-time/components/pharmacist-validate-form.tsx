import { Button, Label, Nav, NavItem, NavLink, TabContent, TabPane, Table } from "reactstrap";
import { IDrugAdmin, IRecordsGrouped } from "../models/records-of-medication-on-time.model";
import { ISignatureModel, SignatureModel } from "@src/shared/signature/models/signature.model";
import { AppRequest } from "@src/shared/request";
import { DateTimeConverter } from "@src/shared/datetime-converter";
import Image from 'next/image';
import { RecordsOfMedicationOnTimeService } from "../services";
import { Signature } from "@src/shared/signature/components";
import { SubmitButton } from "@src/shared/button";
import { ValidateRecords } from "../requests";
import { fetchRecordsOfMedicationOnTime } from "../stores/records-of-medication-on-time.store";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useState } from "react";

interface IRequestValidate {
  date: string;
  value: string;
}

const PharmacistValidateForm = (props: { data: Array<IRecordsGrouped>, onCancel: any }) => {
  const { data, onCancel } = props;
  const dispatch = useAppDispatch();
  const { treatment } = useAppSelector(state => state.patient);
  const { nurses } = useAppSelector(state => state.nurse);
  const [activeTab, setActiveTab] = useState<string>('1');
  const [processing, setProcessing] = useState<boolean>(false);
  const [ttdApoteker, setTtdApoteker] = useState<IRequestValidate | undefined>(undefined);
  const [idApoteker, setIdApoteker] = useState<IRequestValidate | undefined>(undefined);

  const toggle = (tab: string) => {
    setActiveTab(tab);
  }

  const getMedsFormat = (arr: Array<IDrugAdmin>) => {
    if (arr) {
      const newArr = arr.map((item) => {
        const string = `${item.Nama} - ${item.Aturan_Pakai}\nRute: ${item.Rute}`
        return string;
      })
      return newArr.join('\n\n')
    }
  }

  const handlePharmacistSigned = (signature: ISignatureModel, date: string) => {
    setTtdApoteker({
      date,
      value: signature.Signature,
    });
    setIdApoteker({
      date,
      value: signature.ID_Karyawan,
    })
  }

  const handleSubmitForm = (date: string) => {
    if (!treatment) {
      return;
    }
    setProcessing(true)
    const obj = {
      date,
      id_apoteker: idApoteker && idApoteker.date === date ? idApoteker.value : '',
      ttd_apoteker: ttdApoteker && ttdApoteker.date === date ? ttdApoteker.value : '',
    }
    const appRequest = AppRequest.createFromStore(treatment);
    const params = ValidateRecords.createFromJson({...obj, ...appRequest})
    RecordsOfMedicationOnTimeService()
      .validate(params)
      .then(() => {
        dispatch(fetchRecordsOfMedicationOnTime(appRequest));
        setProcessing(false);
        onCancel()
      })
      .catch((err) => {
        setProcessing(false);
        onCancel()
        console.error(err);
      })
  }

  return (
    <div>
      <Nav tabs className="mt-2">
        {
          data && Array.isArray(data) && data.map((item, key: number) => (
            <NavItem key={key}>
              <NavLink className={(activeTab && activeTab === `${key + 1}`) ? 'active' : ''} onClick={() => toggle(`${key + 1}`)}>
                {item.date}
              </NavLink>
            </NavItem>
          ))
        }
      </Nav>
      <TabContent activeTab={activeTab}>
        {
          data && Array.isArray(data) && data.map((item, key: number) => (
            <TabPane key={key} tabId={`${key + 1}`}>
              <Table responsive bordered className="my-2">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Waktu Pemberian</th>
                    <th>Obat & Aturan Pakai</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    item.objects && Array.isArray(item.objects) && item.objects.map((value, index: number) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{DateTimeConverter.getTime(value.Waktu_Pemberian)}</td>
                        <td>
                          <pre className="bg-white">{getMedsFormat(value.Obat)}</pre>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
              {
                !item.isValidated ? (
                  <Signature
                    label="Apoteker"
                    type="picker"
                    persons={nurses}
                    initialImage={undefined}
                    additionalLabel={undefined}
                    onSigned={(assigner: SignatureModel) => handlePharmacistSigned(assigner, item.date)}
                  />
                ) : item.isValidated && item.signature && item.signature !== '' ? (
                  <div className="text-center">
                    <Image
                      src={item.signature}
                      alt={`sign-${key + 1}`}
                      className="my-1"
                      width='100rem'
                      height='100rem'
                      objectFit="contain"
                    />
                    <div>
                      <Label>{`Validated By: ${item.pharmacist}`}</Label>
                    </div>
                  </div>
                ) : (
                  null
                )
              }
              {
                !item.isValidated ? (
                  <div className="d-flex mb-0 mt-2 justify-content-center">
                    <SubmitButton
                      buttonColor='primary'
                      spinnerColor='light'
                      processing={processing}
                      label="Simpan"
                      onClick={() => handleSubmitForm(item.date)}
                      spinnerStyle={{ width: '1rem', height: '1rem' }}
                    />
                    <Button color="warning" type="button" onClick={() => {
                      onCancel()
                    }}>Cancel</Button>
                  </div>
                ) : (
                  null
                )
              }
            </TabPane>
          ))
        }
      </TabContent>
    </div>
  )
}

export default PharmacistValidateForm;
