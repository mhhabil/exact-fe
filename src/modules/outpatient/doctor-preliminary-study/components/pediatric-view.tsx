import { Col, Label, Row, Table, Input } from "reactstrap";
import { IPediatric } from "../models/doctor-preliminary-study.model";
import { Fragment, useState } from "react";

const PediatricView = (props: { data: IPediatric }) => {
  const { data } = props;
  return (
    <Fragment>
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>OD PEDIATRIK</th>
            <th>OS PEDIATRIK</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cardif</td>
            <td>
              <div className="d-flex align-items-center">
                <div className="me-2">
                  <Label>Test Distance 1 M</Label>
                  <p>{data?.Cardif_OD_Test_Distance_1 ?? ''}</p>
                </div>
                <div>
                  <Label>Test Distance 50 M</Label>
                  <p>{data?.Cardif_OD_Test_Distance_50 ?? ''}</p>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="me-2">
                  <Label>Test Distance 1 M</Label>
                  <p>{data?.Cardif_OS_Test_Distance_1 ?? ''}</p>
                </div>
                <div>
                  <Label>Test Distance 50 M</Label>
                  <p>{data?.Cardif_OS_Test_Distance_50 ?? ''}</p>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Teller Accuity Card/TAC</td>
            <td>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <Label>AT 38 CM</Label>
                  <p>{data?.Tac_OD_At_38 ?? ''}</p>
                </div>
                <div className="me-1">
                  <Label>AT 55 CM</Label>
                  <p>{data?.Tac_OD_At_55 ?? ''}</p>
                </div>
                <div>
                  <Label>AT 84 CM</Label>
                  <p>{data?.Tac_OD_At_84 ?? ''}</p>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <Label>AT 38 CM</Label>
                  <p>{data?.Tac_OS_At_38 ?? ''}</p>
                </div>
                <div className="me-1">
                  <Label>AT 55 CM</Label>
                  <p>{data?.Tac_OS_At_55 ?? ''}</p>
                </div>
                <div>
                  <Label>AT 84 CM</Label>
                  <p>{data?.Tac_OS_At_84 ?? ''}</p>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>RPL Streak Retinoscopy</td>
            <td>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <Label>Sph</Label>
                  <p>{data?.Rpl_Streak_OD_Streak_Sph ?? ''}</p>
                </div>
                <div className="me-1">
                  <Label>Cyl</Label>
                  <p>{data?.Rpl_Streak_OD_Streak_Cyl ?? ''}</p>
                </div>
                <div className="me-1">
                  <Label>Axis</Label>
                  <p>{data?.Rpl_Streak_OD_Streak_Axis ?? ''}</p>
                </div>
                <div>
                  <Label>Visus Akhir</Label>
                  <p>{data?.Rpl_Streak_OD_Va ?? ''}</p>
                  {
                    data?.Rpl_Streak_OD_Va === 'Lain-lain' && (
                      <p>{data?.Rpl_Streak_OD_Va_Text ?? ''}</p>
                    )
                  }
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <Label>False</Label>
                  <p>{data?.Rpl_Streak_OD_False ?? ''}</p>
                  {
                    data?.Rpl_Streak_OD_False === 'Lain-lain' && (
                      <p>{data?.Rpl_Streak_OD_False_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>PD Jauh</Label>
                  <p>{data?.Rpl_Streak_OD_Pd_Jauh ?? ''}</p>
                  {
                    data?.Rpl_Streak_OD_Pd_Jauh === 'Lain-lain' && (
                      <p>{data?.Rpl_Streak_OD_Pd_Jauh_Text ?? ''}</p>
                    )
                  }
                </div>
                <div>
                  <Label>Adaptasi</Label>
                  <p>{data?.Rpl_Streak_OD_Adaptasi ?? ''}</p>
                  {
                    data?.Rpl_Streak_OD_Adaptasi === 'Lain-lain' && (
                      <p>{data?.Rpl_Streak_OD_Adaptasi_Text ?? ''}</p>
                    )
                  }
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <Label>Sph</Label>
                  <p>{data?.Rpl_Streak_OS_Streak_Sph ?? ''}</p>
                </div>
                <div className="me-1">
                  <Label>Cyl</Label>
                  <p>{data?.Rpl_Streak_OS_Streak_Cyl ?? ''}</p>
                </div>
                <div className="me-1">
                  <Label>Axis</Label>
                  <p>{data?.Rpl_Streak_OS_Streak_Axis ?? ''}</p>
                </div>
                <div>
                  <Label>Visus Akhir</Label>
                  <p>{data?.Rpl_Streak_OS_Va ?? ''}</p>
                  {
                    data?.Rpl_Streak_OS_Va === 'Lain-lain' && (
                      <p>{data?.Rpl_Streak_OS_Va_Text ?? ''}</p>
                    )
                  }
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <Label>False</Label>
                  <p>{data?.Rpl_Streak_OS_False ?? ''}</p>
                  {
                    data?.Rpl_Streak_OS_False === 'Lain-lain' && (
                      <p>{data?.Rpl_Streak_OS_False_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>PD Jauh</Label>
                  <p>{data?.Rpl_Streak_OS_Pd_Jauh ?? ''}</p>
                  {
                    data?.Rpl_Streak_OS_Pd_Jauh === 'Lain-lain' && (
                      <p>{data?.Rpl_Streak_OS_Pd_Jauh_Text ?? ''}</p>
                    )
                  }
                </div>
                <div>
                  <Label>Adaptasi</Label>
                  <p>{data?.Rpl_Streak_OS_Adaptasi ?? ''}</p>
                  {
                    data?.Rpl_Streak_OS_Adaptasi === 'Lain-lain' && (
                      <p>{data?.Rpl_Streak_OS_Adaptasi_Text ?? ''}</p>
                    )
                  }
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Ocular Motility</td>
            <td style={{ padding: '0px', margin: '0px' }}>
              <Table borderless style={{ width: '100%', margin: 'auto' }}>
                <tr style={{ height: '50px' }}>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '200px', height: '50px', alignItems: 'center', justifyContent: 'center' }} className='p-0' colSpan={2}>
                    <Row className="text-center">
                      <p>{data?.Cover_OD_Cover_1 === 'Lain-lain' ? data?.Cover_OD_Cover_Text_1 : data?.Cover_OD_Cover_1 ?? ''}</p>
                    </Row>
                  </td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '200px', height: '50px', alignItems: 'center', justifyContent: 'center' }} className='p-0' colSpan={2}>
                    <Row className="text-center">
                      <p>{data?.Cover_OD_Cover_2 === 'Lain-lain' ? data?.Cover_OD_Cover_Text_2 : data?.Cover_OD_Cover_2 ?? ''}</p>
                    </Row>
                  </td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderLeft: '2px solid'}}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderLeft: '2px solid'}}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={{ width: '100px', height: '50px', alignItems: 'center', justifyContent: 'center' }} rowSpan={2}>
                    <Row className="">
                      <p>{data?.Cover_OD_Cover_4 === 'Lain-lain' ? data?.Cover_OD_Cover_Text_4 : data?.Cover_OD_Cover_4 ?? ''}</p>
                    </Row>
                  </td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderLeft: '2px solid'}}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderLeft: '2px solid'}}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '100px', height: '50px', alignItems: 'center', justifyContent: 'center' }} rowSpan={2}>
                    <Row style={{width:'150px'}}>
                      <p>{data?.Cover_OD_Cover_3 === 'Lain-lain' ? data?.Cover_OD_Cover_Text_3 : data?.Cover_OD_Cover_3 ?? ''}</p>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid', borderLeft: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid', borderLeft: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid' }}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderLeft: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderLeft: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '85px', height: '50px' }} colSpan={2}>
                    <Row style={{width:'150px'}}>
                      <p>{data?.Cover_OD_Cover_5 === 'Lain-lain' ? data?.Cover_OD_Cover_Text_5 : data?.Cover_OD_Cover_5 ?? ''}</p>
                    </Row>
                  </td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }} colSpan={2}>
                    <Row style={{width:'150px'}}>
                      <p>{data?.Cover_OD_Cover_6 === 'Lain-lain' ? data?.Cover_OD_Cover_Text_6 : data?.Cover_OD_Cover_6 ?? ''}</p>
                    </Row>
                  </td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                </tr>
              </Table>
            </td>
            <td style={{ padding: '0px', margin: '0px' }}>
              <Table borderless style={{ width: '100%', margin: 'auto' }}>
                <tr style={{ height: '50px' }}>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '200px', height: '50px', alignItems: 'center', justifyContent: 'center' }} className='p-0' colSpan={2}>
                    <Row style={{width:'150px'}}>
                      <p>{data?.Cover_OS_Cover_1 === 'Lain-lain' ? data?.Cover_OS_Cover_Text_1 : data?.Cover_OS_Cover_1 ?? ''}</p>
                    </Row>
                  </td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '200px', height: '50px', alignItems: 'center', justifyContent: 'center' }} className='p-0' colSpan={2}>
                    <Row style={{width:'150px'}}>
                      <p>{data?.Cover_OS_Cover_2 === 'Lain-lain' ? data?.Cover_OS_Cover_Text_2 : data?.Cover_OS_Cover_2 ?? ''}</p>
                    </Row>
                  </td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderLeft: '2px solid'}}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderLeft: '2px solid'}}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={{ width: '100px', height: '50px', alignItems: 'center', justifyContent: 'center' }} rowSpan={2}>
                    <Row style={{width:'150px'}}>
                      <p>{data?.Cover_OS_Cover_4 === 'Lain-lain' ? data?.Cover_OS_Cover_Text_4 : data?.Cover_OS_Cover_4 ?? ''}</p>
                    </Row>
                  </td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderLeft: '2px solid'}}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderLeft: '2px solid'}}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '100px', height: '50px', alignItems: 'center', justifyContent: 'center' }} rowSpan={2}>
                    <Row style={{width:'150px'}}>
                      <p>{data?.Cover_OS_Cover_3 === 'Lain-lain' ? data?.Cover_OS_Cover_Text_3 : data?.Cover_OS_Cover_3 ?? ''}</p>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid', borderLeft: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid', borderLeft: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderTop: '2px solid' }}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderLeft: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px', borderLeft: '2px solid' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '85px', height: '50px' }} colSpan={2}>
                    <Row style={{width:'150px'}}>
                      <p>{data?.Cover_OS_Cover_5 === 'Lain-lain' ? data?.Cover_OS_Cover_Text_5 : data?.Cover_OS_Cover_5 ?? ''}</p>
                    </Row>
                  </td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }} colSpan={2}>
                    <Row style={{width:'150px'}}>
                      <p>{data?.Cover_OS_Cover_6 === 'Lain-lain' ? data?.Cover_OS_Cover_Text_6 : data?.Cover_OS_Cover_6 ?? ''}</p>
                    </Row>
                  </td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                  <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
                </tr>
              </Table>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>Cover-Uncover</td>
          </tr>
          {/* <tr>
            <td>Ortho</td>
            <td>
              <div>
                
              </div>
            </td>
            <td>

            </td>
          </tr> */}

          <tr>
            <td>Prisma</td>
            <td>
              <div className="d-flex align-items-center">
                <Label>Without Glasses Near</Label>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <Label>XT</Label>
                  <p>{data?.Prisma_OD_Prisma_Without_Xt_Near ?? ''}</p>
                  {
                    data?.Prisma_OD_Prisma_Without_Xt_Near === 'Lain-lain' && (
                      <p>{data?.Prisma_OD_Prisma_Without_Xt_Near_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>ET</Label>
                  <p>{data?.Prisma_OD_Prisma_Without_Et_Near ?? ''}</p>
                  {
                    data?.Prisma_OD_Prisma_Without_Et_Near === 'Lain-lain' && (
                      <p>{data?.Prisma_OD_Prisma_Without_Et_Near_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>HI</Label>
                  <p>{data?.Prisma_OD_Prisma_Without_Hi_Near ?? ''}</p>
                  {
                    data?.Prisma_OD_Prisma_Without_Hi_Near === 'Lain-lain' && (
                      <p>{data?.Prisma_OD_Prisma_Without_Hi_Near_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>HO</Label>
                  <p>{data?.Prisma_OD_Prisma_Without_Ho_Near ?? ''}</p>
                  {
                    data?.Prisma_OD_Prisma_Without_Ho_Near === 'Lain-lain' && (
                      <p>{data?.Prisma_OD_Prisma_Without_Ho_Near_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
              </div>
              <div className="d-flex align-items-center">
                <Label>Without Glasses Distance</Label>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <Label>XT</Label>
                  <p>{data?.Prisma_OD_Prisma_Without_Xt_Distance ?? ''}</p>
                  {
                    data?.Prisma_OD_Prisma_Without_Xt_Distance === 'Lain-lain' && (
                      <p>{data?.Prisma_OD_Prisma_Without_Xt_Distance_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>ET</Label>
                  <p>{data?.Prisma_OD_Prisma_Without_Et_Distance ?? ''}</p>
                  {
                    data?.Prisma_OD_Prisma_Without_Et_Distance === 'Lain-lain' && (
                      <p>{data?.Prisma_OD_Prisma_Without_Et_Distance_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>HI</Label>
                  <p>{data?.Prisma_OD_Prisma_Without_Hi_Distance ?? ''}</p>
                  {
                    data?.Prisma_OD_Prisma_Without_Hi_Distance === 'Lain-lain' && (
                      <p>{data?.Prisma_OD_Prisma_Without_Hi_Distance_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>HO</Label>
                  <p>{data?.Prisma_OD_Prisma_Without_Ho_Distance ?? ''}</p>
                  {
                    data?.Prisma_OD_Prisma_Without_Ho_Distance === 'Lain-lain' && (
                      <p>{data?.Prisma_OD_Prisma_Without_Ho_Distance_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
              </div>

              <div className="d-flex align-items-center">
                <Label>With Glasses Near</Label>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <Label>XT</Label>
                  <p>{data?.Prisma_OD_Prisma_With_Xt_Near ?? ''}</p>
                  {
                    data?.Prisma_OD_Prisma_With_Xt_Near === 'Lain-lain' && (
                      <p>{data?.Prisma_OD_Prisma_With_Xt_Near_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>ET</Label>
                  <p>{data?.Prisma_OD_Prisma_With_Et_Near ?? ''}</p>
                  {
                    data?.Prisma_OD_Prisma_With_Et_Near === 'Lain-lain' && (
                      <p>{data?.Prisma_OD_Prisma_With_Et_Near_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>HI</Label>
                  <p>{data?.Prisma_OD_Prisma_With_Hi_Near ?? ''}</p>
                  {
                    data?.Prisma_OD_Prisma_With_Hi_Near === 'Lain-lain' && (
                      <p>{data?.Prisma_OD_Prisma_With_Hi_Near_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>HO</Label>
                  <p>{data?.Prisma_OD_Prisma_With_Ho_Near ?? ''}</p>
                  {
                    data?.Prisma_OD_Prisma_With_Ho_Near === 'Lain-lain' && (
                      <p>{data?.Prisma_OD_Prisma_With_Ho_Near_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
              </div>

              <div className="d-flex align-items-center">
                <Label>With Glasses Distance</Label>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <Label>XT</Label>
                  <p>{data?.Prisma_OD_Prisma_With_Xt_Distance ?? ''}</p>
                  {
                    data?.Prisma_OD_Prisma_With_Xt_Distance === 'Lain-lain' && (
                      <p>{data?.Prisma_OD_Prisma_With_Xt_Distance_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>ET</Label>
                  <p>{data?.Prisma_OD_Prisma_With_Et_Distance ?? ''}</p>
                  {
                    data?.Prisma_OD_Prisma_With_Et_Distance === 'Lain-lain' && (
                      <p>{data?.Prisma_OD_Prisma_With_Et_Distance_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>HI</Label>
                  <p>{data?.Prisma_OD_Prisma_With_Hi_Distance ?? ''}</p>
                  {
                    data?.Prisma_OD_Prisma_With_Hi_Distance === 'Lain-lain' && (
                      <p>{data?.Prisma_OD_Prisma_With_Hi_Distance_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>HO</Label>
                  <p>{data?.Prisma_OD_Prisma_With_Ho_Distance ?? ''}</p>
                  {
                    data?.Prisma_OD_Prisma_With_Ho_Distance === 'Lain-lain' && (
                      <p>{data?.Prisma_OD_Prisma_With_Ho_Distance_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Label>Without Glasses Near</Label>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <Label>XT</Label>
                  <p>{data?.Prisma_OS_Prisma_Without_Xt_Near ?? ''}</p>
                  {
                    data?.Prisma_OS_Prisma_Without_Xt_Near === 'Lain-lain' && (
                      <p>{data?.Prisma_OS_Prisma_Without_Xt_Near_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>ET</Label>
                  <p>{data?.Prisma_OS_Prisma_Without_Et_Near ?? ''}</p>
                  {
                    data?.Prisma_OS_Prisma_Without_Et_Near === 'Lain-lain' && (
                      <p>{data?.Prisma_OS_Prisma_Without_Et_Near_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>HI</Label>
                  <p>{data?.Prisma_OS_Prisma_Without_Hi_Near ?? ''}</p>
                  {
                    data?.Prisma_OS_Prisma_Without_Hi_Near === 'Lain-lain' && (
                      <p>{data?.Prisma_OS_Prisma_Without_Hi_Near_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>HO</Label>
                  <p>{data?.Prisma_OS_Prisma_Without_Ho_Near ?? ''}</p>
                  {
                    data?.Prisma_OS_Prisma_Without_Ho_Near === 'Lain-lain' && (
                      <p>{data?.Prisma_OS_Prisma_Without_Ho_Near_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
              </div>
              <div className="d-flex align-items-center">
                <Label>Without Glasses Distance</Label>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <Label>XT</Label>
                  <p>{data?.Prisma_OS_Prisma_Without_Xt_Distance ?? ''}</p>
                  {
                    data?.Prisma_OS_Prisma_Without_Xt_Distance === 'Lain-lain' && (
                      <p>{data?.Prisma_OS_Prisma_Without_Xt_Distance_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>ET</Label>
                  <p>{data?.Prisma_OS_Prisma_Without_Et_Distance ?? ''}</p>
                  {
                    data?.Prisma_OS_Prisma_Without_Et_Distance === 'Lain-lain' && (
                      <p>{data?.Prisma_OS_Prisma_Without_Et_Distance_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>HI</Label>
                  <p>{data?.Prisma_OS_Prisma_Without_Hi_Distance ?? ''}</p>
                  {
                    data?.Prisma_OS_Prisma_Without_Hi_Distance === 'Lain-lain' && (
                      <p>{data?.Prisma_OS_Prisma_Without_Hi_Distance_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>HO</Label>
                  <p>{data?.Prisma_OS_Prisma_Without_Ho_Distance ?? ''}</p>
                  {
                    data?.Prisma_OS_Prisma_Without_Ho_Distance === 'Lain-lain' && (
                      <p>{data?.Prisma_OS_Prisma_Without_Ho_Distance_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
              </div>
              <div className="d-flex align-items-center">
                <Label>With Glasses Near</Label>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <Label>XT</Label>
                  <p>{data?.Prisma_OS_Prisma_With_Xt_Near ?? ''}</p>
                  {
                    data?.Prisma_OS_Prisma_With_Xt_Near === 'Lain-lain' && (
                      <p>{data?.Prisma_OS_Prisma_With_Xt_Near_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>ET</Label>
                  <p>{data?.Prisma_OS_Prisma_With_Et_Near ?? ''}</p>
                  {
                    data?.Prisma_OS_Prisma_With_Et_Near === 'Lain-lain' && (
                      <p>{data?.Prisma_OS_Prisma_With_Et_Near_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>HI</Label>
                  <p>{data?.Prisma_OS_Prisma_With_Hi_Near ?? ''}</p>
                  {
                    data?.Prisma_OS_Prisma_With_Hi_Near === 'Lain-lain' && (
                      <p>{data?.Prisma_OS_Prisma_With_Hi_Near_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>HO</Label>
                  <p>{data?.Prisma_OS_Prisma_With_Ho_Near ?? ''}</p>
                  {
                    data?.Prisma_OS_Prisma_With_Ho_Near === 'Lain-lain' && (
                      <p>{data?.Prisma_OS_Prisma_With_Ho_Near_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
              </div>
              <div className="d-flex align-items-center">
                <Label>With Glasses Distance</Label>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <Label>XT</Label>
                  <p>{data?.Prisma_OS_Prisma_With_Xt_Distance ?? ''}</p>
                  {
                    data?.Prisma_OS_Prisma_With_Xt_Distance === 'Lain-lain' && (
                      <p>{data?.Prisma_OS_Prisma_With_Xt_Distance_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>ET</Label>
                  <p>{data?.Prisma_OS_Prisma_With_Et_Distance ?? ''}</p>
                  {
                    data?.Prisma_OS_Prisma_With_Et_Distance === 'Lain-lain' && (
                      <p>{data?.Prisma_OS_Prisma_With_Et_Distance_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>HI</Label>
                  <p>{data?.Prisma_OS_Prisma_With_Hi_Distance ?? ''}</p>
                  {
                    data?.Prisma_OS_Prisma_With_Hi_Distance === 'Lain-lain' && (
                      <p>{data?.Prisma_OS_Prisma_With_Hi_Distance_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
                <div className="me-1">
                  <Label>HO</Label>
                  <p>{data?.Prisma_OS_Prisma_With_Ho_Distance ?? ''}</p>
                  {
                    data?.Prisma_OS_Prisma_With_Ho_Distance === 'Lain-lain' && (
                      <p>{data?.Prisma_OS_Prisma_With_Ho_Distance_Lain_Text ?? ''}</p>
                    )
                  }
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Randot Stereoskopis</td>
            <td>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <Row>
                    <Col>
                      <Label>Circles</Label>
                    </Col>
                    <Col>
                      <p>{data?.Randot_OD_Circles ?? ''}</p>
                    </Col>
                    <Col>
                      <Label style={{width:'100px'}}>Sec of Arc</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Label>Randot Form</Label>
                    </Col>
                    <Col>
                      <p>{data?.Randot_OD_Randot_Form ?? ''}</p>
                    </Col>
                    <Col>
                      <Label style={{width:'100px'}}>Sec of Arc</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Label>Animal</Label>
                    </Col>
                    <Col>
                      <p>{data?.Randot_OD_Animal ?? ''}</p>
                    </Col>
                    <Col>
                      <Label style={{width:'100px'}}>Sec of Arc</Label>
                    </Col>
                  </Row>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <Row>
                    <Col>
                      <Label>Circles</Label>
                    </Col>
                    <Col>
                      <p>{data?.Randot_OS_Circles ?? ''}</p>
                    </Col>
                    <Col>
                      <Label style={{width:'100px'}}>Sec of Arc</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Label>Randot Form</Label>
                    </Col>
                    <Col>
                      <p>{data?.Randot_OS_Randot_Form ?? ''}</p>
                    </Col>
                    <Col>
                      <Label style={{width:'100px'}}>Sec of Arc</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Label>Animal</Label>
                    </Col>
                    <Col>
                      <p>{data?.Randot_OS_Animal ?? ''}</p>
                    </Col>
                    <Col>
                      <Label style={{width:'100px'}}>Sec of Arc</Label>
                    </Col>
                  </Row>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>OKN Drum</td>
            <td colSpan={3}><p>{data?.Okn_ODS_Okn ?? ''}</p></td>
          </tr>
          <tr>
            <td>RAF Ruler</td>
            <td colSpan={3}>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <Row>
                    <Col>
                      <p>{data?.Raf_ODS_Raf ?? ''}</p>
                    </Col>
                    <Col>
                      <Label>CM</Label>
                    </Col>
                  </Row>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td><b>TNO stereoskopis</b></td>
            <td colSpan={2} >
              <Table borderless style={{ width: '100%' }}>
                <tr>
                  <td style={{  width: '3%' }} ><b>I</b></td>
                  <td style={{  width: '97%' }}>
                  <p>{data?.TNO_Stereoskopis_ODS_1 ?? ''}</p>
                  </td>
                </tr>
                <tr>
                  <td ><b>II</b></td>
                  <td >
                    <p>{data?.TNO_Stereoskopis_ODS_2 ?? ''}</p>
                  </td>
                </tr>
                <tr>
                  <td ><b>III</b></td>
                  <td >
                   <p>{data?.TNO_Stereoskopis_ODS_3 ?? ''}</p>
                  </td>
                </tr>
                <tr>
                  <td ><b>IV</b></td>
                  <td >
                   <p>{data?.TNO_Stereoskopis_ODS_4 ?? ''}</p>
                  </td>
                </tr>
                <tr>
                  <td ><b>V</b></td>
                  <td >
                    <p>{data?.TNO_Stereoskopis_ODS_5 ?? ''}</p>
                  </td>
                </tr>
              </Table>
            </td>
          </tr>
          <tr>
            <td>Goniometer</td>
            <td colSpan={2}>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <p>{data?.Goniometer_ODS_Goniometer ?? ''}</p>
                </div>
              </div>
              <Input
                type='checkbox'
                name='pediatric.Goniometer_ODS_Right_Check'
                defaultChecked={!!(data && data.Goniometer_ODS_Right_Check && data.Goniometer_ODS_Right_Check === '1')}
              /><b>Right   </b>
              <Input
                type='checkbox'
                name='pediatric.Goniometer_ODS_Left_Check'
                defaultChecked={!!(data && data.Goniometer_ODS_Left_Check && data.Goniometer_ODS_Left_Check === '1')}
              /><b>Left</b>
            </td>
          </tr>
          <tr>
            <td>Near Vision</td>
            <td>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <p>{data?.Nearvision_OD_Select ?? ''}</p>
                  {
                    data?.Nearvision_OD_Select === 'Lain-lain' && (
                      <p>{data?.Nearvision_OD_Nearvision ?? ''}</p>
                    )
                  }
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <p>{data?.Nearvision_OS_Select ?? ''}</p>
                  {
                    data?.Nearvision_OS_Select === 'Lain-lain' && (
                      <p>{data?.Nearvision_OS_Nearvision ?? ''}</p>
                    )
                  }
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Ptosis FIP</td>
            <td>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <p>{data?.Ptosis_OD_FIP ?? ''}</p>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <p>{data?.Ptosis_OS_FIP ?? ''}</p>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Ptosis MRD</td>
            <td>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <p>{data?.Ptosis_OD_MRD ?? ''}</p>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <p>{data?.Ptosis_OS_MRD ?? ''}</p>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Ptosis LA</td>
            <td>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <p>{data?.Ptosis_OD_LA ?? ''}</p>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <div className="me-1">
                  <p>{data?.Ptosis_OS_LA ?? ''}</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </Fragment>
  )
}

export default PediatricView;
