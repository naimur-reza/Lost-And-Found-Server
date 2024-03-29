export interface IGenericError {
  status: number;
  message: string;
  errorDetails: {
    issues: {
      field: string | number;
      message: string;
    }[];
  };
}
