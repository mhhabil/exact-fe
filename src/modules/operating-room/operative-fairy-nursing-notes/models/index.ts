import { IDoctorModel } from "@src/shared/doctor";
import { DoctorModel } from "@src/shared/doctor/models/doctor.model";
import { DataModel, IDataModel } from "@src/shared/model";
import { INurseModel } from "@src/shared/nurse";
import { NurseModel } from "@src/shared/nurse/models/nurse.model";
import { ICatatanKeperawatanPascaForm } from "./catatan-keperawatan-pasca-operasi";
import { IDiagnosaIntraOperatifForm } from "./diagnosa-intra-operatif";
import { IDiagnosaPascaOperatifForm } from "./diagnosa-pasca-operatif";
import { IOperativeFairyNursingNotesFormModel, OperativeFairyNursingNotesFormModel } from "./operative-fairy-nursing-notes.model";

export interface IOperativeFairyNursingNotesModel extends IDataModel{
    perawat: Array<INurseModel>;
    dokter: Array<IDoctorModel>;
    ck_intra_operasi: IOperativeFairyNursingNotesFormModel;
    ck_pasca_operasi: ICatatanKeperawatanPascaForm;
    intra_operatif: IDiagnosaIntraOperatifForm;
    pasca_operatif: IDiagnosaPascaOperatifForm;
  }

export class OperativeFairyNursingNotesModel extends DataModel {
  perawat: Array<INurseModel>;
  dokter: Array<IDoctorModel>;
  ck_intra_operasi: IOperativeFairyNursingNotesFormModel;
  ck_pasca_operasi: ICatatanKeperawatanPascaForm;
  intra_operatif: IDiagnosaIntraOperatifForm;
  pasca_operatif: IDiagnosaPascaOperatifForm;
  constructor(request: IOperativeFairyNursingNotesModel) {
    super(request);
    this.perawat = (Array.isArray(request.perawat)) ? request.perawat.map((a) => new NurseModel(a)) : [];
    this.dokter = (Array.isArray(request.dokter)) ? request.dokter.map((a) => new DoctorModel(a)) : [];
    this.ck_intra_operasi = request.ck_intra_operasi;
    this.ck_pasca_operasi = request.ck_pasca_operasi;
    this.intra_operatif = request.intra_operatif;
    this.pasca_operatif = request.pasca_operatif;
  }
}
