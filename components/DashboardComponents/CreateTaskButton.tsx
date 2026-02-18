"use client";

import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import TaskForm from "./TaskForm";

export default function CreateTaskButton({
  text,
  classNameProps,
}: {
  text?: string;
  classNameProps?: string;
}) {
  const [shouldIShowTheForm, setShouldIShowTheForm] = useState<true | false>(
    false,
  );

  return (
    <>
      <Button
        variant={"blue"}
        onClick={() => setShouldIShowTheForm(!shouldIShowTheForm)}
        className={classNameProps ? `absolute ${classNameProps}` : undefined}
      >
        <Plus className="h-8 w-8" />
        <span>{text ? text : "New Task"}</span>
      </Button>
      {shouldIShowTheForm && (
        <TaskForm onClose={() => setShouldIShowTheForm(false)} />
      )}
    </>
  );
}
