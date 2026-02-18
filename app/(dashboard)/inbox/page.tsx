import PageTitle from "@/components/DashboardComponents/Inbox/PageTitle";
import TabsPage from "@/components/DashboardComponents/Inbox/TabsPage";

export default function Page() {
  return (
    <div className="pt-8 px-8 relative">
      <PageTitle />
      <TabsPage />
    </div>
  );
}
