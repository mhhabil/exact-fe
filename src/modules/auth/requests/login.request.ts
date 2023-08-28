export class LoginRequest {
  username: string;
  password: string;

  constructor(request: ILoginRequest) {
    this.username = request.username;
    this.password = request.password;
  }
}

export interface ILoginRequest {
  username: string,
  password: string,
}
