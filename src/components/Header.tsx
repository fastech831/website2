import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container">
        <div className="flex justify-between items-center py-6">
          <Link href="/" className="text-2xl font-bold text-black">
            Site name
          </Link>
          <nav className="flex items-center space-x-8">
            <Link href="/pages/about" className="text-gray-700 hover:text-black transition-colors">
              About
            </Link>
            <Link href="/pages/article" className="text-gray-700 hover:text-black transition-colors">
              Article
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
