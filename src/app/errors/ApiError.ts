// send api error style code is based on class. so we use class here
// Error super class, ApiError child class
class ApiError extends Error {
  statusCode: number;
  constructor(statusCode: number, message: string | undefined, stack = "") {
    super(message);
    this.statusCode = statusCode;
    if (stack) { // Error class er 1ta stack thake
      this.stack = stack; 
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
