"use client"

import { useState, useEffect } from "react"
import { Analytics } from "@/components/pages/analytics"
import { Campaigns } from "@/components/pages/campaigns"
import { Audience } from "@/components/pages/audience"
import { Reports } from "@/components/pages/reports"
import { Calendar } from "@/components/pages/calendar"
import { Settings } from "@/components/pages/settings"
import { Help } from "@/components/pages/help"
import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { MetricCard } from "@/components/ui/metric-card"
import { RevenueChart } from "@/components/charts/revenue-chart"
import { ChannelChart } from "@/components/charts/channel-chart"
import { DeviceChart } from "@/components/charts/device-chart"
import { DataTable } from "@/components/ui/data-table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  metricsData, 
  revenueChartData, 
  deviceData, 
  campaignData, 
  topChannelsData,
  updateMetricsData,
  type MetricData
} from "@/lib/mock-data"
import { Skeleton } from "@/components/ui/skeleton"

export default function Dashboard() {
  const [metrics, setMetrics] = useState<MetricData[]>(metricsData)
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState('dashboard')

  useEffect(() => {
    // Simulate initial loading
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    // Simulate real-time updates
    const updateTimer = setInterval(() => {
      setMetrics(updateMetricsData())
    }, 5000)

    return () => {
      clearTimeout(loadingTimer)
      clearInterval(updateTimer)
    }
  }, [])

  const handleNavigate = (page: string) => {
    setCurrentPage(page)
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'analytics':
        return <Analytics />
      case 'campaigns':
        return <Campaigns />
      case 'audience':
        return <Audience />
      case 'reports':
        return <Reports />
      case 'calendar':
        return <Calendar />
      case 'settings':
        return <Settings />
      case 'help':
        return <Help />
      default:
        return renderDashboard()
    }
  }

  const renderDashboard = () => (
    <>
      {/* Metrics Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.id}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            trend={metric.trend}
            icon={metric.icon}
            color={metric.color}
            className="animate-in fade-in duration-500"
          />
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <RevenueChart 
          data={revenueChartData} 
          className="animate-in slide-in-from-left duration-700"
        />
        <ChannelChart 
          data={topChannelsData} 
          className="animate-in slide-in-from-right duration-700"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <DeviceChart 
          data={deviceData} 
          className="animate-in slide-in-from-bottom duration-700"
        />
        <Card className="lg:col-span-2 animate-in slide-in-from-bottom duration-700 delay-150">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates from your campaigns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
              <div>
                <p className="text-sm font-medium">Summer Sale 2024 campaign achieved 125% of target conversions</p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
              <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
              <div>
                <p className="text-sm font-medium">New audience segment created: Mobile Users 18-24</p>
                <p className="text-xs text-muted-foreground">15 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
              <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
              <div>
                <p className="text-sm font-medium">Budget alert: Q4 campaign at 85% spend</p>
                <p className="text-xs text-muted-foreground">1 hour ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Table */}
      <Card className="animate-in slide-in-from-bottom duration-700 delay-300">
        <CardHeader>
          <CardTitle>Campaign Performance</CardTitle>
          <CardDescription>Detailed breakdown of your marketing campaigns</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable data={campaignData} />
        </CardContent>
      </Card>
    </>
  )

  if (isLoading) {
    return (
      <div className="flex h-screen bg-background">
        <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6 space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-8 w-32" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                      <Skeleton className="h-12 w-12 rounded-lg" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-4 w-64" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-[350px] w-full" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-4 w-64" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-[350px] w-full" />
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
      <div className="flex-1 flex flex-col overflow-hidden md:ml-0">
        <Header />
        <main className="flex-1 overflow-auto p-4 md:p-6 space-y-4 md:space-y-6 pt-16 md:pt-4">
          {renderCurrentPage()}
        </main>
      </div>
    </div>
  )
}