import type { app } from "@/app/api/[[...route]]/route";
import { treaty } from "@elysiajs/eden";

export const api = treaty<app>("localhost:3000/").api;
