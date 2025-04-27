"use server";
import * as z from "zod";
import {LoginSchema} from "@/schemas"
// Server action function
export async function login(values: z.infer<typeof LoginSchema>) {
      const validatedfields = LoginSchema.safeParse(values);
       if (!validatedfields) {
           return {Error: "invalid fields"}
       }

       return {success: "Email sent!"};
}