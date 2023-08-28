import { Button, Col, FormGroup, Input, InputGroup, InputGroupText, Label, ListGroup, ListGroupItem, Nav, NavItem, NavLink, Progress, Row, TabContent, TabPane, Table } from "reactstrap";
import { DownloadCloud, FileText, X } from "react-feather";
import { Fragment, useCallback, useEffect, useState } from "react";
import Compressor from "compressorjs";
import { ErrorMessage } from "@hookform/error-message";
import { EyeImage } from '@src/shared/eye-image/components';
import Image from 'next/image';
import { Signature } from '@shared/signature/components';
import { SignatureModel } from '@shared/signature/models/signature.model';
import { SubmitButton } from "@src/shared/button";
import getConfig from 'next/config';
import { useDropzone } from 'react-dropzone';

import { ChartImageService } from "@src/shared/grid-chart/services";
import description from "../const/local-phaco/description";
import localHordeolumBot from "../const/local-hordeolum/localHordeolumBot";
import localHordeolumDrip from "../const/local-hordeolum/localHordeolumDrip";
import localHordeolumInjection from "../const/local-hordeolum/localHordeolumInjection";
import localHordeolumKnive from "../const/local-hordeolum/localHordeolumKnive";
import localHordeolumTop from "../const/local-hordeolum/localHordeolumTop";
import surgeryDuration from "../const/local-phaco/surgeryDuration";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { UploadToCloudService } from "@src/shared/upload-cloud-storage/services";

const GeneralHordeolumForm = (props: { mainRegister: any, mainErrors: any, mainSetValue: any, mainGetValues: any, defaultSelected?: boolean, data: any, processing: boolean, pdfData: any, publicRuntimeConfig: any }) => {
  const { mainRegister, mainErrors, mainSetValue, mainGetValues, defaultSelected, data, processing, pdfData, publicRuntimeConfig } = props;

  const [activeTab, setActiveTab] = useState<string>('1')
  const [files, setFiles] = useState<any>([])
  const [infiltration, setInfiltration] = useState((data && data.form && data.form.Anestesi_Infiltrasi) ? !!(data.form.Anestesi_Infiltrasi) : false);
  const [fieldBlock, setFieldBlock] = useState((data && data.form && data.form.Anestesi_Field_Block) ? !!(data.form.Anestesi_Field_Block) : false);
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);
  const [inProgress, setInProgress] = useState<any>(undefined);

  const [checkboxLocalHordeolumTop, setCheckboxLocalHordeolumTop] = useState(localHordeolumTop.map((i: any, key: number) => {
    return {
      id: key,
      name: i,
      checked: (data && data.form) ? data.form[`Lokal_Hordeolum_${key}`] : false,
    }
  }));

  const [checkboxLocalHordeolumBot, setCheckboxLocalHordeolumBot] = useState(localHordeolumBot.map((i: any, key: number) => {
    return {
      id: i.id,
      name: i.text,
      checked: (data && data.form) ? data.form[`Lokal_Hordeolum_${i.id}`] : false,
    }
  }));

  const [checkboxLocalHordeolumDrip, setCheckboxLocalHordeolumDrip] = useState(localHordeolumDrip.map((i: any, key: number) => {
    return {
      id: key + 1,
      name: i,
      checked: (data && data.form) ? data.form[`Lokal_Hordeolum_Diteteskan_${key + 1}`] : false,
    }
  }));

  const [checkboxLocalHordeolum3, setCheckboxLocalHordeolum3] = useState(data?.form?.Lokal_Hordeolum_3 ? '1' : '0');
  const [checkboxLocalHordeolum8, setCheckboxLocalHordeolum8] = useState(data?.form?.Lokal_Hordeolum_8 ? '1' : '0');

  useEffect(() => {
    if (data && data.form) {
      setCheckboxLocalHordeolumTop(localHordeolumTop.map((i: any, key: number) => {
        return {
          id: key,
          name: i,
          checked: (data && data.form) ? data.form[`Lokal_Hordeolum_${key}`] : false,
        }
      }));
      checkboxLocalHordeolumTop.forEach(item => {
        mainSetValue(`lokal-hordeolum-${item.id}`, data.form[`Lokal_Hordeolum_${item.id}`] ? '1' : '0');
      });

      setCheckboxLocalHordeolumBot(localHordeolumBot.map((i: any, key: number) => {
        return {
          id: i.id,
          name: i.text,
          checked: (data && data.form) ? data.form[`Lokal_Hordeolum_${i.id}`] : false,
        }
      }));
      checkboxLocalHordeolumBot.forEach(item => {
        mainSetValue(`lokal-hordeolum-${item.id}`, data.form[`Lokal_Hordeolum_${item.id}`] ? '1' : '0');
      });

      setCheckboxLocalHordeolumDrip(localHordeolumDrip.map((i: any, key: number) => {
        return {
          id: key + 1,
          name: i,
          checked: (data && data.form) ? data.form[`Lokal_Hordeolum_Diteteskan_${key + 1}`] : false,
        }
      }));
      checkboxLocalHordeolumDrip.forEach(item => {
        mainSetValue(`lokal-hordeolum-diteteskan-${item.id}`, data.form[`Lokal_Hordeolum_Diteteskan_${item.id}`] ? '1' : '0');
      });

      setCheckboxLocalHordeolum3(data?.form?.Lokal_Hordeolum_3 ? '1' : '0');
      setCheckboxLocalHordeolum8(data?.form?.Lokal_Hordeolum_8 ? '1' : '0');

      mainSetValue(`lokal-hordeolum-3`, data.form[`Lokal_Hordeolum_3`] ? '1' : '0');
      mainSetValue(`lokal-hordeolum-8`, data.form[`Lokal_Hordeolum_8`] ? '1' : '0');
    }
  }, [data]);

  const handleSelectAll = (e: any) => {
    const newValue = checkboxLocalHordeolumTop.map(c => {
      const a = {...c};
      a.checked = e.target.checked;
      return a;
    });
    checkboxLocalHordeolumTop.forEach(item => {
      mainSetValue(`lokal-hordeolum-${item.id}`, e.target.checked ? '1' : '0');
    });
    setCheckboxLocalHordeolumTop(newValue);

    const newValue2 = checkboxLocalHordeolumBot.map(c => {
      const a = {...c};
      a.checked = e.target.checked;
      return a;
    });
    checkboxLocalHordeolumBot.forEach(item => {
      mainSetValue(`lokal-hordeolum-${item.id}`, e.target.checked ? '1' : '0');
    });
    setCheckboxLocalHordeolumBot(newValue2);

    const newValue3 = checkboxLocalHordeolumDrip.map(c => {
      const a = {...c};
      a.checked = e.target.checked;
      return a;
    });
    checkboxLocalHordeolumDrip.forEach(item => {
      mainSetValue(`lokal-hordeolum-diteteskan-${item.id}`, e.target.checked ? '1' : '0');
    });
    setCheckboxLocalHordeolumDrip(newValue3);

    setCheckboxLocalHordeolum3(e.target.checked ? '1' : '0');
    mainSetValue(`lokal-hordeolum-3`, e.target.checked ? '1' : '0');
    setCheckboxLocalHordeolum8(e.target.checked ? '1' : '0');
    mainSetValue(`lokal-hordeolum-8`, e.target.checked ? '1' : '0');
  }

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
          <X size={14} color='red' />
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

  const toggle = (tab: string) => {
    if (activeTab && activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const handleCheckboxChange = (val: any) => {
    mainSetValue(`${val.target.name}`, (val.target.checked) ? '1' : '0')
  }

  const handleCheckboxDrip = (val: any) => {
    mainSetValue(`${val.target.name}`, (val.target.checked) ? `1` : '0')
  }

  const handleRadioChange = (val: any) => {
    mainSetValue(`${val.target.name}`, val.target.value)
  }

  const handleImagePra = (image: any) => {
    mainSetValue('lokal-hordeolum-gambar-pra', image);
  }

  const handleImagePasca = (image: any) => {
    mainSetValue('lokal-hordeolum-gambar-pasca', image);
  }

  const handleDoctorSigned = (image: SignatureModel) => {
    mainSetValue('ttd-dokter', image.Signature);
    mainSetValue('id-dokter', image.ID_Karyawan);
  }

  const handleNurseSigned = (image: SignatureModel) => {
    mainSetValue('ttd-perawat', image.Signature);
    mainSetValue('id-perawat', image.ID_Karyawan);
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
                <Label className="mt-3" style={{ fontSize: '10pt' }}>Dokter Anestesi</Label>
              </td>
              <td>
                <Input
                  className="mt-3"
                  type="select"
                  id="id-dokter-anestesi"
                  name="id-dokter-anestesi"
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
                      <Label className="mt-3">Diagnosa Pasca Bedah</Label>
                    </td>
                    <td style={{ width: '35%' }}>
                      <Input
                        id="diagnosa-pasca-bedah"
                        className="mt-3"
                        type="textarea"
                        name="diagnosa-pasca-bedah"
                        innerRef={mainRegister()}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: '15%' }}>
                      <Label className="mt-3">Tindakan Pembedahan</Label>
                    </td>
                    <td style={{ width: '35%' }}>
                      <Input
                        id="tindakan-pembedahan"
                        className="mt-3"
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
                        innerRef={mainRegister('keterangan-pembedahan')}
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
                      value="1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data.form.Jenis_Pembedahan === '1'}
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
                      value="2"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data.form.Jenis_Pembedahan === '2'}
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
                      value="3"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data.form.Jenis_Pembedahan === '3'}
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
                      value="4"
                      defaultChecked={data.form.Jenis_Pembedahan === '4'}
                      onChange={(e) => handleRadioChange(e)}
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
                      defaultChecked={data.form.Operasi_Ke === '1'}
                      onChange={(e) => handleRadioChange(e)}
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
                      defaultChecked={data.form.Operasi_Ke === '2'}
                      onChange={(e) => handleRadioChange(e)}
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
                      id="profilaksis-0"
                      type="radio"
                      name="profilaksis"
                      className="me-1"
                      value="0"
                      defaultChecked={data.form.Profilaksis === '0'}
                      onChange={(e) => handleRadioChange(e)}
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
                      defaultChecked={data.form.Profilaksis === '1'}
                      onChange={(e) => handleRadioChange(e)}
                      innerRef={mainRegister("profilaksis")}
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
                      style={{ width: '60px' }}
                      type="number"
                      innerRef={mainRegister({
                        min: {
                          value: 0,
                          message: 'Angka minimum 0',
                        },
                        max: {
                          value: 24,
                          message: 'Angka maksimal 24',
                        },
                      })}
                      invalid={mainErrors['antibiotik-waktu'] && true}
                      name='antibiotik-waktu'
                    />
                    <ErrorMessage
                      errors={mainErrors}
                      name="antibiotik-waktu"
                      render={({ messages }) => {
                        return messages ? Object.entries(messages).map(([type, message]) => (
                          <p key={type}>{message}</p>
                        )) : null;
                      }}
                    />
                  </Col>
                  <Col>
                    <Label>Jam Sebelum Operasi</Label>
                  </Col>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                </Row>
              </td>
            </tr>
          </Table>
          <Table style={{ width: '100%' }} className='mt-3' borderless>
            <tr>
              <td style={{ width: '15%' }}>
                <Row>
                  <Col>
                    <Label>Teknik Anestesi</Label>
                  </Col>
                </Row>
              </td>
              <td>
                <Row>
                  <Col>
                    <Input
                      id="general-anestesi-1"
                      name='general-anestesi'
                      type="checkbox"
                      className="me-1"
                      defaultChecked={(data && data.form && data.form.General_Anestesi === 1)}
                      value='1'
                      innerRef={mainRegister('general-anestesi')}
                      onChange={(e) => handleCheckboxChange(e)} />
                    <label>General Anestesi</label>
                  </Col>
                  <Col>
                    <Input
                      id="sedasi"
                      name='sedasi'
                      type="checkbox"
                      className="me-1"
                      defaultChecked={(data && data.form && data.form.Sedasi === 1)}
                      value='1'
                      innerRef={mainRegister('sedasi')}
                      onChange={(e) => handleCheckboxChange(e)} />
                    <label>Sedasi</label>
                  </Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td>
                <Row className="mt-1">
                  <Col className="mb-3">
                    <Label>Respon Hipersensitivitas</Label>
                  </Col>
                </Row>
              </td>
              <td>
                <Row className="mt-1">
                  <Col>
                    <Input
                      id="responhipersensitivitas"
                      type="radio"
                      name="responhipersensitivitas"
                      className="me-1 mt-1"
                      value="0"
                      defaultChecked={(data && data.form && data.form.Responhipersensitivitas === '0')}
                      onChange={(e) => handleRadioChange(e)}
                      innerRef={mainRegister("responhipersensitivitas")} />{' '}
                    <Label className="mt-1">Tidak</Label>
                  </Col>
                  <Col>
                    <Input
                      id="responhipersensitivitas-1"
                      type="radio"
                      name="responhipersensitivitas"
                      className="me-1 mt-1"
                      value="1"
                      defaultChecked={(data && data.form && data.form.Responhipersensitivitas === '1')}
                      onChange={(e) => handleRadioChange(e)}
                      innerRef={mainRegister('responhipersensitivitas')} />{' '}
                    <Label className="mt-1">Ya</Label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Input
                      id="responhipersensitivitas-ya-teks"
                      type="text"
                      name="responhipersensitivitas-ya-teks"
                      innerRef={mainRegister()}
                    />
                  </Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td>
                <Row className="mt-1">
                  <Col className='mb-3'>
                    <Label>Kejadian Toksikasi</Label>
                  </Col>
                </Row>
              </td>
              <td>
                <Row className="mt-1">
                  <Col>
                    <Input
                      id="kejadiantoksikasi"
                      type="radio"
                      name="kejadiantoksikasi"
                      className="me-1 mt-1"
                      value="0"
                      defaultChecked={(data && data.form && data.form.Kejadiantoksikasi === '0')}
                      onChange={(e) => handleRadioChange(e)}
                      innerRef={mainRegister('kejadiantoksikasi')} />{' '}
                    <Label className="mt-1">Tidak</Label>
                  </Col>
                  <Col>
                    <Input
                      id="kejadiantoksikasi-1"
                      type="radio"
                      name="kejadiantoksikasi"
                      className="me-1 mt-1"
                      value="1"
                      defaultChecked={(data && data.form && data.form.Kejadiantoksikasi === '1')}
                      onChange={(e) => handleRadioChange(e)}
                      innerRef={mainRegister('kejadiantoksikasi')} />{' '}
                    <Label className="mt-1">Ya</Label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Input
                      id="kejadiantoksikasi-ya-teks"
                      type="text"
                      name="kejadiantoksikasi-ya-teks"
                      innerRef={mainRegister()}
                    />
                  </Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td>
                <Row className="mt-1">
                  <Col></Col>
                </Row>
              </td>
              <td>
                <Row className="mt-1">
                  <Col>
                    <Row>
                      <Col>
                        <Input
                          id="penyakit-komplikasi-1"
                          type="radio"
                          name="penyakit-komplikasi"
                          className="me-1 mt-1"
                          value="1"
                          defaultChecked={data.form.Penyakit_Komplikasi === '1'}
                          onChange={(e) => handleRadioChange(e)}
                          innerRef={mainRegister("penyakit-komplikasi")} />{' '}
                        <Label className="mt-1">Penyakit</Label>
                      </Col>
                      <Col>
                        <Input
                          id="penyakit-komplikasi-2"
                          type="radio"
                          name="penyakit-komplikasi"
                          className="me-1 mt-1"
                          value="2"
                          defaultChecked={data.form.Penyakit_Komplikasi === '2'}
                          onChange={(e) => handleRadioChange(e)}
                          innerRef={mainRegister("penyakit-komplikasi")}/>{' '}
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
                <Row className="mt-1">
                  <Col>
                    <Label>Jaringan Ke Pendarahan</Label>
                  </Col>
                </Row>
              </td>
              <td>
                <Row>
                  <Col>
                    <Input
                      id="jaringan-pendarahan-1"
                      type="radio"
                      name="jaringan-pendarahan"
                      className="me-1 mt-1"
                      value="1"
                      defaultChecked={data.form.Jaringan_Pendarahan === '1'}
                      onChange={(e) => handleRadioChange(e)}
                      innerRef={mainRegister("jaringan-pendarahan")} />{' '}
                    <Label className="mt-1">Ya</Label>
                  </Col>
                  <Col>
                    <Input
                      id="jaringan-pendarahan-0"
                      type="radio"
                      name="jaringan-pendarahan"
                      className="me-1 mt-1"
                      value="0"
                      defaultChecked={data.form.Jaringan_Pendarahan === '0'}
                      onChange={(e) => handleRadioChange(e)}
                      innerRef={mainRegister("jaringan-pendarahan")} />{' '}
                    <Label className="mt-1">Tidak</Label>
                  </Col>
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
                innerRef={mainRegister('ttd-dokter')}/>
              <Input
                id="id-dokter"
                type="hidden"
                name="id-dokter"
                innerRef={mainRegister('id-dokter')}/>
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
                innerRef={mainRegister('ttd-perawat')}/>
              <Input
                id="id-perawat"
                type="hidden"
                name="id-perawat"
                innerRef={mainRegister('id-perawat')}/>
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
            <Label style={{ fontSize: '12pt' }}>Laporan Pembedahan Hordeolum</Label>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Input
              type="checkbox"
              className="me-1"
              onChange={handleSelectAll}
            />
            <label>Pilih Semua Hordeolum</label>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr style={{ borderTop: '2px dashed blue' }}/>
          </Col>
        </Row>
        {
          checkboxLocalHordeolumTop && checkboxLocalHordeolumTop.map((item: any, key: number) => (
            <Row key={key} className="mt-1">
              <Col>
                <Input
                  type="checkbox"
                  name={`lokal-hordeolum-${item.id}`}
                  className='me-1'
                  // defaultChecked={(data && data.form && data.form[`Lokal_Hordeolum_${key}`] === 1)}
                  checked={item.checked}
                  innerRef={mainRegister(`lokal-hordeolum-${item.id}`)}
                  onChange={(e) => {
                    handleCheckboxChange(e);
                    const index = checkboxLocalHordeolumTop.findIndex(c => c.id === item.id);
                    if (index >= 0) {
                      const newValue = [...checkboxLocalHordeolumTop];
                      newValue[index].checked = e.target.checked;
                      setCheckboxLocalHordeolumTop(newValue);
                    }
                  }}
                />
                <label>{item.name}</label>
              </Col>
            </Row>
          ))
        }
        <Row className="mt-3">
          <Col>
            <label>Dilakukan injeksi subcutan dengan menggunakan</label>
          </Col>
          <Col>
            {
              localHordeolumInjection && localHordeolumInjection.map((item: any, key: number) => (
                <Row key={key} className='mb-1'>
                  <Col>
                    <Input
                      id="lokal-hordeolum-injeksi"
                      type="radio"
                      name="lokal-hordeolum-injeksi"
                      className="me-1"
                      value={`${key + 1}`}
                      defaultChecked={(data && data.form && data.form.Lokal_Hordeolum_Injeksi === `${ key + 1 }`)}
                      innerRef={mainRegister("lokal-hordeolum-injeksi")}
                      onChange={(e) => handleRadioChange(e)}
                    />
                    <label>{item}</label>
                  </Col>
                </Row>
              ))
            }
          </Col>
          <Col>
          </Col>
        </Row>
        <Row className="mt-1 mb-1">
          <Col>
            <Input
              id="lokal-hordeolum-3"
              type="checkbox"
              name={`lokal-hordeolum-3`}
              className='me-1'
              // defaultChecked={(data && data.form && data.form.Lokal_Hordeolum_3 === 1)}
              checked={checkboxLocalHordeolum3 === '1'}
              innerRef={mainRegister(`lokal-hordeolum-3`)}
              onChange={(e) => {
                handleCheckboxChange(e);
                setCheckboxLocalHordeolum3(e.target.checked ? '1' : '0');
              }}
            />
            <label>Dilakukan pemasangan Hordeolum forcep</label>
          </Col>
        </Row>
        <Row className="mt-2 mb-2">
          <Col>
            <label>Dilakukan Hordeolum dengan menggunakan knive MVR 20%</label>
          </Col>
          <Col>
            {
              localHordeolumKnive && localHordeolumKnive.map((item: any, key: number) => (
                <Row key={key} className='mb-1'>
                  <Col>
                    <Input
                      id="lokal-hordeolum-bagian"
                      type="radio"
                      name="lokal-hordeolum-bagian"
                      className="me-1"
                      value={`${key + 1}`}
                      defaultChecked={data && data.form && data.form.Lokal_Hordeolum_Bagian === `${key + 1}`}
                      innerRef={mainRegister('lokal-hordeolum-bagian')}
                      onChange={(e) => handleRadioChange(e)}
                    />
                    <label>{item}</label>
                  </Col>
                </Row>
              ))
            }
          </Col>
          <Col></Col>
        </Row>
        {
          checkboxLocalHordeolumBot && checkboxLocalHordeolumBot.map((item: any, key: number) => (
            <Row key={key} className='mb-1'>
              <Col>
                <Input
                  type="checkbox"
                  name={`lokal-hordeolum-${item.id}`}
                  className='me-1'
                  // defaultChecked={(data && data.form && data.form[`Lokal_Hordeolum_${key + 4}`] === 1)}
                  checked={item.checked}
                  innerRef={mainRegister(`lokal-hordeolum-${item.id}`)}
                  onChange={(e) => {
                    handleCheckboxChange(e);
                    const index = checkboxLocalHordeolumBot.findIndex(c => c.id === item.id);
                    if (index >= 0) {
                      const newValue = [...checkboxLocalHordeolumBot];
                      newValue[index].checked = e.target.checked;
                      setCheckboxLocalHordeolumBot(newValue);
                    }
                  }}
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
              checkboxLocalHordeolumDrip && checkboxLocalHordeolumDrip.map((item: any, key: number) => (
                <Row key={key} className='mb-1'>
                  <Col>
                    <Input
                      type="checkbox"
                      name={`lokal-hordeolum-diteteskan-${item.id}`}
                      className='me-1'
                      // defaultChecked={!!(data && data.form && data.form[`Lokal_Hordeolum_Diteteskan_${key + 1}`])}
                      checked={item.checked}
                      innerRef={mainRegister(`lokal-hordeolum-diteteskan-${item.id}`)}
                      onChange={(e) => {
                        handleCheckboxDrip(e);
                        const index = checkboxLocalHordeolumDrip.findIndex(c => c.id === item.id);
                        if (index >= 0) {
                          const newValue = [...checkboxLocalHordeolumDrip];
                          newValue[index].checked = e.target.checked;
                          setCheckboxLocalHordeolumDrip(newValue);
                        }
                      }}
                    />
                    <label>{item.name}</label>
                  </Col>
                </Row>
              ))
            }
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row className='mb-1 mt-2'>
          <Col>
            <Input
              id="lokal-hordeolum-8"
              type="checkbox"
              name={`lokal-hordeolum-8`}
              className='me-1'
              // defaultChecked={!!(data && data.form && data.form.Lokal_Hordeolum_8)}
              checked={checkboxLocalHordeolum8 === '1'}
              innerRef={mainRegister(`lokal-hordeolum-8`)}
              onChange={(e) => {
                handleCheckboxChange(e);
                setCheckboxLocalHordeolum8(e.target.checked ? '1' : '0');
              }}
            />
            <label>Ditutup dengan menggunakan kasa steril</label>
          </Col>
        </Row>
        <Table style={{ width: '100%' }} className='mt-3 mb-3' borderless>
          <tr>
            <td style={{ width: '50%', textAlign: 'center' }}>
              <EyeImage
                initialImage={(data && data.form && data.form.Lokal_Hordeolum_Gambar_Pra && data.form.Lokal_Hordeolum_Gambar_Pra !== '') ? data.form.Lokal_Hordeolum_Gambar_Pra : undefined}
                formName='ok/laporan-pembedahan'
                component='laporan_pembedahan_umum_hordeolum_pra'
                onSaved={(image: string) => handleImagePra(image)}
              />
              <Label>Gambar Pra</Label>
              <Input
                id="lokal-hordeolum-gambar-pra"
                type="hidden"
                name="lokal-hordeolum-gambar-pra"
                innerRef={mainRegister('lokal-hordeolum-gambar-pra')}/>
            </td>
            <td style={{ width: '50%', textAlign: 'center' }}>
              <EyeImage
                initialImage={(data && data.form && data.form.Lokal_Hordeolum_Gambar_Pasca && data.form.Lokal_Hordeolum_Gambar_Pasca !== '') ? data.form.Lokal_Hordeolum_Gambar_Pasca : undefined}
                formName='ok/laporan-pembedahan'
                component='laporan_pembedahan_umum_hordeolum_pasca'
                onSaved={(image: string) => handleImagePasca(image)}
              />
              <Label>Gambar Pasca</Label>
              <Input
                id="lokal-hordeolum-gambar-pasca"
                type="hidden"
                name="lokal-hordeolum-gambar-pasca"
                innerRef={mainRegister('lokal-hordeolum-gambar-pasca')}/>
            </td>
          </tr>
        </Table>
      </TabPane>
    </TabContent></>
  )
}

export default GeneralHordeolumForm;
