import Link from "next/link";
import { ROLES } from "@/lib/auth";
import { roleSummary } from "@/lib/menu";

export default function HomePage() {
  return (
    <main className="public-home">
      <section className="hero card">
        <p className="eyebrow">Scalable ERP on Next.js</p>
        <h1>Multi-page. Multi-role. Ready for Admin, Teacher, and Student.</h1>
        <p className="subtitle">
          Built with role specific routing, authentication flow, protected panels, and AI assistant
          widgets for each user type.
        </p>
        <Link className="primary cta" href="/login">
          Login to Panel
        </Link>
      </section>

      <section className="role-grid">
        {ROLES.map((role) => (
          <article key={role} className="card">
            <h3>{role.toUpperCase()}</h3>
            <p>{roleSummary[role]}</p>
            <Link href={`/panel/${role}`}>Open {role} panel</Link>
          </article>
        ))}
      </section>
    </main>
  );
}
