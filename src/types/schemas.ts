import z from "zod";
import { Authentication } from "./types";

const Authentication = z.object({
  name: z.string(),
  password: z.string(),
});

export const validateAuthentication = (data: Authentication) => {
  return Authentication.safeParse(data);
};
