export default function AnalyticsPage() {
  return (
    <section>
      <h2>Analytics</h2>
      <p className="subtitle">Advanced reports across finance, academics, attendance, and operations.</p>
      <div className="kpi-grid">
        <article className="card">
          <span>Completion Rate</span>
          <h3>93.2%</h3>
        </article>
        <article className="card">
          <span>Attendance Trend</span>
          <h3>88.7%</h3>
        </article>
        <article className="card">
          <span>Fee Collection</span>
          <h3>91.5%</h3>
        </article>
      </div>
    </section>
  );
}
