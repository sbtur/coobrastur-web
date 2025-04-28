export class AuthenticationError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number,
    public readonly code: string,
  ) {
    super(message);
    this.name = 'AuthenticationError';
  }
}

export class InvalidCredentialsError extends AuthenticationError {
  constructor() {
    super('Credenciais inválidas', 401, 'INVALID_CREDENTIALS');
  }
}

export class UserNotFoundError extends AuthenticationError {
  constructor() {
    super('Usuário não encontrado', 404, 'USER_NOT_FOUND');
  }
}

export class UnauthorizedError extends AuthenticationError {
  constructor() {
    super('Não autorizado', 401, 'UNAUTHORIZED');
  }
}

export class BadRequestError extends AuthenticationError {
  constructor(message = 'Requisição inválida') {
    super(message, 400, 'BAD_REQUEST');
  }
}

export class InternalServerError extends AuthenticationError {
  constructor() {
    super('Erro interno do servidor', 500, 'INTERNAL_SERVER_ERROR');
  }
}
