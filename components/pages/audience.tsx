"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Users, 
  UserPlus, 
  Globe, 
  Smartphone, 
  Monitor, 
  Tablet,
  MapPin,
  Calendar,
  TrendingUp,
  TrendingDown
} from "lucide-react"
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const audienceData = [
  { name: '18-24', value: 23.4, users: 12847 },
  { name: '25-34', value: 34.2, users: 18734 },
  { name: '35-44', value: 28.1, users: 15392 },
  { name: '45-54', value: 10.8, users: 5923 },
  { name: '55+', value: 3.5, users: 1920 }
]

const locationData = [
  { country: 'United States', users: 28947, percentage: 42.3 },
  { country: 'United Kingdom', users: 15832, percentage: 23.1 },
  { country: 'Canada', users: 9847, percentage: 14.4 },
  { country: 'Australia', users: 6234, percentage: 9.1 },
  { country: 'Germany', users: 4521, percentage: 6.6 },
  { country: 'France', users: 3089, percentage: 4.5 }
]

const deviceData = [
  { name: 'Desktop', value: 58.4, color: '#3B82F6' },
  { name: 'Mobile', value: 32.1, color: '#8B5CF6' },
  { name: 'Tablet', value: 9.5, color: '#10B981' }
]

const interestData = [
  { interest: 'Technology', score: 92 },
  { interest: 'Business', score: 87 },
  { interest: 'Marketing', score: 84 },
  { interest: 'Design', score: 79 },
  { interest: 'Finance', score: 73 },
  { interest: 'Health', score: 68 }
]

export function Audience() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Audience</h1>
          <p className="text-muted-foreground">Understand your audience demographics and behavior</p>
        </div>
        <Button>
          <UserPlus className="h-4 w-4 mr-2" />
          Create Segment
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                <p className="text-2xl font-bold">54,816</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+12.5%</span>
                </div>
              </div>
              <div className="h-12 w-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">New Users</p>
                <p className="text-2xl font-bold">8,432</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+8.2%</span>
                </div>
              </div>
              <div className="h-12 w-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <UserPlus className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Returning Users</p>
                <p className="text-2xl font-bold">46,384</p>
                <div className="flex items-center mt-1">
                  <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                  <span className="text-sm text-red-500">-2.4%</span>
                </div>
              </div>
              <div className="h-12 w-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg. Session</p>
                <p className="text-2xl font-bold">4m 32s</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+15.3%</span>
                </div>
              </div>
              <div className="h-12 w-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                <Globe className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="demographics" className="space-y-4">
        <TabsList>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="location">Location</TabsTrigger>
          <TabsTrigger value="devices">Devices</TabsTrigger>
          <TabsTrigger value="interests">Interests</TabsTrigger>
        </TabsList>

        <TabsContent value="demographics" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Age Distribution</CardTitle>
                <CardDescription>User age groups breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={audienceData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="name" className="text-muted-foreground" fontSize={12} />
                    <YAxis className="text-muted-foreground" fontSize={12} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '6px',
                        color: 'hsl(var(--card-foreground))'
                      }}
                      formatter={(value, name) => [
                        name === 'value' ? `${value}%` : Number(value).toLocaleString(),
                        name === 'value' ? 'Percentage' : 'Users'
                      ]}
                    />
                    <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gender Distribution</CardTitle>
                <CardDescription>User gender breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Male</span>
                    <span className="text-sm text-muted-foreground">52.3%</span>
                  </div>
                  <Progress value={52.3} className="h-3" />
                  
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Female</span>
                    <span className="text-sm text-muted-foreground">45.7%</span>
                  </div>
                  <Progress value={45.7} className="h-3" />
                  
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Other</span>
                    <span className="text-sm text-muted-foreground">2.0%</span>
                  </div>
                  <Progress value={2.0} className="h-3" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="location" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Countries</CardTitle>
              <CardDescription>Users by geographic location</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {locationData.map((location, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="h-8 w-8 bg-muted rounded-full flex items-center justify-center">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">{location.country}</p>
                        <p className="text-sm text-muted-foreground">{location.users.toLocaleString()} users</p>
                      </div>
                    </div>
                    <Badge variant="secondary">{location.percentage}%</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="devices" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Device Types</CardTitle>
                <CardDescription>User device preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '6px',
                        color: 'hsl(var(--card-foreground))'
                      }}
                      formatter={(value) => [`${value}%`, 'Share']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Device Details</CardTitle>
                <CardDescription>Detailed device breakdown</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Monitor className="h-5 w-5 text-blue-500" />
                    <span className="font-medium">Desktop</span>
                  </div>
                  <span className="text-sm text-muted-foreground">58.4%</span>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="h-5 w-5 text-purple-500" />
                    <span className="font-medium">Mobile</span>
                  </div>
                  <span className="text-sm text-muted-foreground">32.1%</span>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Tablet className="h-5 w-5 text-green-500" />
                    <span className="font-medium">Tablet</span>
                  </div>
                  <span className="text-sm text-muted-foreground">9.5%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="interests" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Interests</CardTitle>
              <CardDescription>Top interests based on user behavior</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {interestData.map((interest, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{interest.interest}</span>
                      <span className="text-sm text-muted-foreground">{interest.score}/100</span>
                    </div>
                    <Progress value={interest.score} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}