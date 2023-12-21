import { Request, Response } from 'express';
import prismaClient from '../db/client';
import { convertToType } from '../helpers/utils';

export const getAllGenres = async (req: Request, res: Response) => {
    try {
        const genres = await prismaClient.genres.findMany({
            select: {
                name: true,
                id: true
            }
        });
        res.status(200).json(genres);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const createGenre = async (req: Request, res: Response) => {
    const { name } = req.body;

    try {
        const genre = await prismaClient.genres.create({ data: { name } });
        res.status(201).json(genre);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteGenre = async (req: Request, res: Response) => {
    const { genreId } = req.params;

    try {
        const deletedGenre = await prismaClient.genres.delete({
            where: { id: convertToType(genreId) }
        });

        res.status(200).json(deletedGenre);
    } catch (error) {
        res.status(500).json(error);
    }
};
