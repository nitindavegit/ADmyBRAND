"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar as CalendarIcon, 
  Plus, 
  ChevronLeft, 
  ChevronRight,
  Clock,
  MapPin,
  Users,
  Video,
  Phone,
  Mail
} from "lucide-react"

const events = [
  {
    id: 1,
    title: "Campaign Review Meeting",
    date: "2024-01-15",
    time: "10:00 AM",
    type: "meeting",
    attendees: 5,
    location: "Conference Room A",
    description: "Review Q4 campaign performance and plan for Q1"
  },
  {
    id: 2,
    title: "Client Presentation",
    date: "2024-01-15",
    time: "2:00 PM",
    type: "presentation",
    attendees: 8,
    location: "Virtual",
    description: "Present analytics dashboard to ADmyBRAND team"
  },
  {
    id: 3,
    title: "Data Analysis Workshop",
    date: "2024-01-16",
    time: "9:00 AM",
    type: "workshop",
    attendees: 12,
    location: "Training Room",
    description: "Advanced analytics techniques workshop"
  },
  {
    id: 4,
    title: "Weekly Team Standup",
    date: "2024-01-17",
    time: "9:30 AM",
    type: "standup",
    attendees: 6,
    location: "Virtual",
    description: "Weekly progress update and planning"
  },
  {
    id: 5,
    title: "ROI Analysis Review",
    date: "2024-01-18",
    time: "11:00 AM",
    type: "review",
    attendees: 4,
    location: "Office",
    description: "Review campaign ROI and optimization strategies"
  }
]

const upcomingTasks = [
  {
    id: 1,
    title: "Prepare Q1 Budget Report",
    dueDate: "2024-01-20",
    priority: "high",
    assignee: "John Doe"
  },
  {
    id: 2,
    title: "Update Campaign Metrics",
    dueDate: "2024-01-18",
    priority: "medium",
    assignee: "Jane Smith"
  },
  {
    id: 3,
    title: "Client Feedback Analysis",
    dueDate: "2024-01-22",
    priority: "low",
    assignee: "Mike Johnson"
  }
]

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'meeting': return <Users className="h-4 w-4" />
      case 'presentation': return <Video className="h-4 w-4" />
      case 'workshop': return <CalendarIcon className="h-4 w-4" />
      case 'standup': return <Phone className="h-4 w-4" />
      case 'review': return <Mail className="h-4 w-4" />
      default: return <CalendarIcon className="h-4 w-4" />
    }
  }

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'meeting': return 'bg-blue-500'
      case 'presentation': return 'bg-purple-500'
      case 'workshop': return 'bg-green-500'
      case 'standup': return 'bg-orange-500'
      case 'review': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive'
      case 'medium': return 'secondary'
      case 'low': return 'outline'
      default: return 'secondary'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Calendar</h1>
          <p className="text-muted-foreground">Manage your schedule and upcoming events</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Event
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>January 2024</CardTitle>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i - 6 + 1
                  const isCurrentMonth = day > 0 && day <= 31
                  const hasEvent = isCurrentMonth && [15, 16, 17, 18].includes(day)
                  
                  return (
                    <div
                      key={i}
                      className={`
                        p-2 h-12 border rounded-lg flex items-center justify-center text-sm cursor-pointer
                        ${isCurrentMonth ? 'hover:bg-muted' : 'text-muted-foreground'}
                        ${hasEvent ? 'bg-primary/10 border-primary' : ''}
                      `}
                    >
                      {isCurrentMonth ? day : ''}
                      {hasEvent && (
                        <div className="absolute mt-6 h-1 w-1 bg-primary rounded-full"></div>
                      )}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Your scheduled events for this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className={`h-10 w-10 ${getEventTypeColor(event.type)} rounded-lg flex items-center justify-center text-white`}>
                          {getEventTypeIcon(event.type)}
                        </div>
                        <div>
                          <h3 className="font-semibold">{event.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <CalendarIcon className="h-4 w-4 mr-1" />
                              {event.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {event.time}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {event.location}
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {event.attendees}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline" className="capitalize">
                        {event.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
              <CardDescription>January 15, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                  <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="font-medium text-sm">Campaign Review</p>
                    <p className="text-xs text-muted-foreground">10:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                  <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                  <div>
                    <p className="font-medium text-sm">Client Presentation</p>
                    <p className="text-xs text-muted-foreground">2:00 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Tasks</CardTitle>
              <CardDescription>Tasks due this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="border rounded-lg p-3">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{task.title}</h4>
                      <Badge variant={getPriorityColor(task.priority)} className="text-xs">
                        {task.priority}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <p>Due: {task.dueDate}</p>
                      <p>Assigned to: {task.assignee}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Plus className="h-4 w-4 mr-2" />
                Schedule Meeting
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <CalendarIcon className="h-4 w-4 mr-2" />
                Block Time
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Clock className="h-4 w-4 mr-2" />
                Set Reminder
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}