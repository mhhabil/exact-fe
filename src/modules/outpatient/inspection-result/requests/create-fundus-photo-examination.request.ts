import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface ICreateFundusPhotoExaminationRequest extends IAppRequest {
    unit: string;
    od_batas: string;
    od_warna: string;
    od_cupping: string;
    od_retina: string;
    od_break: string;
    od_pendarahan: string;
    od_av_crossing: string;
    od_tortovsity: string;
    od_obstruksi: string;
    od_vitreous: string;
    od_vitreous_pendarahan: string;
    od_pvd: string;
    os_batas: string;
    os_warna: string;
    os_cupping: string;
    os_retina: string;
    os_break: string;
    os_pendarahan: string;
    os_av_crossing: string;
    os_tortovsity: string;
    os_obstruksi: string;
    os_vitreous: string;
    os_vitreous_pendarahan: string;
    os_pvd: string;
    kesimpulan: string;
    kesimpulan_opt: string;
    'ttd-tanggal': string;
    'ttd-perawat-pemeriksa': string;
    perawat_pemeriksa: string;
    undefined: string;
    'ttd-dokter-pemeriksa': string;
    dokter_pemeriksa: string;
}

export class CreateFundusPhotoExaminationRequest extends AppRequest {
    unit: string;
    od_batas: string;
    od_warna: string;
    od_cupping: string;
    od_retina: string;
    od_break: string;
    od_pendarahan: string;
    od_av_crossing: string;
    od_tortovsity: string;
    od_obstruksi: string;
    od_vitreous: string;
    od_vitreous_pendarahan: string;
    od_pvd: string;
    os_batas: string;
    os_warna: string;
    os_cupping: string;
    os_retina: string;
    os_break: string;
    os_pendarahan: string;
    os_av_crossing: string;
    os_tortovsity: string;
    os_obstruksi: string;
    os_vitreous: string;
    os_vitreous_pendarahan: string;
    os_pvd: string;
    kesimpulan: string;
    kesimpulan_opt: string;
    'ttd-tanggal': string;
    'ttd-perawat-pemeriksa': string;
    perawat_pemeriksa: string;
    undefined: string;
    'ttd-dokter-pemeriksa': string;
    dokter_pemeriksa: string;

    constructor(request: ICreateFundusPhotoExaminationRequest) {
      super(request);
      this.unit = request.unit;
      this.od_batas = request.od_batas;
      this.od_warna = request.od_warna;
      this.od_cupping = request.od_cupping;
      this.od_retina = request.od_retina;
      this.od_break = request.od_break;
      this.od_pendarahan = request.od_pendarahan;
      this.od_av_crossing = request.od_av_crossing;
      this.od_tortovsity = request.od_tortovsity;
      this.od_obstruksi = request.od_obstruksi;
      this.od_vitreous = request.od_vitreous;
      this.od_vitreous_pendarahan = request.od_vitreous_pendarahan;
      this.od_pvd = request.od_pvd;
      this.os_batas = request.os_batas;
      this.os_warna = request.os_warna;
      this.os_cupping = request.os_cupping;
      this.os_retina = request.os_retina;
      this.os_break = request.os_break;
      this.os_pendarahan = request.os_pendarahan;
      this.os_av_crossing = request.os_av_crossing;
      this.os_tortovsity = request.os_tortovsity;
      this.os_obstruksi = request.os_obstruksi;
      this.os_vitreous = request.os_vitreous;
      this.os_vitreous_pendarahan = request.os_vitreous_pendarahan;
      this.os_pvd = request.os_pvd;
      this.kesimpulan = request.kesimpulan;
      this.kesimpulan_opt = request.kesimpulan_opt;
      this['ttd-tanggal'] = request['ttd-tanggal'] ? DateTimeConverter.convertToNormalDatetime(request['ttd-tanggal']) : '';
      this['ttd-perawat-pemeriksa'] = request['ttd-perawat-pemeriksa'];
      this.perawat_pemeriksa = request.perawat_pemeriksa;
      this.undefined = request.undefined;
      this['ttd-dokter-pemeriksa'] = request['ttd-dokter-pemeriksa'];
      this.dokter_pemeriksa = request.dokter_pemeriksa;
    }

    static schema() {
      return yup.object().shape({
        unit: yup.string(),
        od_batas: yup.string(),
        od_warna: yup.string(),
        od_cupping: yup.string(),
        od_retina: yup.string(),
        od_break: yup.string(),
        od_pendarahan: yup.string(),
        od_av_crossing: yup.string(),
        od_tortovsity: yup.string(),
        od_obstruksi: yup.string(),
        od_vitreous: yup.string(),
        od_vitreous_pendarahan: yup.string(),
        od_pvd: yup.string(),
        os_batas: yup.string(),
        os_warna: yup.string(),
        os_cupping: yup.string(),
        os_retina: yup.string(),
        os_break: yup.string(),
        os_pendarahan: yup.string(),
        os_av_crossing: yup.string(),
        os_tortovsity: yup.string(),
        os_obstruksi: yup.string(),
        os_vitreous: yup.string(),
        os_vitreous_pendarahan: yup.string(),
        os_pvd: yup.string(),
        kesimpulan: yup.string(),
        kesimpulan_opt:   yup.string(),
        'ttd-tanggal': yup.string(),
        'ttd-perawat-pemeriksa': yup.string(),
        perawat_pemeriksa: yup.string(),
        undefined: yup.string(),
        'ttd-dokter-pemeriksa': yup.string(),
        dokter_pemeriksa: yup.string(),
      });
    }

    static createFromJson(json: ICreateFundusPhotoExaminationRequest) {
      return new CreateFundusPhotoExaminationRequest(json);
    }
}