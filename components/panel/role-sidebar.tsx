"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Role } from "@/lib/auth";
import { roleMenus } from "@/lib/menu";

type Props = {
  role: Role;
  name: string;
};

export function RoleSidebar({ role, name }: Props) {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div>
        <h1>Ai Scholars ERP</h1>
        <p>{name}</p>
        <p className="muted role">{role.toUpperCase()} PANEL</p>
      </div>

      <nav>
        {roleMenus[role].map((item) => {
          const href = item.href ? `/panel/${role}/${item.href}` : `/panel/${role}`;
          const active = pathname === href;
          return (
            <Link key={href} href={href} className={active ? "nav-link active" : "nav-link"}>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <form action="/api/auth/logout" method="post">
        <button type="submit" className="ghost full">
          Sign out
        </button>
      </form>
    </aside>
  );
}
