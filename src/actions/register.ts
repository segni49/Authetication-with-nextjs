"use server";
import * as z from "zod";
import {RegisterSchema} from "@/schemas"
import bcrypt from "bcryptjs"
import prisma from "@/lib/db"
// Server action function
export async function register(values: z.infer<typeof RegisterSchema>) {
    try {
        const validatedfields = RegisterSchema.safeParse(values);
        if (!validatedfields.success) {
            return {Error: "invalid fields"}
        }
        const {email, password, name} = validatedfields.data;
        
        const existingUser = await prisma.user.findUnique({
            where: {
                email,
            }
        });

        if (existingUser) {
            return { error: "Email already in use"}
        }
        const hashedPassword = await bcrypt.hash(password, 10);
 
        const user = await prisma.user.create({
         data: {
             name,
             email,
             password: hashedPassword,
         }
     })
     if (user) {
            return {success: "user created!!"};
     }
    } catch (error) {
        console.error("Error in register function:", error);
        return {error: "An error occurred during registration."};
        
    }


}