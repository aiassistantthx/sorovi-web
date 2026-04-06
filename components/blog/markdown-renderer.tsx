interface MarkdownRendererProps {
  content: string;
}

function parseInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)|(`[^`]+`)/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[1]) {
      nodes.push(
        <strong key={key++} className="text-[var(--text-primary)] font-semibold">
          {match[1]}
        </strong>
      );
    } else if (match[2] && match[3]) {
      nodes.push(
        <a
          key={key++}
          href={match[3]}
          className="text-[var(--brand-primary)] underline decoration-[var(--brand-primary)]/30 underline-offset-2 hover:decoration-[var(--brand-primary)] transition-colors"
        >
          {match[2]}
        </a>
      );
    } else if (match[4]) {
      nodes.push(
        <code
          key={key++}
          className="px-1.5 py-0.5 rounded bg-[var(--surface-light)] text-[var(--brand-primary)] text-[0.9em] border border-[var(--border-color)]"
        >
          {match[4].slice(1, -1)}
        </code>
      );
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

function parseMarkdown(content: string): React.ReactNode[] {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") {
      i++;
      continue;
    }

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-14 mb-5 first:mt-0 tracking-tight"
        >
          {parseInline(line.slice(3))}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={key++}
          className="text-xl md:text-2xl font-semibold text-[var(--text-primary)] mt-10 mb-4 tracking-tight"
        >
          {parseInline(line.slice(4))}
        </h3>
      );
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quoteLines.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <blockquote
          key={key++}
          className="border-l-4 border-[var(--brand-primary)] pl-6 py-1 my-8 bg-[var(--surface-light)] rounded-r-lg"
        >
          <p className="text-lg md:text-xl text-[var(--text-secondary)] italic leading-relaxed">
            {parseInline(quoteLines.join(" "))}
          </p>
        </blockquote>
      );
      continue;
    }

    // Unordered list
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={key++} className="space-y-3 my-6 ml-1">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-lg text-[var(--text-secondary)] leading-relaxed">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--brand-primary)] mt-[0.65rem] flex-shrink-0" />
              <span>{parseInline(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={key++} className="space-y-3 my-6 ml-1">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-lg text-[var(--text-secondary)] leading-relaxed">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/20 text-xs font-bold text-[var(--brand-primary)] mt-[0.3rem] flex-shrink-0">
                {idx + 1}
              </span>
              <span>{parseInline(item)}</span>
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Table
    if (line.includes("|") && line.trim().startsWith("|")) {
      const tableLines: string[] = [];
      while (
        i < lines.length &&
        lines[i].includes("|") &&
        lines[i].trim().startsWith("|")
      ) {
        tableLines.push(lines[i]);
        i++;
      }
      if (tableLines.length >= 2) {
        const parseRow = (row: string) =>
          row
            .split("|")
            .slice(1, -1)
            .map((cell) => cell.trim());
        const headers = parseRow(tableLines[0]);
        const dataRows = tableLines.slice(2).map((row) => parseRow(row));

        elements.push(
          <div key={key++} className="overflow-x-auto my-8 rounded-xl border border-[var(--border-color)]">
            <table className="w-full border-collapse text-base">
              <thead>
                <tr className="bg-[var(--surface-light)]">
                  {headers.map((h, idx) => (
                    <th
                      key={idx}
                      className="text-left py-3 px-4 text-[var(--text-primary)] font-semibold border-b border-[var(--border-color)]"
                    >
                      {parseInline(h)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, rowIdx) => (
                  <tr key={rowIdx} className="hover:bg-[var(--surface-light)] transition-colors">
                    {row.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        className="py-3 px-4 text-[var(--text-secondary)] border-b border-[var(--border-color)]"
                      >
                        {parseInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    // Paragraph
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("## ") &&
      !lines[i].startsWith("### ") &&
      !lines[i].startsWith("- ") &&
      !lines[i].startsWith("> ") &&
      !/^\d+\.\s/.test(lines[i]) &&
      !(lines[i].includes("|") && lines[i].trim().startsWith("|"))
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      elements.push(
        <p
          key={key++}
          className="text-lg text-[var(--text-secondary)] leading-[1.8] mb-6"
        >
          {parseInline(paraLines.join(" "))}
        </p>
      );
    }
  }

  return elements;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return <div className="max-w-none">{parseMarkdown(content)}</div>;
}
