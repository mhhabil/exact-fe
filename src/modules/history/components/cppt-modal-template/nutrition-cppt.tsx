import Image from 'next/image';
import { Label } from 'reactstrap';
import { Record } from '@modules/history/models/history-cppt.model';

const NutritionCppt = (props: { record: Record }) => {
  const { record } = props;

  return (
    <>
      <td style={{ borderRight: '1px solid', verticalAlign: 'middle' }}>
          Gizi
      </td>
      <td style={{ borderRight: '1px solid' }}>
        A: {`${record.Data_A}`} <br/>
        D: {`${record.Data_D}`} <br/>
        I: {`${record.Data_I}`} <br/>
        M: {`${record.Data_M}`} <br/>
        E: {`${record.Data_E}`} <br/>
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

export default NutritionCppt;
