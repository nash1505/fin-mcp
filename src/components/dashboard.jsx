import { TrendingUp, Wallet } from "lucide-react";
import { AreaChart,Area, BarChart,Bar, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { generateDistributionData } from "../constants/data";
import TransactionHistory from "./transactionHistory";
import HoldingsTable from "./holdingsTable";
import PortfolioOverview from "./portfolioOverview";
export default function DashboardPage({ portfolio, transactions, chartData }) {
  return (
    <>
      {portfolio && <PortfolioOverview portfolio={portfolio} />}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-800 rounded-xl border border-slate-700 p-6">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp size={20} className="text-blue-400" />
            <h3 className="text-lg font-bold text-white">Portfolio Performance</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="date" stroke="#94A3B8" />
              <YAxis stroke="#94A3B8" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1E293B', border: '1px solid #475569', borderRadius: '8px' }}
                labelStyle={{ color: '#E2E8F0' }}
              />
              <Legend />
              <Area type="monotone" dataKey="value" stroke="#3B82F6" fillOpacity={1} fill="url(#colorValue)" name="Portfolio Value" />
              <Area type="monotone" dataKey="benchmark" stroke="#10B981" fillOpacity={0} name="Benchmark" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
          <div className="flex items-center gap-2 mb-6">
            <Wallet size={20} className="text-purple-400" />
            <h3 className="text-lg font-bold text-white">Distribution</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={generateDistributionData()}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="name" stroke="#94A3B8" />
              <YAxis stroke="#94A3B8" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1E293B', border: '1px solid #475569', borderRadius: '8px' }}
                labelStyle={{ color: '#E2E8F0' }}
              />
              <Bar dataKey="value" fill="#A855F7" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          {portfolio && <HoldingsTable holdings={portfolio.holdings} />}
        </div>
        <div>
          {transactions && <TransactionHistory transactions={transactions} />}
        </div>
      </div>
    </>
  );
}