import z from "zod";
import { User } from "./types";

const User = z.object({
  user_id: z.number(),
  name: z.string(),
  password: z.string(),
});

export const validateUser = (user: User) => {
  return User.safeParse(user);
};

export const validatePartialUser = (user: User) => {
  return User.partial().safeParse(user);
};
