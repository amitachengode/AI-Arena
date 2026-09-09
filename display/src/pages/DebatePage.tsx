import MessageBox from "../components/MessageBox"

export const message = `
Here is a breakdown of how to solve your issue:

### 1. Key Steps
1. Initialize the **WebSocket** connection.
2. Listen for incoming message frames.
3. Parse the data safely using Markdown.

* Quick tip: Always verify your \`readyState\` before sending frames.
* Check the server logs if connections drop unexpectedly.

> "Premature optimization is the root of all evil." — Donald Knuth

### 2. Code Example
Here is the TypeScript implementation:

\`\`\`typescript
interface ConnectionConfig {
  url: string;
  autoReconnect: boolean;
  retryAttempts?: number;
}

export function createConnection(config: ConnectionConfig): WebSocket {
  const socket = new WebSocket(config.url);
  
  socket.onopen = () => {
    console.log("Connected successfully!");
  };

  return socket;
}
\`\`\`

### 3. Feature Comparison

| Feature | Raw WebSocket | Socket.io |
| :--- | :--- | :--- |
| **Protocol** | Standard RFC 6455 | Custom frame layer |
| **Fallback** | None | HTTP Long-polling |
| **Overhead** | Minimal | Moderate |

For more details, refer to the [MDN Web Docs](https://developer.mozilla.org).
`.trim();

export default function DebatePage() {
    return (
        <div className="">
            <h1>Debate Page</h1>
            <MessageBox name="Qwen" message={message} isSelf={true}></MessageBox>
            <MessageBox name="Qwen" message={message} isSelf={false}></MessageBox>
        </div>
        
    )
}