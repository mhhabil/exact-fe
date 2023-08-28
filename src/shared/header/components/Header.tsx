import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Tooltip,
} from 'reactstrap';
import { ConsultationPatientTable, PatientTable, SearchPatientForm, SelectServiceForm } from '@modules/site/patient-list/components';
import { ExternalLink, LogOut, Users } from 'react-feather';
import { Fragment, useEffect, useState } from 'react';
import { fetchMedsRpo, fetchPatientDetail, handlePatientDetail } from '../stores/patient-detail.store';
import { AppRequest } from '@src/shared/request';
import DropdownUser from '@shared/navbar/components/DropdownUser';
import { ICompanyDetail } from '@src/modules/select-company/models/companies.model';
import Link from 'next/link';
import NursingStudy from './nursing-study';
import { PatientInformationService } from '../services';
import SelectTreatmentModal from '@src/shared/header/components/select-treatment-modal';
import { SubmitButton } from '@src/shared/button';
import { UpdateInformationRequest } from '../requests';
import { handleSelectPatientModal } from '@modules/site/patient-list/stores/patient.store';
import medss from '@shared/header/consts/meds';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { DateTimeConverter } from '@src/shared/datetime-converter';

const Header = () => {
  const { treatment } = useAppSelector(state => state.patient);
  const { consultPatients, patients } = useAppSelector(state => state.patient);
  const { patientDetail, meds } = useAppSelector(state => state.patientDetail);
  const { selectPatientModal } = useAppSelector(state => state.patient);
  const { userData } = useAppSelector(state => state.auth);
  const { companyName } = useAppSelector(state => state.selectCompany);
  const dispatch = useAppDispatch();

  const getAllergyText = () => {
    if (!patientDetail) {
      return '';
    }
    if (!patientDetail.Pengkajian_Keperawatan) {
      return patientDetail.Alergi;
    }
    if (patientDetail.Pengkajian_Keperawatan) {
      return `Alergi: ${patientDetail.Pengkajian_Keperawatan.Alergi ?? patientDetail.Alergi ?? ''}\nRPT: ${patientDetail.Pengkajian_Keperawatan.RPT ?? ''}\nRPO: ${patientDetail.Pengkajian_Keperawatan.RPO ?? ''}\nKLL: ${patientDetail.Pengkajian_Keperawatan.KLL_Radio && patientDetail.Pengkajian_Keperawatan.KLL_Radio === '1' ? 'Ya' : patientDetail.Pengkajian_Keperawatan.KLL_Radio && patientDetail.Pengkajian_Keperawatan.KLL_Radio === '0' ? 'Tidak' : ''}`
    }
  }

  const [expand, setExpand] = useState({ state: false, label: 'Show more' });
  const [tooltipOpen, setTooltipOpen] = useState<boolean>(false);
  const [tooltipAntrean, setTooltipAntrean] = useState<boolean>(false);
  const [tooltipCabang, setTooltipCabang] = useState<boolean>(false);
  const [toggleTreatment, setToggleTreatment] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('1');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [allergy, setAllergy] = useState<string | undefined>(getAllergyText());

  const { register, setValue } = useForm({
    mode: 'onChange',
    defaultValues: {
      allergy: getAllergyText(),
    },
  })

  const toggleExpand = () => {
    if (expand.state) {
      setExpand({ state: false, label: 'Show more' });
    } else {
      setExpand({ state: true, label: 'Show less' });
    }
  }

  const toggle = (tab: string) => {
    if (activeTab && activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const toggleAllergy = () => {
    setIsOpen(true)
  }

  useEffect(() => {
    if (userData && userData.isNurse && (patientDetail && (!patientDetail.Alergi || !patientDetail.Pengkajian_Keperawatan))) {
      alert('Alergi dan RPT belum diisi!!!')
      toggleAllergy();
    }
  }, [patientDetail, expand])

  useEffect(() => {
    if (treatment) {
      dispatch(fetchPatientDetail(AppRequest.createFromStore(treatment)));
      dispatch(fetchMedsRpo(AppRequest.createFromStore(treatment)));
    }
  }, [dispatch, treatment])

  useEffect(() => {
    if (patientDetail) {
      setValue('allergy', getAllergyText());
    }
  }, [patientDetail, expand])

  const toggleTooltip = () => {
    setTooltipOpen(!tooltipOpen);
  }

  const toggleAntreanTooltip = () => {
    setTooltipAntrean(!tooltipAntrean);
  }

  const toggleCabangTooltip = () => {
    setTooltipCabang(!tooltipCabang);
  }

  return (
    <Fragment>
      <div className="header-wrapper" style={ expand.state ? { height: '200px' } : { height: '80px' }}>
        <Row className="position-fixed w-100 z-index-100 pt-0 mt-0">
          <Col md="12">
            <Card style={ !expand.state ? { height: '130px' } : {} }>
              <CardBody className="d-flex">
                <div className="navbar-header me-1" style={{ width: '160px' }}>
                  <p className="mb-0 fw-bolder" style={{ fontSize: '1.25rem'}}>
                        EMR
                  </p>
                  <p className='mb-1 fw-bolder' style={{ fontSize: '10pt' }}>
                    {companyName}
                  </p>
                  <h6 style={{ fontSize: '10pt'}}>
                    {`Welcome, `}<b>{userData?.fullName ?? ''}</b>
                  </h6>
                </div>
                <Row className="mw-100 w-100">
                  <Col md="12">
                    <Row>
                      <Col md="5">
                        <FormGroup row className="form-group">
                          <Col md='3'>
                            <Label style={{fontSize:'9pt', width:'123px'}} className="fw-bolder">{`Nama (MR)`}</Label>
                          </Col>
                          <Col>
                            <Input className='fw-bolder' style={{ color: '#303030', fontSize:'10pt' }} readOnly value={`${treatment?.Pasien?.Nama ?? ''} ${treatment?.No_MR ? `(${treatment?.No_MR})` : treatment?.Pasien?.No_MR ? `(${treatment?.Pasien?.No_MR})` : ''}`} />
                          </Col>
                        </FormGroup>
                        <FormGroup row className="form-group">
                          <Col md='3'>
                            <Label style={{fontSize:'9pt', width:'123px'}} className="fw-bolder">Tgl Lahir / Umur</Label>
                          </Col>
                          <Col>
                            {/* <Input style={{ color: '#303030', fontSize:'10pt'}} readOnly value={`${treatment?.Pasien?.Tgl_Lahir ?? ''} / ${treatment?.Pasien?.Umur_Lengkap?.Tahun ?? ''} Thn, ${treatment?.Pasien?.Umur_Lengkap?.Bulan ?? ''} Bln, ${treatment?.Pasien?.Umur_Lengkap?.Hari ?? ''} Hr`}/> */}
                            <Input className='fw-bolder' style={{ color: '#303030', fontSize:'10pt'}} readOnly value={`${DateTimeConverter.convertToNormalDate(treatment?.Pasien?.Tgl_Lahir)} / ${treatment?.Pasien?.Umur_Lengkap?.Tahun ?? ''} Thn, ${treatment?.Pasien?.Umur_Lengkap?.Bulan ?? ''} Bln, ${treatment?.Pasien?.Umur_Lengkap?.Hari ?? ''} Hr`}/>
                          </Col>
                        </FormGroup>
                        {
                          expand.state && (
                            <Fragment>
                              <FormGroup row className='form-group'>
                                <Col md={3}>
                                  <Label style={{fontSize:'9pt', width:'100px'}} className='fw-bolder'>Tgl Berobat</Label>
                                </Col>
                                <Col>
                                  {
                                    treatment ? (
                                      <Col className='d-flex align-items-center ps-0'>
                                        <Input
                                          readOnly
                                          className='me-1 fw-bolder'
                                          value={`${DateTimeConverter.convertToNormalDate(treatment?.Tgl_Berobat)}`}
                                          style={{ color: '#303030', width: '80%', fontSize:'10pt' }}
                                        />
                                        <Button
                                          size='sm'
                                          type='button'
                                          color='success'
                                          style={{ fontSize: '11px' }}
                                          onClick={() => setToggleTreatment(true)}
                                        >
                                        Tgl.Lainnya
                                        </Button>
                                      </Col>
                                    ) : (
                                      <Col className='d-flex align-items-center'>
                                        <Input
                                          readOnly
                                          value=''
                                          style={{ color: '#303030' }}
                                        />
                                      </Col>
                                    )
                                  }
                                </Col>
                              </FormGroup>
                              <FormGroup row className='form-group'>
                                <Label md={3} style={{fontSize:'9pt'}} className='fw-bolder'>Kelamin</Label>
                                <Col>
                                  <Input
                                    readOnly
                                    className='fw-bolder'
                                    value={treatment?.Pasien?.Jenis_Kelamin ?? ''}
                                    style={{ color: '#303030', fontSize:'10pt', marginBottom:'0rem' }}
                                  />
                                </Col>
                              </FormGroup>
                              <FormGroup row className='form-group'>
                                <Label md={3} style={{fontSize:'9pt'}} className='fw-bolder'>Agama</Label>
                                <Col>
                                  <Input
                                    readOnly
                                    className='fw-bolder'
                                    value={treatment?.Pasien?.Agama ?? ''}
                                    style={{ color: '#303030', fontSize:'10pt' }}
                                  />
                                </Col>
                              </FormGroup>
                            </Fragment>
                          )
                        }
                      </Col>
                      <Col md="5" className=''>
                        {
                          !expand.state && (
                            <FormGroup row className='form-group'>
                              <Label md={3} style={{fontSize:'9pt'}} className='fw-bolder text-danger'>
                                Alergi/RPT/ RPO
                              </Label>
                              <Col className='ps-0'>
                                <Input
                                  readOnly
                                  className='text-danger fw-bolder'
                                  type='textarea'
                                  name='allergy'
                                  innerRef={register()}
                                  style={{ height: '70px', color: 'black', fontSize:'10pt', resize: 'none', lineHeight: '14pt'  }}
                                />
                              </Col>
                            </FormGroup>
                          )
                        }
                        {
                          expand.state && (
                            <Fragment>
                              <FormGroup row className="form-group">
                                {
                                  treatment && treatment.Tipe_Pasien && treatment.Tipe_Pasien === 'BPJS' ? (
                                    <Label md={3} style={{fontSize:'9pt', width:'9.8rem'}} className="fw-bolder">Tipe Pasien(SEP)</Label>
                                  ) : (
                                    <Label md={3} style={{fontSize:'9pt', width:'9.8rem'}} className="fw-bolder">Tipe Tagihan </Label>
                                  )
                                }
                                <Col className='ps-0'>
                                  {
                                    treatment && treatment.Tipe_Pasien && treatment.Tipe_Pasien === 'BPJS' ? (
                                      <Input className='fw-bolder' readOnly value={`${treatment.Tipe_Pasien ?? ''} (${treatment.No_SEP ?? ''})`} style={{ color: '#303030', fontSize:'10pt'}}/>
                                    ) : (
                                      <Input className='fw-bolder' readOnly value={`${treatment?.Tipe_Pasien ?? ''} (${treatment?.Nama_Tipe_Tagihan ?? ''})`} style={{ color: '#303030', fontSize:'10pt' }}/>
                                    )
                                  }
                                </Col>
                              </FormGroup>
                              <FormGroup row className="form-group">
                                <Label md={3} style={{fontSize:'9pt', width:'9.8rem'}} className="fw-bolder">Jenis Pelayanan</Label>
                                <Col className='ps-0'>
                                  <Input className='fw-bolder' readOnly value={treatment?.Jenis_Pelayanan && treatment.Jenis_Pelayanan === 'RawatJalan' ? 'Rawat Jalan' : 'Rawat Inap'} style={{ color: '#303030', fontSize:'10pt' }}/>
                                </Col>
                              </FormGroup>
                              <FormGroup row className='form-group'>
                                <Label md={3} style={{fontSize:'9pt', width:'9.8rem'}} className='fw-bolder'>
                                  Alamat
                                </Label>
                                <Col className='ps-0'>
                                  <Input
                                    readOnly
                                    className='fw-bolder'
                                    value={treatment?.Pasien?.Alamat ?? ''}
                                    style={{ color: '#303030', fontSize:'10pt' }}
                                  />
                                </Col>
                              </FormGroup>
                              <Form>
                                <FormGroup row className='form-group'>
                                  <Label md={3} style={{fontSize:'9pt', width:'9.8rem'}} className='fw-bolder text-danger'>
                                    Alergi/RPT/ RPO
                                  </Label>
                                  <Col className='ps-0'>
                                    <Input
                                      readOnly
                                      type='textarea'
                                      name='allergy'
                                      className='text-danger fw-bolder'
                                      innerRef={register()}
                                      style={{ height: '70px', color: '#303030', fontSize:'10pt', lineHeight:'14pt' }}
                                    />
                                  </Col>
                                </FormGroup>
                              </Form>
                            </Fragment>
                          )
                        }
                      </Col>
                      <Col className='ps-0'>
                        <Row>
                          <Col className="d-flex justify-content-center align-items-center flex-column">
                            <Button style={{fontSize:'9pt'}} type="button" color="primary" onClick={() => dispatch(handleSelectPatientModal(true))} className="mb-1">Pilih Pasien</Button>
                            {
                              (expand.state) && treatment && (
                                <Button
                                  size='sm'
                                  style={{ fontSize: '9pt' }}
                                  color='success'
                                  onClick={() => toggleAllergy()}
                                >
                                  Ubah Alergi/RPT/RPO
                                </Button>
                              )
                            }
                            {
                              (expand.state) && !treatment && (
                                <Button
                                  size='sm'
                                  style={{ fontSize: '9pt' }}
                                  color='success'
                                  disabled
                                >
                                  Ubah Alergi/RPT/RPO
                                </Button>
                              )
                            }
                          </Col>
                          <Col className={(!expand.state) ? 'd-flex justify-content-center align-items-center' : 'd-flex justify-content-center align-items-center mt-1'}>
                            <div className="pb-1" style={{ width: '43px' }}>
                              <DropdownUser />
                              <Tooltip placement='bottom' isOpen={tooltipOpen} target='dropdown-user' toggle={toggleTooltip}>
                                <b className='tooltip-text'>Profil</b>
                              </Tooltip>
                            </div>
                            <div className="pb-1">
                              <Link href="/antrean/pemanggil">
                                <a className='nav-link-style me-1'><Users id='antrean-pemanggil' /></a>
                              </Link>
                              <Tooltip placement='bottom' isOpen={tooltipAntrean} target='antrean-pemanggil' toggle={toggleAntreanTooltip}>
                                <b className='tooltip-text'>Pemanggil Antrean</b>
                              </Tooltip>
                            </div>
                            <div className="pb-1">
                              <Link href="/pilih-cabang">
                                <a className='nav-link-style me-1'><ExternalLink id='pilih-cabang' /></a>
                              </Link>
                              <Tooltip placement='bottom' isOpen={tooltipCabang} target='pilih-cabang' toggle={toggleCabangTooltip}>
                                <b className='tooltip-text'>Pindah Cabang</b>
                              </Tooltip>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    {
                      treatment && (
                        <Row>
                          <Col md="10" >
                            <div className="d-flex justify-content-center cursor-pointer" style={{ fontSize: '9pt', height: '10px' }} onClick={toggleExpand}>
                              { expand.label }
                            </div>
                          </Col>
                        </Row>
                      )
                    }
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

      {
        patientDetail && meds && (
          <Modal isOpen={!!isOpen} className="modal-dialog-centered modal-lg">
            <ModalHeader toggle={() => setIsOpen(false)}>
              Pengkajian Keperawatan
            </ModalHeader>
            <ModalBody className='d-flex flex-column justify-content-center'>
              {
                <NursingStudy
                  data={patientDetail}
                  onSuccessSubmit={() => setIsOpen(false)}
                  meds={[...meds, ...medss]}
                />
              }
            </ModalBody>
          </Modal>
        )
      }

      <Modal isOpen={selectPatientModal} className="modal-dialog modal-xl" >
        <ModalHeader toggle={() => dispatch(handleSelectPatientModal(false))}>Pilih Pasien</ModalHeader>
        <ModalBody>
          <Row>
            <Col sm="12" md="12" xxl="8" className="mb-1">
              <SearchPatientForm />
            </Col>
            <Col sm="12" md="12" xxl="4" className="mb-1">
              <SelectServiceForm />
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" xxl="12" className="mb-1">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={(activeTab && activeTab === '1') ? 'active' : ''}
                    onClick={() => toggle('1')}
                  >
                    {`Daftar Pasien (${patients && patients.total ? patients.total : ''})`}
                  </NavLink>
                </NavItem>
                {
                  userData && userData.isDokter && (
                    <NavItem>
                      <NavLink
                        className={(activeTab && activeTab === '2') ? 'active' : ''}
                        onClick={() => toggle('2')}
                      >
                        {`Daftar Konsul (${consultPatients && consultPatients.total ? consultPatients.total : ''})`}
                      </NavLink>
                    </NavItem>
                  )
                }
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId='1'>
                  <PatientTable />
                </TabPane>
                {
                  userData && userData.isDokter && (
                    <TabPane tabId='2'>
                      <ConsultationPatientTable/>
                    </TabPane>
                  )
                }
              </TabContent>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
      <SelectTreatmentModal
        toggle={(val: any) => setToggleTreatment(val)}
        isOpen={toggleTreatment}
      />
    </Fragment>
  )
}

export default Header;
