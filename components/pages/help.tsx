"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Search, 
  MessageCircle, 
  Book, 
  Video, 
  Mail, 
  Phone,
  ExternalLink,
  ChevronRight,
  HelpCircle,
  FileText,
  Lightbulb,
  Users
} from "lucide-react"

const faqs = [
  {
    question: "How do I create a new campaign?",
    answer: "To create a new campaign, navigate to the Campaigns page and click the 'Create Campaign' button. Fill in the required details including campaign name, budget, target audience, and campaign objectives.",
    category: "Campaigns"
  },
  {
    question: "How can I export my analytics data?",
    answer: "You can export your data from the Reports section. Choose the data range and format (CSV, PDF, or Excel) and click the Export button. The file will be downloaded to your device.",
    category: "Reports"
  },
  {
    question: "What metrics are included in the dashboard?",
    answer: "The dashboard includes key metrics such as total revenue, active users, conversions, growth rate, click-through rates, cost per click, and return on ad spend (ROAS).",
    category: "Analytics"
  },
  {
    question: "How do I set up automated reports?",
    answer: "Go to Reports > Scheduled Reports and click 'Schedule New Report'. Choose your preferred frequency (daily, weekly, monthly) and the recipients who should receive the reports.",
    category: "Reports"
  },
  {
    question: "Can I integrate with other marketing tools?",
    answer: "Yes, ADmyBRAND Insights supports integrations with Google Analytics, Mailchimp, Salesforce, HubSpot, and many other popular marketing tools. Check the Integrations section in Settings.",
    category: "Integrations"
  }
]

const tutorials = [
  {
    title: "Getting Started with ADmyBRAND Insights",
    description: "Learn the basics of navigating and using the dashboard",
    duration: "5 min",
    type: "video"
  },
  {
    title: "Creating Your First Campaign",
    description: "Step-by-step guide to setting up a marketing campaign",
    duration: "8 min",
    type: "video"
  },
  {
    title: "Understanding Analytics Metrics",
    description: "Deep dive into key performance indicators and metrics",
    duration: "12 min",
    type: "article"
  },
  {
    title: "Setting Up Automated Reports",
    description: "Configure automated reporting for your team",
    duration: "6 min",
    type: "video"
  },
  {
    title: "Advanced Audience Segmentation",
    description: "Learn how to create and manage audience segments",
    duration: "15 min",
    type: "article"
  }
]

const supportChannels = [
  {
    title: "Live Chat",
    description: "Get instant help from our support team",
    icon: MessageCircle,
    availability: "24/7",
    responseTime: "< 2 minutes"
  },
  {
    title: "Email Support",
    description: "Send us a detailed message about your issue",
    icon: Mail,
    availability: "Business hours",
    responseTime: "< 4 hours"
  },
  {
    title: "Phone Support",
    description: "Speak directly with a support specialist",
    icon: Phone,
    availability: "Mon-Fri 9AM-6PM EST",
    responseTime: "Immediate"
  },
  {
    title: "Community Forum",
    description: "Connect with other users and share knowledge",
    icon: Users,
    availability: "24/7",
    responseTime: "Community driven"
  }
]

export function Help() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Help & Support</h1>
          <p className="text-muted-foreground">Find answers, tutorials, and get support</p>
        </div>
        <Button>
          <MessageCircle className="h-4 w-4 mr-2" />
          Contact Support
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input 
          placeholder="Search for help articles, tutorials, or FAQs..." 
          className="pl-10 h-12 text-lg"
        />
      </div>

      <Tabs defaultValue="faq" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
          <TabsTrigger value="support">Support</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        <TabsContent value="faq" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Find quick answers to common questions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg">{faq.question}</h3>
                      <Badge variant="outline">{faq.category}</Badge>
                    </div>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tutorials" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tutorials & Guides</CardTitle>
              <CardDescription>Learn how to make the most of ADmyBRAND Insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tutorials.map((tutorial, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          {tutorial.type === 'video' ? (
                            <Video className="h-6 w-6 text-primary" />
                          ) : (
                            <FileText className="h-6 w-6 text-primary" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold">{tutorial.title}</h3>
                          <p className="text-sm text-muted-foreground mb-1">{tutorial.description}</p>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary" className="text-xs">
                              {tutorial.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{tutorial.duration}</span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <channel.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{channel.title}</h3>
                      <p className="text-muted-foreground mb-3">{channel.description}</p>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Availability:</span>
                          <span className="font-medium">{channel.availability}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Response time:</span>
                          <span className="font-medium">{channel.responseTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>System Status</CardTitle>
              <CardDescription>Check the current status of our services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium">Dashboard</span>
                  </div>
                  <Badge variant="default" className="bg-green-500">Operational</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium">Analytics API</span>
                  </div>
                  <Badge variant="default" className="bg-green-500">Operational</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium">Reporting System</span>
                  </div>
                  <Badge variant="default" className="bg-green-500">Operational</Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Status Page
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>We'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="How can we help you?" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Please describe your question or issue in detail..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">support@admybrand.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Live Chat</p>
                      <p className="text-sm text-muted-foreground">Available 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Be Specific</p>
                      <p className="text-xs text-muted-foreground">Include details about what you were trying to do when the issue occurred</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Check FAQ First</p>
                      <p className="text-xs text-muted-foreground">Many common questions are answered in our FAQ section</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Book className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Include Screenshots</p>
                      <p className="text-xs text-muted-foreground">Visual context helps us understand and resolve issues faster</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}