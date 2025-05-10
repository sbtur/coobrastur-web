import { authenticationService } from './authentication.service';
import { authenticateVisitorUseCase } from './use-cases/authenticate-visitor.use-case';
import { changePasswordUseCase } from './use-cases/change-password.use-case';
import { loginUseCase } from './use-cases/login-use-case';
import { passwordResetUseCase } from './use-cases/password-reset.use-case';

export function makeAuthenticationUseCases() {
  const service = authenticationService();

  return {
    loginUseCase: loginUseCase(service),
    passwordResetUseCase: passwordResetUseCase(service),
    changePasswordUseCase: changePasswordUseCase(service),
    authenticateVisitorUseCase: authenticateVisitorUseCase(service),
  };
}
