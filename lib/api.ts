import { treaty } from "@elysiajs/eden";
import type { app } from "../app/api/route";

export const api = treaty<app>("localhost:3000/api");
