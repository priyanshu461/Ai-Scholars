import { redirect } from "next/navigation";
import { RoleSidebar } from "@/components/panel/role-sidebar";
import { getSessionUser, isRole } from "@/lib/auth";

export default async function RolePanelLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { role: string };
}) {
  const user = await getSessionUser();
  const { role } = params;

  if (!user) {
    redirect("/login");
  }

  if (!isRole(role)) {
    redirect(`/panel/${user.role}`);
  }

  if (user.role !== role) {
    redirect(`/panel/${user.role}`);
  }

  return (
    <main className="layout">
      <RoleSidebar role={role} name={user.name} />
      <section className="content">{children}</section>
    </main>
  );
}
