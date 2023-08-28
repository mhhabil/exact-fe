import { DateTimeConverter } from "@src/shared/datetime-converter";
import { AppRequest, IAppRequest } from "@src/shared/request";

export interface IUpdateSurgicalAreaMarking extends IAppRequest {
  tanggal_operasi: string
  prosedur_operasi: string
  dokter_operasi: any
  "tanda-tangan-pasien": string
  "ttd-dokter-pelaksana": string
  dokter_pelaksana: string
  "tanda-tangan-perawat": string
  "id-perawat": string
  gambar_head: string
  gambar_body: string
}

export class UpdateSurgicalAreaMarking extends AppRequest {
  tanggal_operasi: string
  prosedur_operasi: string
  dokter_operasi: any
  "tanda-tangan-pasien": string
  "ttd-dokter-pelaksana": string
  dokter_pelaksana: string
  "tanda-tangan-perawat": string
  "id-perawat": string
  gambar_head: string
  gambar_body: string

  constructor(req: IUpdateSurgicalAreaMarking) {
    super(req);
    this.tanggal_operasi = req.tanggal_operasi ? DateTimeConverter.convertToNormalDatetime(req.tanggal_operasi) : '';
    this.prosedur_operasi = req.prosedur_operasi;
    this.dokter_operasi = req.dokter_operasi;
    this["tanda-tangan-pasien"] = req["tanda-tangan-pasien"];
    this["ttd-dokter-pelaksana"] = req["ttd-dokter-pelaksana"];
    this.dokter_pelaksana = req.dokter_pelaksana;
    this["tanda-tangan-perawat"] = req["tanda-tangan-perawat"];
    this["id-perawat"] = req["id-perawat"];
    this.gambar_body = req.gambar_body;
    this.gambar_head = req.gambar_head;
  }

  static createFromJson(json: IUpdateSurgicalAreaMarking) {
    return new UpdateSurgicalAreaMarking(json);
  }
}
