import { Fragment, useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { DownloadCloud, FileText, X } from 'react-feather';
import getConfig from 'next/config';
import Image from "next/dist/client/image";
import { useForm } from 'react-hook-form';
import { Button, Col, FormFeedback, FormGroup, Input, Label, ListGroup, ListGroupItem, Row, TabContent, Table, TabPane } from 'reactstrap';
import { useAppSelector } from '@src/utility/hooks/useAppSelector';
import treatment from '@src/shared/treatment/components/treatment';
import { UploadToCloudService } from '@src/shared/upload-cloud-storage/services';
import { SubmitButton } from '@src/shared/button';
import { Signature } from '@src/shared/signature/components';
import { SignatureModel } from '@src/shared/signature/models/signature.model';
import { IPdfModel } from '@src/shared/pdf';
import { OperativeFairyNursingNotesModel } from '../models';

const LaserUsage = (props: { data: OperativeFairyNursingNotesModel, register: any, activeTab: string, errors: any, processing: boolean, setValue: any, defaultPattern: string | undefined, setDirty: any }) => {
  const { data, register, activeTab, errors, processing, setValue, defaultPattern, setDirty } = props;
  const [laser, setLaser] = useState((data && data.ck_intra_operasi && data.ck_intra_operasi.Pemakaian_Laser) ? !!(data.ck_intra_operasi.Pemakaian_Laser) : false);
  const [implant, setImplant] = useState((data && data.ck_intra_operasi && data.ck_intra_operasi.Pemakaian_Implant) ? !!(data.ck_intra_operasi.Pemakaian_Implant) : false);
  const [files, setFiles] = useState<any>([]);
  const { treatment } = useAppSelector(state => state.patient)
  const { nurses } = useAppSelector(state => state.nurse);
  // const [processing, setProcessing] = useState(false);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);

  const [pemakaianLaser, setPemakaianLaser] = useState<string | undefined>(`${data?.ck_intra_operasi?.Pemakaian_Laser}`);
  const [pemakaianImplant, setPemakaianImplant] = useState<string | undefined>(`${data?.ck_intra_operasi?.Pemakaian_Implant}`);
  const [irigasiLuka, setIrigasiLuka] = useState<string | undefined>(`${data?.ck_intra_operasi?.Irigasi_Luka}`);
  const [pemakaianCairan, setPemakaianCairan] = useState<string | undefined>(`${data?.ck_intra_operasi?.Pemakaian_Cairan}`);
  const [balutanCairan, setBalutanCairan] = useState<string | undefined>(`${data?.ck_intra_operasi?.Balutan_Cairan}`);
  const [spesimenCairan, setSpesimenCairan] = useState<string | undefined>(`${data?.ck_intra_operasi?.Spesimen_Cairan}`);

  const handleCheckboxChange = (val: any) => {
    setValue(`${val.target.name}`, (val.target.checked) ? '1' : '0')
  }

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
    setDirty(true);
  }

  // const handleLaser = (e: any) => {
  //   setLaser(e.target.value);
  // }

  const handleImplant = (e: any) => {
    setImplant(e.target.value);
  }

  const handleNurseInstrumen = (image: SignatureModel) => {
    setValue('signed_nurse_instruments', image.Signature);
    setValue('id_nurse_instrument', image.ID_Karyawan);
  }

  const handleNurseSirkuler = (image: SignatureModel) => {
    setValue('signed_nurse_circular', image.Signature);
    setValue('id_nurse_circular', image.ID_Karyawan);
  }

  const handleRemoveFile = (file: any) => {
    const filtered = files.filter((i: any) => i.name !== file.name)
    setFiles([...filtered])
  }

  useEffect(() => {
    if (data && data.ck_intra_operasi && data.ck_intra_operasi.Name_Image_Stiker) {
      setFiles([
        {
          name: `${data.ck_intra_operasi?.Name_Image_Stiker}`,
          size: data.ck_intra_operasi?.Size_Image_Stiker,
          url_real: data.ck_intra_operasi?.Url_Image_Stiker,
        },
      ])
    }
  }, [data]);

  useEffect(() => {
    if (nurses) {
      setValue('id_laser_supervised_1', data.ck_intra_operasi.ID_Laser_Diawasi_1 ? data.ck_intra_operasi.ID_Laser_Diawasi_1 : '')
      setValue('id_laser_supervised_2', data.ck_intra_operasi.ID_Laser_Diawasi_2 ? data.ck_intra_operasi.ID_Laser_Diawasi_2 : '')
      setValue('id_laser_supervised_3', data.ck_intra_operasi.ID_Laser_Diawasi_3 ? data.ck_intra_operasi.ID_Laser_Diawasi_3 : '')
    }
  }, [nurses])

  useEffect(() => {
    if (data && data.ck_intra_operasi) {
      setPemakaianLaser(`${data?.ck_intra_operasi?.Pemakaian_Laser}`);
      setPemakaianImplant(`${data?.ck_intra_operasi?.Pemakaian_Implant}`);
      setIrigasiLuka(`${data?.ck_intra_operasi?.Irigasi_Luka}`);
      setPemakaianCairan(`${data?.ck_intra_operasi?.Pemakaian_Cairan}`);
      setBalutanCairan(`${data?.ck_intra_operasi?.Balutan_Cairan}`);
      setSpesimenCairan(`${data?.ck_intra_operasi?.Spesimen_Cairan}`);
    }
  }, [data]);

  useEffect(() => {
    if (defaultPattern === '1') {
      setValue('laser_use', '0');
      setPemakaianLaser('0');
      setValue('use_implant', '1');
      setPemakaianImplant('1');
      setValue('irrigation_wound', '6');
      setIrigasiLuka('6');
      setValue('discharging_fluid', '1');
      setPemakaianCairan('1');
      setValue('balutan_cairan', '2');
      setBalutanCairan('2');
      setValue('spesimen_cairan', '4');
      setSpesimenCairan('4');
    } else if (defaultPattern === '0') {
      setValue('laser_use', undefined);
      setPemakaianLaser(undefined);
      setValue('use_implant', undefined);
      setPemakaianImplant(undefined);
      setValue('irrigation_wound', undefined);
      setIrigasiLuka(undefined);
      setValue('discharging_fluid', undefined);
      setPemakaianCairan(undefined);
      setValue('balutan_cairan', undefined);
      setBalutanCairan(undefined);
      setValue('spesimen_cairan', undefined);
      setSpesimenCairan(undefined);
    }
  }, [defaultPattern]);

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
      setValue('name_image_sticker', toUpload[0].name);
      setValue('type_image_sticker', toUpload[0].type);
      setValue('size_image_sticker', toUpload[0].size);
      toBase64(toUpload[0]).then((base64: any) => {
        if (!treatment) return;
        UploadToCloudService().uploadImageCloud({
          emr_id: treatment.EMR_ID,
          form_name: 'ok/catatan-keperawatan-intra',
          component_id: 'grid_chart',
          image: base64,
        }).then(response => {
          const { data } = response.data;
          setValue('url_image_sticker', data.signUrl)
        })
      })
      setFiles(toUpload)
    }, [files])})

  const fileList = files.map((file: any, index: any) => (
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
  ));

  return <>
    <TabContent activeTab={activeTab}>
      <TabPane tabId='1'>
        <FormGroup className='form-group'>
          <Row>
            <Input
              type="hidden"
              name="url_image_sticker"
              innerRef={register()}
            />
            <Input
              type="hidden"
              name="name_image_sticker"
              innerRef={register()}
            />
            <Input
              type="hidden"
              name="type_image_sticker"
              innerRef={register()}
            />
            <Input
              type="hidden"
              name="size_image_sticker"
              innerRef={register()}
            />
            <Table style={{ width: '100%' }} className='mt-0' borderless>
              <tr>
                <td>
                  <Row>
                    <Col className='mt-3'>
                      <Label>14. Pemakaian Laser</Label>
                    </Col>
                  </Row>
                </td>
                <td style={{ width: '73%' }}>
                  <Row>
                    <Col className='mt-3'>
                      <Input
                        id="laser-use-0"
                        type="radio"
                        name="laser_use"
                        className="me-1"
                        value="0"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setLaser(false);
                            handleRadioChange(e);
                            setPemakaianLaser('0');
                          }
                        }}
                        checked={pemakaianLaser === '0'}
                        innerRef={register("laser_use")}
                      />{' '}
                      <Label>Tidak Ada</Label>
                    </Col>
                    <Col className='mt-3'>
                      <Input
                        id="laser-use-1"
                        type="radio"
                        name="laser_use"
                        className="me-1"
                        value="1"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setLaser(true);
                            handleRadioChange(e);
                            setPemakaianLaser('1');
                          }
                        }}
                        // defaultChecked={(data && data.form && data.form.Pemakaian_Laser === 1)}
                        checked={pemakaianLaser === '1'}
                        innerRef={register("laser_use")}
                      />{' '}
                      <Label>Ya</Label>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                  </Row>
                </td>
              </tr>

              {
                laser && (
                  <>
                    <tr>
                      <td>
                        <Table>
                          <tr className="mb-2">
                            <td style={{ width: '50%' }}>
                              <Label>Power</Label>
                            </td>
                            <td style={{ width: '35%' }}>
                              <Input
                                type="text"
                                style={{ width: '100px'}}
                                id="laser-power"
                                name="laser_power"
                                innerRef={register({ required: true })}
                                invalid={errors.laser_power && true}
                              />
                            </td>
                            <td>
                              <Label> Watt</Label>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: '15%' }}>
                              <Label className="mt-2">Durasi</Label>
                            </td>
                            <td>
                              <Input
                                className="mt-1"
                                type="text"
                                id="laser-duration"
                                name="laser_duration"
                                innerRef={register({ required: true })}
                                invalid={errors.laser_duration && true}
                              />
                            </td>
                            <td>
                              <Label>Detik</Label>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: '15%' }}>
                              <Label className="mt-2">Interval</Label>
                            </td>
                            <td style={{ width: '35%' }}>
                              <Input
                                className="mt-1"
                                type="text"
                                id="laser-interval"
                                name="laser_interval"
                                innerRef={register({ required: true })}
                                invalid={errors.laser_interval && true}
                              />
                            </td>
                            <td>
                              <Label> Detik</Label>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: '15%' }}>
                              <Label>Jumlah Tembakan</Label>
                            </td>
                            <td style={{ width: '35%' }}>
                              <Input
                                className="mt-1"
                                type="text"
                                id="laser-number-shoot"
                                name="laser_number_shoot"
                                innerRef={register({ required: true })}
                                invalid={errors.laser_number_shoot && true}
                              />
                            </td>
                          </tr>
                        </Table>
                      </td>
                      <td style={{ width: '50%' }}>
                        <Table style={{ verticalAlign: 'top', marginLeft: '50PX' }} borderless>
                          <tr>
                            <td style={{ width: '15%' }}>
                              <Label className="mt-2" style={{ marginLeft: '25px' }}>Kode Model</Label>
                            </td>
                            <td style={{ width: '35%' }}>
                              <Input
                                className="mt-2"
                                type="text"
                                id="laser-code-model"
                                name="laser_code_model"
                                innerRef={register({ required: true })}
                                invalid={errors.laser_code_model && true}
                              />
                            </td>
                            <td></td>
                          </tr>
                          <tr>
                            <td style={{ width: '15%' }}>
                              <Label className='mt-1' style={{ marginLeft: '25px' }}>Tanggal Pembedahan</Label>
                            </td>
                            <td style={{ width: '35%' }}>
                              <Input
                                className='mt-1'
                                type="date"
                                id='laser-date'
                                name='laser_date'
                                innerRef={register({ required: true })}
                                invalid={errors.laser_date && true}
                              />
                            </td>
                            <td></td>
                          </tr>
                          <tr>
                            <td style={{ width: '15%' }}>
                              <Label className="mb-0" style={{ marginLeft: '25px' }}>Diawasi Oleh</Label>
                            </td>
                            <td style={{ width: '35%' }}>
                              <Input
                                type="select"
                                id='id-laser-supervised-1'
                                name='id_laser_supervised_1'
                                innerRef={register()}
                              >
                                <option value="" disabled={false}>--</option>
                                {
                                  nurses && Array.isArray(nurses) && nurses.map((item: any, key: number) => {
                                    return <option value={item.ID_Karyawan} key={key}>{ item.Nama }</option>;
                                  })
                                }
                              </Input>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: '15%' }}>
                            </td>
                            <td style={{ width: '35%' }}>
                              <Input
                                className='mt-1'
                                type="select"
                                id='id-laser-supervised-2'
                                name='id_laser_supervised_2'
                                innerRef={register()}
                              >
                                <option value="" disabled={false}>--</option>
                                {
                                  nurses && Array.isArray(nurses) && nurses.map((item: any, key: number) => {
                                    return <option value={item.ID_Karyawan} key={key}>{item.Nama}</option>;
                                  })
                                }
                              </Input>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: '15%' }}>
                            </td>
                            <td style={{ width: '35%' }}>
                              <Input
                                className='mt-1'
                                type="select"
                                id='id-laser-supervised-3'
                                name='id_laser_supervised_3'
                                innerRef={register()}
                              >
                                <option value="" disabled={false}>--</option>
                                {
                                  nurses && Array.isArray(nurses) && nurses.map((item: any, key: number) => {
                                    return <option value={item.ID_Karyawan} key={key}>{ item.Nama }</option>;
                                  })
                                }
                              </Input>
                            </td>
                          </tr>
                        </Table>
                      </td>
                    </tr>
                  </>
                )
              }

              <tr>
                <td>
                  <Row>
                    <Col className='mt-3'>
                      <Label>15. Pemakaian Implant</Label>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col className='mt-3'>
                      <Input
                        id="use-implant-0"
                        type="radio"
                        name="use_implant"
                        className="me-1"
                        value="0"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setImplant(false);
                            handleRadioChange(e);
                            setPemakaianImplant('0');
                          }
                        }}
                        checked={pemakaianImplant === '0'}
                        innerRef={register("use_implant")}
                      />{' '}
                      <Label>Tidak Ada</Label>
                    </Col>
                    <Col className='mt-3'>
                      <Input
                        id="use-implant-1"
                        type="radio"
                        name="use_implant"
                        className="me-1"
                        value="1"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setImplant(true);
                            handleRadioChange(e);
                            setPemakaianImplant('1');
                          }
                        }}
                        checked={pemakaianImplant === '1'}
                        innerRef={register("use_implant")}
                      />{' '}
                      <Label>Ya, Kadaluarsa</Label>
                    </Col>
                    <Col className='mt-2'>
                      <Input
                        id="tanggal_kadaluarsa"
                        type="date"
                        name="tanggal_kadaluarsa"
                        className='mt-1'
                        innerRef={register() as any}
                      />
                    </Col>
                    <Col />
                  </Row>
                </td>
              </tr>

              {
                implant && (
                  <>
                    <tr>
                      <td>
                        <Row>
                          <Col className="d-flex justify-content-center">
                            <Label>Pabrik :</Label>
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <Row>
                          <Col>
                            <Input
                              type="text"
                              id='implant-factory'
                              name="implant_factory"
                              innerRef={register()}
                              invalid={errors.implant_factory && true}
                            />{' '}
                          </Col>
                          <Col></Col>
                          <Col></Col>
                        </Row>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Row>
                          <Col className="d-flex justify-content-center">
                            <Label>Type :</Label>
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <Row>
                          <Col>
                            <Input
                              type="text"
                              id='implant-type'
                              name="implant_type"
                              innerRef={register()}
                              invalid={errors.implant_type && true}
                            />{' '}
                          </Col>
                          <Col></Col>
                          <Col></Col>
                        </Row>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Row>
                          <Col className="d-flex justify-content-center">
                            <Label>Size :</Label>
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <Row>
                          <Col>
                            <Input
                              type="text"
                              id='implant-size'
                              name="implant_size"
                              innerRef={register()}
                              invalid={errors.implant_size && true}
                            />{' '}
                          </Col>
                          <Col></Col>
                          <Col></Col>
                        </Row>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Row>
                          <Col className="d-flex justify-content-center">
                            <Label>No Seri :</Label>
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <Row>
                          <Col>
                            <Input
                              type="text"
                              id='implant-seri'
                              name="implant_seri"
                              innerRef={register()}
                              invalid={errors.implant_seri && true}
                            />{' '}
                          </Col>
                          <Col></Col>
                          <Col></Col>
                        </Row>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Row>
                          <Col className="d-flex justify-content-center">
                            <Label>Upload Stiker Implant :</Label>
                          </Col>
                        </Row>
                      </td>
                      <td>
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
                  </>
                )
              }

              <tr>
                <td>
                  <Row className="mb-5">
                    <Col className="mb-5">
                      <Label>16. Irigasi Luka</Label>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col className='mt-1'>
                      <Input
                        id="irrigation-wound-1"
                        type="radio"
                        name="irrigation_wound"
                        className="me-1"
                        value="1"
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleRadioChange(e);
                            setIrigasiLuka('1')
                          }
                        }}
                        checked={irigasiLuka === '1'}
                        innerRef={register("irrigation_wound")}
                      />{' '}
                      <Label>Tidak Ada</Label>
                    </Col>
                    <Col className='mt-1'>
                      <Input
                        style={{ marginLeft: '-50px'}}
                        id="irrigation-wound-2"
                        type="radio"
                        name="irrigation_wound"
                        className='me-1'
                        value="2"
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleRadioChange(e);
                            setIrigasiLuka('2');
                          }
                        }}
                        checked={irigasiLuka === '2'}
                        innerRef={register("irrigation_wound")}
                      />{' '}
                      <Label style={{ marginRight: '-35px'}}>RL + Gentarmycin 40mg</Label>
                    </Col>
                    <Col className='mt-1'>
                      <Input
                        style={{ marginLeft: '-10px'}}
                        id="irrigation-wound-3"
                        type="radio"
                        name="irrigation_wound"
                        className="me-1"
                        value="3"
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleRadioChange(e);
                            setIrigasiLuka('3');
                          }
                        }}
                        checked={irigasiLuka === '3'}
                        innerRef={register("irrigation_wound")}
                      />{' '}
                      <Label style={{ marginRight: '-30px'}}>RL + Povidone-Iodine</Label>
                    </Col>
                    <Col className='mt-1'>
                      <Input
                        style={{ marginLeft: '38px'}}
                        id="irrigation-wound-4"
                        type="radio"
                        name="irrigation_wound"
                        className="me-1"
                        value="4"
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleRadioChange(e);
                            setIrigasiLuka('4');
                          }
                        }}
                        checked={irigasiLuka === '4'}
                        innerRef={register("irrigation_wound")}
                      />{' '}
                      <Label>Antibiotik</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="irrigation-wound-5"
                        type="radio"
                        name="irrigation_wound"
                        className="me-1"
                        value="5"
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleRadioChange(e);
                            setIrigasiLuka('5');
                          }
                        }}
                        checked={irigasiLuka === '5'}
                        innerRef={register("irrigation_wound")}
                      />{' '}
                      <Label>H2O2</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="irrigation-wound-6"
                        type="radio"
                        name="irrigation_wound"
                        className="me-1"
                        value="6"
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleRadioChange(e);
                            setIrigasiLuka('6');
                          }
                        }}
                        checked={irigasiLuka === '6'}
                        innerRef={register("irrigation_wound")}
                      />{' '}
                      <Label>Lain-Lain</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        type="text"
                        placeholder="Ketikkaan"
                        id='irrigation-wound-other-text'
                        name="irrigation_wound_other_text"
                        innerRef={register({ required: true })}
                        invalid={errors.irrigation_wound_other_text && true}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>

              <tr>
                <td>
                  <Row className="mb-3">
                    <Col className="mb-3">
                      <Label>17. Pemakaian Cairan</Label>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col className='mt-3'>
                      <Input
                        id="discharging-fluid-1"
                        type="radio"
                        name="discharging_fluid"
                        value="1"
                        className='me-1'
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleRadioChange(e);
                            setPemakaianCairan('1');
                          }
                        }}
                        checked={pemakaianCairan === '1'}
                        innerRef={register("discharging_fluid")}
                      />{' '}
                      <Label>RL 500cc</Label>
                    </Col>
                    <Col className='mt-3'>
                      <Input
                        style={{ marginLeft: '-25px'}}
                        id="discharging-fluid-2"
                        type="radio"
                        name="discharging_fluid"
                        className="me-1"
                        value="2"
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleRadioChange(e);
                            setPemakaianCairan('2');
                          }
                        }}
                        checked={pemakaianCairan === '2'}
                        innerRef={register("discharging_fluid")}
                      />{' '}
                      <Label>BSS Solution</Label>
                    </Col>
                    <Col className='mt-3'>
                      <Input
                        style={{ marginLeft: '-25px'}}
                        id="discharging-fluid-3"
                        type="radio"
                        name="discharging_fluid"
                        value="3"
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleRadioChange(e);
                            setPemakaianCairan('3');
                          }
                        }}
                        checked={pemakaianCairan === '3'}
                        innerRef={register("discharging_fluid")}
                      />{' '}
                      <Label style={{ marginRight: '-5px'}}>Air untuk irigrasi</Label>
                    </Col>
                    <Col className='mt-3'>
                      <Input
                        id="use_liquid_water_text"
                        type="text"
                        placeholder="Ketikkaan"
                        name="use_liquid_water_text"
                        innerRef={register({ required: true })}
                        invalid={errors.use_liquid_water_text && true}
                      />{' '}
                    </Col>
                    <Col className="mt-3">
                      <Label>Liter</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="discharging-fluid-4"
                        type="radio"
                        name="discharging_fluid"
                        className="me-1"
                        value="4"
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleRadioChange(e);
                            setPemakaianCairan(undefined);
                          }
                        }}
                        defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Pemakaian_Cairan === 4)}
                        innerRef={register("discharging_fluid")}
                      />{' '}
                      <Label>Tidak Ada</Label>
                    </Col>
                    <Col>
                      <Input
                        id="discharging-fluid-5"
                        type="radio"
                        name="discharging_fluid"
                        className="me-1"
                        value="5"
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleRadioChange(e);
                            setPemakaianCairan(undefined);
                          }
                        }}
                        defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Pemakaian_Cairan === 5)}
                        innerRef={register("discharging_fluid")}
                      />{' '}
                      <Label>Lain-Lain</Label>
                    </Col>
                    <Col>
                      <Input
                        id="use-other-liquid-text"
                        type="text"
                        placeholder="Ketikkaan"
                        name="use_other_liquid_text"
                        innerRef={register({ required: true })}
                        invalid={errors.use_other_liquid_text && true}
                      />{' '}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input
                        id="discharging-fluid-6"
                        type="radio"
                        name="discharging_fluid"
                        className="me-1"
                        value="6"
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleRadioChange(e);
                            setPemakaianCairan(undefined);
                          }
                        }}
                        defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Pemakaian_Cairan === 6)}
                        innerRef={register("discharging_fluid")}
                      />{' '}
                      <Label>Sodium Chloride 0.9%</Label>
                    </Col>
                    <Col>
                      <Input
                        id="use-liquid-sodium-text"
                        type="text"
                        placeholder="Ketikkaan"
                        name="use_liquid_sodium_text"
                        innerRef={register({ required: true })}
                        invalid={errors.use_liquid_sodium_text && true}
                      />{' '}
                    </Col>
                    <Col>
                      <Label>Liter</Label>
                    </Col>
                  </Row>
                </td>
              </tr>

              <tr>
                <td>
                  <Row>
                    <Col className='mt-3'>
                      <Label>18. Balutan</Label>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col className='mt-3'>
                      <Input
                        id="balutan-cairan-1"
                        type="radio"
                        name="balutan_cairan"
                        className="me-1"
                        value="1"
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleRadioChange(e);
                            setBalutanCairan('1');
                          }
                        }}
                        // defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Balutan_Cairan === 1)}
                        checked={balutanCairan === '1'}
                        innerRef={register("balutan_cairan")}
                      />{' '}
                      <Label>Tidak Ada</Label>
                    </Col>
                    <Col className='mt-3'>
                      <Input
                        style={{ marginLeft: '-10px'}}
                        id="balutan-cairan-2"
                        type="radio"
                        name="balutan_cairan"
                        className="me-1"
                        value="2"
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleRadioChange(e);
                            setBalutanCairan('2');
                          }
                        }}
                        checked={balutanCairan === '2'}
                        innerRef={register("balutan_cairan")}
                      />{' '}
                      <Label>Pressure / Kassa</Label>
                    </Col>
                    <Col className='mt-3'>
                      <Input
                        id="balutan-cairan-3"
                        type="radio"
                        name="balutan_cairan"
                        className="me-1"
                        value="3"
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleRadioChange(e);
                            setBalutanCairan('3');
                          }
                        }}
                        checked={balutanCairan === '3'}
                        innerRef={register("balutan_cairan")}
                      />{' '}
                      <Label>Eye Shield</Label>
                    </Col>
                    <Col></Col>
                  </Row>
                  <Row>
                    <Col>
                      <Label>Jenis</Label>
                    </Col>
                    <Col md='9'>
                      <Input
                        id='jenis_balutan'
                        name='jenis_balutan'
                        type='text'
                        placeholder='Ketikkan'
                        innerRef={register()}
                      />
                    </Col>
                    <Col md='2'></Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td>
                  <Row>
                    <Col className='mt-3'>
                      <Label>19. Spesimen</Label>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col className='mt-3'>
                      <Input
                        id="spesimen-cairan-1"
                        type="radio"
                        name="spesimen_cairan"
                        value="1"
                        className="me-1"
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleRadioChange(e);
                            setSpesimenCairan('1');
                          }
                        }}
                        // defaultChecked={(data && data.ck_intra_operasi && data.ck_intra_operasi.Spesimen_Cairan === 1)}
                        checked={spesimenCairan === '1'}
                        innerRef={register("spesimen_cairan")}
                      />{' '}
                      <Label>Histologi</Label>
                    </Col>
                    <Col className='mt-3'>
                      <Input
                        id="use-fluid-histology-text"
                        type="text"
                        placeholder="Ketikkaan"
                        name="use_fluid_histology_text"
                        innerRef={register({ required: true })}
                        invalid={errors.use_fluid_histology_text && true}
                      />{' '}
                    </Col>
                    <Col className="mt-3 d-flex justify-content-center">
                      <Label>Cairan Pemeriksaan</Label>
                    </Col>
                    <Col className='mt-3'>
                      <Input
                        type="text"
                        id="specimen-liquid-examination"
                        name="specimen_liquid_examination"
                        innerRef={register({ required: true })}
                        invalid={errors.specimen_liquid_examination && true}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Row>
                    <Col>
                      <Input
                        id="spesimen-cairan-2"
                        type="radio"
                        name="spesimen_cairan"
                        value="2"
                        className="me-1"
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleRadioChange(e);
                            setSpesimenCairan('2');
                          }
                        }}
                        checked={spesimenCairan === '2'}
                        innerRef={register("spesimen_cairan")}
                      />{' '}
                      <Label>Sistologi</Label>
                    </Col>
                    <Col>
                      <Input
                        id="use-fluid-cytology-text"
                        type="text"
                        placeholder="Ketikkaan"
                        name="use_fluid_cytology_text"
                        innerRef={register({ required: true })}
                        invalid={errors.use_fluid_cytology_text && true}
                      />{' '}
                    </Col>
                    <Col className="mt-1 d-flex justify-content-center">
                      <Label>Jenis Jaringan</Label>
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="specimen-type-tissue"
                        name="specimen_type_tissue"
                        innerRef={register({ required: true })}
                        invalid={errors.specimen_type_tissue && true}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>

              <tr>
                <td></td>
                <td>
                  <Row>
                    <Col>
                      <Input
                        id="spesimen-cairan-3"
                        type="radio"
                        name="spesimen_cairan"
                        value="3"
                        className="me-1"
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleRadioChange(e);
                            setSpesimenCairan('3');
                          }
                        }}
                        checked={spesimenCairan === '3'}
                        innerRef={register("spesimen_cairan")}
                      />{' '}
                      <Label>Kultur</Label>
                    </Col>
                    <Col>
                      <Input
                        id="use-fluid-culture-text"
                        type="text"
                        placeholder="Ketikkaan"
                        name="use_fluid_culture_text"
                        innerRef={register({ required: true })}
                        invalid={errors.use_fluid_culture_text && true}
                      />{' '}
                    </Col>
                    <Col className="mt-1 d-flex justify-content-center">
                      <Label>Jumlah Dari Jaringan</Label>
                    </Col>
                    <Col>
                      <Input
                        type="text"
                        id="specimen-number-tissue"
                        name="specimen_number_tissue"
                        innerRef={register({ required: true })}
                        invalid={errors.specimen_number_tissue && true}
                      />{' '}
                    </Col>
                  </Row>
                </td>
              </tr>

              <tr>
                <td></td>
                <td>
                  <Row>
                    <Col>
                      <Input
                        id="spesimen-cairan-4"
                        type="radio"
                        name="spesimen_cairan"
                        value="4"
                        className="me-1"
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleRadioChange(e);
                            setSpesimenCairan('4');
                          }
                        }}
                        checked={spesimenCairan === '4'}
                        innerRef={register("spesimen_cairan")}
                      />{' '}
                      <Label>Tidak Ada</Label>
                    </Col>
                  </Row>
                </td>
              </tr>

              <tr>
                <td></td>
                <td>
                  <Row>
                    <Col>
                      <Input
                        id="spesimen-cairan-5"
                        type="radio"
                        name="spesimen_cairan"
                        value="5"
                        className="me-1"
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleRadioChange(e);
                            setSpesimenCairan('5');
                          }
                        }}
                        checked={spesimenCairan === '5'}
                        innerRef={register("spesimen_cairan")}
                      />{' '}
                      <Label>Lain-Lain</Label>
                    </Col>
                    <Col>
                      <Input
                        id="lain_spesimen"
                        type="text"
                        placeholder="Ketikkan"
                        name="lain_spesimen"
                        innerRef={register({ required: true })}
                        invalid={errors.lain_spesimen && true}
                      />{' '}
                    </Col>
                    <Col></Col>
                    <Col></Col>
                  </Row>
                  <Row>
                    <Col>
                      <Label>Jenis</Label>
                    </Col>
                    <Col md='9'>
                      <Input
                        id='jenis_spesimen'
                        name='jenis_spesimen'
                        type='text'
                        placeholder='Ketikkan'
                        innerRef={register()}
                      />
                    </Col>
                    <Col md='2'></Col>
                  </Row>
                </td>
              </tr>
            </Table>

            <FormGroup>
              <Row>
                <Col>
                  <Label>Keterangan :</Label>
                  <Input
                    type="textarea"
                    placeholder="Ketikkaan"
                    id="specimen-description"
                    name="specimen_description"
                    innerRef={register({ required: true })}
                    invalid={errors.specimen_description && true}
                  />{' '}
                </Col>
              </Row>
            </FormGroup>
          </Row>
          <Row className="mt-2">
            <Col>
              <Signature
                label="Perawat Instrumen"
                type="picker"
                additionalLabel={(data && data.ck_intra_operasi && data.ck_intra_operasi.Nama_Perawat_Instrumen) ? data.ck_intra_operasi.Nama_Perawat_Instrumen : ''}
                initialImage={(data && data.ck_intra_operasi && data.ck_intra_operasi.TTD_Perawat_Instrumen && data.ck_intra_operasi.TTD_Perawat_Instrumen !== '') ? data.ck_intra_operasi.TTD_Perawat_Instrumen : undefined}
                persons={nurses}
                onSigned={(assigner: SignatureModel) => handleNurseInstrumen(assigner)}
              />
              <Input
                type="hidden"
                name="id_nurse_instrument"
                innerRef={register()}
                invalid={errors.id_nurse_instrument && true}
              />
              <Input
                type="hidden"
                name="signed_nurse_instruments"
                innerRef={register()}
                invalid={errors.signed_nurse_instruments && true}
              />
            </Col>
            <Col>
              <Signature
                label="Perawat Sirkuler"
                type="picker"
                initialImage={(data && data.ck_intra_operasi && data.ck_intra_operasi.TTD_Perawat_Sirkuler && data.ck_intra_operasi.TTD_Perawat_Sirkuler !== '') ? data.ck_intra_operasi.TTD_Perawat_Sirkuler : undefined}
                additionalLabel={(data && data.ck_intra_operasi && data.ck_intra_operasi.Nama_Perawat_Sirkuler) ? data.ck_intra_operasi.Nama_Perawat_Sirkuler : ''}
                persons={nurses}
                onSigned={(assigner: SignatureModel) => handleNurseSirkuler(assigner)}
              />
              <Input
                type="hidden"
                name="id_nurse_circular"
                innerRef={register()}
                invalid={errors.id_nurse_circular && true}
              />
              <Input
                type="hidden"
                name="signed_nurse_circular"
                innerRef={register()}
                invalid={errors.signed_nurse_circular && true}
              />
            </Col>
          </Row>
        </FormGroup>
      </TabPane>
    </TabContent>
  </>
}

export default LaserUsage;