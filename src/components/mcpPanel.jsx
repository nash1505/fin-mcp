import { useState } from "react";
import MCPService from "../service/mcp";
import { PLATFORM_CONFIG } from "../constants/FinHub";
export default function MCPPanel({ user }) {
  const [command, setCommand] = useState("");
  const [params, setParams] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleExecute = async () => {
    if (!command) return;

    setLoading(true);
    try {
      const response = await MCPService.executeCommand(
        user.platform,
        user.token,
        command,
        params ? JSON.parse(params) : {}
      );
      setResult(response);
    } catch (err) {
      setResult({ success: false, error: "Invalid JSON parameters" });
    } finally {
      setLoading(false);
    }
  };

  const platformConfig = PLATFORM_CONFIG[user.platform];

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl">{platformConfig.icon}</span>
        <h2 className="text-xl font-bold text-white">
          {platformConfig.name} MCP Console
        </h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Command
          </label>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            placeholder="e.g., getBalance, placeOrder, getHoldings"
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Parameters (JSON)
          </label>
          <textarea
            value={params}
            onChange={(e) => setParams(e.target.value)}
            placeholder='{"key": "value"}'
            rows={3}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono text-sm"
          />
        </div>

        <button
          onClick={handleExecute}
          disabled={loading || !command}
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader size={18} className="animate-spin" />
              Executing...
            </>
          ) : (
            "Execute"
          )}
        </button>

        {result && (
          <div className="mt-6 p-4 bg-slate-700 rounded-lg border border-slate-600">
            <p className="text-xs font-mono text-slate-300 whitespace-pre-wrap overflow-auto max-h-40">
              {JSON.stringify(result, null, 2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
