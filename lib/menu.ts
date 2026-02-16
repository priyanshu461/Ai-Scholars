import type { Role } from "@/lib/auth";

export type MenuItem = {
  href: string;
  label: string;
};

const shared: MenuItem[] = [
  { href: "analytics", label: "Analytics" },
  { href: "settings", label: "Settings" }
];

export const roleMenus: Record<Role, MenuItem[]> = {
  admin: [
    { href: "", label: "Overview" },
    { href: "students", label: "Students" },
    { href: "classes", label: "Classes" },
    ...shared
  ],
  teacher: [
    { href: "", label: "Overview" },
    { href: "classes", label: "My Classes" },
    { href: "students", label: "Student Progress" },
    ...shared
  ],
  student: [
    { href: "", label: "Overview" },
    { href: "classes", label: "My Courses" },
    { href: "analytics", label: "Performance" },
    { href: "settings", label: "Profile Settings" }
  ]
};

export const roleSummary: Record<Role, string> = {
  admin: "Manage users, operations, reports, and organization-wide workflows.",
  teacher: "Deliver classes, monitor learners, and automate teaching workflows.",
  student: "Track courses, performance, schedules, and learning tasks in one panel."
};
