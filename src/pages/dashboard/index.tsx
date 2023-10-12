import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <section className="min-h-screen text-white relative grid grid-cols-[12rem_1fr] w-full h-full">
      <Sidebar />
      <main className="bg-gray-950">
        <Header />
        <div className="p-6">{children}</div>
      </main>
    </section>
  );
}
