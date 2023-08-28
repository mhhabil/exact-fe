import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface ICreateOctCorneaResultsRequest extends IAppRequest {
  unit: string;
  tanggal: string;
  kornea: string;
  ketebalan: string;
  ketebalan_od: string;
  ketebalan_os: string;
  od_epitel_detach_check: string;
  od_erosi_check: string;
  od_irregular_epitel_check: string;
  od_epitel_thinning_check: string;
  od_epitel_downgrowth_check: string;
  od_epitel_lainnya_check: string;
  os_epitel_detach_check: string;
  os_erosi_check: string;
  os_irregular_epitel_check: string;
  os_epitel_thinning_check: string;
  os_epitel_downgrowth_check: string;
  os_epitel_lainnya_check: string;
  od_irreguler_stroma_check: string;
  od_stromal_thinning_check: string;
  od_stromal_melting_check: string;
  od_stromal_lainnya_check: string;
  os_irreguler_stroma_check: string;
  os_stromal_thinning_check: string;
  os_stromal_melting_check: string;
  os_stromal_lainnya_check: string;
  od_irreguler_endotel_check: string;
  od_endotelial_detachment_check: string;
  od_endotel_lainnya_check: string;
  os_irreguler_endotel_check: string;
  os_endotelial_detachment_check: string;
  os_endotel_lainnya_check: string;
  od_anterior_chamber_check: string;
  od_anterior_chamber_depth: string;
  od_bmd_mass_check: string;
  od_bmd_particle_check: string;
  od_bmd_lainnya_check: string;
  os_anterior_chamber_check: string;
  os_anterior_chamber_depth: string;
  os_bmd_mass_check: string;
  os_bmd_particle_check: string;
  os_bmd_lainnya_check: string;
  od_scleral_spur_check: string;
  od_scleral_spur_angle: string;
  od_sudut_dangkal_check: string;
  od_sudut_dalam_check: string;
  os_scleral_spur_check: string;
  os_scleral_spur_angle: string;
  os_sudut_dangkal_check: string;
  os_sudut_dalam_check: string;
  od_blok_pupil_check: string;
  od_plateau_check: string;
  od_tumor_kista_check: string;
  os_blok_pupil_check: string;
  os_plateau_check: string;
  os_tumor_kista_check: string;
  od_lens_vault_check: string;
  od_lens_vault: string;
  od_lens_thickness_check: string;
  od_lens_thickness: string;
  os_lens_vault_check: string;
  os_lens_vault: string;
  os_lens_thickness_check: string;
  os_lens_thickness: string;
  kesimpulan: string;
  ttd_perawat: string;
  id_perawat: string;
  ttd_dokter_pemeriksaan: string;
  id_dokter_pemeriksaan: string;
}

export class CreateOctCorneaResultsRequest extends AppRequest {
  unit: string;
  tanggal: string;
  kornea: string;
  ketebalan: string;
  ketebalan_od: string;
  ketebalan_os: string;
  od_epitel_detach_check: string;
  od_erosi_check: string;
  od_irregular_epitel_check: string;
  od_epitel_thinning_check: string;
  od_epitel_downgrowth_check: string;
  od_epitel_lainnya_check: string;
  os_epitel_detach_check: string;
  os_erosi_check: string;
  os_irregular_epitel_check: string;
  os_epitel_thinning_check: string;
  os_epitel_downgrowth_check: string;
  os_epitel_lainnya_check: string;
  od_irreguler_stroma_check: string;
  od_stromal_thinning_check: string;
  od_stromal_melting_check: string;
  od_stromal_lainnya_check: string;
  os_irreguler_stroma_check: string;
  os_stromal_thinning_check: string;
  os_stromal_melting_check: string;
  os_stromal_lainnya_check: string;
  od_irreguler_endotel_check: string;
  od_endotelial_detachment_check: string;
  od_endotel_lainnya_check: string;
  os_irreguler_endotel_check: string;
  os_endotelial_detachment_check: string;
  os_endotel_lainnya_check: string;
  od_anterior_chamber_check: string;
  od_anterior_chamber_depth: string;
  od_bmd_mass_check: string;
  od_bmd_particle_check: string;
  od_bmd_lainnya_check: string;
  os_anterior_chamber_check: string;
  os_anterior_chamber_depth: string;
  os_bmd_mass_check: string;
  os_bmd_particle_check: string;
  os_bmd_lainnya_check: string;
  od_scleral_spur_check: string;
  od_scleral_spur_angle: string;
  od_sudut_dangkal_check: string;
  od_sudut_dalam_check: string;
  os_scleral_spur_check: string;
  os_scleral_spur_angle: string;
  os_sudut_dangkal_check: string;
  os_sudut_dalam_check: string;
  od_blok_pupil_check: string;
  od_plateau_check: string;
  od_tumor_kista_check: string;
  os_blok_pupil_check: string;
  os_plateau_check: string;
  os_tumor_kista_check: string;
  od_lens_vault_check: string;
  od_lens_vault: string;
  od_lens_thickness_check: string;
  od_lens_thickness: string;
  os_lens_vault_check: string;
  os_lens_vault: string;
  os_lens_thickness_check: string;
  os_lens_thickness: string;
  kesimpulan: string;
  ttd_perawat: string;
  id_perawat: string;
  ttd_dokter_pemeriksaan: string;
  id_dokter_pemeriksaan: string;
  constructor(request: ICreateOctCorneaResultsRequest) {
    super(request);
    this.unit = request.unit;
    this.tanggal = request.tanggal ? DateTimeConverter.convertToNormalDatetime(request.tanggal) : '';
    this.kornea = request.kornea;
    this.ketebalan = request.ketebalan;
    this.ketebalan_od = request.ketebalan_od;
    this.ketebalan_os = request.ketebalan_os;
    this.od_epitel_detach_check = request.od_epitel_detach_check;
    this.od_erosi_check = request.od_erosi_check;
    this.od_irregular_epitel_check = request.od_irregular_epitel_check;
    this.od_epitel_thinning_check = request.od_epitel_thinning_check;
    this.od_epitel_downgrowth_check = request.od_epitel_downgrowth_check;
    this.od_epitel_lainnya_check = request.od_epitel_lainnya_check;
    this.os_epitel_detach_check = request.os_epitel_detach_check;
    this.os_erosi_check = request.os_erosi_check;
    this.os_irregular_epitel_check = request.os_irregular_epitel_check;
    this.os_epitel_thinning_check = request.os_epitel_thinning_check;
    this.os_epitel_downgrowth_check = request.os_epitel_downgrowth_check;
    this.os_epitel_lainnya_check = request.os_epitel_lainnya_check;
    this.od_irreguler_stroma_check = request.od_irreguler_stroma_check;
    this.od_stromal_thinning_check = request.od_stromal_thinning_check;
    this.od_stromal_melting_check = request.od_stromal_melting_check;
    this.od_stromal_lainnya_check = request.od_stromal_lainnya_check;
    this.os_irreguler_stroma_check = request.os_irreguler_stroma_check;
    this.os_stromal_thinning_check = request.os_stromal_thinning_check;
    this.os_stromal_melting_check = request.os_stromal_melting_check;
    this.os_stromal_lainnya_check = request.os_stromal_lainnya_check;
    this.od_irreguler_endotel_check = request.od_irreguler_endotel_check;
    this.od_endotelial_detachment_check = request.od_endotelial_detachment_check;
    this.od_endotel_lainnya_check = request.od_endotel_lainnya_check;
    this.os_irreguler_endotel_check = request.os_irreguler_endotel_check;
    this.os_endotelial_detachment_check = request.os_endotelial_detachment_check;
    this.os_endotel_lainnya_check = request.os_endotel_lainnya_check;
    this.od_anterior_chamber_check = request.od_anterior_chamber_check;
    this.od_anterior_chamber_depth = request.od_anterior_chamber_depth;
    this.od_bmd_mass_check = request.od_bmd_mass_check;
    this.od_bmd_particle_check = request.od_bmd_particle_check;
    this.od_bmd_lainnya_check = request.od_bmd_lainnya_check;
    this.os_anterior_chamber_check = request.os_anterior_chamber_check;
    this.os_anterior_chamber_depth = request.os_anterior_chamber_depth;
    this.os_bmd_mass_check = request.os_bmd_mass_check;
    this.os_bmd_particle_check = request.os_bmd_particle_check;
    this.os_bmd_lainnya_check = request.os_bmd_lainnya_check;
    this.od_scleral_spur_check = request.od_scleral_spur_check;
    this.od_scleral_spur_angle = request.od_scleral_spur_angle;
    this.od_sudut_dangkal_check = request.od_sudut_dangkal_check;
    this.od_sudut_dalam_check = request.od_sudut_dalam_check;
    this.os_scleral_spur_check = request.os_scleral_spur_check;
    this.os_scleral_spur_angle = request.os_scleral_spur_angle;
    this.os_sudut_dangkal_check = request.os_sudut_dangkal_check;
    this.os_sudut_dalam_check = request.os_sudut_dalam_check;
    this.od_blok_pupil_check = request.od_blok_pupil_check;
    this.od_plateau_check = request.od_plateau_check;
    this.od_tumor_kista_check = request.od_tumor_kista_check;
    this.os_blok_pupil_check = request.os_blok_pupil_check;
    this.os_plateau_check = request.os_plateau_check;
    this.os_tumor_kista_check = request.os_tumor_kista_check;
    this.od_lens_vault_check = request.od_lens_vault_check;
    this.od_lens_vault = request.od_lens_vault;
    this.od_lens_thickness_check = request.od_lens_thickness_check;
    this.od_lens_thickness = request.od_lens_thickness;
    this.os_lens_vault_check = request.os_lens_vault_check;
    this.os_lens_vault = request.os_lens_vault;
    this.os_lens_thickness_check = request.os_lens_thickness_check;
    this.os_lens_thickness = request.os_lens_thickness;
    this.kesimpulan = request.kesimpulan;
    this.ttd_perawat = request.ttd_perawat;
    this.id_perawat = request.id_perawat;
    this.ttd_dokter_pemeriksaan = request.ttd_dokter_pemeriksaan;
    this.id_dokter_pemeriksaan = request.id_dokter_pemeriksaan;
  }
  static schema() {
    return yup.object().shape({
      unit: yup.string(),
      tanggal: yup.string(),
      kornea: yup.string(),
      ketebalan: yup.string(),
      ketebalan_od: yup.string(),
      ketebalan_os: yup.string(),
      od_epitel_detach_check: yup.string(),
      od_erosi_check: yup.string(),
      od_irregular_epitel_check: yup.string(),
      od_epitel_thinning_check: yup.string(),
      od_epitel_downgrowth_check: yup.string(),
      od_epitel_lainnya_check: yup.string(),
      os_epitel_detach_check: yup.string(),
      os_erosi_check: yup.string(),
      os_irregular_epitel_check: yup.string(),
      os_epitel_thinning_check: yup.string(),
      os_epitel_downgrowth_check: yup.string(),
      os_epitel_lainnya_check: yup.string(),
      od_irreguler_stroma_check: yup.string(),
      od_stromal_thinning_check: yup.string(),
      od_stromal_melting_check: yup.string(),
      od_stromal_lainnya_check: yup.string(),
      os_irreguler_stroma_check: yup.string(),
      os_stromal_thinning_check: yup.string(),
      os_stromal_melting_check: yup.string(),
      os_stromal_lainnya_check: yup.string(),
      od_irreguler_endotel_check: yup.string(),
      od_endotelial_detachment_check: yup.string(),
      od_endotel_lainnya_check: yup.string(),
      os_irreguler_endotel_check: yup.string(),
      os_endotelial_detachment_check: yup.string(),
      os_endotel_lainnya_check: yup.string(),
      od_anterior_chamber_check: yup.string(),
      od_anterior_chamber_depth: yup.string(),
      od_bmd_mass_check: yup.string(),
      od_bmd_particle_check: yup.string(),
      od_bmd_lainnya_check: yup.string(),
      os_anterior_chamber_check: yup.string(),
      os_anterior_chamber_depth: yup.string(),
      os_bmd_mass_check: yup.string(),
      os_bmd_particle_check: yup.string(),
      os_bmd_lainnya_check: yup.string(),
      od_scleral_spur_check: yup.string(),
      od_scleral_spur_angle: yup.string(),
      od_sudut_dangkal_check: yup.string(),
      od_sudut_dalam_check: yup.string(),
      os_scleral_spur_check: yup.string(),
      os_scleral_spur_angle: yup.string(),
      os_sudut_dangkal_check: yup.string(),
      os_sudut_dalam_check: yup.string(),
      od_blok_pupil_check: yup.string(),
      od_plateau_check: yup.string(),
      od_tumor_kista_check: yup.string(),
      os_blok_pupil_check: yup.string(),
      os_plateau_check: yup.string(),
      os_tumor_kista_check: yup.string(),
      od_lens_vault_check: yup.string(),
      od_lens_vault: yup.string(),
      od_lens_thickness_check: yup.string(),
      od_lens_thickness: yup.string(),
      os_lens_vault_check: yup.string(),
      os_lens_vault: yup.string(),
      os_lens_thickness_check: yup.string(),
      os_lens_thickness: yup.string(),
      kesimpulan: yup.string(),
      ttd_perawat: yup.string(),
      id_perawat: yup.string(),
      ttd_dokter_pemeriksaan: yup.string(),
      id_dokter_pemeriksaan: yup.string(),
    });
  }

  static createFromJson(json: ICreateOctCorneaResultsRequest) {
    return new CreateOctCorneaResultsRequest(json);
  }
}
