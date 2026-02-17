import { Elysia, t } from "elysia";
import { TaskService } from "./service";
import { TaskModel } from "./model";

export const tasksRoutes = new Elysia({ prefix: "/tasks" })
  .get("/", async () => TaskService.getTasks(), {
    response: { 200: TaskModel.list },
  })
  .post("/createTask", async ({ body }) => TaskService.createTask(body), {
    body: TaskModel.createInput,
    response: { 200: TaskModel.response },
  });
