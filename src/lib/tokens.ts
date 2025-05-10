import { getVerficationTokenByEmail } from "@/data/verificiation-token"; // Fixed typo in import
import { v4 as uuidv4 } from "uuid";
import prisma from "./db";

export const generateVerificationToken = async (email: string) => {
    try {
        const token = uuidv4();
        const expires = new Date(new Date().getTime() + 3600 * 1000); // Token expires in 1 hour

        // Check if a token already exists for the email
        const existingToken = await getVerficationTokenByEmail(email);

        if (existingToken) {
            // Delete the existing token
            await prisma.delete({
                where: {
                    id: existingToken.id,
                },
            });
        }

        // Create a new verification token
        const verificationToken = await prisma.verification_Token.create({
            data: {
                email,
                token,
                expires,
            },
        });

        // Return the created token
        return verificationToken;
    } catch (error) {
        console.error("Error generating verification token:", error);
        throw new Error("Could not generate verification token");
    }
};


