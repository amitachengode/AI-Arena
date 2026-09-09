import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

interface LLMMessageProps {
  content: string;
}

export const LLMMessage: React.FC<LLMMessageProps> = ({ content }) => {
  return (
    <div className="text-sm leading-relaxed wrap-break-words text-zinc-100">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          // Fix ordered and unordered lists
          ol: ({ ...props }) => (
            <ol className="list-decimal pl-5 my-2 space-y-1" {...props} />
          ),
          ul: ({ ...props }) => (
            <ul className="list-disc pl-5 my-2 space-y-1" {...props} />
          ),
          li: ({ ...props }) => <li className="leading-normal" {...props} />,

          // Headings
          h1: ({ ...props }) => (
            <h1 className="text-lg font-bold my-2" {...props} />
          ),
          h2: ({ ...props }) => (
            <h2 className="text-base font-bold my-1.5" {...props} />
          ),
          h3: ({ ...props }) => (
            <h3 className="text-sm font-semibold my-1" {...props} />
          ),

          // Code blocks & Inline code
          pre: ({ ...props }) => (
            <pre
              className="p-3 my-2 rounded-lg bg-zinc-950 border border-zinc-800 overflow-x-auto text-xs font-mono"
              {...props}
            />
          ),
          code: ({ className, ...props }) => {
            const isInline = !className;
            return isInline ? (
              <code
                className="bg-zinc-700/60 text-amber-300 px-1.5 py-0.5 rounded text-xs font-mono"
                {...props}
              />
            ) : (
              <code className={className} {...props} />
            );
          },

          // Paragraphs & Blockquotes
          p: ({ ...props }) => <p className="mb-2" {...props} />,
          blockquote: ({ ...props }) => (
            <blockquote
              className="border-l-2 border-zinc-500 pl-3 italic text-zinc-400 my-2"
              {...props}
            />
          ),

          // Links (forces secure opening in new tab)
          a: ({ ...props }) => (
            <a
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};