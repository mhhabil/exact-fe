export interface Pasien {
  Nama:          string;
  Suku:          string;
  Umur:          number;
  Agama:         string;
  No_HP:         string;
  No_MR:         string;
  Alamat:        string;
  No_BPJS:       string;
  Provinsi:      string;
  Kabupaten:     string;
  Kecamatan:     string;
  Pekerjaan:     string;
  Tgl_Lahir:     Date;
  No_Telepon:    string;
  Pendidikan:    string;
  Tgl_Daftar:    Date;
  Global_No_MR:  string;
  Status_Nikah:  string;
  Tempat_Lahir:  string;
  Jenis_Kelamin: string;
}

export interface Pediatric {
  Hes_OD_Hes?: string;
  Hes_OS_Hes?: string;
  Okn_OD_Okn?: string;
  Okn_OS_Okn?: string;
  Raf_OD_Raf?: string;
  Raf_OS_Raf?: string;
  Tac_OD_At_38?: string;
  Tac_OD_At_55?: string;
  Tac_OD_At_84?: string;
  Tac_OS_At_38?: string;
  Tac_OS_At_55?: string;
  Tac_OS_At_84?: string;
  Cover_OD_Cover_1?: string;
  Cover_OD_Cover_2?: string;
  Cover_OD_Cover_3?: string;
  Cover_OD_Cover_4?: string;
  Cover_OD_Cover_5?: string;
  Cover_OD_Cover_6?: string;
  Cover_OS_Cover_1?: string;
  Cover_OS_Cover_2?: string;
  Cover_OS_Cover_3?: string;
  Cover_OS_Cover_4?: string;
  Cover_OS_Cover_5?: string;
  Cover_OS_Cover_6?: string;
  Prisma_OD_Prisma?: string;
  Prisma_OS_Prisma?: string;
  Randot_OD_Animal?: string;
  Randot_OS_Animal?: string;
  Rpl_Streak_OD_Va?: string;
  Rpl_Streak_OS_Va?: string;
  Submit_Pediatrik?: string;
  Randot_OD_Circles?: string;
  Randot_OS_Circles?: string;
  Rpl_Streak_OD_False?: string;
  Rpl_Streak_OS_False?: string;
  Randot_OD_Randot_Form?: string;
  Randot_OS_Randot_Form?: string;
  Rpl_Streak_OD_Pd_Jauh?: string;
  Rpl_Streak_OS_Pd_Jauh?: string;
  Rpl_Streak_OD_Adaptasi?: string;
  Rpl_Streak_OS_Adaptasi?: string;
  Goniometer_OD_Goniometer?: string;
  Goniometer_OS_Goniometer?: string;
  Nearvision_OD_Nearvision?: string;
  Nearvision_OS_Nearvision?: string;
  Rpl_Streak_OD_Streak_Cyl?: string;
  Rpl_Streak_OD_Streak_Sph?: string;
  Rpl_Streak_OS_Streak_Cyl?: string;
  Rpl_Streak_OS_Streak_Sph?: string;
  Cardif_OD_Test_Distance_1?: string;
  Cardif_OS_Test_Distance_1?: string;
  Rpl_Streak_OD_Streak_Axis?: string;
  Rpl_Streak_OS_Streak_Axis?: string;
  Cardif_OD_Test_Distance_50?: string;
  Cardif_OS_Test_Distance_50?: string;
}

export interface Record {
  ID:                   string;
  Unit:                 string;
  Waktu:                string;
  Data_A:               string;
  Data_D:               string;
  Data_I:               string;
  Data_M:               string;
  Data_E:               string;
  Data_O:               string;
  Data_P:               string;
  Data_S:               string;
  Is_Dokter:            boolean;
  Cmb_Data_O?:          string;
  ID_Petugas:           string;
  Non_Data_O?:          string;
  Updated_At:           Date;
  Updated_By:           string;
  Data_A_Text?:         string;
  ID_Pelayanan:         string;
  Nama_Petugas:         string;
  Instruksi_PPA:        string;
  Id_Perawat_Cppt:      string;
  TTD_Perawat_Cppt:     string;
  Nama_Perawat_Cppt:    string;
  Id_Dokter_Pengkaji:   string;
  TTD_Dokter_Pengkaji:  string;
  Nama_Dokter_Pengkaji: string;
  Resep?:               any[];
  Pediatrik?:           Pediatric;
  Submit_Mata?:         number;
  Submit_Retina?:       number;
  Gambar_Mata_OD?:      string;
  Gambar_Mata_OS?:      string;
  Is_Form_Dokter?:      number;
  Data_A_Lain_Text?:    string;
  Data_P_Lain_Text?:    string;
  Data_S_Lain_Text?:    string;
  Gambar_Retina_OD?:    string;
  Gambar_Retina_OS?:    string;
  Submit_Pediatrik?:    number;
  Data_O_Json?:         any;
  Masalah_Obat_Radio?: number;
  Anjuran_Dokter?:       string;
  Interaksi_Obat?:       string;
  Monitor_Terapi?:       string;
  Anjuran_Perawat?:      string;
  Efek_Samping_Obat?:    string;
  Masalah_Obat_Teks?:    string;
  Monitor_Efek_Samping?: string;
}

export interface IHistoryCPPTModel {
  total:         number;
  totalFiltered: number;
  records:       Record[];
  pasien:        Pasien;
}

export class HistoryCPPTModel {
  total:         number;
  totalFiltered: number;
  records:       Record[];
  pasien:        Pasien;

  constructor(request: IHistoryCPPTModel) {
    this.total = request.total;
    this.totalFiltered = request.totalFiltered;
    this.records = (request.records && Array.isArray(request.records)) ? request.records : [];
    this.pasien = request.pasien;
  }
}
