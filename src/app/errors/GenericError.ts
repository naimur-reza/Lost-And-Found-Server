class GenericError extends Error {
  status: number;
  message: string;
  stack?: string | undefined;

  constructor(status: number, message: string, stack = "") {
    super(message);
    super(stack);
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default GenericError;
