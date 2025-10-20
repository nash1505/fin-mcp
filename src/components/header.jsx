import { Home, LogOut, Settings } from "lucide-react";
import { PLATFORM_CONFIG } from "../constants/FinHub";
import useAuth from "../hooks/useAuth";
import PageLink from "./buttonLink";

export default function Header({ currentPage }) {
  const { user, logout } = useAuth();
  const platformConfig = PLATFORM_CONFIG[user.platform];

  return (
    <header className="bg-slate-800/50 backdrop-blur border-b border-slate-700 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            FinDash
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-slate-700 rounded-full">
            <span className="text-lg">{platformConfig.icon}</span>
            <span className="text-sm font-medium text-slate-300">{platformConfig.name}</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <PageLink to="/" icon={Home} label="Dashboard" isActive={currentPage === 'dashboard'} />
            <PageLink to="/mcp" icon={Settings} label="MCP Console" isActive={currentPage === 'mcp'} />
          </nav>

          <div className="w-px h-6 bg-slate-600" />

          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-400">{user.email}</span>
            <button
              onClick={logout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition-colors text-sm font-medium"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
