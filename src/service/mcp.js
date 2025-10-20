class MCPService {
  static async authenticate(platform, credentials) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          token: `token_${platform}_${Date.now()}`,
          user: credentials.email,
        });
      }, 1500);
    });
  }

  static async fetchPortfolio(platform, token) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          holdings: [
            { id: 1, symbol: 'TCS', quantity: 10, currentPrice: 3500, buyPrice: 3200, gain: 9.4 },
            { id: 2, symbol: 'INFY', quantity: 25, currentPrice: 1850, buyPrice: 1650, gain: 12.1 },
            { id: 3, symbol: 'HDFC', quantity: 5, currentPrice: 2400, buyPrice: 2100, gain: 14.3 },
          ],
          totalValue: 125000,
          totalInvested: 105000,
          totalGain: 20000,
          dayChange: 1250,
        });
      }, 1000);
    });
  }

  static async fetchTransactions(platform, token) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, type: 'BUY', symbol: 'TCS', quantity: 10, price: 3200, date: '2024-10-15', amount: 32000 },
          { id: 2, type: 'SELL', symbol: 'INFY', quantity: 5, price: 1800, date: '2024-10-14', amount: 9000 },
          { id: 3, type: 'BUY', symbol: 'HDFC', quantity: 5, price: 2100, date: '2024-10-10', amount: 10500 },
          { id: 4, type: 'DIVIDEND', symbol: 'TCS', quantity: 0, price: 0, date: '2024-10-05', amount: 500 },
        ]);
      }, 800);
    });
  }

  static async executeCommand(platform, token, command, params) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          result: `Executed ${command} on ${platform}`,
          data: params,
        });
      }, 1200);
    });
  }
}
export default MCPService;