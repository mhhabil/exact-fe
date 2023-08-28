import { Col, Label, Row } from "reactstrap";
import PreliminaryStudyDetail from "@src/modules/ro/preliminary-study/components/preliminary-study-detail";

const DataO = (props: { cpptData: any }) => {
  const { cpptData } = props;
  if (cpptData.Unit && cpptData.Unit === 'RO') {
    if (cpptData.Cmb_Data_O && cpptData.Cmb_Data_O === 1 && cpptData.Data_O_Json) {
      const preliminaryStudy = {
        form: cpptData.Data_O_Json,
      }
      return (
        <Row className="mb-1">
          <Col md="12">
            <PreliminaryStudyDetail preliminaryStudy={preliminaryStudy} />
          </Col>
        </Row>
      )
    }
    if (cpptData.Cmb_Data_O && cpptData.Cmb_Data_O === 2 && cpptData.Data_O) {
      return <pre style={{ width: '300px', backgroundColor: 'white' }}>{cpptData.Data_O}</pre>;
    }
  } else if (cpptData.Unit && (cpptData.Unit === 'RawatJalan' || cpptData.Unit === 'RawatInap') && cpptData.Data_O) {
    if (cpptData.Is_Form_Dokter) {
      return <pre style={{ width: '300px', backgroundColor: 'white' }}>{cpptData.Data_O}</pre>
    } else {
      return <pre style={{ width: '300px', backgroundColor: 'white' }}>{`${cpptData.Data_O}\nKGD: ${cpptData.KGD} mg/dl\nTD: ${cpptData.TD} mmHg`}</pre>
    }
  } else if (cpptData.Unit && cpptData.Unit === 'OK' && cpptData.Data_O) {
    return <pre style={{ width: '300px', backgroundColor: 'white' }}>{cpptData.Data_O}</pre>
  }

  return <pre style={{ width: '300px', backgroundColor: 'white' }}>{cpptData.Data_O}</pre>;

}

export default DataO;
