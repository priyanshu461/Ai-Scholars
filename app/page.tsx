import { KpiGrid } from "@/components/kpi-grid";
import { ModuleGrid } from "@/components/module-grid";
import { Sidebar } from "@/components/sidebar";

export default function HomePage() {
  return (
    <main className="layout">
      <Sidebar />
      <section className="content">
        <header className="page-header">
          <div>
            <p className="eyebrow">Welcome back, Admin</p>
            <h2>Unified ERP Command Center</h2>
            <p className="subtitle">
              Lightweight but fully-featured modular ERP architecture built with Next.js, React 19,
              and TypeScript.
            </p>
          </div>
          <div className="actions">
            <button className="ghost">Export Report</button>
            <button className="primary">Create Workflow</button>
          </div>
        </header>

        <KpiGrid />
        <ModuleGrid />
      </section>
    </main>
  );
}
