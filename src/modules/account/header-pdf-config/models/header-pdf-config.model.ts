export interface IHeaderPdfConfigModel {
  company_code: string;
  logo_url: string;
  logo_name: string;
  logo_size: string;
  logo_type: string;
  text_1: string;
  text_2: string;
  text_3: string;
}

export class HeaderPdfConfigModel {
  company_code: string;
  logo_url: string;
  logo_name: string;
  logo_size: string;
  logo_type: string;
  text_1: string;
  text_2: string;
  text_3: string;

  constructor(model: IHeaderPdfConfigModel) {
    this.company_code = model.company_code;
    this.logo_url = model.logo_url;
    this.logo_name = model.logo_name;
    this.logo_size = model.logo_size;
    this.logo_type = model.logo_type;
    this.text_1 = model.text_1;
    this.text_2 = model.text_2;
    this.text_3 = model.text_3;
  }
}
