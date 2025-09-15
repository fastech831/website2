import Link from 'next/link';
import Button from '@/components/Button';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container text-center">
          <h1 className="text-6xl font-bold text-black mb-6">Welcome to Our Website</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover amazing content, learn about our story, and explore our latest articles. 
            We're here to provide you with valuable insights and engaging experiences.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/pages/about">
              <Button>Learn More</Button>
            </Link>
            <Link href="/pages/article">
              <Button variant="secondary">Read Article</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-black text-center mb-16">Explore Our Content</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="bg-gray-200 h-48 w-full mb-6 flex items-center justify-center">
                <span className="text-gray-500">About Image</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">About Us</h3>
              <p className="text-gray-700 mb-6">
                Learn more about our story, mission, and the people behind our work.
              </p>
              <Link href="/pages/about">
                <Button variant="secondary">Read More</Button>
              </Link>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 h-48 w-full mb-6 flex items-center justify-center">
                <span className="text-gray-500">Article Image</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Latest Article</h3>
              <p className="text-gray-700 mb-6">
                Check out our latest insights and thought-provoking content.
              </p>
              <Link href="/pages/article">
                <Button variant="secondary">Read Article</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-black mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our community and stay updated with the latest content.
          </p>
          <Link href="/pages/about">
            <Button>Get Started</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
