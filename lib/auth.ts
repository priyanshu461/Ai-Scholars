import { cookies } from "next/headers";

export const ROLES = ["admin", "teacher", "student"] as const;

export type Role = (typeof ROLES)[number];

export type SessionUser = {
  name: string;
  role: Role;
};

const SESSION_COOKIE = "erp_session";

export function isRole(value: string): value is Role {
  return ROLES.includes(value as Role);
}

export async function getSessionUser(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(SESSION_COOKIE)?.value;

  if (!raw) {
    return null;
  }

  const [name, role] = raw.split("|");
  if (!name || !role || !isRole(role)) {
    return null;
  }

  return { name, role };
}

export function createSessionValue(user: SessionUser) {
  return `${user.name}|${user.role}`;
}

export const AUTH_COOKIE_NAME = SESSION_COOKIE;
