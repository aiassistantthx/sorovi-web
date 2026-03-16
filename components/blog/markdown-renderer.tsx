"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-[var(--text-gray-300)] leading-relaxed mb-4">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="space-y-2 mb-6 list-disc list-inside text-[var(--text-gray-300)]">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="space-y-2 mb-6 list-decimal list-inside text-[var(--text-gray-300)]">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-[var(--text-gray-300)] leading-relaxed">
              {children}
            </li>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-[var(--brand-primary)] hover:underline"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="text-white font-semibold">{children}</strong>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[var(--brand-primary)] pl-4 my-6 italic text-[var(--text-gray-300)]">
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="border-b border-white/20">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="text-left py-2 px-3 text-white font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="py-2 px-3 text-[var(--text-gray-300)] border-b border-white/5">
              {children}
            </td>
          ),
        }}
      />
    </div>
  );
}
