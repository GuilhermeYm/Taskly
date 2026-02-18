import { status } from "elysia";
import type { CreateTaskInput, Response, TaskResponse } from "./model";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/lib/generated/prisma/client";

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL ?? process.env.DIRECT_URL,
  }),
});

export abstract class TaskService {
  static async getTasks(): Promise<TaskResponse[]> {
    const tasks = await prisma.task.findMany({});
    if (!tasks) throw status(404, "No tasks found");
    return tasks.map((task) => ({
      ...task,
      due_date: task.due_date ?? undefined,
    })) as TaskResponse[];
  }

  static async createTask(taskData: CreateTaskInput): Promise<Response> {
    const tryToCreateTask = await prisma.task.create({
      data: {
        id: taskData.id,
        title: taskData.title,
        content: taskData.content,
        tags: taskData.tags,
        project: taskData.project,
        created_at: taskData.created_at,
        updated_at: taskData.updated_at,
        due_date: taskData.due_date ?? null,
        priority: taskData.priority,
        status: taskData.status,
        category: taskData.category,
      },
    });

    console.log(tryToCreateTask);
    return {
      message: "Task created successfully",
      taskCreated: taskData,
    };
  }
}
