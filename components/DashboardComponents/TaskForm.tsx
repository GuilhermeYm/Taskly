"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Plus } from "lucide-react";
import { useCreateTask } from "@/hooks/useTask";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "../ui/field";
import { Input } from "../ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "../ui/input-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

interface TaskFormProps {
  onClose: () => void;
}

const FormSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be at most 100 characters"),
  content: z
    .string()
    .min(1, "Content is required")
    .max(500, "Content must be at most 500 characters"),
  status: z.enum(["COMPLETED", "PENDANT", "IN_PROGRESS"]),
  priority: z.enum(["HIGH", "MEDIUM", "LOW"]),
  category: z.enum(["INBOX", "TODAY", "UPCOMING"]),
  project: z.string(),
  tags: z.array(z.string()),
  due_date: z.date().optional(),
});

export default function TaskForm({ onClose }: TaskFormProps) {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      content: "",
      status: "PENDANT" as const,
      priority: "MEDIUM" as const,
      category: "INBOX" as const,
      project: "Does not belong to any project",
      tags: ["Without tags"],
    },
  });

  const pathname = usePathname();

  const category = pathname.replace("/", "").toUpperCase() as
    | "INBOX"
    | "TODAY"
    | "UPCOMING";

  useEffect(() => {
    form.setValue("category", category);
  }, [category, form]);

  const { mutate: createTaskMutation, isPending } = useCreateTask();

  const handleFormSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log("Data of submit", data);
    const taskDataFixed = {
      ...data,
      id: crypto.randomUUID(),
      created_at: new Date(),
      updated_at: new Date(),
    };
    createTaskMutation(taskDataFixed, {
      onSuccess: () => {
        form.reset();
        onClose();
      },
      onError: (error) => {
        console.error("Erro ao criar tarefa:", error);
      },
    });
  };
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <Card
        className="bg-background shadow-md rounded-lg p-6 w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader>
          <CardTitle>New Task</CardTitle>
          <CardDescription>
            Current, you are creating a new task in the {category} category.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} id="task-form">
            <FieldSeparator className="mb-1" />
            <FieldGroup>
              <Controller
                name="title"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="task-form-title">
                      Task Title
                    </FieldLabel>
                    <Input
                      {...field}
                      id="task-form-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter task title"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="content"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="task-form-content">Content</FieldLabel>
                    <InputGroup>
                      <InputGroupTextarea
                        {...field}
                        id="task-form-content"
                        aria-invalid={fieldState.invalid}
                        placeholder="Enter task content"
                        className="min-h-24 resize-y  w-full"
                      />
                      <InputGroupAddon align={"block-end"}>
                        <InputGroupText className="tabular-nums">
                          {field.value.length}/500 characters
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                    <FieldDescription>
                      You should write your thoughts here.
                    </FieldDescription>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
            <FieldSeparator className="my-1" />
            <FieldGroup className="grid grid-cols-2 gap-4">
              <Controller
                name="priority"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="task-form-priority">
                      Priority
                    </FieldLabel>
                    <FieldContent>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger id="task-form-priority">
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Priority</SelectLabel>
                            <SelectItem value="HIGH">High</SelectItem>
                            <SelectItem value="MEDIUM">Medium</SelectItem>
                            <SelectItem value="LOW">Low</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FieldDescription>
                        Set the priority level of the task.
                      </FieldDescription>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </FieldContent>
                  </Field>
                )}
              />
              <Controller
                name="status"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="task-form-status">Status</FieldLabel>
                    <FieldContent>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger id="task-form-status">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Status</SelectLabel>
                            <SelectItem value="PENDANT">Pendant</SelectItem>
                            <SelectItem value="IN_PROGRESS">
                              In Progress
                            </SelectItem>
                            <SelectItem value="COMPLETED">Completed</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FieldDescription>
                        Set the status of the task.
                      </FieldDescription>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </FieldContent>
                  </Field>
                )}
              />
            </FieldGroup>
            <FieldSeparator className="my-1" />
            <FieldGroup>
              <FieldLabel>Projects</FieldLabel>
              <FieldContent>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Associate a project
                </Button>
                <FieldDescription>
                  Initial, any tasks doen't belong to any project, but you can
                  change it now or later.
                </FieldDescription>
              </FieldContent>
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Field orientation="horizontal">
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
            <Button type="submit" form="task-form" disabled={isPending}>
              {isPending ? "Criando..." : "Submit"}
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
}
