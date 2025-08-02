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
          Welcome to <span className="text-primary">Gluten Ministry</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Supporting the gluten-free community through faith, fellowship, and food. 
          Join us on a journey of delicious discoveries and spiritual growth.
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
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-8">
             At Gluten Ministry, we believe that dietary restrictions shouldn&apos;t limit your ability 
             to enjoy fellowship and community. Whether you&apos;re dealing with celiac disease, gluten 
             sensitivity, or simply choosing a gluten-free lifestyle, we&apos;re here to support you 
             with recipes, resources, and a caring community.
           </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Faith-Based</h3>
              <p className="text-muted-foreground">
                Grounded in Christian values and community support
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Practical Resources</h3>
              <p className="text-muted-foreground">
                Recipes, tips, and guidance for gluten-free living
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-muted-foreground">
                Connect with others on similar journeys
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
