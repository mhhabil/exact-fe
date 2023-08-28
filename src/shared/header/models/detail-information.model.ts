interface ISelect {
  label: string;
  value: string;
}
export interface Information {
  Alergi: string;
  Pengkajian_Keperawatan: {
    Alergi: string;
    Alergi_Select: Array<ISelect>;
    Alergi_Radio: string;
    Alergi_Lain: string;
    Alergi_Lain_Teks: string;
    RPT: string;
    RPT_Select: Array<ISelect>;
    RPT_Radio: string;
    RPT_Lain: string;
    RPT_Lain_Teks: string;
    RPO: string;
    RPO_Select: Array<ISelect>;
    RPO_Radio: string;
    RPO_Lain: string;
    RPO_Lain_Teks: string;
    KLL_Radio: string;
  },
  ID_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  Nama_Petugas: string;
  Updated_By_Name: string;
}

export interface IDetailInformation {
  Informasi: Information;
}

export class DetailInformation {
  Informasi: Information;
  constructor(request: IDetailInformation) {
    this.Informasi = request.Informasi;
  }
}
