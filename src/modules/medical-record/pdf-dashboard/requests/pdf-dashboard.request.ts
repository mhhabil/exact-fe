import { TreatmentService } from '@src/shared/treatment';

const treatment = TreatmentService().get();

export interface IPDFDashFilter {
  emr_id?: string;
  limit?: number;
  offset?: number;
  search?: string;
}

export interface IPDFSep {
  emr_id?: string;
  form_name?: string;
  src_url?: string;
}

export class PDFDashFilter {
  emr_id?: string;
  limit: number;
  offset: number;
  search?: string;

  constructor(req: IPDFDashFilter) {
    this.emr_id = req.emr_id ?? treatment?.EMR_ID;
    this.limit = req.limit ?? 10;
    this.offset = req.offset ?? 0;
    this.search = req.search ?? '';
  }

  getCurrentPage(): number {
    return (this.offset + this.limit) / this.limit;
  }

  calculateTotalPage(totalRecord: number): number {
    return Math.ceil(totalRecord / this.limit);
  }

  static createFromJson(json: IPDFDashFilter) {
    return new PDFDashFilter(json);
  }
}

export class PDFSep {
  emr_id?: string;
  form_name?: string;
  src_url?: string;

  constructor(req: IPDFSep) {
    this.emr_id = req.emr_id ?? '';
    this.form_name = req.form_name ?? '';
    this.src_url = req.src_url ?? '';
  }

}
