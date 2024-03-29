import { ZodError } from "zod";
import { IGenericError } from "../interfaces/error";

export const handleZodError = (err: ZodError): IGenericError => {
  const issues: { field: string | number; message: string }[] = err.issues.map(
    issue => {
      return {
        field: issue.path[issue.path.length - 1],
        message: issue.message,
      };
    },
  );

  const errorMessage = issues.map(issue => `${issue.message}`).join(" ");

  return {
    message: errorMessage,
    status: 400,
    errorDetails: {
      issues,
    },
  };
};
