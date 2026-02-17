import { Elysia } from "elysia";
import { tasksRoutes } from "../routes";

export const app = new Elysia({ prefix: "/api" })
  .get("/", () => ({ status: "ok", message: "Hello Next.js" }))
  .use(tasksRoutes);

export const GET = app.fetch;
export const POST = app.fetch;
export type app = typeof app;
