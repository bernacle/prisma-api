import { Router } from "express";
import PostsController from "../controllers/PostsController";

const postsRouter = Router();
const postsController = new PostsController();


postsRouter.get("/", postsController.index);
postsRouter.post("/", postsController.create);
postsRouter.get("/:id", postsController.show)
postsRouter.patch("/:id", postsController.update)
postsRouter.delete("/:id", postsController.delete)

export default postsRouter;
