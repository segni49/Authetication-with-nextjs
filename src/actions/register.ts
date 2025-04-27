
import * as z from "zod";
import {RegisterSchema} from "@/schemas"
import bcrypt from "bcrypt";
import  prisma from "@/lib/db";
// Server action function
export async function register(values: z.infer<typeof RegisterSchema>) {
       // Validate the input fields using Zod schema
      const validatedfields = RegisterSchema.safeParse(values);
       if (!validatedfields.success) {
           return {Error: "invalid fields"}
       }

       const {email, password, name} = validatedfields.data;

       const hashedPassword = await bcrypt.hash(password, 10);

        const existingUser = await prisma.user.findUnique({
            where: {
                email,
            }
        });

        if (existingUser) {
            return { error: "Email already in use"}
        }

      await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            }
        })
   return {success: "user created!!"} 
}