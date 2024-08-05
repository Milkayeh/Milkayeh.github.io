// components/markdown/printMarkdown.js
import React from 'react';
import { unified } from 'unified';
import parse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remark2react from 'remark-react';
import rehypeHighlight from 'rehype-highlight';
import markdownStyles from './markdown-styles.module.css';

const PrintMarkdown = ({ markdown }) => {
  const content = unified()
    .use(parse) // Parse markdown
    .use(remarkGfm) // Support GitHub Flavored Markdown
    .use(remark2react, {
      createElement: React.createElement,
      rehypePlugins: [rehypeHighlight], // Enable rehype-highlight for syntax highlighting
    })
    .processSync(markdown).result;

  return (
    <div className={markdownStyles.markdown}>
      {content}
    </div>
  );
};

export default PrintMarkdown;
