import { Button, Row, Table, Label } from "reactstrap";
import { Download, Eye } from "react-feather";
import { IRecord, PDFDashboard } from "../models/pdf-dashboard.model";
import { fetchPDFDashboard, handleFilter } from "../stores/pdf-dashboard.store";
import AppPagination from "@src/shared/pagination/components";
import { PDFDashFilter } from "../requests";
import PDFTableLimit from "./pdf-dashboard-table-limit";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";
import { useEffect } from "react";
import { PDFDashboardService} from '../services';
import { DateTimeConverter } from "@src/shared/datetime-converter";


const PDFDashboardTable = (props: { data: PDFDashboard }) => {
  const { data } = props;
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector(state => state.pdfDashboard);


  const handlePrintSep = (row: any) => {
    const params = {emr_id: row.EMR_ID, form_name: row.Form_Name, src_url:row.SignURL };
    PDFDashboardService().printSep(params).then((resp) => {
      const { data } = resp.data;
      window.open(data.signUrl, '_blank');
    });
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <Row>
        <PDFTableLimit/>
      </Row>
      <Row>
        <Table responsive>
          <thead>
            <tr>
              <th>Kode Form</th>
              <th>Versi</th>
              <th>Tanggal Berobat</th>
              <th>Tanggal Dibuat</th>
              <th>Dibuat Oleh</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data && data.records.map((pdf: IRecord, key) => {
              return (
                <tr key={key}>
                  <td>{pdf.Form_Name}</td>
                  <td>{pdf.Version}</td>
                  <td>{ `${DateTimeConverter.convertToNormalDate(pdf.Visit_Date)}` }</td>
                  <td>{ `${DateTimeConverter.convertToDateTimeSecond(pdf.Created_At)}` }</td>
                  <td>{pdf.Created_By_Name}</td>
                  <td className="align-items-center">
                    <div className="d-flex align-items-center">
                      <a href={pdf.SignURL} target="_blank" rel="noreferrer">
                        <Button color="primary" size="sm">
                          <Eye
                            size={15} />
                        </Button>
                      </a>

                      <a href={pdf.SignURL} download>
                        <Button color="warning" size="sm" className="ms-1">
                          <Download
                            size={15} />
                        </Button>
                      </a>

                      <Button  color="danger" size="sm" className="ms-1" type="button" onClick={() => handlePrintSep(pdf)}>
                        <Label style={{fontSize: '8pt'}}> SEP </Label>
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
      <Row>
        <AppPagination
          currentPage={data.currentPage}
          totalPages={data.totalPage}
          itemsPerPage={filter.limit}
          totalItems={data.total}
          onChangePage={
            (page: number) => {
              dispatch(handleFilter(PDFDashFilter.createFromJson({ ...filter, offset: ((+page * +filter.limit) - +(filter.limit)) })));
            }
          } />
      </Row>
    </>
  );
}

export default PDFDashboardTable;
