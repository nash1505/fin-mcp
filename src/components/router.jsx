import useAuth from "../hooks/useAuth";
import {useState, useEffect} from "react";
import LoginScreen from "./login";
import Header from "./header";
import DashboardPage from "./dashboard";
import MCPConsolePage from "./mcpPanel";
import { Loader } from "lucide-react";

export default function Router() {
  const { user, portfolio, transactions, chartData, isLoading } = useAuth();
  const [currentPage, setCurrentPage] =useState('dashboard');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || '/';
      if (hash === '/' || hash === '') {
        setCurrentPage('dashboard');
      } else if (hash === '/mcp') {
        setCurrentPage('mcp');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (!user) {
    return <LoginScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header currentPage={currentPage} />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {isLoading ? (
          <div className="flex items-center justify-center h-96">
            <Loader size={32} className="animate-spin text-blue-400" />
          </div>
        ) : (
          <>
            {currentPage === 'dashboard' && (
              <DashboardPage portfolio={portfolio} transactions={transactions} chartData={chartData} />
            )}
            {currentPage === 'mcp' && <MCPConsolePage user={user} />}
          </>
        )}
      </main>
    </div>
  );
}