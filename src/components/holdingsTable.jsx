export default function HoldingsTable({ holdings }) {
  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
      <h3 className="text-lg font-bold text-white mb-4">Holdings</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-3 px-2 text-slate-400 font-medium">Symbol</th>
              <th className="text-right py-3 px-2 text-slate-400 font-medium">Qty</th>
              <th className="text-right py-3 px-2 text-slate-400 font-medium">Buy Price</th>
              <th className="text-right py-3 px-2 text-slate-400 font-medium">Current Price</th>
              <th className="text-right py-3 px-2 text-slate-400 font-medium">Gain %</th>
              <th className="text-right py-3 px-2 text-slate-400 font-medium">Value</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((holding) => (
              <tr key={holding.id} className="border-b border-slate-700 hover:bg-slate-700/50">
                <td className="py-3 px-2 text-white font-medium">{holding.symbol}</td>
                <td className="text-right py-3 px-2 text-slate-300">{holding.quantity}</td>
                <td className="text-right py-3 px-2 text-slate-300">₹{holding.buyPrice}</td>
                <td className="text-right py-3 px-2 text-white font-medium">₹{holding.currentPrice}</td>
                <td className={`text-right py-3 px-2 font-medium ${holding.gain > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {holding.gain > 0 ? '+' : ''}{holding.gain}%
                </td>
                <td className="text-right py-3 px-2 text-slate-300">
                  ₹{(holding.currentPrice * holding.quantity).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}