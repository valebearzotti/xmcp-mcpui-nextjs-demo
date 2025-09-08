# MCP-UI Server Demo (Next.js)

This is a Next.js implementation of the MCP-UI server example, showcasing Model Context Protocol (MCP) with interactive UI components.

## Features

- **Task Dashboard**: Interactive charts showing team task status with drill-down capabilities
- **User Profiles**: Detailed user performance analytics with interactive features  
- **MCP Tools**: Backend MCP server with tools for task management and team collaboration
- **Remote DOM Components**: Examples of remote DOM rendering with React and Web Components

## Available MCP Tools

### Data Tools
- `get_tasks_status` - Get textual representation of task status
- `nudge_team_member` - Send nudges to team members

### UI Tools
- `show_task_status` - Interactive task dashboard
- `show_user_status` - User profile interface
- `show_remote_dom_react` - Remote DOM React component demo
- `show_remote_dom_web_components` - Remote DOM Web Components demo

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

The MCP server is available at: `http://localhost:3000/mcp`

You can connect to this server using any MCP client to access the available tools.

## Project Structure

```
app/
├── components/          # React components
│   ├── Graph.tsx       # Interactive task dashboard
│   └── User.tsx        # User profile component
├── task/               # Task dashboard page
├── user/               # User profile page
├── utils/              # Utility functions
└── mcp/                # MCP API route
tools/                  # MCP tool definitions
├── get_tasks_status.ts
├── nudge_team_member.ts
├── show_task_status.ts
├── show_user_status.ts
├── show_remote_dom_react.ts
└── show_remote_dom_web_components.ts
```

## Migration from React Router

This example was migrated from the original React Router implementation in `examples/server/`. Key changes include:

- Converted from React Router to Next.js App Router
- Migrated MCP server logic to xmcp tools
- Updated UI components to work with Next.js
- Added proper TypeScript types and error handling
- Enhanced landing page with better UX

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Recharts** - Chart library for data visualization
- **Tailwind CSS** - Utility-first CSS framework
- **xmcp** - MCP server implementation for Next.js
- **TypeScript** - Type safety and better developer experience