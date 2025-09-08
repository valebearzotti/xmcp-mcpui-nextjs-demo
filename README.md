# xmcp &lt;&gt; MCP-UI Demo (Next.js)

This is a Next.js implementation showcasing the integration between **xmcp** and **MCP-UI** with interactive UI components and a comprehensive task management system.

## Available MCP Tools

### Data Tools
- `get_tasks_status` - Get textual representation of kanban board task status

### UI Resource Tools
- `get_kanban_board` - Returns UI resource to render the kanban board page
- `get_task_status_chart` - Returns UI resource to render the task status chart
- `get_task_priority_chart` - Returns UI resource to render the task priority chart

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## MCP Server Connection

The MCP server runs at: `http://localhost:3000/mcp`

### Configuration

Copy the appropriate configuration for your MCP client:

**For Cursor:**
```json
{
  "mcpServers": {
    "my-project": {
      "url": "http://localhost:3000/mcp"
    }
  }
}
```

**For Claude Desktop:**
```json
{
  "mcpServers": {
    "my-project": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "http://localhost:3000/mcp"]
    }
  }
}
```

## Learn More

- **xmcp**: [xmcp.dev](https://xmcp.dev) - TypeScript framework for building MCP servers
- **MCP-UI**: [mcpui.dev](https://mcpui.dev) - Build dynamic UIs for MCP applications  
- **Model Context Protocol**: [modelcontextprotocol.io/introduction](https://modelcontextprotocol.io/introduction) - Open standard for AI-tool integration