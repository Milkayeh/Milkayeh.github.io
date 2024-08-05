// lib/markdown.js
import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const blogDirectory = join(process.cwd(), '_pages/blogs');

export function getSlugsFromDirectory(dir) {
  return fs.readdirSync(dir);
}

export function getBySlug(dir, slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getBlogContentBySlug(slug, fields = []) {
  return getBySlug(blogDirectory, slug, fields);
}

export function getAllBlogs(fields = []) {
  const slugs = getSlugsFromDirectory(blogDirectory);
  const blogs = slugs.map((slug) => getBlogContentBySlug(slug, fields));
  return blogs;
}
