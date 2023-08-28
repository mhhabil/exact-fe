import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@src/shared/request';

export interface IUpdatePreparationOfAnestheticEquipmentRequest extends IAppRequest{
  unit: string;
  tanggal_tindakan: string;
  jenis_operasi: string;
  teknik_anestesi: string;
  listrik_1: string;
  listrik_2: string;
  listrik_3: string;
  gas_1: string;
  gas_2: string;
  gas_3: string;
  gas_4: string;
  gas_5: string;
  gas_6: string;
  mesin_anestesi_1: string;
  mesin_anestesi_2: string;
  mesin_anestesi_3: string;
  mesin_anestesi_4: string;
  mesin_anestesi_5: string;
  manajemen_nafas_1: string;
  manajemen_nafas_2: string;
  manajemen_nafas_3: string;
  manajemen_nafas_4: string;
  manajemen_nafas_5: string;
  manajemen_nafas_6: string;
  manajemen_nafas_7: string;
  manajemen_nafas_8: string;
  manajemen_nafas_9: string;
  pemantauan_1: string;
  pemantauan_2: string;
  pemantauan_3: string;
  pemantauan_4: string;
  pemantauan_5: string;
  pemantauan_6: string;
  lainnya_1: string;
  lainnya_2: string;
  lainnya_3: string;
  lainnya_4: string;
  lainnya_5: string;
  lainnya_6: string;
  lainnya_7: string;
  obat_1: string;
  obat_2: string;
  obat_3: string;
  obat_4: string;
  obat_5: string;
  obat_6: string;
  obat_7: string;
  obat_7_teks: string;
  ttd_penata_anestesi: string;
  id_penata_anestesi: string;
  ttd_dokter_anestesi: string;
  id_dokter_anestesi: string;
}

export class UpdatePreparationOfAnestheticEquipmentRequest extends AppRequest {
  unit: string;
  tanggal_tindakan: string;
  jenis_operasi: string;
  teknik_anestesi: string;
  listrik_1: string;
  listrik_2: string;
  listrik_3: string;
  gas_1: string;
  gas_2: string;
  gas_3: string;
  gas_4: string;
  gas_5: string;
  gas_6: string;
  mesin_anestesi_1: string;
  mesin_anestesi_2: string;
  mesin_anestesi_3: string;
  mesin_anestesi_4: string;
  mesin_anestesi_5: string;
  manajemen_nafas_1: string;
  manajemen_nafas_2: string;
  manajemen_nafas_3: string;
  manajemen_nafas_4: string;
  manajemen_nafas_5: string;
  manajemen_nafas_6: string;
  manajemen_nafas_7: string;
  manajemen_nafas_8: string;
  manajemen_nafas_9: string;
  pemantauan_1: string;
  pemantauan_2: string;
  pemantauan_3: string;
  pemantauan_4: string;
  pemantauan_5: string;
  pemantauan_6: string;
  lainnya_1: string;
  lainnya_2: string;
  lainnya_3: string;
  lainnya_4: string;
  lainnya_5: string;
  lainnya_6: string;
  lainnya_7: string;
  obat_1: string;
  obat_2: string;
  obat_3: string;
  obat_4: string;
  obat_5: string;
  obat_6: string;
  obat_7: string;
  obat_7_teks: string;
  ttd_penata_anestesi: string;
  id_penata_anestesi: string;
  ttd_dokter_anestesi: string;
  id_dokter_anestesi: string;
  constructor(request: IUpdatePreparationOfAnestheticEquipmentRequest) {
    super(request)
    this.unit = request.unit;
    this.tanggal_tindakan = request.tanggal_tindakan;
    this.jenis_operasi = request.jenis_operasi;
    this.teknik_anestesi = request.teknik_anestesi;
    this.listrik_1 = request.listrik_1;
    this.listrik_2 = request.listrik_2;
    this.listrik_3 = request.listrik_3;
    this.gas_1 = request.gas_1;
    this.gas_2 = request.gas_2;
    this.gas_3 = request.gas_3;
    this.gas_4 = request.gas_4;
    this.gas_5 = request.gas_5;
    this.gas_6 = request.gas_6;
    this.mesin_anestesi_1 = request.mesin_anestesi_1;
    this.mesin_anestesi_2 = request.mesin_anestesi_2;
    this.mesin_anestesi_3 = request.mesin_anestesi_3;
    this.mesin_anestesi_4 = request.mesin_anestesi_4;
    this.mesin_anestesi_5 = request.mesin_anestesi_5;
    this.manajemen_nafas_1 = request.manajemen_nafas_1;
    this.manajemen_nafas_2 = request.manajemen_nafas_2;
    this.manajemen_nafas_3 = request.manajemen_nafas_3;
    this.manajemen_nafas_4 = request.manajemen_nafas_4;
    this.manajemen_nafas_5 = request.manajemen_nafas_5;
    this.manajemen_nafas_6 = request.manajemen_nafas_6;
    this.manajemen_nafas_7 = request.manajemen_nafas_7;
    this.manajemen_nafas_8 = request.manajemen_nafas_8;
    this.manajemen_nafas_9 = request.manajemen_nafas_9;
    this.pemantauan_1 = request.pemantauan_1;
    this.pemantauan_2 = request.pemantauan_2;
    this.pemantauan_3 = request.pemantauan_3;
    this.pemantauan_4 = request.pemantauan_4;
    this.pemantauan_5 = request.pemantauan_5;
    this.pemantauan_6 = request.pemantauan_6;
    this.lainnya_1 = request.lainnya_1;
    this.lainnya_2 = request.lainnya_2;
    this.lainnya_3 = request.lainnya_3;
    this.lainnya_4 = request.lainnya_4;
    this.lainnya_5 = request.lainnya_5;
    this.lainnya_6 = request.lainnya_6;
    this.lainnya_7 = request.lainnya_7;
    this.obat_1 = request.obat_1;
    this.obat_2 = request.obat_2;
    this.obat_3 = request.obat_3;
    this.obat_4 = request.obat_4;
    this.obat_5 = request.obat_5;
    this.obat_6 = request.obat_6;
    this.obat_7 = request.obat_7;
    this.obat_7_teks = request.obat_7_teks;
    this.ttd_penata_anestesi = request.ttd_penata_anestesi;
    this.id_penata_anestesi = request.id_penata_anestesi;
    this.ttd_dokter_anestesi = request.ttd_dokter_anestesi;
    this.id_dokter_anestesi = request.id_dokter_anestesi;
  }

  static schema() {
    return yup.object().shape({
      unit: yup.string(),
      tanggal_tindakan: yup.string(),
      jenis_operasi: yup.string(),
      teknik_anestesi:  yup.string(),
      listrik_1: yup.string(),
      listrik_2: yup.string(),
      listrik_3: yup.string(),
      gas_1: yup.string(),
      gas_2: yup.string(),
      gas_3: yup.string(),
      gas_4: yup.string(),
      gas_5: yup.string(),
      gas_6: yup.string(),
      mesin_anestesi_1: yup.string(),
      mesin_anestesi_2: yup.string(),
      mesin_anestesi_3: yup.string(),
      mesin_anestesi_4: yup.string(),
      mesin_anestesi_5: yup.string(),
      manajemen_nafas_1: yup.string(),
      manajemen_nafas_2: yup.string(),
      manajemen_nafas_3: yup.string(),
      manajemen_nafas_4: yup.string(),
      manajemen_nafas_5: yup.string(),
      manajemen_nafas_6: yup.string(),
      manajemen_nafas_7: yup.string(),
      manajemen_nafas_8: yup.string(),
      manajemen_nafas_9: yup.string(),
      pemantauan_1: yup.string(),
      pemantauan_2: yup.string(),
      pemantauan_3: yup.string(),
      pemantauan_4: yup.string(),
      pemantauan_5: yup.string(),
      pemantauan_6: yup.string(),
      lainnya_1: yup.string(),
      lainnya_2: yup.string(),
      lainnya_3: yup.string(),
      lainnya_4: yup.string(),
      lainnya_5: yup.string(),
      lainnya_6: yup.string(),
      lainnya_7: yup.string(),
      obat_1: yup.string(),
      obat_2: yup.string(),
      obat_3: yup.string(),
      obat_4: yup.string(),
      obat_5: yup.string(),
      obat_6: yup.string(),
      obat_7: yup.string(),
      obat_7_teks: yup.string(),
      ttd_penata_anestesi: yup.string(),
      id_penata_anestesi: yup.string(),
      ttd_dokter_anestesi: yup.string(),
      id_dokter_anestesi: yup.string(),
    });
  }

  static createFromJson(json: IUpdatePreparationOfAnestheticEquipmentRequest) {
    return new UpdatePreparationOfAnestheticEquipmentRequest(json);
  }
}
