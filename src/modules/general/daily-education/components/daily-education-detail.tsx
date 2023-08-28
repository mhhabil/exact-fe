import { DailyEducationItemModel } from '@modules/general/daily-education/models/daily-education.model';
import { Fragment } from 'react';
import { Table } from 'reactstrap';
import Image from 'next/image';

const DailyEducationDetail = (props: { item: DailyEducationItemModel | undefined }) => {
  const { item } = props;

  if (!item) {
    return null;
  }

  return (
    <Fragment>
      <Table className="mb-2">
        <tbody>
          <tr>
            <td className="fw-bolder">Waktu</td>
            <td>{ item.Waktu }</td>
          </tr>
          <tr>
            <td className="fw-bolder">Uraian</td>
            <td>{ item.Uraian }</td>
          </tr>
          <tr>
            <td className="fw-bolder">Pendengar</td>
            <td>{ item.Pendengar }</td>
          </tr>
          <tr>
            <td className="fw-bolder">Tanda Tangan Pendengar</td>
            <td>{
              item.Tanda_Tangan && (
                <Image src={item.Tanda_Tangan} height="120px" width="120px" />
              )
            }</td>
          </tr>
          <tr>
            <td className="fw-bolder">Pemberi Edukasi</td>
            <td>{ item.Nama_Pemberi_Edukasi }</td>
          </tr>
          <tr>
            <td className="fw-bolder">Tanda Tangan Pemberi Edukasi</td>
            <td>{
              item.TTD_Pemberi_Edukasi && (
                <Image src={item.TTD_Pemberi_Edukasi} height="120px" width="120px" />
              )
            }</td>
          </tr>
          <tr>
            <td className="fw-bolder">Unit</td>
            <td>{ item.Unit }</td>
          </tr>
        </tbody>
      </Table>
    </Fragment>
  )
}

export default DailyEducationDetail;
