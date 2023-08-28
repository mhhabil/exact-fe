import { CreatePDFRequest, ICreatePDFRequest } from '@shared/pdf/requests/create-pdf.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfPatientIdentityRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string;
    'pasien.Tgl_Lahir': string;
    'pasien.Umur': string;
    'pasien.Alamat': string;
    'pasien.Kabupaten': string;
    'pasien.No_HP': string;
    'pasien.Agama': string;
    'pasien.Pekerjaan': string;
    'pasien.Pendidikan': string;
    'wali.Nama': string;
    'wali.Hubungan': string;
    'wali.Alamat': string;
    'wali.No_Telepon_1': string;
    'wali.Suku': string;
    'form.Nama_Petugas': string;
    nama_TTD: string,
    nik: string,

    Jenis_Kelamin_Laki_Laki: string,
    Jenis_Kelamin_Perempuan: string,
    Status_Nikah_Belum_Menikah: string,
    Status_Nikah_Menikah: string,
    Status_Nikah_Duda: string,
    Status_Nikah_Janda: string,
    Tanda_Tangan_Pasien_Wali: string,
    Tanda_Tangan_Petugas: string,
  }
}

export class PdfPatientIdentityRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string;
    'pasien.Tgl_Lahir': string;
    'pasien.Umur': string;
    'pasien.Alamat': string;
    'pasien.Kabupaten': string;
    'pasien.No_HP': string;
    'pasien.Agama': string;
    'pasien.Pekerjaan': string;
    'pasien.Pendidikan': string;
    'wali.Nama': string;
    'wali.Hubungan': string;
    'wali.Alamat': string;
    'wali.No_Telepon_1': string;
    'wali.Suku': string;
    'form.Nama_Petugas': string;
    nama_TTD: string,
    nik: string,

    Jenis_Kelamin_Laki_Laki: string;
    Jenis_Kelamin_Perempuan: string;
    Status_Nikah_Belum_Menikah: string;
    Status_Nikah_Menikah: string;
    Status_Nikah_Duda: string;
    Status_Nikah_Janda: string;
    Tanda_Tangan_Pasien_Wali: string,
    Tanda_Tangan_Petugas: string,
  }

  constructor(req: IPdfPatientIdentityRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfPatientIdentityRequest) {
    return new PdfPatientIdentityRequest(json);
  }

  static createPdfRequest(val: any, emrId: string): PdfPatientIdentityRequest {
    return new PdfPatientIdentityRequest({
      emr_id: emrId,
      form_name: 'informasi_identitas-pasien_v3',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir':DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'pasien.Alamat': val?.pasien?.Alamat ?? '',
        'pasien.Kabupaten': val?.pasien?.Kabupaten ?? '',
        'pasien.No_HP': val?.pasien?.No_HP ?? '',
        'pasien.Agama': val?.pasien?.Agama ?? '',
        'pasien.Pekerjaan': val?.pasien?.Pekerjaan ?? '',
        'pasien.Pendidikan': val?.pasien?.Pendidikan ?? '',
        'wali.Nama': val?.wali?.Nama ?? '',
        'wali.Hubungan': val?.wali?.Hubungan ?? '',
        'wali.Alamat': val?.wali?.Alamat ?? '',
        'wali.No_Telepon_1': val && val.wali && val.wali.No_Telepon ? val.wali.No_Telepon : val && val.wali && val.wali.No_Telepon_1 ? val.wali.No_Telepon_1 : '',
        'wali.Suku': val?.wali?.Suku ?? '',
        'form.Nama_Petugas': val?.form?.Nama_Petugas,
        nama_TTD: (val?.form?.Tanda_Tangan_Radio === '1') ? (val?.pasien?.Nama ?? '') : (val?.wali?.Nama ?? ''),
        nik: val?.pasien?.NIK ?? '',

        Jenis_Kelamin_Laki_Laki: PdfPatientIdentityRequest.getCheckImage(val?.pasien?.Jenis_Kelamin === 'Laki-Laki'),
        Jenis_Kelamin_Perempuan: PdfPatientIdentityRequest.getCheckImage(val?.pasien?.Jenis_Kelamin === 'Perempuan'),
        Status_Nikah_Belum_Menikah: PdfPatientIdentityRequest.getCheckImage(val?.pasien?.Status_Nikah === 'Belum Nikah'),
        Status_Nikah_Menikah: PdfPatientIdentityRequest.getCheckImage(val?.pasien?.Status_Nikah === 'Nikah'),
        Status_Nikah_Duda: PdfPatientIdentityRequest.getCheckImage(val?.pasien?.Status_Nikah === 'Duda'),
        Status_Nikah_Janda: PdfPatientIdentityRequest.getCheckImage(val?.pasien?.Status_Nikah === 'Janda'),
        Tanda_Tangan_Pasien_Wali: (val?.form?.Tanda_Tangan_Radio === '1') ? ((val?.form?.Tanda_Tangan_Pasien !== '') ? val?.form?.Tanda_Tangan_Pasien : undefined) : ((val?.form?.Tanda_Tangan_Wali !== '') ? val?.form?.Tanda_Tangan_Wali : undefined),
        Tanda_Tangan_Petugas: (val?.form?.Tanda_Tangan_Petugas !== '') ? val?.form?.Tanda_Tangan_Petugas : undefined,
      },
    })
  }
}
