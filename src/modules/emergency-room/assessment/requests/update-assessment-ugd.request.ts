import * as yup from 'yup';

import { AppRequest, IAppRequest } from '@src/shared/request';
import { IHowToUse } from '@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model';

export interface IArrayPrescription {
  'nama-obat': Array<string>;
  jumlah: Array<string>;
  catatan: Array<string>;
  'aturan-pakai': Array<string>;
}

export class ArrayPrescription {
  'nama-obat': Array<string>;
  jumlah: Array<string>;
  catatan: Array<string>;
  'aturan-pakai': Array<string>;

  constructor(request: IArrayPrescription) {
    this['nama-obat'] = request['nama-obat'];
    this.jumlah = request.jumlah;
    this.catatan = request.catatan;
    this['aturan-pakai'] = request['aturan-pakai'];
  }

  static createFromJson(json: IArrayPrescription) {
    return new ArrayPrescription(json);
  }
  static createFromForm(formValue: any, htu: Array<IHowToUse>): IArrayPrescription | undefined {
    if (formValue && formValue && Array.isArray(formValue)) {
      let meds_name: Array<string> = [];
      let total: Array<string> = [];
      let how_to_use: Array<string> = [];
      let notes: Array<string> = [];
      for (let i = 0; i < formValue.length; i++) {
        meds_name = [...meds_name, formValue[i]['nama-obat'].value];
        total = [...total, formValue[i].jumlah];
        how_to_use = [...how_to_use, formValue[i]['aturan-pakai'].id];
        notes = [...notes, formValue[i].catatan];
      }
      return ArrayPrescription.createFromJson({ 'nama-obat': meds_name, jumlah:total, 'aturan-pakai': how_to_use, catatan:notes});
    }
    return undefined;
  }
}


export interface IArrayPrescriptionUmum {
  'nama-obat-umum': Array<string>;
  'jumlah-umum': Array<string>;
  'catatan-umum': Array<string>;
  'aturan-pakai-umum': Array<string>;
}

export class ArrayPrescriptionUmum {
  'nama-obat-umum': Array<string>;
  'jumlah-umum': Array<string>;
  'catatan-umum': Array<string>;
  'aturan-pakai-umum': Array<string>;

  constructor(request: IArrayPrescriptionUmum) {
    this['nama-obat-umum'] = request['nama-obat-umum'];
    this['jumlah-umum'] = request['jumlah-umum'];
    this['catatan-umum'] = request['catatan-umum'];
    this['aturan-pakai-umum'] = request['aturan-pakai-umum'];
  }

  static createFromJson(json: IArrayPrescriptionUmum) {
    return new ArrayPrescriptionUmum(json);
  }
  static createFromForm(formValue: any, htu: Array<IHowToUse>): IArrayPrescriptionUmum | undefined {
    if (formValue && formValue && Array.isArray(formValue)) {
      let meds_name: Array<string> = [];
      let total: Array<string> = [];
      let how_to_use: Array<string> = [];
      let notes: Array<string> = [];
      for (let i = 0; i < formValue.length; i++) {
        meds_name = [...meds_name, formValue[i]['nama-obat-umum'].value];
        total = [...total, formValue[i]['jumlah-umum']];
        how_to_use = [...how_to_use, formValue[i]['aturan-pakai-umum'].id];
        notes = [...notes, formValue[i]['catatan-umum']];
      }
      return ArrayPrescriptionUmum.createFromJson({ 'nama-obat-umum': meds_name, 'jumlah-umum':total, 'aturan-pakai-umum': how_to_use, 'catatan-umum':notes});
    }
    return undefined;
  }
}

export interface IUpdateAssessmentUgdRequest extends IAppRequest {
    resep?: string;
    "resep-umum"?: string;
    "triase-radio": string;
    "kesadaran-radio": string;
    "pernafasan-radio": string;
    "sirkulasi-radio": string;
    "pertolongan-pertama": string;
    "tindakan-resusitasi": string;
    "jalanNafas-radio": string;
    "bantuanNafas-radio": string;
    "sirkulasiResusitasi-radio": string;
    "gcs-e": string;
    "gcs-e-text": string;
    "gcs-m": string;
    "gcs-m-text": string;
    "gcs-v": string;
    "gcs-v-text": string;
    "gcs-score": string;
    "vital-respiratory-rate": string;
    "vital-denyut-nadi": string;
    "vital-tekanan-darah": string;
    "vital-kesadaran": string;
    "vital-suhu": string;
    "skala-nyeri": string;
    "alergi-makanan": string;
    "alergi-obat": string;
    "alergi-lainnya": string;
    "kedatangan-pasien": string;
    "asal-informasi-radio": string;
    "asal-informasi-hubungan": string;
    "penyakit-terdahulu": string;
    "pengobatan-terdahulu": string;
    "pengkajian-fungsi-radio": string;
    "penilaian-risiko-jatuh-radio": string;
    "risiko-jatuh-ibu-hamil": string;
    "risiko-jatuh-lanjut-usia": string;
    "risiko-jatuh-alat-bantu": string;
    "status-kehamilan-radio": string;
    "status-kehamilan-gravida": string;
    "status-kehamilan-para": string;
    "status-kehamilan-abortus": string;
    "status-kehamilan-hpht": string;
    "nutrisi-tinggi": string;
    "nutrisi-berat": string;
    "penurunan-berat-badan-radio": string;
    "penurunan-berat-badan-nilai-radio": string;
    "penurunan-nafsu-makan-radio": string;
    "nutrisi-diagnosa-khusus": string;
    "nutrisi-diagnosa-khusus-keterangan": string;
    "nutrisi-total-skor": string;
    "nutrisi-lebih-lanjut": string;
    "psikologis-cemas": string;
    "psikologis-takut": string;
    "psikologis-marah": string;
    "psikologis-sedih": string;
    "psikologis-kecenderungan-bunuh-diri": string;
    "psikologis-lain-lain": string;
    "psikologis-lain-lain-keterangan": string;
    "mental-sadar": string;
    "mental-perilaku": string;
    "mental-perilaku-keterangan": string;
    "mental-kekerasan": string;
    "mental-kekerasan-keterangan": string;
    "kerabat-nama": string;
    "kerabat-hubungan": string;
    "kerabat-telepon": string;
    "spiritual-agama": string;
    "keperawatan-diagnosa-0": string;
    "keperawatan-rencana-0": string;
    "keperawatan-diagnosa-1": string;
    "keperawatan-rencana-1": string;
    "keperawatan-diagnosa-2": string;
    "keperawatan-rencana-2": string;
    "keperawatan-diagnosa-3": string;
    "keperawatan-rencana-3": string;
    "keperawatan-diagnosa-4": string;
    "keperawatan-rencana-4": string;
    "keperawatan-diagnosa-5": string;
    "keperawatan-rencana-5": string;
    "keperawatan-diagnosa-6": string;
    "keperawatan-rencana-6": string;
    "keperawatan-diagnosa-7": string;
    "keperawatan-rencana-7": string;
    "keperawatan-diagnosa-lainnya": string;
    "keperawatan-rencana-lainnya": string;
    "pengkajian-subjektif": string;
    "pengkajian-kepala": string;
    "pengkajian-mata": string;
    "pengkajian-od-va": string;
    "pengkajian-os-va": string;
    "pengkajian-od-tonometri": string;
    "pengkajian-os-tonometri": string;
    "pengkajian-telinga": string;
    "pengkajian-hidung": string;
    "pengkajian-gigi": string;
    "pengkajian-tenggorokan": string;
    "pengkajian-leher": string;
    "pengkajian-dada": string;
    "pengkajian-jantung": string;
    "pengkajian-paru": string;
    "pengkajian-abdomen": string;
    "pengkajian-genitalia": string;
    "pengkajian-kandungan": string;
    "pengkajian-eks-atas": string;
    "pengkajian-eks-bawah": string;
    "pengkajian-pemeriksaan-penunjang": string;
    "pengkajian-assesmen": string;
    "pengkajian-terapi-penatalaksaan": string;
    "pengkajian-anjuran": string;
    "ttd-dokter-pengkaji": string;
    "pengkajian-dokter": string;
    "gambar-mata-od": string;
    "gambar-mata-os": string;
    "dokter-mata-posisi-od": string;
    "dokter-mata-posisi-os": string;
    "dokter-mata-pergerakan-od": string;
    "dokter-mata-pergerakan-os": string;
    "dokter-mata-palpebra-superior-od": string;
    "dokter-mata-palpebra-superior-os": string;
    "dokter-mata-conj-tarsal-superior-od": string;
    "dokter-mata-conj-tarsal-superior-os": string;
    "dokter-mata-conj-tarsal-inferior-od": string;
    "dokter-mata-conj-tarsal-inferior-os": string;
    "dokter-mata-conj-bulbi-od": string;
    "dokter-mata-conj-bulbi-os": string;
    "dokter-mata-cornea-od": string;
    "dokter-mata-cornea-os": string;
    "dokter-mata-coa-od": string;
    "dokter-mata-coa-os": string;
    "dokter-mata-pupil-od": string;
    "dokter-mata-pupil-os": string;
    "dokter-mata-iris-od": string;
    "dokter-mata-iris-os": string;
    "dokter-mata-lensa-od": string;
    "dokter-mata-lensa-os": string;
    "dokter-mata-vitreous-od": string;
    "dokter-mata-vitreous-os": string;
    "dokter-mata-funduscopy-od": string;
    "dokter-mata-funduscopy-os": string;
    "dokter-mata-diagnosa": string;
    "dokter-mata-terapi": string;
    "dokter-mata-rencana-pengobatan": string;
    'nama-obat': Array<string>
    'jumlah': Array<string>
    'catatan': Array<string>
    'aturan-pakai': Array<string>
    'nama-obat-umum': Array<string>
    'jumlah-umum': Array<string>
    'catatan-umum': Array<string>
    'aturan-pakai-umum': Array<string>
    "dokter-mata-anjuran": string;
    "ttd-dokter-mata": string;
    "dokter-mata-dokter": string;
    ttd_perawat: string;
    id_perawat: string;
}

export class UpdateAssessmentUgdRequest extends AppRequest {
    resep?: string;
    "resep-umum"?: string;
    "triase-radio": string;
    "kesadaran-radio": string;
    "pernafasan-radio": string;
    "sirkulasi-radio": string;
    "pertolongan-pertama": string;
    "tindakan-resusitasi": string;
    "jalanNafas-radio": string;
    "bantuanNafas-radio": string;
    "sirkulasiResusitasi-radio": string;
    "gcs-e": string;
    "gcs-e-text": string;
    "gcs-m": string;
    "gcs-m-text": string;
    "gcs-v": string;
    "gcs-v-text": string;
    "gcs-score": string;
    "vital-respiratory-rate": string;
    "vital-denyut-nadi": string;
    "vital-tekanan-darah": string;
    "vital-kesadaran": string;
    "vital-suhu": string;
    "skala-nyeri": string;
    "alergi-makanan": string;
    "alergi-obat": string;
    "alergi-lainnya": string;
    "kedatangan-pasien": string;
    "asal-informasi-radio": string;
    "asal-informasi-hubungan": string;
    "penyakit-terdahulu": string;
    "pengobatan-terdahulu": string;
    "pengkajian-fungsi-radio": string;
    "penilaian-risiko-jatuh-radio": string;
    "risiko-jatuh-ibu-hamil": string;
    "risiko-jatuh-lanjut-usia": string;
    "risiko-jatuh-alat-bantu": string;
    "status-kehamilan-radio": string;
    "status-kehamilan-gravida": string;
    "status-kehamilan-para": string;
    "status-kehamilan-abortus": string;
    "status-kehamilan-hpht": string;
    "nutrisi-tinggi": string;
    "nutrisi-berat": string;
    "penurunan-berat-badan-radio": string;
    "penurunan-berat-badan-nilai-radio": string;
    "penurunan-nafsu-makan-radio": string;
    "nutrisi-diagnosa-khusus": string;
    "nutrisi-diagnosa-khusus-keterangan": string;
    "nutrisi-total-skor": string;
    "nutrisi-lebih-lanjut": string;
    "psikologis-cemas": string;
    "psikologis-takut": string;
    "psikologis-marah": string;
    "psikologis-sedih": string;
    "psikologis-kecenderungan-bunuh-diri": string;
    "psikologis-lain-lain": string;
    "psikologis-lain-lain-keterangan": string;
    "mental-sadar": string;
    "mental-perilaku": string;
    "mental-perilaku-keterangan": string;
    "mental-kekerasan": string;
    "mental-kekerasan-keterangan": string;
    "kerabat-nama": string;
    "kerabat-hubungan": string;
    "kerabat-telepon": string;
    "spiritual-agama": string;
    "keperawatan-diagnosa-0": string;
    "keperawatan-rencana-0": string;
    "keperawatan-diagnosa-1": string;
    "keperawatan-rencana-1": string;
    "keperawatan-diagnosa-2": string;
    "keperawatan-rencana-2": string;
    "keperawatan-diagnosa-3": string;
    "keperawatan-rencana-3": string;
    "keperawatan-diagnosa-4": string;
    "keperawatan-rencana-4": string;
    "keperawatan-diagnosa-5": string;
    "keperawatan-rencana-5": string;
    "keperawatan-diagnosa-6": string;
    "keperawatan-rencana-6": string;
    "keperawatan-diagnosa-7": string;
    "keperawatan-rencana-7": string;
    "keperawatan-diagnosa-lainnya": string;
    "keperawatan-rencana-lainnya": string;
    "pengkajian-subjektif": string;
    "pengkajian-kepala": string;
    "pengkajian-mata": string;
    "pengkajian-od-va": string;
    "pengkajian-os-va": string;
    "pengkajian-od-tonometri": string;
    "pengkajian-os-tonometri": string;
    "pengkajian-telinga": string;
    "pengkajian-hidung": string;
    "pengkajian-gigi": string;
    "pengkajian-tenggorokan": string;
    "pengkajian-leher": string;
    "pengkajian-dada": string;
    "pengkajian-jantung": string;
    "pengkajian-paru": string;
    "pengkajian-abdomen": string;
    "pengkajian-genitalia": string;
    "pengkajian-kandungan": string;
    "pengkajian-eks-atas": string;
    "pengkajian-eks-bawah": string;
    "pengkajian-pemeriksaan-penunjang": string;
    "pengkajian-assesmen": string;
    "pengkajian-terapi-penatalaksaan": string;
    "pengkajian-anjuran": string;
    "ttd-dokter-pengkaji": string;
    "pengkajian-dokter": string;
    "gambar-mata-od": string;
    "gambar-mata-os": string;
    "dokter-mata-posisi-od": string;
    "dokter-mata-posisi-os": string;
    "dokter-mata-pergerakan-od": string;
    "dokter-mata-pergerakan-os": string;
    "dokter-mata-palpebra-superior-od": string;
    "dokter-mata-palpebra-superior-os": string;
    "dokter-mata-conj-tarsal-superior-od": string;
    "dokter-mata-conj-tarsal-superior-os": string;
    "dokter-mata-conj-tarsal-inferior-od": string;
    "dokter-mata-conj-tarsal-inferior-os": string;
    "dokter-mata-conj-bulbi-od": string;
    "dokter-mata-conj-bulbi-os": string;
    "dokter-mata-cornea-od": string;
    "dokter-mata-cornea-os": string;
    "dokter-mata-coa-od": string;
    "dokter-mata-coa-os": string;
    "dokter-mata-pupil-od": string;
    "dokter-mata-pupil-os": string;
    "dokter-mata-iris-od": string;
    "dokter-mata-iris-os": string;
    "dokter-mata-lensa-od": string;
    "dokter-mata-lensa-os": string;
    "dokter-mata-vitreous-od": string;
    "dokter-mata-vitreous-os": string;
    "dokter-mata-funduscopy-od": string;
    "dokter-mata-funduscopy-os": string;
    "dokter-mata-diagnosa": string;
    "dokter-mata-terapi": string;
    "dokter-mata-rencana-pengobatan": string;
    'nama-obat': Array<string>
    'jumlah': Array<string>
    'catatan': Array<string>
    'aturan-pakai': Array<string>
    'nama-obat-umum': Array<string>
    'jumlah-umum': Array<string>
    'catatan-umum': Array<string>
    'aturan-pakai-umum': Array<string>
    "dokter-mata-anjuran": string;
    "ttd-dokter-mata": string;
    "dokter-mata-dokter": string;
    ttd_perawat: string;
    id_perawat: string;

    constructor(request: IUpdateAssessmentUgdRequest) {
      super(request);
      this.resep = request.resep;
      this['resep-umum'] = request['resep-umum'];
      this['triase-radio'] = request['triase-radio'];
      this['kesadaran-radio'] = request['kesadaran-radio'];
      this['pernafasan-radio'] = request['pernafasan-radio'];
      this['sirkulasi-radio'] = request['sirkulasi-radio'];
      this['pertolongan-pertama'] = request['pertolongan-pertama'];
      this['tindakan-resusitasi'] = request['tindakan-resusitasi'];
      this['jalanNafas-radio'] = request['jalanNafas-radio'];
      this['bantuanNafas-radio'] = request['bantuanNafas-radio'];
      this['sirkulasiResusitasi-radio'] = request['sirkulasiResusitasi-radio'];
      this['gcs-e'] = request['gcs-e'];
      this['gcs-e-text'] = request['gcs-e-text'];
      this['gcs-m'] = request['gcs-m'];
      this['gcs-m-text'] = request['gcs-m-text'];
      this['gcs-v'] = request['gcs-v'];
      this['gcs-v-text'] = request['gcs-v-text'];
      this['gcs-score'] = request['gcs-score'];
      this['vital-respiratory-rate'] = request['vital-respiratory-rate'];
      this['vital-denyut-nadi'] = request['vital-denyut-nadi'];
      this['vital-tekanan-darah'] = request['vital-tekanan-darah'];
      this['vital-kesadaran'] = request['vital-kesadaran'];
      this['vital-suhu'] = request['vital-suhu'];
      this['skala-nyeri'] = request['skala-nyeri'];
      this['alergi-makanan'] = request['alergi-makanan'];
      this['alergi-obat'] = request['alergi-obat'];
      this['alergi-lainnya'] = request['alergi-lainnya'];
      this['kedatangan-pasien'] = request['kedatangan-pasien'];
      this['asal-informasi-radio'] = request['asal-informasi-radio'];
      this['asal-informasi-hubungan'] = request['asal-informasi-hubungan'];
      this['penyakit-terdahulu'] = request['penyakit-terdahulu'];
      this['pengobatan-terdahulu'] = request['pengobatan-terdahulu'];
      this['pengkajian-fungsi-radio'] = request['pengkajian-fungsi-radio'];
      this['penilaian-risiko-jatuh-radio'] = request['penilaian-risiko-jatuh-radio'];
      this['risiko-jatuh-ibu-hamil'] = request['risiko-jatuh-ibu-hamil'];
      this['risiko-jatuh-lanjut-usia'] = request['risiko-jatuh-lanjut-usia'];
      this['risiko-jatuh-alat-bantu']  = request['risiko-jatuh-alat-bantu'];
      this['status-kehamilan-radio'] = request['status-kehamilan-radio'];
      this['status-kehamilan-gravida'] =  request['status-kehamilan-gravida'];
      this['status-kehamilan-para'] = request['status-kehamilan-para'];
      this['status-kehamilan-abortus'] = request['status-kehamilan-abortus'];
      this['status-kehamilan-hpht'] = request['status-kehamilan-hpht'];
      this['nutrisi-tinggi'] = request['nutrisi-tinggi'];
      this['nutrisi-berat'] = request['nutrisi-berat'];
      this['penurunan-berat-badan-radio'] =  request['penurunan-berat-badan-radio'];
      this['penurunan-berat-badan-nilai-radio'] = request['penurunan-berat-badan-nilai-radio'];
      this['penurunan-nafsu-makan-radio'] = request['penurunan-nafsu-makan-radio'];
      this['nutrisi-diagnosa-khusus'] = request['nutrisi-diagnosa-khusus'];
      this['nutrisi-diagnosa-khusus-keterangan'] = request['nutrisi-diagnosa-khusus-keterangan'];
      this['nutrisi-total-skor'] = request['nutrisi-total-skor'];
      this['nutrisi-lebih-lanjut'] = request['nutrisi-lebih-lanjut'];
      this['psikologis-cemas'] = request['psikologis-cemas'];
      this['psikologis-takut'] = request['psikologis-takut'];
      this['psikologis-marah'] = request['psikologis-marah'];
      this['psikologis-sedih'] = request['psikologis-sedih'];
      this['psikologis-kecenderungan-bunuh-diri'] = request['psikologis-kecenderungan-bunuh-diri'];
      this['psikologis-lain-lain'] = request['psikologis-lain-lain'];
      this['psikologis-lain-lain-keterangan'] = request['psikologis-lain-lain-keterangan'];
      this['mental-sadar'] = request['mental-sadar'];
      this['mental-perilaku'] = request['mental-perilaku'];
      this['mental-perilaku-keterangan'] = request['mental-perilaku-keterangan'];
      this['mental-kekerasan'] = request['mental-kekerasan'];
      this['mental-kekerasan-keterangan'] = request['mental-kekerasan-keterangan'];
      this['kerabat-nama'] = request['kerabat-nama'];
      this['kerabat-hubungan'] = request['kerabat-hubungan'];
      this['kerabat-telepon'] = request['kerabat-telepon'];
      this['spiritual-agama'] = request['spiritual-agama'];
      this['keperawatan-diagnosa-0'] = request['keperawatan-diagnosa-0'];
      this['keperawatan-rencana-0'] = request['keperawatan-rencana-0'];
      this['keperawatan-diagnosa-1'] = request['keperawatan-rencana-1'];
      this['keperawatan-rencana-1'] = request['keperawatan-rencana-1'];
      this['keperawatan-diagnosa-2'] = request['keperawatan-diagnosa-2'];
      this['keperawatan-rencana-2'] = request['keperawatan-rencana-2'];
      this['keperawatan-diagnosa-3'] = request['keperawatan-diagnosa-3'];
      this['keperawatan-rencana-3'] = request['keperawatan-rencana-3'];
      this['keperawatan-diagnosa-4'] = request['keperawatan-diagnosa-4'];
      this['keperawatan-rencana-4'] = request['keperawatan-rencana-4'];
      this['keperawatan-diagnosa-5'] = request['keperawatan-rencana-5'];
      this['keperawatan-rencana-5'] = request['keperawatan-rencana-5'];
      this['keperawatan-diagnosa-6'] = request['keperawatan-diagnosa-6'];
      this['keperawatan-rencana-6'] = request['keperawatan-rencana-6'];
      this['keperawatan-diagnosa-7'] = request['keperawatan-diagnosa-7'];
      this['keperawatan-rencana-7'] = request['keperawatan-rencana-7'];
      this['keperawatan-diagnosa-lainnya'] = request['keperawatan-diagnosa-lainnya'];
      this['keperawatan-rencana-lainnya'] =  request['keperawatan-rencana-lainnya'];
      this['pengkajian-subjektif'] = request['pengkajian-subjektif'];
      this['pengkajian-kepala'] = request['pengkajian-kepala'];
      this['pengkajian-mata'] =  request['pengkajian-mata'];
      this['pengkajian-od-va'] = request['pengkajian-od-va'];
      this['pengkajian-os-va'] = request['pengkajian-os-va'];
      this['pengkajian-od-tonometri'] = request['pengkajian-od-tonometri'];
      this['pengkajian-os-tonometri'] = request['pengkajian-os-tonometri'];
      this['pengkajian-telinga'] = request['pengkajian-telinga'];
      this['pengkajian-hidung'] = request['pengkajian-hidung'];
      this['pengkajian-gigi'] = request['pengkajian-gigi'];
      this['pengkajian-tenggorokan'] = request['pengkajian-tenggorokan'];
      this['pengkajian-leher'] = request['pengkajian-leher'];
      this['pengkajian-dada'] = request['pengkajian-dada'];
      this['pengkajian-jantung'] = request['pengkajian-jantung'];
      this['pengkajian-paru'] = request['pengkajian-paru'];
      this['pengkajian-abdomen'] = request['pengkajian-abdomen'];
      this['pengkajian-genitalia'] = request['pengkajian-genitalia'];
      this['pengkajian-kandungan'] = request['pengkajian-kandungan'];
      this['pengkajian-eks-atas'] = request['pengkajian-eks-atas'];
      this['pengkajian-eks-bawah'] = request['pengkajian-eks-bawah'];
      this['pengkajian-pemeriksaan-penunjang'] = request['pengkajian-pemeriksaan-penunjang'];
      this['pengkajian-assesmen'] = request['pengkajian-assesmen'];
      this['pengkajian-terapi-penatalaksaan'] = request['pengkajian-terapi-penatalaksaan'];
      this['pengkajian-anjuran'] = request['pengkajian-anjuran'];
      this['ttd-dokter-pengkaji'] = request['ttd-dokter-pengkaji'];
      this['pengkajian-dokter'] = request['pengkajian-dokter'];
      this['gambar-mata-od'] = request['gambar-mata-od'];
      this['gambar-mata-os'] = request['gambar-mata-os'];
      this['dokter-mata-posisi-od'] = request['dokter-mata-posisi-od'];
      this['dokter-mata-posisi-os'] = request['dokter-mata-posisi-os'];
      this['dokter-mata-pergerakan-od'] = request['dokter-mata-pergerakan-od'];
      this['dokter-mata-pergerakan-os'] =  request['dokter-mata-pergerakan-os'];
      this['dokter-mata-palpebra-superior-od'] = request['dokter-mata-palpebra-superior-os'];
      this['dokter-mata-palpebra-superior-os']  = request['dokter-mata-palpebra-superior-os'];
      this['dokter-mata-conj-tarsal-superior-od'] = request['dokter-mata-conj-tarsal-superior-od'];
      this['dokter-mata-conj-tarsal-superior-os'] = request['dokter-mata-conj-tarsal-superior-os'];
      this['dokter-mata-conj-tarsal-inferior-od'] = request['dokter-mata-conj-tarsal-inferior-od'];
      this['dokter-mata-conj-tarsal-inferior-os'] = request['dokter-mata-conj-tarsal-inferior-os'];
      this['dokter-mata-conj-bulbi-od'] = request['dokter-mata-conj-bulbi-od'];
      this['dokter-mata-conj-bulbi-os'] = request['dokter-mata-conj-bulbi-os'];
      this['dokter-mata-cornea-od'] = request['dokter-mata-cornea-od'];
      this['dokter-mata-cornea-os'] = request['dokter-mata-cornea-os'];
      this['dokter-mata-coa-od'] = request['dokter-mata-coa-od'];
      this['dokter-mata-coa-os'] = request['dokter-mata-coa-os'];
      this['dokter-mata-pupil-od'] = request['dokter-mata-pupil-od'];
      this['dokter-mata-pupil-os'] = request['dokter-mata-pupil-os'];
      this['dokter-mata-iris-od'] =  request['dokter-mata-iris-od'];
      this['dokter-mata-iris-os'] =  request['dokter-mata-iris-os'];
      this['dokter-mata-lensa-od'] = request['dokter-mata-lensa-od'];
      this['dokter-mata-lensa-os'] = request['dokter-mata-lensa-os'];
      this['dokter-mata-vitreous-od'] = request['dokter-mata-vitreous-od'];
      this['dokter-mata-vitreous-os'] =  request['dokter-mata-vitreous-os'];
      this['dokter-mata-funduscopy-od'] = request['dokter-mata-funduscopy-od'];
      this['dokter-mata-funduscopy-os'] = request['dokter-mata-funduscopy-os'];
      this['dokter-mata-diagnosa'] = request['dokter-mata-diagnosa'];
      this['dokter-mata-terapi'] = request['dokter-mata-terapi'];
      this['dokter-mata-rencana-pengobatan'] = request['dokter-mata-rencana-pengobatan'];
      this['nama-obat'] = request['nama-obat'];
      this.jumlah =  request.jumlah;
      this['aturan-pakai'] = request['aturan-pakai'];
      this.catatan = request.catatan;
      this['nama-obat-umum'] = request['nama-obat-umum'];
      this['jumlah-umum'] =  request['jumlah-umum'];
      this['aturan-pakai-umum'] = request['aturan-pakai-umum'];
      this['catatan-umum'] = request['catatan-umum'];
      this['dokter-mata-anjuran'] = request['dokter-mata-anjuran'];
      this['ttd-dokter-mata'] = request['ttd-dokter-mata'];
      this['dokter-mata-dokter'] = request['dokter-mata-dokter'];
      this.ttd_perawat = request.ttd_perawat;
      this.id_perawat = request.id_perawat;
    }

    static schema() {
      return yup.object().shape({
        "triase-radio": yup.string(),
        "kesadaran-radio": yup.string(),
        "pernafasan-radio": yup.string(),
        "sirkulasi-radio": yup.string(),
        "pertolongan-pertama": yup.string(),
        "tindakan-resusitasi": yup.string(),
        "jalanNafas-radio": yup.string(),
        "bantuanNafas-radio": yup.string(),
        "sirkulasiResusitasi-radio": yup.string(),
        "gcs-e": yup.string(),
        "gcs-e-text": yup.string(),
        "gcs-m": yup.string(),
        "gcs-m-text": yup.string(),
        "gcs-v": yup.string(),
        "gcs-v-text": yup.string(),
        "gcs-score": yup.string(),
        "vital-respiratory-rate": yup.string(),
        "vital-denyut-nadi": yup.string(),
        "vital-tekanan-darah": yup.string(),
        "vital-kesadaran": yup.string(),
        "vital-suhu": yup.string(),
        "skala-nyeri": yup.string(),
        "alergi-makanan": yup.string(),
        "alergi-obat": yup.string(),
        "alergi-lainnya": yup.string(),
        "kedatangan-pasien": yup.string(),
        "asal-informasi-radio": yup.string(),
        "asal-informasi-hubungan": yup.string(),
        "penyakit-terdahulu": yup.string(),
        "pengobatan-terdahulu": yup.string(),
        "pengkajian-fungsi-radio": yup.string(),
        "penilaian-risiko-jatuh-radio": yup.string(),
        "risiko-jatuh-ibu-hamil": yup.string(),
        "risiko-jatuh-lanjut-usia": yup.string(),
        "risiko-jatuh-alat-bantu": yup.string(),
        "status-kehamilan-radio": yup.string(),
        "status-kehamilan-gravida": yup.string(),
        "status-kehamilan-para": yup.string(),
        "status-kehamilan-abortus": yup.string(),
        "status-kehamilan-hpht": yup.string(),
        "nutrisi-tinggi": yup.string(),
        "nutrisi-berat": yup.string(),
        "penurunan-berat-badan-radio": yup.string(),
        "penurunan-berat-badan-nilai-radio": yup.string(),
        "penurunan-nafsu-makan-radio": yup.string(),
        "nutrisi-diagnosa-khusus": yup.string(),
        "nutrisi-diagnosa-khusus-keterangan": yup.string(),
        "nutrisi-total-skor": yup.string(),
        "nutrisi-lebih-lanjut": yup.string(),
        "psikologis-cemas": yup.string(),
        "psikologis-takut": yup.string(),
        "psikologis-marah": yup.string(),
        "psikologis-sedih": yup.string(),
        "psikologis-kecenderungan-bunuh-diri": yup.string(),
        "psikologis-lain-lain": yup.string(),
        "psikologis-lain-lain-keterangan": yup.string(),
        "mental-sadar": yup.string(),
        "mental-perilaku": yup.string(),
        "mental-perilaku-keterangan": yup.string(),
        "mental-kekerasan": yup.string(),
        "mental-kekerasan-keterangan": yup.string(),
        "kerabat-nama": yup.string(),
        "kerabat-hubungan": yup.string(),
        "kerabat-telepon": yup.string(),
        "spiritual-agama": yup.string(),
        "keperawatan-diagnosa-0": yup.string(),
        "keperawatan-rencana-0": yup.string(),
        "keperawatan-diagnosa-1": yup.string(),
        "keperawatan-rencana-1": yup.string(),
        "keperawatan-diagnosa-2": yup.string(),
        "keperawatan-rencana-2": yup.string(),
        "keperawatan-diagnosa-3": yup.string(),
        "keperawatan-rencana-3": yup.string(),
        "keperawatan-diagnosa-4": yup.string(),
        "keperawatan-rencana-4": yup.string(),
        "keperawatan-diagnosa-5": yup.string(),
        "keperawatan-rencana-5": yup.string(),
        "keperawatan-diagnosa-6": yup.string(),
        "keperawatan-rencana-6": yup.string(),
        "keperawatan-diagnosa-7": yup.string(),
        "keperawatan-rencana-7": yup.string(),
        "keperawatan-diagnosa-lainnya": yup.string(),
        "keperawatan-rencana-lainnya": yup.string(),
        "pengkajian-subjektif": yup.string(),
        "pengkajian-kepala": yup.string(),
        "pengkajian-mata": yup.string(),
        "pengkajian-od-va": yup.string(),
        "pengkajian-os-va": yup.string(),
        "pengkajian-od-tonometri": yup.string(),
        "pengkajian-os-tonometri": yup.string(),
        "pengkajian-telinga": yup.string(),
        "pengkajian-hidung": yup.string(),
        "pengkajian-gigi": yup.string(),
        "pengkajian-tenggorokan": yup.string(),
        "pengkajian-leher": yup.string(),
        "pengkajian-dada": yup.string(),
        "pengkajian-jantung": yup.string(),
        "pengkajian-paru": yup.string(),
        "pengkajian-abdomen": yup.string(),
        "pengkajian-genitalia": yup.string(),
        "pengkajian-kandungan": yup.string(),
        "pengkajian-eks-atas": yup.string(),
        "pengkajian-eks-bawah": yup.string(),
        "pengkajian-pemeriksaan-penunjang": yup.string(),
        "pengkajian-assesmen": yup.string(),
        "pengkajian-terapi-penatalaksaan": yup.string(),
        "pengkajian-anjuran": yup.string(),
        "ttd-dokter-pengkaji": yup.string(),
        "pengkajian-dokter": yup.string(),
        "gambar-mata-od": yup.string(),
        "gambar-mata-os": yup.string(),
        "dokter-mata-posisi-od": yup.string(),
        "dokter-mata-posisi-os": yup.string(),
        "dokter-mata-pergerakan-od": yup.string(),
        "dokter-mata-pergerakan-os": yup.string(),
        "dokter-mata-palpebra-superior-od": yup.string(),
        "dokter-mata-palpebra-superior-os": yup.string(),
        "dokter-mata-conj-tarsal-superior-od": yup.string(),
        "dokter-mata-conj-tarsal-superior-os": yup.string(),
        "dokter-mata-conj-tarsal-inferior-od": yup.string(),
        "dokter-mata-conj-tarsal-inferior-os": yup.string(),
        "dokter-mata-conj-bulbi-od": yup.string(),
        "dokter-mata-conj-bulbi-os": yup.string(),
        "dokter-mata-cornea-od": yup.string(),
        "dokter-mata-cornea-os": yup.string(),
        "dokter-mata-coa-od": yup.string(),
        "dokter-mata-coa-os": yup.string(),
        "dokter-mata-pupil-od": yup.string(),
        "dokter-mata-pupil-os": yup.string(),
        "dokter-mata-iris-od": yup.string(),
        "dokter-mata-iris-os": yup.string(),
        "dokter-mata-lensa-od": yup.string(),
        "dokter-mata-lensa-os": yup.string(),
        "dokter-mata-vitreous-od": yup.string(),
        "dokter-mata-vitreous-os": yup.string(),
        "dokter-mata-funduscopy-od": yup.string(),
        "dokter-mata-funduscopy-os": yup.string(),
        "dokter-mata-diagnosa": yup.string(),
        "dokter-mata-terapi": yup.string(),
        "dokter-mata-rencana-pengobatan": yup.string(),
        "nama-obat": yup.string(),
        jumlah: yup.string(),
        "aturan-pakai": yup.string(),
        catatan: yup.string(),
        "nama-obat-umum": yup.string(),
        "jumlah-umum": yup.string(),
        "aturan-pakai-umum": yup.string(),
        "catatan-umum": yup.string(),
        "dokter-mata-anjuran": yup.string(),
        "ttd-dokter-mata": yup.string(),
        "dokter-mata-dokter": yup.string(),
        ttd_perawat: yup.string(),
        id_perawat: yup.string(),
      });
    }

    static createFromJson(json: IUpdateAssessmentUgdRequest) {
      return new UpdateAssessmentUgdRequest(json);
    }
}
