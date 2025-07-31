"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Download, 
  FileText, 
  Calendar, 
  Filter, 
  Search,
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Eye
} from "lucide-react"

const reports = [
  {
    id: 1,
    name: "Monthly Performance Report",
    description: "Comprehensive overview of all marketing activities",
    type: "Performance",
    lastGenerated: "2024-01-15",
    status: "ready",
    size: "2.4 MB"
  },
  {
    id: 2,
    name: "Campaign ROI Analysis",
    description: "Return on investment analysis for all campaigns",
    type: "ROI",
    lastGenerated: "2024-01-14",
    status: "ready",
    size: "1.8 MB"
  },
  {
    id: 3,
    name: "Audience Demographics Report",
    description: "Detailed breakdown of audience segments",
    type: "Audience",
    lastGenerated: "2024-01-13",
    status: "generating",
    size: "3.2 MB"
  },
  {
    id: 4,
    name: "Traffic Sources Analysis",
    description: "Analysis of traffic sources and their performance",
    type: "Traffic",
    lastGenerated: "2024-01-12",
    status: "ready",
    size: "1.5 MB"
  },
  {
    id: 5,
    name: "Conversion Funnel Report",
    description: "Step-by-step conversion analysis",
    type: "Conversion",
    lastGenerated: "2024-01-11",
    status: "ready",
    size: "2.1 MB"
  }
]

const quickStats = [
  {
    title: "Reports Generated",
    value: "247",
    change: "+12%",
    icon: FileText,
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Data Points",
    value: "1.2M",
    change: "+8%",
    icon: BarChart3,
    color: "from-green-400 to-green-600"
  },
  {
    title: "Insights Found",
    value: "89",
    change: "+23%",
    icon: TrendingUp,
    color: "from-purple-400 to-purple-600"
  },
  {
    title: "Export Downloads",
    value: "156",
    change: "+15%",
    icon: Download,
    color: "from-orange-400 to-orange-600"
  }
]

export function Reports() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready': return 'default'
      case 'generating': return 'secondary'
      case 'error': return 'destructive'
      default: return 'secondary'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Reports</h1>
          <p className="text-muted-foreground">Generate and download detailed analytics reports</p>
        </div>
        <Button>
          <FileText className="h-4 w-4 mr-2" />
          Generate Report
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {quickStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-green-500">{stat.change}</p>
                </div>
                <div className={`h-12 w-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Available Reports</CardTitle>
              <CardDescription>Download or generate new reports</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search reports..." className="pl-10 w-64" />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="border rounded-lg p-6 hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{report.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{report.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>Type: {report.type}</span>
                        <span>•</span>
                        <span>Last generated: {report.lastGenerated}</span>
                        <span>•</span>
                        <span>Size: {report.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={getStatusColor(report.status)}>
                      {report.status}
                    </Badge>
                    {report.status === 'ready' && (
                      <Button size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Export</CardTitle>
            <CardDescription>Export specific data sets</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              <Users className="h-4 w-4 mr-2" />
              Export Audience Data
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <DollarSign className="h-4 w-4 mr-2" />
              Export Revenue Data
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Eye className="h-4 w-4 mr-2" />
              Export Traffic Data
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <BarChart3 className="h-4 w-4 mr-2" />
              Export Campaign Data
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Scheduled Reports</CardTitle>
            <CardDescription>Automatically generated reports</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Weekly Performance</p>
                <p className="text-sm text-muted-foreground">Every Monday at 9:00 AM</p>
              </div>
              <Badge variant="default">Active</Badge>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Monthly Summary</p>
                <p className="text-sm text-muted-foreground">1st of every month</p>
              </div>
              <Badge variant="default">Active</Badge>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Quarterly Review</p>
                <p className="text-sm text-muted-foreground">Every 3 months</p>
              </div>
              <Badge variant="secondary">Paused</Badge>
            </div>
            <Button variant="outline" className="w-full">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule New Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}