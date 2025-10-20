export const PLATFORMS = {
  UPSTOX: 'upstox',
  GROWW: 'groww',
  ZERODHA: 'zerodha',
};

export const PLATFORM_CONFIG = {
  [PLATFORMS.UPSTOX]: {
    name: 'Upstox',
    color: '#1E88E5',
    icon: '📱',
    mcp: 'upstox-mcp',
  },
  [PLATFORMS.GROWW]: {
    name: 'Groww',
    color: '#00C853',
    icon: '🌱',
    mcp: 'groww-mcp',
  },
  [PLATFORMS.ZERODHA]: {
    name: 'Zerodha',
    color: '#FF6B35',
    icon: '🦅',
    mcp: 'zerodha-mcp',
  },
};