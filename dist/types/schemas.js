import z from "zod";
const Authentication = z.object({
    name: z.string(),
    password: z.string(),
});
export const validateAuthentication = (data) => {
    return Authentication.safeParse(data);
};
