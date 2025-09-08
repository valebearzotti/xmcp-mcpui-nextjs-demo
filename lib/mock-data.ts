export type TaskStatus = "todo" | "in-progress" | "done" | "archived"

export interface Task {
  id: string
  title: string
  description: string
  status: TaskStatus
  priority: "low" | "medium" | "high"
}

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Design landing page",
    description: "Create wireframes and mockups for the new landing page",
    status: "todo",
    priority: "high",
  },
  {
    id: "2",
    title: "Implement user authentication",
    description: "Set up login and registration functionality",
    status: "in-progress",
    priority: "high",
  },
  {
    id: "3",
    title: "Write API documentation",
    description: "Document all REST endpoints and their usage",
    status: "in-progress",
    priority: "medium",
  },
  {
    id: "4",
    title: "Set up CI/CD pipeline",
    description: "Configure automated testing and deployment",
    status: "done",
    priority: "medium",
  },
  {
    id: "5",
    title: "Database migration",
    description: "Update database schema for new features",
    status: "done",
    priority: "low",
  },
  {
    id: "6",
    title: "Old feature cleanup",
    description: "Remove deprecated code and unused dependencies",
    status: "archived",
    priority: "low",
  },
]

export const columns: { id: TaskStatus; title: string }[] = [
  { id: "todo", title: "To Do" },
  { id: "in-progress", title: "In Progress" },
  { id: "done", title: "Done" },
  { id: "archived", title: "Archived" },
]

export const priorityColors = {
  low: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  medium: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
  high: "bg-gray-300 text-gray-900 dark:bg-gray-600 dark:text-gray-100",
}
