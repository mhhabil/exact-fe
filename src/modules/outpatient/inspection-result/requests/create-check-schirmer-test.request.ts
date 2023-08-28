import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';

export interface ICreateCheckSchirmerTestRequest extends IAppRequest {
    unit: string;
    nama: string;
    tanggal: string;
    od: string,
    os: string;
    kesimpulan: string,
    id_perawat: string;
    id_dokter_pemeriksa: string;
    ttd_perawat: string;
    ttd_dokter_pemeriksa: string;
}

export class CreateCheckSchirmerTestRequest extends AppRequest {
    unit: string;
    nama: string;
    tanggal: string;
    od: string;
    os: string;
    kesimpulan: string;
    id_perawat: string;
    id_dokter_pemeriksa: string;
    ttd_perawat: string;
    ttd_dokter_pemeriksa: string;

    constructor(request: ICreateCheckSchirmerTestRequest) {
      super(request);
      this.unit = request.unit;
      this.nama = request.nama;
      this.tanggal = request.tanggal;
      this.od = request.od;
      this.os = request.os;
      this.kesimpulan = request.kesimpulan;
      this.id_perawat = request.id_perawat;
      this.id_dokter_pemeriksa = request.id_dokter_pemeriksa;
      this.ttd_perawat = request.ttd_perawat;
      this.ttd_dokter_pemeriksa = request.ttd_dokter_pemeriksa;
    }

    static schema() {
      return yup.object().shape({
        unit: yup.string(),
        nama: yup.string(),
        tanggal: yup.string(),
        od: yup.string(),
        os: yup.string(),
        kesimpulan: yup.string(),
        id_perawat: yup.string(),
        id_dokter_pemeriksa: yup.string(),
        ttd_perawat: yup.string(),
        ttd_dokter_pemeriksa : yup.string(),
      });
    }

    static createFromJson(json: ICreateCheckSchirmerTestRequest) {
      return new CreateCheckSchirmerTestRequest(json);
    }
}
