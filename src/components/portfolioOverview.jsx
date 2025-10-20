export default function PortfolioOverview({ portfolio }) {
  const stats = [
    {
      label: "Total Value",
      value: `₹${portfolio.totalValue.toLocaleString()}`,
      change: "+5.6%",
      positive: true,
    },
    {
      label: "Total Invested",
      value: `₹${portfolio.totalInvested.toLocaleString()}`,
      change: "-",
      positive: false,
    },
    {
      label: "Total Gain",
      value: `₹${portfolio.totalGain.toLocaleString()}`,
      change: "+19%",
      positive: true,
    },
    {
      label: "Day Change",
      value: `₹${portfolio.dayChange.toLocaleString()}`,
      change: "+1.2%",
      positive: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-slate-800 rounded-lg border border-slate-700 p-4"
        >
          <p className="text-slate-400 text-sm mb-2">{stat.label}</p>
          <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
          <p
            className={`text-xs ${
              stat.positive ? "text-green-400" : "text-slate-500"
            }`}
          >
            {stat.change}
          </p>
        </div>
      ))}
    </div>
  );
}
