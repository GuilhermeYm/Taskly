import { Elysia, t } from "elysia";
import { TaskService } from "./service";
import { TaskModel } from "./model";

export const tasksRoutes = new Elysia({ prefix: "/tasks" })
  .get("/", async () => TaskService.getTasks(), {
    response: { 200: TaskModel.list },
  })
  .post("/createUser", async ({ body }) => TaskService.createTask(body), {
    response: { 200: TaskModel.response },
    body: TaskModel.createInput,
  });
