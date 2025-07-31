export interface MetricData {
  id: string
  title: string
  value: string
  change: number
  trend: 'up' | 'down'
  icon: string
  color: string
}

export interface ChartDataPoint {
  name: string
  value?: number
  date?: string
  revenue?: number
  users?: number
  conversions?: number
}

export interface TableRowData {
  id: string
  campaign: string
  impressions: number
  clicks: number
  ctr: number
  cost: number
  conversions: number
  revenue: number
  status: 'active' | 'paused' | 'completed'
  date: string
}

export const metricsData: MetricData[] = [
  {
    id: '1',
    title: 'Total Revenue',
    value: '$2,847,394',
    change: 12.5,
    trend: 'up',
    icon: 'DollarSign',
    color: 'from-green-400 to-green-600'
  },
  {
    id: '2',
    title: 'Active Users',
    value: '89,432',
    change: 8.2,
    trend: 'up',
    icon: 'Users',
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: '3',
    title: 'Conversions',
    value: '12,847',
    change: -2.4,
    trend: 'down',
    icon: 'Target',
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: '4',
    title: 'Growth Rate',
    value: '15.8%',
    change: 5.1,
    trend: 'up',
    icon: 'TrendingUp',
    color: 'from-orange-400 to-orange-600'
  }
]

export const revenueChartData: ChartDataPoint[] = [
  { name: 'Jan', revenue: 186000, users: 4200, conversions: 850 },
  { name: 'Feb', revenue: 205000, users: 4800, conversions: 920 },
  { name: 'Mar', revenue: 189000, users: 4500, conversions: 780 },
  { name: 'Apr', revenue: 243000, users: 5200, conversions: 1100 },
  { name: 'May', revenue: 267000, users: 5800, conversions: 1250 },
  { name: 'Jun', revenue: 298000, users: 6200, conversions: 1380 },
  { name: 'Jul', revenue: 312000, users: 6500, conversions: 1420 },
  { name: 'Aug', revenue: 287000, users: 6100, conversions: 1300 },
  { name: 'Sep', revenue: 334000, users: 7200, conversions: 1580 },
  { name: 'Oct', revenue: 356000, users: 7800, conversions: 1650 },
  { name: 'Nov', revenue: 389000, users: 8200, conversions: 1780 },
  { name: 'Dec', revenue: 421000, users: 8900, conversions: 1920 }
]

export const deviceData: ChartDataPoint[] = [
  { name: 'Desktop', value: 58.4 },
  { name: 'Mobile', value: 32.1 },
  { name: 'Tablet', value: 9.5 }
]

export const campaignData: TableRowData[] = [
  {
    id: '1',
    campaign: 'Summer Sale 2024',
    impressions: 847392,
    clicks: 23847,
    ctr: 2.81,
    cost: 15847.32,
    conversions: 1847,
    revenue: 98472.18,
    status: 'active',
    date: '2024-01-15'
  },
  {
    id: '2',
    campaign: 'Brand Awareness Q4',
    impressions: 672834,
    clicks: 18293,
    ctr: 2.72,
    cost: 12847.91,
    conversions: 1293,
    revenue: 76381.45,
    status: 'active',
    date: '2024-01-12'
  },
  {
    id: '3',
    campaign: 'Product Launch - Tech',
    impressions: 934821,
    clicks: 31847,
    ctr: 3.41,
    cost: 23847.65,
    conversions: 2847,
    revenue: 147382.91,
    status: 'completed',
    date: '2024-01-10'
  },
  {
    id: '4',
    campaign: 'Holiday Special',
    impressions: 582947,
    clicks: 15847,
    ctr: 2.72,
    cost: 9847.33,
    conversions: 1147,
    revenue: 58472.84,
    status: 'paused',
    date: '2024-01-08'
  },
  {
    id: '5',
    campaign: 'Mobile App Promo',
    impressions: 743928,
    clicks: 21847,
    ctr: 2.94,
    cost: 18472.55,
    conversions: 1847,
    revenue: 89473.67,
    status: 'active',
    date: '2024-01-05'
  }
]

export const topChannelsData: ChartDataPoint[] = [
  { name: 'Google Ads', value: 147832 },
  { name: 'Facebook', value: 98456 },
  { name: 'Instagram', value: 76234 },
  { name: 'LinkedIn', value: 54321 },
  { name: 'Twitter', value: 43211 },
  { name: 'TikTok', value: 32187 }
]

// Simulate real-time data updates
export const updateMetricsData = (): MetricData[] => {
  return metricsData.map(metric => ({
    ...metric,
    value: metric.title === 'Total Revenue' 
      ? `$${(Math.random() * 1000000 + 2500000).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
      : metric.title === 'Active Users'
      ? `${(Math.random() * 10000 + 85000).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
      : metric.title === 'Conversions'
      ? `${(Math.random() * 2000 + 12000).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
      : `${(Math.random() * 5 + 13).toFixed(1)}%`,
    change: Math.random() * 20 - 5,
    trend: Math.random() > 0.5 ? 'up' : 'down'
  }))
}