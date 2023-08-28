export interface IEmployeeDetailRequest {
  employee_id: string;
}

export class EmployeeDetailRequest {
  employee_id: string;

  constructor(req: IEmployeeDetailRequest) {
    this.employee_id = req.employee_id;
  }
}
