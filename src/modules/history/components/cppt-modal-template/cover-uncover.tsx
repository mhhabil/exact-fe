import { Pediatric } from "../../models/history-cppt.model";
import { Table } from "reactstrap";

const CoverUncover = (props: { pediatric: Pediatric }) => {
  const { pediatric } = props;
  return (
    <tr>
      <td>
        <b>{`Cover Uncover & Ocular Motility`}</b>
      </td>
      <td style={{ padding: '0px', margin: '0px' }}>
        <Table borderless style={{ width: '100%', margin: 'auto' }}>
          <tr style={{ height: '50px' }}>
            <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
            <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
            <td style={{ width: '200px', height: '50px', textAlign: "center" }} colSpan={2}>
              { (pediatric && pediatric.Cover_OD_Cover_1) ? pediatric.Cover_OD_Cover_1 : '' }
            </td>
            <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
            <td style={{ width: '200px', height: '50px', textAlign: "center" }} colSpan={2}>
              { (pediatric && pediatric.Cover_OD_Cover_2) ? pediatric.Cover_OD_Cover_2 : '' }
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
            <td style={{ width: '100px', height: '50px', alignItems: 'center', justifyContent: 'center', textAlign: "right" }} rowSpan={2}>
              { (pediatric && pediatric.Cover_OD_Cover_4) ? pediatric.Cover_OD_Cover_4 : '' }
            </td>
            <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
            <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
            <td style={{ width: '50px', height: '50px', borderLeft: '2px solid'}}>&nbsp;</td>
            <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
            <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
            <td style={{ width: '50px', height: '50px', borderLeft: '2px solid'}}>&nbsp;</td>
            <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
            <td style={{ width: '100px', height: '50px', alignItems: 'center', justifyContent: 'center' }} rowSpan={2}>
              { (pediatric && pediatric.Cover_OD_Cover_3) ? pediatric.Cover_OD_Cover_3 : '' }
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
            <td style={{ width: '85px', height: '50px', textAlign: "center" }} colSpan={2}>
              { (pediatric && pediatric.Cover_OD_Cover_5) ? pediatric.Cover_OD_Cover_5 : '' }
            </td>
            <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
            <td style={{ width: '50px', height: '50px', textAlign: "center" }} colSpan={2}>
              { (pediatric && pediatric.Cover_OD_Cover_6) ? pediatric.Cover_OD_Cover_6 : '' }
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
            <td style={{ width: '200px', height: '50px', textAlign: "center" }} colSpan={2}>
              { (pediatric && pediatric.Cover_OS_Cover_1) ? pediatric.Cover_OS_Cover_1 : '' }
            </td>
            <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
            <td style={{ width: '200px', height: '50px', textAlign: "center" }} colSpan={2}>
              { (pediatric && pediatric.Cover_OS_Cover_2) ? pediatric.Cover_OS_Cover_2 : '' }
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
            <td style={{ width: '100px', height: '50px', alignItems: 'center', justifyContent: 'center', textAlign: "right" }} rowSpan={2}>
              { (pediatric && pediatric.Cover_OS_Cover_4) ? pediatric.Cover_OS_Cover_4 : '' }
            </td>
            <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
            <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
            <td style={{ width: '50px', height: '50px', borderLeft: '2px solid'}}>&nbsp;</td>
            <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
            <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
            <td style={{ width: '50px', height: '50px', borderLeft: '2px solid'}}>&nbsp;</td>
            <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
            <td style={{ width: '100px', height: '50px', alignItems: 'center', justifyContent: 'center' }} rowSpan={2}>
              { (pediatric && pediatric.Cover_OS_Cover_3) ? pediatric.Cover_OS_Cover_3 : '' }
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
            <td style={{ width: '85px', height: '50px', textAlign: "center" }} colSpan={2}>
              { (pediatric && pediatric.Cover_OS_Cover_5) ? pediatric.Cover_OS_Cover_5 : '' }
            </td>
            <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
            <td style={{ width: '50px', height: '50px', textAlign: "center" }} colSpan={2}>
              { (pediatric && pediatric.Cover_OS_Cover_6) ? pediatric.Cover_OS_Cover_6 : '' }
            </td>
            <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
            <td style={{ width: '50px', height: '50px' }}>&nbsp;</td>
          </tr>
        </Table>
      </td>
    </tr>
  )
}

export default CoverUncover;
