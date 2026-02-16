"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function LoginForm() {
  const router = useRouter();
  const [name, setName] = useState("Priyanshu");
  const [role, setRole] = useState("admin");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, role })
    });

    if (!response.ok) {
      setError("Invalid role. Please choose admin, teacher, or student.");
      setLoading(false);
      return;
    }

    router.push(`/panel/${role}`);
    router.refresh();
  }

  return (
    <form className="auth-form" onSubmit={onSubmit}>
      <h2>Sign in to ERP</h2>
      <p>Role based access with scalable routing and panel isolation.</p>

      <label htmlFor="name">Full Name</label>
      <input id="name" value={name} onChange={(e) => setName(e.target.value)} required />

      <label htmlFor="role">Role</label>
      <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="admin">Admin</option>
        <option value="teacher">Teacher</option>
        <option value="student">Student</option>
      </select>

      {error ? <span className="error">{error}</span> : null}

      <button className="primary" type="submit" disabled={loading}>
        {loading ? "Signing in..." : "Continue"}
      </button>
    </form>
  );
}
