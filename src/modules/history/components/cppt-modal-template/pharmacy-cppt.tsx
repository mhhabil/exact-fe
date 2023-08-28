import Image from 'next/image';
import { Label } from 'reactstrap';
import { Record } from '@modules/history/models/history-cppt.model';

const PharmacyCppt = (props: { record: Record }) => {
  const { record } = props;

  return (
    <>
      <td style={{ borderRight: '1px solid', verticalAlign: 'middle' }}>
          Farmasi
      </td>
      <td style={{ borderRight: '1px solid' }}>
          S: {record.Data_S} <br/>
          O: {record.Data_O} <br/>
          A: Masalah Terkait Obat: {`${(record.Masalah_Obat_Radio && record.Masalah_Obat_Radio === 1) ? 'Ya,' : 'Tidak'} ${(record.Masalah_Obat_Teks) ? record.Masalah_Obat_Teks : ''}`} <br/>
          Efek Samping Obat: {(record.Efek_Samping_Obat) ? record.Efek_Samping_Obat : ''} <br/>
          P: Monitor Terapi Lanjutan: {(record.Monitor_Terapi) ? record.Monitor_Terapi : ''} <br/>
          Monitor Efek Samping Obat & Edukasi Interferensi: {(record.Monitor_Efek_Samping) ? record.Monitor_Efek_Samping : ''} <br/>
        {
          record.Is_Form_Dokter && (
            <>
              <div style={{ textAlign: 'center' }}>
                {
                  record.TTD_Dokter_Pengkaji && record.TTD_Dokter_Pengkaji !== '' && (
                    <Image className="img-thumbnail" src={record.TTD_Dokter_Pengkaji} height="100rem" width="100rem" objectFit="contain" />
                  )
                }
              </div>
              <div style={{ textAlign: 'center' }}>
                <Label>{`(${record.Nama_Dokter_Pengkaji})`}</Label>
              </div>
            </>
          )
        }
        {
          !record.Is_Form_Dokter && (
            <>
              <div style={{ textAlign: 'center' }}>
                {
                  record.TTD_Perawat_Cppt && record.TTD_Perawat_Cppt !== '' && (
                    <Image className="img-thumbnail" src={record.TTD_Perawat_Cppt} height="100rem" width="100rem" objectFit="contain" />
                  )
                }
              </div>
              <div style={{ textAlign: 'center' }}>
                <Label>{`(${record.Nama_Perawat_Cppt})`}</Label>
              </div>
            </>
          )
        }
      </td>
    </>
  )
}

export default PharmacyCppt;
