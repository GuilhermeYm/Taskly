import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ShowingTask from "./ShowingTask";
export default function TabsPage() {
  return (
    <Tabs className="space-y-6" defaultValue="all">
      <TabsList className="flex border-b border-border" variant={"line"}>
        <TabsTrigger className="px-6 py-3 text-center " value="all">
          All Tasks
        </TabsTrigger>
        <TabsTrigger className="px-6 py-3 text-center " value="assigned">
          Assigned to me
        </TabsTrigger>
        <TabsTrigger className="px-6 py-3 text-center " value="shared">
          Shared
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="space-y-3">
        <ShowingTask />
      </TabsContent>
      <TabsContent value="assigned" className="space-y-3"></TabsContent>
      <TabsContent value="shared" className="space-y-3"></TabsContent>
    </Tabs>
  );
}
