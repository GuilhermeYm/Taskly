import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { SidebarTrigger } from "../ui/sidebar";
import { Bell, Plus } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Avatar, AvatarImage } from "../ui/avatar";
import CreateTaskButton from "./CreateTaskButton";

export default function Header() {
  return (
    <header className="h-[5%] w-full border-b border-border flex items-center justify-between px-4 py-2 relative">
      <div className="basis-96 flex items-center gap-2">
        <SidebarTrigger className="h-6 w-6 cursor-pointer" />
        <Separator orientation="vertical" className="self-stretch" />
        <Input
          className="placeholder:text-sm "
          placeholder="Search tasks, projects, or labels"
        />
      </div>
      <nav className="text-sm flex items-center justify-end gap-4">
        <Button asChild variant={"ghost"}>
          <Link href="/">
            <Bell className="h-8 w-8" />
          </Link>
        </Button>
        <CreateTaskButton />
        <Collapsible className="relative flex items-center justify-center">
          <CollapsibleTrigger asChild>
            <Button
              variant={"ghost"}
              className="w-fit rounded-full p-0 cursor-pointer"
            >
              <Avatar>
                <AvatarImage
                  src={"https://avatars.githubusercontent.com/u/88838651?v=4"}
                />
              </Avatar>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>Teste</CollapsibleContent>
        </Collapsible>
      </nav>
    </header>
  );
}
