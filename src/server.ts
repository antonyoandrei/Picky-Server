import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import moviesRoutes from './routes/movies.routes';
import genresRoutes from './routes/genres.routes';
import errorHandler from './middlewares/error.middleware';
import morgan from 'morgan';
import FileUpload from 'express-fileupload';
import { Request, Response } from 'express';

const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://picky-nextjs.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
  
app.use(cors());
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

app.get("/", (req: Request, res: Response): void => {
    res.status(200).json({ message: "This is working bro!" });
});

app.use(errorHandler)

export default app;
