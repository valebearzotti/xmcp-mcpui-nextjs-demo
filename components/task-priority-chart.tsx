"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { mockTasks } from "@/lib/mock-data"

const PRIORITY_COLORS = {
  'low': '#6b7280',
  'medium': '#f59e0b',
  'high': '#ef4444'
}

export function TaskPriorityChart() {
  const priorityData = ['low', 'medium', 'high'].map(priority => {
    const count = mockTasks.filter(task => task.priority === priority).length
    return {
      priority: priority.charAt(0).toUpperCase() + priority.slice(1),
      count,
      fill: PRIORITY_COLORS[priority as keyof typeof PRIORITY_COLORS]
    }
  })

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0]
      return (
        <div className="bg-card border rounded-lg p-3 shadow-lg">
          <p className="font-medium">{label} Priority</p>
          <p className="text-sm text-muted-foreground">
            {data.value} task{data.value !== 1 ? 's' : ''}
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Task Priority Breakdown</CardTitle>
        <p className="text-sm text-muted-foreground">
          Distribution of tasks by priority level
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={priorityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis 
                dataKey="priority" 
                className="text-sm"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                className="text-sm"
                tick={{ fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="count" 
                radius={[4, 4, 0, 0]}
              >
                {priorityData.map((entry, index) => (
                  <Bar key={`bar-${index}`} dataKey="count" fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
