export default function StudentsPage() {
  return (
    <section>
      <div className="section-header">
        <h2>Students</h2>
        <button className="primary">Add Student</button>
      </div>
      <div className="module-grid">
        <article className="card">
          <h3>Enrollment</h3>
          <p>Track onboarding, registration and section assignment flows.</p>
        </article>
        <article className="card">
          <h3>Performance</h3>
          <p>Monitor grades, attendance and behavior with risk alerts.</p>
        </article>
      </div>
    </section>
  );
}
