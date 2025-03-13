import { Request, Response, NextFunction } from "express";
import getErrorMessage from "../util/getErrorMessage.js";

const responseFormatter = (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  const oldJson = res.json;

  res.json = function (data) {
    const formattedResponse = {
      status: res.statusCode,
      message: getErrorMessage(res.statusCode.toString()),
      data: data,
    };
    return oldJson.call(this, formattedResponse);
  };

  next();
};

export default responseFormatter;
