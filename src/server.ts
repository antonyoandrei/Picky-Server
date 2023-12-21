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
app.use("/user", userRoutes);
app.use("/movie", moviesRoutes);
app.use("/genre", genresRoutes);
app.use(errorHandler)

app.get("/user/:userEmail", async (req: Request, res: Response) => {
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
        res.status(500).json({ error: "Internal Server Error" });
        console.log(error);
    }
});

export default app;
