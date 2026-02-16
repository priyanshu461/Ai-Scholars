import { AiAssistant } from "@/components/panel/ai-assistant";
import { isRole, type Role } from "@/lib/auth";
import { roleSummary } from "@/lib/menu";

function getRoleOrDefault(value: string): Role {
  return isRole(value) ? value : "student";
}

export default async function RoleDashboardPage({ params }: { params: { role: string } }) {
  const { role } = params;
  const safeRole = getRoleOrDefault(role);

  return (
    <>
      <header className="page-header">
        <div>
          <p className="eyebrow">{safeRole.toUpperCase()} DASHBOARD</p>
          <h2>Welcome to your role specific panel</h2>
          <p className="subtitle">{roleSummary[safeRole]}</p>
        </div>
      </header>

      <section className="kpi-grid">
        <article className="card">
          <span>Active Users</span>
          <h3>1,280</h3>
          <strong>+9.1%</strong>
        </article>
        <article className="card">
          <span>Tasks Due Today</span>
          <h3>24</h3>
          <strong>+3 new</strong>
        </article>
        <article className="card">
          <span>Automation Rules</span>
          <h3>14</h3>
          <strong>Stable</strong>
        </article>
      </section>

      <AiAssistant role={safeRole} />
    </>
  );
}
