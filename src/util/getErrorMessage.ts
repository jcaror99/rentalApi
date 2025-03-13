import { Object } from "../types/types";

const getErrorMessage = (error: string) => {
  const message: Object = {
    200: "OK",
    401: "Unauthorized",
    400: "Bad Request",
    404: "Not Found",
    500: "Internal Server Error",
  };
  return message[error] || message[500];
};

export default getErrorMessage;
