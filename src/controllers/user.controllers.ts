import { Request, Response } from 'express';
import { prismaClient } from '../db/client';
import { convertToType } from '../helpers/utils';

export const getAllUsers = async (req: Request, res: Response) => {

    try {
        const allUsers = await prismaClient.user.findMany({
            include: {
                movies: {
                    include: {
                        genres: {
                            select: { genre: { select: { name: true, id: true } } } 
                        },
                    },
                }
            }
        });
        res.status(201).json(allUsers);
    } catch (error) {
        res.status(200).send('Cannot find all users');
    }
};

export const createUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {    
        const newUser = await prismaClient.user.create({
            data: { name, email, password }
        });
    
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getUserById = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const user = await prismaClient.user.findUnique({
            where: { id: convertToType(userId) }, 
            include: {
                movies: {
                    include: {
                        genres: {
                            select: { genre: { select: { name: true, id: true } } } 
                        },
                    },
                }
            }
        })
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error)
    }
};

export const getUserByEmail = async (req: Request, res: Response) => {
    const { userEmail } = req.params;

    try {
        const user = await prismaClient.user.findUnique({
            where: { email: userEmail },
            include: {
                movies: {
                    include: {
                        genres: {
                            select: { genre: { select: { name: true, id: true } } },
                        },
                    },
                },
            },
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const { name, email } = req.body;
    
    try {
        const updatedUser = await prismaClient.user.update({
            where: { id: convertToType(userId) },
            data: { name, email }
        });
            
            res.status(201).json(updatedUser);
    } catch (error) {
        res.status(500).json(error)
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const deletedUser = await prismaClient.user.delete({
            where: { id: convertToType(userId) }
        });
        res.status(204).json(deletedUser);
    } catch (error) {
        res.status(500).json(error);
    }
};
