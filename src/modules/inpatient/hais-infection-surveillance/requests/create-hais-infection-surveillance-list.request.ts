import { DateTimeConverter } from "@src/shared/datetime-converter";
import { AppRequest, IAppRequest } from "@src/shared/request";

export interface ICreateHaisSurveillanceInfectionListRequest extends IAppRequest {
  id_pegawai: string;
  ttd_pegawai: string;
  hari: string
  waktu: string
  krs: string
  kontrol: string
  pelindung_kasa: string
  pelindung_eyeshield: string
  antibiotik_topikal: string
  antibiotik_oral: string
  mata_air: string
  mata_asap: string
  mata_debu: string
  gda: string
  ido_kabur: string
  ido_merah: string
  ido_nyeri: string
  ido_tio: string
  ido_odem_kornea: string
  ido_flare: string
  ido_hiporpion: string
  ido_membran: string
  ido_pupil: string
  ido_kekeruhan: string
  ido_kultur: string
  ido_dx: string
  keterangan: string
}

export class CreateHaisSurveillanceInfectionListRequest extends AppRequest {
  id_pegawai: string;
  ttd_pegawai: string;
  hari: string
  waktu: string
  krs: string
  kontrol: string
  pelindung_kasa: string
  pelindung_eyeshield: string
  antibiotik_topikal: string
  antibiotik_oral: string
  mata_air: string
  mata_asap: string
  mata_debu: string
  gda: string
  ido_kabur: string
  ido_merah: string
  ido_nyeri: string
  ido_tio: string
  ido_odem_kornea: string
  ido_flare: string
  ido_hiporpion: string
  ido_membran: string
  ido_pupil: string
  ido_kekeruhan: string
  ido_kultur: string
  ido_dx: string
  keterangan: string

  constructor(req: ICreateHaisSurveillanceInfectionListRequest) {
    super(req);
    this.hari = req.hari;
    this.waktu = req.waktu ? DateTimeConverter.convertToNormalDatetime(req.waktu) : '';
    this.keterangan = req.keterangan;
    this.id_pegawai = req.id_pegawai;
    this.ttd_pegawai = req.ttd_pegawai;
    this.krs = req.krs;
    this.kontrol = req.kontrol;
    this.pelindung_kasa = req.pelindung_kasa;
    this.pelindung_eyeshield = req.pelindung_eyeshield;
    this.antibiotik_topikal = req.antibiotik_topikal;
    this.antibiotik_oral = req.antibiotik_oral;
    this.mata_air = req.mata_air;
    this.mata_asap = req.mata_asap;
    this.mata_debu = req.mata_debu;
    this.gda = req.gda;
    this.ido_kabur = req.ido_kabur;
    this.ido_merah = req.ido_merah;
    this.ido_nyeri = req.ido_nyeri;
    this.ido_tio = req.ido_tio;
    this.ido_odem_kornea = req.ido_odem_kornea;
    this.ido_flare = req.ido_flare;
    this.ido_hiporpion = req.ido_hiporpion;
    this.ido_membran = req.ido_membran;
    this.ido_pupil = req.ido_pupil;
    this.ido_kekeruhan = req.ido_kekeruhan;
    this.ido_kultur = req.ido_kultur;
    this.ido_dx = req.ido_dx;
  }

  static createFromJson(json: ICreateHaisSurveillanceInfectionListRequest) {
    return new CreateHaisSurveillanceInfectionListRequest(json);
  }
}
