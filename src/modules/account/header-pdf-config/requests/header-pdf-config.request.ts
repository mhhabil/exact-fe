export interface IUpdateHeaderPdfConfigRequest {
  company_code: string;
  logo_url: string;
  logo_name: string;
  logo_size: string;
  logo_type: string;
  text_1: string;
  text_2: string;
  text_3: string;
}

export class UpdateHeaderPdfConfigRequest {
  company_code: string;
  logo_url: string;
  logo_name: string;
  logo_size: string;
  logo_type: string;
  text_1: string;
  text_2: string;
  text_3: string;

  constructor(req: IUpdateHeaderPdfConfigRequest) {
    this.company_code = req.company_code;
    this.logo_url = req.logo_url;
    this.logo_name = req.logo_name;
    this.logo_size = req.logo_size;
    this.logo_type = req.logo_type;
    this.text_1 = req.text_1;
    this.text_2 = req.text_2;
    this.text_3 = req.text_3;
  }

  static createFromJson(json: IUpdateHeaderPdfConfigRequest) {
    return new UpdateHeaderPdfConfigRequest(json);
  }
}

