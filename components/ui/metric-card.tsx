"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown, DollarSign, Users, Target, DivideIcon as LucideIcon } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  change: number
  trend: 'up' | 'down'
  icon: string
  color: string
  className?: string
}

const iconMap: Record<string, typeof LucideIcon> = {
  DollarSign,
  Users,
  Target,
  TrendingUp
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  trend, 
  icon, 
  color, 
  className 
}: MetricCardProps) {
  const IconComponent = iconMap[icon] || TrendingUp
  const isPositive = trend === 'up'

  return (
    <Card className={cn("touch-target", className)}>
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-xl md:text-2xl font-bold">{value}</p>
            <div className="flex items-center space-x-1">
              {isPositive ? (
                <TrendingUp className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
              <span className={cn(
                "text-sm font-medium",
                isPositive ? "text-green-500" : "text-red-500"
              )}>
                {isPositive ? '+' : ''}{change.toFixed(1)}%
              </span>
            </div>
          </div>
          <div className={cn(
            "h-12 w-12 rounded-lg flex items-center justify-center bg-gradient-to-br",
            color
          )}>
            <IconComponent className="h-6 w-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}