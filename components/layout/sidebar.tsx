"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { 
  BarChart3, 
  Users, 
  Settings, 
  HelpCircle, 
  Menu,
  X,
  TrendingUp,
  Target,
  Calendar,
  FileText
} from "lucide-react"

interface SidebarProps {
  className?: string
  onNavigate?: (page: string) => void
  currentPage?: string
}

const navigation = [
  { name: 'Dashboard', icon: BarChart3, page: 'dashboard' },
  { name: 'Analytics', icon: TrendingUp, page: 'analytics' },
  { name: 'Campaigns', icon: Target, page: 'campaigns' },
  { name: 'Audience', icon: Users, page: 'audience' },
  { name: 'Reports', icon: FileText, page: 'reports' },
  { name: 'Calendar', icon: Calendar, page: 'calendar' },
]

const secondaryNavigation = [
  { name: 'Settings', icon: Settings, page: 'settings' },
  { name: 'Help', icon: HelpCircle, page: 'help' },
]

export function Sidebar({ className, onNavigate, currentPage = 'dashboard' }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={() => setMobileOpen(false)}
        />
      )}
      
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-50 h-11 w-11 p-0 md:hidden"
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Open menu</span>
      </Button>

      <div className={cn(
        "relative flex flex-col h-full bg-card border-r transition-all duration-300",
        "md:relative md:translate-x-0",
        collapsed ? "w-16" : "w-64",
        // Mobile styles
        "fixed inset-y-0 left-0 z-50 md:z-auto",
        mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        className
      )}>
        <div className="flex items-center justify-between p-4">
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg">ADmyBRAND</span>
            </div>
          )}
          <div className="flex items-center space-x-2">
            {/* Mobile Close Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileOpen(false)}
              className="h-8 w-8 p-0 md:hidden"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close menu</span>
            </Button>
            
            {/* Desktop Collapse Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCollapsed(!collapsed)}
              className="h-8 w-8 p-0 hidden md:flex"
            >
              {collapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
              <span className="sr-only">Toggle sidebar</span>
            </Button>
          </div>
        </div>

        <ScrollArea className="flex-1 px-3">
          <div className="space-y-1">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant={currentPage === item.page ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start h-11 md:h-10",
                  collapsed && "justify-center px-2"
                )}
                onClick={() => {
                  onNavigate?.(item.page)
                  setMobileOpen(false) // Close mobile menu on navigation
                }}
              >
                <item.icon className={cn("h-5 w-5 md:h-4 md:w-4", !collapsed && "mr-2")} />
                {!collapsed && item.name}
              </Button>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t">
            <div className="space-y-1">
              {secondaryNavigation.map((item) => (
                <Button
                  key={item.name}
                  variant={currentPage === item.page ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start h-11 md:h-10",
                    collapsed && "justify-center px-2"
                  )}
                  onClick={() => {
                    onNavigate?.(item.page)
                    setMobileOpen(false) // Close mobile menu on navigation
                  }}
                >
                  <item.icon className={cn("h-5 w-5 md:h-4 md:w-4", !collapsed && "mr-2")} />
                  {!collapsed && item.name}
                </Button>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  )
}