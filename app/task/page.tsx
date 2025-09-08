import KanbanBoard from '@/components/kanban-board';

export default function TaskPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-foreground">Task Management</h1>
        </div>
        <KanbanBoard />
      </div>
    </div>
  );
}
