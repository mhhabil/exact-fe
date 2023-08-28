import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { CreateReportYagLaserRequest, ICreateReportYagLaserRequest } from '../../inspection-result/requests/create-report-yag-laser-request';
import { DateTimeInput, TextInput } from "@src/shared/input";
import { useEffect, useState } from "react";
import { AppRequest } from '@src/shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';
import DicomForm from '../../inspection-result/components/form/dicom-form';
import { EyeImage } from '@src/shared/eye-image/components';
import { IPdfModel } from '@src/shared/pdf';
import { InspectionResultYagLaserAndRetinaService } from '../services';
import { PdfReportYagLaserRequest } from '@modules/outpatient/inspection-result/requests/pdf-report-yag-laser.request';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { SubmitButton } from '@src/shared/button';
import ToolInspection from "@src/shared/tool-inspection/tool-inspection";
// import { ToolInspectionService } from '../../inspection-result/services';
import { UpdateReportYagLaserRequest } from '../../inspection-result/requests/update-report-yag-laser-request';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

const ReportYagLaserForm = (props: { data: any, dicom?: any | undefined, onSuccessSubmit: any, onCancel: any }) => {
  const { data, dicom, onSuccessSubmit, onCancel } = props;

  const getMata = () => {
    const mata: Array<string> = [];
    if (data && data.Mata) {
      const helpingTools = data.Mata;
      if (helpingTools.Kanan) {
        mata.push('1')
      }
      if (helpingTools.Kiri) {
        mata.push('2')
      }
    }
    return mata;
  }

  const getPasienLaser = () => {
    const mata: Array<string> = [];
    if (data && data.Mata_Pasien_Ditetes) {
      const helpingTools = data.Mata_Pasien_Ditetes;
      if (helpingTools.Pantocain) {
        mata.push('1')
      }
      if (helpingTools.Mydriatil) {
        mata.push('2')
      }
    }
    return mata;
  }

  const getPasienDitetes = () => {
    const pasien_ditetes: Array<string> = [];
    if (data && data.Pasien_Ditetes) {
      const helpingTools = data.Pasien_Ditetes;
      if (helpingTools.Lfx) {
        pasien_ditetes.push('1')
      }
      if (helpingTools.Floxa) {
        pasien_ditetes.push('2')
      }
      if (helpingTools.Noncort_Eye_Drop) {
        pasien_ditetes.push('3')
      }
      if (helpingTools.Timol) {
        pasien_ditetes.push('4')
      }
      if (helpingTools.Tonor) {
        pasien_ditetes.push('5')
      }
    }
    return pasien_ditetes;
  }

  const unit = 'Tindakan_Yag_Laser'
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const [processing, setProcessing] = useState<boolean | undefined>(false);
  const [toolLists, setToolLists] = useState<Array<string>>(getMata())
  const [pasienLaser, setPasienLaser] = useState<Array<string>>(getPasienLaser())
  const [pasienDitetes, setPasienDitetes] = useState<Array<string>>(getPasienDitetes())
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);

  const handleMataCheckbox = (e: any) => {
    if (e.target.checked) {
      if (toolLists && toolLists.includes(e.target.value)) {
        return;
      } else {
        setToolLists([...toolLists, e.target.value])
      }
    }
    if (!e.target.checked) {
      if (toolLists && toolLists.includes(e.target.value)) {
        const newLists = toolLists.filter((val: string) => val !== e.target.value)
        setToolLists(newLists);
      } else {
        return 0;
      }
    }
  }

  const handlePasienLaserCheckbox = (e: any) => {
    if (e.target.checked) {
      if (pasienLaser && pasienLaser.includes(e.target.value)) {
        return;
      } else {
        setPasienLaser([...pasienLaser, e.target.value])
      }
    }
    if (!e.target.checked) {
      if (pasienLaser && pasienLaser.includes(e.target.value)) {
        const newLists = pasienLaser.filter((val: string) => val !== e.target.value)
        setPasienLaser(newLists);
      } else {
        return 0;
      }
    }
  }

  const handlePasienDitetesCheckbox = (e: any) => {
    if (e.target.checked) {
      if (pasienDitetes && pasienDitetes.includes(e.target.value)) {
        return;
      } else {
        setPasienDitetes([...pasienDitetes, e.target.value])
      }
    }
    if (!e.target.checked) {
      if (pasienDitetes && pasienDitetes.includes(e.target.value)) {
        const newLists = pasienDitetes.filter((val: string) => val !== e.target.value)
        setPasienDitetes(newLists);
      } else {
        return 0;
      }
    }
  }

  useEffect(() => {
    setValue('mata', toolLists)
  }, [toolLists])

  useEffect(() => {
    setValue('mata_pasien_laser_ditetes', pasienLaser)
  }, [pasienLaser])

  useEffect(() => {
    setValue('pasien_ditetes', pasienDitetes)
  }, [pasienDitetes])

  const { register, handleSubmit, errors, setValue, getValues, control } = useForm({
    mode: 'onChange',
    // resolver: yupResolver(CreateReportYagLaserRequest.schema()),
    defaultValues: {
      dokter: data && data.Dokter_Id ? data.Dokter_Id : '',
      diagnosa_pra_tindakan: data && data.Diagnosa_Pra_Tindakan ? data.Diagnosa_Pra_Tindakan : '',
      tanggal_tindakan: (data && data?.form && data?.form?.Tanggal_Tindakan) ? data?.form?.Tanggal_Tindakan.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      lama_tindakan: data && data.Lama_Tindakan ? data.Lama_Tindakan : '',
      mata: getMata(),
      tanggal_fakoemulsifikasi: data && data.Tanggal_Fakoemulsifikasi ? data.Tanggal_Fakoemulsifikasi : '',
      keterangan: data && data.Keterangan ? data.Keterangan : '',
      mata_pasien_laser_ditetes: data && data.Mata_Pasien_Ditetes ? data.Mata_Pasien_Ditetes : '',
      power_laser: data && data.Power_Laser ? data.Power_Laser : '',
      jumlah_laser: data && data.Jumlah_Laser ? data.Jumlah_Laser : '',
      lain_lain: data && data.Lain_Lain ? data.Lain_Lain : '',
      'gambar-mata-od': data && data.Gambar_Mata_OD ? data.Gambar_Mata_OD : '',
      'gambar-mata-os': data && data.Gambar_Mata_OS ? data.Gambar_Mata_OS : '',
      pasien_ditetes: data && data.Pasien_Ditetes ? data.Pasien_Ditetes : '',
      'ttd-perawat-rawat-jalan': data && data.TTD_Perawat_Rawat_Jalan ? data.TTD_Perawat_Rawat_Jalan : '',
      perawat_rawat_jalan: data && data.Perawat_Rawat_Jalan_Id ? data.Perawat_Rawat_Jalan_Id : '',
      'ttd-dokter-operator': data && data.TTD_Dokter_Operator ? data.TTD_Dokter_Operator : '',
      dokter_operator: data && data.Dokter_Operator_Id ? data.Dokter_Operator_Id : '',
    },
  })

  const handleDoctorSigned = (image: SignatureModel, isFormDoctor?: boolean) => {
    if (isFormDoctor) {
      setValue('ttd-dokter-operator', image.Signature);
      setValue('dokter_operator', image.ID_Karyawan);
      document.getElementById('submit-button')?.click();
    }
    if (!isFormDoctor) {
      setValue('ttd-dokter-operator', image.Signature);
      setValue('dokter_operator', image.ID_Karyawan);
    }
  }

  const handleNurseSigned = (image: SignatureModel) => {
    setValue('ttd-perawat-rawat-jalan', image.Signature);
    setValue('perawat_rawat_jalan', image.ID_Karyawan);
  }

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  const handleImageOD = (image: string) => {
    setValue('gambar-mata-od', image)
  }

  const handleImageOS = (image: string) => {
    setValue('gambar-mata-os', image)
  }


  const handleSubmitForm = (value: ICreateReportYagLaserRequest) => {
    if (!treatment) {
      return false;
    }
    setProcessing(true);
    const appRequest = AppRequest.createFromStore(treatment);
    if (!data) {
      const params = CreateReportYagLaserRequest.createFromJson({...value, ...appRequest, unit });
      InspectionResultYagLaserAndRetinaService().create(params)
        .then((response) => {
          if (response && response.data && response.data.data) {
            const params2 = {...appRequest, ID: response.data.data.item_id, itemId: response.data.data.item_id, unit, emr_id: response.data.data.EMR_ID};
            InspectionResultYagLaserAndRetinaService().view(params2)
              .then((resp) => {
                const { data } = resp.data;
                InspectionResultYagLaserAndRetinaService().pdfv3(PdfReportYagLaserRequest.createPdfRequest({ ...data, nomor_mr: appRequest.nomor_mr, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
                  .then((res) => {
                    const { data } = res.data;
                    InspectionResultYagLaserAndRetinaService().addPdf({
                      emr_id: appRequest.emr_id,
                      item_id: params2.ID,
                      pdf_url: data?.url ?? '',
                    }).then(() => {
                      if (onSuccessSubmit) {
                        onSuccessSubmit();
                        return true;
                      }
                    });
                  });
              })
          }
        });
    } else {
      const emrId = data.EMR_ID
      const params = UpdateReportYagLaserRequest.createFromJson({...value, ...appRequest, ID: data.ID, unit, emr_id: data.EMR_ID });
      InspectionResultYagLaserAndRetinaService().update(params)
        .then(() => {
          const params3 = {...appRequest, ID: data.ID, itemId: data.ID, unit, emr_id: data.EMR_ID};
          InspectionResultYagLaserAndRetinaService().view(params3)
            .then((resp) => {
              const { data } = resp.data;
              InspectionResultYagLaserAndRetinaService().pdfv3(PdfReportYagLaserRequest.createPdfRequest({...data, nomor_mr: appRequest.nomor_mr, umur_lengkap: treatment?.Pasien?.Umur_Lengkap}, appRequest.emr_id))
                .then((res) => {
                  const { data } = res.data;
                  InspectionResultYagLaserAndRetinaService().addPdf({
                    emr_id: emrId,
                    item_id: params3.ID,
                    pdf_url: data?.url ?? '',
                  }).then(() => {
                    if (onSuccessSubmit) {
                      onSuccessSubmit();
                      return true;
                    }
                  });
                })
            })
        });
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <DicomForm
        dicom={dicom} modality={"OT"}
      />
      {/* <ToolInspection
        name='treatment_number_list'
        data={(data && data.no_berobat && data.no_berobat[0]) ? data.no_berobat[0] : undefined}
        {...{register, errors}}
      /> */}
      {/* <Table style={{ width: '100%' }}>
        <tr>
          <td style={{ width: '70%', textAlign: 'right' }}><b>No Berobat</b></td>
          <td style={{ width: '30%' }}>
            <Input
              type="text"
              name='list_treatment'
              style={{ width: '500px', color: '#303030'}}
              value={`${(data && data.ID_Berobat) ? data.ID_Berobat : ''} (${(data && data.Dokter_Nama) ? data.Dokter_Nama : ''}, ${(data && data.Waktu_Visit) ? data.Waktu_Visit : ''})`}
              innerRef={register({ required: true })}
              // invalid={errors[`${name}`] && true}
              readOnly
            />
          </td>
        </tr>
      </Table> */}
      <FormGroup className="form-group" row>
        <Row className='mt-1'>
          <Col style={{marginLeft:'30px'}}>
            <Label>Dokter Operator</Label>
          </Col>
          <Col md='10'>
            <Input
              type="select"
              id="dokter"
              name="dokter"
              innerRef={register()}
            >
              <option value="" disabled={true}>--</option>
              {
                doctors && doctors.map((item: any, key: number) => {
                  return <option value={item.ID_Karyawan} key={key}>{ item.Nama }</option>;
                })
              }
            </Input>
          </Col>
        </Row>
        <Row className='mt-1'>
          <Col style={{marginLeft:'30px'}}>
            <Label>Diagnosa Pra Tindakan</Label>
          </Col>
          <Col md='10'>
            <Input
              id="diagnosa_pra_tindakan"
              type="text"
              name="diagnosa_pra_tindakan"
              innerRef={register()}
            />
          </Col>
        </Row>
        <Row className='mt-1'>
          <Col style={{marginLeft:'30px'}}>
            <Label>Tanggal Tindakan</Label>
          </Col>
          <Col md='10'>
            <Input
              type="datetime-local"
              id='tanggal_tindakan'
              name="tanggal_tindakan"
              innerRef={register({ required: false })}
              invalid={errors.tanggal_tindakan && true}
            />
          </Col>
        </Row>
        <Row className='mt-1'>
          <Col style={{marginLeft:'30px'}}>
            <Label>Lama Tindakan (Menit)</Label>
          </Col>
          <Col md='10'>
            <Input
              id="lama_tindakan"
              type="text"
              name="lama_tindakan"
              innerRef={register()}
            />
          </Col>
        </Row>
        <Row className='mt-1'>
          <Col style={{marginLeft:'30px'}} md='2'>
            <Label>Mata</Label>
          </Col>
          <Col md='2'>
            <Input
              id="mata_1"
              type="checkbox"
              name="mata[]"
              className="me-1"
              onChange={(e) => handleMataCheckbox(e)}
              defaultChecked={getMata() && getMata().length > 0 && getMata().includes('1')}
              value="1"
              innerRef={register("mata") as any}
            />{' '}
            <Label>Kanan</Label>
          </Col>
          <Col md='2'>
            <Input
              id="mata_2"
              type="checkbox"
              name="mata[]"
              className="me-1"
              onChange={(e) => handleMataCheckbox(e)}
              defaultChecked={getMata() && getMata().length > 0 && getMata().includes('2')}
              value="2"
              innerRef={register("mata") as any}
            />{' '}
            <Label>Kiri</Label>
          </Col>
        </Row>
        <Row className='mt-1'>
          <Col style={{marginLeft:'30px'}}>
            <Label>Tanggal Fakoemulsifikasi</Label>
          </Col>
          <Col md='10'>
            <Input
              type="datetime-local"
              id='tanggal_fakoemulsifikasi'
              name="tanggal_fakoemulsifikasi"
              innerRef={register({ required: false })}
              invalid={errors.tanggal_fakoemulsifikasi && true}
            />
          </Col>
        </Row>
        <Row className='mt-1'>
          <Col style={{marginLeft:'30px'}}>
            <Label>Keterangan</Label>
          </Col>
          <Col md='10'>
            <Input
              id="keterangan"
              type="textarea"
              name="keterangan"
              innerRef={register()}
            />
          </Col>
        </Row>
      </FormGroup>

      <h4 className="mt-4">Laporan Tindakan Nd: YAG Laser</h4>
      <hr />
      <FormGroup className="form-group" row>
        <Row className='mt-1'>
          <Col style={{marginLeft:'30px'}}>
            <Label>1. Pasien diinformasikan akan dilakukan tindakan laser (dengan pengisian formulir pemberian informasi tindakan)</Label>
          </Col>
        </Row>
        <Row>
          <Col style={{marginLeft:'30px'}}>
            <Label>2. Mata pasien yang akan dilaser diteteskan dengan: </Label>
          </Col>
          <Col>
            <Input
              id="mata_pasien_laser_ditetes"
              type="checkbox"
              className='me-1'
              name="mata_pasien_laser_ditetes"
              innerRef={register("mata_pasien_laser_ditetes") as any}
              onChange={(e) => handlePasienLaserCheckbox(e)}
              defaultChecked={getPasienLaser() && getPasienLaser().length > 0 && getPasienLaser().includes('1')}
              value="1"
            />{' '}
            <Label>Pantocain 0.5% Eye Drop</Label>
          </Col>
          <Col>
            <Input
              id="mata_pasien_laser_ditetes_1"
              type="checkbox"
              className='me-1'
              name="mata_pasien_laser_ditetes"
              innerRef={register("mata_pasien_laser_ditetes") as any}
              onChange={(e) => handlePasienLaserCheckbox(e)}
              defaultChecked={getPasienLaser() && getPasienLaser().length > 0 && getPasienLaser().includes('2')}
              value="2"
            />{' '}
            <Label>Mydriatil Eye Drop</Label>
          </Col>
        </Row>
        <Row>
          <Col style={{marginLeft:'30px'}}>
            <Label>3. Pasien dibawa ke ruangan laser dan dokter melakukan laser dengan:</Label>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <Label style={{marginLeft: '50px'}}>Power Laser</Label>
            </div>
            <div>
              <Label style={{marginLeft: '50px', marginTop:'15px'}}>Jumlah Laser Spot</Label>
            </div>
            <div>
              <Label style={{marginLeft: '50px', marginTop:'15px'}}>Lain-Lain</Label>
            </div>
          </Col>
          <Col md='10'>
            <div>
              <Input
                id="power_laser"
                type="text"
                name="power_laser"
                innerRef={register()}
              // invalid={errors.power_laser && true}
              />{' '}
            </div>
            <div>
              <Input
                id="jumlah_laser"
                type="text"
                name="jumlah_laser"
                style={{marginTop:'5px'}}
                innerRef={register()}
              // invalid={errors.power_laser && true}
              />{' '}
            </div>
            <div>
              <Input
                id="lain_lain"
                type="text"
                name="lain_lain"
                style={{marginTop:'5px'}}
                innerRef={register()}
              // invalid={errors.power_laser && true}
              />{' '}
            </div>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup className='form-group mt-1'>
        <Table borderless style={{ width: '100%' }}>
          <thead>
            <tr style={{ textAlign: 'center' }} className="fw-bolder">
              <th style={{ width: '18%' }}></th>
              <th style={{ width: '41%' }}>
                OD
              </th>
              <th style={{ width: '41%' }}>
                OS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="fw-bold">
              <td></td>
              <td>
                <EyeImage
                  initialImage={(data && data.Gambar_Mata_OD && data.Gambar_Mata_OD !== '') ? data.Gambar_Mata_OD : undefined}
                  formName='rawat-jalan/hasil-pemeriksaan'
                  component='pengkajian_awal_dokter_eye_OD'
                  onSaved={(image: string) => handleImageOD(image)}
                />
                <Input
                  id="gambar-mata-od"
                  type="hidden"
                  name="gambar-mata-od"
                  innerRef={register()}
                  // invalid={errors[gambar-mata-od] && true}
                />
              </td>
              <td>
                <EyeImage
                  initialImage={(data && data.Gambar_Mata_OS && data.Gambar_Mata_OS !== '') ? data.Gambar_Mata_OS : undefined}
                  formName='rawat-jalan/hasil-pemeriksaan'
                  component='pengkajian_awal_dokter_eye_OS'
                  onSaved={(image: string) => handleImageOS(image)}
                />
                <Input
                  id="gambar-mata-os"
                  type="hidden"
                  name="gambar-mata-os"
                  innerRef={register()}
                  // invalid={errors.gambar-mata-os && true}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </FormGroup>

      <FormGroup className='form-group mt-1'>
        <Row>
          <Col>
            <Label style={{marginLeft: '30px'}}>4. Pasien ditetes dengan:</Label>
          </Col>
          <Col>
            <Input
              id="pasien_ditetes_1"
              type="checkbox"
              name="pasien_ditetes[]"
              innerRef={register('pasien_ditetes') as any}
              onChange={(e) => handlePasienDitetesCheckbox(e)}
              defaultChecked={getPasienDitetes() && getPasienDitetes().length > 0 && getPasienDitetes().includes('1')}
              value="1"
            />{' '}
            <Label>LFX</Label>
          </Col>
          <Col>
            <Input
              id="pasien_ditetes_2"
              type="checkbox"
              name="pasien_ditetes[]"
              innerRef={register('pasien_ditetes') as any}
              onChange={(e) => handlePasienDitetesCheckbox(e)}
              defaultChecked={getPasienDitetes() && getPasienDitetes().length > 0 && getPasienDitetes().includes('2')}
              value="2"
            />{' '}
            <Label>Floxa</Label>
          </Col>
          <Col>
            <Input
              id="pasien_ditetes_3"
              type="checkbox"
              name="pasien_ditetes[]"
              innerRef={register('pasien_ditetes') as any}
              onChange={(e) => handlePasienDitetesCheckbox(e)}
              defaultChecked={getPasienDitetes() && getPasienDitetes().length > 0 && getPasienDitetes().includes('3')}
              value="3"
            />{' '}
            <Label>Noncort Eye Drop</Label>
          </Col>
          <Col>
            <Input
              id="pasien_ditetes_4"
              type="checkbox"
              name="pasien_ditetes[]"
              innerRef={register('pasien_ditetes') as any}
              onChange={(e) => handlePasienDitetesCheckbox(e)}
              defaultChecked={getPasienDitetes() && getPasienDitetes().length > 0 && getPasienDitetes().includes('4')}
              value="4"
            />{' '}
            <Label>Timol 0,5%</Label>
          </Col>
          <Col>
            <Input
              id="pasien_ditetes_5"
              type="checkbox"
              name="pasien_ditetes[]"
              innerRef={register('pasien_ditetes') as any}
              onChange={(e) => handlePasienDitetesCheckbox(e)}
              defaultChecked={getPasienDitetes() && getPasienDitetes().length > 0 && getPasienDitetes().includes('5')}
              value="5"
            />{' '}
            <Label>Tonor 0,5%</Label>
          </Col>
        </Row>
        <Row>
          <Col style={{marginLeft: '30px'}}>
            <Label>5. Pasien dipersilahkan keluar (dari ruangan laser)</Label>
          </Col>
        </Row>
        <Row className='mt-1'>
          <Col>
            <div className="d-flex justify-content-around my-0">
              <Signature
                label="Perawat Pemeriksa"
                type="picker"
                additionalLabel={(data && data.Nama_TTD_Perawat_Rawat_Jalan && data.Nama_TTD_Perawat_Rawat_Jalan !== '') ? data.Nama_TTD_Perawat_Rawat_Jalan : undefined}
                initialImage={(data && data.TTD_Perawat_Rawat_Jalan && data.TTD_Perawat_Rawat_Jalan !== '') ? data.TTD_Perawat_Rawat_Jalan : undefined}
                persons={nurses}
                onSigned={(assigner: SignatureModel) => handleNurseSigned(assigner)}
              />
              <Input
                type="hidden"
                name="perawat_rawat_jalan"
                innerRef={register()}
                invalid={errors.perawat_rawat_jalan && true}
              />
              <Input
                type="hidden"
                name="ttd-perawat-rawat-jalan"
                innerRef={register()}
                invalid={errors['ttd-perawat-rawat-jalan'] && true}
              />
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-around my-0">
              <Signature
                label="Dokter Pemeriksa"
                type="picker"
                additionalLabel={(data && data.Nama_TTD_Dokter_Operator && data.Nama_TTD_Dokter_Operator !== '') ? data.Nama_TTD_Dokter_Operator : undefined}
                initialImage={(data && data.TTD_Dokter_Operator && data.TTD_Dokter_Operator !== '') ? data.TTD_Dokter_Operator : undefined}
                persons={doctors}
                unit='dokter'
                onSigned={(assigner: SignatureModel, isFormDoctor?: boolean) => {
                  if (isFormDoctor) {
                    handleDoctorSigned(assigner, isFormDoctor)
                  }
                  if (!isFormDoctor) {
                    handleDoctorSigned(assigner)
                  }
                }}
              />
              <Input
                type="hidden"
                name="dokter_operator"
                innerRef={register()}
                invalid={errors.dokter_operator && true}
              />
              <Input
                type="hidden"
                name="ttd-dokter-operator"
                innerRef={register()}
                invalid={errors['ttd-dokter-operator'] && true}
              />
            </div>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup className='form-group mt-0' row>
        <div className='d-flex justify-content-center align-items-center'>
          <Label className='me-1'>Terakhir Disimpan: </Label>
          <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.Updated_At)}` }</Label>
        </div>
      </FormGroup>
      <FormGroup  className="d-flex mb-0 justify-content-center" style={{ marginLeft: '0px'}}>

        <SubmitButton
          label="Simpan"
          buttonColor='primary'
          spinnerStyle={{ width: '1rem', height: '1rem' }}
          spinnerColor='light'
          processing={processing}
        />
        <Button color='warning' onClick={() => {
          if (onCancel) {
            onCancel();
          }
        }}>Batal</Button>
      </FormGroup>
    </Form>
  )
}

export default ReportYagLaserForm;
