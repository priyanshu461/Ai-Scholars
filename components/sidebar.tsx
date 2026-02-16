import { navigation, settingsIcon as SettingsIcon } from "@/lib/data";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <h1>Ai Scholars ERP</h1>
        <p>Next.js 15 • React 19</p>
      </div>

      <nav>
        {navigation.map((item) => (
          <button key={item} className={item === "Dashboard" ? "active" : ""}>
            {item}
          </button>
        ))}
      </nav>

      <div className="settings">
        <SettingsIcon size={16} />
        <span>System Settings</span>
      </div>
    </aside>
  );
}
