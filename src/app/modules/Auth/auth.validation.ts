import z from "zod";

const registerSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required." }),
    email: z.string({ required_error: "Email must be a valid email address" }),
    password: z.string({ required_error: "Password is required." }),
    profile: z.object({
      bio: z.string({ required_error: "Bio is required." }),
      age: z.number({ required_error: "Age is required." }),
    }),
  }),
});

const loginSchema = z.object({
  body: z.object({
    email: z.string({ required_error: "Email must be a valid email address" }),
    password: z.string({ required_error: "Password is required." }),
  }),
});

export const authValidationSchema = {
  registerSchema,
  loginSchema,
};
