import { notFound } from 'next/navigation';
import { getPageBySlug } from '@/lib/blog';

export default async function AboutPage() {
  const page = await getPageBySlug('about');

  if (!page) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">{page.title}</h1>
        <div 
          className="prose prose-stone max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: page.content }} 
        />
      </div>
    </div>
  );
}