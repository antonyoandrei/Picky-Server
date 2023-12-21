import { Router } from "express";
import { createUser, getAllUsers, updateUser, deleteUser, getUserById, getUserByEmail } from "../controllers/user.controllers";

const userRoutes = Router();

userRoutes.get('/', getAllUsers);
userRoutes.get('/:userId', getUserById);
userRoutes.get('/email/:userEmail', getUserByEmail);
userRoutes.post('/', createUser);
userRoutes.patch('/:userId', updateUser);
userRoutes.delete('/:userId', deleteUser);

export default userRoutes;
