export default function TransactionHistory({ transactions }) {
  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
      <h3 className="text-lg font-bold text-white mb-4">Recent Transactions</h3>
      <div className="space-y-2">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
            <div className="flex-1">
              <p className="text-white font-medium">{tx.symbol}</p>
              <p className="text-xs text-slate-400">{tx.date}</p>
            </div>
            <div className="text-right">
              <p className={`font-medium ${tx.type === 'BUY' || tx.type === 'DIVIDEND' ? 'text-green-400' : 'text-red-400'}`}>
                {tx.type === 'DIVIDEND' ? '+' : tx.type === 'BUY' ? '-' : '+'}₹{tx.amount.toLocaleString()}
              </p>
              <p className="text-xs text-slate-400">{tx.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}