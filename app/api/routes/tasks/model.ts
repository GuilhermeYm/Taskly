import { t } from "elysia";

const TaskObject = t.Object({
  id: t.String(),
  title: t.String(),
  content: t.String(),
  tags: t.Array(t.String()),
  project: t.String(),
  created_at: t.Date(),
  updated_at: t.Date(),
});

const CreateTaskInput = t.Object({
  title: t.String(),
  content: t.String(),
  tags: t.Optional(t.Array(t.String())),
  project: t.Optional(t.String()),
});

export const TaskModel = {
  single: TaskObject,
  list: t.Array(TaskObject),
  createInput: CreateTaskInput,
  response: t.Object({
    message: t.String(),
    taskCreated: TaskObject,
  }),
};

export type TaskResponse = typeof TaskObject.static;
export type CreateTaskInput = typeof CreateTaskInput.static;
export type Response = typeof TaskModel.response.static;
