export default function About() {
  return (
    <div className="bg-white">
      <div className="container py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Section */}
          <div>
            <h1 className="text-5xl font-bold text-black mb-6">About</h1>
            <h2 className="text-xl text-gray-600 mb-8">Subheading for description or instructions</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                Body text for your whole article or post. We&apos;ll put in some lorem ipsum to show how a filled-out page might look:
              </p>
              <p>
                Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
              </p>
            </div>
          </div>
          
          {/* Image placeholder */}
          <div className="bg-gray-200 h-96 lg:h-full min-h-[400px] flex items-center justify-center">
            <span className="text-gray-500 text-lg">Image placeholder</span>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-black mb-12">Contact me</h2>
          <form className="max-w-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Jane"
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Smitherton"
                  className="form-input"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@janesfakedomain.net"
                className="form-input"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Enter your question or message"
                className="form-textarea"
              />
            </div>
            <button type="submit" className="btn-primary w-full md:w-auto">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
