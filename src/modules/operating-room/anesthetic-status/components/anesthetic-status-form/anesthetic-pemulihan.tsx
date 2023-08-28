import { Button, Card, Col, FormGroup, Input, InputGroup, InputGroupText, Label, ListGroup, ListGroupItem, Nav, NavItem, NavLink, Row, TabContent, TabPane, Table } from "reactstrap";
import { DownloadCloud, FileText, X } from "react-feather";
import { Fragment, useCallback, useEffect, useState } from "react";
import { ChartImageService } from "@src/shared/grid-chart/services";
import Compressor from "compressorjs";
import { GridChart } from "@src/shared/grid-chart-anestesi";
import Image from 'next/image';
import { useForm } from "react-hook-form";
import { DateTimeInput, TextInput } from "@shared/input";
import { FindPdfRequest, IPdfModel } from "@shared/pdf";
import { AppRequest } from "@shared/request";
import getConfig from 'next/config';
import { useDropzone } from 'react-dropzone';
import { Signature } from "@shared/signature/components";
import { SignatureModel } from "@shared/signature/models/signature.model";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { AnestheticStatus } from "@modules/operating-room/anesthetic-status/models/anesthetic-status.model";
import AnestheticStatusService from "@modules/operating-room/anesthetic-status/services";
import { UploadToCloudService } from '@src/shared/upload-cloud-storage/services';


//FormAnestheticPemulihan
const FormAnestheticPemulihan = (props: { data: AnestheticStatus,  register: any,  errors: any, processing: boolean, setValue: any}) => {
  const {  data, register, errors, processing, setValue} = props;
  const dispatch = useAppDispatch();
  const [files, setFiles] = useState<any>([])
  const { officers } = useAppSelector((state) => state.officer);
  const { treatment } = useAppSelector(state => state.patient);
  const { doctors } = useAppSelector(state => state.doctor);
  const { nurses } = useAppSelector(state => state.nurse);

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}`, e.target.value);
  }

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}`, (e.target.checked) ? '1' : '0');
  }

  const handleGridChartData = (data: string) => {
    setValue('json_image_chart', data)
  }

  const handleGridChartImage = (image: string) => {
    setValue('url_image_chart', image)
  }

  const handleGridChartScale = (scale: string) => {
    setValue('skala_anestesi', scale)
  }

  const renderFilePreview = (file: any) => {
    if (file.url_real) {
      const { publicRuntimeConfig } = getConfig();
      return <img src={file.url_real} className='img-fluid shadow-4' alt={file.name} />
    } else if (file.type && file.type.startsWith('image')) {
      return <img src={URL.createObjectURL(file)} className='img-fluid shadow-4' alt={file.name} />
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
  ));

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
      new Compressor(toUpload[0], {
        quality: 0.2,
        async success(res: any) {
          setValue('name_image_chart', res.name);
          setValue('type_image_chart', res.type);
          setValue('size_image_chart', res.size);
          toBase64(res).then((base64: any) => {
            if (!treatment) return;
            UploadToCloudService().uploadImageCloud({
              emr_id: treatment.EMR_ID,
              form_name: 'ok/status-anestesi',
              component_id: 'image_stiker',
              image: base64,
            }).then(response => {
              const { data } = response.data;
              setValue('url_image_chart', data.signUrl)
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
    setValue('name_image_chart', '');
    setValue('type_image_chart', '');
    setValue('size_image_chart', '');
    setValue('url_image_chart', '');
  }

  useEffect(() => {
    if (data && data.form && data.form.Name_Image_Chart) {
      setFiles([
        {
          name: `${data.form?.Name_Image_Chart}`,
          size: data.form?.Size_Image_Chart,
          url_real: data.form?.Url_Image_Chart,
        },
      ])
    }
  }, [data]);


  return (
    <Row>
      <Card className="border-1">
        <Col md="12" sm="12">
          <h2>Catatan Kamar Pemulihan</h2>
          <FormGroup className="form-group" row></FormGroup>
          <FormGroup className="form-group" row>
            <TextInput name="ckp_jam_masuk" label="Jam Masuk Kamar Pulih" md={3} {...{ register, errors }}  />
          </FormGroup>
          <FormGroup className="form-group" row>
            <TextInput name="ckp_tekanan_darah" label="Tekanan Darah" md={3} {...{ register, errors }}  />
          </FormGroup>
          <FormGroup className="form-group" row>
            <TextInput name="ckp_denyut_nadi" label="Denyut Nadi" md={3} {...{ register, errors }} />
          </FormGroup>
          <FormGroup className="form-group" row>
            <TextInput name="ckp_rr" label="RR" md={3} {...{ register, errors }}  />
          </FormGroup>
          <FormGroup className="form-group" row>
            <TextInput name="ckp_suhu" label="Suhu" md={3} {...{ register, errors }} />
          </FormGroup>
        </Col>
        <Row style={{paddingTop:'10px', paddingBottom:'10px'}}>
          <Col md="3" sm="12" >
          Kesadaran
          </Col>
          <Col md="9" sm="12" >
            <Input
              id="ckp_kesadaran-1"
              type="radio"
              name="ckp_kesadaran"
              className="me-1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.CKP_Kesadaran === 'Sadar Betul'}
              value="Sadar Betul"
              innerRef={register("ckp_kesadaran")}
            />{' '}
            <Label style={{paddingRight:'20%'}}> Sadar Betul </Label>

            <Input
              id="ckp_kesadaran-2"
              type="radio"
              name="ckp_kesadaran"
              className="me-1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form  && data.form.CKP_Kesadaran === 'Belum Sadar'}
              value="Belum Sadar"
              innerRef={register("ckp_kesadaran")}
            />{' '}
            <Label style={{paddingRight:'20%'}}> Belum Sadar   </Label>

            <Input
              id="posisi-3"
              type="radio"
              name="ckp_kesadaran"
              className="me-1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form  && data.form.CKP_Kesadaran === 'Tidur Dalam'}
              value="Tidur Dalam"
              innerRef={register("ckp_kesadaran")}
            />{' '}
            <Label style={{paddingRight:'5%'}}>Tidur Dalam </Label>
          </Col>
        </Row>
        <Row style={{paddingTop:'10px', paddingBottom:'10px'}}>
          <Col md="3" sm="12" >
          Pernafasan
          </Col>
          <Col md="9" sm="12" >
            <Input
              id="ckp_pernafasan-1"
              type="radio"
              name="ckp_pernafasan"
              className="me-1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.CKP_Pernafasan === 'Spontan'}
              value="Spontan"
              innerRef={register("ckp_pernafasan")}
            />{' '}
            <Label style={{paddingRight:'20%'}}> Spontan </Label>

            <Input
              id="ckp_pernafasan-2"
              type="radio"
              name="ckp_pernafasan"
              className="me-1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form  && data.form.CKP_Pernafasan === 'Dibantu'}
              value="Dibantu"
              innerRef={register("ckp_pernafasan")}
            />{' '}
            <Label style={{paddingRight:'20%'}}>  Dibantu  </Label>

            <Input
              id="ckp_pernafasan-3"
              type="radio"
              name="ckp_pernafasan"
              className="me-1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form  && data.form.CKP_Pernafasan === 'VAS'}
              value="VAS"
              innerRef={register("ckp_pernafasan")}
            />{' '}
            <Label style={{paddingRight:'20%'}}>  VAS  </Label>
            <Input
              id="vas_pulih"
              type="text"
              placeholder='Vas Text'
              name="vas_pulih"
              innerRef={register()}
            />
          </Col>
        </Row>
        <Row style={{paddingTop:'10px', paddingBottom:'10px'}}>
          <Col md="3" sm="12" >
          Penyulit Intra Operatif
          </Col>
          <Col md="9" sm="12" >
            <Input
              id="ckp_penyulit_intra_operatif"
              type="text"
              placeholder=''
              name="ckp_penyulit_intra_operatif"
              innerRef={register()}
            />
          </Col>
        </Row>
        <Row style={{paddingTop:'10px', paddingBottom:'10px'}}>
          <Col md="3" sm="12" >
          Instruksi Khusus
          </Col>
          <Col md="9" sm="12" >
            <Input
              id='catatan'
              type='textarea'
              name='ckp_instruksi_khusus'
              innerRef={register()}
            />
          </Col>
        </Row>
        <Row style={{paddingTop:'10px', paddingBottom:'10px'}}>
        <Table>
            <tr>
              <td style={{ width: '10%' }}>
              </td>
              <td>
                <GridChart
                  initialData={(data && data.form && data.form.Json_Image_Chart) ? data.form.Json_Image_Chart : undefined}
                  anesthesiaScale={(data && data.form && data.form.Skala_Anestesi) ? data.form.Skala_Anestesi : '5'}
                  onSavedData={(data: string) => {
                    handleGridChartData(data)
                  }}
                  onSavedScale={(scale: string) => handleGridChartScale(scale)}
                  onSavedImage={(image: string) => handleGridChartImage(image)}
                  component='grid_chart_image'
                  formName="ok/status-anestesi"
                />
                <Input
                  id="json_image_chart"
                  type="hidden"
                  name="json_image_chart"
                  innerRef={register()}
                />
                <Input
                  id="url_image_chart"
                  type="hidden"
                  name="url_image_chart"
                  innerRef={register()}
                />
                <Input
                  id="skala_anestesi"
                  type="hidden"
                  name="skala_anestesi"
                  innerRef={register()}
                />
              </td>
            </tr>
          </Table>
        </Row>
        { /**
        <Row style={{paddingTop:'10px', paddingBottom:'10px'}}>
          <Input
            id=" url_image_chart:"
            type="hidden"
            name=" url_image_chart:"
            innerRef={register('url_image_chart')}
          />
          <Input
            id="name_image_chart"
            type="hidden"
            name="name_image_chart"
            innerRef={register('name_image_chart')}
          />
          <Input
            id="type_image_chart"
            type="hidden"
            name="type_image_chart"
            innerRef={register('type_image_chart')}
          />
          <Input
            id="size_image_chart"
            type="hidden"
            name="size_image_chart"
            innerRef={register('size_image_chart')}
          />
          <Col>
            <div {...getFilesProps()} className="dropzone my-3">
              <input name="logo" placeholder='Logo'  {...getInputFilesProps()} />
              <div className="d-flex align-items-center justify-content-center flex-column">
                <DownloadCloud size="50" />
                <h5>Upload Image</h5>
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
         **/}
        <Row style={{paddingTop:'10px', paddingBottom:'10px'}}>
          <Col md="3" sm="12" >
          VAS
          </Col>
          <Col md="9" sm="12" >
            <Input
              id="vas-0"
              type="radio"
              name="vas"
              className="me-1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form && data.form.VAS === '0'}
              value="0"
              innerRef={register("vas")}
            />{' '}
            <Label style={{paddingRight:'3%'}} >0</Label>

            <Input
              id="vas-1"
              type="radio"
              name="vas"
              className="me-1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form  && data.form.VAS === '1'}
              value="1"
              innerRef={register("vas")}
            />{' '}
            <Label style={{paddingRight:'3%'}}>1</Label>

            <Input
              id="vas-2"
              type="radio"
              name="vas"
              className="me-1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form  && data.form.VAS === '2'}
              value="2"
              innerRef={register("vas")}
            />{' '}
            <Label style={{paddingRight:'3%'}}>2</Label>

            <Input
              id="vas-3"
              type="radio"
              name="vas"
              className="me-1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form  && data.form.VAS === '3'}
              value="3"
              innerRef={register("vas")}
            />{' '}
            <Label style={{paddingRight:'3%'}}>3</Label>

            <Input
              id="vas-4"
              type="radio"
              name="vas"
              className="me-1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form  && data.form.VAS === '4'}
              value="4"
              innerRef={register("vas")}
            />{' '}
            <Label style={{paddingRight:'3%'}}>4</Label>

            <Input
              id="vas-5"
              type="radio"
              name="vas"
              className="me-1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form  && data.form.VAS === '5'}
              value="5"
              innerRef={register("vas")}
            />{' '}
            <Label style={{paddingRight:'3%'}}>5</Label>

            <Input
              id="vas-6"
              type="radio"
              name="vas"
              className="me-1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form  && data.form.VAS === '6'}
              value="6"
              innerRef={register("vas")}
            />{' '}
            <Label style={{paddingRight:'3%'}}>6</Label>

            <Input
              id="vas-7"
              type="radio"
              name="vas"
              className="me-1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form  && data.form.VAS === '7'}
              value="7"
              innerRef={register("vas")}
            />{' '}
            <Label style={{paddingRight:'3%'}}>7</Label>

            <Input
              id="vas-8"
              type="radio"
              name="vas"
              className="me-1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form  && data.form.VAS === '8'}
              value="8"
              innerRef={register("vas")}
            />{' '}
            <Label style={{paddingRight:'3%'}}>8</Label>

            <Input
              id="vas-9"
              type="radio"
              name="vas"
              className="me-1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form  && data.form.VAS === '9'}
              value="9"
              innerRef={register("vas")}
            />{' '}
            <Label style={{paddingRight:'3%'}}>9</Label>

            <Input
              id="vas-10"
              type="radio"
              name="vas"
              className="me-1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form  && data.form.VAS === '10'}
              value="10"
              innerRef={register("vas")}
            />{' '}
            <Label style={{paddingRight:'3%'}}>10</Label>

          </Col>
        </Row>

        <FormGroup className="form-group" row>
          <TextInput name="jam_keluar_pulih" label="Jam Keluar Kamar Pulih" md={3} {...{ register, errors }}  />
        </FormGroup>

        <FormGroup className="form-group" row>
          <Label md={2}>Skor Aldrette (Dewasa)</Label>
          <TextInput name="aldrette_aktivitas" label="Aktivitas" md={2} {...{ register, errors }}  />
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md={2}></Label>
          <TextInput name="aldrette_sirkulasi" label="Sirkulasi" md={2} {...{ register, errors }}  />
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md={2}></Label>
          <TextInput name="aldrette_pernafasan" label="Pernafasan" md={2} {...{ register, errors }}  />
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md={2}></Label>
          <TextInput name="aldrette_kesadaran" label="Kesadaran" md={2} {...{ register, errors }}  />
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md={2}></Label>
          <TextInput name="aldrette_warna_kulit" label="Warna Kulit" md={2} {...{ register, errors }}  />
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md={2}></Label>
          <TextInput name="aldrette_total" label="Total" md={2} {...{ register, errors }}  />
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md={2}></Label>
          <TextInput name="aldrette_skor_vas" label="Skor VAS" md={2} {...{ register, errors }}  />
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md={2}>Skor Steward (Anak-anak)</Label>
          <TextInput name="steward_pernafasan" label="Pernafasan" md={2} {...{ register, errors }}  />
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md={2}></Label>
          <TextInput name="steward_kesadaran" label="Kesadaran" md={2} {...{ register, errors }}  />
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md={2}></Label>
          <TextInput name="steward_motorik" label="Motorik" md={2} {...{ register, errors }}  />
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md={2}></Label>
          <TextInput name="steward_total" label="Total" md={2} {...{ register, errors }}  />
        </FormGroup>
        <FormGroup className="form-group" row>
          <Label md={2}></Label>
          <TextInput name="steward_skor_vas" label="Skor VAS" md={2} {...{ register, errors }}  />
        </FormGroup>


        <Row style={{paddingTop:'10px', paddingBottom:'10px'}}>
          <Col md="3" sm="12" >
          Pindah Ke
          </Col>
          <Col md="9" sm="12" >

            <Input
              id="pindah_ke-1"
              type="radio"
              name="pindah_ke"
              className="me-1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form  && data.form.Pindah_Ke === 'Ruang Rawat'}
              value="Ruang Rawat"
              innerRef={register("pindah_ke")}
            />{' '}
            <Label style={{paddingRight:'3%'}}>Ruang Rawat</Label>

            <Input
              id="pindah_ke-2"
              type="radio"
              name="pindah_ke"
              className="me-1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form  && data.form.Pindah_Ke === 'Pulang'}
              value="Pulang"
              innerRef={register("pindah_ke")}
            />{' '}
            <Label style={{paddingRight:'3%'}}>Pulang</Label>

            <Input
              id="pindah_ke-3"
              type="radio"
              name="pindah_ke"
              className="me-1"
              onChange={(e) => handleRadioChange(e)}
              defaultChecked={data && data.form  && data.form.Pindah_Ke === 'Lain-lain'}
              value="Lain-lain"
              innerRef={register("pindah_ke")}
            />{' '}
            <Label style={{paddingRight:'3%'}}> Lain-lain</Label>

            <Input
              style={{width:'50%'}}
              id="pindah_ke_lainnya"
              type="text"
              placeholder='Ketikan'
              name="pindah_ke_lainnya"
              innerRef={register()}
            />
          </Col>
        </Row>

        <Row style={{paddingTop:'10px', paddingBottom:'10px'}}>
          <Col md="2" sm="12" >
          Catatan Khusus Ruang Pemulihan
          </Col>
          <Col md="10" sm="12" >
            <Input
              id='catatan_khusus_ruang_pemulihan'
              type='textarea'
              name='catatan_khusus_ruang_pemulihan'
              innerRef={register()}
            />
          </Col>
        </Row>

      </Card>
    </Row>

  )
};

export default FormAnestheticPemulihan;
