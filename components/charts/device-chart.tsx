"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts"
import { ChartDataPoint } from "@/lib/mock-data"

interface DeviceChartProps {
  data: ChartDataPoint[]
  className?: string
}

const COLORS = ['#3B82F6', '#8B5CF6', '#10B981']

export function DeviceChart({ data, className }: DeviceChartProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Traffic by Device</CardTitle>
        <CardDescription>User distribution across different devices</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={120}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}