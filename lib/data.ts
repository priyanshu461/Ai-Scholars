import type { LucideIcon } from "lucide-react";
import {
  Banknote,
  Briefcase,
  ChartNoAxesCombined,
  ClipboardCheck,
  Package,
  Settings,
  Users
} from "lucide-react";

export type Kpi = {
  label: string;
  value: string;
  trend: string;
};

export type ModuleCard = {
  name: string;
  description: string;
  icon: LucideIcon;
  status: "Live" | "Setup" | "Beta";
};

export const kpis: Kpi[] = [
  { label: "Monthly Revenue", value: "$128,400", trend: "+12.2%" },
  { label: "Open Sales Orders", value: "342", trend: "+5.8%" },
  { label: "Inventory Health", value: "98.4%", trend: "+1.1%" },
  { label: "Team Productivity", value: "89", trend: "+3.4%" }
];

export const modules: ModuleCard[] = [
  {
    name: "CRM & Sales",
    description: "Leads, pipelines, quotations, and customer lifecycle management.",
    icon: Users,
    status: "Live"
  },
  {
    name: "Finance",
    description: "Invoicing, expenses, budgeting, and multi-ledger ready bookkeeping.",
    icon: Banknote,
    status: "Live"
  },
  {
    name: "Inventory",
    description: "Warehouses, SKUs, procurement, and low-stock automation alerts.",
    icon: Package,
    status: "Live"
  },
  {
    name: "HR & Payroll",
    description: "Attendance, leave, onboarding, performance, and payroll workflows.",
    icon: Briefcase,
    status: "Setup"
  },
  {
    name: "Projects",
    description: "Task boards, timesheets, milestones, and delivery monitoring.",
    icon: ClipboardCheck,
    status: "Beta"
  },
  {
    name: "Analytics",
    description: "Real-time dashboards, AI reports, and cross-module insights.",
    icon: ChartNoAxesCombined,
    status: "Live"
  }
];

export const navigation = [
  "Dashboard",
  "Sales",
  "Inventory",
  "Finance",
  "HR",
  "Projects",
  "Reports",
  "Settings"
];

export const settingsIcon = Settings;
