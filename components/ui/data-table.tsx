"use client"

import * as React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowUpDown, ChevronLeft, ChevronRight, Download, Search } from "lucide-react"
import { cn } from "@/lib/utils"

interface TableRowData {
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

interface DataTableProps {
  data: TableRowData[]
  className?: string
}

export function DataTable({ data, className }: DataTableProps) {
  const [filteredData, setFilteredData] = React.useState(data)
  const [searchTerm, setSearchTerm] = React.useState("")
  const [sortConfig, setSortConfig] = React.useState<{
    key: keyof TableRowData
    direction: 'asc' | 'desc'
  } | null>(null)
  const [currentPage, setCurrentPage] = React.useState(1)
  const itemsPerPage = 5

  React.useEffect(() => {
    let filtered = data.filter(item =>
      item.campaign.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (sortConfig) {
      filtered.sort((a, b) => {
        const aValue = a[sortConfig.key]
        const bValue = b[sortConfig.key]
        
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortConfig.direction === 'asc' 
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue)
        }
        
        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue
        }
        
        return 0
      })
    }

    setFilteredData(filtered)
    setCurrentPage(1)
  }, [data, searchTerm, sortConfig])

  const handleSort = (key: keyof TableRowData) => {
    setSortConfig(current => ({
      key,
      direction: current?.key === key && current.direction === 'asc' ? 'desc' : 'asc'
    }))
  }

  const exportData = () => {
    const csvContent = [
      ['Campaign', 'Impressions', 'Clicks', 'CTR', 'Cost', 'Conversions', 'Revenue', 'Status', 'Date'],
      ...filteredData.map(row => [
        row.campaign,
        row.impressions,
        row.clicks,
        row.ctr,
        row.cost,
        row.conversions,
        row.revenue,
        row.status,
        row.date
      ])
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'campaign-data.csv'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage)

  const getStatusBadge = (status: string) => {
    const variants = {
      active: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      paused: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      completed: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    }
    
    return (
      <Badge className={cn("capitalize", variants[status as keyof typeof variants])}>
        {status}
      </Badge>
    )
  }

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search campaigns..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-64"
          />
        </div>
        <Button onClick={exportData} variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Export CSV
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort('campaign')} className="flex items-center gap-1 p-0 h-auto font-medium">
                  Campaign
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort('impressions')} className="flex items-center gap-1 p-0 h-auto font-medium">
                  Impressions
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort('clicks')} className="flex items-center gap-1 p-0 h-auto font-medium">
                  Clicks
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort('ctr')} className="flex items-center gap-1 p-0 h-auto font-medium">
                  CTR
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort('cost')} className="flex items-center gap-1 p-0 h-auto font-medium">
                  Cost
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort('conversions')} className="flex items-center gap-1 p-0 h-auto font-medium">
                  Conversions
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort('revenue')} className="flex items-center gap-1 p-0 h-auto font-medium">
                  Revenue
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.id} className="hover:bg-muted/50 transition-colors">
                <TableCell className="font-medium">{row.campaign}</TableCell>
                <TableCell>{row.impressions.toLocaleString()}</TableCell>
                <TableCell>{row.clicks.toLocaleString()}</TableCell>
                <TableCell>{row.ctr.toFixed(2)}%</TableCell>
                <TableCell>${row.cost.toFixed(2)}</TableCell>
                <TableCell>{row.conversions.toLocaleString()}</TableCell>
                <TableCell>${row.revenue.toFixed(2)}</TableCell>
                <TableCell>{getStatusBadge(row.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredData.length)} of {filteredData.length} entries
        </p>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          <span className="text-sm font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}