import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import moviesRoutes from './routes/movies.routes';
import genresRoutes from './routes/genres.routes';
import errorHandler from './middlewares/error.middleware';
import morgan from 'morgan';
import FileUpload from 'express-fileupload';
import { Request, Response } from 'express';
import { prismaClient } from './db/client';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(FileUpload({
    useTempFiles: true,
    tempFileDir: './uploads',
    limits: {fileSize: 10000000},
    abortOnLimit: true
}));
// app.use("/user", userRoutes);
app.use("/movie", moviesRoutes);
app.use("/genre", genresRoutes);
app.use(errorHandler)

app.get("/", (req: Request, res: Response): void => {
    res.status(200).json({ message: "This is working bro!" });
});

app.get("/user", (req: Request, res: Response): void => {
    try {
        const allUsers = prismaClient.user.findMany({
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
});

export default app;
