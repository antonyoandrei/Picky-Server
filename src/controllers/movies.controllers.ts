import { Request, Response } from 'express';
import { prismaClient } from '../db/client';
import { convertToType } from '../helpers/utils';
import { uploadImage } from '../helpers/cloudinary';
import fs from 'fs-extra';

export const getAllMovies = async (req: Request, res: Response) => {
    try {
        const allMovies = await prismaClient.movies.findMany({
            include: {
                genres: {
                    select: { genre: { select: { name: true, id: true } } } 
                },
            },
        });
        res.status(201).json(allMovies);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const createMovie = async (req: Request, res: Response) => {
    const { name, poster_image, score, genres } = req.body;
    const { userId } = req.params;
    try {
        const movie = await prismaClient.movies.create({data:{
            name,
            poster_image,
            score,
            genres: {
                create: genres.map((genre: { name: string }) => ({
                    genre: {
                        connectOrCreate: {
                            where: { name: genre.name },
                            create: { name: genre.name },
                        },
                    },
                })),
            },
            User: { connect: { id: convertToType(userId) } },
        },
        include: {
            genres: {
                select: { genre: { select: { name: true, id: true } } } 
            },
        },
    });
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getMoviesByUserId = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const movies = await prismaClient.movies.findMany({
            where: { userId: convertToType(userId) },
            include: {
                genres: {
                    select: { genre: { select: { name: true, id: true } } }
                },
            },
        });
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getMovieById = async (req: Request, res: Response) => {
    const { movieId } = req.params;

    try {
        const movie = await prismaClient.movies.findUnique({
            where: { id: convertToType(movieId) },
            include: {
                genres: {
                    select: { genre: { select: { name: true, id: true } } }
                },
            },
        });

        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }

        res.status(200).json(movie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const updateMovie = async (req: Request, res: Response) => {
    const { movieId } = req.params;
    const { name, poster_image, score, genres } = req.body;

    try {
        const existingMovie = await prismaClient.movies.findUnique({
            where: { id: convertToType(movieId) },
            include: { genres: { select: { genre: { select: { name: true } } } } },
        });

        if (!existingMovie) {
            return res.status(404).json({ error: "Movie not found" });
        }

        const existingGenres = existingMovie.genres.map((genre: { genre: { name: string; }; }) => genre.genre?.name).filter(Boolean);

        const newGenres = genres.filter((genre: { name: string; }) => !existingGenres.includes(genre.name));

        const updatedMovie = await prismaClient.movies.update({
            where: { id: convertToType(movieId) },
            data: {
                name,
                poster_image,
                score,
                genres: {
                    create: newGenres.map((genre: { name: string; }) => ({
                        genre: {
                            connectOrCreate: {
                                where: { name: genre.name },
                                create: { name: genre.name },
                            },
                        },
                    })),
                },
            },
            include: {
                genres: {
                    select: { genre: { select: { name: true, id: true } } },
                },
            },
        });

        res.status(201).json(updatedMovie);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteMovie = async (req: Request, res: Response) => {
    const { movieId } = req.params;

    try {
        const deletedMovie = await prismaClient.movies.delete({
            where: { id: convertToType(movieId) }
        });

        res.status(200).json(deletedMovie);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const uploadImageWithCloudinary = async (req: Request, res: Response) => {
    const image = req.files?.image
    console.log(image)
    let imageUploaded = null
    if (image) {
        if ("tempFilePath" in image) {
            imageUploaded = await uploadImage(image.tempFilePath);
            await fs.unlink(image.tempFilePath)
        }
    }
    res.status(200).send({ message: "Uploaded successfully", data: imageUploaded});
};
