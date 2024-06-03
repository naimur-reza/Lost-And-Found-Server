import { JsonWebTokenError } from "jsonwebtoken";
import { IGenericError } from "../interfaces/error";

const handleJwtError = (error: JsonWebTokenError): IGenericError => {
  const statusCode = 401;
  return {
    message: error.message || "Invalid",
    status: statusCode,
    errorDetails: {
      issues: [],
    },
  };
};

export default handleJwtError;
