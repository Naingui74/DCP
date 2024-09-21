import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface User {
    id: number;
    email: string;
    password: string;
}

export const createUser = async (user: Omit<User, 'id'>) => {
    return await prisma.user.create({
    data: user,
    });
};

export const findUserByEmail = async (email: string) => {
    return await prisma.user.findUnique({
    where: { email },
    });
};
