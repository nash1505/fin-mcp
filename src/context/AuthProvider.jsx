import { useState,useCallback } from "react";
import { generateChartData } from "../constants/data";
import MCPService from "../service/mcp";
import StorageService from "../service/storage";
import { AuthContext } from "../hooks/useAuth";
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => StorageService.getUser());
  const [isLoading, setIsLoading] = useState(false);
  const [portfolio, setPortfolio] = useState(null);
  const [transactions, setTransactions] = useState(null);
  const [chartData, setChartData] = useState(generateChartData());
  const login = useCallback(async (platform, email, password) => {
    
    setIsLoading(true);
    try {
      const authResponse = await MCPService.authenticate(platform, { email, password });
      if (authResponse.success) {
        const userData = {
          platform,
          email,
          token: authResponse.token,
          loginTime: Date.now(),
        };
        StorageService.setUser(userData);
        setUser(userData);

        const [portfolioData, txData] = await Promise.all([
          MCPService.fetchPortfolio(platform, authResponse.token),
          MCPService.fetchTransactions(platform, authResponse.token),
        ]);

        setPortfolio(portfolioData);
        setTransactions(txData);
      }
    } catch (err) {
      console.error('Login failed:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    StorageService.clearUser();
    setUser(null);
    setPortfolio(null);
    setTransactions(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        portfolio,
        transactions,
        chartData,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}