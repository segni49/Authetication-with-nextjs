import prisma from "@/lib/db";


export const getUserByEmail = async (email: string) => {

    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        return user;
    } catch (error) {
        console.error("Error fetching user by email:", error);
        throw new Error("Failed to fetch user by email");
    }
}
export const getUserById = async (id: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
             id},
            
        });
        return user;
    } catch (error) {
        console.error("Error fetching user by email:", error);
        throw new Error("Failed to fetch user by email");
    }
}