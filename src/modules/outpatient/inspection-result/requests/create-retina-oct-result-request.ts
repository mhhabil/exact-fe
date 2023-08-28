import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface ICreateRetinaOCTResultRequest extends IAppRequest {
  unit: string;
  'ttd-tanggal': string;
  od_vitreoretinal: string;
  od_foveal: string;
  od_intraretinal: string;
  od_intraretinal_text: string;
  od_rpe: string;
  od_choroid: string;
  od_central_macular: string;
  od_lain_lain: string;
  os_vitreoretinal: string;
  os_foveal: string;
  os_intraretinal: string;
  os_intraretinal_text: string;
  os_rpe: string;
  os_choroid: string;
  os_central_macular: string;
  os_lain_lain: string;
  kesimpulan: string;
  'ttd-perawat-pemeriksa': string;
  perawat_pemeriksa: string;
  'ttd-dokter-pemeriksa': string;
  dokter_pemeriksa: string;
  kesimpulan_opt: string;
}

export class CreateRetinaOCTResultRequest extends AppRequest {
  unit: string;
  'ttd-tanggal': string;
  od_vitreoretinal: string;
  od_foveal: string;
  od_intraretinal: string;
  od_intraretinal_text: string;
  od_rpe: string;
  od_choroid: string;
  od_central_macular: string;
  od_lain_lain: string;
  os_vitreoretinal: string;
  os_foveal: string;
  os_intraretinal: string;
  os_intraretinal_text: string;
  os_rpe: string;
  os_choroid: string;
  os_central_macular: string;
  os_lain_lain: string;
  kesimpulan: string;
  'ttd-perawat-pemeriksa': string;
  perawat_pemeriksa: string;
  'ttd-dokter-pemeriksa': string;
  dokter_pemeriksa: string;
  kesimpulan_opt: string;

  constructor(request: ICreateRetinaOCTResultRequest) {
    super(request);
    this.unit = request.unit;
    this['ttd-tanggal'] = request['ttd-tanggal'] ? DateTimeConverter.convertToNormalDatetime(request['ttd-tanggal']) : '';
    this.od_vitreoretinal = request.od_vitreoretinal;
    this.od_foveal = request.od_foveal;
    this.od_intraretinal = request.od_intraretinal;
    this.od_intraretinal_text = request.od_intraretinal_text;
    this.od_rpe = request.od_rpe;
    this.od_choroid = request.od_choroid;
    this.od_central_macular = request.od_central_macular;
    this.od_lain_lain = request.od_lain_lain;
    this.os_vitreoretinal = request.os_vitreoretinal;
    this.os_foveal = request.os_foveal;
    this.os_intraretinal = request.os_intraretinal;
    this.os_intraretinal_text = request.os_intraretinal_text;
    this.os_rpe = request.os_rpe;
    this.os_choroid = request.os_choroid;
    this.os_central_macular = request.os_central_macular;
    this.os_lain_lain = request.os_lain_lain;
    this.kesimpulan = request.kesimpulan;
    this['ttd-perawat-pemeriksa'] = request['ttd-perawat-pemeriksa'];
    this.perawat_pemeriksa = request.perawat_pemeriksa;
    this['ttd-dokter-pemeriksa'] = request['ttd-dokter-pemeriksa'];
    this.dokter_pemeriksa = request.dokter_pemeriksa;
    this.kesimpulan_opt = request.kesimpulan_opt;
  }

  static schema() {
    return yup.object().shape({
      unit: yup.string(),
      'ttd-tanggal': yup.string(),
      od_vitreoretinal: yup.string(),
      od_foveal: yup.string(),
      od_intraretinal: yup.string(),
      od_intraretinal_text: yup.string(),
      od_rpe: yup.string(),
      od_choroid: yup.string(),
      od_central_macular: yup.string(),
      od_lain_lain: yup.string(),
      os_vitreoretinal: yup.string(),
      os_foveal: yup.string(),
      os_intraretinal: yup.string(),
      os_intraretinal_text: yup.string(),
      os_rpe: yup.string(),
      os_choroid: yup.string(),
      os_central_macular: yup.string(),
      os_lain_lain: yup.string(),
      kesimpulan: yup.string(),
      'ttd-perawat-pemeriksa': yup.string(),
      perawat_pemeriksa: yup.string(),
      'ttd-dokter-pemeriksa': yup.string(),
      dokter_pemeriksa: yup.string(),
      kesimpulan_opt: yup.string(),
    });
  }

  static createFromJson(json: ICreateRetinaOCTResultRequest) {
    return new CreateRetinaOCTResultRequest(json);
  }
}
