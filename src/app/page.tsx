export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          Hello World!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Welcome to your Next.js app with TypeScript and Tailwind CSS
        </p>
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            🚀 Tech Stack
          </h2>
          <ul className="space-y-2 text-left">
            <li className="flex items-center text-gray-600">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Next.js 15
            </li>
            <li className="flex items-center text-gray-600">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              TypeScript
            </li>
            <li className="flex items-center text-gray-600">
              <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
              Tailwind CSS
            </li>
            <li className="flex items-center text-gray-600">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              ESLint
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
