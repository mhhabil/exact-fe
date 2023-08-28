import { Button, Label, Modal, ModalBody, ModalHeader, Table } from "reactstrap";
import { Edit, File, FilePlus, Plus, Search, Trash } from "react-feather";
import { Fragment, useEffect, useState } from "react";
import { IDrugAdmin, IRecordsGrouped, IRecordsOfMedicationOnTimeFormModel } from "../models/records-of-medication-on-time.model";
import { fetchRecordsOfMedicationOnTime, fetchRecordsOfMedicationOnTimePdf, handlePdf } from "../stores/records-of-medication-on-time.store";
import { AppRequest } from "@src/shared/request";
import DeleteModal from "@src/shared/modal/components/DeleteModal";
import { FindPdfRequest } from "@src/shared/pdf";
import Image from 'next/image';
import { PdfCPOTWRequest } from "../requests/update-records-of-medication-on-time.request";
import PharmacistValidateForm from "./pharmacist-validate-form";
import RecordsOfMedicationModal from "./records-of-medication-modal";
import { RecordsOfMedicationOnTimeService } from "../services";
import { useAppDispatch } from "@src/utility/hooks/useAppDispatch";
import { useAppSelector } from "@src/utility/hooks/useAppSelector";

const RecordsOfMedicationTable = (props: { data: Array<IRecordsOfMedicationOnTimeFormModel>, grouped: Array<IRecordsGrouped> }) => {
  const { data, grouped } = props;
  const { treatment } = useAppSelector(state => state.patient);
  const { pdf } = useAppSelector(state => state.recordsOfMedicationOnTime);
  const { patientDetail } = useAppSelector(state => state.patientDetail)
  const dispatch = useAppDispatch();

  const [createNew, setCreateNew] = useState<any>(undefined)
  const [editRow, setEditRow] = useState<any>(undefined);
  const [deleteRow, setDeleteRow] = useState<any>(undefined);
  const [isValidateOpen, setIsValidateOpen] = useState<boolean>(false);
  const [pdfData, setPdfData] = useState<any>(undefined);

  useEffect(() => {
    if (treatment) {
      dispatch(fetchRecordsOfMedicationOnTimePdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'farmasi_cpotw' })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf]);

  const getMedsString = (meds: Array<IDrugAdmin>) => {
    const string = meds.map((med) => {
      return med.Nama;
    });

    return string.join('\n');
  }

  const handleDeleteRow = (row: any) => {
    if (!treatment) {
      return;
    }
    const appRequest = AppRequest.createFromStore(treatment);
    const params = {emr_id: appRequest.emr_id, id: row.ID};
    RecordsOfMedicationOnTimeService()
      .delete(params)
      .then(() => {
        dispatch(fetchRecordsOfMedicationOnTime(appRequest));
        setDeleteRow(undefined);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  const handleGeneratePdf = () => {
    if (!treatment) {
      return;
    }
    dispatch(handlePdf(undefined));
    const appRequest = AppRequest.createFromStore(treatment);
    const params = PdfCPOTWRequest.createFromJson({ alergi: patientDetail?.Pengkajian_Keperawatan?.Alergi ?? '', rpt: patientDetail?.Pengkajian_Keperawatan?.RPT ?? '', rpo: patientDetail?.Pengkajian_Keperawatan?.RPO, ...appRequest })
    RecordsOfMedicationOnTimeService()
      .pdfNew(params)
      .then(() => {
        dispatch(fetchRecordsOfMedicationOnTimePdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'farmasi_cpotw' })));
      })
      .catch((err) => {
        console.error(err);
      })
  }

  return (
    <Fragment>
      <Label className="fs-4">Pemberian Obat</Label>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <Button
            style={{ padding: '4px', marginTop: '8px' }}
            color='primary'
            type='button'
            className='me-1'
            disabled={!!((!data) || (data && data.length === 0))}
            onClick={() => handleGeneratePdf()}
          >
            <FilePlus size={15} style={{ marginRight: '4px' }}/>
            Generate
          </Button>
          {
            pdfData && Array.isArray(pdfData) && pdfData.length > 0 && (
              <a color='success' href={`${pdfData[0].URL}`} target="_blank" rel="noreferrer">
                <Button
                  style={{ padding: '4px', marginTop: '8px' }}
                  color='success'
                  type='button'
                  className='me-1'
                >
                  <File size={15} style={{ marginRight: '4px' }}/>
                  Cetak
                </Button>
              </a>
            )
          }
          {
            (!pdfData || (pdfData && Array.isArray(pdfData) && pdfData.length === 0)) && (
              <Button
                style={{ padding: '4px', marginTop: '8px' }}
                color='success'
                type='button'
                disabled
                className='me-1'
              >
                <File size={15} style={{ marginRight: '4px' }}/>
                Cetak
              </Button>
            )
          }
        </div>
        <div>
          <Button
            style={{ padding: '4px', marginTop: '8px' }}
            color='secondary'
            type='button'
            className='me-1'
            onClick={() => setCreateNew(true)}
          >
            <Plus size={15} />
            Beri Obat
          </Button>
          <Button
            style={{ padding: '4px', marginTop: '8px' }}
            color='secondary'
            type='button'
            className='me-1'
            onClick={() => setIsValidateOpen(true)}
          >
            <Search size={15} />
            Validasi Apoteker
          </Button>
        </div>
      </div>
      <Table responsive bordered className="mt-1">
        <thead>
          <tr>
            <th>No</th>
            <th>Waktu Pemberian</th>
            <th>Obat Yang Diberikan</th>
            <th>Pemberi Obat</th>
            <th>Tanda Tangan Pasien</th>
            <th>Tanda Tangan Perawat</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            data && Array.isArray(data) && data.map((item: IRecordsOfMedicationOnTimeFormModel, key: number) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{item.Waktu_Pemberian}</td>
                <td><pre>{getMedsString(item.Obat)}</pre></td>
                <td>{item.Nama_Perawat}</td>
                <td>
                  <div className="text-center">
                    {
                      item.Tanda_Tangan_Pasien && item.Tanda_Tangan_Pasien !== '' && (
                        <Image
                          alt={`ttd_pasien_${key}`}
                          src={item.Tanda_Tangan_Pasien ?? ''}
                          width='100rem'
                          height='100rem'
                          objectFit="contain"
                        />
                      )
                    }
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    {
                      item.Tanda_Tangan_Perawat && item.Tanda_Tangan_Perawat !== '' && (
                        <Image
                          alt={`ttd_perawat_${key}`}
                          src={item.Tanda_Tangan_Perawat ?? ''}
                          width='100rem'
                          height='100rem'
                          objectFit="contain"
                        />
                      )
                    }
                  </div>
                </td>
                <td>
                  <Fragment>
                    <div className="d-flex justify-content-center">
                      {
                        !item.Validated ? (
                          <Button className="btn-icon rounded btn-sm btn-action-cppt me-1" color="warning" type="button" onClick={() => {
                            setEditRow(item);
                          }}>
                            <Edit size={16} />
                          </Button>
                        ) : (
                          null
                        )
                      }
                      <Button className="btn-icon rounded btn-sm btn-action-cppt" color="danger" type="button" onClick={() => setDeleteRow(item)}>
                        <Trash size={16} />
                      </Button>
                    </div>
                  </Fragment>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      {
        createNew && (
          <RecordsOfMedicationModal
            isOpen={!!createNew}
            setIsOpen={setCreateNew}
          />
        )
      }
      {
        editRow && (
          <RecordsOfMedicationModal
            data={editRow}
            isOpen={!!editRow}
            setIsOpen={setEditRow}
          />
        )
      }
      <DeleteModal
        isShow={(!!deleteRow)}
        setIsShow={() => setDeleteRow(undefined)}
        onDeleteClick={() => handleDeleteRow(deleteRow)} />
      <Modal isOpen={!!isValidateOpen} size="xl">
        <ModalHeader toggle={() => setIsValidateOpen(false)}>Pharmacist Validate</ModalHeader>
        <ModalBody>
          <PharmacistValidateForm
            data={grouped}
            onCancel={() => setIsValidateOpen(false)}
          />
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default RecordsOfMedicationTable;
