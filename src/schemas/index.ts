import * as z from "zod";

export  const LoginSchema = z.object({
    email: z.string().email("email is missing"),
    password: z.string().min(8, "Password is required"),
});

export const RegisterSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("email is missing"),
    password: z.string().min(8, "Password is required"),

   
});

