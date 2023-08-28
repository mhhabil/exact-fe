import { Col, Label } from "reactstrap";
import { INursingEarlyWarning } from "../models/nursing-early-warning-scoring.model"


const NursingEarlyWarningScoringDetail = (props: { item: INursingEarlyWarning }) => {
  const {item} = props;
  return (
    <div className="form-horizontal">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-center">
            <Col md='2' className="text-align-right">
              <Label>Tanggal Periksa</Label>
            </Col>
            <Col md='2'>
              <Label>{item.Waktu_Pengkajian}</Label>
            </Col>
          </div>
          {
            item.Tipe_Ews && item.Tipe_Ews === '1' && (
              <>
                <div className="d-flex justify-content-center">
                  <Col md='2'><Label className="control-Label col-md-5">RR (x/menit)</Label></Col>
                  <Col md='2'><Label>{item.Rr}</Label></Col>
                </div>
                <div className="d-flex justify-content-center">
                  <Col md='2'><Label className="control-Label col-md-5">HR (x/menit)</Label></Col>
                  <Col md='2'><Label>{item.Nadi}</Label></Col>
                </div>
                <div className="d-flex justify-content-center">
                  <Col md='2'><Label className="control-Label col-md-5">TD</Label></Col>
                  <Col md='2'>
                    {
                      item.Td && item.Td.includes('/') ? (
                        <Label>{item.Td}</Label>
                      ) : (
                        <Label>{`${item.Td}/${item.Td_1}`}</Label>
                      )
                    }
                  </Col>
                </div>
                <div className="d-flex justify-content-center">
                  <Col md='2'><Label className="control-Label col-md-5">T</Label></Col>
                  <Col md='2'><Label>{item.Suhu_Tubuh}</Label></Col>
                </div>
                <div className="d-flex justify-content-center">
                  <Col md='2'><Label className="control-Label col-md-5">Tk. Kesadaran</Label></Col>
                  <Col md='2'><Label>{item.Tingkat_Kesadaran}</Label></Col>
                </div>
                <div className="d-flex justify-content-center">
                  <Col md='2'><Label className="control-Label col-md-5">Total Skor</Label></Col>
                  <Col md='2'><Label>{item.Total_Skor}</Label></Col>
                </div>
                <div className="d-flex justify-content-center">
                  <Col md='2'><Label className="control-Label col-md-5">Keterangan</Label></Col>
                  <Col md='2'><Label>{item.Keterangan}</Label></Col>
                </div>
              </>
            )
          }
          {
            item.Tipe_Ews && item.Tipe_Ews === '2' && (
              <>
                <div className="d-flex justify-content-center">
                  <Col md='2'><Label className="control-Label col-md-5">Perilaku</Label></Col>
                  <Col md='2'><Label>{item.Perilaku}</Label></Col>
                </div>
                <div className="d-flex justify-content-center">
                  <Col md='2'><Label className="control-Label col-md-5">Kardiovaskular</Label></Col>
                  <Col md='2'><Label>{item.Kardiovaskular}</Label></Col>
                </div>
                <div className="d-flex justify-content-center">
                  <Col md='2'><Label className="control-Label col-md-5">Respirasi</Label></Col>
                  <Col md='2'><Label>{item.Rr}</Label></Col>
                </div>
                <div className="d-flex justify-content-center">
                  <Col md='2'><Label className="control-Label col-md-5">Total Skor</Label></Col>
                  <Col md='2'><Label>{item.Total_Skor}</Label></Col>
                </div>
                <div className="d-flex justify-content-center">
                  <Col md='2'><Label className="control-Label col-md-5">Keterangan</Label></Col>
                  <Col md='2'><Label>{item.Keterangan}</Label></Col>
                </div>
              </>
            )
          }
        </div>
      </div>
    </div>)
}

export default NursingEarlyWarningScoringDetail
