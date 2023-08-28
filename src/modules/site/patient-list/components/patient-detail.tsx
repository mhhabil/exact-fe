import { Button, Table } from 'reactstrap';
import Link from 'next/link';
import { useAppSelector } from '@hooks/useAppSelector';
import { DateTimeConverter } from '@src/shared/datetime-converter';

const PatientDetail = () => {

  const { treatment } = useAppSelector(state => state.patient);

  return (
    <div>
      <h4 className="ml-2 fw-bolder fs-4">Pasien yang dipilih</h4>
      {
        !treatment && (
          <div>Belum ada pasien yang dipilih</div>
        )
      }
      {
        treatment && (
          <Table>
            <tbody>
              <tr style={{ fontSize: '10pt' }}>
                <td className="fw-bolder">Nomor MR</td>
                <td>{ treatment.No_MR }</td>
              </tr>
              <tr style={{ fontSize: '10pt' }}>
                <td className="fw-bolder">Nama Pasien</td>
                <td>{ treatment.Pasien.Nama }</td>
              </tr>
              <tr style={{ fontSize: '10pt' }}>
                <td className="fw-bolder">Nomor Telepon</td>
                <td>{ treatment.Pasien.No_Telepon }</td>
              </tr>
              <tr style={{ fontSize: '10pt' }}>
                <td className="fw-bolder">Alamat</td>
                <td>{ treatment.Pasien.Alamat }</td>
              </tr>
              <tr style={{ fontSize: '10pt' }}>
                <td className="fw-bolder">Tipe Pasien</td>
                <td>{ treatment.Tipe_Pasien }</td>
              </tr>
              <tr style={{ fontSize: '10pt' }}>
                <td className="fw-bolder">Jenis Pelayanan</td>
                <td>{ treatment.Jenis_Pelayanan && treatment.Jenis_Pelayanan === 'RawatJalan' ? 'Rawat Jalan' : 'Rawat Inap' }</td>
              </tr>
              <tr style={{ fontSize: '10pt' }}>
                <td className="fw-bolder">Tanggal Berobat</td>
                {/* <td>{ treatment.Tgl_Berobat }</td> */}
                <td>{ `${DateTimeConverter.convertToNormalDate(treatment?.Tgl_Berobat)}` }</td>
              </tr>
              <tr style={{ fontSize: '10pt' }}>
                <td className="fw-bolder">Agama</td>
                <td>{ treatment.Pasien.Agama }</td>
              </tr>
              <tr style={{ fontSize: '10pt' }}>
                <td className="fw-bolder">Asal Rujukan</td>
                <td>{ treatment.Asal_Rujukan }</td>
              </tr>
              <tr style={{ fontSize: '10pt' }}>
                <td className="fw-bolder">Nama Dokter</td>
                <td>{ treatment.Nama_Dokter }</td>
              </tr>
            </tbody>
          </Table>
        )
      }
    </div>
  );
}

export default PatientDetail;
