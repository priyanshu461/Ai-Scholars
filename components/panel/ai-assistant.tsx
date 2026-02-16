"use client";

import { useMemo, useState } from "react";
import type { Role } from "@/lib/auth";

const prompts: Record<Role, string[]> = {
  admin: [
    "Show admission trend for last 30 days",
    "List unpaid invoices",
    "How to optimize teacher allocation?"
  ],
  teacher: [
    "Generate quiz from chapter 4",
    "Find students below 70% attendance",
    "Create weekly lesson summary"
  ],
  student: [
    "Suggest study plan for this week",
    "Summarize my weakest topics",
    "Generate revision checklist"
  ]
};

export function AiAssistant({ role }: { role: Role }) {
  const [input, setInput] = useState("");

  const response = useMemo(() => {
    if (!input.trim()) {
      return "I can help with insights, tasks, and workflow suggestions for your role.";
    }

    return `AI Assistant (${role}): Based on "${input}", I recommend creating an automated workflow and adding this to your dashboard shortcuts.`;
  }, [input, role]);

  return (
    <section className="card ai-card">
      <div className="section-header">
        <h3>AI Assistant</h3>
        <span className="badge">Role-aware</span>
      </div>
      <p className="muted">Try quick prompts:</p>
      <div className="chips">
        {prompts[role].map((prompt) => (
          <button key={prompt} className="chip" onClick={() => setInput(prompt)}>
            {prompt}
          </button>
        ))}
      </div>

      <textarea
        value={input}
        onChange={(event) => setInput(event.target.value)}
        rows={3}
        placeholder="Ask AI for help..."
      />
      <p className="assistant-response">{response}</p>
    </section>
  );
}
