import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.has("adminAuth");
  if (!isAuthenticated) redirect("/admin/login");

  return (
    <div className="fixed inset-0 z-50 flex overflow-hidden bg-neutral-50">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto p-6 lg:ml-64">
        {children}
      </main>
    </div>
  );
}
