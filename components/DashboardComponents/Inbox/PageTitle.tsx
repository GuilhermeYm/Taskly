import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { TextAlignCenter, TextAlignStart } from "lucide-react";
import Link from "next/link";

export default function PageTitle() {
  return (
    <section className="mb-8 grid grid-cols-2">
      <Breadcrumb>
        <BreadcrumbList className="uppercase letter-spacing-1">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/inbox" className="text-blue-700 font-bold">
              Inbox
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
        <h2 className="text-4xl font-bold my-2">Inbox</h2>
        <p className="opacity-60">You have 5 tasks in your inbox.</p>
        <span
          className="text-xs opacity-60"
          title="Click to read a little document"
        >
          <Link href="/help/inbox">What is inbox?</Link>
        </span>
      </Breadcrumb>
      <div className="flex items-end justify-end gap-4">
        <Button variant={"outline"}>
          <TextAlignCenter /> Filter
        </Button>
        <Button variant={"outline"}>
          <TextAlignStart /> Sort
        </Button>
      </div>
    </section>
  );
}
