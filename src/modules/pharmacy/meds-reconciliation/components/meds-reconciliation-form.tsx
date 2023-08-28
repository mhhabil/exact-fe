import { Button, ButtonGroup, Form, FormGroup, Input, Label, Nav, NavItem, NavLink, TabContent, TabPane, Table } from "reactstrap";
import { Fragment, useEffect, useState } from "react";
import { IMedsAllergyReq, MedsAllergyReq } from "../requests/update-meds-reconciliation.request";
import { IUpdateMedsReconciliationRequest, PdfMedsReconciliationRequest, UpdateMedsReconciliationRequest } from "../requests";
import { fetchMedsReconciliation, fetchMedsReconciliationPdf, handlePdf } from "../stores/meds-reconciliation.store";
import { AppRequest } from "@src/shared/request";
import { FindPdfRequest } from "@src/shared/pdf";
import FirstRoomMeds from "./first-room-meds";
import HospitalInMeds from "./hospital-in-meds";
import HospitalOutMeds from "./hospital-out-meds";
import { MedsReconciliationModel } from "../models/meds-reconciliation.model";
import { MedsReconciliationService } from "../services";
import SecondRoomMeds from "./second-room-meds";
import { SubmitButton } from "@src/shared/button";
import { Trash } from "react-feather";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useForm } from "react-hook-form";
import { DateTimeConverter } from "@src/shared/datetime-converter";

const MedsReconciliationForm = (props: { data: MedsReconciliationModel }) => {
  const { data } = props;
  const { treatment } = useAppSelector(state => state.patient);
  const { pdf } = useAppSelector(state => state.medsReconciliation);
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<string>('1')
  const [processing, setProcessing] = useState(false);
  const [pdfData, setPdfData] = useState<any | undefined>(undefined);
  const [medsHistory, setMedsHistory] = useState<any>(data.form && data.form.Riwayat_Pemakaian_Obat && Array.isArray(data.form.Riwayat_Pemakaian_Obat) ? data.form.Riwayat_Pemakaian_Obat : []);
  const [isAllergy, setIsAllergy] = useState<boolean>(!!(data.form && data.form.Alergi_Obat_Radio && data.form.Alergi_Obat_Radio === '1'))
  const [allergyText, setAllergyText] = useState<string>(data.form && data.form.Alergi_Obat_Radio && data.form.Alergi_Obat_Radio === '1' ? 'Ada Alergi Obat, Sebutkan:' : 'Tidak Ada Alergi Obat');

  const [medAllergies, setMedAllergies] = useState<any>(data.form && data.form.Alergi_Obat && Array.isArray(data.form.Alergi_Obat) ? data.form.Alergi_Obat.map(item => MedsAllergyReq.createFromModel(item)) : []);

  useEffect(() => {
    if (treatment) {
      dispatch(fetchMedsReconciliationPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'farmasi_rekonsiliasi-obat' })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf]);

  const toggle = (tab: string) => {
    setActiveTab(tab);
  }

  const getMedAllergies = () => {
    if (data.form && data.form.Alergi_Obat && Array.isArray(data.form.Alergi_Obat)) {
      return data.form.Alergi_Obat.map((item) => {
        return {
          nama_obat_alergi: item.Nama_Obat_Alergi ?? '',
          tingkat: item.Tingkat ?? '',
          reaksi_alergi: item.Reaksi_Alergi ?? '',
        }
      });
    } else {
      return [];
    }
  }

  const getInRoomMeds = () => {
    if (data.form && data.form.Obat_Saat_Masuk_RS && Array.isArray(data.form.Obat_Saat_Masuk_RS)) {
      return data.form.Obat_Saat_Masuk_RS.map((item) => {
        return {
          nama_obat: item.Nama_Obat ?? '',
          jumlah: item.Jumlah ?? '',
          rute: item.Rute ?? '',
          aturan_pakai: item.Aturan_Pakai ?? '',
          tindak_lanjut: item.Tindak_Lanjut ?? '',
          perubahan_aturan_pakai: item.Perubahan_Aturan_Pakai ?? '',
          obat_milik_pasien: item.Obat_Milik_Pasien ?? '',
        }
      })
    } else {
      return [];
    }
  }

  const getFirstRoomMeds = () => {
    if (data.form && data.form.Obat_Ruangan_1 && Array.isArray(data.form.Obat_Ruangan_1)) {
      return data.form.Obat_Ruangan_1.map((item) => {
        return {
          nama_obat: item.Nama_Obat ?? '',
          jumlah: item.Jumlah ?? '',
          rute: item.Rute ?? '',
          aturan_akai: item.Aturan_Pakai ?? '',
          tindak_lanjut: item.Tindak_Lanjut ?? '',
          perubahan_aturan_pakai: item.Perubahan_Aturan_Pakai ?? '',
        }
      });
    } else {
      return [];
    }
  }

  const getSecondRoomMeds = () => {
    if (data.form && data.form.Obat_Ruangan_2 && Array.isArray(data.form.Obat_Ruangan_2)) {
      return data.form.Obat_Ruangan_2.map((item) => {
        return {
          nama_obat: item.Nama_Obat ?? '',
          jumlah: item.Jumlah ?? '',
          rute: item.Rute ?? '',
          aturan_pakai: item.Aturan_Pakai ?? '',
          tindak_lanjut: item.Tindak_Lanjut ?? '',
          perubahan_aturan_pakai: item.Perubahan_Aturan_Pakai ?? '',
        }
      });
    } else {
      return [];
    }
  }

  const getOutRoomMeds = () => {
    if (data.form && data.form.Obat_Keluar && Array.isArray(data.form.Obat_Keluar)) {
      return data.form.Obat_Keluar.map((item) => {
        return {
          nama_obat: item.Nama_Obat ?? '',
          jumlah: item.Jumlah ?? '',
          rute: item.Rute ?? '',
          aturan_pakai: item.Aturan_Pakai ?? '',
          tindak_lanjut: item.Tindak_Lanjut ?? '',
          perubahan_aturan_pakai: item.Perubahan_Aturan_Pakai ?? '',
          kategori: item.Kategori ?? '',
        }
      })
    } else {
      return [];
    }
  }

  const { register, getValues, setValue, handleSubmit, errors } = useForm({
    mode: 'onChange',
    defaultValues: {
      riwayat_pemakaian_obat: data.form && data.form.Riwayat_Pemakaian_Obat && Array.isArray(data.form.Riwayat_Pemakaian_Obat) ? data.form.Riwayat_Pemakaian_Obat : [],
      alergi_obat_radio: data.form?.Alergi_Obat_Radio ?? '',
      alergi_obat: getMedAllergies(),
      unit_masuk_rs: data.form?.Unit_Masuk_RS ?? '',
      id_ka_unit_masuk_rs: data.form?.ID_Ka_Unit_Masuk_RS ?? '',
      waktu_masuk_rs: (data && data.form && data.form.Waktu_Masuk_RS) ? data.form.Waktu_Masuk_RS.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      obat_saat_masuk_rs: getInRoomMeds(),
      id_perawat_masuk_rs: data.form?.ID_Perawat_Masuk_RS ?? '',
      ttd_perawat_masuk_rs: data.form?.TTD_Perawat_Masuk_RS ?? '',
      ttd_pasien_masuk_rs: data.form?.TTD_Pasien_Masuk_RS ?? '',
      id_dokter_masuk_rs: data.form?.ID_Dokter_Masuk_RS ?? '',
      ttd_dokter_masuk_rs: data.form?.TTD_Dokter_Masuk_RS ?? '',
      id_apoteker_masuk_rs: data.form?.ID_Apoteker_Masuk_RS ?? '',
      ttd_apoteker_masuk_rs: data.form?.TTD_Apoteker_Masuk_RS ?? '',
      unit_ruangan_1: data.form?.Unit_Ruangan_1 ?? '',
      id_ka_unit_ruangan_1: data.form?.ID_Ka_Unit_Ruangan_1 ?? '',
      waktu_ruangan_1: (data && data.form && data.form.Waktu_Ruangan_1) ? data.form.Waktu_Ruangan_1.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      obat_ruangan_1: getFirstRoomMeds(),
      id_perawat_ruangan_1: data.form?.ID_Perawat_Ruangan_1 ?? '',
      ttd_perawat_ruangan_1: data.form?.TTD_Perawat_Ruangan_1 ?? '',
      id_dokter_ruangan_1: data.form?.ID_Dokter_Ruangan_1 ?? '',
      ttd_dokter_ruangan_1: data.form?.TTD_Dokter_Ruangan_1 ?? '',
      ttd_pasien_ruangan_1: data.form?.TTD_Pasien_Ruangan_1 ?? '',
      id_apoteker_ruangan_1: data.form?.ID_Apoteker_Ruangan_1 ?? '',
      ttd_apoteker_ruangan_1: data.form?.TTD_Apoteker_Ruangan_1 ?? '',
      unit_ruangan_2: data.form?.Unit_Ruangan_2 ?? '',
      id_ka_unit_ruangan_2: data.form?.ID_Ka_Unit_Ruangan_2 ?? '',
      waktu_ruangan_2: (data && data.form && data.form.Waktu_Ruangan_2) ? data.form.Waktu_Ruangan_2.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      obat_ruangan_2: getSecondRoomMeds(),
      id_perawat_ruangan_2: data.form?.ID_Perawat_Ruangan_2 ?? '',
      ttd_perawat_ruangan_2: data.form?.TTD_Perawat_Ruangan_2 ?? '',
      id_dokter_ruangan_2: data.form?.ID_Dokter_Ruangan_2 ?? '',
      ttd_dokter_ruangan_2: data.form?.TTD_Dokter_Ruangan_2 ?? '',
      ttd_pasien_ruangan_2: data.form?.TTD_Pasien_Ruangan_2 ?? '',
      id_apoteker_ruangan_2: data.form?.ID_Apoteker_Ruangan_2 ?? '',
      ttd_apoteker_ruangan_2: data.form?.TTD_Apoteker_Ruangan_2 ?? '',
      unit_keluar: data.form?.Unit_Keluar ?? '',
      id_ka_unit_keluar: data.form?.ID_Ka_Unit_Keluar ?? '',
      waktu_keluar: (data && data.form && data.form.Waktu_Keluar) ? data.form.Waktu_Keluar.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      obat_keluar: getOutRoomMeds(),
      id_perawat_keluar: data.form?.ID_Perawat_Keluar ?? '',
      ttd_perawat_keluar: data.form?.TTD_Perawat_Keluar ?? '',
      id_dokter_keluar: data.form?.ID_Dokter_Keluar ?? '',
      ttd_dokter_keluar: data.form?.TTD_Dokter_Keluar ?? '',
      ttd_pasien_keluar: data.form?.TTD_Pasien_Keluar ?? '',
      id_apoteker_keluar: data.form?.ID_Apoteker_Keluar ?? '',
      ttd_apoteker_keluar: data.form?.TTD_Apoteker_Keluar ?? '',
    } as any,
  })

  const handleAllergyCheckboxChange = (e: any) => {
    setValue('alergi_obat_radio', e.target.checked ? '1' : '0');
    setIsAllergy(e.target.checked);
    setAllergyText((e.target.checked) ? 'Ada Alergi Obat, Sebutkan:' : 'Tidak Ada Alergi Obat')
  }

  useEffect(() => {
    setValue('riwayat_pemakaian_obat', medsHistory);
  }, [medsHistory])

  useEffect(() => {
    setValue('alergi_obat', medAllergies);
  }, [medAllergies])

  const handleAddMedHistory = () => {
    const histories = medsHistory.map((n: string, key: number) => {
      return getValues(`riwayat_pemakaian_obat[${key}]`);
    });
    setMedsHistory([...histories, '']);
  }

  const handleDeleteMedHistory = (index: number) => {
    const histories = medsHistory.map((n: string, key: number) => {
      return getValues(`riwayat_pemakaian_obat[${key}]`);
    });
    histories.splice(index, 1);
    setMedsHistory(histories);
  }

  const handleAddMedAllergy = () => {
    const allergies = medAllergies.map((n: any, key: number) => {
      return getValues(`alergi_obat[${key}]`);
    });
    setMedAllergies([...allergies, { nama_obat_alergi: '', tingkat: '', reaksi_alergi: '' }]);
  }

  const handleDeleteMedAllergy = (index: number) => {
    const allergies = medAllergies.map((n: any, key: number) => {
      return new MedsAllergyReq({
        nama_obat_alergi: getValues(`alergi_obat[${key}].nama_obat_alergi`) ?? '',
        tingkat: getValues(`alergi_obat[${key}].tingkat`) ?? '',
        reaksi_alergi: getValues(`alergi_obat[${key}].reaksi_alergi`) ?? '',
      });
    });
    allergies.splice(index, 1);
    setMedAllergies(allergies);
  }

  const handleSubmitForm = (value: IUpdateMedsReconciliationRequest) => {
    if (!treatment) {
      return;
    }
    setProcessing(true);
    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateMedsReconciliationRequest.createFromJson({ ...appRequest, ...value });
    dispatch(handlePdf(undefined));
    MedsReconciliationService().update(params)
      .then((response: any) => {
        const { data } = response.data;
        const paramsPdf = PdfMedsReconciliationRequest.createPdfRequest(data, treatment)
        MedsReconciliationService().pdfNew(paramsPdf)
          .then(() => {
            dispatch(fetchMedsReconciliationPdf(FindPdfRequest.createFromJson({
              form_name: 'farmasi_rekonsiliasi-obat',
              emr_id: treatment.EMR_ID,
            })));
          })
        dispatch(fetchMedsReconciliation(AppRequest.createFromStore(treatment)));
        setProcessing(false);
      })
      .catch((err) => {
        setProcessing(false);
        console.error(err)
      });
  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <FormGroup row className="form-group my-2 mb-2">
          <Table responsive bordered>
            <thead>
              <tr>
                <th className="text-center" colSpan={3}>Riwayat Pemakaian Obat</th>
              </tr>
            </thead>
            <tbody>
              {
                medsHistory && medsHistory.map((item: string, key: number) => (
                  <tr key={key}>
                    <td>{`${key + 1}`}</td>
                    <td>
                      <Input
                        className="me-1"
                        id={`riwayat_pemakaian_obat_${key}`}
                        type="text"
                        name={`riwayat_pemakaian_obat[${key}]`}
                        innerRef={register({ required: true })}
                        required
                      />
                    </td>
                    <td className="text-center">
                      <Button style={{ padding: '4px' }} color='danger' type='button' onClick={ () => handleDeleteMedHistory(key)}>
                        <Trash size={15} />
                      </Button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
          <span
            className="text-warning cursor-pointer"
            onClick={() => handleAddMedHistory()}
          >
            +Tambah Riwayat Pemakaian Obat
          </span>
        </FormGroup>
        <FormGroup row className="form-group my-2 mt-4 mb-2">
          <Label className="fs-5">Riwayat Alergi / Reaksi</Label>
          <div className="form-switch my-1 ms-1 d-flex align-items-center ">
            <Input
              className="form-check-input me-1"
              type="checkbox"
              id="alergi_obat_radio"
              name="alergi_obat_radio"
              defaultChecked={!!(data.form && data.form.Alergi_Obat_Radio && data.form.Alergi_Obat_Radio === '1')}
              onChange={(e) => handleAllergyCheckboxChange(e)}
              {...register('alergi_obat_radio') as any}
            />
            <Label className="form-check-label" for="alergi_obat_radio">{allergyText}</Label>
          </div>
          {
            isAllergy ? (
              <>
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <th className="text-center">Nama Obat</th>
                      <th className="text-center">Tingkat</th>
                      <th className="text-center">Reaksi Alergi</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      medAllergies && medAllergies.map((item: IMedsAllergyReq, key: number) => (
                        <tr key={key}>
                          <td>
                            <Input
                              className="me-1"
                              id={`alergi_obat_nama_${key}`}
                              type="text"
                              name={`alergi_obat[${key}].nama_obat_alergi`}
                              innerRef={register({ required: true })}
                              required
                            />
                          </td>
                          <td className="text-center">
                            <ButtonGroup className="align-items-center">
                              <Label
                                className="btn btn-sm bg-success d-flex align-items-center"
                              >
                                <Input
                                  type="radio"
                                  id={`alergi_obat_tingkat_1_${key}`}
                                  name={`alergi_obat[${key}].tingkat`}
                                  className='me-1'
                                  value='R'
                                  defaultChecked={!!(item && item.tingkat && item.tingkat === 'R')}
                                  innerRef={register({ required: true })}
                                  autoComplete="off"
                                />
                                <span>R</span>
                              </Label>
                              <Label
                                className="btn btn-sm bg-success d-flex align-items-center"
                                color="success"
                              >
                                <Input
                                  type="radio"
                                  id={`alergi_obat_tingkat_2_${key}`}
                                  name={`alergi_obat[${key}].tingkat`}
                                  className='me-1'
                                  value='S'
                                  defaultChecked={!!(item && item.tingkat && item.tingkat === 'S')}
                                  innerRef={register({ required: true })}
                                  autoComplete="off"
                                />
                                <span>S</span>
                              </Label>
                              <Label
                                className="btn btn-sm bg-success d-flex align-items-center"
                                color="success"
                              >
                                <Input
                                  type="radio"
                                  id={`alergi_obat_tingkat_3_${key}`}
                                  name={`alergi_obat[${key}].tingkat`}
                                  className='me-1'
                                  value='B'
                                  defaultChecked={!!(item && item.tingkat && item.tingkat === 'B')}
                                  innerRef={register({ required: true })}
                                  autoComplete="off"
                                />
                                <span>B</span>
                              </Label>
                            </ButtonGroup>
                          </td>
                          <td>
                            <Input
                              className="me-1"
                              id={`alergi_obat_reaksi_${key}`}
                              type="text"
                              name={`alergi_obat[${key}].reaksi_alergi`}
                              innerRef={register({ required: true })}
                              required
                            />
                          </td>
                          <td className="text-center">
                            <Button style={{ padding: '4px' }} color='danger' type='button' onClick={ () => handleDeleteMedAllergy(key)}>
                              <Trash size={15} />
                            </Button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </Table>
                <span
                  className="text-warning cursor-pointer"
                  onClick={() => handleAddMedAllergy()}
                >
                  +Tambah Alergi Obat
                </span>
              </>
            ) : null
          }
        </FormGroup>
        <Nav tabs className="mt-3">
          <NavItem>
            <NavLink
              className={(activeTab && activeTab === '1') ? 'active' : ''}
              onClick={() => toggle('1')}
            >
              <span style={{ fontSize: '0.90em', fontWeight:'bolder' }} >Saat Masuk Rumah Sakit </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={(activeTab && activeTab === '2') ? 'active' : ''}
              onClick={() => toggle('2')}
            >
              <span style={{ fontSize: '0.90em', fontWeight:'bolder' }} > Pindah Antar Ruangan - 1</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={(activeTab && activeTab === '3') ? 'active' : ''}
              onClick={() => toggle('3')}
            >
              <span style={{ fontSize: '0.90em', fontWeight:'bolder' }} > Pindah Antar Ruangan - 2 </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={(activeTab && activeTab === '4') ? 'active' : ''}
              onClick={() => toggle('4')}
            >
              <span style={{ fontSize: '0.90em', fontWeight:'bolder' }} > Saat Keluar Rumah Sakit </span>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId='1'>
            <HospitalInMeds
              {...{ data, register, setValue, errors, getValues }}
            />
          </TabPane>
        </TabContent>
        <TabContent activeTab={activeTab}>
          <TabPane tabId='2'>
            <FirstRoomMeds
              {...{ data, register, setValue, errors, getValues }}
            />
          </TabPane>
        </TabContent>
        <TabContent activeTab={activeTab}>
          <TabPane tabId='3'>
            <SecondRoomMeds
              {...{ data, register, setValue, errors, getValues }}
            />
          </TabPane>
        </TabContent>
        <TabContent activeTab={activeTab}>
          <TabPane tabId='4'>
            <HospitalOutMeds
              {...{ data, register, setValue, errors, getValues }}
            />
          </TabPane>
        </TabContent>
        <FormGroup className="d-flex mb-0 mt-2 justify-content-center">
          <SubmitButton
            label="Simpan"
            buttonColor='primary'
            spinnerColor='light'
            processing={processing}
            spinnerStyle={{ width: '1rem', height: '1rem' }}
          />
          {
            pdfData && Array.isArray(pdfData) && pdfData.length > 0 && (
              <a color='success' href={`${pdfData[0].URL}`} target="_blank" rel="noreferrer">
                <Button className='me-1' color='success' type='button'>
                  Cetak
                </Button>
              </a>
            )
          }
          {
            (!pdfData || (pdfData && Array.isArray(pdfData) && pdfData.length === 0)) && (
              <Button className='me-1' color='success' type='button' disabled>
                Cetak
              </Button>
            )
          }
        </FormGroup>
        <FormGroup className='form-group mt-0' row>
          <div className='d-flex justify-content-center align-items-center'>
            <Label className='me-1'>Terakhir disimpan: </Label>
            <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
          </div>
        </FormGroup>
      </Form>
    </Fragment>
  )
}

export default MedsReconciliationForm;
