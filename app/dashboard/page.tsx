import { TaskStatusChart } from '@/components/task-status-chart';
import { TaskPriorityChart } from '@/components/task-priority-chart';
import { TaskStatsCards } from '@/components/task-stats-cards';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Task Dashboard</h1>
            <p className="text-muted-foreground mt-2">Overview of task statistics and progress</p>
          </div>
        </div>

        {/* Stats Cards */}
        <TaskStatsCards />

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <TaskStatusChart />
          <TaskPriorityChart />
        </div>
      </div>
    </div>
  );
}
