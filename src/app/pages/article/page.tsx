export default function Article() {
  return (
    <div className="bg-white">
      <div className="container py-16">
        {/* Article Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl font-bold text-black mb-6">Article or post title</h1>
          <h2 className="text-xl text-gray-600 mb-8">
            Subheading that sets up context, shares more info about the author, or generally gets people psyched to keep reading.
          </h2>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <div className="bg-gray-200 h-96 w-full flex items-center justify-center">
            <span className="text-gray-500 text-lg">Featured image placeholder</span>
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-6">
            Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:
          </h2>
          
          <div className="space-y-6 text-gray-700 mb-12">
            <p>
              Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning.
            </p>
            <p>
              Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur. Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content.
            </p>
          </div>

          {/* Inline Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              <span className="text-gray-500">Image placeholder</span>
            </div>
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              <span className="text-gray-500">Image placeholder</span>
            </div>
          </div>

          <div className="space-y-6 text-gray-700 mb-16">
            <p>
              Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure.
            </p>
            <p>
              Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound.
            </p>
          </div>

          {/* Related Articles */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-8">Related articles or posts</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <article className="space-y-4">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-500">Image placeholder</span>
                </div>
                <h3 className="text-xl font-bold text-black">Title</h3>
                <p className="text-gray-600">Author</p>
              </article>
              <article className="space-y-4">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-500">Image placeholder</span>
                </div>
                <h3 className="text-xl font-bold text-black">Title</h3>
                <p className="text-gray-600">Author</p>
              </article>
              <article className="space-y-4">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-500">Image placeholder</span>
                </div>
                <h3 className="text-xl font-bold text-black">Title</h3>
                <p className="text-gray-600">Author</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
