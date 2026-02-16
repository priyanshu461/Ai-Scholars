export default function ClassesPage() {
  return (
    <section>
      <div className="section-header">
        <h2>Classes</h2>
        <button>Generate Timetable</button>
      </div>
      <div className="module-grid">
        <article className="card">
          <h3>Schedule Board</h3>
          <p>Manage sections, classrooms, and weekly routines.</p>
        </article>
        <article className="card">
          <h3>Assignments</h3>
          <p>Create and distribute tasks with submission analytics.</p>
        </article>
      </div>
    </section>
  );
}
