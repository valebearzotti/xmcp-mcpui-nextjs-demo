import { createUIResource } from "@mcp-ui/server";

// Define tool metadata
export const metadata = {
  name: "get_task_status_chart",
  description: "Returns the UI resource to render the task status chart",
  annotations: {
    title: "Get Task Status Chart",
    readOnlyHint: true,
    destructiveHint: false,
    idempotentHint: true,
  },
};

// Tool implementation
export default async function get_task_status_chart() {
    // Get the current host from the request context
    const requestHost = process.env.VERCEL_PROJECT_PRODUCTION_URL 
      ? `${process.env.VERCEL_PROJECT_PRODUCTION_URL}` 
      : 'localhost:3000';
    
    const scheme = requestHost.includes('localhost') || requestHost.includes('127.0.0.1') ? 'http' : 'https';
    const chartPageUrl = `${scheme}://${requestHost}/chart/status`;

    // Generate a unique URI for this specific invocation of the task status chart UI.
    // This URI identifies the resource block itself, not the content of the iframe.
    const uniqueUIAppUri = `ui://task-status-chart/${Date.now()}` as `ui://${string}`;
    
    const resource = createUIResource({
        uri: uniqueUIAppUri,
        content: { type: 'externalUrl', iframeUrl: chartPageUrl },
        encoding: 'text',
    });

    return {
      content: [resource],
    };
}
