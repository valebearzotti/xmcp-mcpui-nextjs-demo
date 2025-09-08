import { mockTasks } from "@/lib/mock-data";


// Define tool metadata
export const metadata = {
  name: "get_tasks_status",
  description: "The main way to get a textual representation of the status of all tasks",
  annotations: {
    title: "Get Tasks Status",
    readOnlyHint: true,
    destructiveHint: false,
    idempotentHint: true,
  },
};

// Tool implementation
export default async function get_tasks_status() {
    // Count tasks by status
    const taskCounts = {
      todo: mockTasks.filter(task => task.status === "todo").length,
      inProgress: mockTasks.filter(task => task.status === "in-progress").length,
      done: mockTasks.filter(task => task.status === "done").length,
      archived: mockTasks.filter(task => task.status === "archived").length,
    };

    // Count tasks by priority
    const priorityCounts = {
      high: mockTasks.filter(task => task.priority === "high").length,
      medium: mockTasks.filter(task => task.priority === "medium").length,
      low: mockTasks.filter(task => task.priority === "low").length,
    };

    let statusText = "Kanban Board Task Status:\n\n";

    statusText += "TASK STATUS BREAKDOWN:\n";
    statusText += `📋 To Do: ${taskCounts.todo} tasks\n`;
    statusText += `⚡ In Progress: ${taskCounts.inProgress} tasks\n`;
    statusText += `✅ Done: ${taskCounts.done} tasks\n`;
    statusText += `📦 Archived: ${taskCounts.archived} tasks\n`;
    statusText += `📊 Total Tasks: ${mockTasks.length}\n\n`;

    statusText += "PRIORITY BREAKDOWN:\n";
    statusText += `🔴 High Priority: ${priorityCounts.high} tasks\n`;
    statusText += `🟡 Medium Priority: ${priorityCounts.medium} tasks\n`;
    statusText += `🟢 Low Priority: ${priorityCounts.low} tasks\n\n`;

    statusText += "TASK DETAILS:\n\n";

    // Group tasks by status for detailed listing
    const statusGroups = {
      "To Do": mockTasks.filter(task => task.status === "todo"),
      "In Progress": mockTasks.filter(task => task.status === "in-progress"),
      "Done": mockTasks.filter(task => task.status === "done"),
      "Archived": mockTasks.filter(task => task.status === "archived"),
    };

    Object.entries(statusGroups).forEach(([status, tasks]) => {
      if (tasks.length > 0) {
        statusText += `${status.toUpperCase()}:\n`;
        tasks.forEach(task => {
          const priorityEmoji = task.priority === "high" ? "🔴" : task.priority === "medium" ? "🟡" : "🟢";
          statusText += `  ${priorityEmoji} ${task.title} (${task.priority} priority)\n`;
          statusText += `     ${task.description}\n`;
        });
        statusText += "\n";
      }
    });

    return statusText;
}
