export interface ICompanyDetail {
  code: string;
  name: string;
  address: string;
  company_type_code: string;
  company_type_name: string;
}

export class CompanyDetail {
  code: string;
  name: string;
  address: string;
  company_type_code: string;
  company_type_name: string;

  constructor(req: ICompanyDetail) {
    this.code = req.code;
    this.name = req.name;
    this.address = req.address;
    this.company_type_code = req.company_type_code;
    this.company_type_name = req.company_type_name;
  }
}

export interface ICompanies {
  data: Array<ICompanyDetail>;
}

export class Companies {
  data: Array<ICompanyDetail>;

  constructor(req: ICompanies) {
    this.data = (req.data && Array.isArray(req.data)) ? req.data : [];
  }
}

