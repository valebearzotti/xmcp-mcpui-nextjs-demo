import { TaskStatusChart } from '@/components/task-status-chart';

export default function TaskStatusChartPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Task Status Chart</h1>
            <p className="text-muted-foreground mt-2">Overview of task status distribution</p>
          </div>
        </div>

        {/* Single Chart Display */}
        <div className="max-w-2xl mx-auto">
          <TaskStatusChart />
        </div>
      </div>
    </div>
  );
}
