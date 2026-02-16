"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "lucide-react";
import { useState } from "react";

type Filter = "completed" | "notCompleted";
interface Task {
  id: number;
  title: string;
  dueDate: string;
  priority: "high" | "medium" | "low";
}

const dataTask = {
  1: {
    id: 3213,
    title: "Review project proposal for Q3 marketing launch",
    dueDate: "Today, 4:00 PM",
    priority: "high",
  },
  2: {
    id: 3214,
    title: "Prepare presentation for client meeting",
    dueDate: "Tomorrow, 10:00 AM",
    priority: "medium",
  },
};

export default function ShowingTask() {
  const handleCheckedChange = (taskId: number) => {
    console.log(`Task with ID ${taskId} checked/unchecked`);
  };

  return (
    <>
      {Object.values(dataTask).map((task) => (
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
                <span>{task.dueDate}</span>
              </div>
              <div
                className={`py-0.5 px-2 font-bold uppercase rounded-2xl ${task.priority === "high" ? "bg-red-300 text-red-500" : task.priority === "medium" ? "bg-yellow-300 text-yellow-500" : "bg-green-300 text-green-500"}`}
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
