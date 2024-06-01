import { IGenericError } from "../interfaces/error";

const handleJwtError = (): IGenericError => {
  const statusCode = 401;
  return {
    message: "Invalid JWT token",
    status: statusCode,
    errorDetails: {
      issues: [],
    },
  };
};

export default handleJwtError;
