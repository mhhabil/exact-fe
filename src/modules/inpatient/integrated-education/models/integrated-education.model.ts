import { IDoctorModel } from "@src/shared/doctor";
import { DoctorModel } from "@src/shared/doctor/models/doctor.model";
import { DataModel, IDataModel } from "@src/shared/model";

export interface IMetodePembelajaran {
  Diskusi: number;
  Demonstrasi: number;
  Ceramah: number;
  Solusi: number;
  Observatori: number;
  Lain: number;
  Lain_Teks: string;
}

export interface IEvaluasiPasien {
  Mampu_Mengerti: number;
  Mampu_Memahami: number;
  Lain: number;
  Lain_Teks: string;
}

export interface IPenerimaEdukasi {
  Pasien: number;
  Pasangan: number;
  Orang_Tua: number;
  Saudara_Kandung: number;
  Lain: number;
  Lain_Teks: string;
}

export interface IIntegratedEducationFormModel {
  TTD_Penerima_Edukasi_DPJP: string;
  TTD_Penerima_Edukasi_Gizi: string;
  TTD_Penerima_Edukasi_Manajemen_Nyeri: string;
  TTD_Penerima_Edukasi_Post_Operasi: string;
  TTD_Penerima_Edukasi_Keperawatan: string;
  TTD_Penerima_Edukasi_Farmasi: string;
  TTD_Penerima_Edukasi_Dokter: string;
  TTD_Penerima_Edukasi_Rohaniawan: string;
  TTD_Penerima_Edukasi_Mencuci_Tangan: string;
  TTD_Penerima_Edukasi_Penggunaan_Peralatan: string;
  TTD_Penerima_Edukasi_Hak_Kewajiban: string;
  TTD_Penerima_Edukasi_Informasi_Lain: string;

  TTD_Edukator_DPJP: string;
  ID_Edukator_DPJP: string;
  Nama_Edukator_DPJP: string;

  TTD_Edukator_Gizi: string;
  ID_Edukator_Gizi: string;
  Nama_Edukator_Gizi: string;

  TTD_Edukator_Manajemen_Nyeri: string;
  ID_Edukator_Manajemen_Nyeri: string;
  Nama_Edukator_Manajemen_Nyeri: string;

  TTD_Edukator_Post_Operasi: string;
  ID_Edukator_Post_Operasi: string;
  Nama_Edukator_Post_Operasi: string;

  TTD_Edukator_Keperawatan: string;
  ID_Edukator_Keperawatan: string;
  Nama_Edukator_Keperawatan: string;

  TTD_Edukator_Farmasi: string;
  ID_Edukator_Farmasi: string;
  Nama_Edukator_Farmasi: string;

  TTD_Edukator_Dokter: string;
  ID_Edukator_Dokter: string;
  Nama_Edukator_Dokter: string;

  TTD_Edukator_Rohaniawan: string;
  ID_Edukator_Rohaniawan: string;
  Nama_Edukator_Rohaniawan: string;

  TTD_Edukator_Mencuci_Tangan: string;
  ID_Edukator_Mencuci_Tangan: string;
  Nama_Edukator_Mencuci_Tangan: string;

  TTD_Edukator_Penggunaan_Peralatan: string;
  ID_Edukator_Penggunaan_Peralatan: string;
  Nama_Edukator_Penggunaan_Peralatan: string;

  TTD_Edukator_Hak_Kewajiban: string;
  ID_Edukator_Hak_Kewajiban: string;
  Nama_Edukator_Hak_Kewajiban: string;

  TTD_Edukator_Informasi_Lain: string;
  ID_Edukator_Informasi_Lain: string;
  Nama_Edukator_Informasi_Lain: string;
  Asesmen: {
    Tidak_Ada: number;
    Penglihatan_Terganggu: number;
    Pendengaran_Kurang: number;
    Tidak_Berbahasa_Indonesia: number;
    Keyakinan: number;
    Agama: number;
    Kongnisi_Terbatas: number;
    Hambatan_Emosi: number;
    Pertimbangan_Budaya: number;
    Tingkat_Pendidikan: number;
    Nilai_Nilai: number;
  },
  Materi_Edukasi_Id: string;
  Informasi_Lain_Pasien: Array<string>;
  Materi_Edukasi_Penjelasan: {
    DPJP: {
      Kondisi_Pasien: number;
      Hasil_Pemeriksaan: number;
      Pengobatan: number;
      Manfaat: number;
      Alternatif: number;
      Keberhasilan: number;
      Pemulihan: number;
      Diagnosa: number;
      Hasil_Asuhan: number;
      Hasil_Asuhan_Teks: string;
      Diagnosa_Teks: string;
      Diagnosa_Teks_1: string;
      Diagnosa_Teks_2: string;
      Hasil_Asuhan_Teks_2: string;
    },
    Gizi: {
      Diluar_RS: number;
      Lain_Lain: number;
      Status_Gizi: number;
      Untuk_Dirumah: number;
      Lain_Lain_Teks: string;
      Selama_Perawatan: number;
    },
    Manajemen_Nyeri: {
      Farmakologi: number;
      Non_Farmakologi: number;
    },
    Post_Operasi: {
      Merunduk: number;
      Setengah_Duduk: number;
      Tidak_Ada: number;
    },
    Keperawatan: {
      Mobilisasi: number;
      Perawatan_Luka: number;
      Perawatan_Peralatan_Medis: number;
      Pemberian_Makan: number;
      Membuang_Urine: number;
      Lain_Lain: number;
      Lain_Lain_Teks: string;
    },
    Farmasi: {
      Lain_Lain: number;
      Efek_Samping: number;
      Lain_Lain_Teks: string;
      Penggunaan_Obat: number;
      Mencegah_Interaksi: number;
    },
    Dokter: {
      Kondisi_Pasien: number;
      Hasil_Pemeriksaan: number;
      Teknik_Anestesi: number;
      Manfaat: number;
      Nyeri_Pasca: number;
      Analgesi_Pasca: number;
    },
    Rohaniawan: {
      Bimbingan: number;
      Konseling: number;
    },
    Mencuci_Tangan: {
      Handwash_4060: number;
      Handrub_2030: number;
    },
    Penggunaan_Peralatan: {
      Infus: number;
      Oksigen: number;
      Nebulizer: number;
      Lain_Lain: number;
      Lain_Lain_Teks: string;
    },
    Hak_Kewajiban: {
      Hak_Pasien: number;
      Kewajiban_Pasien: number;
    },
  },
  DPJP: {
    ID_DPJP: string;
    Metode_Pembelajaran: IMetodePembelajaran;
    Evaluasi_Pasien: IEvaluasiPasien;
    Waktu_Edukasi: string;
    Durasi: string;
    Penerima_Edukasi: IPenerimaEdukasi;
  },
  Gizi: {
    Durasi: string;
    Waktu_Edukasi: string;
    Evaluasi_Pasien: IEvaluasiPasien;
    Penerima_Edukasi: IPenerimaEdukasi;
    Metode_Pembelajaran: IMetodePembelajaran;
  },
  Manajemen_Nyeri: {
    Metode_Pembelajaran: IMetodePembelajaran;
    Evaluasi_Pasien: IEvaluasiPasien;
    Waktu_Edukasi: string;
    Durasi: string;
    Penerima_Edukasi: IPenerimaEdukasi;
  },
  Post_Operasi: {
    Durasi: string;
    Waktu_Edukasi: string;
    Evaluasi_Pasien: IEvaluasiPasien;
    Penerima_Edukasi: IPenerimaEdukasi;
    Metode_Pembelajaran: IMetodePembelajaran;
  },
  Keperawatan: {
    Metode_Pembelajaran: IMetodePembelajaran;
    Evaluasi_Pasien: IEvaluasiPasien;
    Waktu_Edukasi: string;
    Durasi: string;
    Penerima_Edukasi: IPenerimaEdukasi;
  },
  Farmasi: {
    Durasi: string;
    Waktu_Edukasi: string;
    Evaluasi_Pasien: IEvaluasiPasien;
    Penerima_Edukasi: IPenerimaEdukasi;
    Metode_Pembelajaran: IMetodePembelajaran;
  },
  Dokter: {
    Durasi: string;
    Waktu_Edukasi: string;
    Evaluasi_Pasien: IEvaluasiPasien;
    Penerima_Edukasi: IPenerimaEdukasi;
    Metode_Pembelajaran: IMetodePembelajaran;
  },
  Rohaniawan: {
    Metode_Pembelajaran: IMetodePembelajaran;
    Evaluasi_Pasien: IEvaluasiPasien;
    Waktu_Edukasi: string;
    Durasi: string;
    Penerima_Edukasi: IPenerimaEdukasi;
  },
  Mencuci_Tangan: {
    Durasi: string;
    Waktu_Edukasi: string;
    Evaluasi_Pasien: IEvaluasiPasien;
    Penerima_Edukasi: IPenerimaEdukasi;
    Metode_Pembelajaran: IMetodePembelajaran;
  },
  Penggunaan_Peralatan: {
    Durasi: string;
    Waktu_Edukasi: string;
    Evaluasi_Pasien: IEvaluasiPasien;
    Penerima_Edukasi: IPenerimaEdukasi;
    Metode_Pembelajaran: IMetodePembelajaran;
  },
  Hak_Kewajiban: {
    Durasi: string;
    Waktu_Edukasi: string;
    Evaluasi_Pasien: IEvaluasiPasien;
    Penerima_Edukasi: IPenerimaEdukasi;
    Metode_Pembelajaran: IMetodePembelajaran;
  },
  Informasi_Lain: {
    Metode_Pembelajaran: IMetodePembelajaran;
    Evaluasi_Pasien: IEvaluasiPasien;
    Waktu_Edukasi: string;
    Durasi: string;
    Penerima_Edukasi: IPenerimaEdukasi;
  }
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;
}

export class IntegratedEducationFormModel {
  TTD_Penerima_Edukasi_DPJP: string;
  TTD_Penerima_Edukasi_Gizi: string;
  TTD_Penerima_Edukasi_Manajemen_Nyeri: string;
  TTD_Penerima_Edukasi_Post_Operasi: string;
  TTD_Penerima_Edukasi_Keperawatan: string;
  TTD_Penerima_Edukasi_Farmasi: string;
  TTD_Penerima_Edukasi_Dokter: string;
  TTD_Penerima_Edukasi_Rohaniawan: string;
  TTD_Penerima_Edukasi_Mencuci_Tangan: string;
  TTD_Penerima_Edukasi_Penggunaan_Peralatan: string;
  TTD_Penerima_Edukasi_Hak_Kewajiban: string;
  TTD_Penerima_Edukasi_Informasi_Lain: string;

  TTD_Edukator_DPJP: string;
  ID_Edukator_DPJP: string;
  Nama_Edukator_DPJP: string;

  TTD_Edukator_Gizi: string;
  ID_Edukator_Gizi: string;
  Nama_Edukator_Gizi: string;

  TTD_Edukator_Manajemen_Nyeri: string;
  ID_Edukator_Manajemen_Nyeri: string;
  Nama_Edukator_Manajemen_Nyeri: string;

  TTD_Edukator_Post_Operasi: string;
  ID_Edukator_Post_Operasi: string;
  Nama_Edukator_Post_Operasi: string;

  TTD_Edukator_Keperawatan: string;
  ID_Edukator_Keperawatan: string;
  Nama_Edukator_Keperawatan: string;

  TTD_Edukator_Farmasi: string;
  ID_Edukator_Farmasi: string;
  Nama_Edukator_Farmasi: string;

  TTD_Edukator_Dokter: string;
  ID_Edukator_Dokter: string;
  Nama_Edukator_Dokter: string;

  TTD_Edukator_Rohaniawan: string;
  ID_Edukator_Rohaniawan: string;
  Nama_Edukator_Rohaniawan: string;

  TTD_Edukator_Mencuci_Tangan: string;
  ID_Edukator_Mencuci_Tangan: string;
  Nama_Edukator_Mencuci_Tangan: string;

  TTD_Edukator_Penggunaan_Peralatan: string;
  ID_Edukator_Penggunaan_Peralatan: string;
  Nama_Edukator_Penggunaan_Peralatan: string;

  TTD_Edukator_Hak_Kewajiban: string;
  ID_Edukator_Hak_Kewajiban: string;
  Nama_Edukator_Hak_Kewajiban: string;

  TTD_Edukator_Informasi_Lain: string;
  ID_Edukator_Informasi_Lain: string;
  Nama_Edukator_Informasi_Lain: string;
  Asesmen: {
    Tidak_Ada: number;
    Penglihatan_Terganggu: number;
    Pendengaran_Kurang: number;
    Tidak_Berbahasa_Indonesia: number;
    Keyakinan: number;
    Agama: number;
    Kongnisi_Terbatas: number;
    Hambatan_Emosi: number;
    Pertimbangan_Budaya: number;
    Tingkat_Pendidikan: number;
    Nilai_Nilai: number;
  };
  Materi_Edukasi_Id: string;
  Informasi_Lain_Pasien: Array<string>;
  Materi_Edukasi_Penjelasan: {
    DPJP: {
      Kondisi_Pasien: number;
      Hasil_Pemeriksaan: number;
      Pengobatan: number;
      Manfaat: number;
      Alternatif: number;
      Keberhasilan: number;
      Pemulihan: number;
      Diagnosa: number;
      Hasil_Asuhan: number;
      Hasil_Asuhan_Teks: string;
      Diagnosa_Teks: string;
      Diagnosa_Teks_1: string;
      Diagnosa_Teks_2: string;
      Hasil_Asuhan_Teks_2: string;
    },
    Gizi: {
      Diluar_RS: number;
      Lain_Lain: number;
      Status_Gizi: number;
      Untuk_Dirumah: number;
      Lain_Lain_Teks: string;
      Selama_Perawatan: number;
    },
    Manajemen_Nyeri: {
      Farmakologi: number;
      Non_Farmakologi: number;
    },
    Post_Operasi: {
      Merunduk: number;
      Setengah_Duduk: number;
      Tidak_Ada: number;
    },
    Keperawatan: {
      Mobilisasi: number;
      Perawatan_Luka: number;
      Perawatan_Peralatan_Medis: number;
      Pemberian_Makan: number;
      Membuang_Urine: number;
      Lain_Lain: number;
      Lain_Lain_Teks: string;
    },
    Farmasi: {
      Lain_Lain: number;
      Efek_Samping: number;
      Lain_Lain_Teks: string;
      Penggunaan_Obat: number;
      Mencegah_Interaksi: number;
    },
    Dokter: {
      Kondisi_Pasien: number;
      Hasil_Pemeriksaan: number;
      Teknik_Anestesi: number;
      Manfaat: number;
      Nyeri_Pasca: number;
      Analgesi_Pasca: number;
    },
    Rohaniawan: {
      Bimbingan: number;
      Konseling: number;
    },
    Mencuci_Tangan: {
      Handwash_4060: number;
      Handrub_2030: number;
    },
    Penggunaan_Peralatan: {
      Infus: number;
      Oksigen: number;
      Nebulizer: number;
      Lain_Lain: number;
      Lain_Lain_Teks: string;
    },
    Hak_Kewajiban: {
      Hak_Pasien: number;
      Kewajiban_Pasien: number;
    },
  };
  DPJP: {
    ID_DPJP: string;
    Metode_Pembelajaran: IMetodePembelajaran;
    Evaluasi_Pasien: IEvaluasiPasien;
    Waktu_Edukasi: string;
    Durasi: string;
    Penerima_Edukasi: IPenerimaEdukasi;
  };
  Gizi: {
    Durasi: string;
    Waktu_Edukasi: string;
    Evaluasi_Pasien: IEvaluasiPasien;
    Penerima_Edukasi: IPenerimaEdukasi;
    Metode_Pembelajaran: IMetodePembelajaran;
  };
  Manajemen_Nyeri: {
    Metode_Pembelajaran: IMetodePembelajaran;
    Evaluasi_Pasien: IEvaluasiPasien;
    Waktu_Edukasi: string;
    Durasi: string;
    Penerima_Edukasi: IPenerimaEdukasi;
  };
  Post_Operasi: {
    Durasi: string;
    Waktu_Edukasi: string;
    Evaluasi_Pasien: IEvaluasiPasien;
    Penerima_Edukasi: IPenerimaEdukasi;
    Metode_Pembelajaran: IMetodePembelajaran;
  };
  Keperawatan: {
    Metode_Pembelajaran: IMetodePembelajaran;
    Evaluasi_Pasien: IEvaluasiPasien;
    Waktu_Edukasi: string;
    Durasi: string;
    Penerima_Edukasi: IPenerimaEdukasi;
  };
  Farmasi: {
    Durasi: string;
    Waktu_Edukasi: string;
    Evaluasi_Pasien: IEvaluasiPasien;
    Penerima_Edukasi: IPenerimaEdukasi;
    Metode_Pembelajaran: IMetodePembelajaran;
  };
  Dokter: {
    Durasi: string;
    Waktu_Edukasi: string;
    Evaluasi_Pasien: IEvaluasiPasien;
    Penerima_Edukasi: IPenerimaEdukasi;
    Metode_Pembelajaran: IMetodePembelajaran;
  };
  Rohaniawan: {
    Metode_Pembelajaran: IMetodePembelajaran;
    Evaluasi_Pasien: IEvaluasiPasien;
    Waktu_Edukasi: string;
    Durasi: string;
    Penerima_Edukasi: IPenerimaEdukasi;
  };
  Mencuci_Tangan: {
    Durasi: string;
    Waktu_Edukasi: string;
    Evaluasi_Pasien: IEvaluasiPasien;
    Penerima_Edukasi: IPenerimaEdukasi;
    Metode_Pembelajaran: IMetodePembelajaran;
  };
  Penggunaan_Peralatan: {
    Durasi: string;
    Waktu_Edukasi: string;
    Evaluasi_Pasien: IEvaluasiPasien;
    Penerima_Edukasi: IPenerimaEdukasi;
    Metode_Pembelajaran: IMetodePembelajaran;
  };
  Hak_Kewajiban: {
    Durasi: string;
    Waktu_Edukasi: string;
    Evaluasi_Pasien: IEvaluasiPasien;
    Penerima_Edukasi: IPenerimaEdukasi;
    Metode_Pembelajaran: IMetodePembelajaran;
  };
  Informasi_Lain: {
    Metode_Pembelajaran: IMetodePembelajaran;
    Evaluasi_Pasien: IEvaluasiPasien;
    Waktu_Edukasi: string;
    Durasi: string;
    Penerima_Edukasi: IPenerimaEdukasi;
  }
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  constructor(req: IIntegratedEducationFormModel) {
    this.TTD_Penerima_Edukasi_DPJP = req.TTD_Penerima_Edukasi_DPJP;
    this.TTD_Penerima_Edukasi_Manajemen_Nyeri = req.TTD_Penerima_Edukasi_Manajemen_Nyeri;
    this.TTD_Penerima_Edukasi_Rohaniawan = req.TTD_Penerima_Edukasi_Rohaniawan;
    this.TTD_Penerima_Edukasi_Keperawatan = req.TTD_Penerima_Edukasi_Keperawatan;
    this.TTD_Penerima_Edukasi_Informasi_Lain = req.TTD_Penerima_Edukasi_Informasi_Lain;
    this.TTD_Edukator_DPJP = req.TTD_Edukator_DPJP;
    this.ID_Edukator_DPJP = req.ID_Edukator_DPJP;
    this.Nama_Edukator_DPJP = req.Nama_Edukator_DPJP;
    this.TTD_Edukator_Manajemen_Nyeri = req.TTD_Edukator_Manajemen_Nyeri;
    this.ID_Edukator_Manajemen_Nyeri = req.ID_Edukator_Manajemen_Nyeri;
    this.Nama_Edukator_Manajemen_Nyeri = req.Nama_Edukator_Manajemen_Nyeri;
    this.TTD_Edukator_Rohaniawan = req.TTD_Edukator_Rohaniawan;
    this.ID_Edukator_Rohaniawan = req.ID_Edukator_Rohaniawan;
    this.Nama_Edukator_Rohaniawan = req.Nama_Edukator_Rohaniawan;
    this.TTD_Edukator_Keperawatan = req.TTD_Edukator_Keperawatan;
    this.ID_Edukator_Keperawatan = req.ID_Edukator_Keperawatan;
    this.Nama_Edukator_Keperawatan = req.Nama_Edukator_Keperawatan;
    this.TTD_Edukator_Informasi_Lain = req.TTD_Edukator_Informasi_Lain;
    this.ID_Edukator_Informasi_Lain = req.ID_Edukator_Informasi_Lain;
    this.Nama_Edukator_Informasi_Lain = req.Nama_Edukator_Informasi_Lain;
    this.Asesmen = req.Asesmen;
    this.Materi_Edukasi_Id = req.Materi_Edukasi_Id;
    this.Informasi_Lain_Pasien = req.Informasi_Lain_Pasien;
    this.Materi_Edukasi_Penjelasan = req.Materi_Edukasi_Penjelasan;
    this.DPJP = req.DPJP;
    this.Manajemen_Nyeri = req.Manajemen_Nyeri;
    this.Rohaniawan = req.Rohaniawan;
    this.Keperawatan = req.Keperawatan;
    this.Informasi_Lain = req.Informasi_Lain;
    this.ID_Petugas = req.ID_Petugas;
    this.Nama_Petugas = req.Nama_Petugas;
    this.Updated_At = req.Updated_At;
    this.Updated_By = req.Updated_By;
    this.TTD_Penerima_Edukasi_Gizi = req.TTD_Penerima_Edukasi_Gizi;
    this.TTD_Penerima_Edukasi_Post_Operasi = req.TTD_Penerima_Edukasi_Post_Operasi;
    this.TTD_Penerima_Edukasi_Farmasi = req.TTD_Penerima_Edukasi_Farmasi;
    this.TTD_Penerima_Edukasi_Dokter = req.TTD_Penerima_Edukasi_Dokter;
    this.TTD_Penerima_Edukasi_Mencuci_Tangan = req.TTD_Penerima_Edukasi_Mencuci_Tangan;
    this.TTD_Penerima_Edukasi_Penggunaan_Peralatan = req.TTD_Penerima_Edukasi_Penggunaan_Peralatan;
    this.TTD_Penerima_Edukasi_Hak_Kewajiban = req.TTD_Penerima_Edukasi_Hak_Kewajiban;
    this.TTD_Edukator_Gizi = req.TTD_Edukator_Gizi;
    this.ID_Edukator_Gizi = req.ID_Edukator_Gizi;
    this.Nama_Edukator_Gizi = req.Nama_Edukator_Gizi;
    this.TTD_Edukator_Post_Operasi = req.TTD_Edukator_Post_Operasi;
    this.ID_Edukator_Post_Operasi = req.ID_Edukator_Post_Operasi;
    this.Nama_Edukator_Post_Operasi = req.Nama_Edukator_Post_Operasi;
    this.TTD_Edukator_Farmasi = req.TTD_Edukator_Farmasi;
    this.ID_Edukator_Farmasi = req.ID_Edukator_Farmasi;
    this.Nama_Edukator_Farmasi = req.Nama_Edukator_Farmasi;
    this.TTD_Edukator_Dokter = req.TTD_Edukator_Dokter;
    this.ID_Edukator_Dokter = req.ID_Edukator_Dokter;
    this.Nama_Edukator_Dokter = req.Nama_Edukator_Dokter;
    this.TTD_Edukator_Mencuci_Tangan = req.TTD_Edukator_Mencuci_Tangan;
    this.ID_Edukator_Mencuci_Tangan = req.ID_Edukator_Mencuci_Tangan;
    this.Nama_Edukator_Mencuci_Tangan = req.Nama_Edukator_Mencuci_Tangan;
    this.TTD_Edukator_Penggunaan_Peralatan = req.TTD_Edukator_Penggunaan_Peralatan;
    this.ID_Edukator_Penggunaan_Peralatan = req.ID_Edukator_Penggunaan_Peralatan;
    this.Nama_Edukator_Penggunaan_Peralatan = req.Nama_Edukator_Penggunaan_Peralatan;
    this.TTD_Edukator_Hak_Kewajiban = req.TTD_Edukator_Hak_Kewajiban;
    this.ID_Edukator_Hak_Kewajiban = req.ID_Edukator_Hak_Kewajiban;
    this.Nama_Edukator_Hak_Kewajiban = req.Nama_Edukator_Hak_Kewajiban;
    this.Gizi = req.Gizi;
    this.Post_Operasi = req.Post_Operasi;
    this.Farmasi = req.Farmasi;
    this.Dokter = req.Dokter;
    this.Mencuci_Tangan = req.Mencuci_Tangan;
    this.Penggunaan_Peralatan = req.Penggunaan_Peralatan;
    this.Hak_Kewajiban = req.Hak_Kewajiban
  }
}

export interface IIntegratedEducationModel extends IDataModel {
  form: IIntegratedEducationFormModel;
  dokter: Array<IDoctorModel>;
}

export class IntegratedEducationModel extends DataModel {
  form: IIntegratedEducationFormModel;
  dokter: Array<IDoctorModel>;

  constructor(req: IIntegratedEducationModel) {
    super(req);
    this.form = req.form;
    this.dokter = (Array.isArray(req.dokter)) ? req.dokter.map((a) => new DoctorModel(a)) : [];
  }
}
