import { kpis } from "@/lib/data";

export function KpiGrid() {
  return (
    <section className="kpi-grid">
      {kpis.map((item) => (
        <article key={item.label} className="card">
          <span>{item.label}</span>
          <h3>{item.value}</h3>
          <strong>{item.trend}</strong>
        </article>
      ))}
    </section>
  );
}
