import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@src/shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface ICreateVisualFieldResultsRequest extends IAppRequest {
  unit: string;
  'list-no-berobat': string;
  od_parameter: string;
  od_reliabilitas: string;
  od_defek: string;
  od_tendensi_defek: string;
  od_severitas_defek: string;
  os_parameter: string;
  os_reliabilitas: string;
  os_defek: string;
  os_tendensi_defek: string;
  os_severitas_defek: string;
  kesimpulan: string;
  anjuran: string;
  pemeriksaan_rutin: string;
  'ttd-tanggal': string;
  'ttd-dokter-pemeriksa': string;
  dokter_pemeriksa: string;
  "ttd-perawat-pemeriksa": string;
  perawat_pemeriksa: string;
}

export class CreateVisualFieldResultsRequest extends AppRequest {
  'list-no-berobat': string;
  unit: string;
  od_parameter: string;
  od_reliabilitas: string;
  od_defek: string;
  od_tendensi_defek: string;
  od_severitas_defek: string;
  os_parameter: string;
  os_reliabilitas: string;
  os_defek: string;
  os_tendensi_defek: string;
  os_severitas_defek: string;
  kesimpulan: string;
  anjuran: string;
  pemeriksaan_rutin: string;
  'ttd-tanggal': string;
  'ttd-dokter-pemeriksa': string;
  dokter_pemeriksa: string;
  "ttd-perawat-pemeriksa": string;
  perawat_pemeriksa: string;

  constructor(lapang: ICreateVisualFieldResultsRequest) {
    super(lapang);
    this.unit = lapang.unit;
    this['list-no-berobat'] = lapang['list-no-berobat'];
    this.od_parameter = lapang.od_parameter;
    this.od_reliabilitas = lapang.od_reliabilitas;
    this.od_defek = lapang.od_defek;
    this.od_tendensi_defek = lapang.od_tendensi_defek;
    this.od_severitas_defek = lapang.od_severitas_defek;
    this.os_parameter = lapang.os_parameter;
    this.os_reliabilitas = lapang.os_reliabilitas;
    this.os_defek = lapang.os_defek;
    this.os_tendensi_defek = lapang.os_tendensi_defek;
    this.os_severitas_defek = lapang.os_severitas_defek;
    this.kesimpulan = lapang.kesimpulan;
    this.anjuran = lapang.anjuran;
    this.pemeriksaan_rutin = lapang.pemeriksaan_rutin;
    this['ttd-tanggal'] = lapang['ttd-tanggal'] ? DateTimeConverter.convertToNormalDatetime(lapang['ttd-tanggal']) : '';
    this['ttd-dokter-pemeriksa'] = lapang['ttd-dokter-pemeriksa'];
    this.dokter_pemeriksa = lapang.dokter_pemeriksa;
    this['ttd-perawat-pemeriksa'] = lapang['ttd-perawat-pemeriksa'];
    this.perawat_pemeriksa = lapang.perawat_pemeriksa;
  }

  static schema() {
    return yup.object().shape({
      unit: yup.string(),
      'list-no-berobat': yup.string(),
      od_parameter: yup.string(),
      od_reliabilitas: yup.string(),
      od_defek: yup.string(),
      od_tendensi_defek: yup.string(),
      od_severitas_defek: yup.string(),
      os_parameter: yup.string(),
      os_reliabilitas: yup.string(),
      os_defek: yup.string(),
      os_tendensi_defek: yup.string(),
      os_severitas_defek: yup.string(),
      kesimpulan: yup.string(),
      anjuran: yup.string(),
      pemeriksaan_rutin: yup.string(),
      'ttd-tanggal': yup.string(),
      'ttd-dokter-pemeriksa': yup.string(),
      dokter_pemeriksa: yup.string(),
      "ttd-perawat-pemeriksa": yup.string(),
      perawat_pemeriksa: yup.string(),
    });
  }

  static createFromJson(json: ICreateVisualFieldResultsRequest) {
    return new CreateVisualFieldResultsRequest(json);
  }

  static convertToNormalDatetime(date: any) {
    const d = new Date(date);
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }
}