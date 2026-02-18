import { t } from "elysia";

const TaskObject = t.Object({
  id: t.String(),
  title: t.String(),
  content: t.String(),
  tags: t.Array(t.String()),
  project: t.String(),
  created_at: t.Date(),
  updated_at: t.Date(),
  due_date: t.Optional(t.Date()),
  priority: t.Enum({
    HIGH: "HIGH",
    MEDIUM: "MEDIUM",
    LOW: "LOW",
  }),
  status: t.Enum({
    PENDANT: "PENDANT",
    IN_PROGRESS: "IN_PROGRESS",
    COMPLETED: "COMPLETED",
  }),
  category: t.Enum({
    INBOX: "INBOX",
    TODAY: "TODAY",
    UPCOMING: "UPCOMING",
  }),
});

export const TaskModel = {
  single: TaskObject,
  list: t.Array(TaskObject),
  createInput: TaskObject,
  response: t.Object({
    message: t.String(),
    taskCreated: TaskObject,
  }),
};

export type TaskResponse = typeof TaskObject.static;
export type Response = typeof TaskModel.response.static;
export type CreateTaskInput = typeof TaskModel.createInput.static;
