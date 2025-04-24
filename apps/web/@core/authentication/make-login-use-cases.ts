import { authenticationService } from './authentication.services';
import { loginUseCase } from './use-cases/login-use-case';
import { passwordResetUseCase } from './use-cases/password-reset.use-case';

export function makeLoginUseCases() {
  const service = authenticationService();

  return {
    loginUseCase: loginUseCase(service),
    passwordResetUseCase: passwordResetUseCase(service),
  };
}
