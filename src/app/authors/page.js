import { authors } from '@/data/sampleData';
import Link from 'next/link';

export default function AuthorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Featured Authors</h1>
          <p className="text-gray-600">Discover our collection of {authors.length} renowned authors</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {authors.map((author) => (
            <Link key={author.id} href={`/authors/${author.id}`}>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center space-x-4">
                  <img 
                    src={author.avatar} 
                    alt={author.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{author.name}</h3>
                    <p className="text-gray-600">{author.nationality}</p>
                    <p className="text-sm text-gray-500">{author.booksCount} books</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700 text-sm line-clamp-3">
                  {author.biography}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}