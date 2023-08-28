import { Button, Col, FormGroup, Input, InputGroup, InputGroupText, Label, ListGroup, ListGroupItem, Nav, NavItem, NavLink, Progress, Row, TabContent, TabPane, Table } from "reactstrap";
import { DownloadCloud, FileText, X } from "react-feather";
import { Fragment, useCallback, useEffect, useState } from "react";
import Compressor from "compressorjs";
import { GridChart } from "@src/shared/grid-chart";
import Image from 'next/image';
import { Signature } from '@shared/signature/components';
import { SignatureModel } from '@shared/signature/models/signature.model';
import { SurgeryReportModel } from "../models/surgery-report.model";
import getConfig from 'next/config';
import { useDropzone } from 'react-dropzone';

import { ChartImageService } from "@src/shared/grid-chart/services";
import { EyeImage } from "@src/shared/eye-image/components";
import { SubmitButton } from "@src/shared/button";
import description from "../const/local-phaco/description";
import localPterygiumBot from "../const/local-pterygium/localPterygiumBot";
import localPterygiumDrip from "../const/local-pterygium/localPterygiumDrip";
import localPterygiumExicisi from "../const/local-pterygium/localPterygiumExicisi";
import localPterygiumInjection from "../const/local-pterygium/localPterygiumInjection";
import localPterygiumTop from "../const/local-pterygium/localPterygiumTop";
import surgeryDuration from "../const/local-phaco/surgeryDuration";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { UploadToCloudService } from "@src/shared/upload-cloud-storage/services";
import injectionIntravitrealType
  from '@modules/operating-room/surgery-report/const/local-injection-intravitreal/injectionIntravitrealType';

const LocalPterygiumForm = (props: { mainRegister: any, mainErrors: any, mainSetValue: any, mainGetValues: any, defaultSelected?: boolean, data: any, processing: boolean, pdfData: any, publicRuntimeConfig: any }) => {
  const { mainRegister, mainErrors, mainSetValue, mainGetValues, defaultSelected, data, processing, pdfData, publicRuntimeConfig } = props;

  const [activeTab, setActiveTab] = useState<string>('1')
  const [files, setFiles] = useState<any>([])
  const [infiltration, setInfiltration] = useState((data && data.form && data.form.Anestesi_Infiltrasi) ? !!(data.form.Anestesi_Infiltrasi) : false);
  const [fieldBlock, setFieldBlock] = useState((data && data.form && data.form.Anestesi_Field_Block) ? !!(data.form.Anestesi_Field_Block) : false);
  const [injeksi, setInjeksi] = useState((data && data.form && data.form.Lokal_Pterygium_Check_Injeksi) ? !!(data.form.Lokal_Pterygium_Check_Injeksi) : false);
  const [exicisi, setExicisi] = useState((data && data.form && data.form.Lokal_Pterygium_Bara_Sclera) ? !!(data.form.Lokal_Pterygium_Bara_Sclera) : false);
  const [conjung, setConjung] = useState((data && data.form && data.form.Lokal_Pterygium_Conjungtiva) ? !!(data.form.Lokal_Pterygium_Conjungtiva) : false);
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const [inProgress, setInProgress] = useState<any>(undefined);

  const [kasaSteril, setKasaSteril] = useState(!!(data && data.form && data.form.Lokal_Pterygium_9 === 1));

  const [checkboxlocalPterygiumTop, setCheckboxLocalPterygiumTop] = useState(localPterygiumTop.map((i: any, key: number) => {
    return {
      id: key,
      name: i,
      checked: (data && data.form) ? data.form[`Lokal_Pterygium_${key}`] : false,
    }
  }));

  const [checkboxlocalPterygiumBot, setCheckboxLocalPterygiumBot] = useState(localPterygiumBot.map((i: any, key: number) => {
    return {
      id: i.id,
      name: i.text,
      checked: (data && data.form) ? data.form[`Lokal_Pterygium_${i.id}`] : false,
    }
  }));
  
  const [checkboxLocalPterygiumDrip, setCheckboxLocalPterygiumDrip] = useState(localPterygiumDrip.map((i: any, key: number) => {
    return {
      id: key + 1,
      name: i,
      checked: (data && data.form) ? data.form[`Lokal_Pterygium_Diteteskan_${key + 1}`] : false,
    }
  }));

  const handleSelectAll = (e: any) => {
    const newValue = checkboxlocalPterygiumTop.map(c => {
      const a = {...c};
      a.checked = e.target.checked;
      return a;
    });
    checkboxlocalPterygiumTop.forEach(item => {
      mainSetValue(`lokal-pterygium-${item.id}`, e.target.checked ? '1' : '0');
    });
    setCheckboxLocalPterygiumTop(newValue);

    const newValue2 = checkboxlocalPterygiumBot.map(c => {
      const a = {...c};
      a.checked = e.target.checked;
      return a;
    });
    checkboxlocalPterygiumBot.forEach(item => {
      mainSetValue(`lokal-pterygium-${item.id}`, e.target.checked ? '1' : '0');
    });
    setCheckboxLocalPterygiumBot(newValue2);

    const newValue3 = checkboxLocalPterygiumDrip.map(c => {
      const a = {...c};
      a.checked = e.target.checked;
      return a;
    });
    checkboxLocalPterygiumDrip.forEach(item => {
      mainSetValue(`lokal-pterygium-diteteskan-${item.id}`, e.target.checked ? '1' : '0');
    });
    setCheckboxLocalPterygiumDrip(newValue3);

    setInjeksi(e.target.checked);
    setExicisi(e.target.checked);
    setConjung(e.target.checked);
    setKasaSteril(e.target.checked);

    mainSetValue('lokal-pterygium-check-injeksi', e.target.checked ? '1' : '0');
    mainSetValue(`lokal-pterygium-bara-sclera`, e.target.checked ? '1' : '0');
    mainSetValue(`lokal-pterygium-conjungtiva`, e.target.checked ? '1' : '0');
    mainSetValue(`lokal-pterygium-9`, e.target.checked ? '1' : '0');
  }

  useEffect(() => {
    if (data && data.form) {
      setCheckboxLocalPterygiumTop(localPterygiumTop.map((i: any, key: number) => {
        return {
          id: key,
          name: i,
          checked: (data && data.form) ? data.form[`Lokal_Pterygium_${key}`] : false,
        }
      }));
      checkboxlocalPterygiumTop.forEach(item => {
        mainSetValue(`lokal-pterygium-${item.id}`, data.form[`Lokal_Pterygium_${item.id}`] ? '1' : '0');
      });

      setCheckboxLocalPterygiumBot(localPterygiumBot.map((i: any, key: number) => {
        return {
          id: i.id,
          name: i.text,
          checked: (data && data.form) ? data.form[`Lokal_Pterygium_${i.id}`] : false,
        }
      }));
      checkboxlocalPterygiumBot.forEach(item => {
        mainSetValue(`lokal-pterygium-${item.id}`, data.form[`Lokal_Pterygium_${item.id}`] ? '1' : '0');
      });

      setCheckboxLocalPterygiumDrip(localPterygiumDrip.map((i: any, key: number) => {
        return {
          id: key + 1,
          name: i,
          checked: (data && data.form) ? data.form[`Lokal_Pterygium_Diteteskan_${key + 1}`] : false,
        }
      }));
      checkboxLocalPterygiumDrip.forEach(item => {
        mainSetValue(`lokal-pterygium-diteteskan-${item.id}`, data.form[`Lokal_Pterygium_Diteteskan_${item.id}`] ? '1' : '0');
      });


      setInjeksi((data && data.form && data.form.Lokal_Pterygium_Check_Injeksi) ? !!(data.form.Lokal_Pterygium_Check_Injeksi) : false);
      setExicisi((data && data.form && data.form.Lokal_Pterygium_Bara_Sclera) ? !!(data.form.Lokal_Pterygium_Bara_Sclera) : false);
      setConjung((data && data.form && data.form.Lokal_Pterygium_Conjungtiva) ? !!(data.form.Lokal_Pterygium_Conjungtiva) : false);
      setKasaSteril(!!(data && data.form && data.form.Lokal_Pterygium_9 === 1));


      mainSetValue('lokal-pterygium-check-injeksi', !!(data.form.Lokal_Pterygium_Check_Injeksi) ? '1' : '0');
      mainSetValue(`lokal-pterygium-bara-sclera`, !!(data.form.Lokal_Pterygium_Bara_Sclera) ? '1' : '0');
      mainSetValue(`lokal-pterygium-conjungtiva`, !!(data.form.Lokal_Pterygium_Conjungtiva) ? '1' : '0');
      mainSetValue(`lokal-pterygium-9`, !!(data && data.form && data.form.Lokal_Pterygium_9 === 1) ? '1' : '0');
    }
  }, [data]);

  const toBase64 = (file: any) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  })

  const { getRootProps: getFilesProps, getInputProps: getInputFilesProps } = useDropzone({ multiple: true,
    accept: 'image/jpg,image/jpeg,image/png',
    onDrop: useCallback(acceptedFiles => {
      const toUpload = acceptedFiles.map((file: any) => Object.assign(file));
      setInProgress({ value: 10, label: 'Compressing image', percentage: '10%' })
      new Compressor(toUpload[0], {
        quality: 0.2,
        async success(res: any) {
          setInProgress({ value: 50, label: 'Uploading image', percentage: '50%' })
          mainSetValue('name-image-stiker', res.name);
          mainSetValue('type-image-stiker', res.type);
          mainSetValue('size-image-stiker', res.size);
          toBase64(res).then((base64: any) => {
            if (!treatment) return;
            UploadToCloudService().uploadImageCloud({
              emr_id: treatment.EMR_ID,
              form_name: 'ok/laporan-pembedahan',
              component_id: 'image_stiker',
              image: base64,
            }).then(response => {
              const { data } = response.data;
              mainSetValue('url-image-stiker', data.signUrl)
              setInProgress({ value: 100, label: 'Image uploaded', percentage: '100%' })
              setTimeout(() => setInProgress(undefined), 3000);
            })
          })
        },
        error(err) {
          console.log(err);
        },
      });
      setFiles(toUpload)
    }, [files])})

  const handleRemoveFile = (file: any) => {
    setFiles([]);
    mainSetValue('name-image-stiker', '');
    mainSetValue('type-image-stiker', '');
    mainSetValue('size-image-stiker', '');
    mainSetValue('url-image-stiker', '');
  }

  useEffect(() => {
    if (data && data.form && data.form.Name_Image_Stiker) {
      setFiles([
        {
          name: `${data.form?.Name_Image_Stiker}`,
          size: data.form?.Size_Image_Stiker,
          url_real: data.form?.Url_Image_Stiker,
        },
      ])
    }
  }, [data]);

  const renderFilePreview = (file: any) => {
    if (file.url_real) {
      const { publicRuntimeConfig } = getConfig();
      return <Image className='rounded' alt={file.name} src={file.url_real} width='100' height='100' />
    } else if (file.type && file.type.startsWith('image')) {
      return <Image className='rounded' alt={file.name} src={URL.createObjectURL(file)} width='100' height='100' />
    } else {
      return <FileText size='28' />
    }
  }

  const renderFileSize = (size: any) => {
    if (Math.round(size / 100) / 10 > 1000) {
      return `${(Math.round(size / 100) / 10000).toFixed(1)} mb`
    } else {
      return `${(Math.round(size / 100) / 10).toFixed(1)} kb`
    }
  };

  const fileList = files.map((file: any, index: any) => (
    <>
      <ListGroupItem key={`${file.name}-${index}`} className='d-flex align-items-center justify-content-between'>
        <div className='file-details d-flex align-items-center'>
          <div className='file-preview me-1'>{renderFilePreview(file)}</div>
          <div>
            <p className='file-name mb-0'>{file.name}</p>
            <p className='file-size mb-0'>{renderFileSize(file.size)}</p>
          </div>
        </div>
        <Button color='danger' outline size='sm' className='btn-icon' onClick={() => handleRemoveFile(file)}>
          <X size={14} color='red'/>
        </Button>
      </ListGroupItem>
      {
        inProgress ? (
          <div style={{ width: '100%' }} className='d-flex flex-column justify-content-center align-items-center mt-1'>
            <Label>{inProgress.label}</Label>
            <Progress
              value={inProgress.value}
              max={100}
              bar
              striped
              animated
            >
              {inProgress.percentage}
            </Progress>
          </div>
        ) : (
          null
        )
      }
    </>
  ));

  const toggle = (tab: string) => {
    if (activeTab && activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const handleCheckboxChange = (val: any) => {
    mainSetValue(`${val.target.name}`, (val.target.checked) ? '1' : '0')
  }

  const handleChecklistChange = (e: any) => {
    mainSetValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');

    if (e.target.name === 'lokal-pterygium-check-injeksi' && !e.target.checked) {
      mainSetValue('lokal-pterygium-injeksi', '');
    }
    if (e.target.name === 'lokal-pterygium-bara-sclera' && !e.target.checked) {
      mainSetValue('lokal-pterygium-exicisi', '');
    }
    if (e.target.name === 'lokal-pterygium-conjungtiva' && !e.target.checked) {
      mainSetValue('lokal-pterygium-clg', '');
    }
  }

  const handleGridChartData = (data: string) => {
    mainSetValue('grid-chart-data', data)
  }

  const handleGridChartImage = (image: string) => {
    mainSetValue('grid-chart-img', image)
  }

  const handleGridChartScale = (scale: string) => {
    mainSetValue('skala-anestesi', scale);
  }

  const handleImagePra = (image: string) => {
    mainSetValue('lokal-pterygium-gambar-pra', image)
  }

  const handleImagePasca = (image: string) => {
    mainSetValue('lokal-pterygium-gambar-pasca', image)
  }

  const handleDoctorSigned = (image: SignatureModel) => {
    mainSetValue('ttd-dokter', image.Signature);
    mainSetValue('id-dokter', image.ID_Karyawan);
  }

  const handleNurseSigned = (image: SignatureModel) => {
    mainSetValue('ttd-perawat', image.Signature);
    mainSetValue('id-perawat', image.ID_Karyawan);
  }

  const handleRadioChange = (e: any) => {
    mainSetValue(`${e.target.name}`, e.target.value);
  }

  const handleStartLamaPembedahanChanged = (e: any) => {
    const start = e.target.value;
    const end = mainGetValues('waktu-end-lama-pembedahan');
    if (!end || start > end) {
      mainSetValue('waktu-end-lama-pembedahan', start);
      mainSetValue('lama-pembedahan', '0');
    } else {
      const arrStart = start.split(':');
      const arrEnd = end.split(':');
      const diff =  (new Date()).setHours(arrEnd[0], arrEnd[1], 0) - (new Date()).setHours(arrStart[0], arrStart[1], 0);
      const parseDef = Math.round((diff / (60 * 1000)));
      mainSetValue('lama-pembedahan', parseDef);
    }
  }

  const handleEndLamaPembedahanChanged = (e: any) => {
    const start = mainGetValues('waktu-start-lama-pembedahan');
    const end = e.target.value;
    if (!start || start > end) {
      mainSetValue('waktu-start-lama-pembedahan', end);
      mainSetValue('lama-pembedahan', '0');
    } else {
      const arrStart = start.split(':');
      const arrEnd = end.split(':');
      const diff =  (new Date()).setHours(arrEnd[0], arrEnd[1], 0) - (new Date()).setHours(arrStart[0], arrStart[1], 0);
      const parseDef = Math.round((diff / (60 * 1000)));
      mainSetValue('lama-pembedahan', parseDef);
    }
  }

  return (
    <><Nav tabs>
      <NavItem>
        <NavLink className={(activeTab && activeTab === '1') ? 'active' : ''} onClick={() => toggle('1')}>
          Diagnosa
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={(activeTab && activeTab === '2') ? 'active' : ''} onClick={() => toggle('2')}>
          Laporan Pembedahan
        </NavLink>
      </NavItem>
    </Nav>
    <TabContent activeTab={activeTab}>
      <TabPane tabId='1'>
        <Row>
          <Input
            id="url-image-stiker"
            type="hidden"
            name="url-image-stiker"
            innerRef={mainRegister()}
          />
          <Input
            id="name-image-stiker"
            type="hidden"
            name="name-image-stiker"
            innerRef={mainRegister()}
          />
          <Input
            id="type-image-stiker"
            type="hidden"
            name="type-image-stiker"
            innerRef={mainRegister()}
          />
          <Input
            id="size-image-stiker"
            type="hidden"
            name="size-image-stiker"
            innerRef={mainRegister()}
          />
          <Table className="w-full mt-3" borderless>
            <tr>
              <td style={{ width: '15%' }}>
                <Label className="mt-1" style={{ fontSize: '10pt' }}>Dokter Operator</Label>
              </td>
              <td>
                <Input
                  className="mt-1"
                  type="select"
                  id="id-dokter-operator"
                  name="id-dokter-operator"
                  innerRef={mainRegister()}
                >
                  <option value="" disabled={true}>--</option>
                  {
                    doctors && doctors.map((item: any, key: number) => {
                      return <option value={item.ID_Karyawan} key={key}>{ item.Nama }</option>;
                    })
                  }
                </Input>
              </td>
            </tr>
            <tr>
              <td style={{ width: '15%' }}>
                <Label className="mt-3" style={{ fontSize: '10pt' }}>Perawat Asisten Operator</Label>
              </td>
              <td>
                <Input
                  className="mt-3"
                  type="select"
                  id="id-perawat-dokter-asisten-operator"
                  name="id-perawat-dokter-asisten-operator"
                  innerRef={mainRegister()}
                >
                  <option value="" disabled={true}>--</option>
                  {
                    nurses && nurses.map((item: any, key: number) => {
                      return <option value={item.ID_Karyawan} key={key}>{ item.Nama }</option>;
                    })
                  }
                </Input>
              </td>
            </tr>
            <tr>
              <td style={{ width: '15%' }}>
                <Label className="mt-3" style={{ fontSize: '10pt' }}>Perawat Asisten Sirkular</Label>
              </td>
              <td>
                <Input
                  className="mt-3"
                  type="select"
                  id="id-perawat-sirkular"
                  name="id-perawat-sirkular"
                  innerRef={mainRegister()}
                >
                  <option value="" disabled={true}>--</option>
                  {
                    nurses && nurses.map((item: any, key: number) => {
                      return <option value={item.ID_Karyawan} key={key}>{ item.Nama }</option>;
                    })
                  }
                </Input>
              </td>
            </tr>
          </Table>
        </Row>
        <Row>
          <Table className="w-full mt-3" borderless>
            <tr>
              <td style={{ width: '50%' }}>
                <Table>
                  <tr>
                    <td style={{ width: '15%' }}>
                      <Label>Diagnosa Pra Bedah</Label>
                    </td>
                    <td style={{ width: '35%' }}>
                      <Input
                        id="diagnosa-pra-bedah"
                        type="textarea"
                        name="diagnosa-pra-bedah"
                        innerRef={mainRegister()}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: '15%' }}>
                      <Label>Diagnosa Pasca Bedah</Label>
                    </td>
                    <td style={{ width: '35%' }}>
                      <Input
                        id="diagnosa-pasca-bedah"
                        className="mt-1"
                        type="textarea"
                        name="diagnosa-pasca-bedah"
                        innerRef={mainRegister()}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: '15%' }}>
                      <Label>Tindakan Pembedahan</Label>
                    </td>
                    <td style={{ width: '35%' }}>
                      <Input
                        id="tindakan-pembedahan"
                        className="mt-1"
                        type="textarea"
                        name="tindakan-pembedahan"
                        innerRef={mainRegister()}
                      />
                    </td>
                  </tr>
                </Table>
              </td>
              <td style={{ width: '50%' }}>
                <Table style={{ verticalAlign: 'top' }} borderless>
                  <tr>
                    <td style={{ width: '15%' }}>
                      <Label style={{ marginLeft: '25px' }}>Tanggal Pembedahan</Label>
                    </td>
                    <td style={{ width: '35%' }}>
                      <Input
                        type="date"
                        id='tanggal-pembedahan'
                        name='tanggal-pembedahan'
                        innerRef={mainRegister()}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: '15%' }}>
                      <Label className="mt-3" style={{ marginLeft: '25px' }}>Lama Pembedahan</Label>
                    </td>
                    <td style={{ width: '35%' }}>
                      <Row className="m-0 p-0 mt-3">
                        <Col className="m-0 p-0">
                          <Input
                            type="time"
                            id='waktu-start-lama-pembedahan'
                            name='waktu-start-lama-pembedahan'
                            onChange={handleStartLamaPembedahanChanged}
                            innerRef={mainRegister()} />
                        </Col>
                        <Col md="auto">
                          s/d
                        </Col>
                        <Col className="m-0 p-0">
                          <Input
                            type="time"
                            id='waktu-end-lama-pembedahan'
                            name='waktu-end-lama-pembedahan'
                            onChange={handleEndLamaPembedahanChanged}
                            innerRef={mainRegister()} />
                        </Col>
                      </Row>
                      <Row className="m-0 p-0 mt-1">
                        <Col className="m-0 p-0">
                          <Input
                            type="text"
                            id='lama-pembedahan'
                            name='lama-pembedahan'
                            innerRef={mainRegister()} />
                        </Col>
                        <Col md="auto">
                          menit
                        </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: '15%' }}>
                      <Label className="mt-3" style={{ marginLeft: '25px' }}>Keterangan</Label>
                    </td>
                    <td style={{ width: '35%' }}>
                      <Input
                        className="mt-3"
                        type="select"
                        id='keterangan-pembedahan'
                        name='keterangan-pembedahan'
                        innerRef={mainRegister()}
                      >
                        <option value="" disabled>--</option>
                        {
                          description && description.map((item: any, key: number) => {
                            return <option value={item} key={key}>{ item }</option>;
                          })
                        }
                      </Input>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: '25%' }}></td>
                    <td style={{ width: '25%' }}>
                      <Row className="mt-2">
                        <Col>
                          <Input
                            id="pembedahan-opsi-kanan"
                            name='pembedahan-opsi-kanan'
                            type="checkbox"
                            className="me-1"
                            defaultChecked={(data && data.form && data.form.Pembedahan_Opsi_Kanan === 1)}
                            innerRef={mainRegister('pembedahan-opsi-kanan')}
                            onChange={(e) => handleCheckboxChange(e)} />
                          <label>Kanan</label>
                        </Col>
                        <Col>
                          <Input
                            id="pembedahan-opsi-kiri"
                            name='pembedahan-opsi-kiri'
                            type="checkbox"
                            className="me-1"
                            defaultChecked={(data && data.form && data.form.Pembedahan_Opsi_Kiri === 1)}
                            innerRef={mainRegister('pembedahan-opsi-kiri')}
                            onChange={(e) => handleCheckboxChange(e)} />
                          <label>Kiri</label>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: '25%' }}></td>
                    <td style={{ width: '25%' }}>
                      <Row>
                        <Col>
                          <Input
                            id="pembedahan-opsi-emergency"
                            name='pembedahan-opsi-emergency'
                            type="checkbox"
                            className="me-1"
                            defaultChecked={(data && data.form && data.form.Pembedahan_Opsi_Emergency === 1)}
                            innerRef={mainRegister('pembedahan-opsi-emergency')}
                            onChange={(e) => handleCheckboxChange(e)} />
                          <label>Emergency</label>
                        </Col>
                        <Col>
                          <Input
                            id="pembedahan-opsi-elektif"
                            name='pembedahan-opsi-elektif'
                            type="checkbox"
                            className="me-1"
                            defaultChecked={(data && data.form && data.form.Pembedahan_Opsi_Elektif === 1)}
                            innerRef={mainRegister('pembedahan-opsi-elektif')}
                            onChange={(e) => handleCheckboxChange(e)}
                          />
                          <label>Elektif</label>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </Table>
              </td>
            </tr>
          </Table>
        </Row>
        <Row>
          <Table className='w-full' borderless>
            <tr>
              <td style={{ width: '50%' }}>
                <tr>
                  <td style={{ width: '15%' }}></td>
                  <td style={{ width: '35%' }}>
                    <Row>
                      <Col>
                        <div {...getFilesProps()} className="dropzone my-3">
                          <input name="logo" placeholder='Logo'  {...getInputFilesProps()} />
                          <div className="d-flex align-items-center justify-content-center flex-column">
                            <DownloadCloud size="50" />
                            <h5>Drop Files here or click to upload</h5>
                            <p className="text-secondary">
                              Drop Files here or click browse through your machine
                            </p>
                          </div>
                        </div>
                        {files.length ? (
                          <Fragment>
                            <ListGroup className='my-2'>{fileList[0]}</ListGroup>
                          </Fragment>
                        ) : null}
                      </Col>
                    </Row>
                  </td>
                </tr>
              </td>
              <td style={{ width: '50%' }}></td>
            </tr>
          </Table>
        </Row>
        <Row>
          <Table style={{ width: '80%' }} borderless>
            <tr>
              <td style={{ width: '15%' }}>
                <Row>
                  <Col>
                    <Label>Jenis Pembedahan</Label>
                  </Col>
                </Row>
              </td>
              <td style={{ width: '65%' }}>
                <Row>
                  <Col>
                    <Input
                      id="jenis-pembedahan-1"
                      type="radio"
                      name="jenis-pembedahan"
                      className="me-1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Jenis_Pembedahan === '1'}
                      value="1"
                      innerRef={mainRegister("jenis-pembedahan")}
                    />{' '}
                    <Label>Bersih</Label>
                  </Col>
                  <Col>
                    <Input
                      id="jenis-pembedahan-2"
                      type="radio"
                      name="jenis-pembedahan"
                      className="me-1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Jenis_Pembedahan === '2'}
                      value="2"
                      innerRef={mainRegister("jenis-pembedahan")}
                    />{' '}
                    <Label>Bersih Tercemar</Label>
                  </Col>
                  <Col>
                    <Input
                      id="jenis-pembedahan-3"
                      type="radio"
                      name="jenis-pembedahan"
                      className="me-1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Jenis_Pembedahan === '3'}
                      value="3"
                      innerRef={mainRegister("jenis-pembedahan")}
                    />{' '}
                    <Label>Tercemar</Label>
                  </Col>
                  <Col>
                    <Input
                      id="jenis-pembedahan-4"
                      type="radio"
                      name="jenis-pembedahan"
                      className="me-1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Jenis_Pembedahan === '4'}
                      value="4"
                      innerRef={mainRegister("jenis-pembedahan")}
                    />{' '}
                    <Label>Kotor</Label>
                  </Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td>
                <Row>
                  <Col>
                    <Label>Operasi Ke</Label>
                  </Col>
                </Row>
              </td>
              <td style={{ width: '65%' }}>
                <Row>
                  <Col>
                    <Input
                      id="operasi-ke-1"
                      type="radio"
                      name="operasi-ke"
                      className="me-1"
                      value="1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Operasi_Ke === '1'}
                      innerRef={mainRegister("operasi-ke")}
                    />{' '}
                    <Label>1</Label>
                  </Col>
                  <Col>
                    <Input
                      id="operasi-ke-2"
                      type="radio"
                      name="operasi-ke"
                      className="me-1"
                      value="2"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Operasi_Ke === '2'}
                      innerRef={mainRegister("operasi-ke")}
                    />{' '}
                    <Label>Re-Do</Label>
                  </Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td>
                <Row>
                  <Col>
                    <Label>Profilaksis</Label>
                  </Col>
                </Row>
              </td>
              <td style={{ width: '65%' }}>
                <Row>
                  <Col>
                    <Input
                      id="profilaksis"
                      type="radio"
                      name="profilaksis"
                      className="me-1"
                      value="0"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Profilaksis === '0'}
                      innerRef={mainRegister("profilaksis")}
                    />{' '}
                    <Label>Tidak</Label>
                  </Col>
                  <Col>
                    <Input
                      id="profilaksis-1"
                      type="radio"
                      name="profilaksis"
                      className="me-1"
                      value="1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data && data.form && data.form.Profilaksis === '1'}
                      innerRef={mainRegister('profilaksis')}
                    />{' '}
                    <Label>Ya</Label>
                  </Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td></td>
              <td style={{ width: '65%' }}>
                <Row>
                  <Col>
                    <Input
                      id="profilaksis-ya-teks"
                      type="text"
                      name="profilaksis-ya-teks"
                      innerRef={mainRegister()}
                    />
                  </Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td>
                <Row>
                  <Col>
                    <Label>Jenis Antibiotik</Label>
                  </Col>
                </Row>
              </td>
              <td style={{ width: '65%' }}>
                <Row className="my-1">
                  <Col>
                    <Input
                      id="antibiotik-jenis"
                      type="text"
                      name="antibiotik-jenis"
                      innerRef={mainRegister()}
                    />
                  </Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td>
                <Row>
                  <Col>
                    <Label>Waktu Pemberian</Label>
                  </Col>
                </Row>
              </td>
              <td>
                <Row>
                  <Col style={{ width: '40px' }}>
                    <Input
                      id="antibiotik-waktu"
                      style={{ width: '40px' }}
                      type="number"
                      innerRef={mainRegister()}
                      name='antibiotik-waktu'
                    />
                  </Col>
                  <Col>
                    <Label style={{ float: 'left' }} >Jam Sebelum Operasi</Label>
                  </Col>
                </Row>
              </td>
            </tr>
          </Table>
          <Table>
            <tr>
              <td style={{ width: '10%' }}></td>
              <td>
                <GridChart
                  initialData={(data && data.form && data.form.Grid_Chart_Data) ? data.form.Grid_Chart_Data : data && data.grid_chart_json ? data.grid_chart_json : undefined}
                  anesthesiaScale={(data && data.form && data.form.Skala_Anestesi) ? data.form.Skala_Anestesi : '1'}
                  onSavedData={(data: string) => {
                    handleGridChartData(data)
                  }}
                  onSavedScale={(scale: string) => handleGridChartScale(scale)}
                  onSavedImage={(image: string) => handleGridChartImage(image)}
                  component='grid_chart_img'
                  formName="ok/laporan-pembedahan"
                />
                <Input
                  id="grid-chart-data"
                  type="hidden"
                  name="grid-chart-data"
                  innerRef={mainRegister()}
                />
                <Input
                  id="grid-chart-img"
                  type="hidden"
                  name="grid-chart-img"
                  innerRef={mainRegister()}
                />
              </td>
            </tr>
          </Table>
          <Table style={{ width: '100%' }} className='mt-3' borderless>
            <tr>
              <td style={{ width: '15%' }}>
                <Row>
                  <Col>
                    <Label>Anestesi Lokal</Label>
                  </Col>
                </Row>
              </td>
              <td>
                <Row>
                  <Col>
                    <Input
                      id="anestesi-topikal"
                      name='anestesi-topikal'
                      type="checkbox"
                      className="me-1"
                      defaultChecked={(data && data.form && data.form.Anestesi_Topikal === 1)}
                      innerRef={mainRegister('anestesi-topikal')}
                      onChange={(e) => handleCheckboxChange(e)} />
                    <label>Topikal</label>
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <Input
                          id="anestesi-infiltrasi"
                          name='anestesi-infiltrasi'
                          type="checkbox"
                          className="me-1"
                          defaultChecked={(data && data.form && data.form.Anestesi_Infiltrasi === 1)}
                          innerRef={mainRegister('anestesi-infiltrasi')}
                          onChange={(e) => {
                            setInfiltration(e.target.checked)
                            handleCheckboxChange(e);
                          }} />
                        <label>Infiltrasi</label>
                      </Col>
                    </Row>
                    {
                      infiltration && (
                        <><Row>
                          <Col>
                            <Input
                              id="anestesi-infiltrasi-tipe"
                              type="radio"
                              name="anestesi-infiltrasi-tipe"
                              className="me-1 mt-1"
                              value="1"
                              defaultChecked={data && data.form && data.form.Anestesi_Infiltrasi_Tipe === '1'}
                              onChange={(e) => handleRadioChange(e)}
                              innerRef={mainRegister("anestesi-infiltrasi-tipe")}/>{' '}
                            <Label className="mt-1">Sub Conjungtiva</Label>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Input
                              id="anestesi-infiltrasi-tipe"
                              type="radio"
                              name="anestesi-infiltrasi-tipe"
                              className="me-1 mt-1"
                              value="2"
                              defaultChecked={data && data.form && data.form.Anestesi_Infiltrasi_Tipe === '2'}
                              onChange={(e) => handleRadioChange(e)}
                              innerRef={mainRegister("anestesi-infiltrasi-tipe")}/>{' '}
                            <Label className="mt-1">Sub Cutan</Label>
                          </Col>
                        </Row> 
                        <Row>
                          <Col>
                            <Input
                              id="anestesi-infiltrasi-tipe-3"
                              type="radio"
                              name="anestesi-infiltrasi-tipe"
                              className="me-1 mt-1"
                              value="3"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data && data.form && data.form.Anestesi_Infiltrasi_Tipe === '3'}
                              innerRef={mainRegister('anestesi-infiltrasi-tipe')} />{' '}
                            <Label className="mt-1">Sub Tenon</Label>
                          </Col>
                        </Row>
                        </>
                      )
                    }
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <Input
                          id="anestesi-field-block"
                          name='anestesi-field-block'
                          type="checkbox"
                          className="me-1"
                          defaultChecked={(data && data.form && data.form.Anestesi_Field_Block === 1)}
                          innerRef={mainRegister('anestesi-field-block')}
                          onChange={(e) => {
                            setFieldBlock(e.target.checked)
                            handleCheckboxChange(e);
                          }} />
                        <label>Field Block</label>
                      </Col>
                    </Row>
                    {
                      fieldBlock && (
                        <><Row>
                          <Col>
                            <Input
                              id="anestesi-field-block-tipe-1"
                              type="radio"
                              name="anestesi-field-block-tipe"
                              className="me-1 mt-1"
                              value="1"
                              defaultChecked={data && data.form && data.form.Anestesi_Field_Block_Tipe === '1'}
                              onChange={(e) => handleRadioChange(e)}
                              innerRef={mainRegister("anestesi-field-block-tipe")}/>{' '}
                            <Label className="mt-1">Retro Bulbar</Label>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Input
                              id="anestesi-field-block-tipe-2"
                              type="radio"
                              name="anestesi-field-block-tipe"
                              className="me-1 mt-1"
                              value="2"
                              defaultChecked={data && data.form && data.form.Anestesi_Field_Block_Tipe === '2'}
                              onChange={(e) => handleRadioChange(e)}
                              innerRef={mainRegister("anestesi-field-block-tipe")}/>{' '}
                            <Label className="mt-1">Peri Bulbar</Label>
                          </Col>
                        </Row></>
                      )
                    }
                  </Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td>
                <Row className="mt-1">
                  <Col>
                    <Label>Lokasi</Label>
                  </Col>
                </Row>
              </td>
              <td>
                <Row className="mt-1">
                  <Col>
                    <Input
                      id="lokasi-od"
                      name='lokasi-od'
                      type="checkbox"
                      className="me-1"
                      defaultChecked={(data && data.form && data.form.Lokasi_OD === 1)}
                      innerRef={mainRegister('lokasi-od')}
                      onChange={(e) => handleCheckboxChange(e)} />
                    <label>OD</label>
                  </Col>
                  <Col>
                    <Input
                      id="lokasi-os"
                      name='lokasi-os'
                      type="checkbox"
                      className="me-1"
                      defaultChecked={(data && data.form && data.form.Lokasi_OS === 1)}
                      innerRef={mainRegister('lokasi-os')}
                      onChange={(e) => handleCheckboxChange(e)} />
                    <label>OS</label>
                  </Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td>
                <Row className="mt-1">
                  <Col className="mb-5">
                    <Label className="mb-5">Obat-Obat</Label>
                  </Col>
                </Row>
              </td>
              <td>
                <Row className="mt-1">
                  <Col>
                    <Row>
                      <Col>
                        <Input
                          id="obat-obat"
                          type="text"
                          name="obat-obat"
                          innerRef={mainRegister()}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Input
                          id="penyakit-komplikasi-1"
                          type="radio"
                          name="penyakit-komplikasi"
                          className="me-1 mt-1"
                          value="1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data && data.form && data.form.Penyakit_Komplikasi === '1'}
                          innerRef={mainRegister('penyakit-komplikasi')} />{' '}
                        <Label className="mt-1">Penyakit</Label>
                      </Col>
                      <Col>
                        <Input
                          id="penyakit-komplikasi-2"
                          type="radio"
                          name="penyakit-komplikasi"
                          className="me-1 mt-1"
                          value="2"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data && data.form && data.form.Penyakit_Komplikasi === '2'}
                          innerRef={mainRegister('penyakit-komplikasi')} />{' '}
                        <Label className="mt-1">Komplikasi</Label>
                      </Col>
                    </Row>
                    <Row className="mt-1">
                      <Col>
                        <Input
                          id="penyakit-komplikasi-teks"
                          type="textarea"
                          name="penyakit-komplikasi-teks"
                          innerRef={mainRegister()}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td>
                <Row className="mt-1">
                  <Col>
                    <Label>Konsultasi Intra-Operatif</Label>
                  </Col>
                </Row>
              </td>
              <td>
                <Row className="mt-1">
                  <Col>
                    <Input
                      id="konsultasi-intra-operatif"
                      type="text"
                      name="konsultasi-intra-operatif"
                      innerRef={mainRegister()}
                    />
                  </Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td>
                <Row className="mb-1">
                  <Col>
                    <Label className="mb-5">Jumlah Perdarahan (Jika ada transfusi):</Label>
                  </Col>
                </Row>
              </td>
              <td>
                <Row>
                  <Col>
                    <Label>Jumlah darah yang hilang: </Label>
                  </Col>
                  <Col>
                    <Input
                      id="jumlah-darah-hilang"
                      type="number"
                      innerRef={mainRegister()}
                      invalid={mainErrors['jumlah-darah-hilang'] && true}
                      name='jumlah-darah-hilang'
                    />
                  </Col>
                  <Col >CC</Col>
                  <Col></Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col>
                    <Label>Jumlah darah yang Masuk: </Label>
                  </Col>
                  <Col>
                    <Input
                      id="jumlah-darah-masuk"
                      type="number"
                      innerRef={mainRegister({})}
                      invalid={mainErrors['jumlah-darah-masuk'] && true}
                      name='jumlah-darah-masuk'
                      className="me-4"
                    />
                  </Col>
                  <Col>CC</Col>
                  <Col></Col>
                  <Col></Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td>
                <Row className="mt-1">
                  <Col>
                    <Label>Tanggal</Label>
                  </Col>
                </Row>
              </td>
              <td>
                <Row className="mt-1">
                  <Col>
                    <Input
                      type="date"
                      id='tanggal-jaringan-patologi'
                      name='tanggal-jaringan-patologi'
                      innerRef={mainRegister()}
                    />
                  </Col>
                </Row>
              </td>
            </tr>
          </Table>
          {/* <Row className="mt-2">
            <Col>
              <Signature
                label="Dokter"
                type="picker"
                initialImage={(data && data.form && data.form.TTD_Dokter && data.form.TTD_Dokter !== '') ? data.form.TTD_Dokter : undefined}
                persons={data.dokter}
                onSigned={(assigner: SignatureModel) => handleDoctorSigned(assigner)} />
              <Input
                id="ttd-dokter"
                type="hidden"
                name="ttd-dokter"
                innerRef={mainRegister()}
                invalid={mainErrors['ttd-dokter'] && true} />
              <Input
                id="id-dokter"
                type="hidden"
                name="id-dokter"
                innerRef={mainRegister()}
                invalid={mainErrors[`id-dokter`] && true} />
            </Col>
            <Col>
              <Signature
                label="Perawat"
                type="picker"
                initialImage={(data && data.form && data.form.TTD_Perawat && data.form.TTD_Perawat !== '') ? data.form.TTD_Perawat : undefined}
                persons={data.perawat}
                onSigned={(assigner: SignatureModel) => handleNurseSigned(assigner)} />
              <Input
                id="ttd-perawat"
                type="hidden"
                name="ttd-perawat"
                innerRef={mainRegister()}
                invalid={mainErrors['ttd-perawat'] && true} />
              <Input
                id="id-perawat"
                type="hidden"
                name="id-perawat"
                innerRef={mainRegister()}
                invalid={mainErrors[`id-perawat`] && true} />
            </Col>
          </Row>
          <FormGroup className="d-flex mb-0 justify-content-center">
            <SubmitButton
              label="Simpan"
              buttonColor='primary'
              spinnerStyle={{ width: '1rem', height: '1rem' }}
              spinnerColor='light'
              processing={processing}
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
          </FormGroup> */}
        </Row>
      </TabPane>
      <TabPane tabId='2'>
        <Row className="mt-3">
          <Col>
            <Label style={{ fontSize: '12pt' }}>Laporan Pembedahan Pterygium</Label>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Input
              type="checkbox"
              className="me-1"
              onChange={handleSelectAll}
            />
            <label>Pilih Semua Pterygium</label>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <hr style={{ borderTop: '2px dashed blue' }}/>
          </Col>
        </Row>
        {
          checkboxlocalPterygiumTop && checkboxlocalPterygiumTop.map((item: any, key: number) => (
            <Row className="mb-1" key={key}>
              <Col>
                <Input
                  type="checkbox"
                  name={`lokal-pterygium-${item.id}`}
                  className="me-1"
                  // defaultChecked={(data && data.form && data.form[`Lokal_Pterygium_${key}`] === 1)}
                  checked={item.checked}
                  onChange={(e) => {
                    handleCheckboxChange(e);
                    const index = checkboxlocalPterygiumTop.findIndex(c => c.id === item.id);
                    if (index >= 0) {
                      const newValue = [...checkboxlocalPterygiumTop];
                      newValue[index].checked = e.target.checked;
                      setCheckboxLocalPterygiumTop(newValue);
                    }
                  }}
                  innerRef={mainRegister(`lokal-pterygium-${item.id}`)}
                />
                <label>{item.name}</label>
              </Col>
            </Row>
          ))
        }
        <Row className="mt-3">
          <Col sm="1">
            <Input
              id="lokal-pterygium-check-injeksi"
              type="checkbox"
              name={`lokal-pterygium-check-injeksi`}
              className="me-2"
              // defaultChecked={(data && data.form && data.form.Lokal_Pterygium_Check_Injeksi === 1)}
              checked={injeksi}
              onChange={(e) => {
                handleChecklistChange(e)
                setInjeksi(e.target.checked);
              }}
              innerRef={mainRegister(`lokal-pterygium-check-injeksi`)}
            />
          </Col>
          <Col>
            <label>Dilakukan injeksi subcutan dengan menggunakan untuk anestesi sub konjungtiva</label>
          </Col>
          {
            injeksi && (
              <Col>
                {
                  localPterygiumInjection && localPterygiumInjection.map((item: any, key: number) => (
                    <Row key={key} className='mb-1'>
                      <Col>
                        <Input
                          id="lokal-pterygium-injeksi"
                          type="radio"
                          name="lokal-pterygium-injeksi"
                          className="me-1"
                          value={`${key + 1}`}
                          defaultChecked={(data && data.form && data.form.Lokal_Pterygium_Injeksi ===  key + 1)}
                          innerRef={mainRegister("lokal-pterygium-injeksi")}
                          onChange={(e) => handleRadioChange(e)}
                        />
                        <label>{item}</label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          <Col>
          </Col>
        </Row>
        <Row className="mt-3 mb-3">
          <Col sm="1">
            <Input
              id="lokal-pterygium-bara-sclera"
              type="checkbox"
              name={`lokal-pterygium-bara-sclera`}
              className="me-2"
              // defaultChecked={(data && data.form && data.form.Lokal_Pterygium_Bara_Sclera === 1)}
              checked={exicisi}
              onChange={(e) => {
                handleChecklistChange(e)
                setExicisi(e.target.checked);
              }}
              innerRef={mainRegister(`lokal-pterygium-bara-sclera`)}
            />
          </Col>
          <Col>
            <label>Dilakukan exicisi pterygium dengan metode Bare sclera</label>
          </Col>
          {
            exicisi && (
              <Col>
                {
                  localPterygiumExicisi && localPterygiumExicisi.map((item: any, key: number) => (
                    <Row key={key} className='mb-1'>
                      <Col>
                        <Input
                          id="lokal-pterygium-exicisi"
                          type="radio"
                          name="lokal-pterygium-exicisi"
                          className="me-1"
                          value={`${key + 1}`}
                          defaultChecked={(data && data.form && data.form.Lokal_Pterygium_Exicisi === (key + 1))}
                          innerRef={mainRegister("lokal-pterygium-exicisi")}
                          onChange={(e) => handleRadioChange(e)}
                        />
                        <label>{item}</label>
                      </Col>
                    </Row>
                  ))
                }
              </Col>
            )
          }
          <Col>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm="1">
            <Input
              id="lokal-pterygium-conjungtiva"
              type="checkbox"
              name={`lokal-pterygium-conjungtiva`}
              className="me-2"
              // defaultChecked={(data && data.form && data.form.Lokal_Pterygium_Conjungtiva === 1)}
              checked={conjung}
              onChange={(e) => {
                handleChecklistChange(e)
                setConjung(e.target.checked);
              }}
              innerRef={mainRegister(`lokal-pterygium-conjungtiva`)}
            />
          </Col>
          <Col>
            <label>Dilakukan exicisi pterygium dengan metode Conjungtiva Limbal Graft (CLG)</label>
          </Col>
          {
            conjung && (
              <Col>
                <Row className='mb-1'>
                  <Col>
                    <Input
                      id="lokal-pterygium-clg"
                      type="radio"
                      name="lokal-pterygium-clg"
                      className="me-1"
                      value='1'
                      defaultChecked={(data && data.form && data.form.Lokal_Pterygium_Clg === 1)}
                      innerRef={mainRegister("lokal-pterygium-clg")}
                      onChange={(e) => handleRadioChange(e)}
                    />
                    <label>Dengan cautering</label>
                  </Col>
                </Row>
                <Row className='mb-1'>
                  <Col>
                    <Input
                      id="lokal-pterygium-clg"
                      type="radio"
                      name="lokal-pterygium-clg"
                      className="me-1"
                      value='2'
                      defaultChecked={(data && data.form && data.form.Lokal_Pterygium_Clg === 2)}
                      innerRef={mainRegister("lokal-pterygium-clg")}
                      onChange={(e) => handleRadioChange(e)}
                    />
                    <label>Tanpa cautering</label>
                  </Col>
                </Row>
              </Col>
            )
          }
          <Col>
          </Col>
        </Row>
        {
          checkboxlocalPterygiumBot && checkboxlocalPterygiumBot.map((item: any, key: number) => (
            <Row className="mb-1" key={key}>
              <Col>
                <Input
                  type="checkbox"
                  name={`lokal-pterygium-${item.id}`}
                  className="me-1"
                  // defaultChecked={(data && data.form && data.form[`Lokal_Pterygium_${key + 6}`] === 1)}
                  checked={item.checked}
                  onChange={(e) => {
                    handleCheckboxChange(e);
                    const index = checkboxlocalPterygiumBot.findIndex(c => c.id === item.id);
                    if (index >= 0) {
                      const newValue = [...checkboxlocalPterygiumBot];
                      newValue[index].checked = e.target.checked;
                      setCheckboxLocalPterygiumBot(newValue);
                    }
                  }}
                  innerRef={mainRegister(`lokal-pterygium-${item.id}`)}
                />
                <label>{item.name}</label>
              </Col>
            </Row>
          ))
        }
        <Row className="mt-3">
          <Col>
            <label>Diteteskan</label>
          </Col>
          <Col>
            {
              checkboxLocalPterygiumDrip && checkboxLocalPterygiumDrip.map((item: any, key: number) => {
                return (
                  <Row key={key} className='mb-1'>
                    <Col>
                      <Input
                        type="checkbox"
                        name={`lokal-pterygium-diteteskan-${item.id}`}
                        className='me-1'
                        // defaultChecked={!!(data && data.form && data.form[`Lokal_Pterygium_Diteteskan_${key + 1}`])}
                        checked={item.checked}
                        innerRef={mainRegister(`lokal-pterygium-diteteskan-${item.id}`)}
                        onChange={(e) => {
                          handleCheckboxChange(e);
                          const index = checkboxLocalPterygiumDrip.findIndex(c => c.id === item.id);
                          if (index >= 0) {
                            const newValue = [...checkboxLocalPterygiumDrip];
                            newValue[index].checked = e.target.checked;
                            setCheckboxLocalPterygiumDrip(newValue);
                          }
                        }}
                      />
                      <label>{item.name}</label>
                    </Col>
                  </Row>
                )
              })
            }
          </Col>
          <Col>
          </Col>
          <Col>
          </Col>
        </Row>
        <Row className="mb-1 mt-2">
          <Col>
            <Input
              id="lokal-pterygium-9"
              type="checkbox"
              name={`lokal-pterygium-9`}
              className="me-1"
              // defaultChecked={(data && data.form && data.form.Lokal_Pterygium_9 === 1)}
              checked={kasaSteril}
              onChange={(e) => {
                handleCheckboxChange(e);
                setKasaSteril(e.target.checked);
              }}
              innerRef={mainRegister('lokal-pterygium-9')}
            />
            <label>Ditutup dengan menggunakan kasa steril</label>
          </Col>
        </Row>
        <Table style={{ width: '100%' }} className='mt-2 mb-3' borderless>
          <tr>
            <td style={{ width: '50%', textAlign: 'center' }}>
              <EyeImage
                initialImage={(data && data.form && data.form.Lokal_Pterygium_Gambar_Pra && data.form.Lokal_Pterygium_Gambar_Pra !== '') ? data.form.Lokal_Pterygium_Gambar_Pra : undefined}
                formName='ok/laporan-pembedahan'
                component='laporan_pembedahan_lokal_pterygium_pra'
                onSaved={(image: string) => handleImagePra(image)}
              />
              <Label>Pra Bedah</Label>
              <Input
                id="lokal-pterygium-gambar-pra"
                type="hidden"
                name="lokal-pterygium-gambar-pra"
                innerRef={mainRegister('lokal-pterygium-gambar-pra')}/>
            </td>
            <td style={{ width: '50%', textAlign: 'center' }}>
              <EyeImage
                initialImage={(data && data.form && data.form.Lokal_Pterygium_Gambar_Pasca && data.form.Lokal_Pterygium_Gambar_Pasca !== '') ? data.form.Lokal_Pterygium_Gambar_Pasca : undefined}
                formName='ok/laporan-pembedahan'
                component='laporan_pembedahan_lokal_pterygium_pasca'
                onSaved={(image: string) => handleImagePasca(image)}
              />
              <Label>Pasca Bedah</Label>
              <Input
                id="lokal-pterygium-gambar-pasca"
                type="hidden"
                name="lokal-pterygium-gambar-pasca"
                innerRef={mainRegister('lokal-pterygium-gambar-pasca')}/>
            </td>
          </tr>
        </Table>
      </TabPane>
    </TabContent></>
  )
}

export default LocalPterygiumForm;
