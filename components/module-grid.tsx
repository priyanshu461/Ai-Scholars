import { modules } from "@/lib/data";

export function ModuleGrid() {
  return (
    <section>
      <div className="section-header">
        <h2>ERP Modules</h2>
        <button>Manage Modules</button>
      </div>
      <div className="module-grid">
        {modules.map(({ name, description, icon: Icon, status }) => (
          <article key={name} className="card module">
            <div className="module-title">
              <Icon size={20} />
              <h3>{name}</h3>
            </div>
            <p>{description}</p>
            <span data-status={status}>{status}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
