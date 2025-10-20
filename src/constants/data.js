
const generateChartData = () => [
  { date: 'Oct 1', value: 95000, benchmark: 94000 },
  { date: 'Oct 5', value: 98500, benchmark: 96500 },
  { date: 'Oct 10', value: 102000, benchmark: 100000 },
  { date: 'Oct 15', value: 105500, benchmark: 102500 },
  { date: 'Oct 20', value: 125000, benchmark: 118000 },
];

const generateDistributionData = () => [
  { name: 'Stocks', value: 65000 },
  { name: 'Mutual Funds', value: 35000 },
  { name: 'ETFs', value: 25000 },
];
export { generateChartData, generateDistributionData };