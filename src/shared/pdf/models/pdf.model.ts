export interface IPdfModel {
  Created_At: string;
  Created_By: string;
  Created_By_Name: string;
  Form_Name: string;
  URL: string;
  Version: number;
  Visit_Date: string;
}

export class PdfModel {
  Created_At: string;
  Created_By: string;
  Created_By_Name: string;
  Form_Name: string;
  URL: string;
  Version: number;
  Visit_Date: string;

  constructor(request: IPdfModel) {
    this.Created_At = request.Created_At;
    this.Created_By = request.Created_By;
    this.Created_By_Name = request.Created_By_Name;
    this.Form_Name = request.Form_Name;
    this.URL = request.URL;
    this.Version = request.Version;
    this.Visit_Date = request.Visit_Date;
  }

  static createFromJson(json: IPdfModel) {
    return new PdfModel(json);
  }
}
