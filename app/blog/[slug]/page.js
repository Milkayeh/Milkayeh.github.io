// app/blog/[slug]/page.js
import HeaderNoImage from '@/Components/HeaderNoImage';
import PrintMarkdown from '@/Components/markdown/PrintMarkdown';
import { getBlogContentBySlug, getAllBlogs } from '@/lib/markdown';

export default async function BlogPage({ params }) {
  const { slug } = params;
  const page = getBlogContentBySlug(slug, [
    'title',
    'description',
    'slug',
    'content',
    'date',
  ]);

  return (
    <div>
    <HeaderNoImage/>
        <div className='max-w-screen-md mx-auto px-4'> 
            <PrintMarkdown markdown={page.content} />
        </div> 
    </div>
  );
}

// Fetch all slugs for the dynamic route
export async function generateStaticParams() {
  const blogs = getAllBlogs(['slug']);
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
