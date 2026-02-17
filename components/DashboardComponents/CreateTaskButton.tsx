"use client";

import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import TaskForm from "./TaskForm";

export default function CreateTaskButton() {
  const [shouldIShowTheForm, setShouldIShowTheForm] = useState<true | false>(
    false,
  );

  return (
    <>
      <Button
        variant={"blue"}
        onClick={() => setShouldIShowTheForm(!shouldIShowTheForm)}
      >
        <Plus className="h-8 w-8" />
        New Task
      </Button>
      {shouldIShowTheForm && (
        <TaskForm onClose={() => setShouldIShowTheForm(false)} />
      )}
    </>
  );
}
