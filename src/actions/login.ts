"use server";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { signIn } from "../../auth";
import { DEFAULT_LOGIN_REDIRECT } from "../../routes";
import { AuthError } from "next-auth";


// Server action function
export async function login(values: z.infer<typeof LoginSchema>) {
  const result = LoginSchema.safeParse(values);

  if (!result.success) {
    return { success: false, message: "Invalid input fields" };
  }

  const { email, password } = result.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    return { success: true, message: "Login successful" };
  } catch (error) {
        if (error instanceof AuthError) {
            return { success: false, message: error.message };
        }
           throw error;
    }
}