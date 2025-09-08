"use client"

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Layout, Settings, Users, Copy, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { useState, useEffect } from "react";

export default function Home() {
  const [mcpUrl, setMcpUrl] = useState('http://localhost:3000/mcp');
  const [isLocal, setIsLocal] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const isLocalHost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const baseUrl = isLocalHost 
      ? 'http://localhost:3000' 
      : `https://${window.location.host}`;
    
    setIsLocal(isLocalHost);
    setMcpUrl(`${baseUrl}/mcp`);
  }, []);

  const copyToClipboard = (text: string, configName: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(`${configName} config copied to clipboard!`, {
        description: "You can now paste this into your MCP client configuration.",
        duration: 3000,
      });
    }).catch(() => {
      toast.error("Failed to copy to clipboard", {
        description: "Please try copying the config manually.",
        duration: 3000,
      });
    });
  };

  const cursorConfig = `{
  "mcpServers": {
    "my-project": {
      "url": "${mcpUrl}"
    }
  }
}`;

  const claudeConfig = `{
  "mcpServers": {
    "my-project": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "${mcpUrl}"]
    }
  }
}`;

  return (
    <div className="font-sans min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
            xmcp &lt;&gt; MCP-UI
          </h1>
          <div className="max-w-3xl mx-auto mb-8 space-y-4">
            <p className="text-lg text-muted-foreground">
              This project was bootstrapped with <span className="font-semibold text-foreground">Next.js</span> and <span className="font-semibold text-foreground">xmcp</span>.
            </p>
            <p className="text-muted-foreground">
              You can create your own by running:
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 font-mono text-sm text-left">
              <div className="flex items-center mb-2">
                <div className="flex space-x-1 mr-3">
                  <div className="size-4 bg-red-500 rounded-full"></div>
                  <div className="size-4 bg-yellow-500 rounded-full"></div>
                  <div className="size-4 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400">terminal</span>
              </div>
              <div className="space-y-2">
                <div className="text-green-400">
                  <span className="text-gray-500">$</span> npx create-next-app@latest my-app
                </div>
                <div className="text-green-400">
                  <span className="text-gray-500">$</span> cd my-app
                </div>
                <div className="text-green-400">
                  <span className="text-gray-500">$</span> npx init-xmcp@latest
                </div>
                <div className="text-green-400">
                  <span className="text-gray-500">$</span> npm run dev
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200 font-medium">
                🚀 Your MCP server is running at:
              </p>
              <code className="text-sm font-mono text-blue-900 dark:text-blue-100">
                {mcpUrl}
              </code>
              {isClient && (
                <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                  {isLocal ? '(Local development)' : '(Vercel deployment)'}
                </p>
              )}
            </div>
            <div className="flex gap-3 justify-center mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(cursorConfig, "Cursor")}
                className="text-xs"
              >
                <Copy className="size-4 mr-2" />
                Copy Cursor Config
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(claudeConfig, "Claude Desktop")}
                className="text-xs"
              >
                <Copy className="size-4 mr-2" />
                Copy Claude Desktop Config
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Copy the appropriate config for your IDE and start building!
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {/* Navigation Cards Row */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Browse Views</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="group hover:shadow-lg transition-all duration-200 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Layout className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Kanban Board</CardTitle>
                      <p className="text-sm text-muted-foreground">Manage tasks with drag & drop</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Interactive task management with drag-and-drop functionality, priority levels, and status tracking.
                  </p>
                  <Link 
                    href="/task" 
                    className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm h-10 px-4 rounded-md transition-colors"
                  >
                    Open Kanban Board →
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-200 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <BarChart3 className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Analytics Dashboard</CardTitle>
                      <p className="text-sm text-muted-foreground">View statistics & insights</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive analytics with charts, completion rates, and task distribution insights.
                  </p>
                  <Link 
                    href="/dashboard" 
                    className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm h-10 px-4 rounded-md transition-colors"
                  >
                    View Dashboard →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tools and Learn More Row */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* MCP Tools */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Settings className="w-5 h-5 text-purple-600" />
                  <CardTitle className="text-lg">Available MCP Tools</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-card-foreground mb-3">Data Tools</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-muted-foreground mr-2">•</span>
                      <div>
                        <code className="bg-muted px-2 py-1 rounded text-xs">get_tasks_status</code>
                        <p className="text-muted-foreground mt-1">Get textual representation of kanban board task status</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-card-foreground mb-3">UI Resource Tools</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-muted-foreground mr-2">•</span>
                      <div>
                        <code className="bg-muted px-2 py-1 rounded text-xs">get_kanban_board</code>
                        <p className="text-muted-foreground mt-1">Returns UI resource to render the kanban board page</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-muted-foreground mr-2">•</span>
                      <div>
                        <code className="bg-muted px-2 py-1 rounded text-xs">get_task_status_chart</code>
                        <p className="text-muted-foreground mt-1">Returns UI resource to render the task status chart</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-muted-foreground mr-2">•</span>
                      <div>
                        <code className="bg-muted px-2 py-1 rounded text-xs">get_task_priority_chart</code>
                        <p className="text-muted-foreground mt-1">Returns UI resource to render the task priority chart</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Learn More / Project Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>Project Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  This demo showcases the integration between three key technologies:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <a 
                      href="https://xmcp.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 group"
                    >
                      <h4 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">xmcp</h4>
                      <ExternalLink className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                    <p className="text-sm text-muted-foreground">
                      The TypeScript framework for building and shipping MCP servers
                    </p>
                  </div>
                  <div>
                    <a 
                      href="https://mcpui.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 group"
                    >
                      <h4 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">MCP-UI</h4>
                      <ExternalLink className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                    <p className="text-sm text-muted-foreground">
                      Build rich, dynamic user interfaces for your MCP applications with SDKs that bring UI to AI interactions.
                    </p>
                  </div>
                  <div>
                    <a 
                      href="https://modelcontextprotocol.io/introduction"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 group"
                    >
                      <h4 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">Model Context Protocol</h4>
                      <ExternalLink className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                    <p className="text-sm text-muted-foreground">
                      An open standard for connecting AI assistants with external data sources and tools.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
