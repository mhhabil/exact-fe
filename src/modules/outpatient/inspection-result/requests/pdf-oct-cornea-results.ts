import { DateTimeConverter } from "@src/shared/datetime-converter";
import { CreatePDFRequest, ICreatePDFRequest } from "@src/shared/pdf/requests/create-pdf.request";

export interface IPdfOctCorneaResultsRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string;
    'pasien.Tgl_Lahir': string;
    'pasien.Umur': string;
    'pasien.Jenis_Kelamin': string;
    tanggal: string;
    thickness_od: string;
    thickness_os: string;
    epitel_od_1: string;
    epitel_od_2: string;
    epitel_od_3: string;
    epitel_od_4: string;
    epitel_od_5: string;
    epitel_od_6: string;
    stroma_od_1: string;
    stroma_od_2: string;
    stroma_od_3: string;
    stroma_od_4: string;
    endotel_od_1: string;
    endotel_od_2: string;
    endotel_od_3: string;
    bmd_od_1: string;
    bmd_od: string;
    bmd_od_2: string;
    bmd_od_3: string;
    bmd_od_4: string;
    ac_od_1: string;
    ac_od: string;
    ac_od_2: string;
    ac_od_3: string;
    iris_od_1: string;
    iris_od_2: string;
    iris_od_3: string;
    lens_od_1: string;
    lens_vault_od:  string;
    lens_od_2: string;
    lens_thick_od: string;
    epitel_os_1: string;
    epitel_os_2: string;
    epitel_os_3: string;
    epitel_os_4: string;
    epitel_os_5: string;
    epitel_os_6: string;
    stroma_os_1: string;
    stroma_os_2: string;
    stroma_os_3: string;
    stroma_os_4: string;
    endotel_os_1: string;
    endotel_os_2: string;
    endotel_os_3: string;
    bmd_os_1: string;
    bmd_os: string;
    bmd_os_2: string;
    bmd_os_3: string;
    bmd_os_4: string;
    ac_os_1: string;
    ac_os: string;
    ac_os_2: string;
    ac_os_3: string;
    iris_os_1: string;
    iris_os_2: string;
    iris_os_3: string;
    lens_os_1: string;
    lens_vault_os: string;
    lens_os_2: string;
    lens_thick_os: string;
    Tanda_Tangan_Perawat: string;
    nama_perawat: string;
    Tanda_Tangan_Dokter: string;
    nama_dokter: string;
    kesimpulan_oct_cornea: string;
    lampiran: any;
    nik: string;
  }
}

export class PdfOctCorneaResultsRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string;
    'pasien.Tgl_Lahir': string;
    'pasien.Umur': string;
    'pasien.Jenis_Kelamin': string;
    tanggal: string;
    thickness_od: string;
    epitel_od_1: string;
    epitel_od_2: string;
    epitel_od_3: string;
    epitel_od_4: string;
    epitel_od_5: string;
    epitel_od_6: string;
    stroma_od_1: string;
    stroma_od_2: string;
    stroma_od_3: string;
    stroma_od_4: string;
    endotel_od_1: string;
    endotel_od_2: string;
    endotel_od_3: string;
    bmd_od_1: string;
    bmd_od: string;
    bmd_od_2: string;
    bmd_od_3: string;
    bmd_od_4: string;
    ac_od_1: string;
    ac_od: string;
    ac_od_2: string;
    ac_od_3: string;
    iris_od_1: string;
    iris_od_2: string;
    iris_od_3: string;
    lens_od_1: string;
    lens_vault_od: string;
    lens_od_2: string;
    lens_thick_od: string;
    thickness_os: string;
    epitel_os_1: string;
    epitel_os_2: string;
    epitel_os_3: string;
    epitel_os_4: string;
    epitel_os_5: string;
    epitel_os_6: string;
    stroma_os_1: string;
    stroma_os_2: string;
    stroma_os_3: string;
    stroma_os_4: string;
    endotel_os_1: string;
    endotel_os_2: string;
    endotel_os_3: string;
    bmd_os_1: string;
    bmd_os: string;
    bmd_os_2: string;
    bmd_os_3: string;
    bmd_os_4: string;
    ac_os_1: string;
    ac_os: string;
    ac_os_2: string;
    ac_os_3: string;
    iris_os_1: string;
    iris_os_2: string;
    iris_os_3: string;
    lens_os_1: string;
    lens_vault_os: string;
    lens_os_2: string;
    lens_thick_os: string;
    Tanda_Tangan_Perawat: string;
    nama_perawat: string;
    Tanda_Tangan_Dokter: string;
    nama_dokter: string;
    kesimpulan_oct_cornea: string;
    lampiran: any;
    nik: string;
  }

  constructor(req: IPdfOctCorneaResultsRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfOctCorneaResultsRequest) {
    return new PdfOctCorneaResultsRequest(json);
  }

  static createPdfRequest(val: any, emrId: string): PdfOctCorneaResultsRequest {
    return new PdfOctCorneaResultsRequest({
      emr_id: emrId,
      form_name: 'laporan-oct-kornea',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        tanggal: DateTimeConverter.convertToNormalDate(val?.form?.Tanggal),
        thickness_od: val?.form?.Ketebalan_OD ?? '',
        thickness_os: val?.form?.Ketebalan_OS ?? '',
        epitel_od_1: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_Epitel_Detach_Check === '1'),
        epitel_od_2: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_Erosi_Check === '1'),
        epitel_od_3: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_Irregular_Epitel_Check === '1'),
        epitel_od_4: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_Epitel_Thinning_Check === '1'),
        epitel_od_5: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_Epitel_Downgrowth_Check === '1'),
        epitel_od_6: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_Epitel_Lainnya_Check === '1'),
        stroma_od_1: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_Irreguler_Stroma_Check === '1'),
        stroma_od_2: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_Stromal_Thinning_Check === '1'),
        stroma_od_3: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_Stromal_Melting_Check === '1'),
        stroma_od_4: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_Stromal_Lainnya_Check === '1'),
        endotel_od_1: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_Irreguler_Endotel_Check === '1'),
        endotel_od_2: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_Endotelial_Detachment_Check === '1'),
        endotel_od_3: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_Endotel_Lainnya_Check === '1'),
        bmd_od_1: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_Anterior_Chamber_Check === '1'),
        bmd_od: val?.form?.OD_Anterior_Chamber_Depth ?? '',
        bmd_od_2: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_BMD_Mass_Check === '1'),
        bmd_od_3: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_BMD_Particle_Check === '1'),
        bmd_od_4: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_BMD_Lainnya_Check === '1'),
        ac_od_1: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_Scleral_Spur_Check === '1'),
        ac_od: val?.form?.OD_Scleral_Spur_Angle ?? '',
        ac_od_2: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_Sudut_Dangkal_Check === '1'),
        ac_od_3: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_Sudut_Dalam_Check === '1'),
        iris_od_1: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_Blok_Pupil_Check === '1'),
        iris_od_2: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_Plateau_Check === '1'),
        iris_od_3: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_Tumor_Kista_Check === '1'),
        lens_od_1: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_Lens_Vault_Check === '1'),
        lens_vault_od: val?.form?.OD_Lens_Vault ?? '',
        lens_od_2: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OD_Lens_Thickness_Check === '1'),
        lens_thick_od: val?.form?.OD_Lens_Thickness ?? '',
        epitel_os_1: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_Epitel_Detach_Check === '1'),
        epitel_os_2: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_Erosi_Check === '1'),
        epitel_os_3: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_Irregular_Epitel_Check === '1'),
        epitel_os_4: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_Epitel_Thinning_Check === '1'),
        epitel_os_5: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_Epitel_Downgrowth_Check === '1'),
        epitel_os_6: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_Epitel_Lainnya_Check === '1'),
        stroma_os_1: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_Irreguler_Stroma_Check === '1'),
        stroma_os_2: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_Stromal_Thinning_Check === '1'),
        stroma_os_3: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_Stromal_Melting_Check === '1'),
        stroma_os_4: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_Stromal_Lainnya_Check === '1'),
        endotel_os_1: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_Irreguler_Endotel_Check === '1'),
        endotel_os_2: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_Endotelial_Detachment_Check === '1'),
        endotel_os_3: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_Endotel_Lainnya_Check === '1'),
        bmd_os_1: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_Anterior_Chamber_Check === '1'),
        bmd_os: val?.form?.OS_Anterior_Chamber_Depth ?? '',
        bmd_os_2: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_BMD_Mass_Check === '1'),
        bmd_os_3: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_BMD_Particle_Check === '1'),
        bmd_os_4: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_BMD_Lainnya_Check === '1'),
        ac_os_1: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_Scleral_Spur_Check === '1'),
        ac_os: val?.form?.OS_Scleral_Spur_Angle ?? '',
        ac_os_2: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_Sudut_Dangkal_Check === '1'),
        ac_os_3: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_Sudut_Dalam_Check === '1'),
        iris_os_1: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_Blok_Pupil_Check === '1'),
        iris_os_2: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_Plateau_Check === '1'),
        iris_os_3: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_Tumor_Kista_Check === '1'),
        lens_os_1: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_Lens_Vault_Check === '1'),
        lens_vault_os: val?.form?.OS_Lens_Vault ?? '',
        lens_os_2: PdfOctCorneaResultsRequest.getCheckImage(val?.form?.OS_Lens_Thickness_Check === '1'),
        lens_thick_os: val?.form?.OS_Lens_Thickness ?? '',
        Tanda_Tangan_Perawat: val?.form?.TTD_Perawat ?? undefined,
        nama_perawat: val?.form?.Nama_Perawat ?? '',
        Tanda_Tangan_Dokter: val?.form?.TTD_Dokter_Pemeriksaan ?? undefined,
        nama_dokter: val?.form?.Nama_Dokter_Pemeriksaan ?? '',
        kesimpulan_oct_cornea: val?.form?.Kesimpulan ?? '',
        nik: val?.pasien?.NIK ?? '',
        lampiran: Array.isArray(val?.dicoms) ? val?.dicoms.map((dicoms: any, i: number) => {
          return {
            gambar_lampiran: (dicoms.Thumbnail !== '') ? dicoms.Thumbnail : undefined,
          }
        }) : [],
      },
    })
  }
}
