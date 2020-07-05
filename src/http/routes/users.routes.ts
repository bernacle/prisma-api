import { Router } from "express";
import UsersController from "../controllers/UsersController";

const usersRouter = Router();
const usersController = new UsersController();


usersRouter.get("/", usersController.index);
usersRouter.post("/", usersController.create);
usersRouter.get("/:id", usersController.show)
usersRouter.patch("/:id", usersController.update)
usersRouter.delete("/:id", usersController.delete)

export default usersRouter;
