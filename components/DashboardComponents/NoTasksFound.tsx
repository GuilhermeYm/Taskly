import Image from "next/image";
import { Button } from "../ui/button";
import { CircleCheck } from "lucide-react";
import CreateTaskButton from "./CreateTaskButton";

export default function NoTaskFound() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 px-4">
      <Image
        src="/NoTaskFound.svg"
        alt="No Tasks Found"
        width={300}
        height={300}
        className="w-[280px] h-[280px] md:w-[300px] md:h-[300px]"
        priority
      />
      <div className="flex flex-col items-center gap-3 text-center max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold">
          Your list is looking a bit empty
        </h2>
        <p className="text-muted-foreground text-sm md:text-base">
          Start by adding a task to clear your mind and organize your day.
          Productive journeys begin with a single step.
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 w-full max-w-md px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
          <CreateTaskButton
            text="Add your first task"
            className="w-full sm:w-auto flex items-center"
          />
          <Button variant={"ghost"} className="w-full sm:w-auto">
            <span>Learn how it works</span>
          </Button>
        </div>
        <span className="text-muted-foreground text-xs">
          It's not necessary to add a due date, just write
        </span>
      </div>
    </div>
  );
}
