import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import {
  Calendar,
  CalendarClock,
  CheckCircle,
  Inbox,
  Plus,
  Tag,
} from "lucide-react";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild variant={"noHover"}>
              <Link href="/" className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-blue-600 text-white shadow-sm ring-1 ring-blue-500/30">
                  <CheckCircle className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <h1 className="text-xl font-semibold tracking-tight">Taskly</h1>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="uppercase">Navigate</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild variant={"hoverBlue"}>
                <Link href="/inbox">
                  <Inbox className="w-4.5 h-4.5" />
                  <span className="text-sm">Inbox</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild variant={"hoverBlue"}>
                <Link href="/today">
                  <Calendar className="w-4.5 h-4.5" />
                  <span className="text-sm">Today</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild variant={"hoverBlue"}>
                <Link href="/upcoming">
                  <CalendarClock className="w-4.5 h-4.5" />
                  <span className="text-sm">Upcoming</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="uppercase">Projects</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild variant={"hoverBlue"}>
                <Link href={"/projects/work"}>
                  <div className="h-2.5 w-2.5 bg-blue-600 rounded-full border" />
                  <span className="text-sm">Work</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild variant={"hoverBlue"}>
                <Link href={"/projects/personal"}>
                  <div className="h-2.5 w-2.5 bg-green-600 rounded-full border" />
                  <span className="text-sm">Personal</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild variant={"hoverBlue"}>
                <Link href={"/projects/sideprojects"}>
                  <div className="h-2.5 w-2.5 bg-orange-600 rounded-full border" />
                  <span className="text-sm">Side Projects</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="uppercase">Tags</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild variant={"hoverBlue"}>
                <Link href={"/tags/important"}>
                  <Tag className="w-4.5 h-4.5" />
                  <span className="text-sm">Important</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild variant={"hoverBlue"}>
              <Link
                href={"/newproject"}
                className="flex items-center justify-start gap-2"
              >
                <Plus className="w-4.5 h-4.5" />
                <span className="text-sm">New Project</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
