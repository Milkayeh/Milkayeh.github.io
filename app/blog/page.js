// app/blog/page.js
import Link from 'next/link';
import { getAllBlogs } from '@/lib/markdown';
import Header from "@/Components/Header"

export default async function BlogIndex() {
  const blogs = getAllBlogs(['title', 'slug', 'date']);

  return (
    <div>
      <Header/>
      <div className='max-w-screen-md mx-auto px-4'>
      <span className='text-2xl font-bold'>Blog Posts: </span>
        <ul>
        {blogs.reverse().map((blog) => (
            <li key={blog.slug} className='list-disc'>
              <Link href={`/blog/${blog.slug}`}>
                {blog.title} | {blog.date}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
