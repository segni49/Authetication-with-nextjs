
import { PrismaClient } from "@prisma/client";

// Declare global type augmentation for NodeJS.Global
declare global {
    // eslint-disable-next-line no-var
    var prisma: PrismaClient | undefined;
}

// Use a global variable to ensure a single Prisma Client instance
const globalForPrisma = global as typeof globalThis & { prisma?: PrismaClient };

// Create a new Prisma Client instance if it doesn't already exist
const prisma = globalForPrisma.prisma || new PrismaClient();

// Attach the Prisma Client instance to the global object in non-production environments
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}


// Log the Prisma Client instance for debugging purposes

export default prisma; // Export the Prisma Client instance for use in other modules
