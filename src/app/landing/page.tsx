import Button from '@/components/Button';

export default function Landing() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container text-center">
          <h1 className="text-6xl font-bold text-black mb-6">Landing Page Title</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling.
          </p>
          <Button className="mb-12">Button</Button>
          <div className="bg-gray-200 h-96 w-full flex items-center justify-center">
            <span className="text-gray-500 text-lg">Hero image placeholder</span>
          </div>
        </div>
      </section>

      {/* Section 1 - Three Column */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-black text-center mb-16">Section heading</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-gray-200 h-48 w-full mb-6 flex items-center justify-center">
                <span className="text-gray-500">Image placeholder</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Subheading</h3>
              <p className="text-gray-700">
                Body text for whatever you&apos;d like to add more to the subheading.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 h-48 w-full mb-6 flex items-center justify-center">
                <span className="text-gray-500">Image placeholder</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Subheading</h3>
              <p className="text-gray-700">
                Body text for whatever you&apos;d like to expand on the main point.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 h-48 w-full mb-6 flex items-center justify-center">
                <span className="text-gray-500">Image placeholder</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Subheading</h3>
              <p className="text-gray-700">
                Body text for whatever you&apos;d like to share more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Two Column with Image */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-black text-center mb-16">Section heading</h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">Subheading</h3>
                <p className="text-gray-700">
                  Body text for whatever you&apos;d like to expand on the main point.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">Subheading</h3>
                <p className="text-gray-700">
                  Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">Subheading</h3>
                <p className="text-gray-700">
                  Body text for whatever you&apos;d like to add more to the main point. It provides details, explanations, and context.
                </p>
              </div>
              <div className="flex space-x-4">
                <Button>Button</Button>
                <Button variant="secondary">Secondary button</Button>
              </div>
            </div>
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Image placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Two Column */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-black text-center mb-16">Section heading</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="bg-gray-200 h-48 w-full mb-6 flex items-center justify-center">
                <span className="text-gray-500">Image placeholder</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Subheading</h3>
              <p className="text-gray-700">
                Body text for whatever you&apos;d like to add more to the subheading.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 h-48 w-full mb-6 flex items-center justify-center">
                <span className="text-gray-500">Image placeholder</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Subheading</h3>
              <p className="text-gray-700">
                Body text for whatever you&apos;d like to expand on the main point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Testimonials */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-black text-center mb-16">Section heading</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <blockquote className="text-xl font-bold text-black mb-6">
                &ldquo;A terrific piece of praise&rdquo;
              </blockquote>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Avatar</span>
                </div>
              </div>
              <p className="font-bold text-black">Name</p>
              <p className="text-gray-600">Description</p>
            </div>
            <div className="text-center">
              <blockquote className="text-xl font-bold text-black mb-6">
                &ldquo;A fantastic bit of feedback&rdquo;
              </blockquote>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Avatar</span>
                </div>
              </div>
              <p className="font-bold text-black">Name</p>
              <p className="text-gray-600">Description</p>
            </div>
            <div className="text-center">
              <blockquote className="text-xl font-bold text-black mb-6">
                &ldquo;A genuinely glowing review&rdquo;
              </blockquote>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Avatar</span>
                </div>
              </div>
              <p className="font-bold text-black">Name</p>
              <p className="text-gray-600">Description</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-black mb-8">Section heading</h2>
          <div className="flex justify-center space-x-4">
            <Button>Button</Button>
            <Button variant="secondary">Secondary button</Button>
          </div>
        </div>
      </section>
    </div>
  );
}