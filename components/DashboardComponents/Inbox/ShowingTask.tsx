"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useTasks } from "@/hooks/useTask";
import { Calendar } from "lucide-react";
import NoTaskFound from "../NoTasksFound";

type Filter = "completed" | "notCompleted";
interface Task {
  id: string;
  title: string;
  due_date: string | undefined;
  priority: "HIGH" | "MEDIUM" | "LOW";
}

export default function ShowingTask() {
  const { data, isLoading, error } = useTasks();
  const handleCheckedChange = (taskId: string) => {
    console.log(`Task with ID ${taskId} checked/unchecked`);
  };
  if (isLoading) return <p>Loading tasks...</p>;
  if (error || typeof data === "undefined") {
    return <p>Error loading tasks: {error?.message}</p>;
  }

  if (data.length === 0) {
    return <NoTaskFound />;
  }
  return (
    <>
      {data.map((task) => (
        <article
          className="border border-border rounded-xl px-4 py-4.5 flex gap-4 items-center"
          key={task.id}
        >
          <Checkbox
            name={`task-${task.id}`}
            onCheckedChange={() => handleCheckedChange(task.id)}
          />
          <div className="space-y-1">
            <h2 className="text-sm font-bold">{task.title}</h2>
            <div className="flex gap-4 items-center justify-start text-xs">
              <div className="text-muted-foreground items-center flex gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(task.due_date).toLocaleString()}</span>
              </div>
              <div
                className={`py-0.5 px-2 font-bold uppercase rounded-2xl ${task.priority === "HIGH" ? "bg-red-300 text-red-500" : task.priority === "MEDIUM" ? "bg-yellow-300 text-yellow-500" : "bg-green-300 text-green-500"}`}
              >
                ! {task.priority.toUpperCase()}
              </div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
