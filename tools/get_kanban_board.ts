import { createUIResource } from "@mcp-ui/server";

// Define tool metadata
export const metadata = {
  name: "get_kanban_board",
  description: "Returns the UI resource to render the kanban board page",
  annotations: {
    title: "Get Kanban Board",
    readOnlyHint: true,
    destructiveHint: false,
    idempotentHint: true,
  },
};

// Tool implementation
export default async function get_kanban_board() {
    // Get the current host from the request context
    const requestHost = process.env.VERCEL_URL 
      ? `${process.env.VERCEL_URL}` 
      : 'localhost:3000';
    
    const scheme = requestHost.includes('localhost') || requestHost.includes('127.0.0.1') ? 'http' : 'https';
    const kanbanPageUrl = `${scheme}://${requestHost}/task`;

    // Generate a unique URI for this specific invocation of the kanban board UI.
    // This URI identifies the resource block itself, not the content of the iframe.
    const uniqueUIAppUri = `ui://kanban-board/${Date.now()}` as `ui://${string}`;
    
    const resource = createUIResource({
        uri: uniqueUIAppUri,
        content: { type: 'externalUrl', iframeUrl: kanbanPageUrl },
        encoding: 'text',
    });

    return {
      content: [resource],
    };
}
