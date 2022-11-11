import { Router } from "express";
import todo from "../handlers/todo.js";

const routes = new Router();

routes.get("/todo", todo.get);
routes.get("/todo/:id", todo.getById);
routes.post("/todo", todo.create);
routes.put("/todo/:id", todo.edit);
routes.delete("/todo/:id", todo.destroy);

export default routes;
