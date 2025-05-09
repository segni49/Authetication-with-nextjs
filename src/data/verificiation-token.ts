import prisma from "@/lib/db";

export const getVerficationTokenByToken = async (token: string) => {
    try {
       const VerificationToken = await prisma.verification_token.findUnique({
        where: { token },
    });

       return VerificationToken;
    } catch (error: unknown) {
         if(error instanceof Error) {
             return null;
         }
    }
}


export const getVerficationTokenByEmail = async (email: string) => {
     try {
        const verificationToken = await prisma.teacher.findFirst({
            where: {email},
        });

        return verificationToken;
     } catch (error: unknown) {
          if(error instanceof Error) {
              return null;
          }
     }
}