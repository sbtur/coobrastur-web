export interface ApiLoginResult {
  Situation: boolean;
  AccessToken: string;
  Text: string;
  Company: string[];
}

export interface ApiPasswordResetResult {
  Situation: 0 | 1;
  Text: string;
  Email: string;
  Token: string;
}

export interface ApiChangePasswordResult {
  Situation: 0 | 1;
  Text: string;
}

export interface ApiUserFirstAccessResult {
  Situation: 0 | 1;
  Text: string;
}

export interface LoginParams {
  username: string;
  password: string;
}

export interface Login {
  isActive: boolean;
  accessToken: string;
  user: string;
}

export interface PasswordResetParams {
  document: string;
  recoveryType: string;
}

export interface PasswordReset {
  email: string;
}

export interface ChangePasswordParams {
  token: string;
  password: string;
}

export interface UserFirstAccessParams {
  token: string;
  document: string;
  rg: string;
  birthDate: string;
}

export interface IAuthentication {
  login({ username, password }: LoginParams): Promise<ApiLoginResult>;
  passwordReset({
    document,
    recoveryType,
  }: PasswordResetParams): Promise<ApiPasswordResetResult>;
  changePassword({ token, password }: ChangePasswordParams): Promise<void>;
  userFirstAccess({
    token,
    document,
    rg,
    birthDate,
  }: UserFirstAccessParams): Promise<void>;
}
