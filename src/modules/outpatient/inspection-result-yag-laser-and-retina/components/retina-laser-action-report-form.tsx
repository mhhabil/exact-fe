import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { DateTimeInput, TextInput } from "@src/shared/input";
// import { PupilOCTResultModel, TreatmentNumber } from "../models/pupil-oct-result.model";
import { CreateRetinaLaserActionReportRequest, ICreateRetinaLaserActionReportRequest } from '../../inspection-result/requests/create-retina-laser-action-report-request';
import { useEffect, useState } from "react";
import { AppRequest } from '@src/shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';
import { EyeImage } from '@src/shared/eye-image/components';
import { IPdfModel } from '@src/shared/pdf';
import { InspectionResultYagLaserAndRetinaService } from '../services';
import {PdfRetinaLaserActionRequest} from '@modules/outpatient/inspection-result/requests/pdf-retina-laser-action.request';
import {PdfRetinaOctResultRequest} from '@modules/outpatient/inspection-result/requests/pdf-retina-oct-result.request';
import { RetinaImage } from '@src/shared/retina-image/components';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { SubmitButton } from '@src/shared/button';
import { UpdateReportYagLaserRequest } from '../../inspection-result/requests/update-report-yag-laser-request';
import { UpdateRetinaLaserActionReportRequest } from '../../inspection-result/requests/update-retina-laser-action-report-request';
import jenis from '../../inspection-result/const/jenis';
import obat from '../../inspection-result/const/obat';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

const RetinaLaserActionReportForm = (props: { data: any, onSuccessSubmit: any, onCancel: any }) => {
  const { data, onSuccessSubmit, onCancel } = props;

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

  const getPasienDitetes = () => {
    const mata_pasien_ditetes: Array<string> = [];
    if (data && data.Mata_Pasien_Ditetes) {
      const helpingTools = data.Mata_Pasien_Ditetes;
      if (helpingTools.Pantocain) {
        mata_pasien_ditetes.push('1')
      }
      if (helpingTools.Mydriatil) {
        mata_pasien_ditetes.push('2')
      }
    }
    return mata_pasien_ditetes;
  }

  const getTindakanLaser = () => {
    const tindakan_laser: Array<string> = [];
    if (data && data.Tindakan_Laser) {
      const helpingTools = data.Tindakan_Laser;
      if (helpingTools.Laser) {
        tindakan_laser.push('1')
      }
      if (helpingTools.Laser_1) {
        tindakan_laser.push('2')
      }
      if (helpingTools.Laser_2) {
        tindakan_laser.push('3')
      }
      if (helpingTools.Laser_3) {
        tindakan_laser.push('4')
      }
      if (helpingTools.Grid) {
        tindakan_laser.push('5')
      }
      if (helpingTools.Focal) {
        tindakan_laser.push('6')
      }
      if (helpingTools.Barrage) {
        tindakan_laser.push('7')
      }
      if (helpingTools.Lattice) {
        tindakan_laser.push('8')
      }
    }
    return tindakan_laser;
  }

  const unit = 'Tindakan_Laser_Retina'
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const [processing, setProcessing] = useState<boolean | undefined>(false);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);
  const [toolLists, setToolLists] = useState<Array<string>>(getMata())
  const [pasienLaser, setPasienLaser] = useState<Array<string>>(getPasienDitetes())
  const [tindakanLaser, setTindakanLaser] = useState<Array<string>>(getTindakanLaser())

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

  const handleTindakanLaserCheckbox = (e: any) => {
    if (e.target.checked) {
      if (tindakanLaser && tindakanLaser.includes(e.target.value)) {
        return;
      } else {
        setTindakanLaser([...tindakanLaser, e.target.value])
      }
    }
    if (!e.target.checked) {
      if (tindakanLaser && tindakanLaser.includes(e.target.value)) {
        const newLists = tindakanLaser.filter((val: string) => val !== e.target.value)
        setTindakanLaser(newLists);
      } else {
        return 0;
      }
    }
  }

  useEffect(() => {
    setValue('mata', toolLists)
  }, [toolLists])

  useEffect(() => {
    setValue('mata_pasien_ditetes', pasienLaser)
  }, [pasienLaser])

  useEffect(() => {
    setValue('tindakan_laser', tindakanLaser)
  }, [tindakanLaser])


  const { register, handleSubmit, errors, setValue, getValues, control } = useForm({
    mode: 'onChange',
    // resolver: yupResolver(CreateRetinaLaserActionReportRequest.schema()),
    defaultValues: {
      diagnosa_tindakan: data && data.Diagnosa_Tindakan ? data.Diagnosa_Tindakan : '',
      mata: getMata(),
      jenis: data && data.Jenis_Id ? data.Jenis_Id : '',
      obat: data && data.Obat_Id ? data.Obat_Id : '',
      informasi: data && data.Informasi ? data.Informasi : '',
      mata_pasien_ditetes: data && data.Mata_Pasien_Ditetes ? data.Mata_Pasien_Ditetes : '',
      tindakan_laser: data && data.Tindakan_Laser ? data.Tindakan_Laser : '',
      spot_size: data && data.Spot_Size ? data.Spot_Size : '',
      durasi: data && data.Durasi ? data.Durasi : '',
      power: data && data.Power ? data.Power : '',
      jumlah_tembakan: data && data.Jumlah_Tembakan ? data.Jumlah_Tembakan : '',
      komplikasi: data && data.Komplikasi ? data.Komplikasi : '',
      'gambar-retina-od': data && data.Gambar_Retina_OD ? data.Gambar_Retina_OD : '',
      'gambar-retina-os': data && data.Gambar_Retina_OS ? data.Gambar_Retina_OS : '',
      noncort_eye_drop: data && data.noncort_eye_drop ? data.noncort_eye_drop : '',
      'ttd-tanggal': (data && data && data.TTD_Tanggal) ? data.TTD_Tanggal.replace(/\s/g, 'T') : `${new Date().getFullYear().toString().padStart(4, '0')}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}T${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
      // 'ttd-tanggal': data && data.TTD_Tanggal ? data.TTD_Tanggal : '',
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

  const handleRetinaOD = (image: string) => {
    setValue('gambar-retina-od', image)
  }

  const handleRetinaOS = (image: string) => {
    setValue('gambar-retina-os', image)
  }

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  const handleSubmitForm = (value: ICreateRetinaLaserActionReportRequest) => {
    if (!treatment) {
      return false;
    }
    setProcessing(true);
    const appRequest = AppRequest.createFromStore(treatment);
    if (!data) {
      const params = CreateRetinaLaserActionReportRequest.createFromJson({...value, ...appRequest, unit, 'ttd-tanggal': DateTimeConverter.convertToNormalDatetime(value['ttd-tanggal']) });
      InspectionResultYagLaserAndRetinaService().create(params)
        .then((response) => {
          if (response && response.data && response.data.data) {
            const params2 = {...appRequest, ID: response.data.data.item_id, itemId: response.data.data.item_id, unit, emr_id: response.data.data.EMR_ID};
            InspectionResultYagLaserAndRetinaService().view(params2)
              .then((resp) => {
                const { data } = resp.data;
                InspectionResultYagLaserAndRetinaService().pdfv3(PdfRetinaLaserActionRequest.createPdfRequest({ ...data, nomor_mr: appRequest.nomor_mr, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
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
      const params = UpdateRetinaLaserActionReportRequest.createFromJson({...value, ...appRequest, ID: data.ID, unit, emr_id: data.EMR_ID, 'ttd-tanggal': DateTimeConverter.convertToNormalDatetime(value['ttd-tanggal']) });
      InspectionResultYagLaserAndRetinaService().update(params)
        .then(() => {
          const params3 = {...appRequest, ID: data.ID, itemId: data.ID, unit, emr_id: data.EMR_ID};
          InspectionResultYagLaserAndRetinaService().view(params3)
            .then((resp) => {
              const { data } = resp.data;
              InspectionResultYagLaserAndRetinaService().pdfv3(PdfRetinaLaserActionRequest.createPdfRequest({...data, nomor_mr: appRequest.nomor_mr, umur_lengkap: treatment?.Pasien?.Umur_Lengkap}, appRequest.emr_id))
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
      <Table borderless style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td>
              <Row>
                <Col>
                  <Label>Diagnosa Tindakan</Label>
                </Col>
              </Row>
            </td>
            <td style={{width:'81%'}}>
              <Row className="my-1">
                <Col>
                  <Input
                    id="diagnosa_tindakan"
                    type="textarea"
                    name="diagnosa_tindakan"
                    innerRef={register()}
                  />
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Row>
                <Col>
                  <Label>Mata</Label>
                </Col>
              </Row>
            </td>
            <td>
              <Row className="mb-1">
                <Col>
                  <Input
                    id="mata_1"
                    type="checkbox"
                    name="mata[]"
                    className="me-1"
                    onChange={(e) => handleMataCheckbox(e)}
                    defaultChecked={getMata() && getMata().length > 0 && getMata().includes('1')}
                    value="1"
                    style={{marginLeft:'50px'}}
                    innerRef={register("mata") as any}
                  />{' '}
                  <Label>Kanan</Label>
                </Col>
                <Col>
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
            </td>
          </tr>
          <tr>
            <td>
              <Row>
                <Col>
                  <Label>Anestesi Lokal</Label>
                </Col>
              </Row>
            </td>
            <td>
              <Row>
                <Col style={{marginLeft:'60px'}}>
                  <Label>Jenis</Label>
                </Col>
                <Col md='4'>
                  <Input
                    type="select"
                    id='jenis'
                    name='jenis'
                    innerRef={register()}
                  >
                    <option value="" disabled={false}>--</option>
                    {
                      jenis && jenis.map((item: any, key: number) => {
                        return <option value={item} key={key}>{ item }</option>;
                      })
                    }
                  </Input>
                </Col>
                <Col>
                  <Label>Obat</Label>
                </Col>
                <Col md='4'>
                  <Input
                    type="select"
                    id='obat'
                    name='obat'
                    innerRef={register()}
                  >
                    <option value="" disabled={false}>--</option>
                    {
                      obat && obat.map((item: any, key: number) => {
                        return <option value={item} key={key}>{ item }</option>;
                      })
                    }
                  </Input>
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Row style={{width: '150%'}}>
                <Col>
                  <Label>Pasien Diberikan Informasi Prosedur Tindakan Laser</Label>
                </Col>
              </Row>
            </td>
            <td>
              <Row>
                <Col>
                  <Input
                    id="informasi_1"
                    type="radio"
                    name="informasi"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.Informasi === '1'}
                    value="1"
                    style={{marginLeft:'50px'}}
                    innerRef={register("informasi") as any}
                  />{' '}
                  <Label>Ya</Label>
                </Col>
                <Col>
                  <Input
                    id="informasi_2"
                    type="radio"
                    name="informasi"
                    className="me-1"
                    onChange={(e) => handleRadioChange(e)}
                    defaultChecked={data && data.Informasi === '2'}
                    value="2"
                    innerRef={register("informasi") as any}
                  />{' '}
                  <Label>Tidak</Label>
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Row style={{width: '150%'}}>
                <Col>
                  <Label>Mata Pasien Yang Dilaser Diteteskan Dengan</Label>
                </Col>
              </Row>
            </td>
            <td>
              <Row>
                <Col>
                  <Input
                    id="mata_pasien_ditetes_1"
                    type="checkbox"
                    name="mata_pasien_ditetes[]"
                    className="me-1"
                    onChange={(e) => handlePasienLaserCheckbox(e)}
                    defaultChecked={getPasienDitetes() && getPasienDitetes().length > 0 && getPasienDitetes().includes('1')}
                    value="1"
                    style={{marginLeft:'50px'}}
                    innerRef={register("mata_pasien_ditetes") as any}
                  />{' '}
                  <Label>Pantocain 0.5% ED</Label>
                </Col>
                <Col>
                  <Input
                    id="mata_pasien_ditetes"
                    type="checkbox"
                    name="mata_pasien_ditetes[]"
                    className="me-1"
                    onChange={(e) => handlePasienLaserCheckbox(e)}
                    defaultChecked={getPasienDitetes() && getPasienDitetes().length > 0 && getPasienDitetes().includes('2')}
                    value="2"
                    innerRef={register("mata_pasien_ditetes") as any}
                  />{' '}
                  <Label>Mydriatil ED</Label>
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Row style={{width: '150%'}}>
                <Col className='mb-0'>
                  <Label>Tindakan Laser Yang Dilakukan</Label>
                </Col>
              </Row>
            </td>
            <td>
              <Row>
                <Col>
                  <Input
                    id="tindakan_laser_1"
                    type="checkbox"
                    name="tindakan_laser"
                    className="me-1"
                    onChange={(e) => handleTindakanLaserCheckbox(e)}
                    defaultChecked={getTindakanLaser() && getTindakanLaser().length > 0 && getTindakanLaser().includes('1')}
                    value="1"
                    style={{marginLeft:'50px'}}
                    innerRef={register("tindakan_laser") as any}
                  />{' '}
                  <Label>Laser PRP</Label>
                </Col>
                <Col>
                  <Input
                    id="tindakan_laser_2"
                    type="checkbox"
                    name="talk"
                    className="me-1"
                    onChange={(e) => handleTindakanLaserCheckbox(e)}
                    defaultChecked={getTindakanLaser() && getTindakanLaser().length > 0 && getTindakanLaser().includes('2')}
                    value="2"
                    innerRef={register("tindakan_laser") as any}
                  />{' '}
                  <Label>I</Label>
                </Col>
                <Col>
                  <Input
                    id="tindakan_laser_3"
                    type="checkbox"
                    name="tindakan_laser"
                    className="me-1"
                    onChange={(e) => handleTindakanLaserCheckbox(e)}
                    defaultChecked={getTindakanLaser() && getTindakanLaser().length > 0 && getTindakanLaser().includes('3')}
                    value="3"
                    innerRef={register("tindakan_laser") as any}
                  />{' '}
                  <Label>II</Label>
                </Col>
                <Col>
                  <Input
                    id="tindakan_laser_4"
                    type="checkbox"
                    name="tindakan_laser"
                    className="me-1"
                    onChange={(e) => handleTindakanLaserCheckbox(e)}
                    defaultChecked={getTindakanLaser() && getTindakanLaser().length > 0 && getTindakanLaser().includes('4')}
                    value="4"
                    innerRef={register("tindakan_laser") as any}
                  />{' '}
                  <Label>III</Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input
                    id="tindakan_laser_5"
                    type="checkbox"
                    name="tindakan_laser"
                    className="me-1"
                    onChange={(e) => handleTindakanLaserCheckbox(e)}
                    defaultChecked={getTindakanLaser() && getTindakanLaser().length > 0 && getTindakanLaser().includes('5')}
                    value="5"
                    style={{marginLeft:'50px'}}
                    innerRef={register("tindakan_laser") as any}
                  />{' '}
                  <Label>Grid</Label>
                </Col>
                <Col>
                  <Input
                    id="tindakan_laser_6"
                    type="checkbox"
                    name="tindakan_laser"
                    className="me-1"
                    onChange={(e) => handleTindakanLaserCheckbox(e)}
                    defaultChecked={getTindakanLaser() && getTindakanLaser().length > 0 && getTindakanLaser().includes('6')}
                    value="6"
                    innerRef={register("tindakan_laser") as any}
                  />{' '}
                  <Label>Focal</Label>
                </Col>
                <Col>
                  <Input
                    id="tindakan_laser_7"
                    type="checkbox"
                    name="tindakan_laser"
                    className="me-1"
                    onChange={(e) => handleTindakanLaserCheckbox(e)}
                    defaultChecked={getTindakanLaser() && getTindakanLaser().length > 0 && getTindakanLaser().includes('7')}
                    value="7"
                    innerRef={register("tindakan_laser") as any}
                  />{' '}
                  <Label>Barrage</Label>
                </Col>
                <Col>
                  <Input
                    id="tindakan_laser_8"
                    type="checkbox"
                    name="tindakan_laser"
                    className="me-1"
                    onChange={(e) => handleTindakanLaserCheckbox(e)}
                    defaultChecked={getTindakanLaser() && getTindakanLaser().length > 0 && getTindakanLaser().includes('8')}
                    value="8"
                    innerRef={register("tindakan_laser") as any}
                  />{' '}
                  <Label>Lattice</Label>
                </Col>
              </Row>
            </td>
          </tr>
        </tbody>
      </Table>

      {/* <FormGroup className="form-group" row>
        <Row>
          <Col></Col>
          <Col md='1'>
            <Label>Spot Size</Label>
          </Col>
          <Col md='8'>
            <Input
              id="spot_size"
              type="text"
              name="spot_size"
              style={{width:'60%'}}
              innerRef={register()}
            />{' '}
          </Col>
        </Row>
        <Row style={{marginTop:'10px'}}>
          <Col></Col>
          <Col md='1'>
            <Label>Durasi</Label>
          </Col>
          <Col md='8'>
            <Input
              id="durasi"
              type="text"
              name="durasi"
              style={{width:'60%'}}
              innerRef={register()}
            />{' '}
          </Col>
        </Row>
        <Row style={{marginTop:'10px'}}>
          <Col></Col>
          <Col md='1'>
            <Label>Power</Label>
          </Col>
          <Col md='8'>
            <Input
              id="power"
              type="text"
              name="power"
              style={{width:'60%'}}
              innerRef={register()}
            />{' '}
          </Col>
        </Row>
        <Row style={{marginTop:'10px'}}>
          <Col md='2'>
            <Label>Jumlah Tembakan</Label>
          </Col>
          <Col>
            <Input
              id="jumlah_tembakan"
              type="text"
              name="jumlah_tembakan"
              innerRef={register()}
            />{' '}
          </Col>
        </Row>
      </FormGroup> */}

      <Table borderless style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td>
              <Row>
                <Col style={{marginLeft:'25%'}}>
                  <Label>Spot Size</Label>
                </Col>
                <Col>
                  <Input
                    id="spot_size"
                    type="text"
                    name="spot_size"
                    style={{marginLeft:'-70%'}}
                    innerRef={register()}
                  />{' '}
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Row>
                <Col style={{marginLeft:'25%'}}>
                  <Label>Durasi</Label>
                </Col>
                <Col>
                  <Input
                    id="durasi"
                    type="text"
                    name="durasi"
                    style={{marginLeft:'-70%'}}
                    innerRef={register()}
                  />{' '}
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Row>
                <Col style={{marginLeft:'25%'}}>
                  <Label>Power</Label>
                </Col>
                <Col>
                  <Input
                    id="power"
                    type="text"
                    name="power"
                    style={{marginLeft:'-70%'}}
                    innerRef={register()}
                  />{' '}
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>
              <Row>
                <Col style={{marginLeft:'25%'}}>
                  <Label>Jumlah Tembakan</Label>
                </Col>
                <Col>
                  <Input
                    id="jumlah_tembakan"
                    type="text"
                    name="jumlah_tembakan"
                    style={{marginLeft:'-70%'}}
                    innerRef={register()}
                  />{' '}
                </Col>
              </Row>
            </td>
          </tr>
        </tbody>
      </Table>

      <FormGroup className="form-group" row>
        <Row className='mt-1'>
          <Col style={{marginLeft:'30px'}}>
            <Label>Komplikasi</Label>
          </Col>
          <Col md='9'>
            <Input
              id="komplikasi"
              type="textarea"
              name="komplikasi"
              innerRef={register()}
            />
          </Col>
        </Row>
      </FormGroup>

      <FormGroup className='form-group'>
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
            <tr>
              <td></td>
              <td>
                <RetinaImage
                  initialImage={(data && data.Gambar_Retina_OD && data.Gambar_Retina_OD !== '') ? data.Gambar_Retina_OD : undefined}
                  onSaved={(image: string) => handleRetinaOD(image)}
                  formName='rawat-jalan/hasil-pemeriksaan'
                  component='pengkajian_awal_dokter_retina_OD'
                  type='right' />
                <Input
                  id="gambar-retina-od"
                  type="hidden"
                  name="gambar-retina-od"
                  innerRef={register()}
                />
              </td>
              <td>
                <RetinaImage
                  initialImage={(data && data.Gambar_Retina_OS && data.Gambar_Retina_OS !== '') ? data.Gambar_Retina_OS : undefined}
                  onSaved={(image: string) => handleRetinaOS(image)}
                  formName='rawat-jalan/hasil-pemeriksaan'
                  component='pengkajian_awal_dokter_retina_OS'
                  type='left' />
                <Input
                  id="gambar-retina-os"
                  type="hidden"
                  name="gambar-retina-os"
                  innerRef={register()}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </FormGroup>

      <FormGroup className='form-group'>
        <Row>
          <Col>
            <Label style={{marginLeft: '30px'}}>Pasien ditetes NonCort Eye Drop</Label>
          </Col>
          <Col>
            <Input
              id="noncort_eye_drop_1"
              type="radio"
              name="noncort_eye_drop"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.Noncort_Eye_Drop === '1'}
              value="1"
              innerRef={register('noncort_eye_drop') as any}
            />{' '}
            <Label>Ya</Label>
          </Col>
          <Col>
            <Input
              id="noncort_eye_drop_2"
              type="radio"
              name="noncort_eye_drop"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.Noncort_Eye_Drop === '2'}
              value="2"
              innerRef={register("noncort_eye_drop") as any}
            />{' '}
            <Label>Tidak</Label>
          </Col>
          <Col></Col>
        </Row>
        <Row className='mt-1'>
          <Col style={{marginLeft:'30px'}}>
            <Label>Tanggal</Label>
          </Col>
          <Col md='9'>
            <Input
              type="datetime-local"
              id='ttd-tanggal'
              name="ttd-tanggal"
              innerRef={register({ required: false })}
              invalid={errors['ttd-tanggal'] && true}
            />
          </Col>
        </Row>
      </FormGroup>

      <Row className="mt-2">
        <Col>
          <div className="d-flex justify-content-around my-0">
            <Signature
              label="Perawat Rawat Jalan"
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
              label="Dokter Operator"
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
      {/* <FormGroup className='form-group mt-0' row>
        <div className='d-flex justify-content-center align-items-center'>
          <Label className='me-1'>Terakhir Disimpan:</Label>
          <Label>{(data && data.form && data.form.Updated_At) ? data.form.Updated_At : '' }</Label>
        </div>
      </FormGroup> */}
    </Form>
  )
}

export default RetinaLaserActionReportForm;
