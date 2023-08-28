export interface IHttpErrorModel {
  datetime: Date;
  message: string;
};

export class HttpErrorModel {
  datetime: Date;
  message: string;

  constructor(req: IHttpErrorModel) {
    this.datetime = req.datetime;
    this.message = req.message;
  }
}
