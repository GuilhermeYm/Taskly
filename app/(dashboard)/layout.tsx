import AppSidebar from "@/components/DashboardComponents/AppSidebar";
import Header from "@/components/DashboardComponents/Header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main className="w-full h-full">
          <Header />
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
