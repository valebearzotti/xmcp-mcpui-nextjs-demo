import { createUIResource } from "@mcp-ui/server";

// Define tool metadata
export const metadata = {
  name: "get_task_priority_chart",
  description: "Returns the UI resource to render the task priority chart",
  annotations: {
    title: "Get Task Priority Chart",
    readOnlyHint: true,
    destructiveHint: false,
    idempotentHint: true,
  },
};

// Tool implementation
export default async function get_task_priority_chart() {
    // Get the current host from the request context
    const requestHost = process.env.VERCEL_URL 
      ? `${process.env.VERCEL_URL}` 
      : 'localhost:3000';
    
    const scheme = requestHost.includes('localhost') || requestHost.includes('127.0.0.1') ? 'http' : 'https';
    const chartPageUrl = `${scheme}://${requestHost}/chart/priority`;

    // Generate a unique URI for this specific invocation of the task priority chart UI.
    // This URI identifies the resource block itself, not the content of the iframe.
    const uniqueUIAppUri = `ui://task-priority-chart/${Date.now()}` as `ui://${string}`;
    
    const resource = createUIResource({
        uri: uniqueUIAppUri,
        content: { type: 'externalUrl', iframeUrl: chartPageUrl },
        encoding: 'text',
    });

    return {
      content: [resource],
    };
}
