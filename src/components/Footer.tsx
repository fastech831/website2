import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container">
        <div className="py-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-8">
              <Link href="/" className="text-2xl font-bold text-black">
                Site name
              </Link>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center text-white font-bold">
                  f
                </div>
                <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center text-white font-bold">
                  in
                </div>
                <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center text-white font-bold">
                  ▶
                </div>
                <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center text-white font-bold">
                  📷
                </div>
              </div>
            </div>
            <div className="flex space-x-12 mt-8 lg:mt-0">
              <div>
                <h3 className="font-bold text-black mb-3">Topic</h3>
                <div className="space-y-2">
                  <Link href="#" className="block text-gray-600 hover:text-black transition-colors">Page</Link>
                  <Link href="#" className="block text-gray-600 hover:text-black transition-colors">Page</Link>
                  <Link href="#" className="block text-gray-600 hover:text-black transition-colors">Page</Link>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-black mb-3">Topic</h3>
                <div className="space-y-2">
                  <Link href="#" className="block text-gray-600 hover:text-black transition-colors">Page</Link>
                  <Link href="#" className="block text-gray-600 hover:text-black transition-colors">Page</Link>
                  <Link href="#" className="block text-gray-600 hover:text-black transition-colors">Page</Link>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-black mb-3">Topic</h3>
                <div className="space-y-2">
                  <Link href="#" className="block text-gray-600 hover:text-black transition-colors">Page</Link>
                  <Link href="#" className="block text-gray-600 hover:text-black transition-colors">Page</Link>
                  <Link href="#" className="block text-gray-600 hover:text-black transition-colors">Page</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
