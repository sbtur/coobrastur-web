export interface ApiLoginResult {
  situation: boolean;
  accessToken: string;
  text: string;
  company: string[];
}

export interface ApiPasswordResetResult {
  situation: 0 | 1;
  text: string;
  email: string;
  token: string;
}

export interface ApiChangePasswordResult {
  situation: 0 | 1;
  text: string;
}
export interface ApiAuthenticateVisitorParams {
  accessKey: string;
  password: string;
}

export interface ApiAuthenticateVisitorResult {
  token: string;
}

export interface LoginParams {
  username: string;
  password: string;
}

export interface PasswordResetParams {
  document: string;
  recoveryType: string;
}

export interface ChangePasswordParams {
  token: string;
  password: string;
}

export interface IAuthentication {
  login({ username, password }: LoginParams): Promise<ApiLoginResult>;
  passwordReset({
    document,
    recoveryType,
  }: PasswordResetParams): Promise<ApiPasswordResetResult>;
  changePassword({
    token,
    password,
  }: ChangePasswordParams): Promise<ApiChangePasswordResult>;
  authenticateVisitor({
    accessKey,
    password,
  }: ApiAuthenticateVisitorParams): Promise<ApiAuthenticateVisitorResult>;
}
