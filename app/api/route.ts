import { Elysia, t } from "elysia";

export const app = new Elysia({ prefix: "/api" }).get("/", "Hello Nextjs").use(useRoute);

export const GET = app.fetch;
export const POST = app.fetch;
export type app = typeof app;
