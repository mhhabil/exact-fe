import { CpptRecord } from "@src/modules/ro/cppt/models/cppt-ro.model";
import { CreatePDFRequest } from "@src/shared/pdf/requests/create-pdf.request";
import { IAppRequest } from "./app.request";
import { IPrescription } from "@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model";
import { DateTimeConverter } from "@src/shared/datetime-converter";
import { ITreatmentModel } from "@src/modules/site/patient-list/models";

export interface IPediatrikRequestData {
  isJsonO_pediatrik: boolean;
  isJsonO_cardif: boolean;
  isJsonO_test_distance1m: boolean;
  JsonO_OD_test_distance1m: string;
  JsonO_OS_test_distance1m: string;
  isJsonO_test_distance50m: boolean;
  JsonO_OD_test_distance50m: string;
  JsonO_OS_test_distance50m: string;
  isJsonO_tac: boolean;
  isJsonO_at38cm: boolean;
  JsonO_OD_at38cm: string;
  JsonO_OS_at38cm: string;
  isJsonO_at55cm: boolean;
  JsonO_OD_at55cm: string;
  JsonO_OS_at55cm: string;
  isJsonO_at84cm: boolean;
  JsonO_OD_at84cm: string;
  JsonO_OS_at84cm: string;
  isJsonO_RPL_Ped: boolean;
  isJsonO_RPL_SR_Ped: boolean;
  OD_RPL_SR_Ped: string;
  OS_RPL_SR_ped: string;
  isJsonO_RPL_SR_Visus_Akhir_Ped: boolean;
  JsonO_OD_RPL_SR_Visus_Akhir_Ped: string;
  JsonO_OS_RPL_SR_Visus_Akhir_Ped: string;
  isJsonO_RPL_SR_Axis_Ped: boolean;
  JsonO_OD_RPL_SR_Axis_Ped: string;
  JsonO_OS_RPL_SR_Axis_Ped: string;
  isJsonO_RPL_SR_PD_Jauh_Ped: boolean;
  JsonO_OD_RPL_SR_PD_Jauh_Ped: string;
  JsonO_OS_RPL_SR_PD_Jauh_Ped: string;
  isJsonO_RPL_SR_False_Ped: boolean;
  JsonO_OD_RPL_SR_False_Ped: string;
  JsonO_OS_RPL_SR_False_Ped: string;
  isJsonO_RPL_SR_Adaptasi_Ped: boolean;
  JsonO_OD_RPL_SR_Adaptasi_Ped: string;
  JsonO_OS_RPL_SR_Adaptasi_Ped: string;
  isJsonO_Ocular_Motility: boolean;
  JsonO_OD_Ocular_1: string;
  JsonO_OD_Ocular_2: string;
  JsonO_OD_Ocular_3: string;
  JsonO_OD_Ocular_4: string;
  JsonO_OD_Ocular_5: string;
  JsonO_OD_Ocular_6: string;
  JsonO_OS_Ocular_1: string;
  JsonO_OS_Ocular_2: string;
  JsonO_OS_Ocular_3: string;
  JsonO_OS_Ocular_4: string;
  JsonO_OS_Ocular_5: string;
  JsonO_OS_Ocular_6: string;
  isJsonO_Cover: boolean;
  isJsonO_Ortho: boolean;
  ortho_without_od: string;
  ortho_without_os: string;
  ortho_with_glass_od: string;
  ortho_with_glass_os: string;
  isJsonO_Prisma: boolean;
  JsonO_OD_without_near_xt: string;
  JsonO_OD_without_near_et: string;
  JsonO_OD_without_near_hi: string;
  JsonO_OD_without_near_ho: string;
  JsonO_OS_without_near_xt: string;
  JsonO_OS_without_near_et: string;
  JsonO_OS_without_near_hi: string;
  JsonO_OS_without_near_ho: string;
  JsonO_OD_without_distance_xt: string;
  JsonO_OD_without_distance_et: string;
  JsonO_OD_without_distance_hi: string;
  JsonO_OD_without_distance_ho: string;
  JsonO_OS_without_distance_xt: string;
  JsonO_OS_without_distance_et: string;
  JsonO_OS_without_distance_hi: string;
  JsonO_OS_without_distance_ho: string;
  JsonO_OD_with_near_xt: string;
  JsonO_OD_with_near_et: string;
  JsonO_OD_with_near_hi: string;
  JsonO_OD_with_near_ho: string;
  JsonO_OS_with_near_xt: string;
  JsonO_OS_with_near_et: string;
  JsonO_OS_with_near_hi: string;
  JsonO_OS_with_near_ho: string;
  JsonO_OD_with_distance_xt: string;
  JsonO_OD_with_distance_et: string;
  JsonO_OD_with_distance_hi: string;
  JsonO_OD_with_distance_ho: string;
  JsonO_OS_with_distance_xt: string;
  JsonO_OS_with_distance_et: string;
  JsonO_OS_with_distance_hi: string;
  JsonO_OS_with_distance_ho: string;
      isJsonO_RS : boolean;
      isJsonO_Circles : boolean;
      JsonO_OD_RS_Cir : string;
      JsonO_OS_RS_Cir : string;
      isJsonO_Randot_Form : boolean;
      JsonO_OD_RS_Ran :string;
      JsonO_OS_RS_Ran :string;
      isJsonO_Animal : boolean;
      JsonO_OD_RS_Ani :string;
      JsonO_OS_RS_Ani : string;
  isJsonO_OKN_Drum: boolean;
  JsonO_ODS_OKN_Drum: string;
  isJsonO_RAF_ruler: boolean;
  JsonO_ODS_RAF_ruler: string;
  isJsonO_Nearvision: boolean;
  JsonO_OD_Nearvision: string;
  JsonO_OS_Nearvision: string;
  isJsonO_Ptosis_FIP: boolean;
  JsonO_OD_Ptosis_FIP: string;
  JsonO_OS_Ptosis_FIP: string;
  isJsonO_Ptosis_MRD: boolean;
  JsonO_OD_Ptosis_MRD: string;
  JsonO_OS_Ptosis_MRD: string;
  isJsonO_Ptosis_LA: boolean;
  JsonO_OD_Ptosis_LA: string;
  JsonO_OS_Ptosis_LA: string;
  isJsonO_TNO_stereoskopis: boolean;
  JsonO_TNO_stereoskopis_1: string;
  JsonO_TNO_stereoskopis_2: string;
  JsonO_TNO_stereoskopis_3: string;
  JsonO_TNO_stereoskopis_4: string;
  JsonO_TNO_stereoskopis_5: string;
  isJsonO_TNO_1: boolean;
  isJsonO_TNO_2: boolean;
  isJsonO_TNO_3: boolean;
  isJsonO_TNO_4: boolean;
  isJsonO_TNO_5: boolean;
  isJsonO_Goniometer: boolean;
  JsonO_ODS_Goniometer : string;
  goniometer_od: string;
  goniometer_os : string;
}

export class PediatrikRequestData {
  isJsonO_pediatrik: boolean;
  isJsonO_cardif: boolean;
  isJsonO_test_distance1m: boolean;
  JsonO_OD_test_distance1m: string;
  JsonO_OS_test_distance1m: string;
  isJsonO_test_distance50m: boolean;
  JsonO_OD_test_distance50m: string;
  JsonO_OS_test_distance50m: string;
  isJsonO_tac: boolean;
  isJsonO_at38cm: boolean;
  JsonO_OD_at38cm: string;
  JsonO_OS_at38cm: string;
  isJsonO_at55cm: boolean;
  JsonO_OD_at55cm: string;
  JsonO_OS_at55cm: string;
  isJsonO_at84cm: boolean;
  JsonO_OD_at84cm: string;
  JsonO_OS_at84cm: string;
  isJsonO_RPL_Ped: boolean;
  isJsonO_RPL_SR_Ped: boolean;
  OD_RPL_SR_Ped: string;
  OS_RPL_SR_ped: string;
  isJsonO_RPL_SR_Visus_Akhir_Ped: boolean;
  JsonO_OD_RPL_SR_Visus_Akhir_Ped: string;
  JsonO_OS_RPL_SR_Visus_Akhir_Ped: string;
  isJsonO_RPL_SR_Axis_Ped: boolean;
  JsonO_OD_RPL_SR_Axis_Ped: string;
  JsonO_OS_RPL_SR_Axis_Ped: string;
  isJsonO_RPL_SR_PD_Jauh_Ped: boolean;
  JsonO_OD_RPL_SR_PD_Jauh_Ped: string;
  JsonO_OS_RPL_SR_PD_Jauh_Ped: string;
  isJsonO_RPL_SR_False_Ped: boolean;
  JsonO_OD_RPL_SR_False_Ped: string;
  JsonO_OS_RPL_SR_False_Ped: string;
  isJsonO_RPL_SR_Adaptasi_Ped: boolean;
  JsonO_OD_RPL_SR_Adaptasi_Ped: string;
  JsonO_OS_RPL_SR_Adaptasi_Ped: string;
  isJsonO_Ocular_Motility: boolean;
  JsonO_OD_Ocular_1: string;
  JsonO_OD_Ocular_2: string;
  JsonO_OD_Ocular_3: string;
  JsonO_OD_Ocular_4: string;
  JsonO_OD_Ocular_5: string;
  JsonO_OD_Ocular_6: string;
  JsonO_OS_Ocular_1: string;
  JsonO_OS_Ocular_2: string;
  JsonO_OS_Ocular_3: string;
  JsonO_OS_Ocular_4: string;
  JsonO_OS_Ocular_5: string;
  JsonO_OS_Ocular_6: string;
  isJsonO_Cover: boolean;
  isJsonO_Ortho: boolean;
  ortho_without_od: string;
  ortho_without_os: string;
  ortho_with_glass_od: string;
  ortho_with_glass_os: string;
  isJsonO_Prisma: boolean;
  JsonO_OD_without_near_xt: string;
  JsonO_OD_without_near_et: string;
  JsonO_OD_without_near_hi: string;
  JsonO_OD_without_near_ho: string;
  JsonO_OS_without_near_xt: string;
  JsonO_OS_without_near_et: string;
  JsonO_OS_without_near_hi: string;
  JsonO_OS_without_near_ho: string;
  JsonO_OD_without_distance_xt: string;
  JsonO_OD_without_distance_et: string;
  JsonO_OD_without_distance_hi: string;
  JsonO_OD_without_distance_ho: string;
  JsonO_OS_without_distance_xt: string;
  JsonO_OS_without_distance_et: string;
  JsonO_OS_without_distance_hi: string;
  JsonO_OS_without_distance_ho: string;
  JsonO_OD_with_near_xt: string;
  JsonO_OD_with_near_et: string;
  JsonO_OD_with_near_hi: string;
  JsonO_OD_with_near_ho: string;
  JsonO_OS_with_near_xt: string;
  JsonO_OS_with_near_et: string;
  JsonO_OS_with_near_hi: string;
  JsonO_OS_with_near_ho: string;
  JsonO_OD_with_distance_xt: string;
  JsonO_OD_with_distance_et: string;
  JsonO_OD_with_distance_hi: string;
  JsonO_OD_with_distance_ho: string;
  JsonO_OS_with_distance_xt: string;
  JsonO_OS_with_distance_et: string;
  JsonO_OS_with_distance_hi: string;
  JsonO_OS_with_distance_ho: string;
  isJsonO_RS : boolean;
  isJsonO_Circles : boolean;
  JsonO_OD_RS_Cir : string;
  JsonO_OS_RS_Cir : string;
  isJsonO_Randot_Form : boolean;
  JsonO_OD_RS_Ran :string;
  JsonO_OS_RS_Ran :string;
  isJsonO_Animal : boolean;
  JsonO_OD_RS_Ani :string;
  JsonO_OS_RS_Ani :string;
  isJsonO_OKN_Drum: boolean;
  JsonO_ODS_OKN_Drum: string;
  isJsonO_RAF_ruler: boolean;
  JsonO_ODS_RAF_ruler: string;
  isJsonO_Nearvision: boolean;
  JsonO_OD_Nearvision: string;
  JsonO_OS_Nearvision: string;
  isJsonO_Ptosis_FIP: boolean;
  JsonO_OD_Ptosis_FIP: string;
  JsonO_OS_Ptosis_FIP: string;
  isJsonO_Ptosis_MRD: boolean;
  JsonO_OD_Ptosis_MRD: string;
  JsonO_OS_Ptosis_MRD: string;
  isJsonO_Ptosis_LA: boolean;
  JsonO_OD_Ptosis_LA: string;
  JsonO_OS_Ptosis_LA: string;
  isJsonO_TNO_stereoskopis: boolean;
  JsonO_TNO_stereoskopis_1: string;
  JsonO_TNO_stereoskopis_2: string;
  JsonO_TNO_stereoskopis_3: string;
  JsonO_TNO_stereoskopis_4: string;
  JsonO_TNO_stereoskopis_5: string;
  isJsonO_TNO_1: boolean;
  isJsonO_TNO_2: boolean;
  isJsonO_TNO_3: boolean;
  isJsonO_TNO_4: boolean;
  isJsonO_TNO_5: boolean;
  isJsonO_Goniometer: boolean;
  JsonO_ODS_Goniometer : string;
  goniometer_od: string;
  goniometer_os : string;
  constructor(req: IPediatrikRequestData) {
    this.isJsonO_pediatrik = req.isJsonO_pediatrik;
    this.isJsonO_cardif = req.isJsonO_cardif;
    this.isJsonO_test_distance1m = req.isJsonO_test_distance1m;
    this.JsonO_OD_test_distance1m = req.JsonO_OD_test_distance1m;
    this.JsonO_OS_test_distance1m = req.JsonO_OS_test_distance1m;
    this.isJsonO_test_distance50m = req.isJsonO_test_distance50m;
    this.JsonO_OD_test_distance50m = req.JsonO_OD_test_distance50m;
    this.JsonO_OS_test_distance50m = req.JsonO_OS_test_distance50m;
    this.isJsonO_tac = req.isJsonO_tac;
    this.isJsonO_at38cm = req.isJsonO_at38cm;
    this.JsonO_OD_at38cm = req.JsonO_OD_at38cm;
    this.JsonO_OS_at38cm = req.JsonO_OS_at38cm;
    this.isJsonO_at55cm = req.isJsonO_at55cm;
    this.JsonO_OD_at55cm = req.JsonO_OD_at55cm;
    this.JsonO_OS_at55cm = req.JsonO_OS_at55cm;
    this.isJsonO_at84cm = req.isJsonO_at84cm;
    this.JsonO_OD_at84cm = req.JsonO_OD_at84cm;
    this.JsonO_OS_at84cm = req.JsonO_OS_at84cm;
    this.isJsonO_RPL_Ped  = req.isJsonO_RPL_Ped;
    this.isJsonO_RPL_SR_Ped = req.isJsonO_RPL_SR_Ped;
    this.OD_RPL_SR_Ped = req.OD_RPL_SR_Ped;
    this.OS_RPL_SR_ped = req.OS_RPL_SR_ped;
    this.isJsonO_RPL_SR_Visus_Akhir_Ped = req.isJsonO_RPL_SR_Visus_Akhir_Ped;
    this.JsonO_OD_RPL_SR_Visus_Akhir_Ped = req.JsonO_OD_RPL_SR_Visus_Akhir_Ped;
    this.JsonO_OS_RPL_SR_Visus_Akhir_Ped = req.JsonO_OS_RPL_SR_Visus_Akhir_Ped;
    this.isJsonO_RPL_SR_Axis_Ped = req.isJsonO_RPL_SR_Axis_Ped;
    this.JsonO_OD_RPL_SR_Axis_Ped = req.JsonO_OD_RPL_SR_Axis_Ped;
    this.JsonO_OS_RPL_SR_Axis_Ped = req.JsonO_OS_RPL_SR_Axis_Ped;
    this.isJsonO_RPL_SR_PD_Jauh_Ped = req.isJsonO_RPL_SR_PD_Jauh_Ped;
    this.JsonO_OD_RPL_SR_PD_Jauh_Ped = req.JsonO_OD_RPL_SR_PD_Jauh_Ped;
    this.JsonO_OS_RPL_SR_PD_Jauh_Ped = req.JsonO_OS_RPL_SR_PD_Jauh_Ped;
    this.isJsonO_RPL_SR_False_Ped = req.isJsonO_RPL_SR_False_Ped;
    this.JsonO_OD_RPL_SR_False_Ped = req.JsonO_OD_RPL_SR_False_Ped;
    this.JsonO_OS_RPL_SR_False_Ped = req.JsonO_OS_RPL_SR_False_Ped;
    this.isJsonO_RPL_SR_Adaptasi_Ped = req.isJsonO_RPL_SR_Adaptasi_Ped;
    this.JsonO_OD_RPL_SR_Adaptasi_Ped = req.JsonO_OD_RPL_SR_Adaptasi_Ped;
    this.JsonO_OS_RPL_SR_Adaptasi_Ped = req.JsonO_OS_RPL_SR_Adaptasi_Ped;
    this.isJsonO_Ocular_Motility  = req.isJsonO_Ocular_Motility;
    this.JsonO_OD_Ocular_1 = req.JsonO_OD_Ocular_1;
    this.JsonO_OD_Ocular_2 = req.JsonO_OD_Ocular_2;
    this.JsonO_OD_Ocular_3 = req.JsonO_OD_Ocular_3;
    this.JsonO_OD_Ocular_4 = req.JsonO_OD_Ocular_4;
    this.JsonO_OD_Ocular_5 = req.JsonO_OD_Ocular_5;
    this.JsonO_OD_Ocular_6 = req.JsonO_OD_Ocular_6;
    this.JsonO_OS_Ocular_1 = req.JsonO_OS_Ocular_1;
    this.JsonO_OS_Ocular_2 = req.JsonO_OS_Ocular_2;
    this.JsonO_OS_Ocular_3 = req.JsonO_OS_Ocular_3;
    this.JsonO_OS_Ocular_4 = req.JsonO_OS_Ocular_4;
    this.JsonO_OS_Ocular_5 = req.JsonO_OS_Ocular_5;
    this.JsonO_OS_Ocular_6 = req.JsonO_OS_Ocular_6;
    this.isJsonO_Cover  = req.isJsonO_Cover;
    this.isJsonO_Ortho  = req.isJsonO_Ortho;
    this.ortho_without_od = req.ortho_without_od;
    this.ortho_without_os = req.ortho_without_os;
    this.ortho_with_glass_od = req.ortho_with_glass_od;
    this.ortho_with_glass_os = req.ortho_with_glass_os;
    this.isJsonO_Prisma   = req.isJsonO_Prisma;
    this.JsonO_OD_without_near_xt = req.JsonO_OD_without_near_xt;
    this.JsonO_OD_without_near_et = req.JsonO_OD_without_near_et;
    this.JsonO_OD_without_near_hi = req.JsonO_OD_without_near_hi;
    this.JsonO_OD_without_near_ho = req.JsonO_OD_without_near_ho;
    this.JsonO_OS_without_near_xt = req.JsonO_OS_without_near_xt;
    this.JsonO_OS_without_near_et = req.JsonO_OS_without_near_et;
    this.JsonO_OS_without_near_hi = req.JsonO_OS_without_near_hi;
    this.JsonO_OS_without_near_ho = req.JsonO_OS_without_near_ho;
    this.JsonO_OD_without_distance_xt = req.JsonO_OD_without_distance_xt;
    this.JsonO_OD_without_distance_et = req.JsonO_OD_without_distance_et;
    this.JsonO_OD_without_distance_hi = req.JsonO_OD_without_distance_hi;
    this.JsonO_OD_without_distance_ho = req.JsonO_OD_without_distance_ho;
    this.JsonO_OS_without_distance_xt = req.JsonO_OS_without_distance_xt;
    this.JsonO_OS_without_distance_et = req.JsonO_OS_without_distance_et;
    this.JsonO_OS_without_distance_hi = req.JsonO_OS_without_distance_hi;
    this.JsonO_OS_without_distance_ho = req.JsonO_OS_without_distance_ho;
    this.JsonO_OD_with_near_xt = req.JsonO_OD_with_near_xt;
    this.JsonO_OD_with_near_et = req.JsonO_OD_with_near_et;
    this.JsonO_OD_with_near_hi = req.JsonO_OD_with_near_hi;
    this.JsonO_OD_with_near_ho = req.JsonO_OD_with_near_ho;
    this.JsonO_OS_with_near_xt = req.JsonO_OS_with_near_xt;
    this.JsonO_OS_with_near_et = req.JsonO_OS_with_near_et;
    this.JsonO_OS_with_near_hi = req.JsonO_OS_with_near_hi;
    this.JsonO_OS_with_near_ho = req.JsonO_OS_with_near_ho;
    this.JsonO_OD_with_distance_xt = req.JsonO_OD_with_distance_xt;
    this.JsonO_OD_with_distance_et = req.JsonO_OD_with_distance_et;
    this.JsonO_OD_with_distance_hi = req.JsonO_OD_with_distance_hi;
    this.JsonO_OD_with_distance_ho = req.JsonO_OD_with_distance_ho;
    this.JsonO_OS_with_distance_xt = req.JsonO_OS_with_distance_xt;
    this.JsonO_OS_with_distance_et = req.JsonO_OS_with_distance_et;
    this.JsonO_OS_with_distance_hi = req.JsonO_OS_with_distance_hi;
    this.JsonO_OS_with_distance_ho = req.JsonO_OS_with_distance_ho;
    this.isJsonO_RS = req.isJsonO_RS;
    this.isJsonO_Circles  = req.isJsonO_Circles;
    this.JsonO_OD_RS_Cir  = req.JsonO_OD_RS_Cir;
    this.JsonO_OS_RS_Cir  = req.JsonO_OS_RS_Cir;
    this.isJsonO_Randot_Form  = req.isJsonO_Randot_Form;
    this.JsonO_OD_RS_Ran  = req.JsonO_OD_RS_Ran;
    this.JsonO_OS_RS_Ran  = req.JsonO_OS_RS_Ran;
    this.isJsonO_Animal = req.isJsonO_Animal;
    this.JsonO_OD_RS_Ani = req.JsonO_OD_RS_Ani;
    this.JsonO_OS_RS_Ani  = req.JsonO_OS_RS_Ani;
    this.isJsonO_OKN_Drum = req.isJsonO_OKN_Drum;
    this.JsonO_ODS_OKN_Drum = req.JsonO_ODS_OKN_Drum;
    this.isJsonO_RAF_ruler  = req.isJsonO_RAF_ruler;
    this.JsonO_ODS_RAF_ruler = req.JsonO_ODS_RAF_ruler;
    this.isJsonO_Nearvision  = req.isJsonO_Nearvision;
    this.JsonO_OD_Nearvision  = req.JsonO_OD_Nearvision;
    this.JsonO_OS_Nearvision  = req.JsonO_OS_Nearvision;
    this.isJsonO_Ptosis_FIP  = req.isJsonO_Ptosis_FIP;
    this.JsonO_OD_Ptosis_FIP  = req.JsonO_OD_Ptosis_FIP;
    this.JsonO_OS_Ptosis_FIP  = req.JsonO_OS_Ptosis_FIP;
    this.isJsonO_Ptosis_MRD  = req.isJsonO_Ptosis_MRD;
    this.JsonO_OD_Ptosis_MRD  = req.JsonO_OD_Ptosis_MRD;
    this.JsonO_OS_Ptosis_MRD  = req.JsonO_OS_Ptosis_MRD;
    this.isJsonO_Ptosis_LA  = req.isJsonO_Ptosis_LA;
    this.JsonO_OD_Ptosis_LA  = req.JsonO_OD_Ptosis_LA;
    this.JsonO_OS_Ptosis_LA  = req.JsonO_OS_Ptosis_LA;
    this.isJsonO_TNO_stereoskopis  = req.isJsonO_TNO_stereoskopis;
    this.JsonO_TNO_stereoskopis_1  = req.JsonO_TNO_stereoskopis_1;
    this.JsonO_TNO_stereoskopis_2  = req.JsonO_TNO_stereoskopis_2;
    this.JsonO_TNO_stereoskopis_3  = req.JsonO_TNO_stereoskopis_3;
    this.JsonO_TNO_stereoskopis_4  = req.JsonO_TNO_stereoskopis_4;
    this.JsonO_TNO_stereoskopis_5  = req.JsonO_TNO_stereoskopis_5;
    this.isJsonO_TNO_1  = req.isJsonO_TNO_1;
    this.isJsonO_TNO_2  = req.isJsonO_TNO_2;
    this.isJsonO_TNO_3  = req.isJsonO_TNO_3;
    this.isJsonO_TNO_4  = req.isJsonO_TNO_4;
    this.isJsonO_TNO_5  = req.isJsonO_TNO_5;
    this.isJsonO_Goniometer  = req.isJsonO_Goniometer;
    this.JsonO_ODS_Goniometer   = req.JsonO_ODS_Goniometer;
    this.goniometer_od  = req.goniometer_od;
    this.goniometer_os   = req.goniometer_os;
  }
  static createFromJson(json: IPediatrikRequestData) {
    return new PediatrikRequestData(json);
  }
}

export interface ICPPTRequestData {
  umur: string;
  tanggal: string;
  unit: string;
  isDokter: boolean;
  isPerawat: boolean;
  isJsonO: boolean;
  ppa: string;
  isRO: boolean;
  S: string;
  O: string;
  A: string;
  P: string;
  tandaTanganPerawat: string;
  tandaTanganDokter: string;
  tandaTanganDokterVerifikasi: string;
  namaPerawat: string;
  namaDokter: string;
  namaDokterVerifikasi: string;
  intruksiPPA: string;
  JsonO_OD_VA: string;
  JsonO_OS_VA: string;
  JsonO_OD_False: string;
  JsonO_OS_False: string;
  JsonO_OD_PH: string;
  JsonO_OS_PH: string;
  JsonO_OD_Jagger: string;
  JsonO_OS_Jagger: string;
  JsonO_OD_KML_PD_Jauh: string;
  JsonO_OS_KML_PD_Jauh: string;
  JsonO_OD_KML_PD_Dekat: string;
  JsonO_OS_KML_PD_Dekat: string;
  JsonO_OD_KML_False: string;
  JsonO_OS_KML_False: string;
  JsonO_OD_KML_Addisi: string;
  JsonO_OS_KML_Addisi: string;
  JsonO_OD_KML_Axis: string;
  JsonO_OS_KML_Axis: string;
  JsonO_OD_KML_Jagger: string;
  JsonO_OS_KML_Jagger: string;
  JsonO_OD_Koreksi1_PD_Jauh: string;
  JsonO_OS_Koreksi1_PD_Jauh: string;
  JsonO_OD_Koreksi1_PD_Dekat: string;
  JsonO_OS_Koreksi1_PD_Dekat: string;
  JsonO_OD_Koreksi1_False: string;
  JsonO_OS_Koreksi1_False: string;
  JsonO_OD_Koreksi1_Addisi: string;
  JsonO_OS_Koreksi1_Addisi: string;
  JsonO_OD_Koreksi1_Axis: string;
  JsonO_OS_Koreksi1_Axis: string;
  JsonO_OD_Koreksi1_Jagger: string;
  JsonO_OS_Koreksi1_Jagger: string;
  JsonO_OD_Koreksi1_Adaptasi: string;
  JsonO_OS_Koreksi1_Adaptasi: string;
  JsonO_OD_Koreksi2_PD_Jauh: string;
  JsonO_OS_Koreksi2_PD_Jauh: string;
  JsonO_OD_Koreksi2_PD_Dekat: string;
  JsonO_OS_Koreksi2_PD_Dekat: string;
  JsonO_OD_Koreksi2_False: string;
  JsonO_OS_Koreksi2_False: string;
  JsonO_OD_Koreksi2_Addisi: string;
  JsonO_OS_Koreksi2_Addisi: string;
  JsonO_OD_Koreksi2_Axis: string;
  JsonO_OS_Koreksi2_Axis: string;
  JsonO_OD_Koreksi2_Jagger: string;
  JsonO_OS_Koreksi2_Jagger: string;
  JsonO_OD_Koreksi2_Adaptasi: string;
  JsonO_OS_Koreksi2_Adaptasi: string;
  JsonO_OD_KMB_PD_Jauh: string;
  JsonO_OS_KMB_PD_Jauh: string;
  JsonO_OD_KMB_PD_Dekat: string;
  JsonO_OS_KMB_PD_Dekat: string;
  JsonO_OD_KMB_False: string;
  JsonO_OS_KMB_False: string;
  JsonO_OD_KMB_Addisi: string;
  JsonO_OS_KMB_Addisi: string;
  JsonO_OD_KMB_Axis: string;
  JsonO_OS_KMB_Axis: string;
  JsonO_OD_KMB_Jagger: string;
  JsonO_OS_KMB_Jagger: string;
  JsonO_OD_RPL_SR_VA: string;
  JsonO_OS_RPL_SR_VA: string;
  JsonO_OD_RPL_SR_PD_Jauh: string;
  JsonO_OS_RPL_SR_PD_Jauh: string;
  JsonO_OD_RPL_SR_False: string;
  JsonO_OS_RPL_SR_False: string;
  JsonO_OD_RPL_SR_Axis: string;
  JsonO_OS_RPL_SR_Axis: string;
  JsonO_OD_RPL_SR_Adaptasi: string;
  JsonO_OS_RPL_SR_Adaptasi: string;
  JsonO_OD_RPL_RS_VA: string;
  JsonO_OS_RPL_RS_VA: string;
  JsonO_OD_RPL_RS_PD_Jauh: string;
  JsonO_OS_RPL_RS_PD_Jauh: string;
  JsonO_OD_RPL_RS_False: string;
  JsonO_OS_RPL_RS_False: string;
  JsonO_OD_RPL_RS_Axis: string;
  JsonO_OS_RPL_RS_Axis: string;
  JsonO_OD_RPL_RS_Adaptasi: string;
  JsonO_OS_RPL_RS_Adaptasi: string;
  od_non_contact: string;
  os_non_contact: string;
  od_tanam_lensa: string;
  os_tanam_lensa: string;
  od_schiotz: string;
  os_schiotz: string;
  note: string;
  isResep: boolean;
  resep: any;
  isGambarP: boolean;
  gambarP: string;
}

export class CPPTRequestData {
  umur: string;
  tanggal: string;
  unit: string;
  isDokter: boolean;
  isPerawat: boolean;
  isJsonO: boolean;
  ppa: string;
  isRO: boolean;
  S: string;
  O: string;
  A: string;
  P: string;
  tandaTanganPerawat: string;
  tandaTanganDokter: string;
  tandaTanganDokterVerifikasi: string;
  namaPerawat: string;
  namaDokter: string;
  namaDokterVerifikasi: string;
  intruksiPPA: string;
  JsonO_OD_VA: string;
  JsonO_OS_VA: string;
  JsonO_OD_False: string;
  JsonO_OS_False: string;
  JsonO_OD_PH: string;
  JsonO_OS_PH: string;
  JsonO_OD_Jagger: string;
  JsonO_OS_Jagger: string;
  JsonO_OD_KML_PD_Jauh: string;
  JsonO_OS_KML_PD_Jauh: string;
  JsonO_OD_KML_PD_Dekat: string;
  JsonO_OS_KML_PD_Dekat: string;
  JsonO_OD_KML_False: string;
  JsonO_OS_KML_False: string;
  JsonO_OD_KML_Addisi: string;
  JsonO_OS_KML_Addisi: string;
  JsonO_OD_KML_Axis: string;
  JsonO_OS_KML_Axis: string;
  JsonO_OD_KML_Jagger: string;
  JsonO_OS_KML_Jagger: string;
  JsonO_OD_Koreksi1_PD_Jauh: string;
  JsonO_OS_Koreksi1_PD_Jauh: string;
  JsonO_OD_Koreksi1_PD_Dekat: string;
  JsonO_OS_Koreksi1_PD_Dekat: string;
  JsonO_OD_Koreksi1_False: string;
  JsonO_OS_Koreksi1_False: string;
  JsonO_OD_Koreksi1_Addisi: string;
  JsonO_OS_Koreksi1_Addisi: string;
  JsonO_OD_Koreksi1_Axis: string;
  JsonO_OS_Koreksi1_Axis: string;
  JsonO_OD_Koreksi1_Jagger: string;
  JsonO_OS_Koreksi1_Jagger: string;
  JsonO_OD_Koreksi1_Adaptasi: string;
  JsonO_OS_Koreksi1_Adaptasi: string;
  JsonO_OD_Koreksi2_PD_Jauh: string;
  JsonO_OS_Koreksi2_PD_Jauh: string;
  JsonO_OD_Koreksi2_PD_Dekat: string;
  JsonO_OS_Koreksi2_PD_Dekat: string;
  JsonO_OD_Koreksi2_False: string;
  JsonO_OS_Koreksi2_False: string;
  JsonO_OD_Koreksi2_Addisi: string;
  JsonO_OS_Koreksi2_Addisi: string;
  JsonO_OD_Koreksi2_Axis: string;
  JsonO_OS_Koreksi2_Axis: string;
  JsonO_OD_Koreksi2_Jagger: string;
  JsonO_OS_Koreksi2_Jagger: string;
  JsonO_OD_Koreksi2_Adaptasi: string;
  JsonO_OS_Koreksi2_Adaptasi: string;
  JsonO_OD_KMB_PD_Jauh: string;
  JsonO_OS_KMB_PD_Jauh: string;
  JsonO_OD_KMB_PD_Dekat: string;
  JsonO_OS_KMB_PD_Dekat: string;
  JsonO_OD_KMB_False: string;
  JsonO_OS_KMB_False: string;
  JsonO_OD_KMB_Addisi: string;
  JsonO_OS_KMB_Addisi: string;
  JsonO_OD_KMB_Axis: string;
  JsonO_OS_KMB_Axis: string;
  JsonO_OD_KMB_Jagger: string;
  JsonO_OS_KMB_Jagger: string;
  JsonO_OD_RPL_SR_VA: string;
  JsonO_OS_RPL_SR_VA: string;
  JsonO_OD_RPL_SR_PD_Jauh: string;
  JsonO_OS_RPL_SR_PD_Jauh: string;
  JsonO_OD_RPL_SR_False: string;
  JsonO_OS_RPL_SR_False: string;
  JsonO_OD_RPL_SR_Axis: string;
  JsonO_OS_RPL_SR_Axis: string;
  JsonO_OD_RPL_SR_Adaptasi: string;
  JsonO_OS_RPL_SR_Adaptasi: string;
  JsonO_OD_RPL_RS_VA: string;
  JsonO_OS_RPL_RS_VA: string;
  JsonO_OD_RPL_RS_PD_Jauh: string;
  JsonO_OS_RPL_RS_PD_Jauh: string;
  JsonO_OD_RPL_RS_False: string;
  JsonO_OS_RPL_RS_False: string;
  JsonO_OD_RPL_RS_Axis: string;
  JsonO_OS_RPL_RS_Axis: string;
  JsonO_OD_RPL_RS_Adaptasi: string;
  JsonO_OS_RPL_RS_Adaptasi: string;
  od_non_contact: string;
  os_non_contact: string;
  od_tanam_lensa: string;
  os_tanam_lensa: string;
  od_schiotz: string;
  os_schiotz: string;
  note: string;
  isResep: boolean;
  resep: any;
  isGambarP: boolean;
  gambarP: string;

  constructor(req: ICPPTRequestData) {
    this.umur = req.umur;
    this.tanggal = req.tanggal;
    this.unit = req.unit;
    this.isDokter = req.isDokter;
    this.isPerawat = req.isPerawat;
    this.isJsonO = req.isJsonO;
    this.ppa = req.ppa;
    this.isRO = req.isRO;
    this.S = req.S;
    this.O = req.O;
    this.A = req.A;
    this.P = req.P;
    this.tandaTanganPerawat = req.tandaTanganPerawat;
    this.tandaTanganDokter = req.tandaTanganDokter;
    this.tandaTanganDokterVerifikasi = req.tandaTanganDokterVerifikasi;
    this.namaPerawat = req.namaPerawat;
    this.namaDokter = req.namaDokter;
    this.namaDokterVerifikasi = req.namaDokterVerifikasi;
    this.intruksiPPA = req.intruksiPPA;
    this.JsonO_OD_VA = req.JsonO_OD_VA;
    this.JsonO_OS_VA = req.JsonO_OS_VA;
    this.JsonO_OD_False = req.JsonO_OD_False;
    this.JsonO_OS_False = req.JsonO_OS_False;
    this.JsonO_OD_PH = req.JsonO_OD_PH;
    this.JsonO_OS_PH = req.JsonO_OS_PH;
    this.JsonO_OD_Jagger = req.JsonO_OD_Jagger;
    this.JsonO_OS_Jagger = req.JsonO_OS_Jagger;
    this.JsonO_OD_KML_PD_Jauh = req.JsonO_OD_KML_PD_Jauh;
    this.JsonO_OS_KML_PD_Jauh = req.JsonO_OS_KML_PD_Jauh;
    this.JsonO_OD_KML_PD_Dekat = req.JsonO_OD_KML_PD_Dekat;
    this.JsonO_OS_KML_PD_Dekat = req.JsonO_OS_KML_PD_Dekat;
    this.JsonO_OD_KML_False = req.JsonO_OD_KML_False;
    this.JsonO_OS_KML_False = req.JsonO_OS_KML_False;
    this.JsonO_OD_KML_Addisi = req.JsonO_OD_KML_Addisi;
    this.JsonO_OS_KML_Addisi = req.JsonO_OS_KML_Addisi;
    this.JsonO_OD_KML_Axis = req.JsonO_OD_KML_Axis;
    this.JsonO_OS_KML_Axis = req.JsonO_OS_KML_Axis;
    this.JsonO_OD_KML_Jagger = req.JsonO_OD_KML_Jagger;
    this.JsonO_OS_KML_Jagger = req.JsonO_OS_KML_Jagger;
    this.JsonO_OD_Koreksi1_PD_Jauh = req.JsonO_OD_Koreksi1_PD_Jauh;
    this.JsonO_OS_Koreksi1_PD_Jauh = req.JsonO_OS_Koreksi1_PD_Jauh;
    this.JsonO_OD_Koreksi1_PD_Dekat = req.JsonO_OD_Koreksi1_PD_Dekat;
    this.JsonO_OS_Koreksi1_PD_Dekat = req.JsonO_OS_Koreksi1_PD_Dekat;
    this.JsonO_OD_Koreksi1_False = req.JsonO_OD_Koreksi1_False;
    this.JsonO_OS_Koreksi1_False = req.JsonO_OS_Koreksi1_False;
    this.JsonO_OD_Koreksi1_Addisi = req.JsonO_OD_Koreksi1_Addisi;
    this.JsonO_OS_Koreksi1_Addisi = req.JsonO_OS_Koreksi1_Addisi;
    this.JsonO_OD_Koreksi1_Axis = req.JsonO_OD_Koreksi1_Axis;
    this.JsonO_OS_Koreksi1_Axis = req.JsonO_OS_Koreksi1_Axis;
    this.JsonO_OD_Koreksi1_Jagger = req.JsonO_OD_Koreksi1_Jagger;
    this.JsonO_OS_Koreksi1_Jagger = req.JsonO_OS_Koreksi1_Jagger;
    this.JsonO_OD_Koreksi1_Adaptasi = req.JsonO_OD_Koreksi1_Adaptasi;
    this.JsonO_OS_Koreksi1_Adaptasi = req.JsonO_OS_Koreksi1_Adaptasi;
    this.JsonO_OD_Koreksi2_PD_Jauh = req.JsonO_OD_Koreksi2_PD_Jauh;
    this.JsonO_OS_Koreksi2_PD_Jauh = req.JsonO_OS_Koreksi2_PD_Jauh;
    this.JsonO_OD_Koreksi2_PD_Dekat = req.JsonO_OD_Koreksi2_PD_Dekat;
    this.JsonO_OS_Koreksi2_PD_Dekat = req.JsonO_OS_Koreksi2_PD_Dekat;
    this.JsonO_OD_Koreksi2_False = req.JsonO_OD_Koreksi2_False;
    this.JsonO_OS_Koreksi2_False = req.JsonO_OS_Koreksi2_False;
    this.JsonO_OD_Koreksi2_Addisi = req.JsonO_OD_Koreksi2_Addisi;
    this.JsonO_OS_Koreksi2_Addisi = req.JsonO_OS_Koreksi2_Addisi;
    this.JsonO_OD_Koreksi2_Axis = req.JsonO_OD_Koreksi2_Axis;
    this.JsonO_OS_Koreksi2_Axis = req.JsonO_OS_Koreksi2_Axis;
    this.JsonO_OD_Koreksi2_Jagger = req.JsonO_OD_Koreksi2_Jagger;
    this.JsonO_OS_Koreksi2_Jagger = req.JsonO_OS_Koreksi2_Jagger;
    this.JsonO_OD_Koreksi2_Adaptasi = req.JsonO_OD_Koreksi2_Adaptasi;
    this.JsonO_OS_Koreksi2_Adaptasi = req.JsonO_OS_Koreksi2_Adaptasi;
    this.JsonO_OD_KMB_PD_Jauh = req.JsonO_OD_KMB_PD_Jauh;
    this.JsonO_OS_KMB_PD_Jauh = req.JsonO_OS_KMB_PD_Jauh;
    this.JsonO_OD_KMB_PD_Dekat = req.JsonO_OD_KMB_PD_Dekat;
    this.JsonO_OS_KMB_PD_Dekat = req.JsonO_OS_KMB_PD_Dekat;
    this.JsonO_OD_KMB_False = req.JsonO_OD_KMB_False;
    this.JsonO_OS_KMB_False = req.JsonO_OS_KMB_False;
    this.JsonO_OD_KMB_Addisi = req.JsonO_OD_KMB_Addisi;
    this.JsonO_OS_KMB_Addisi = req.JsonO_OS_KMB_Addisi;
    this.JsonO_OD_KMB_Axis = req.JsonO_OD_KMB_Axis;
    this.JsonO_OS_KMB_Axis = req.JsonO_OS_KMB_Axis;
    this.JsonO_OD_KMB_Jagger = req.JsonO_OD_KMB_Jagger;
    this.JsonO_OS_KMB_Jagger = req.JsonO_OS_KMB_Jagger;
    this.JsonO_OD_RPL_SR_VA = req.JsonO_OD_RPL_SR_VA;
    this.JsonO_OS_RPL_SR_VA = req.JsonO_OS_RPL_SR_VA;
    this.JsonO_OD_RPL_SR_PD_Jauh = req.JsonO_OD_RPL_SR_PD_Jauh;
    this.JsonO_OS_RPL_SR_PD_Jauh = req.JsonO_OS_RPL_SR_PD_Jauh;
    this.JsonO_OD_RPL_SR_False = req.JsonO_OD_RPL_SR_False;
    this.JsonO_OS_RPL_SR_False = req.JsonO_OS_RPL_SR_False;
    this.JsonO_OD_RPL_SR_Axis = req.JsonO_OD_RPL_SR_Axis;
    this.JsonO_OS_RPL_SR_Axis = req.JsonO_OS_RPL_SR_Axis;
    this.JsonO_OD_RPL_SR_Adaptasi = req.JsonO_OD_RPL_SR_Adaptasi;
    this.JsonO_OS_RPL_SR_Adaptasi = req.JsonO_OS_RPL_SR_Adaptasi;
    this.JsonO_OD_RPL_RS_VA = req.JsonO_OD_RPL_RS_VA;
    this.JsonO_OS_RPL_RS_VA = req.JsonO_OS_RPL_RS_VA;
    this.JsonO_OD_RPL_RS_PD_Jauh = req.JsonO_OD_RPL_RS_PD_Jauh;
    this.JsonO_OS_RPL_RS_PD_Jauh = req.JsonO_OS_RPL_RS_PD_Jauh;
    this.JsonO_OD_RPL_RS_False = req.JsonO_OD_RPL_RS_False;
    this.JsonO_OS_RPL_RS_False = req.JsonO_OS_RPL_RS_False;
    this.JsonO_OD_RPL_RS_Axis = req.JsonO_OD_RPL_RS_Axis;
    this.JsonO_OS_RPL_RS_Axis = req.JsonO_OS_RPL_RS_Axis;
    this.JsonO_OD_RPL_RS_Adaptasi = req.JsonO_OD_RPL_RS_Adaptasi;
    this.JsonO_OS_RPL_RS_Adaptasi = req.JsonO_OS_RPL_RS_Adaptasi;
    this.od_non_contact = req.od_non_contact;
    this.os_non_contact = req.os_non_contact;
    this.od_tanam_lensa = req.od_tanam_lensa;
    this.os_tanam_lensa = req.os_tanam_lensa;
    this.od_schiotz = req.od_schiotz;
    this.os_schiotz = req.os_schiotz;
    this.note = req.note;
    this.isResep = req.isResep;
    this.resep = req.resep;
    this.isGambarP = req.isGambarP;
    this.gambarP = req.gambarP;
  }

  static createFromJson(json: ICPPTPDFRequestData) {
    return new CPPTPDFRequestData(json);
  }
}


export interface ICPPTPDFRequestData {
  umur: string;
  tanggal: string;
  unit: string;
  isDokter: boolean;
  isPerawat: boolean;
  isJsonO: boolean;
  ppa: string;
  isRO: boolean;
  S: string;
  O: string;
  A: string;
  P: string;
  tandaTanganPerawat: string;
  tandaTanganDokter: string;
  tandaTanganDokterVerifikasi: string;
  namaPerawat: string;
  namaDokter: string;
  namaDokterVerifikasi: string;
  intruksiPPA: string;
  JsonO_OD_VA: string;
  JsonO_OS_VA: string;
  JsonO_OD_False: string;
  JsonO_OS_False: string;
  JsonO_OD_PH: string;
  JsonO_OS_PH: string;
  JsonO_OD_Jagger: string;
  JsonO_OS_Jagger: string;
  JsonO_OD_KML_PD_Jauh: string;
  JsonO_OS_KML_PD_Jauh: string;
  JsonO_OD_KML_PD_Dekat: string;
  JsonO_OS_KML_PD_Dekat: string;
  JsonO_OD_KML_False: string;
  JsonO_OS_KML_False: string;
  JsonO_OD_KML_Addisi: string;
  JsonO_OS_KML_Addisi: string;
  JsonO_OD_KML_Axis: string;
  JsonO_OS_KML_Axis: string;
  JsonO_OD_KML_Jagger: string;
  JsonO_OS_KML_Jagger: string;
  JsonO_OD_Koreksi1_PD_Jauh: string;
  JsonO_OS_Koreksi1_PD_Jauh: string;
  JsonO_OD_Koreksi1_PD_Dekat: string;
  JsonO_OS_Koreksi1_PD_Dekat: string;
  JsonO_OD_Koreksi1_False: string;
  JsonO_OS_Koreksi1_False: string;
  JsonO_OD_Koreksi1_Addisi: string;
  JsonO_OS_Koreksi1_Addisi: string;
  JsonO_OD_Koreksi1_Axis: string;
  JsonO_OS_Koreksi1_Axis: string;
  JsonO_OD_Koreksi1_Jagger: string;
  JsonO_OS_Koreksi1_Jagger: string;
  JsonO_OD_Koreksi1_Adaptasi: string;
  JsonO_OS_Koreksi1_Adaptasi: string;
  JsonO_OD_Koreksi2_PD_Jauh: string;
  JsonO_OS_Koreksi2_PD_Jauh: string;
  JsonO_OD_Koreksi2_PD_Dekat: string;
  JsonO_OS_Koreksi2_PD_Dekat: string;
  JsonO_OD_Koreksi2_False: string;
  JsonO_OS_Koreksi2_False: string;
  JsonO_OD_Koreksi2_Addisi: string;
  JsonO_OS_Koreksi2_Addisi: string;
  JsonO_OD_Koreksi2_Axis: string;
  JsonO_OS_Koreksi2_Axis: string;
  JsonO_OD_Koreksi2_Jagger: string;
  JsonO_OS_Koreksi2_Jagger: string;
  JsonO_OD_Koreksi2_Adaptasi: string;
  JsonO_OS_Koreksi2_Adaptasi: string;
  JsonO_OD_KMB_PD_Jauh: string;
  JsonO_OS_KMB_PD_Jauh: string;
  JsonO_OD_KMB_PD_Dekat: string;
  JsonO_OS_KMB_PD_Dekat: string;
  JsonO_OD_KMB_False: string;
  JsonO_OS_KMB_False: string;
  JsonO_OD_KMB_Addisi: string;
  JsonO_OS_KMB_Addisi: string;
  JsonO_OD_KMB_Axis: string;
  JsonO_OS_KMB_Axis: string;
  JsonO_OD_KMB_Jagger: string;
  JsonO_OS_KMB_Jagger: string;
  JsonO_OD_RPL_SR_VA: string;
  JsonO_OS_RPL_SR_VA: string;
  JsonO_OD_RPL_SR_PD_Jauh: string;
  JsonO_OS_RPL_SR_PD_Jauh: string;
  JsonO_OD_RPL_SR_False: string;
  JsonO_OS_RPL_SR_False: string;
  JsonO_OD_RPL_SR_Axis: string;
  JsonO_OS_RPL_SR_Axis: string;
  JsonO_OD_RPL_SR_Adaptasi: string;
  JsonO_OS_RPL_SR_Adaptasi: string;
  JsonO_OD_RPL_RS_VA: string;
  JsonO_OS_RPL_RS_VA: string;
  JsonO_OD_RPL_RS_PD_Jauh: string;
  JsonO_OS_RPL_RS_PD_Jauh: string;
  JsonO_OD_RPL_RS_False: string;
  JsonO_OS_RPL_RS_False: string;
  JsonO_OD_RPL_RS_Axis: string;
  JsonO_OS_RPL_RS_Axis: string;
  JsonO_OD_RPL_RS_Adaptasi: string;
  JsonO_OS_RPL_RS_Adaptasi: string;
  od_non_contact: string;
  os_non_contact: string;
  od_tanam_lensa: string;
  os_tanam_lensa: string;
  od_schiotz: string;
  os_schiotz: string;
  note: string;
  isResep: boolean;
  resep: any;
  isGambarP: boolean;
  gambarP: string;

  isJsonO_pediatrik: boolean;
  isJsonO_cardif: boolean;
  isJsonO_test_distance1m: boolean;
  JsonO_OD_test_distance1m: string;
  JsonO_OS_test_distance1m: string;
  isJsonO_test_distance50m: boolean;
  JsonO_OD_test_distance50m: string;
  JsonO_OS_test_distance50m: string;
  isJsonO_tac: boolean;
  isJsonO_at38cm: boolean;
  JsonO_OD_at38cm: string;
  JsonO_OS_at38cm: string;
  isJsonO_at55cm: boolean;
  JsonO_OD_at55cm: string;
  JsonO_OS_at55cm: string;
  isJsonO_at84cm: boolean;
  JsonO_OD_at84cm: string;
  JsonO_OS_at84cm: string;
  isJsonO_RPL_Ped: boolean;
  isJsonO_RPL_SR_Ped: boolean;
  OD_RPL_SR_Ped: string;
  OS_RPL_SR_ped: string;
  isJsonO_RPL_SR_Visus_Akhir_Ped: boolean;
  JsonO_OD_RPL_SR_Visus_Akhir_Ped: string;
  JsonO_OS_RPL_SR_Visus_Akhir_Ped: string;
  isJsonO_RPL_SR_Axis_Ped: boolean;
  JsonO_OD_RPL_SR_Axis_Ped: string;
  JsonO_OS_RPL_SR_Axis_Ped: string;
  isJsonO_RPL_SR_PD_Jauh_Ped: boolean;
  JsonO_OD_RPL_SR_PD_Jauh_Ped: string;
  JsonO_OS_RPL_SR_PD_Jauh_Ped: string;
  isJsonO_RPL_SR_False_Ped: boolean;
  JsonO_OD_RPL_SR_False_Ped: string;
  JsonO_OS_RPL_SR_False_Ped: string;
  isJsonO_RPL_SR_Adaptasi_Ped: boolean;
  JsonO_OD_RPL_SR_Adaptasi_Ped: string;
  JsonO_OS_RPL_SR_Adaptasi_Ped: string;
  isJsonO_Ocular_Motility: boolean;
  JsonO_OD_Ocular_1: string;
  JsonO_OD_Ocular_2: string;
  JsonO_OD_Ocular_3: string;
  JsonO_OD_Ocular_4: string;
  JsonO_OD_Ocular_5: string;
  JsonO_OD_Ocular_6: string;
  JsonO_OS_Ocular_1: string;
  JsonO_OS_Ocular_2: string;
  JsonO_OS_Ocular_3: string;
  JsonO_OS_Ocular_4: string;
  JsonO_OS_Ocular_5: string;
  JsonO_OS_Ocular_6: string;
  isJsonO_Cover: boolean;
  isJsonO_Ortho: boolean;
  ortho_without_od: string;
  ortho_without_os: string;
  ortho_with_glass_od: string;
  ortho_with_glass_os: string;
  isJsonO_Prisma: boolean;
  JsonO_OD_without_near_xt: string;
  JsonO_OD_without_near_et: string;
  JsonO_OD_without_near_hi: string;
  JsonO_OD_without_near_ho: string;
  JsonO_OS_without_near_xt: string;
  JsonO_OS_without_near_et: string;
  JsonO_OS_without_near_hi: string;
  JsonO_OS_without_near_ho: string;
  JsonO_OD_without_distance_xt: string;
  JsonO_OD_without_distance_et: string;
  JsonO_OD_without_distance_hi: string;
  JsonO_OD_without_distance_ho: string;
  JsonO_OS_without_distance_xt: string;
  JsonO_OS_without_distance_et: string;
  JsonO_OS_without_distance_hi: string;
  JsonO_OS_without_distance_ho: string;
  JsonO_OD_with_near_xt: string;
  JsonO_OD_with_near_et: string;
  JsonO_OD_with_near_hi: string;
  JsonO_OD_with_near_ho: string;
  JsonO_OS_with_near_xt: string;
  JsonO_OS_with_near_et: string;
  JsonO_OS_with_near_hi: string;
  JsonO_OS_with_near_ho: string;
  JsonO_OD_with_distance_xt: string;
  JsonO_OD_with_distance_et: string;
  JsonO_OD_with_distance_hi: string;
  JsonO_OD_with_distance_ho: string;
  JsonO_OS_with_distance_xt: string;
  JsonO_OS_with_distance_et: string;
  JsonO_OS_with_distance_hi: string;
  JsonO_OS_with_distance_ho: string;
  isJsonO_RS : boolean;
  isJsonO_Circles : boolean;
  JsonO_OD_RS_Cir : string;
  JsonO_OS_RS_Cir : string;
  isJsonO_Randot_Form : boolean;
  JsonO_OD_RS_Ran :string;
  JsonO_OS_RS_Ran :string;
  isJsonO_Animal : boolean;
  JsonO_OD_RS_Ani :string;
  JsonO_OS_RS_Ani : string;
  isJsonO_OKN_Drum: boolean;
  JsonO_ODS_OKN_Drum: string;
  isJsonO_RAF_ruler: boolean;
  JsonO_ODS_RAF_ruler: string;
  isJsonO_Nearvision: boolean;
  JsonO_OD_Nearvision: string;
  JsonO_OS_Nearvision: string;
  isJsonO_Ptosis_FIP: boolean;
  JsonO_OD_Ptosis_FIP: string;
  JsonO_OS_Ptosis_FIP: string;
  isJsonO_Ptosis_MRD: boolean;
  JsonO_OD_Ptosis_MRD: string;
  JsonO_OS_Ptosis_MRD: string;
  isJsonO_Ptosis_LA: boolean;
  JsonO_OD_Ptosis_LA: string;
  JsonO_OS_Ptosis_LA: string;
  isJsonO_TNO_stereoskopis: boolean;
  JsonO_TNO_stereoskopis_1: string;
  JsonO_TNO_stereoskopis_2: string;
  JsonO_TNO_stereoskopis_3: string;
  JsonO_TNO_stereoskopis_4: string;
  JsonO_TNO_stereoskopis_5: string;
  isJsonO_TNO_1: boolean;
  isJsonO_TNO_2: boolean;
  isJsonO_TNO_3: boolean;
  isJsonO_TNO_4: boolean;
  isJsonO_TNO_5: boolean;
  isJsonO_Goniometer: boolean;
  JsonO_ODS_Goniometer : string;
  goniometer_od: string;
  goniometer_os : string;
}

export class CPPTPDFRequestData {
  umur: string;
  tanggal: string;
  unit: string;
  isDokter: boolean;
  isPerawat: boolean;
  isJsonO: boolean;
  ppa: string;
  isRO: boolean;
  S: string;
  O: string;
  A: string;
  P: string;
  tandaTanganPerawat: string;
  tandaTanganDokter: string;
  tandaTanganDokterVerifikasi: string;
  namaPerawat: string;
  namaDokter: string;
  namaDokterVerifikasi: string;
  intruksiPPA: string;
  JsonO_OD_VA: string;
  JsonO_OS_VA: string;
  JsonO_OD_False: string;
  JsonO_OS_False: string;
  JsonO_OD_PH: string;
  JsonO_OS_PH: string;
  JsonO_OD_Jagger: string;
  JsonO_OS_Jagger: string;
  JsonO_OD_KML_PD_Jauh: string;
  JsonO_OS_KML_PD_Jauh: string;
  JsonO_OD_KML_PD_Dekat: string;
  JsonO_OS_KML_PD_Dekat: string;
  JsonO_OD_KML_False: string;
  JsonO_OS_KML_False: string;
  JsonO_OD_KML_Addisi: string;
  JsonO_OS_KML_Addisi: string;
  JsonO_OD_KML_Axis: string;
  JsonO_OS_KML_Axis: string;
  JsonO_OD_KML_Jagger: string;
  JsonO_OS_KML_Jagger: string;
  JsonO_OD_Koreksi1_PD_Jauh: string;
  JsonO_OS_Koreksi1_PD_Jauh: string;
  JsonO_OD_Koreksi1_PD_Dekat: string;
  JsonO_OS_Koreksi1_PD_Dekat: string;
  JsonO_OD_Koreksi1_False: string;
  JsonO_OS_Koreksi1_False: string;
  JsonO_OD_Koreksi1_Addisi: string;
  JsonO_OS_Koreksi1_Addisi: string;
  JsonO_OD_Koreksi1_Axis: string;
  JsonO_OS_Koreksi1_Axis: string;
  JsonO_OD_Koreksi1_Jagger: string;
  JsonO_OS_Koreksi1_Jagger: string;
  JsonO_OD_Koreksi1_Adaptasi: string;
  JsonO_OS_Koreksi1_Adaptasi: string;
  JsonO_OD_Koreksi2_PD_Jauh: string;
  JsonO_OS_Koreksi2_PD_Jauh: string;
  JsonO_OD_Koreksi2_PD_Dekat: string;
  JsonO_OS_Koreksi2_PD_Dekat: string;
  JsonO_OD_Koreksi2_False: string;
  JsonO_OS_Koreksi2_False: string;
  JsonO_OD_Koreksi2_Addisi: string;
  JsonO_OS_Koreksi2_Addisi: string;
  JsonO_OD_Koreksi2_Axis: string;
  JsonO_OS_Koreksi2_Axis: string;
  JsonO_OD_Koreksi2_Jagger: string;
  JsonO_OS_Koreksi2_Jagger: string;
  JsonO_OD_Koreksi2_Adaptasi: string;
  JsonO_OS_Koreksi2_Adaptasi: string;
  JsonO_OD_KMB_PD_Jauh: string;
  JsonO_OS_KMB_PD_Jauh: string;
  JsonO_OD_KMB_PD_Dekat: string;
  JsonO_OS_KMB_PD_Dekat: string;
  JsonO_OD_KMB_False: string;
  JsonO_OS_KMB_False: string;
  JsonO_OD_KMB_Addisi: string;
  JsonO_OS_KMB_Addisi: string;
  JsonO_OD_KMB_Axis: string;
  JsonO_OS_KMB_Axis: string;
  JsonO_OD_KMB_Jagger: string;
  JsonO_OS_KMB_Jagger: string;
  JsonO_OD_RPL_SR_VA: string;
  JsonO_OS_RPL_SR_VA: string;
  JsonO_OD_RPL_SR_PD_Jauh: string;
  JsonO_OS_RPL_SR_PD_Jauh: string;
  JsonO_OD_RPL_SR_False: string;
  JsonO_OS_RPL_SR_False: string;
  JsonO_OD_RPL_SR_Axis: string;
  JsonO_OS_RPL_SR_Axis: string;
  JsonO_OD_RPL_SR_Adaptasi: string;
  JsonO_OS_RPL_SR_Adaptasi: string;
  JsonO_OD_RPL_RS_VA: string;
  JsonO_OS_RPL_RS_VA: string;
  JsonO_OD_RPL_RS_PD_Jauh: string;
  JsonO_OS_RPL_RS_PD_Jauh: string;
  JsonO_OD_RPL_RS_False: string;
  JsonO_OS_RPL_RS_False: string;
  JsonO_OD_RPL_RS_Axis: string;
  JsonO_OS_RPL_RS_Axis: string;
  JsonO_OD_RPL_RS_Adaptasi: string;
  JsonO_OS_RPL_RS_Adaptasi: string;
  od_non_contact: string;
  os_non_contact: string;
  od_tanam_lensa: string;
  os_tanam_lensa: string;
  od_schiotz: string;
  os_schiotz: string;
  note: string;
  isResep: boolean;
  resep: any;
  isGambarP: boolean;
  gambarP: string;

  isJsonO_pediatrik: boolean;
  isJsonO_cardif: boolean;
  isJsonO_test_distance1m: boolean;
  JsonO_OD_test_distance1m: string;
  JsonO_OS_test_distance1m: string;
  isJsonO_test_distance50m: boolean;
  JsonO_OD_test_distance50m: string;
  JsonO_OS_test_distance50m: string;
  isJsonO_tac: boolean;
  isJsonO_at38cm: boolean;
  JsonO_OD_at38cm: string;
  JsonO_OS_at38cm: string;
  isJsonO_at55cm: boolean;
  JsonO_OD_at55cm: string;
  JsonO_OS_at55cm: string;
  isJsonO_at84cm: boolean;
  JsonO_OD_at84cm: string;
  JsonO_OS_at84cm: string;
  isJsonO_RPL_Ped: boolean;
  isJsonO_RPL_SR_Ped: boolean;
  OD_RPL_SR_Ped: string;
  OS_RPL_SR_ped: string;
  isJsonO_RPL_SR_Visus_Akhir_Ped: boolean;
  JsonO_OD_RPL_SR_Visus_Akhir_Ped: string;
  JsonO_OS_RPL_SR_Visus_Akhir_Ped: string;
  isJsonO_RPL_SR_Axis_Ped: boolean;
  JsonO_OD_RPL_SR_Axis_Ped: string;
  JsonO_OS_RPL_SR_Axis_Ped: string;
  isJsonO_RPL_SR_PD_Jauh_Ped: boolean;
  JsonO_OD_RPL_SR_PD_Jauh_Ped: string;
  JsonO_OS_RPL_SR_PD_Jauh_Ped: string;
  isJsonO_RPL_SR_False_Ped: boolean;
  JsonO_OD_RPL_SR_False_Ped: string;
  JsonO_OS_RPL_SR_False_Ped: string;
  isJsonO_RPL_SR_Adaptasi_Ped: boolean;
  JsonO_OD_RPL_SR_Adaptasi_Ped: string;
  JsonO_OS_RPL_SR_Adaptasi_Ped: string;
  isJsonO_Ocular_Motility: boolean;
  JsonO_OD_Ocular_1: string;
  JsonO_OD_Ocular_2: string;
  JsonO_OD_Ocular_3: string;
  JsonO_OD_Ocular_4: string;
  JsonO_OD_Ocular_5: string;
  JsonO_OD_Ocular_6: string;
  JsonO_OS_Ocular_1: string;
  JsonO_OS_Ocular_2: string;
  JsonO_OS_Ocular_3: string;
  JsonO_OS_Ocular_4: string;
  JsonO_OS_Ocular_5: string;
  JsonO_OS_Ocular_6: string;
  isJsonO_Cover: boolean;
  isJsonO_Ortho: boolean;
  ortho_without_od: string;
  ortho_without_os: string;
  ortho_with_glass_od: string;
  ortho_with_glass_os: string;
  isJsonO_Prisma: boolean;
  JsonO_OD_without_near_xt: string;
  JsonO_OD_without_near_et: string;
  JsonO_OD_without_near_hi: string;
  JsonO_OD_without_near_ho: string;
  JsonO_OS_without_near_xt: string;
  JsonO_OS_without_near_et: string;
  JsonO_OS_without_near_hi: string;
  JsonO_OS_without_near_ho: string;
  JsonO_OD_without_distance_xt: string;
  JsonO_OD_without_distance_et: string;
  JsonO_OD_without_distance_hi: string;
  JsonO_OD_without_distance_ho: string;
  JsonO_OS_without_distance_xt: string;
  JsonO_OS_without_distance_et: string;
  JsonO_OS_without_distance_hi: string;
  JsonO_OS_without_distance_ho: string;
  JsonO_OD_with_near_xt: string;
  JsonO_OD_with_near_et: string;
  JsonO_OD_with_near_hi: string;
  JsonO_OD_with_near_ho: string;
  JsonO_OS_with_near_xt: string;
  JsonO_OS_with_near_et: string;
  JsonO_OS_with_near_hi: string;
  JsonO_OS_with_near_ho: string;
  JsonO_OD_with_distance_xt: string;
  JsonO_OD_with_distance_et: string;
  JsonO_OD_with_distance_hi: string;
  JsonO_OD_with_distance_ho: string;
  JsonO_OS_with_distance_xt: string;
  JsonO_OS_with_distance_et: string;
  JsonO_OS_with_distance_hi: string;
  JsonO_OS_with_distance_ho: string;
  isJsonO_RS : boolean;
  isJsonO_Circles : boolean;
  JsonO_OD_RS_Cir : string;
  JsonO_OS_RS_Cir : string;
  isJsonO_Randot_Form : boolean;
  JsonO_OD_RS_Ran :string;
  JsonO_OS_RS_Ran :string;
  isJsonO_Animal : boolean;
  JsonO_OD_RS_Ani :string;
  JsonO_OS_RS_Ani : string;
  isJsonO_OKN_Drum: boolean;
  JsonO_ODS_OKN_Drum: string;
  isJsonO_RAF_ruler: boolean;
  JsonO_ODS_RAF_ruler: string;
  isJsonO_Nearvision: boolean;
  JsonO_OD_Nearvision: string;
  JsonO_OS_Nearvision: string;
  isJsonO_Ptosis_FIP: boolean;
  JsonO_OD_Ptosis_FIP: string;
  JsonO_OS_Ptosis_FIP: string;
  isJsonO_Ptosis_MRD: boolean;
  JsonO_OD_Ptosis_MRD: string;
  JsonO_OS_Ptosis_MRD: string;
  isJsonO_Ptosis_LA: boolean;
  JsonO_OD_Ptosis_LA: string;
  JsonO_OS_Ptosis_LA: string;
  isJsonO_TNO_stereoskopis: boolean;
  JsonO_TNO_stereoskopis_1: string;
  JsonO_TNO_stereoskopis_2: string;
  JsonO_TNO_stereoskopis_3: string;
  JsonO_TNO_stereoskopis_4: string;
  JsonO_TNO_stereoskopis_5: string;
  isJsonO_TNO_1: boolean;
  isJsonO_TNO_2: boolean;
  isJsonO_TNO_3: boolean;
  isJsonO_TNO_4: boolean;
  isJsonO_TNO_5: boolean;
  isJsonO_Goniometer: boolean;
  JsonO_ODS_Goniometer : string;
  goniometer_od: string;
  goniometer_os : string;

  constructor(req: ICPPTPDFRequestData) {
    this.umur = req.umur;
    this.tanggal = req.tanggal;
    this.unit = req.unit;
    this.isDokter = req.isDokter;
    this.isPerawat = req.isPerawat;
    this.isJsonO = req.isJsonO;
    this.ppa = req.ppa;
    this.isRO = req.isRO;
    this.S = req.S;
    this.O = req.O;
    this.A = req.A;
    this.P = req.P;
    this.tandaTanganPerawat = req.tandaTanganPerawat;
    this.tandaTanganDokter = req.tandaTanganDokter;
    this.tandaTanganDokterVerifikasi = req.tandaTanganDokterVerifikasi;
    this.namaPerawat = req.namaPerawat;
    this.namaDokter = req.namaDokter;
    this.namaDokterVerifikasi = req.namaDokterVerifikasi;
    this.intruksiPPA = req.intruksiPPA;
    this.JsonO_OD_VA = req.JsonO_OD_VA;
    this.JsonO_OS_VA = req.JsonO_OS_VA;
    this.JsonO_OD_False = req.JsonO_OD_False;
    this.JsonO_OS_False = req.JsonO_OS_False;
    this.JsonO_OD_PH = req.JsonO_OD_PH;
    this.JsonO_OS_PH = req.JsonO_OS_PH;
    this.JsonO_OD_Jagger = req.JsonO_OD_Jagger;
    this.JsonO_OS_Jagger = req.JsonO_OS_Jagger;
    this.JsonO_OD_KML_PD_Jauh = req.JsonO_OD_KML_PD_Jauh;
    this.JsonO_OS_KML_PD_Jauh = req.JsonO_OS_KML_PD_Jauh;
    this.JsonO_OD_KML_PD_Dekat = req.JsonO_OD_KML_PD_Dekat;
    this.JsonO_OS_KML_PD_Dekat = req.JsonO_OS_KML_PD_Dekat;
    this.JsonO_OD_KML_False = req.JsonO_OD_KML_False;
    this.JsonO_OS_KML_False = req.JsonO_OS_KML_False;
    this.JsonO_OD_KML_Addisi = req.JsonO_OD_KML_Addisi;
    this.JsonO_OS_KML_Addisi = req.JsonO_OS_KML_Addisi;
    this.JsonO_OD_KML_Axis = req.JsonO_OD_KML_Axis;
    this.JsonO_OS_KML_Axis = req.JsonO_OS_KML_Axis;
    this.JsonO_OD_KML_Jagger = req.JsonO_OD_KML_Jagger;
    this.JsonO_OS_KML_Jagger = req.JsonO_OS_KML_Jagger;
    this.JsonO_OD_Koreksi1_PD_Jauh = req.JsonO_OD_Koreksi1_PD_Jauh;
    this.JsonO_OS_Koreksi1_PD_Jauh = req.JsonO_OS_Koreksi1_PD_Jauh;
    this.JsonO_OD_Koreksi1_PD_Dekat = req.JsonO_OD_Koreksi1_PD_Dekat;
    this.JsonO_OS_Koreksi1_PD_Dekat = req.JsonO_OS_Koreksi1_PD_Dekat;
    this.JsonO_OD_Koreksi1_False = req.JsonO_OD_Koreksi1_False;
    this.JsonO_OS_Koreksi1_False = req.JsonO_OS_Koreksi1_False;
    this.JsonO_OD_Koreksi1_Addisi = req.JsonO_OD_Koreksi1_Addisi;
    this.JsonO_OS_Koreksi1_Addisi = req.JsonO_OS_Koreksi1_Addisi;
    this.JsonO_OD_Koreksi1_Axis = req.JsonO_OD_Koreksi1_Axis;
    this.JsonO_OS_Koreksi1_Axis = req.JsonO_OS_Koreksi1_Axis;
    this.JsonO_OD_Koreksi1_Jagger = req.JsonO_OD_Koreksi1_Jagger;
    this.JsonO_OS_Koreksi1_Jagger = req.JsonO_OS_Koreksi1_Jagger;
    this.JsonO_OD_Koreksi1_Adaptasi = req.JsonO_OD_Koreksi1_Adaptasi;
    this.JsonO_OS_Koreksi1_Adaptasi = req.JsonO_OS_Koreksi1_Adaptasi;
    this.JsonO_OD_Koreksi2_PD_Jauh = req.JsonO_OD_Koreksi2_PD_Jauh;
    this.JsonO_OS_Koreksi2_PD_Jauh = req.JsonO_OS_Koreksi2_PD_Jauh;
    this.JsonO_OD_Koreksi2_PD_Dekat = req.JsonO_OD_Koreksi2_PD_Dekat;
    this.JsonO_OS_Koreksi2_PD_Dekat = req.JsonO_OS_Koreksi2_PD_Dekat;
    this.JsonO_OD_Koreksi2_False = req.JsonO_OD_Koreksi2_False;
    this.JsonO_OS_Koreksi2_False = req.JsonO_OS_Koreksi2_False;
    this.JsonO_OD_Koreksi2_Addisi = req.JsonO_OD_Koreksi2_Addisi;
    this.JsonO_OS_Koreksi2_Addisi = req.JsonO_OS_Koreksi2_Addisi;
    this.JsonO_OD_Koreksi2_Axis = req.JsonO_OD_Koreksi2_Axis;
    this.JsonO_OS_Koreksi2_Axis = req.JsonO_OS_Koreksi2_Axis;
    this.JsonO_OD_Koreksi2_Jagger = req.JsonO_OD_Koreksi2_Jagger;
    this.JsonO_OS_Koreksi2_Jagger = req.JsonO_OS_Koreksi2_Jagger;
    this.JsonO_OD_Koreksi2_Adaptasi = req.JsonO_OD_Koreksi2_Adaptasi;
    this.JsonO_OS_Koreksi2_Adaptasi = req.JsonO_OS_Koreksi2_Adaptasi;
    this.JsonO_OD_KMB_PD_Jauh = req.JsonO_OD_KMB_PD_Jauh;
    this.JsonO_OS_KMB_PD_Jauh = req.JsonO_OS_KMB_PD_Jauh;
    this.JsonO_OD_KMB_PD_Dekat = req.JsonO_OD_KMB_PD_Dekat;
    this.JsonO_OS_KMB_PD_Dekat = req.JsonO_OS_KMB_PD_Dekat;
    this.JsonO_OD_KMB_False = req.JsonO_OD_KMB_False;
    this.JsonO_OS_KMB_False = req.JsonO_OS_KMB_False;
    this.JsonO_OD_KMB_Addisi = req.JsonO_OD_KMB_Addisi;
    this.JsonO_OS_KMB_Addisi = req.JsonO_OS_KMB_Addisi;
    this.JsonO_OD_KMB_Axis = req.JsonO_OD_KMB_Axis;
    this.JsonO_OS_KMB_Axis = req.JsonO_OS_KMB_Axis;
    this.JsonO_OD_KMB_Jagger = req.JsonO_OD_KMB_Jagger;
    this.JsonO_OS_KMB_Jagger = req.JsonO_OS_KMB_Jagger;
    this.JsonO_OD_RPL_SR_VA = req.JsonO_OD_RPL_SR_VA;
    this.JsonO_OS_RPL_SR_VA = req.JsonO_OS_RPL_SR_VA;
    this.JsonO_OD_RPL_SR_PD_Jauh = req.JsonO_OD_RPL_SR_PD_Jauh;
    this.JsonO_OS_RPL_SR_PD_Jauh = req.JsonO_OS_RPL_SR_PD_Jauh;
    this.JsonO_OD_RPL_SR_False = req.JsonO_OD_RPL_SR_False;
    this.JsonO_OS_RPL_SR_False = req.JsonO_OS_RPL_SR_False;
    this.JsonO_OD_RPL_SR_Axis = req.JsonO_OD_RPL_SR_Axis;
    this.JsonO_OS_RPL_SR_Axis = req.JsonO_OS_RPL_SR_Axis;
    this.JsonO_OD_RPL_SR_Adaptasi = req.JsonO_OD_RPL_SR_Adaptasi;
    this.JsonO_OS_RPL_SR_Adaptasi = req.JsonO_OS_RPL_SR_Adaptasi;
    this.JsonO_OD_RPL_RS_VA = req.JsonO_OD_RPL_RS_VA;
    this.JsonO_OS_RPL_RS_VA = req.JsonO_OS_RPL_RS_VA;
    this.JsonO_OD_RPL_RS_PD_Jauh = req.JsonO_OD_RPL_RS_PD_Jauh;
    this.JsonO_OS_RPL_RS_PD_Jauh = req.JsonO_OS_RPL_RS_PD_Jauh;
    this.JsonO_OD_RPL_RS_False = req.JsonO_OD_RPL_RS_False;
    this.JsonO_OS_RPL_RS_False = req.JsonO_OS_RPL_RS_False;
    this.JsonO_OD_RPL_RS_Axis = req.JsonO_OD_RPL_RS_Axis;
    this.JsonO_OS_RPL_RS_Axis = req.JsonO_OS_RPL_RS_Axis;
    this.JsonO_OD_RPL_RS_Adaptasi = req.JsonO_OD_RPL_RS_Adaptasi;
    this.JsonO_OS_RPL_RS_Adaptasi = req.JsonO_OS_RPL_RS_Adaptasi;
    this.od_non_contact = req.od_non_contact;
    this.os_non_contact = req.os_non_contact;
    this.od_tanam_lensa = req.od_tanam_lensa;
    this.os_tanam_lensa = req.os_tanam_lensa;
    this.od_schiotz = req.od_schiotz;
    this.os_schiotz = req.os_schiotz;
    this.note = req.note;
    this.isResep = req.isResep;
    this.resep = req.resep;
    this.isGambarP = req.isGambarP;
    this.gambarP = req.gambarP;

    this.isJsonO_pediatrik = req.isJsonO_pediatrik;
    this.isJsonO_cardif = req.isJsonO_cardif;
    this.isJsonO_test_distance1m = req.isJsonO_test_distance1m;
    this.JsonO_OD_test_distance1m = req.JsonO_OD_test_distance1m;
    this.JsonO_OS_test_distance1m = req.JsonO_OS_test_distance1m;
    this.isJsonO_test_distance50m = req.isJsonO_test_distance50m;
    this.JsonO_OD_test_distance50m = req.JsonO_OD_test_distance50m;
    this.JsonO_OS_test_distance50m = req.JsonO_OS_test_distance50m;
    this.isJsonO_tac = req.isJsonO_tac;
    this.isJsonO_at38cm = req.isJsonO_at38cm;
    this.JsonO_OD_at38cm = req.JsonO_OD_at38cm;
    this.JsonO_OS_at38cm = req.JsonO_OS_at38cm;
    this.isJsonO_at55cm = req.isJsonO_at55cm;
    this.JsonO_OD_at55cm = req.JsonO_OD_at55cm;
    this.JsonO_OS_at55cm = req.JsonO_OS_at55cm;
    this.isJsonO_at84cm = req.isJsonO_at84cm;
    this.JsonO_OD_at84cm = req.JsonO_OD_at84cm;
    this.JsonO_OS_at84cm = req.JsonO_OS_at84cm;
    this.isJsonO_RPL_Ped  = req.isJsonO_RPL_Ped;
    this.isJsonO_RPL_SR_Ped = req.isJsonO_RPL_SR_Ped;
    this.OD_RPL_SR_Ped = req.OD_RPL_SR_Ped;
    this.OS_RPL_SR_ped = req.OS_RPL_SR_ped;
    this.isJsonO_RPL_SR_Visus_Akhir_Ped = req.isJsonO_RPL_SR_Visus_Akhir_Ped;
    this.JsonO_OD_RPL_SR_Visus_Akhir_Ped = req.JsonO_OD_RPL_SR_Visus_Akhir_Ped;
    this.JsonO_OS_RPL_SR_Visus_Akhir_Ped = req.JsonO_OS_RPL_SR_Visus_Akhir_Ped;
    this.isJsonO_RPL_SR_Axis_Ped = req.isJsonO_RPL_SR_Axis_Ped;
    this.JsonO_OD_RPL_SR_Axis_Ped = req.JsonO_OD_RPL_SR_Axis_Ped;
    this.JsonO_OS_RPL_SR_Axis_Ped = req.JsonO_OS_RPL_SR_Axis_Ped;
    this.isJsonO_RPL_SR_PD_Jauh_Ped = req.isJsonO_RPL_SR_PD_Jauh_Ped;
    this.JsonO_OD_RPL_SR_PD_Jauh_Ped = req.JsonO_OD_RPL_SR_PD_Jauh_Ped;
    this.JsonO_OS_RPL_SR_PD_Jauh_Ped = req.JsonO_OS_RPL_SR_PD_Jauh_Ped;
    this.isJsonO_RPL_SR_False_Ped = req.isJsonO_RPL_SR_False_Ped;
    this.JsonO_OD_RPL_SR_False_Ped = req.JsonO_OD_RPL_SR_False_Ped;
    this.JsonO_OS_RPL_SR_False_Ped = req.JsonO_OS_RPL_SR_False_Ped;
    this.isJsonO_RPL_SR_Adaptasi_Ped = req.isJsonO_RPL_SR_Adaptasi_Ped;
    this.JsonO_OD_RPL_SR_Adaptasi_Ped = req.JsonO_OD_RPL_SR_Adaptasi_Ped;
    this.JsonO_OS_RPL_SR_Adaptasi_Ped = req.JsonO_OS_RPL_SR_Adaptasi_Ped;
    this.isJsonO_Ocular_Motility  = req.isJsonO_Ocular_Motility;
    this.JsonO_OD_Ocular_1 = req.JsonO_OD_Ocular_1;
    this.JsonO_OD_Ocular_2 = req.JsonO_OD_Ocular_2;
    this.JsonO_OD_Ocular_3 = req.JsonO_OD_Ocular_3;
    this.JsonO_OD_Ocular_4 = req.JsonO_OD_Ocular_4;
    this.JsonO_OD_Ocular_5 = req.JsonO_OD_Ocular_5;
    this.JsonO_OD_Ocular_6 = req.JsonO_OD_Ocular_6;
    this.JsonO_OS_Ocular_1 = req.JsonO_OS_Ocular_1;
    this.JsonO_OS_Ocular_2 = req.JsonO_OS_Ocular_2;
    this.JsonO_OS_Ocular_3 = req.JsonO_OS_Ocular_3;
    this.JsonO_OS_Ocular_4 = req.JsonO_OS_Ocular_4;
    this.JsonO_OS_Ocular_5 = req.JsonO_OS_Ocular_5;
    this.JsonO_OS_Ocular_6 = req.JsonO_OS_Ocular_6;
    this.isJsonO_Cover  = req.isJsonO_Cover;
    this.isJsonO_Ortho  = req.isJsonO_Ortho;
    this.ortho_without_od = req.ortho_without_od;
    this.ortho_without_os = req.ortho_without_os;
    this.ortho_with_glass_od = req.ortho_with_glass_od;
    this.ortho_with_glass_os = req.ortho_with_glass_os;
    this.isJsonO_Prisma   = req.isJsonO_Prisma;
    this.JsonO_OD_without_near_xt = req.JsonO_OD_without_near_xt;
    this.JsonO_OD_without_near_et = req.JsonO_OD_without_near_et;
    this.JsonO_OD_without_near_hi = req.JsonO_OD_without_near_hi;
    this.JsonO_OD_without_near_ho = req.JsonO_OD_without_near_ho;
    this.JsonO_OS_without_near_xt = req.JsonO_OS_without_near_xt;
    this.JsonO_OS_without_near_et = req.JsonO_OS_without_near_et;
    this.JsonO_OS_without_near_hi = req.JsonO_OS_without_near_hi;
    this.JsonO_OS_without_near_ho = req.JsonO_OS_without_near_ho;
    this.JsonO_OD_without_distance_xt = req.JsonO_OD_without_distance_xt;
    this.JsonO_OD_without_distance_et = req.JsonO_OD_without_distance_et;
    this.JsonO_OD_without_distance_hi = req.JsonO_OD_without_distance_hi;
    this.JsonO_OD_without_distance_ho = req.JsonO_OD_without_distance_ho;
    this.JsonO_OS_without_distance_xt = req.JsonO_OS_without_distance_xt;
    this.JsonO_OS_without_distance_et = req.JsonO_OS_without_distance_et;
    this.JsonO_OS_without_distance_hi = req.JsonO_OS_without_distance_hi;
    this.JsonO_OS_without_distance_ho = req.JsonO_OS_without_distance_ho;
    this.JsonO_OD_with_near_xt = req.JsonO_OD_with_near_xt;
    this.JsonO_OD_with_near_et = req.JsonO_OD_with_near_et;
    this.JsonO_OD_with_near_hi = req.JsonO_OD_with_near_hi;
    this.JsonO_OD_with_near_ho = req.JsonO_OD_with_near_ho;
    this.JsonO_OS_with_near_xt = req.JsonO_OS_with_near_xt;
    this.JsonO_OS_with_near_et = req.JsonO_OS_with_near_et;
    this.JsonO_OS_with_near_hi = req.JsonO_OS_with_near_hi;
    this.JsonO_OS_with_near_ho = req.JsonO_OS_with_near_ho;
    this.JsonO_OD_with_distance_xt = req.JsonO_OD_with_distance_xt;
    this.JsonO_OD_with_distance_et = req.JsonO_OD_with_distance_et;
    this.JsonO_OD_with_distance_hi = req.JsonO_OD_with_distance_hi;
    this.JsonO_OD_with_distance_ho = req.JsonO_OD_with_distance_ho;
    this.JsonO_OS_with_distance_xt = req.JsonO_OS_with_distance_xt;
    this.JsonO_OS_with_distance_et = req.JsonO_OS_with_distance_et;
    this.JsonO_OS_with_distance_hi = req.JsonO_OS_with_distance_hi;
    this.JsonO_OS_with_distance_ho = req.JsonO_OS_with_distance_ho;
    this.isJsonO_RS = req.isJsonO_RS
    this.isJsonO_Circles  = req.isJsonO_Circles
    this.JsonO_OD_RS_Cir  = req.JsonO_OD_RS_Cir
    this.JsonO_OS_RS_Cir  = req.JsonO_OS_RS_Cir
    this.isJsonO_Randot_Form  = req.isJsonO_Randot_Form
    this.JsonO_OD_RS_Ran  = req.JsonO_OD_RS_Ran
    this.JsonO_OS_RS_Ran  = req.JsonO_OS_RS_Ran
    this.isJsonO_Animal = req.isJsonO_Animal
    this.JsonO_OD_RS_Ani = req.JsonO_OD_RS_Ani
    this.JsonO_OS_RS_Ani  = req.JsonO_OS_RS_Ani
    this.isJsonO_OKN_Drum = req.isJsonO_OKN_Drum;
    this.JsonO_ODS_OKN_Drum = req.JsonO_ODS_OKN_Drum;
    this.isJsonO_RAF_ruler  = req.isJsonO_RAF_ruler;
    this.JsonO_ODS_RAF_ruler = req.JsonO_ODS_RAF_ruler;
    this.isJsonO_Nearvision  = req.isJsonO_Nearvision;
    this.JsonO_OD_Nearvision  = req.JsonO_OD_Nearvision;
    this.JsonO_OS_Nearvision  = req.JsonO_OS_Nearvision;
    this.isJsonO_Ptosis_FIP  = req.isJsonO_Ptosis_FIP;
    this.JsonO_OD_Ptosis_FIP  = req.JsonO_OD_Ptosis_FIP;
    this.JsonO_OS_Ptosis_FIP  = req.JsonO_OS_Ptosis_FIP;
    this.isJsonO_Ptosis_MRD  = req.isJsonO_Ptosis_MRD;
    this.JsonO_OD_Ptosis_MRD  = req.JsonO_OD_Ptosis_MRD;
    this.JsonO_OS_Ptosis_MRD  = req.JsonO_OS_Ptosis_MRD;
    this.isJsonO_Ptosis_LA  = req.isJsonO_Ptosis_LA;
    this.JsonO_OD_Ptosis_LA  = req.JsonO_OD_Ptosis_LA;
    this.JsonO_OS_Ptosis_LA  = req.JsonO_OS_Ptosis_LA;
    this.isJsonO_TNO_stereoskopis  = req.isJsonO_TNO_stereoskopis;
    this.JsonO_TNO_stereoskopis_1  = req.JsonO_TNO_stereoskopis_1;
    this.JsonO_TNO_stereoskopis_2  = req.JsonO_TNO_stereoskopis_2;
    this.JsonO_TNO_stereoskopis_3  = req.JsonO_TNO_stereoskopis_3;
    this.JsonO_TNO_stereoskopis_4  = req.JsonO_TNO_stereoskopis_4;
    this.JsonO_TNO_stereoskopis_5  = req.JsonO_TNO_stereoskopis_5;
    this.isJsonO_TNO_1  = req.isJsonO_TNO_1;
    this.isJsonO_TNO_2  = req.isJsonO_TNO_2;
    this.isJsonO_TNO_3  = req.isJsonO_TNO_3;
    this.isJsonO_TNO_4  = req.isJsonO_TNO_4;
    this.isJsonO_TNO_5  = req.isJsonO_TNO_5;
    this.isJsonO_Goniometer  = req.isJsonO_Goniometer;
    this.JsonO_ODS_Goniometer   = req.JsonO_ODS_Goniometer;
    this.goniometer_od  = req.goniometer_od;
    this.goniometer_os   = req.goniometer_os;
  }

  static createFromJson(json: ICPPTPDFRequestData) {
    return new CPPTPDFRequestData(json);
  }
}

export interface ICPPTPDFRequest {
  umur: string;
  'pasien.Tgl_Lahir': string;
  items: Array<ICPPTPDFRequestData>;
}

export class CPPTPDFRequest {
  umur: string;
  'pasien.Tgl_Lahir': string;
  items: Array<ICPPTPDFRequestData>;

  constructor(req: ICPPTPDFRequest) {
    this.umur = req.umur;
    this["pasien.Tgl_Lahir"] = req["pasien.Tgl_Lahir"];
    this.items = req.items;
  }

  static createFromRecords(records: Array<CpptRecord>, treatment: ITreatmentModel): ICPPTPDFRequestData[] {

    const jsonConcat = (cppts: any, pediatriks: any) => {
      for (const key in cppts) {
        cppts[key] = {...cppts[key], ...pediatriks[key]};
      }
      return cppts;
    }

    const cppts: ICPPTRequestData[] = records.map((item: CpptRecord) => {
      const resep = item.Resep && Array.isArray(item.Resep) && item.Resep.length > 0 ? item.Resep : [];
      const newResep = resep.map((item: IPrescription, key: number) => {
        return {
          no: `${key + 1}`,
          namaObat: item.Nama_Obat,
          namaSatuan: item.Nama_Satuan,
          jumlah: item.Jumlah,
          aturanPakai: item.Kode_AturanPakai,
          catatan: item.Catatan,
        }
      });
      const formatDate = (dateNow: any) => {
        const d = new Date(dateNow);
        const dateFormat = `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear().toString().padStart(4, '0')}`
        return dateFormat;
      }
      const getLain = (lainCode: string, lainText: string) => {
        if (lainCode === 'Lain-Lain' || lainCode === 'Lain-lain') {
          return lainText;
        } else {
          return lainCode;
        }
      }

      const cpptRaw = {
        umur: CreatePDFRequest.normalizeAge(treatment?.Pasien?.Umur_Lengkap),
        // tanggal: item.Waktu ?? '',
        'pasien.Tgl_Lahir': formatDate(treatment?.Pasien?.Tgl_Lahir),
        nik: treatment?.Pasien?.NIK ?? '',
        tanggal: DateTimeConverter.convertToDateTime(item.Waktu),
        unit: item.Unit ?? '',
        isDokter: !!(item.Unit !== 'RO' && item.Unit !== 'Farmasi' && item.Is_Form_Dokter),
        isPerawat: !!(item.Unit !== 'RO' && item.Unit !== 'Farmasi' && item.Unit !== 'Gizi' && !item.Is_Form_Dokter),
        isJsonO: !!(item.Cmb_Data_O && item.Cmb_Data_O === 1),
        ppa: item.Unit && item.Unit === 'RawatJalan' ? (item.Is_Form_Dokter && item.Is_Form_Dokter === 1 ? 'Dokter' : 'Perawat') : item.Unit,
        isRO: !!(item.Unit && item.Unit === 'RO'),
        isFarmasi: !!(item.Unit && item.Unit === 'Farmasi'),
        isGizi: !!(item.Unit && item.Unit === 'Gizi'),
        D: item.Data_D ?? '',
        I: item.Data_I ?? '',
        M: item.Data_M ?? '',
        E: item.Data_E ?? '',
        ttd_dietiesen: item.TTD_Perawat_Cppt && item.TTD_Perawat_Cppt !== '' ? item.TTD_Perawat_Cppt : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        namaDietisien: item.Nama_Perawat_Cppt ?? '',
        JsonA_1: item.Masalah_Obat_Teks ?? '',
        JsonA_2: item.Efek_Samping_Obat ?? '',
        JsonA_3: item.Interaksi_Obat ?? '',
        JsonP_1: item.Monitor_Terapi ?? '',
        JsonP_2: item.Monitor_Efek_Samping ?? '',
        Anjuran_utk_dr: item.Anjuran_Dokter ?? '',
        Anjuran_utk_perawat: item.Anjuran_Perawat ?? '',
        namaFarmasi: item.Nama_Perawat_Cppt ?? '',
        tandaTanganFarmasi: item.TTD_Perawat_Cppt && item.TTD_Perawat_Cppt !== '' ? item.TTD_Perawat_Cppt : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        isInstruksiPPA: !!(item.Instruksi_PPA && item.Instruksi_PPA !== ''),
        isGambarMata: !!(item.Submit_Mata && item.Submit_Mata === 1),
        isGambarRetina: !!(item.Submit_Retina && item.Submit_Retina === 1),
        MataOD: item.Gambar_Mata_OD && item.Gambar_Mata_OD !== '' ? item.Gambar_Mata_OD : 'https://bucket.rsmatasmec.com/eye-clean.jpeg',
        MataOS: item.Gambar_Mata_OS && item.Gambar_Mata_OS !== '' ? item.Gambar_Mata_OS : 'https://bucket.rsmatasmec.com/eye-clean.jpeg',
        RetinaOD: item.Gambar_Retina_OD && item.Gambar_Retina_OD !== '' ? item.Gambar_Retina_OD : 'https://bucket.rsmatasmec.com/retina-od.jpg',
        RetinaOS: item.Gambar_Retina_OS && item.Gambar_Retina_OS !== '' ? item.Gambar_Retina_OS : 'https://bucket.rsmatasmec.com/retina-os.jpg',
        S: item.Data_S && item.Data_S === 'Lain-lain' ? item.Data_S_Lain_Text : item.Data_S ? item.Data_S : '',
        O: `${item.Data_O ?? ''}\n${item.TD || item.KGD ? `TD: ${item.TD ?? ''}mmHg - KGD: ${item.KGD ?? ''}mg/dl` : ''}`,
        A: item.Data_A ?? '',
        P: `${item.Data_P ? `${item.Data_P}\n` : ''}${item.Anjuran ? `${item.Anjuran}` : ''}`,
        tandaTanganPerawat: item.TTD_Perawat_Cppt && item.TTD_Perawat_Cppt !== '' ? item.TTD_Perawat_Cppt : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        tandaTanganDokter: item.TTD_Dokter_Pengkaji && item.TTD_Dokter_Pengkaji !== '' ? item.TTD_Dokter_Pengkaji : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        tandaTanganDokterVerifikasi: item.TTD_Dokter_Dpjp && item.TTD_Dokter_Dpjp !== '' ? item.TTD_Dokter_Dpjp : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        namaPerawat: item.Nama_Perawat_Cppt ?? '',
        namaDokter: item.Nama_Dokter_Pengkaji ?? '',
        namaDokterVerifikasi: item.Dokter_Dpjp_Nama ?? '',
        intruksiPPA: item.Instruksi_PPA ?? '',
        isJsonO_VA: !!(item.Data_O_Json && (item?.Data_O_Json?.OD?.VA !== '' ||  item?.Data_O_Json?.OS?.VA !== '')),
        isJsonO_False: !!(item.Data_O_Json && (item?.Data_O_Json?.OD?.False !== '' ||  item?.Data_O_Json?.OS?.False !== '')),
        isJsonO_PH: !!(item.Data_O_Json && (item?.Data_O_Json?.OD?.PH !== '' ||  item?.Data_O_Json?.OS?.PH !== '')),
        isJsonO_Addisi: !!(item.Data_O_Json && (item?.Data_O_Json?.OD?.Add !== '' ||  item?.Data_O_Json?.OS?.Add !== '')),
        isJsonO_Jagger: !!(item.Data_O_Json && (item?.Data_O_Json?.OD?.Jagger !== '' ||  item?.Data_O_Json?.OS?.Jagger !== '')),
        JsonO_OD_VA: item.Data_O_Json?.OD?.VA ?? '',
        JsonO_OS_VA: item.Data_O_Json?.OS?.VA ?? '',
        JsonO_OD_False: item.Data_O_Json?.OD?.False ?? '',
        JsonO_OS_False: item.Data_O_Json?.OS?.False ?? '',
        JsonO_OD_PH: item.Data_O_Json?.OD?.PH ?? '',
        JsonO_OS_PH: item.Data_O_Json?.OS?.PH ?? '',
        JsonO_OD_Jagger: item.Data_O_Json?.OD?.Jagger ?? '',
        JsonO_OS_Jagger: item.Data_O_Json?.OS?.Jagger ?? '',
        isJsonO_KML: !!(item.Data_O_Json && (item?.Data_O_Json?.OD?.KML?.Select === 'on' ||  item?.Data_O_Json?.OS?.KML?.Select === 'on')),
        OD_KML: `Sph: ${item?.Data_O_Json?.OD?.KML?.Sph} Cyl. ${item?.Data_O_Json?.OD?.KML?.Cyl} x ${item?.Data_O_Json?.OD?.KML?.Axis}`,
        OS_KML: `Sph: ${item?.Data_O_Json?.OS?.KML?.Sph} Cyl. ${item?.Data_O_Json?.OS?.KML?.Cyl} x ${item?.Data_O_Json?.OS?.KML?.Axis}`,
        isJsonO_KML_VA: !!(item.Data_O_Json?.OD?.KML?.VA !== '' ||  item.Data_O_Json?.OS?.KML?.VA !== '' ||  item.Data_O_Json?.OD?.KML?.Va !== '' ||  item.Data_O_Json?.OS?.KML?.Va !== ''),
        JsonO_OD_KML_VA:  item?.Data_O_Json?.OD?.KML?.VA ?  item?.Data_O_Json?.OD?.KML?.VA :  item?.Data_O_Json?.OD?.KML?.Va ?  item?.Data_O_Json?.OD?.KML?.Va : '',
        JsonO_OS_KML_VA:  item?.Data_O_Json?.OS?.KML?.VA ?  item?.Data_O_Json?.OS?.KML?.VA :  item?.Data_O_Json?.OS?.KML?.Va ?  item?.Data_O_Json?.OS?.KML?.Va : '',
        isJsonO_KML_PD_Jauh: !!(item?.Data_O_Json?.OD?.KML?.Pd_Jauh !== '' ||  item?.Data_O_Json?.OS?.KML?.Pd_Jauh !== ''),
        isJsonO_KML_PD_Dekat: !!(item?.Data_O_Json?.OD?.KML?.Pd_Dekat !== '' ||  item?.Data_O_Json?.OS?.KML?.Pd_Dekat !== ''),
        isJsonO_KML_False: !!(item?.Data_O_Json?.OD?.KML?.False !== '' ||  item?.Data_O_Json?.OS?.KML?.False !== ''),
        isJsonO_KML_Addisi: !!(item?.Data_O_Json?.OD?.KML?.Add !== '' ||  item?.Data_O_Json?.OS?.KML?.Add !== ''),
        isJsonO_KML_Axis: !!(item?.Data_O_Json?.OD?.KML?.Axis !== '' ||  item?.Data_O_Json?.OS?.KML?.Axis !== ''),
        isJsonO_KML_Jagger: !!(item?.Data_O_Json?.OD?.KML?.Jagger !== '' ||  item?.Data_O_Json?.OS?.KML?.Jagger !== ''),
        JsonO_OD_KML_PD_Jauh: item.Data_O_Json?.OD?.KML.Pd_Jauh ?? '',
        JsonO_OS_KML_PD_Jauh: item.Data_O_Json?.OS?.KML.Pd_Jauh ?? '',
        JsonO_OD_KML_PD_Dekat: item.Data_O_Json?.OD?.KML.Pd_Dekat ?? '',
        JsonO_OS_KML_PD_Dekat: item.Data_O_Json?.OS?.KML.Pd_Dekat ?? '',
        JsonO_OD_KML_False: item.Data_O_Json?.OD?.KML.False ?? '',
        JsonO_OS_KML_False: item.Data_O_Json?.OS?.KML.False ?? '',
        JsonO_OD_KML_Addisi: item.Data_O_Json?.OD?.KML.Add ?? '',
        JsonO_OS_KML_Addisi: item.Data_O_Json?.OS?.KML.Add ?? '',
        JsonO_OD_KML_Axis: item.Data_O_Json?.OD?.KML.Axis ?? '',
        JsonO_OS_KML_Axis: item.Data_O_Json?.OS?.KML.Axis ?? '',
        JsonO_OD_KML_Jagger: item.Data_O_Json?.OD?.KML.Jagger ?? '',
        JsonO_OS_KML_Jagger: item.Data_O_Json?.OS?.KML.Jagger ?? '',
        isJsonO_Koreksi1: !!(item?.Data_O_Json?.OD?.Koreksi_1?.Select === 'on' ||  item?.Data_O_Json?.OS?.Koreksi_1?.Select === 'on'),
        OD_Koreksi1: `Sph: ${item?.Data_O_Json?.OD?.Koreksi_1?.Sph} Cyl. ${item?.Data_O_Json?.OD?.Koreksi_1?.Cyl} x ${item?.Data_O_Json?.OD?.Koreksi_1?.Axis}`,
        OS_Koreksi1: `Sph: ${item?.Data_O_Json?.OS?.Koreksi_1?.Sph} Cyl. ${item?.Data_O_Json?.OS?.Koreksi_1?.Cyl} x ${item?.Data_O_Json?.OS?.Koreksi_1?.Axis}`,
        isJsonO_Koreksi1_VA: !!(item.Data_O_Json?.OD?.Koreksi_1?.VA !== '' ||  item.Data_O_Json?.OS?.Koreksi_1?.VA !== '' ||  item.Data_O_Json?.OD?.Koreksi_1?.Va !== '' ||  item.Data_O_Json?.OS?.Koreksi_1?.Va !== ''),
        JsonO_OD_Koreksi1_VA:  item?.Data_O_Json?.OD?.Koreksi_1?.VA ?  item?.Data_O_Json?.OD?.Koreksi_1?.VA :  item?.Data_O_Json?.OD?.Koreksi_1?.Va ?  item?.Data_O_Json?.OD?.Koreksi_1?.Va : '',
        JsonO_OS_Koreksi1_VA:  item?.Data_O_Json?.OS?.Koreksi_1?.VA ?  item?.Data_O_Json?.OS?.Koreksi_1?.VA :  item?.Data_O_Json?.OS?.Koreksi_1?.Va ?  item?.Data_O_Json?.OS?.Koreksi_1?.Va : '',
        isJsonO_Koreksi1_PD_Jauh: !!(item?.Data_O_Json?.OD?.Koreksi_1?.Pd_Jauh !== '' ||  item?.Data_O_Json?.OS?.Koreksi_1?.Pd_Jauh !== ''),
        isJsonO_Koreksi1_PD_Dekat: !!(item?.Data_O_Json?.OD?.Koreksi_1?.Pd_Dekat !== '' ||  item?.Data_O_Json?.OS?.Koreksi_1?.Pd_Dekat !== ''),
        isJsonO_Koreksi1_False: !!(item?.Data_O_Json?.OD?.Koreksi_1?.False !== '' ||  item?.Data_O_Json?.OS?.Koreksi_1?.False !== ''),
        isJsonO_Koreksi1_Addisi: !!(item?.Data_O_Json?.OD?.Koreksi_1?.Add !== '' ||  item?.Data_O_Json?.OS?.Koreksi_1?.Add !== ''),
        isJsonO_Koreksi1_Axis: !!(item?.Data_O_Json?.OD?.Koreksi_1?.Axis !== '' ||  item?.Data_O_Json?.OS?.Koreksi_1?.Axis !== ''),
        isJsonO_Koreksi1_Jagger: !!(item?.Data_O_Json?.OD?.Koreksi_1?.Jagger !== '' ||  item?.Data_O_Json?.OS?.Koreksi_1?.Jagger !== ''),
        isJsonO_Koreksi1_Adaptasi: !!(item?.Data_O_Json?.OD?.Koreksi_1?.Adaptasi !== '' ||  item?.Data_O_Json?.OS?.Koreksi_1?.Adaptasi !== ''),
        JsonO_OD_Koreksi1_PD_Jauh: item.Data_O_Json?.OD?.Koreksi_1?.Pd_Jauh ?? '',
        JsonO_OS_Koreksi1_PD_Jauh: item.Data_O_Json?.OS?.Koreksi_1?.Pd_Jauh ?? '',
        JsonO_OD_Koreksi1_PD_Dekat: item.Data_O_Json?.OD?.Koreksi_1?.Pd_Dekat ?? '',
        JsonO_OS_Koreksi1_PD_Dekat: item.Data_O_Json?.OS?.Koreksi_1?.Pd_Dekat ?? '',
        JsonO_OD_Koreksi1_False: item.Data_O_Json?.OD?.Koreksi_1?.False ?? '',
        JsonO_OS_Koreksi1_False: item.Data_O_Json?.OS?.Koreksi_1?.False ?? '',
        JsonO_OD_Koreksi1_Addisi: item.Data_O_Json?.OD?.Koreksi_1?.Add ?? '',
        JsonO_OS_Koreksi1_Addisi: item.Data_O_Json?.OS?.Koreksi_1?.Add ?? '',
        JsonO_OD_Koreksi1_Axis: item.Data_O_Json?.OD?.Koreksi_1?.Axis ?? '',
        JsonO_OS_Koreksi1_Axis: item.Data_O_Json?.OS?.Koreksi_1?.Axis ?? '',
        JsonO_OD_Koreksi1_Jagger: item.Data_O_Json?.OD?.Koreksi_1?.Jagger ?? '',
        JsonO_OS_Koreksi1_Jagger: item.Data_O_Json?.OS?.Koreksi_1?.Jagger ?? '',
        JsonO_OD_Koreksi1_Adaptasi: item.Data_O_Json?.OD?.Koreksi_1?.Adaptasi ?? '',
        JsonO_OS_Koreksi1_Adaptasi: item.Data_O_Json?.OS?.Koreksi_1?.Adaptasi ?? '',
        isJsonO_Koreksi2: !!(item?.Data_O_Json?.OD?.Koreksi_2?.Select === 'on' ||  item?.Data_O_Json?.OS?.Koreksi_2?.Select === 'on'),
        OD_Koreksi2: `Sph: ${item?.Data_O_Json?.OD?.Koreksi_2?.Sph} Cyl. ${item?.Data_O_Json?.OD?.Koreksi_2?.Cyl} x ${item?.Data_O_Json?.OD?.Koreksi_2?.Axis}`,
        OS_Koreksi2: `Sph: ${item?.Data_O_Json?.OS?.Koreksi_2?.Sph} Cyl. ${item?.Data_O_Json?.OS?.Koreksi_2?.Cyl} x ${item?.Data_O_Json?.OS?.Koreksi_2?.Axis}`,
        isJsonO_Koreksi2_VA: !!(item.Data_O_Json?.OD?.Koreksi_2?.VA !== '' ||  item.Data_O_Json?.OS?.Koreksi_2?.VA !== '' ||  item.Data_O_Json?.OD?.Koreksi_2?.Va !== '' ||  item.Data_O_Json?.OS?.Koreksi_2?.Va !== ''),
        JsonO_OD_Koreksi2_VA:  item?.Data_O_Json?.OD?.Koreksi_2?.VA ?  item?.Data_O_Json?.OD?.Koreksi_2?.VA :  item?.Data_O_Json?.OD?.Koreksi_2?.Va ?  item?.Data_O_Json?.OD?.Koreksi_2?.Va : '',
        JsonO_OS_Koreksi2_VA:  item?.Data_O_Json?.OS?.Koreksi_2?.VA ?  item?.Data_O_Json?.OS?.Koreksi_2?.VA :  item?.Data_O_Json?.OS?.Koreksi_2?.Va ?  item?.Data_O_Json?.OS?.Koreksi_2?.Va : '',
        isJsonO_Koreksi2_PD_Jauh: !!(item?.Data_O_Json?.OD?.Koreksi_2?.Pd_Jauh !== '' ||  item?.Data_O_Json?.OS?.Koreksi_2?.Pd_Jauh !== ''),
        isJsonO_Koreksi2_PD_Dekat: !!(item?.Data_O_Json?.OD?.Koreksi_2?.Pd_Dekat !== '' ||  item?.Data_O_Json?.OS?.Koreksi_2?.Pd_Dekat !== ''),
        isJsonO_Koreksi2_False: !!(item?.Data_O_Json?.OD?.Koreksi_2?.False !== '' ||  item?.Data_O_Json?.OS?.Koreksi_2?.False !== ''),
        isJsonO_Koreksi2_Addisi: !!(item?.Data_O_Json?.OD?.Koreksi_2?.Add !== '' ||  item?.Data_O_Json?.OS?.Koreksi_2?.Add !== ''),
        isJsonO_Koreksi2_Axis: !!(item?.Data_O_Json?.OD?.Koreksi_2?.Axis !== '' ||  item?.Data_O_Json?.OS?.Koreksi_2?.Axis !== ''),
        isJsonO_Koreksi2_Jagger: !!(item?.Data_O_Json?.OD?.Koreksi_2?.Jagger !== '' ||  item?.Data_O_Json?.OS?.Koreksi_2?.Jagger !== ''),
        isJsonO_Koreksi2_Adaptasi: !!(item?.Data_O_Json?.OD?.Koreksi_2?.Adaptasi !== '' ||  item?.Data_O_Json?.OS?.Koreksi_2?.Adaptasi !== ''),
        JsonO_OD_Koreksi2_PD_Jauh: item.Data_O_Json?.OD?.Koreksi_2?.Pd_Jauh ?? '',
        JsonO_OS_Koreksi2_PD_Jauh: item.Data_O_Json?.OS?.Koreksi_2?.Pd_Jauh ?? '',
        JsonO_OD_Koreksi2_PD_Dekat: item.Data_O_Json?.OD?.Koreksi_2?.Pd_Dekat ?? '',
        JsonO_OS_Koreksi2_PD_Dekat: item.Data_O_Json?.OS?.Koreksi_2?.Pd_Dekat ?? '',
        JsonO_OD_Koreksi2_False: item.Data_O_Json?.OD?.Koreksi_2?.False ?? '',
        JsonO_OS_Koreksi2_False: item.Data_O_Json?.OS?.Koreksi_2?.False ?? '',
        JsonO_OD_Koreksi2_Addisi: item.Data_O_Json?.OD?.Koreksi_2?.Add ?? '',
        JsonO_OS_Koreksi2_Addisi: item.Data_O_Json?.OS?.Koreksi_2?.Add ?? '',
        JsonO_OD_Koreksi2_Axis: item.Data_O_Json?.OD?.Koreksi_2?.Axis ?? '',
        JsonO_OS_Koreksi2_Axis: item.Data_O_Json?.OS?.Koreksi_2?.Axis ?? '',
        JsonO_OD_Koreksi2_Jagger: item.Data_O_Json?.OD?.Koreksi_2?.Jagger ?? '',
        JsonO_OS_Koreksi2_Jagger: item.Data_O_Json?.OS?.Koreksi_2?.Jagger ?? '',
        JsonO_OD_Koreksi2_Adaptasi: item.Data_O_Json?.OD?.Koreksi_2?.Adaptasi ?? '',
        JsonO_OS_Koreksi2_Adaptasi: item.Data_O_Json?.OS?.Koreksi_2?.Adaptasi ?? '',
        isJsonO_KMB: !!(item?.Data_O_Json?.OD?.KMB?.Select === 'on' ||  item?.Data_O_Json?.OS?.KMB?.Select === 'on'),
        OD_KMB: `Sph: ${item?.Data_O_Json?.OD?.KMB?.Sph} Cyl. ${item?.Data_O_Json?.OD?.KMB?.Cyl} x ${item?.Data_O_Json?.OD?.KMB?.Axis}`,
        OS_KMB: `Sph: ${item?.Data_O_Json?.OS?.KMB?.Sph} Cyl. ${item?.Data_O_Json?.OS?.KMB?.Cyl} x ${item?.Data_O_Json?.OS?.KMB?.Axis}`,
        isJsonO_KMB_PD_Jauh: !!(item?.Data_O_Json?.OD?.KMB?.Pd_Jauh !== '' ||  item?.Data_O_Json?.OS?.KMB?.Pd_Jauh !== ''),
        isJsonO_KMB_PD_Dekat: !!(item?.Data_O_Json?.OD?.KMB?.Pd_Dekat !== '' ||  item?.Data_O_Json?.OS?.KMB?.Pd_Dekat !== ''),
        isJsonO_KMB_False: !!(item?.Data_O_Json?.OD?.KMB?.False !== '' ||  item?.Data_O_Json?.OS?.KMB?.False !== ''),
        isJsonO_KMB_Addisi: !!(item?.Data_O_Json?.OD?.KMB?.Add !== '' ||  item?.Data_O_Json?.OS?.KMB?.Add !== ''),
        isJsonO_KMB_Axis: !!(item?.Data_O_Json?.OD?.KMB?.Axis !== '' ||  item?.Data_O_Json?.OS?.KMB?.Axis !== ''),
        isJsonO_KMB_Jagger: !!(item?.Data_O_Json?.OD?.KMB?.Jagger !== '' ||  item?.Data_O_Json?.OS?.KMB?.Jagger !== ''),
        JsonO_OD_KMB_PD_Jauh: item.Data_O_Json?.OD?.KMB?.Pd_Jauh ?? '',
        JsonO_OS_KMB_PD_Jauh: item.Data_O_Json?.OS?.KMB?.Pd_Jauh ?? '',
        JsonO_OD_KMB_PD_Dekat: item.Data_O_Json?.OD?.KMB?.Pd_Dekat ?? '',
        JsonO_OS_KMB_PD_Dekat: item.Data_O_Json?.OS?.KMB?.Pd_Dekat ?? '',
        JsonO_OD_KMB_False: item.Data_O_Json?.OD?.KMB?.False ?? '',
        JsonO_OS_KMB_False: item.Data_O_Json?.OS?.KMB?.False ?? '',
        JsonO_OD_KMB_Addisi: item.Data_O_Json?.OD?.KMB?.Add ?? '',
        JsonO_OS_KMB_Addisi: item.Data_O_Json?.OS?.KMB?.Add ?? '',
        JsonO_OD_KMB_Axis: item.Data_O_Json?.OD?.KMB?.Axis ?? '',
        JsonO_OS_KMB_Axis: item.Data_O_Json?.OS?.KMB?.Axis ?? '',
        JsonO_OD_KMB_Jagger: item.Data_O_Json?.OD?.KMB?.Jagger ?? '',
        JsonO_OS_KMB_Jagger: item.Data_O_Json?.OS?.KMB?.Jagger ?? '',
        isJsonO_RPL: !!(item?.Data_O_Json?.OD?.RPL_Streak?.Select === 'on' ||  item?.Data_O_Json?.OS?.RPL_Streak?.Select === 'on'),
        isJsonO_RPL_SR_VA: !!(item?.Data_O_Json?.OD?.RPL_Streak?.Va_Aquity !== '' ||  item?.Data_O_Json?.OS?.RPL_Streak?.Va_Aquity !== ''),
        isJsonO_RPL_SR: !!(item?.Data_O_Json?.OD?.RPL_Streak?.Select === 'on' ||  item?.Data_O_Json?.OS?.RPL_Streak?.Select === 'on'),
        OD_RPL_SR: `Sph: ${item?.Data_O_Json?.OD?.RPL_Streak?.Sph} Cyl. ${item?.Data_O_Json?.OD?.RPL_Streak?.Cyl} x ${item?.Data_O_Json?.OD?.RPL_Streak?.Axis}`,
        OS_RPL_SR: `Sph: ${item?.Data_O_Json?.OS?.RPL_Streak?.Sph} Cyl. ${item?.Data_O_Json?.OS?.RPL_Streak?.Cyl} x ${item?.Data_O_Json?.OS?.RPL_Streak?.Axis}`,
        isJsonO_RPL_SR_Visus_Akhir: !!(item.Data_O_Json?.OD?.RPL_Streak?.VA !== '' ||  item.Data_O_Json?.OS?.RPL_Streak?.VA !== '' ||  item.Data_O_Json?.OD?.RPL_Streak?.Va !== '' ||  item.Data_O_Json?.OS?.RPL_Streak?.Va !== ''),
        JsonO_OD_RPL_SR_Visus_Akhir:  item?.Data_O_Json?.OD?.RPL_Streak?.VA ?  item?.Data_O_Json?.OD?.RPL_Streak?.VA :  item?.Data_O_Json?.OD?.RPL_Streak?.Va ?  item?.Data_O_Json?.OD?.RPL_Streak?.Va : '',
        JsonO_OS_RPL_SR_Visus_Akhir:  item?.Data_O_Json?.OS?.RPL_Streak?.VA ?  item?.Data_O_Json?.OS?.RPL_Streak?.VA :  item?.Data_O_Json?.OS?.RPL_Streak?.Va ?  item?.Data_O_Json?.OS?.RPL_Streak?.Va : '',
        isJsonO_RPL_SR_PD_Jauh: !!(item?.Data_O_Json?.OD?.RPL_Streak?.Pd_Jauh !== '' ||  item?.Data_O_Json?.OS?.RPL_Streak?.Pd_Jauh !== ''),
        isJsonO_RPL_SR_False: !!(item?.Data_O_Json?.OD?.RPL_Streak?.False !== '' ||  item?.Data_O_Json?.OS?.RPL_Streak?.False !== ''),
        isJsonO_RPL_SR_Axis: !!(item?.Data_O_Json?.OD?.RPL_Streak?.Axis !== '' ||  item?.Data_O_Json?.OS?.RPL_Streak?.Axis !== ''),
        isJsonO_RPL_SR_Adaptasi: !!(item?.Data_O_Json?.OD?.RPL_Streak?.Adaptasi !== '' ||  item?.Data_O_Json?.OS?.RPL_Streak?.Adaptasi !== ''),
        isJsonO_RPL_SR_PH: !!(item?.Data_O_Json?.OD?.RPL_Streak?.PH !== '' ||  item?.Data_O_Json?.OS?.RPL_Streak?.PH !== ''),
        JsonO_OD_RPL_SR_VA: item.Data_O_Json?.OD?.RPL_Streak?.Va_Aquity ?? '',
        JsonO_OS_RPL_SR_VA: item.Data_O_Json?.OS?.RPL_Streak?.Va_Aquity ?? '',
        JsonO_OD_RPL_SR_PD_Jauh: item.Data_O_Json?.OD?.RPL_Streak?.Pd_Jauh ?? '',
        JsonO_OS_RPL_SR_PD_Jauh: item.Data_O_Json?.OS?.RPL_Streak?.Pd_Jauh ?? '',
        JsonO_OD_RPL_SR_False: item.Data_O_Json?.OD?.RPL_Streak?.False ?? '',
        JsonO_OS_RPL_SR_False: item.Data_O_Json?.OS?.RPL_Streak?.False ?? '',
        JsonO_OD_RPL_SR_Axis: item.Data_O_Json?.OD?.RPL_Streak?.Axis ?? '',
        JsonO_OS_RPL_SR_Axis: item.Data_O_Json?.OS?.RPL_Streak?.Axis ?? '',
        JsonO_OD_RPL_SR_Adaptasi: item.Data_O_Json?.OD?.RPL_Streak?.Adaptasi ?? '',
        JsonO_OS_RPL_SR_Adaptasi: item.Data_O_Json?.OS?.RPL_Streak?.Adaptasi ?? '',
        JsonO_OD_RPL_SR_PH: item.Data_O_Json?.OD?.RPL_Streak?.PH ?? '',
        JsonO_OS_RPL_SR_PH: item.Data_O_Json?.OS?.RPL_Streak?.PH ?? '',
        isJsonO_RPL2: !!(item?.Data_O_Json?.OD?.RPL_Streak_2?.Select === 'on' ||  item?.Data_O_Json?.OS?.RPL_Streak_2?.Select === 'on'),
        isJsonO_RPL2_SR_VA: !!(item?.Data_O_Json?.OD?.RPL_Streak_2?.Va_Aquity !== '' ||  item?.Data_O_Json?.OS?.RPL_Streak_2?.Va_Aquity !== ''),
        isJsonO_RPL2_SR: !!(item?.Data_O_Json?.OD?.RPL_Streak_2?.Select === 'on' ||  item?.Data_O_Json?.OS?.RPL_Streak_2?.Select === 'on'),
        OD_RPL2_SR: `Sph: ${item?.Data_O_Json?.OD?.RPL_Streak_2?.Sph} Cyl. ${item?.Data_O_Json?.OD?.RPL_Streak_2?.Cyl} x ${item?.Data_O_Json?.OD?.RPL_Streak_2?.Axis}`,
        OS_RPL2_SR: `Sph: ${item?.Data_O_Json?.OS?.RPL_Streak_2?.Sph} Cyl. ${item?.Data_O_Json?.OS?.RPL_Streak_2?.Cyl} x ${item?.Data_O_Json?.OS?.RPL_Streak_2?.Axis}`,
        isJsonO_RPL2_SR_Visus_Akhir: !!(item.Data_O_Json?.OD?.RPL_Streak_2?.VA !== '' ||  item.Data_O_Json?.OS?.RPL_Streak_2?.VA !== '' ||  item.Data_O_Json?.OD?.RPL_Streak_2?.Va !== '' ||  item.Data_O_Json?.OS?.RPL_Streak_2?.Va !== ''),
        JsonO_OD_RPL2_SR_Visus_Akhir: item?.Data_O_Json?.OD?.RPL_Streak_2?.VA ?  item?.Data_O_Json?.OD?.RPL_Streak_2?.VA :  item?.Data_O_Json?.OD?.RPL_Streak_2?.Va ?  item?.Data_O_Json?.OD?.RPL_Streak_2?.Va : '',
        JsonO_OS_RPL2_SR_Visus_Akhir: item?.Data_O_Json?.OS?.RPL_Streak_2?.VA ?  item?.Data_O_Json?.OS?.RPL_Streak_2?.VA :  item?.Data_O_Json?.OS?.RPL_Streak_2?.Va ?  item?.Data_O_Json?.OS?.RPL_Streak_2?.Va : '',
        isJsonO_RPL2_SR_PD_Jauh: !!(item?.Data_O_Json?.OD?.RPL_Streak_2?.Pd_Jauh !== '' ||  item?.Data_O_Json?.OS?.RPL_Streak_2?.Pd_Jauh !== ''),
        isJsonO_RPL2_SR_False: !!(item?.Data_O_Json?.OD?.RPL_Streak_2?.False !== '' ||  item?.Data_O_Json?.OS?.RPL_Streak_2?.False !== ''),
        isJsonO_RPL2_SR_Axis: !!(item?.Data_O_Json?.OD?.RPL_Streak_2?.Axis !== '' ||  item?.Data_O_Json?.OS?.RPL_Streak_2?.Axis !== ''),
        isJsonO_RPL2_SR_Adaptasi: !!(item?.Data_O_Json?.OD?.RPL_Streak_2?.Adaptasi !== '' ||  item?.Data_O_Json?.OS?.RPL_Streak_2?.Adaptasi !== ''),
        isJsonO_RPL2_SR_PH: !!(item?.Data_O_Json?.OD?.RPL_Streak_2?.PH !== '' ||  item?.Data_O_Json?.OS?.RPL_Streak_2?.PH !== ''),
        JsonO_OD_RPL2_SR_VA: item.Data_O_Json?.OD?.RPL_Streak_2?.Va_Aquity ?? '',
        JsonO_OS_RPL2_SR_VA: item.Data_O_Json?.OS?.RPL_Streak_2?.Va_Aquity ?? '',
        JsonO_OD_RPL2_SR_PD_Jauh: item.Data_O_Json?.OD?.RPL_Streak_2?.Pd_Jauh ?? '',
        JsonO_OS_RPL2_SR_PD_Jauh: item.Data_O_Json?.OS?.RPL_Streak_2?.Pd_Jauh ?? '',
        JsonO_OD_RPL2_SR_False: item.Data_O_Json?.OD?.RPL_Streak_2?.False ?? '',
        JsonO_OS_RPL2_SR_False: item.Data_O_Json?.OS?.RPL_Streak_2?.False ?? '',
        JsonO_OD_RPL2_SR_Axis: item.Data_O_Json?.OD?.RPL_Streak_2?.Axis ?? '',
        JsonO_OS_RPL2_SR_Axis: item.Data_O_Json?.OS?.RPL_Streak_2?.Axis ?? '',
        JsonO_OD_RPL2_SR_Adaptasi: item.Data_O_Json?.OD?.RPL_Streak_2?.Adaptasi ?? '',
        JsonO_OS_RPL2_SR_Adaptasi: item.Data_O_Json?.OS?.RPL_Streak_2?.Adaptasi ?? '',
        JsonO_OD_RPL2_SR_PH: item.Data_O_Json?.OD?.RPL_Streak_2?.PH ?? '',
        JsonO_OS_RPL2_SR_PH: item.Data_O_Json?.OS?.RPL_Streak_2?.PH ?? '',
        isJsonO_RPL_RS_VA: !!(item?.Data_O_Json?.OD?.RPL?.Va_Aquity !== '' ||  item?.Data_O_Json?.OS?.RPL?.Va_Aquity !== ''),
        isJsonO_RPL_RS: !!(item?.Data_O_Json?.OD?.RPL?.Select === 'on' ||  item?.Data_O_Json?.OS?.RPL?.Select === 'on'),
        OD_RPL_RS: `Sph: ${item?.Data_O_Json?.OD?.RPL?.Sph} Cyl. ${item?.Data_O_Json?.OD?.RPL?.Cyl} x ${item?.Data_O_Json?.OD?.RPL?.Axis}`,
        OS_RPL_RS: `Sph: ${item?.Data_O_Json?.OS?.RPL?.Sph} Cyl. ${item?.Data_O_Json?.OS?.RPL?.Cyl} x ${item?.Data_O_Json?.OS?.RPL?.Axis}`,
        isJsonO_RPL_RS_Visus_Akhir: !!(item.Data_O_Json?.OD?.RPL?.VA !== '' ||  item.Data_O_Json?.OS?.RPL?.VA !== '' ||  item.Data_O_Json?.OD?.RPL?.Va !== '' ||  item.Data_O_Json?.OS?.RPL?.Va !== ''),
        JsonO_OD_RPL_RS_Visus_Akhir:  item?.Data_O_Json?.OD?.RPL?.VA ?  item?.Data_O_Json?.OD?.RPL?.VA :  item?.Data_O_Json?.OD?.RPL?.Va ?  item?.Data_O_Json?.OD?.RPL?.Va : '',
        JsonO_OS_RPL_RS_Visus_Akhir:  item?.Data_O_Json?.OS?.RPL?.VA ?  item?.Data_O_Json?.OS?.RPL?.VA :  item?.Data_O_Json?.OS?.RPL?.Va ?  item?.Data_O_Json?.OS?.RPL?.Va : '',
        isJsonO_RPL_RS_PD_Jauh: !!(item?.Data_O_Json?.OD?.RPL?.Pd_Jauh !== '' ||  item?.Data_O_Json?.OS?.RPL?.Pd_Jauh !== ''),
        isJsonO_RPL_RS_False: !!(item?.Data_O_Json?.OD?.RPL?.False !== '' ||  item?.Data_O_Json?.OS?.RPL?.False !== ''),
        isJsonO_RPL_RS_Axis: !!(item?.Data_O_Json?.OD?.RPL?.Axis !== '' ||  item?.Data_O_Json?.OS?.RPL?.Axis !== ''),
        isJsonO_RPL_RS_Adaptasi: !!(item?.Data_O_Json?.OD?.RPL?.Adaptasi !== '' ||  item?.Data_O_Json?.OS?.RPL?.Adaptasi !== ''),
        isJsonO_RPL_RS_PH: !!(item?.Data_O_Json?.OD?.RPL?.PH !== '' ||  item?.Data_O_Json?.OS?.RPL?.PH !== ''),
        JsonO_OD_RPL_RS_VA: item.Data_O_Json?.OD?.RPL?.Va_Aquity ?? '',
        JsonO_OS_RPL_RS_VA: item.Data_O_Json?.OS?.RPL?.Va_Aquity ?? '',
        JsonO_OD_RPL_RS_PD_Jauh: item.Data_O_Json?.OD?.RPL?.Pd_Jauh ?? '',
        JsonO_OS_RPL_RS_PD_Jauh: item.Data_O_Json?.OS?.RPL?.Pd_Jauh ?? '',
        JsonO_OD_RPL_RS_False: item.Data_O_Json?.OD?.RPL?.False ?? '',
        JsonO_OS_RPL_RS_False: item.Data_O_Json?.OS?.RPL?.False ?? '',
        JsonO_OD_RPL_RS_Axis: item.Data_O_Json?.OD?.RPL?.Axis ?? '',
        JsonO_OS_RPL_RS_Axis: item.Data_O_Json?.OS?.RPL?.Axis ?? '',
        JsonO_OD_RPL_RS_Adaptasi: item.Data_O_Json?.OD?.RPL?.Adaptasi ?? '',
        JsonO_OS_RPL_RS_Adaptasi: item.Data_O_Json?.OS?.RPL?.Adaptasi ?? '',
        JsonO_OD_RPL_RS_PH: item.Data_O_Json?.OD?.RPL?.PH ?? '',
        JsonO_OS_RPL_RS_PH: item.Data_O_Json?.OS?.RPL?.PH ?? '',
        isJsonO_RPL2_RS_VA: !!(item?.Data_O_Json?.OD?.RPL_2?.Va_Aquity !== '' ||  item?.Data_O_Json?.OS?.RPL_2?.Va_Aquity !== ''),
        isJsonO_RPL2_RS: !!(item?.Data_O_Json?.OD?.RPL_2?.Select === 'on' ||  item?.Data_O_Json?.OS?.RPL_2?.Select === 'on'),
        OD_RPL2_RS: `Sph: ${item?.Data_O_Json?.OD?.RPL_2?.Sph} Cyl. ${item?.Data_O_Json?.OD?.RPL_2?.Cyl} x ${item?.Data_O_Json?.OD?.RPL_2?.Axis}`,
        OS_RPL2_RS: `Sph: ${item?.Data_O_Json?.OS?.RPL_2?.Sph} Cyl. ${item?.Data_O_Json?.OS?.RPL_2?.Cyl} x ${item?.Data_O_Json?.OS?.RPL_2?.Axis}`,
        isJsonO_RPL2_RS_Visus_Akhir: !!(item.Data_O_Json?.OD?.RPL_2?.VA !== '' ||  item.Data_O_Json?.OS?.RPL_2?.VA !== '' ||  item.Data_O_Json?.OD?.RPL_2?.Va !== '' ||  item.Data_O_Json?.OS?.RPL_2?.Va !== ''),
        JsonO_OD_RPL2_RS_Visus_Akhir: item?.Data_O_Json?.OD?.RPL_2?.VA ?  item?.Data_O_Json?.OD?.RPL_2?.VA :  item?.Data_O_Json?.OD?.RPL_2?.Va ?  item?.Data_O_Json?.OD?.RPL_2?.Va : '',
        JsonO_OS_RPL2_RS_Visus_Akhir: item?.Data_O_Json?.OS?.RPL_2?.VA ?  item?.Data_O_Json?.OS?.RPL_2?.VA :  item?.Data_O_Json?.OS?.RPL_2?.Va ?  item?.Data_O_Json?.OS?.RPL_2?.Va : '',
        isJsonO_RPL2_RS_PD_Jauh: !!(item?.Data_O_Json?.OD?.RPL_2?.Pd_Jauh !== '' ||  item?.Data_O_Json?.OS?.RPL_2?.Pd_Jauh !== ''),
        isJsonO_RPL2_RS_False: !!(item?.Data_O_Json?.OD?.RPL_2?.False !== '' ||  item?.Data_O_Json?.OS?.RPL_2?.False !== ''),
        isJsonO_RPL2_RS_Axis: !!(item?.Data_O_Json?.OD?.RPL_2?.Axis !== '' ||  item?.Data_O_Json?.OS?.RPL_2?.Axis !== ''),
        isJsonO_RPL2_RS_Adaptasi: !!(item?.Data_O_Json?.OD?.RPL_2?.Adaptasi !== '' ||  item?.Data_O_Json?.OS?.RPL_2?.Adaptasi !== ''),
        isJsonO_RPL2_RS_PH: !!(item?.Data_O_Json?.OD?.RPL_2?.PH !== '' ||  item?.Data_O_Json?.OS?.RPL_2?.PH !== ''),
        JsonO_OD_RPL2_RS_VA: item.Data_O_Json?.OD?.RPL_2?.Va_Aquity ?? '',
        JsonO_OS_RPL2_RS_VA: item.Data_O_Json?.OS?.RPL_2?.Va_Aquity ?? '',
        JsonO_OD_RPL2_RS_PD_Jauh: item.Data_O_Json?.OD?.RPL_2?.Pd_Jauh ?? '',
        JsonO_OS_RPL2_RS_PD_Jauh: item.Data_O_Json?.OS?.RPL_2?.Pd_Jauh ?? '',
        JsonO_OD_RPL2_RS_False: item.Data_O_Json?.OD?.RPL_2?.False ?? '',
        JsonO_OS_RPL2_RS_False: item.Data_O_Json?.OS?.RPL_2?.False ?? '',
        JsonO_OD_RPL2_RS_Axis: item.Data_O_Json?.OD?.RPL_2?.Axis ?? '',
        JsonO_OS_RPL2_RS_Axis: item.Data_O_Json?.OS?.RPL_2?.Axis ?? '',
        JsonO_OD_RPL2_RS_Adaptasi: item.Data_O_Json?.OD?.RPL_2?.Adaptasi ?? '',
        JsonO_OS_RPL2_RS_Adaptasi: item.Data_O_Json?.OS?.RPL_2?.Adaptasi ?? '',
        JsonO_OD_RPL2_RS_PH: item.Data_O_Json?.OD?.RPL_2?.PH ?? '',
        JsonO_OS_RPL2_RS_PH: item.Data_O_Json?.OS?.RPL_2?.PH ?? '',
        isJsonO_Non_Contact: !!(item?.Data_O_Json?.OD?.Non_Contact !== '' || item?.Data_O_Json?.OS?.Non_Contact !== ''),
        od_non_contact: item.Data_O_Json?.OD?.Non_Contact ?? '',
        os_non_contact: item.Data_O_Json?.OS?.Non_Contact ?? '',
        isJsonO_Keterangan: !!(item?.Data_O_Json?.OD?.Tanam_Lensa !== '' || item?.Data_O_Json?.OS?.Tanam_Lensa !== ''),
        od_tanam_lensa: item.Data_O_Json?.OD?.Tanam_Lensa ?? '',
        os_tanam_lensa: item.Data_O_Json?.OS?.Tanam_Lensa ?? '',
        isJsonO_Schiotz: !!(item?.Data_O_Json?.OD?.Schiotz !== '' || item?.Data_O_Json?.OS?.Schiotz !== ''),
        od_schiotz: item.Data_O_Json?.OD?.Schiotz ?? '',
        os_schiotz: item.Data_O_Json?.OS?.Schiotz ?? '',
        isJsonO_Keterangan_Tono: !!(item?.Data_O_Json?.OD?.Keterangan_Tono !== '' || item?.Data_O_Json?.OS?.Keterangan_Tono !== ''),
        od_ket_tono: item.Data_O_Json?.OD?.Keterangan_Tono ?? '',
        os_ket_tono: item.Data_O_Json?.OS?.Keterangan_Tono ?? '',
        isJsonO_Catatan_Lainnya: !!(item?.Data_O_Json?.Catatan_Lain !== ''),
        note: item.Data_O_Json?.Catatan_Lain ?? '',
        isResep: !!(item && item.Resep && Array.isArray(item.Resep) && item.Resep.length > 0),
        resep: newResep,
        isGambarP: !!(item.Picture && item.Picture.Url_Image_Cppt_Ok && item.Picture.Url_Image_Cppt_Ok !== ''),
        gambarP: item.Picture && item.Picture.Url_Image_Cppt_Ok && item.Picture.Url_Image_Cppt_Ok !== '' ? item.Picture.Url_Image_Cppt_Ok : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        isGambarO: !!(item.Picture_Data_O && item.Picture_Data_O.Url_Image_Cppt_Data_O && item.Picture_Data_O.Url_Image_Cppt_Data_O !== ''),
        gambarO: item.Picture_Data_O && item.Picture_Data_O.Url_Image_Cppt_Data_O && item.Picture_Data_O.Url_Image_Cppt_Data_O !== '' ? item.Picture_Data_O.Url_Image_Cppt_Data_O : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
      }

      return cpptRaw;
    });

    const pediatriks: IPediatrikRequestData[] = records.map((item: CpptRecord) => {

      const formatDate = (dateNow: any) => {
        const d = new Date(dateNow);
        const dateFormat = `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear().toString().padStart(4, '0')}`
        return dateFormat;
      }
      const getLain = (lainCode: string, lainText: string) => {
        if (lainCode === 'Lain-Lain' || lainCode === 'Lain-lain') {
          return lainText;
        } else {
          return lainCode;
        }
      }

      const pediatriksRaw = {
        isJsonO_pediatrik : !!(item?.Submit_Pediatrik === 1),
        isJsonO_cardif : !!((item?.Pediatrik?.Cardif_OD_Test_Distance_1 !== '' || item?.Pediatrik?.Cardif_OS_Test_Distance_1 !== '') || (item?.Pediatrik?.Cardif_OD_Test_Distance_50 !== '' || item?.Pediatrik?.Cardif_OS_Test_Distance_50 !== '')),
        isJsonO_test_distance1m : !!(item?.Pediatrik?.Cardif_OD_Test_Distance_1 !== '' || item?.Pediatrik?.Cardif_OS_Test_Distance_1 !== ''),
        JsonO_OD_test_distance1m : item?.Pediatrik?.Cardif_OD_Test_Distance_1 ?? '',
        JsonO_OS_test_distance1m : item?.Pediatrik?.Cardif_OS_Test_Distance_1  ?? '',
        isJsonO_test_distance50m : !!((item?.Pediatrik?.Cardif_OD_Test_Distance_50 !== '' || item?.Pediatrik?.Cardif_OS_Test_Distance_50 !== '')),
        JsonO_OD_test_distance50m : item?.Pediatrik?.Cardif_OD_Test_Distance_50 ?? '',
        JsonO_OS_test_distance50m : item?.Pediatrik?.Cardif_OS_Test_Distance_50  ?? '',
        isJsonO_tac : !!((item?.Pediatrik?.Tac_OD_At_38 !== '' || item?.Pediatrik?.Tac_OS_At_38 !== '') || (item?.Pediatrik?.Tac_OD_At_55 !== '' || item?.Pediatrik?.Tac_OS_At_55 !== '') || (item?.Pediatrik?.Tac_OD_At_84 !== '' || item?.Pediatrik?.Tac_OS_At_84 !== '')),
        isJsonO_at38cm  : !!((item?.Pediatrik?.Tac_OD_At_38 !== '' || item?.Pediatrik?.Tac_OS_At_38 !== '')),
        JsonO_OD_at38cm : item?.Pediatrik?.Tac_OD_At_38  ?? '',
        JsonO_OS_at38cm : item?.Pediatrik?.Tac_OS_At_38  ?? '',
        isJsonO_at55cm  : !!((item?.Pediatrik?.Tac_OD_At_55 !== '' || item?.Pediatrik?.Tac_OS_At_55 !== '')),
        JsonO_OD_at55cm : item?.Pediatrik?.Tac_OD_At_55  ?? '',
        JsonO_OS_at55cm : item?.Pediatrik?.Tac_OS_At_55  ?? '',
        isJsonO_at84cm  : !!((item?.Pediatrik?.Tac_OD_At_84 !== '' || item?.Pediatrik?.Tac_OS_At_84 !== '')),
        JsonO_OD_at84cm : item?.Pediatrik?.Tac_OD_At_84  ?? '',
        JsonO_OS_at84cm : item?.Pediatrik?.Tac_OS_At_84  ?? '',
        isJsonO_RPL_Ped : !!((item?.Pediatrik?.Rpl_Streak_OD_Streak_Sph !== '' || item?.Pediatrik?.Rpl_Streak_OD_Streak_Sph !== '') || (item?.Pediatrik?.Rpl_Streak_OD_Va !== '' || item?.Pediatrik?.Rpl_Streak_OS_Va !== '') || (item?.Pediatrik?.Rpl_Streak_OD_Streak_Axis !== '' || item?.Pediatrik?.Rpl_Streak_OS_Streak_Axis !== '') || (item?.Pediatrik?.Rpl_Streak_OD_Pd_Jauh !== '' || item?.Pediatrik?.Rpl_Streak_OS_Pd_Jauh !== '') || (item?.Pediatrik?.Rpl_Streak_OD_False !== '' || item?.Pediatrik?.Rpl_Streak_OS_False !== '') || (item?.Pediatrik?.Rpl_Streak_OD_Adaptasi !== '' || item?.Pediatrik?.Rpl_Streak_OS_Adaptasi !== '')),
        isJsonO_RPL_SR_Ped : !!(item?.Pediatrik?.Rpl_Streak_OD_Streak_Sph !== '' || item?.Pediatrik?.Rpl_Streak_OS_Streak_Sph !== ''),
        OD_RPL_SR_Ped : `Sph: ${item?.Pediatrik?.Rpl_Streak_OD_Streak_Sph} Cyl. ${item?.Pediatrik?.Rpl_Streak_OD_Streak_Cyl} x ${item?.Pediatrik?.Rpl_Streak_OD_Streak_Axis}`,
        OS_RPL_SR_ped : `Sph: ${item?.Pediatrik?.Rpl_Streak_OS_Streak_Sph} Cyl. ${item?.Pediatrik?.Rpl_Streak_OS_Streak_Cyl} x ${item?.Pediatrik?.Rpl_Streak_OS_Streak_Axis}`,
        isJsonO_RPL_SR_Visus_Akhir_Ped : !!(item?.Pediatrik?.Rpl_Streak_OD_Va !== '' || item?.Pediatrik?.Rpl_Streak_OS_Va !== ''),
        JsonO_OD_RPL_SR_Visus_Akhir_Ped : ((item?.Pediatrik?.Rpl_Streak_OD_Va  ?? '')),
        JsonO_OS_RPL_SR_Visus_Akhir_Ped : ((item?.Pediatrik?.Rpl_Streak_OS_Va  ?? '')),
        isJsonO_RPL_SR_Axis_Ped  : !!(item?.Pediatrik?.Rpl_Streak_OD_Streak_Axis !== '' || item?.Pediatrik?.Rpl_Streak_OS_Streak_Axis !== ''),
        JsonO_OD_RPL_SR_Axis_Ped : ((item?.Pediatrik?.Rpl_Streak_OD_Streak_Axis  ?? '')),
        JsonO_OS_RPL_SR_Axis_Ped : ((item?.Pediatrik?.Rpl_Streak_OS_Streak_Axis  ?? '')),
        isJsonO_RPL_SR_PD_Jauh_Ped : !!(item?.Pediatrik?.Rpl_Streak_OD_Pd_Jauh !== '' || item?.Pediatrik?.Rpl_Streak_OS_Pd_Jauh !== ''),
        JsonO_OD_RPL_SR_PD_Jauh_Ped : getLain((item?.Pediatrik?.Rpl_Streak_OD_Pd_Jauh  ?? ''), (item?.Pediatrik?.Rpl_Streak_OD_Pd_Jauh_Text  ?? '')),
        JsonO_OS_RPL_SR_PD_Jauh_Ped : getLain((item?.Pediatrik?.Rpl_Streak_OS_Pd_Jauh  ?? ''), (item?.Pediatrik?.Rpl_Streak_OS_Pd_Jauh_Text  ?? '')),
        isJsonO_RPL_SR_False_Ped : !!(item?.Pediatrik?.Rpl_Streak_OD_False !== '' || item?.Pediatrik?.Rpl_Streak_OS_False !== ''),
        JsonO_OD_RPL_SR_False_Ped : getLain((item?.Pediatrik?.Rpl_Streak_OD_False  ?? ''), (item?.Pediatrik?.Rpl_Streak_OD_False_Text  ?? '')),
        JsonO_OS_RPL_SR_False_Ped : getLain((item?.Pediatrik?.Rpl_Streak_OS_False  ?? ''), (item?.Pediatrik?.Rpl_Streak_OS_False_Text  ?? '')),
        isJsonO_RPL_SR_Adaptasi_Ped : !!(item?.Pediatrik?.Rpl_Streak_OD_Adaptasi !== '' || item?.Pediatrik?.Rpl_Streak_OS_Adaptasi !== ''),
        JsonO_OD_RPL_SR_Adaptasi_Ped : getLain((item?.Pediatrik?.Rpl_Streak_OD_Adaptasi  ?? ''), (item?.Pediatrik?.Rpl_Streak_OD_Adaptasi_Text  ?? '')),
        JsonO_OS_RPL_SR_Adaptasi_Ped : getLain((item?.Pediatrik?.Rpl_Streak_OS_Adaptasi  ?? ''), (item?.Pediatrik?.Rpl_Streak_OS_Adaptasi_Text  ?? '')),
        isJsonO_Ocular_Motility : !!(item?.Pediatrik?.Cover_OD_Cover_1 !== '' || item?.Pediatrik?.Cover_OD_Cover_2 !== '' || item?.Pediatrik?.Cover_OD_Cover_3 !== '' || item?.Pediatrik?.Cover_OD_Cover_4 !== '' || item?.Pediatrik?.Cover_OD_Cover_5 !== '' || item?.Pediatrik?.Cover_OD_Cover_6 !== '' || item?.Pediatrik?.Cover_OS_Cover_1 !== '' || item?.Pediatrik?.Cover_OS_Cover_2 !== '' || item?.Pediatrik?.Cover_OS_Cover_3 !== '' || item?.Pediatrik?.Cover_OS_Cover_4 !== '' || item?.Pediatrik?.Cover_OS_Cover_5 !== '' || item?.Pediatrik?.Cover_OS_Cover_6 !== ''),
        JsonO_OD_Ocular_1 : getLain((item?.Pediatrik?.Cover_OD_Cover_1  ?? ''), (item?.Pediatrik?.Cover_OD_Cover_Text_1  ?? '')),
        JsonO_OD_Ocular_2 : getLain((item?.Pediatrik?.Cover_OD_Cover_2  ?? ''), (item?.Pediatrik?.Cover_OD_Cover_Text_2  ?? '')),
        JsonO_OD_Ocular_3 : getLain((item?.Pediatrik?.Cover_OD_Cover_3  ?? ''), (item?.Pediatrik?.Cover_OD_Cover_Text_3  ?? '')),
        JsonO_OD_Ocular_4 : getLain((item?.Pediatrik?.Cover_OD_Cover_4  ?? ''), (item?.Pediatrik?.Cover_OD_Cover_Text_4  ?? '')),
        JsonO_OD_Ocular_5 : getLain((item?.Pediatrik?.Cover_OD_Cover_5  ?? ''), (item?.Pediatrik?.Cover_OD_Cover_Text_5  ?? '')),
        JsonO_OD_Ocular_6 : getLain((item?.Pediatrik?.Cover_OD_Cover_6  ?? ''), (item?.Pediatrik?.Cover_OD_Cover_Text_6  ?? '')),
        JsonO_OS_Ocular_1 : getLain((item?.Pediatrik?.Cover_OS_Cover_1  ?? ''), (item?.Pediatrik?.Cover_OS_Cover_Text_1  ?? '')),
        JsonO_OS_Ocular_2 : getLain((item?.Pediatrik?.Cover_OS_Cover_2  ?? ''), (item?.Pediatrik?.Cover_OS_Cover_Text_2  ?? '')),
        JsonO_OS_Ocular_3 : getLain((item?.Pediatrik?.Cover_OS_Cover_3  ?? ''), (item?.Pediatrik?.Cover_OS_Cover_Text_3  ?? '')),
        JsonO_OS_Ocular_4 : getLain((item?.Pediatrik?.Cover_OS_Cover_4  ?? ''), (item?.Pediatrik?.Cover_OS_Cover_Text_4  ?? '')),
        JsonO_OS_Ocular_5 : getLain((item?.Pediatrik?.Cover_OS_Cover_5  ?? ''), (item?.Pediatrik?.Cover_OS_Cover_Text_5  ?? '')),
        JsonO_OS_Ocular_6 : getLain((item?.Pediatrik?.Cover_OS_Cover_6  ?? ''), (item?.Pediatrik?.Cover_OS_Cover_Text_6  ?? '')),
        isJsonO_Cover : !!(item?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Check !== '' || item?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Check !== '' || item?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Check !== '' || item?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Check !== '' || (item?.Pediatrik?.Prisma_OD_Prisma_Without_Xt_Near !== '' || item?.Pediatrik?.Prisma_OD_Prisma_Without_Et_Near !== '' || item?.Pediatrik?.Prisma_OD_Prisma_Without_Hi_Near !== '' || item?.Pediatrik?.Prisma_OD_Prisma_Without_Ho_Near !== '' ||
item?.Pediatrik?.Prisma_OS_Prisma_Without_Xt_Near !== '' || item?.Pediatrik?.Prisma_OS_Prisma_Without_Et_Near !== '' || item?.Pediatrik?.Prisma_OS_Prisma_Without_Hi_Near !== '' || item?.Pediatrik?.Prisma_OS_Prisma_Without_Ho_Near !== '' ||
item?.Pediatrik?.Prisma_OD_Prisma_Without_Xt_Distance !== '' || item?.Pediatrik?.Prisma_OD_Prisma_Without_Et_Distance !== '' || item?.Pediatrik?.Prisma_OD_Prisma_Without_Hi_Distance !== '' || item?.Pediatrik?.Prisma_OD_Prisma_Without_Ho_Distance !== '' ||
item?.Pediatrik?.Prisma_OS_Prisma_Without_Xt_Distance !== '' || item?.Pediatrik?.Prisma_OS_Prisma_Without_Et_Distance !== '' || item?.Pediatrik?.Prisma_OS_Prisma_Without_Hi_Distance !== '' || item?.Pediatrik?.Prisma_OS_Prisma_Without_Ho_Distance !== '' ||
item?.Pediatrik?.Prisma_OD_Prisma_With_Xt_Near !== '' || item?.Pediatrik?.Prisma_OD_Prisma_With_Et_Near !== '' || item?.Pediatrik?.Prisma_OD_Prisma_With_Hi_Near !== '' || item?.Pediatrik?.Prisma_OD_Prisma_With_Ho_Near !== '' ||
item?.Pediatrik?.Prisma_OS_Prisma_With_Xt_Near !== '' || item?.Pediatrik?.Prisma_OS_Prisma_With_Et_Near !== '' || item?.Pediatrik?.Prisma_OS_Prisma_With_Hi_Near !== '' || item?.Pediatrik?.Prisma_OS_Prisma_With_Ho_Near !== '' ||
item?.Pediatrik?.Prisma_OD_Prisma_With_Xt_Distance !== '' || item?.Pediatrik?.Prisma_OD_Prisma_With_Et_Distance !== '' || item?.Pediatrik?.Prisma_OD_Prisma_With_Hi_Distance !== '' || item?.Pediatrik?.Prisma_OD_Prisma_With_Ho_Distance !== '' ||
item?.Pediatrik?.Prisma_OS_Prisma_With_Xt_Distance !== '' || item?.Pediatrik?.Prisma_OS_Prisma_With_Et_Distance !== '' || item?.Pediatrik?.Prisma_OS_Prisma_With_Hi_Distance !== '' || item?.Pediatrik?.Prisma_OS_Prisma_With_Ho_Distance !== ''
        )),
        isJsonO_Ortho : !!(item?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Check !== '' || item?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Check !== '' || item?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Check !== '' || item?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Check !== ''),
        ortho_without_od : CreatePDFRequest.getCheckImage(item?.Pediatrik?.Cover_Uncover_OD_Ortho_Without_Check === '1'),
        ortho_without_os : CreatePDFRequest.getCheckImage(item?.Pediatrik?.Cover_Uncover_OS_Ortho_Without_Check === '1'),
        ortho_with_glass_od  : CreatePDFRequest.getCheckImage(item?.Pediatrik?.Cover_Uncover_OD_Ortho_With_Check === '1'),
        ortho_with_glass_os  : CreatePDFRequest.getCheckImage(item?.Pediatrik?.Cover_Uncover_OS_Ortho_With_Check === '1'),
        isJsonO_Prisma : !!(item?.Pediatrik?.Prisma_OD_Prisma_Without_Xt_Near !== '' || item?.Pediatrik?.Prisma_OD_Prisma_Without_Et_Near !== '' || item?.Pediatrik?.Prisma_OD_Prisma_Without_Hi_Near !== '' || item?.Pediatrik?.Prisma_OD_Prisma_Without_Ho_Near !== '' ||
item?.Pediatrik?.Prisma_OS_Prisma_Without_Xt_Near !== '' || item?.Pediatrik?.Prisma_OS_Prisma_Without_Et_Near !== '' || item?.Pediatrik?.Prisma_OS_Prisma_Without_Hi_Near !== '' || item?.Pediatrik?.Prisma_OS_Prisma_Without_Ho_Near !== '' ||
item?.Pediatrik?.Prisma_OD_Prisma_Without_Xt_Distance !== '' || item?.Pediatrik?.Prisma_OD_Prisma_Without_Et_Distance !== '' || item?.Pediatrik?.Prisma_OD_Prisma_Without_Hi_Distance !== '' || item?.Pediatrik?.Prisma_OD_Prisma_Without_Ho_Distance !== '' ||
item?.Pediatrik?.Prisma_OS_Prisma_Without_Xt_Distance !== '' || item?.Pediatrik?.Prisma_OS_Prisma_Without_Et_Distance !== '' || item?.Pediatrik?.Prisma_OS_Prisma_Without_Hi_Distance !== '' || item?.Pediatrik?.Prisma_OS_Prisma_Without_Ho_Distance !== '' ||
item?.Pediatrik?.Prisma_OD_Prisma_With_Xt_Near !== '' || item?.Pediatrik?.Prisma_OD_Prisma_With_Et_Near !== '' || item?.Pediatrik?.Prisma_OD_Prisma_With_Hi_Near !== '' || item?.Pediatrik?.Prisma_OD_Prisma_With_Ho_Near !== '' ||
item?.Pediatrik?.Prisma_OS_Prisma_With_Xt_Near !== '' || item?.Pediatrik?.Prisma_OS_Prisma_With_Et_Near !== '' || item?.Pediatrik?.Prisma_OS_Prisma_With_Hi_Near !== '' || item?.Pediatrik?.Prisma_OS_Prisma_With_Ho_Near !== '' ||
item?.Pediatrik?.Prisma_OD_Prisma_With_Xt_Distance !== '' || item?.Pediatrik?.Prisma_OD_Prisma_With_Et_Distance !== '' || item?.Pediatrik?.Prisma_OD_Prisma_With_Hi_Distance !== '' || item?.Pediatrik?.Prisma_OD_Prisma_With_Ho_Distance !== '' ||
item?.Pediatrik?.Prisma_OS_Prisma_With_Xt_Distance !== '' || item?.Pediatrik?.Prisma_OS_Prisma_With_Et_Distance !== '' || item?.Pediatrik?.Prisma_OS_Prisma_With_Hi_Distance !== '' || item?.Pediatrik?.Prisma_OS_Prisma_With_Ho_Distance !== ''
        ),
        JsonO_OD_without_near_xt  : getLain((item?.Pediatrik?.Prisma_OD_Prisma_Without_Xt_Near ?? ''), (item?.Pediatrik?.Prisma_OD_Prisma_Without_Xt_Near_Lain_Text ?? '')),
        JsonO_OD_without_near_et  : getLain((item?.Pediatrik?.Prisma_OD_Prisma_Without_Et_Near ?? ''), (item?.Pediatrik?.Prisma_OD_Prisma_Without_Et_Near_Lain_Text ?? '')),
        JsonO_OD_without_near_hi  : getLain((item?.Pediatrik?.Prisma_OD_Prisma_Without_Hi_Near ?? ''), (item?.Pediatrik?.Prisma_OD_Prisma_Without_Hi_Near_Lain_Text ?? '')),
        JsonO_OD_without_near_ho  : getLain((item?.Pediatrik?.Prisma_OD_Prisma_Without_Ho_Near ?? ''), (item?.Pediatrik?.Prisma_OD_Prisma_Without_Ho_Near_Lain_Text ?? '')),
        JsonO_OS_without_near_xt  : getLain((item?.Pediatrik?.Prisma_OS_Prisma_Without_Xt_Near  ?? ''), (item?.Pediatrik?.Prisma_OS_Prisma_Without_Xt_Near_Lain_Text  ?? '')),
        JsonO_OS_without_near_et  : getLain((item?.Pediatrik?.Prisma_OS_Prisma_Without_Et_Near  ?? ''), (item?.Pediatrik?.Prisma_OS_Prisma_Without_Et_Near_Lain_Text  ?? '')),
        JsonO_OS_without_near_hi  : getLain((item?.Pediatrik?.Prisma_OS_Prisma_Without_Hi_Near  ?? ''), (item?.Pediatrik?.Prisma_OS_Prisma_Without_Hi_Near_Lain_Text  ?? '')),
        JsonO_OS_without_near_ho  : getLain((item?.Pediatrik?.Prisma_OS_Prisma_Without_Ho_Near  ?? ''), (item?.Pediatrik?.Prisma_OS_Prisma_Without_Ho_Near_Lain_Text  ?? '')),
        JsonO_OD_without_distance_xt  : getLain((item?.Pediatrik?.Prisma_OD_Prisma_Without_Xt_Distance  ?? ''), (item?.Pediatrik?.Prisma_OD_Prisma_Without_Xt_Distance_Lain_Text  ?? '')),
        JsonO_OD_without_distance_et  : getLain((item?.Pediatrik?.Prisma_OD_Prisma_Without_Et_Distance  ?? ''), (item?.Pediatrik?.Prisma_OD_Prisma_Without_Et_Distance_Lain_Text  ?? '')),
        JsonO_OD_without_distance_hi  : getLain((item?.Pediatrik?.Prisma_OD_Prisma_Without_Hi_Distance  ?? ''), (item?.Pediatrik?.Prisma_OD_Prisma_Without_Hi_Distance_Lain_Text  ?? '')),
        JsonO_OD_without_distance_ho  : getLain((item?.Pediatrik?.Prisma_OD_Prisma_Without_Ho_Distance  ?? ''), (item?.Pediatrik?.Prisma_OD_Prisma_Without_Ho_Distance_Lain_Text  ?? '')),
        JsonO_OS_without_distance_xt  : getLain((item?.Pediatrik?.Prisma_OD_Prisma_Without_Xt_Distance  ?? ''), (item?.Pediatrik?.Prisma_OD_Prisma_Without_Xt_Distance_Lain_Text  ?? '')),
        JsonO_OS_without_distance_et  : getLain((item?.Pediatrik?.Prisma_OS_Prisma_Without_Et_Distance  ?? ''), (item?.Pediatrik?.Prisma_OS_Prisma_Without_Et_Distance_Lain_Text  ?? '')),
        JsonO_OS_without_distance_hi  : getLain((item?.Pediatrik?.Prisma_OS_Prisma_Without_Hi_Distance  ?? ''), (item?.Pediatrik?.Prisma_OS_Prisma_Without_Hi_Distance_Lain_Text  ?? '')),
        JsonO_OS_without_distance_ho  : getLain((item?.Pediatrik?.Prisma_OS_Prisma_Without_Ho_Distance  ?? ''), (item?.Pediatrik?.Prisma_OS_Prisma_Without_Ho_Distance_Lain_Text  ?? '')),
        JsonO_OD_with_near_xt  : getLain((item?.Pediatrik?.Prisma_OD_Prisma_With_Xt_Near  ?? ''), (item?.Pediatrik?.Prisma_OD_Prisma_With_Xt_Near_Lain_Text  ?? '')),
        JsonO_OD_with_near_et  : getLain((item?.Pediatrik?.Prisma_OD_Prisma_With_Et_Near  ?? ''), (item?.Pediatrik?.Prisma_OD_Prisma_With_Et_Near_Lain_Text  ?? '')),
        JsonO_OD_with_near_hi  : getLain((item?.Pediatrik?.Prisma_OD_Prisma_With_Hi_Near  ?? ''), (item?.Pediatrik?.Prisma_OD_Prisma_With_Hi_Near_Lain_Text  ?? '')),
        JsonO_OD_with_near_ho  : getLain((item?.Pediatrik?.Prisma_OD_Prisma_With_Ho_Near  ?? ''), (item?.Pediatrik?.Prisma_OD_Prisma_With_Ho_Near_Lain_Text  ?? '')),
        JsonO_OS_with_near_xt  : getLain((item?.Pediatrik?.Prisma_OS_Prisma_With_Xt_Near  ?? ''), (item?.Pediatrik?.Prisma_OS_Prisma_With_Xt_Near_Lain_Text  ?? '')),
        JsonO_OS_with_near_et  : getLain((item?.Pediatrik?.Prisma_OS_Prisma_With_Et_Near  ?? ''), (item?.Pediatrik?.Prisma_OS_Prisma_With_Et_Near_Lain_Text  ?? '')),
        JsonO_OS_with_near_hi  : getLain((item?.Pediatrik?.Prisma_OS_Prisma_With_Hi_Near  ?? ''), (item?.Pediatrik?.Prisma_OS_Prisma_With_Hi_Near_Lain_Text  ?? '')),
        JsonO_OS_with_near_ho  : getLain((item?.Pediatrik?.Prisma_OS_Prisma_With_Ho_Near  ?? ''), (item?.Pediatrik?.Prisma_OS_Prisma_With_Ho_Near_Lain_Text  ?? '')),
        JsonO_OD_with_distance_xt  : getLain((item?.Pediatrik?.Prisma_OD_Prisma_With_Xt_Distance  ?? ''), (item?.Pediatrik?.Prisma_OD_Prisma_With_Xt_Distance_Lain_Text  ?? '')),
        JsonO_OD_with_distance_et  : getLain((item?.Pediatrik?.Prisma_OD_Prisma_With_Et_Distance  ?? ''), (item?.Pediatrik?.Prisma_OD_Prisma_With_Et_Distance_Lain_Text  ?? '')),
        JsonO_OD_with_distance_hi  : getLain((item?.Pediatrik?.Prisma_OD_Prisma_With_Hi_Distance  ?? ''), (item?.Pediatrik?.Prisma_OD_Prisma_With_Hi_Distance_Lain_Text  ?? '')),
        JsonO_OD_with_distance_ho  : getLain((item?.Pediatrik?.Prisma_OD_Prisma_With_Ho_Distance  ?? ''), (item?.Pediatrik?.Prisma_OD_Prisma_With_Ho_Distance_Lain_Text  ?? '')),
        JsonO_OS_with_distance_xt  : getLain((item?.Pediatrik?.Prisma_OS_Prisma_With_Xt_Distance  ?? ''), (item?.Pediatrik?.Prisma_OS_Prisma_With_Xt_Distance_Lain_Text  ?? '')),
        JsonO_OS_with_distance_et  : getLain((item?.Pediatrik?.Prisma_OS_Prisma_With_Et_Distance  ?? ''), (item?.Pediatrik?.Prisma_OS_Prisma_With_Et_Distance_Lain_Text  ?? '')),
        JsonO_OS_with_distance_hi  : getLain((item?.Pediatrik?.Prisma_OS_Prisma_With_Hi_Distance  ?? ''), (item?.Pediatrik?.Prisma_OS_Prisma_With_Hi_Distance_Lain_Text  ?? '')),
        JsonO_OS_with_distance_ho  : getLain((item?.Pediatrik?.Prisma_OS_Prisma_With_Ho_Distance  ?? ''), (item?.Pediatrik?.Prisma_OS_Prisma_With_Ho_Distance_Lain_Text  ?? '')),
        isJsonO_RS : !!(item?.Pediatrik?.Randot_OD_Circles !== '' || item?.Pediatrik?.Randot_OD_Randot_Form !== '' || item?.Pediatrik?.Randot_OD_Animal !== '' || item?.Pediatrik?.Randot_OS_Circles !== '' || item?.Pediatrik?.Randot_OS_Randot_Form !== '' || item?.Pediatrik?.Randot_OS_Animal !== ''),
        isJsonO_Circles :  !!(item?.Pediatrik?.Randot_OD_Circles !== '' || item?.Pediatrik?.Randot_OS_Circles !== ''),
        JsonO_OD_RS_Cir : ((item?.Pediatrik?.Randot_OD_Circles  ?? '')),
        JsonO_OS_RS_Cir : ((item?.Pediatrik?.Randot_OS_Circles  ?? '')),
        isJsonO_Randot_Form :  !!(item?.Pediatrik?.Randot_OD_Randot_Form !== '' || item?.Pediatrik?.Randot_OS_Randot_Form !== ''),
        JsonO_OD_RS_Ran : ((item?.Pediatrik?.Randot_OD_Randot_Form  ?? '')),
        JsonO_OS_RS_Ran : ((item?.Pediatrik?.Randot_OS_Randot_Form  ?? '')),
        isJsonO_Animal :  !!(item?.Pediatrik?.Randot_OD_Animal !== '' || item?.Pediatrik?.Randot_OS_Animal !== ''),
        JsonO_OD_RS_Ani : ((item?.Pediatrik?.Randot_OD_Animal  ?? '')),
        JsonO_OS_RS_Ani : ((item?.Pediatrik?.Randot_OS_Animal  ?? '')),
        isJsonO_OKN_Drum : !!(item?.Pediatrik?.Okn_ODS_Okn !== ''),
        JsonO_ODS_OKN_Drum : ((item?.Pediatrik?.Okn_ODS_Okn  ?? '')),
        isJsonO_RAF_ruler : !!(item?.Pediatrik?.Raf_ODS_Raf !== ''),
        JsonO_ODS_RAF_ruler: ((item?.Pediatrik?.Raf_ODS_Raf  ?? '')),
        isJsonO_Nearvision :  !!(item?.Pediatrik?.Nearvision_OD_Select !== '' || item?.Pediatrik?.Nearvision_OS_Select !== ''),
        JsonO_OD_Nearvision : ((item?.Pediatrik?.Nearvision_OD_Select ?? '') || (item?.Pediatrik?.Nearvision_OD_Nearvision  ?? '')),
        JsonO_OS_Nearvision : ((item?.Pediatrik?.Nearvision_OS_Select ?? '') || (item?.Pediatrik?.Nearvision_OS_Nearvision  ?? '')),
        isJsonO_Ptosis_FIP : !!(item?.Pediatrik?.Ptosis_OD_FIP !== '' || item?.Pediatrik?.Ptosis_OS_FIP !== ''),
        JsonO_OD_Ptosis_FIP : ((item?.Pediatrik?.Ptosis_OD_FIP  ?? '')),
        JsonO_OS_Ptosis_FIP : ((item?.Pediatrik?.Ptosis_OS_FIP  ?? '')),
        isJsonO_Ptosis_MRD : !!(item?.Pediatrik?.Ptosis_OD_MRD !== '' || item?.Pediatrik?.Ptosis_OS_MRD !== ''),
        JsonO_OD_Ptosis_MRD : ((item?.Pediatrik?.Ptosis_OD_MRD  ?? '')),
        JsonO_OS_Ptosis_MRD : ((item?.Pediatrik?.Ptosis_OS_MRD  ?? '')),
        isJsonO_Ptosis_LA : !!(item?.Pediatrik?.Ptosis_OD_LA !== '' || item?.Pediatrik?.Ptosis_OS_LA !== ''),
        JsonO_OD_Ptosis_LA : ((item?.Pediatrik?.Ptosis_OD_LA  ?? '')),
        JsonO_OS_Ptosis_LA : ((item?.Pediatrik?.Ptosis_OS_LA  ?? '')),
        isJsonO_TNO_stereoskopis : !!(item?.Pediatrik?.TNO_Stereoskopis_ODS_1 !== '' || item?.Pediatrik?.TNO_Stereoskopis_ODS_2 !== '' || item?.Pediatrik?.TNO_Stereoskopis_ODS_3 !== '' || item?.Pediatrik?.TNO_Stereoskopis_ODS_4 !== '' || item?.Pediatrik?.TNO_Stereoskopis_ODS_5 !== ''),
        JsonO_TNO_stereoskopis_1 : ((item?.Pediatrik?.TNO_Stereoskopis_ODS_1  ?? '')),
        JsonO_TNO_stereoskopis_2 : ((item?.Pediatrik?.TNO_Stereoskopis_ODS_2  ?? '')),
        JsonO_TNO_stereoskopis_3 : ((item?.Pediatrik?.TNO_Stereoskopis_ODS_3  ?? '')),
        JsonO_TNO_stereoskopis_4 : ((item?.Pediatrik?.TNO_Stereoskopis_ODS_4  ?? '')),
        JsonO_TNO_stereoskopis_5 : ((item?.Pediatrik?.TNO_Stereoskopis_ODS_5  ?? '')),
        isJsonO_TNO_1 : !!(item?.Pediatrik?.TNO_Stereoskopis_ODS_1 !== ''),
        isJsonO_TNO_2 : !!(item?.Pediatrik?.TNO_Stereoskopis_ODS_2 !== ''),
        isJsonO_TNO_3 : !!(item?.Pediatrik?.TNO_Stereoskopis_ODS_3 !== ''),
        isJsonO_TNO_4 : !!(item?.Pediatrik?.TNO_Stereoskopis_ODS_4 !== ''),
        isJsonO_TNO_5 : !!(item?.Pediatrik?.TNO_Stereoskopis_ODS_5 !== ''),
        isJsonO_Goniometer : !!(item?.Pediatrik?.Goniometer_ODS_Goniometer !== '' || item?.Pediatrik?.Goniometer_ODS_Right_Check !== '' || item?.Pediatrik?.Goniometer_ODS_Left_Check !== ''),
        JsonO_ODS_Goniometer :  ((item?.Pediatrik?.Goniometer_ODS_Goniometer  ?? '')),
        goniometer_od : CreatePDFRequest.getCheckImage(item?.Pediatrik?.Goniometer_ODS_Right_Check === '1'),
        goniometer_os : CreatePDFRequest.getCheckImage(item?.Pediatrik?.Goniometer_ODS_Left_Check === '1'),
      }
      return pediatriksRaw;
    });

    return jsonConcat(cppts, pediatriks);
  }
}

export interface IRootPDFRequest {
  emr_id: string;
  form_name: string;
  row_filter: string;
  preview: boolean;
  data: ICPPTPDFRequest;
}

export class RootPDFRequest {
  emr_id: string;
  form_name: string;
  row_filter: string;
  preview: boolean;
  data: ICPPTPDFRequest;

  constructor(req: IRootPDFRequest) {
    this.emr_id = req.emr_id;
    this.form_name = req.form_name;
    this.row_filter = req.row_filter;
    this.preview = req.preview;
    this.data = req.data;
  }

  static createFromJson(json: IRootPDFRequest) {
    return new RootPDFRequest(json);
  }

  static createPdfRequest(records: Array<ICPPTPDFRequestData>, treatment: ITreatmentModel, type: string): IRootPDFRequest {
    const formatDate = (dateNow: any) => {
      const d = new Date(dateNow);
      const dateFormat = `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear().toString().padStart(4, '0')}`
      return dateFormat;
    }
    return {
      emr_id: treatment.EMR_ID,
      form_name: type === 'all' ? 'cppt_v3' : 'cppt_day_v3',
      row_filter: "",
      preview: false,
      data: {
        umur: records[0] ? records[0].umur : '',
        'pasien.Tgl_Lahir': formatDate(treatment?.Pasien?.Tgl_Lahir),
        items: records,
      },
    }
  }
}
