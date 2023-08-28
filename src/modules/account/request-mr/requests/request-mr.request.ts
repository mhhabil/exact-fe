import { DateTimeConverter } from '@src/shared/datetime-converter';
import { StorageService } from '@src/shared/local-storage';

const companyCode = StorageService().get('companyCode')?.replace(/"/g, '');

export interface IBaseRecordRequest {
  limit?: number;
  offset?: number;
  branch_code?: string;
}

export class BaseRecordRequest {
  limit: number;
  offset: number;
  branch_code: string;

  constructor(req: IBaseRecordRequest) {
    this.limit = req.limit ? +req.limit : 10;
    this.offset = req.offset ? +req.offset : 0;
    this.branch_code = req.branch_code ? req.branch_code : companyCode ? companyCode : '';
  }

  static createFromJson(json: IBaseRecordRequest) {
    return new BaseRecordRequest(json);
  }

  getCurrentPage(): number {
    return (this.offset + this.limit) / this.limit;
  }

  calculateTotalPage(totalRecord: number): number {
    return Math.ceil(totalRecord / this.limit);
  }
}

export interface IRequestMRPatientRequest extends IBaseRecordRequest {
  search?: string;
}

export class RequestMRPatientRequest extends BaseRecordRequest {
  search?: string;

  constructor(req: IRequestMRPatientRequest) {
    super(req);
    this.search = req.search ?? '';
  }

  static createFromJson(json: IRequestMRPatientRequest) {
    return new RequestMRPatientRequest(json);
  }
}

export interface IRequestMRActionRequest {
  mr_list: any;
  purpose: string;
  branch_code: string;
  expired_at: string;
}

export class RequestMRActionRequest {
  mr_list: string[];
  purpose: string;
  branch_code: string;
  expired_at: string;

  constructor(req: IRequestMRActionRequest) {
    this.mr_list = req.mr_list && req.mr_list !== '' ? req.mr_list.split(',') : [];
    this.purpose = req.purpose;
    this.branch_code = req.branch_code ? req.branch_code : companyCode ? companyCode : '';
    this.expired_at = req.expired_at ? DateTimeConverter.convertToNormalDatetime(req.expired_at) : '';
  }

  static createFromJson(json: IRequestMRActionRequest) {
    return new RequestMRActionRequest(json);
  }
}

export interface IGrantAccessMRRequest extends IRequestMRActionRequest {
  requested_by: string;
  requested_by_name: string;
}

export class GrantAccessMRRequest extends RequestMRActionRequest {
  requested_by: string;
  requested_by_name: string;

  constructor(req: IGrantAccessMRRequest) {
    super(req);
    this.requested_by = req.requested_by;
    this.requested_by_name = req.requested_by_name;
  }

  static createFromJson(json: IGrantAccessMRRequest) {
    return new GrantAccessMRRequest(json);
  }
}

export interface IApproveMRActionRequest {
  id: string;
  action: '1' | '0';
}

export class ApproveMRActionRequest {
  id: string;
  action: '1' | '0';

  constructor(req: IApproveMRActionRequest) {
    this.id = req.id;
    this.action = req.action;
  }

  static createFromJson(json: IApproveMRActionRequest) {
    return new ApproveMRActionRequest(json);
  }
}

export interface IListMRFilterRequest {
  limit?: number;
  offset?: number;
  search?: string;
  branch_code?: string;
}

export class ListMRFilterRequest {
  limit: number;
  offset: number;
  search: string;
  branch_code: string;

  constructor(req: IListMRFilterRequest) {
    this.limit = req.limit ? +req.limit : 10;
    this.offset = req.offset ? +req.offset : 0;
    this.branch_code = req.branch_code ? req.branch_code : companyCode ? companyCode : '';
    this.search = req.search ?? '';
  }

  static createFromJson(json: IListMRFilterRequest) {
    return new ListMRFilterRequest(json);
  }

  getCurrentPage(): number {
    return (this.offset + this.limit) / this.limit;
  }

  calculateTotalPage(totalRecord: number): number {
    return Math.ceil(totalRecord / this.limit);
  }
}
