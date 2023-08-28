export interface IPatientModel {
  Agama: string;
  Alamat: string;
  Global_No_MR: string;
  Jenis_Kelamin: string;
  Kabupaten: string;
  Nama: string;
  No_BPJS: string;
  No_HP: string;
  No_MR: string;
  No_Telepon: string;
  Pekerjaan: string;
  Pendidikan: string;
  Provinsi: string;
  Status_Nikah: string;
  Suku: string;
  Tempat_Lahir: string;
  Tgl_Daftar: string;
  Tgl_Lahir: string;
  NIK: string;
  Umur: string;
  Umur_Lengkap: {
    Tahun: string;
    Bulan: string;
    Hari: string;
  };
}

export interface IWaliModel {
  Alamat: string;
  Hubungan: string;
  Nama: string;
  No_Telepon_1: string;
  No_Telepon: string;
  Suku: string;
}

export interface IPatientVisitModel {
  Kode_Cabang: string;
  No_MR: string;
  Tipe_Pasien: string;
  Tgl_Berobat: string;
  Jam_Kunjungan: string;
  Created_At: string;
  Pasien: IPatientModel;
  isCpptDokter: boolean;
}

export interface IPatientResponseModel {
  records: Array<IPatientVisitModel>;
  total: number;
  totalFiltered: number;
  currentPage: number;
  totalPage: number;
}

export interface ITreatmentModel {
  EMR_ID: string;
  ID_Dokter: string;
  ID_Pelayanan: string;
  Is_Batal: number;
  Jam_Kunjungan: string;
  Jenis_Pelayanan: string;
  Kode_Cabang: string;
  Nama_Dokter: string;
  No_MR: string;
  No_SEP: string;
  Tgl_Berobat: string;
  Tgl_Jam_Berobat: string;
  Tipe_Pasien: string;
  Pasien: IPatientModel;
  Wali: IWaliModel;
  isCpptDokter: boolean;
  Penanganan: string;
  Asal_Rujukan: string;
  Nama_Tipe_Tagihan: string;
}
