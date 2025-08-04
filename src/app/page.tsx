import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BlogPostCard } from '@/components/blog-post-card';
import { getAllPosts } from '@/lib/blog';

export default async function Home() {
  const posts = await getAllPosts();
  const featuredPosts = posts.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          The <span className="text-primary">Art of Sourdough</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover the joy of baking with natural ingredients. From starter to loaf, we celebrate the craft of sourdough.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/blog">Explore Blog</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </section>
      )}

      {/* Mission Section */}
      <section className="py-16 bg-muted/50 rounded-lg">
        <div className="text-center max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We believe in the power of natural ingredients and traditional methods. Our mission is to share the knowledge and passion for sourdough baking, making it accessible to everyone. We are dedicated to quality, craftsmanship, and the simple pleasure of a perfect loaf.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Natural Ingredients</h3>
              <p className="text-muted-foreground">
                Using only the finest flour, water, and salt.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Handcrafted</h3>
              <p className="text-muted-foreground">
                Embracing the art of traditional baking techniques.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">From Scratch</h3>
              <p className="text-muted-foreground">
                Learn to cultivate your own sourdough starter.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
