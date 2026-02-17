import { status } from "elysia";
import type { Response, TaskResponse, CreateTaskInput } from "./model";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/lib/generated/prisma/client";

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL ?? process.env.DIRECT_URL,
  }),
});

export abstract class TaskService {
  static async getTasks(): Promise<TaskResponse[]> {
    console.log("Fetching tasks from database...");
    const tasks = await prisma.task.findMany({});
    console.log(tasks);
    if (!tasks) throw status(404, "No tasks found");
    return tasks;
  }

  static async createTask(taskData: CreateTaskInput): Promise<Response> {
    const response = await prisma.task.create({
      data: {
        title: taskData.title,
        content: taskData.content,
        tags: taskData.tags || [],
        project: taskData.project || "Não pertence a nenhum projeto",
      },
    });
    if (!response) throw status(500, "Failed to create task");
    return {
      message: "Task created successfully",
      taskCreated: response,
    };
  }
}
