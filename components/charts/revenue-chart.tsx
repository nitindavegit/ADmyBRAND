"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"
import { ChartDataPoint } from "@/lib/mock-data"

interface RevenueChartProps {
  data: ChartDataPoint[]
  className?: string
}

export function RevenueChart({ data, className }: RevenueChartProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Revenue & Conversions Trend</CardTitle>
        <CardDescription>Monthly performance over the last 12 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis 
              dataKey="name" 
              className="text-muted-foreground"
              fontSize={12}
            />
            <YAxis 
              className="text-muted-foreground"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px',
                color: 'hsl(var(--card-foreground))'
              }}
              formatter={(value, name) => [
                name === 'revenue' ? `$${Number(value).toLocaleString()}` : Number(value).toLocaleString(),
                name === 'revenue' ? 'Revenue' : name === 'users' ? 'Users' : 'Conversions'
              ]}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#3B82F6" 
              strokeWidth={3}
              dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
              name="Revenue"
            />
            <Line 
              type="monotone" 
              dataKey="conversions" 
              stroke="#8B5CF6" 
              strokeWidth={3}
              dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
              name="Conversions"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}