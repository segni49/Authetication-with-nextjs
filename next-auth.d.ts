// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth, {type DefaultSession} from "next-auth";
import {UserRole} from '@prisma/client'

export type extendeduser =  DefaultSession["user"] & {
    role: UserRole }; 

    declare module "next-auth" {
        interface Session {
            user: extendeduser;
        }

    }