import { Col, Label, Row, Table } from 'reactstrap';
import CoverUncover from './cover-uncover';
import Image from 'next/image';
import { Record } from '@modules/history/models/history-cppt.model';

const OutpatientCppt = (props: { record: Record }) => {
  const { record } = props;
  const newDataO = record.Data_O.replace('\n', ', ')

  return (
    <>
      <td style={{ borderRight: '1px solid', verticalAlign: 'middle' }}>
        {
          (record.Is_Form_Dokter) ? 'Dokter' : 'Perawat'
        }
      </td>
      <td style={{ borderRight: '1px solid' }}>
          S: {(record.Data_S && record.Data_S === 'Lain-lain') ? record.Data_S_Lain_Text : record.Data_S} <br/>
          O:
        {
          record.Submit_Mata === 1 && (
            <Table className='text-center'>
              <tr>
                <td>
                  OD
                </td>
                <td>
                  OS
                </td>
              </tr>
              <tr>
                <td>
                  {record.Gambar_Mata_OD && record.Gambar_Mata_OD !== '' && (
                    <Image
                      className="img-thumbnail"
                      src={record.Gambar_Mata_OD}
                      height="200rem"
                      width="200rem"
                      alt=''
                      objectFit="contain" />
                  )}
                </td>
                <td>
                  {record.Gambar_Mata_OS && record.Gambar_Mata_OS !== '' && (
                    <Image
                      className="img-thumbnail"
                      src={record.Gambar_Mata_OS}
                      height="200rem"
                      width="200rem"
                      alt=''
                      objectFit="contain" />
                  )}
                </td>
              </tr>
            </Table>
          )
        }
        {
          record.Submit_Retina === 1 && (
            <Table borderless className='text-center'>
              <tr>
                <td>
                  OD
                </td>
                <td>
                  OS
                </td>
              </tr>
              <tr>
                <td>
                  {record.Gambar_Retina_OD && record.Gambar_Retina_OD !== '' && (
                    <Image
                      className="img-thumbnail"
                      src={record.Gambar_Retina_OD}
                      height="200rem"
                      width="200rem"
                      alt=''
                      objectFit="contain" />
                  )}
                </td>
                <td>
                  {record.Gambar_Retina_OS && record.Gambar_Retina_OS !== '' && (
                    <Image
                      className="img-thumbnail"
                      src={record.Gambar_Retina_OS}
                      height="200rem"
                      width="200rem"
                      alt=''
                      objectFit="contain" />
                  )}
                </td>
              </tr>
            </Table>
          )
        }
        {
          record.Submit_Pediatrik === 1 && (
            <Table borderless className='mt-1'>
              <thead>
                <tr style={{ textAlign: 'center' }}>
                  <td style={{ width: '10%' }}></td>
                  <td style={{ width: '45%' }}>
                    <b>OD</b> <br/>
                    <b>PEDIATRIK</b>
                  </td>
                  <td style={{ width: '45%' }}>
                    <b>OS</b> <br/>
                    <b>PEDIATRIK</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                {
                  record.Pediatrik && (record.Pediatrik.Cardif_OD_Test_Distance_1 !== '' || record.Pediatrik.Cardif_OD_Test_Distance_50 !== '' || record.Pediatrik.Cardif_OS_Test_Distance_1 !== '' || record.Pediatrik.Cardif_OS_Test_Distance_50 !== '') && (
                    <tr>
                      <td><b>Cardif</b></td>
                      <td>
                        <Row>
                          <Col>
                            <Label>Test Distance 1 M</Label> <br/>
                            {
                              (record.Pediatrik.Cardif_OD_Test_Distance_1) ? `${record.Pediatrik.Cardif_OD_Test_Distance_1} Dec` : ''
                            }
                          </Col>
                          <Col>
                            <Label>Test Distance 50 M</Label> <br/>
                            {
                              (record.Pediatrik.Cardif_OD_Test_Distance_50) ? `${record.Pediatrik.Cardif_OD_Test_Distance_50} Dec` : ''
                            }
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <Row>
                          <Col>
                            <Label>Test Distance 1 M</Label> <br/>
                            {
                              (record.Pediatrik.Cardif_OS_Test_Distance_1) ? `${record.Pediatrik.Cardif_OS_Test_Distance_1} Dec` : ''
                            }
                          </Col>
                          <Col>
                            <Label>Test Distance 50 M</Label> <br/>
                            {
                              (record.Pediatrik.Cardif_OS_Test_Distance_50) ? `${record.Pediatrik.Cardif_OS_Test_Distance_1} Dec` : ''
                            }
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  )
                }
                {
                  record.Pediatrik && (record.Pediatrik.Tac_OD_At_38 !== '' || record.Pediatrik.Tac_OD_At_55 !== '' || record.Pediatrik.Tac_OD_At_84 !== '' || record.Pediatrik.Tac_OS_At_38 !== '' || record.Pediatrik.Tac_OS_At_55 !== '' || record.Pediatrik.Tac_OS_At_84 !== '') && (
                    <tr>
                      <td><b>Teller Accuity Card/TAC</b></td>
                      <td>
                        <Row>
                          <Col>
                            <Label>AT 38 CM</Label> <br/>
                            {
                              (record.Pediatrik.Tac_OD_At_38) ? `${record.Pediatrik.Tac_OD_At_38}` : ''
                            }
                          </Col>
                          <Col>
                            <Label>AT 55 CM</Label> <br/>
                            {
                              (record.Pediatrik.Tac_OD_At_55) ? `${record.Pediatrik.Tac_OD_At_55}` : ''
                            }
                          </Col>
                          <Col>
                            <Label>AT 84 CM</Label> <br/>
                            {
                              (record.Pediatrik.Tac_OD_At_84) ? `${record.Pediatrik.Tac_OD_At_84}` : ''
                            }
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <Row>
                          <Col>
                            <Label>AT 38 CM</Label> <br/>
                            {
                              (record.Pediatrik.Tac_OS_At_38) ? `${record.Pediatrik.Tac_OS_At_38}` : ''
                            }
                          </Col>
                          <Col>
                            <Label>AT 55 CM</Label> <br/>
                            {
                              (record.Pediatrik.Tac_OS_At_55) ? `${record.Pediatrik.Tac_OS_At_55}` : ''
                            }
                          </Col>
                          <Col>
                            <Label>AT 84 CM</Label> <br/>
                            {
                              (record.Pediatrik.Tac_OS_At_84) ? `${record.Pediatrik.Tac_OS_At_84}` : ''
                            }
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  )
                }
                {
                  record.Pediatrik && (record.Pediatrik.Rpl_Streak_OD_Streak_Sph !== '' || record.Pediatrik.Rpl_Streak_OD_Streak_Cyl !== '' || record.Pediatrik.Rpl_Streak_OD_Streak_Axis !== '' || record.Pediatrik.Rpl_Streak_OD_Va !== '' || record.Pediatrik.Rpl_Streak_OD_False !== '' || record.Pediatrik.Rpl_Streak_OD_Pd_Jauh !== '' || record.Pediatrik.Rpl_Streak_OD_Adaptasi !== '' || record.Pediatrik.Rpl_Streak_OS_Streak_Sph !== '' || record.Pediatrik.Rpl_Streak_OS_Streak_Cyl !== '' || record.Pediatrik.Rpl_Streak_OS_Streak_Axis !== '' || record.Pediatrik.Rpl_Streak_OS_Va !== '' || record.Pediatrik.Rpl_Streak_OS_False !== '' || record.Pediatrik.Rpl_Streak_OS_Pd_Jauh !== '' || record.Pediatrik.Rpl_Streak_OS_Adaptasi !== '') && (
                    <tr>
                      <td><b>RPL Streak Retinoscopy</b></td>
                      <td>
                        <Row>
                          <Col>
                            <Label>Sph</Label> <br/>
                            {
                              (record.Pediatrik.Rpl_Streak_OD_Streak_Sph) ? `${record.Pediatrik.Rpl_Streak_OD_Streak_Sph}` : ''
                            }
                          </Col>
                          <Col>
                            <Label>Cyl</Label> <br/>
                            {
                              (record.Pediatrik.Rpl_Streak_OD_Streak_Cyl) ? `${record.Pediatrik.Rpl_Streak_OD_Streak_Cyl}` : ''
                            }
                          </Col>
                          <Col>
                            <Label>Axis</Label> <br/>
                            {
                              (record.Pediatrik.Rpl_Streak_OD_Streak_Axis) ? `${record.Pediatrik.Rpl_Streak_OD_Streak_Axis}` : ''
                            }
                          </Col>
                          <Col>
                            <Label>Visus Akhir</Label> <br/>
                            {
                              (record.Pediatrik.Rpl_Streak_OD_Va) ? `${record.Pediatrik.Rpl_Streak_OD_Va}` : ''
                            }
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Label>False</Label> <br/>
                            {
                              (record.Pediatrik.Rpl_Streak_OD_False) ? `${record.Pediatrik.Rpl_Streak_OD_False}` : ''
                            }
                          </Col>
                          <Col>
                            <Label>PD Jauh</Label> <br/>
                            {
                              (record.Pediatrik.Rpl_Streak_OD_Pd_Jauh) ? `${record.Pediatrik.Rpl_Streak_OD_Pd_Jauh}` : ''
                            }
                          </Col>
                          <Col>
                            <Label>Adaptasi</Label> <br/>
                            {
                              (record.Pediatrik.Rpl_Streak_OD_Adaptasi) ? `${record.Pediatrik.Rpl_Streak_OD_Adaptasi}` : ''
                            }
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <Row>
                          <Col>
                            <Label>Sph</Label> <br/>
                            {
                              (record.Pediatrik.Rpl_Streak_OS_Streak_Sph) ? `${record.Pediatrik.Rpl_Streak_OS_Streak_Sph}` : ''
                            }
                          </Col>
                          <Col>
                            <Label>Cyl</Label> <br/>
                            {
                              (record.Pediatrik.Rpl_Streak_OS_Streak_Cyl) ? `${record.Pediatrik.Rpl_Streak_OS_Streak_Cyl}` : ''
                            }
                          </Col>
                          <Col>
                            <Label>Axis</Label> <br/>
                            {
                              (record.Pediatrik.Rpl_Streak_OS_Streak_Axis) ? `${record.Pediatrik.Rpl_Streak_OS_Streak_Axis}` : ''
                            }
                          </Col>
                          <Col>
                            <Label>Visus Akhir</Label> <br/>
                            {
                              (record.Pediatrik.Rpl_Streak_OS_Va) ? `${record.Pediatrik.Rpl_Streak_OS_Va}` : ''
                            }
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Label>False</Label> <br/>
                            {
                              (record.Pediatrik.Rpl_Streak_OS_False) ? `${record.Pediatrik.Rpl_Streak_OS_False}` : ''
                            }
                          </Col>
                          <Col>
                            <Label>PD Jauh</Label> <br/>
                            {
                              (record.Pediatrik.Rpl_Streak_OS_Pd_Jauh) ? `${record.Pediatrik.Rpl_Streak_OS_Pd_Jauh}` : ''
                            }
                          </Col>
                          <Col>
                            <Label>Adaptasi</Label> <br/>
                            {
                              (record.Pediatrik.Rpl_Streak_OS_Adaptasi) ? `${record.Pediatrik.Rpl_Streak_OS_Adaptasi}` : ''
                            }
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  )
                }
                {
                  record.Pediatrik && (record.Pediatrik.Cover_OD_Cover_1 !== '' || record.Pediatrik.Cover_OD_Cover_2 !== '' || record.Pediatrik.Cover_OD_Cover_3 !== '' || record.Pediatrik.Cover_OD_Cover_4 !== '' || record.Pediatrik.Cover_OD_Cover_5 !== '' || record.Pediatrik.Cover_OD_Cover_6 !== '' || record.Pediatrik.Cover_OS_Cover_1 !== '' || record.Pediatrik.Cover_OS_Cover_2 !== '' || record.Pediatrik.Cover_OS_Cover_3 !== '' || record.Pediatrik.Cover_OS_Cover_4 !== '' || record.Pediatrik.Cover_OS_Cover_5 !== '' || record.Pediatrik.Cover_OS_Cover_6 !== '') && (
                    <CoverUncover pediatric={record.Pediatrik}/>
                  )
                }
                {
                  record.Pediatrik && (record.Pediatrik.Prisma_OD_Prisma !== '' || record.Pediatrik.Prisma_OS_Prisma !== '') && (
                    <tr>
                      <td><b>Prisma</b></td>
                      <td>
                        <Row>
                          <Col>
                            {
                              `${(record.Pediatrik.Prisma_OD_Prisma) ? record.Pediatrik.Prisma_OD_Prisma : ''}\u00b0`
                            }
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <Row>
                          <Col>
                            {
                              `${(record.Pediatrik.Prisma_OS_Prisma) ? record.Pediatrik.Prisma_OS_Prisma : ''}\u00b0`
                            }
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  )
                }
                {
                  record.Pediatrik && (record.Pediatrik.Randot_OD_Circles !== '' || record.Pediatrik.Randot_OD_Animal !== '' || record.Pediatrik.Randot_OD_Randot_Form !== '' || record.Pediatrik.Randot_OS_Circles !== '' || record.Pediatrik.Randot_OS_Animal !== '' || record.Pediatrik.Randot_OS_Randot_Form !== '') && (
                    <tr>
                      <td>
                        <b>Randot Stereoskopis</b>
                      </td>
                      <td>
                        <Row>
                          <Col sm='4' style={{ fontSize: '8pt' }}>
                            <Label>{`Circles: `}</Label>
                          </Col>
                          <Col>
                            {(record.Pediatrik.Randot_OD_Circles) ? record.Pediatrik.Randot_OD_Circles : ''} Sec Of Arc
                          </Col>
                        </Row>
                        <Row>
                          <Col sm='4' style={{ fontSize: '8pt' }}>
                            <Label>{`Randot Form: `}</Label>
                          </Col>
                          <Col>
                            {(record.Pediatrik.Randot_OD_Randot_Form) ? record.Pediatrik.Randot_OD_Randot_Form : ''} Sec Of Arc
                          </Col>
                        </Row>
                        <Row>
                          <Col sm='4' style={{ fontSize: '8pt' }}>
                            <Label>{`Animal: `}</Label>
                          </Col>
                          <Col>
                            {(record.Pediatrik.Randot_OD_Animal) ? record.Pediatrik.Randot_OD_Animal : ''} Sec Of Arc
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <Row>
                          <Col sm='4' style={{ fontSize: '8pt' }}>
                            <Label>{`Circles: `}</Label>
                          </Col>
                          <Col>
                            {(record.Pediatrik.Randot_OS_Circles) ? record.Pediatrik.Randot_OS_Circles : ''} Sec Of Arc
                          </Col>
                        </Row>
                        <Row>
                          <Col sm='4' style={{ fontSize: '8pt' }}>
                            <Label>{`Randot Form: `}</Label>
                          </Col>
                          <Col>
                            {(record.Pediatrik.Randot_OS_Randot_Form) ? record.Pediatrik.Randot_OS_Randot_Form : ''} Sec Of Arc
                          </Col>
                        </Row>
                        <Row>
                          <Col sm='4' style={{ fontSize: '8pt' }}>
                            <Label>{`Animal: `}</Label>
                          </Col>
                          <Col>
                            {(record.Pediatrik.Randot_OS_Animal) ? record.Pediatrik.Randot_OS_Animal : ''} Sec Of Arc
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  )
                }
                {
                  record.Pediatrik && (record.Pediatrik.Okn_OD_Okn !== '' || record.Pediatrik.Okn_OS_Okn !== '') && (
                    <tr>
                      <td><b>OKN Drum</b></td>
                      <td>
                        <Row>
                          <Col>
                            {(record.Pediatrik.Okn_OD_Okn) ? record.Pediatrik.Okn_OD_Okn : ''}
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <Row>
                          <Col>
                            {(record.Pediatrik.Okn_OS_Okn) ? record.Pediatrik.Okn_OS_Okn : ''}
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  )
                }
                {
                  record.Pediatrik && (record.Pediatrik.Raf_OD_Raf !== '' || record.Pediatrik.Raf_OS_Raf !== '') && (
                    <tr>
                      <td><b>RAF Ruler</b></td>
                      <td>
                        <Row>
                          <Col>
                            {`${(record.Pediatrik.Raf_OD_Raf) ? record.Pediatrik.Raf_OD_Raf : ''} CM`}
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <Row>
                          <Col>
                            {`${(record.Pediatrik.Raf_OS_Raf) ? record.Pediatrik.Raf_OS_Raf : ''} CM`}
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  )
                }
                {
                  record.Pediatrik && (record.Pediatrik.Goniometer_OD_Goniometer !== '' || record.Pediatrik.Goniometer_OS_Goniometer !== '') && (
                    <tr>
                      <td><b>Goniometer</b></td>
                      <td>
                        <Row>
                          <Col>
                            {`${(record.Pediatrik.Goniometer_OD_Goniometer) ? record.Pediatrik.Goniometer_OD_Goniometer : ''}`}
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <Row>
                          <Col>
                            {`${(record.Pediatrik.Goniometer_OS_Goniometer) ? record.Pediatrik.Goniometer_OS_Goniometer : ''}`}
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  )
                }
                {
                  record.Pediatrik && (record.Pediatrik.Hes_OD_Hes !== '' || record.Pediatrik.Hes_OS_Hes !== '') && (
                    <tr>
                      <td><b>Hes Green</b></td>
                      <td>
                        <Row>
                          <Col>
                            {(record.Pediatrik.Hes_OD_Hes) ? record.Pediatrik.Hes_OD_Hes : ''}
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <Row>
                          <Col>
                            {(record.Pediatrik.Hes_OS_Hes) ? record.Pediatrik.Hes_OS_Hes : ''}
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  )
                }
                {
                  record.Pediatrik && (record.Pediatrik.Nearvision_OD_Nearvision !== '' || record.Pediatrik.Nearvision_OS_Nearvision) && (
                    <tr>
                      <td><b>Near Vision</b></td>
                      <td>
                        <Row>
                          <Col>
                            {(record.Pediatrik.Nearvision_OD_Nearvision) ? record.Pediatrik.Nearvision_OD_Nearvision : ''}
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <Row>
                          <Col>
                            {(record.Pediatrik.Nearvision_OS_Nearvision) ? record.Pediatrik.Nearvision_OS_Nearvision : ''}
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </Table>
          )
        }
        {
          record && record.Data_O && (
            <Table>
              <tr>
                <td dangerouslySetInnerHTML={{ __html: newDataO }}/>
              </tr>
            </Table>
          )
        }
        A: {(record.Data_A && record.Data_A === 'Lain-lain') ? record.Data_A_Lain_Text : record.Data_A} <br/>
        P: {(record.Data_P && record.Data_P === 'Lain-lain') ? record.Data_P_Lain_Text : record.Data_P}
      </td>
    </>
  )
}

export default OutpatientCppt;
