import { Button, Col, Input, Row, Table } from 'reactstrap';
import { ITreatmentNumber, TreatmentNumber } from '@src/modules/outpatient/pupil-oct-result/models/pupil-oct-result.model';
import { Link, Upload } from 'react-feather';
import getConfig from 'next/config';
import { useState } from 'react';

const ToolInspection = (props: { data: TreatmentNumber | undefined, name: string, register: any, errors: any }) => {
  const { publicRuntimeConfig } = getConfig();
  const { data, name, register, errors } = props;
  return (
    <Table style={{ width: '100%' }}>
      <tr>
        <td style={{ width: '70%', textAlign: 'right' }}><b>No Berobat</b></td>
        <td style={{ width: '30%' }}>
          <Input
            type="text"
            name='list_treatment'
            style={{ width: '500px', color: '#303030'}}
            value={`${(data && data.ID_Berobat) ? data.ID_Berobat : ''} (${(data && data.Dokter_Nama) ? data.Dokter_Nama : ''}, ${(data && data.Waktu_Visit) ? data.Waktu_Visit : ''})`}
            innerRef={register({ required: true })}
            invalid={errors[`${name}`] && true}
            readOnly
          />
        </td>
      </tr>
      <tr>
        <td colSpan={2} style={{ textAlign: 'center' }}>
          <div>
            <b>Belum ada gambar hasil alat pemeriksaan yang di upload</b>
          </div>
          <div>
            {/* <Button color='success'>
              <Upload style={{ marginRight: '5px' }}/>
              <span className="align-middle ml-50">Upload</span>
            </Button> */}
            <a color='success' href={`${publicRuntimeConfig.env.baseUrl}/diagnostik/hasil-pemeriksaan-alat`}>
              <Button className='me-1' color='success' type='button'>
                <Upload style={{ marginRight: '5px' }}/>
                      Upload
              </Button>
            </a>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <b>Gallery Hasil Pemeriksaan Alat OCT</b>
        </td>
      </tr>
      <tr>
        <td>
          {/* <Link href={`${publicRuntimeConfig.env.baseUrl}/ro/pengkajian-awal`}></Link> */}
          <a>Tampilkan semua hasil pemeriksaan di PACS Viewer</a>
        </td>
      </tr>
    </Table>
  )
}

export default ToolInspection;
