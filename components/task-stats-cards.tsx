"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockTasks, type TaskStatus } from "@/lib/mock-data"
import { CheckCircle, Clock, ListTodo, Archive } from "lucide-react"

export function TaskStatsCards() {
  const getTaskCount = (status: TaskStatus) => {
    return mockTasks.filter(task => task.status === status).length
  }

  const totalTasks = mockTasks.length
  const completedTasks = getTaskCount('done')
  const completionRate = Math.round((completedTasks / totalTasks) * 100)

  const stats = [
    {
      title: "Total Tasks",
      value: totalTasks,
      icon: ListTodo,
      description: "All tasks in the system",
      color: "text-blue-600"
    },
    {
      title: "To Do",
      value: getTaskCount('todo'),
      icon: Clock,
      description: "Tasks pending start",
      color: "text-gray-600"
    },
    {
      title: "In Progress",
      value: getTaskCount('in-progress'),
      icon: Clock,
      description: "Currently active tasks",
      color: "text-yellow-600"
    },
    {
      title: "Completed",
      value: completedTasks,
      icon: CheckCircle,
      description: `${completionRate}% completion rate`,
      color: "text-green-600"
    },
    {
      title: "Archived",
      value: getTaskCount('archived'),
      icon: Archive,
      description: "Archived tasks",
      color: "text-purple-600"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <Icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
