export interface ICreatePDFRequest {
  emr_id: string;
  form_name: string;
  row_filter: string;
  preview: boolean;
  data: any;
}

interface IAge {
  Tahun: string;
  Bulan: string;
  Hari: string;
}

export class CreatePDFRequest {
  emr_id: string;
  form_name: string;
  row_filter: string;
  preview: boolean;
  data: any;

  constructor(req: ICreatePDFRequest) {
    this.emr_id = req.emr_id;
    this.form_name = req.form_name;
    this.row_filter = req.row_filter;
    this.preview = req.preview;
    this.data = req.data;
  }

  static createFromJson(json: ICreatePDFRequest) {
    return new CreatePDFRequest(json);
  }

  static normalizeAge(age: IAge) {
    return `${age.Tahun} Th, ${age.Bulan} Bln, ${age.Hari} Hr`;
  }

  static getCheckImage(validity: boolean) {
    return (validity) ? 'https://bucket.rsmatasmec.com/checklist.jpeg' : 'https://bucket.rsmatasmec.com/blank.jpeg';
  }
}
