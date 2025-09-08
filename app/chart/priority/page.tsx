import { TaskPriorityChart } from '@/components/task-priority-chart';

export default function TaskPriorityChartPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Task Priority Chart</h1>
            <p className="text-muted-foreground mt-2">Overview of task priority distribution</p>
          </div>
        </div>

        {/* Single Chart Display */}
        <div className="max-w-2xl mx-auto">
          <TaskPriorityChart />
        </div>
      </div>
    </div>
  );
}
