export class AccommodationParamError extends Error {
  constructor() {
    super('Parâmetro inválido');
  }
}

export class AccommodationNotFoundError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class AccommodationError extends Error {
  constructor(message: string) {
    super(message);
  }
}
