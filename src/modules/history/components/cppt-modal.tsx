import { Col, Form, Input, Label, Modal, ModalBody, ModalHeader, Row, Table } from "reactstrap";
import { HistoryCPPTModel, Record } from "../models/history-cppt.model";
import { NutritionCppt, OutpatientCppt, PharmacyCppt } from "./cppt-modal-template";
import Image from 'next/image'
import RoPreliminaryStudyView from "@modules/outpatient/doctor-preliminary-study/components/ro-preliminary-study-view";
import { useState } from "react";

const CpptModal = (props: { data: HistoryCPPTModel | undefined, isOpen: boolean, onClose: any }) => {
  const { data, isOpen, onClose } = props;

  return (
    <Modal
      isOpen={isOpen}
      className="modal-dialog modal-fullscreen"
    >
      <ModalHeader
        className='rounded'
        toggle={() => onClose()}
      >
        {`${data?.pasien?.Nama} - ${data?.pasien?.No_MR}`}
      </ModalHeader>
      <ModalBody className='rounded'>
        <Table style={{ border: 'solid 3px' }}>
          <thead>
            <tr style={{ height: '70px' }}>
              <td className="text-center" style={{ width: '30%', border: 'solid 3px', verticalAlign: 'middle' }}>
                CATATAN PERKEMBANGAN PASIEN TERINTEGRASI
              </td>
              <td style={{ verticalAlign: 'middle' }}>
                No.RM <br/>
                Nama <br/>
                Tgl. Lahir/Umur
              </td>
              <td>
                {`: ${data?.pasien.No_MR}`} <br/>
                {`: ${data?.pasien.Nama}`} <br/>
                {`: ${data?.pasien.Tgl_Lahir}/${data?.pasien.Umur}`}
              </td>
              <td className="text-end">
                {`(${data?.pasien.Jenis_Kelamin})`}
              </td>
            </tr>
          </thead>
        </Table>
        <Table className="mt-2" style={{ border: '1px solid' }}>
          <thead>
            <tr>
              <td style={{ width: '2%', verticalAlign: 'middle', borderRight: '1px solid' }}>
                Tgl/Jam
              </td>
              <td style={{ width: '5%', verticalAlign: 'middle', borderRight: '1px solid' }}>
                {`Profesional Pemberi Asuhan (PPA)`}
              </td>
              <td style={{ width: '57%', verticalAlign: 'middle', borderRight: '1px solid' }} className='text-center'>
                Hasil Asesmen Pasien dan Pemberian Pelayanan <br/>
                <p style={{ fontSize: '7pt' }}>Tulis dengan format SOAP/ADIME, disertai sasaran, Tulis nama, beri paraf pada akhir catatan</p>
              </td>
              <td style={{ width: '18%', verticalAlign: 'middle', borderRight: '1px solid' }} className='text-center'>
                Instruksi PPA termasuk pasca bedah <br/>
                <p style={{ fontSize: '7pt' }}>{`(Instruksi ditulis dengan rinci dan jelas)`}</p>
              </td>
              <td style={{ width: '18%', verticalAlign: 'middle' }} className='text-center'>
                Review & Verifikasi DPJP <br/>
                <p style={{ fontSize: '7pt' }}>{`(Tulis nama, beri paraf, tgl, jam) DPJP harus membaca/mereview seluruh rencana Asuhan`}</p>
              </td>
            </tr>
            {
              data && data.records && data.records.map((record: Record, key: number) => (
                <tr key={key} style={{ fontSize: '10pt' }}>
                  <td style={{ borderRight: '1px solid', verticalAlign: 'middle' }}>
                    <Label>
                      {record && record.Waktu}
                    </Label>
                  </td>
                  {
                    record && record.Unit && record.Unit === 'Gizi' && (
                      <NutritionCppt record={record}/>
                    )
                  }
                  {
                    record && record.Unit && record.Unit === 'RawatJalan' && (
                      <OutpatientCppt record={record}/>
                    )
                  }
                  {
                    record && record.Unit && record.Unit === 'Farmasi' && (
                      <PharmacyCppt record={record}/>
                    )
                  }
                  <td style={{ borderRight: '1px solid' }}>

                  </td>
                  <td>

                  </td>
                </tr>
              ))
            }
          </thead>
        </Table>
      </ModalBody>
    </Modal>
  )
}

export default CpptModal;
