import { books } from '@/data/sampleData';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function BookDetailsPage({ params }) {
  const book = books.find(b => b.id === parseInt(params.id));
  
  if (!book) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/books" className="text-blue-600 hover:text-blue-700">
            ← Back to Books
          </Link>
        </nav>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 p-6">
              <img 
                src={book.coverImage} 
                alt={book.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            <div className="md:w-2/3 p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
              <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="text-sm text-gray-500">Genre:</span>
                  <p className="font-semibold">{book.genre}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Published:</span>
                  <p className="font-semibold">{book.publishedYear}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">ISBN:</span>
                  <p className="font-semibold">{book.isbn}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Rating:</span>
                  <p className="font-semibold">⭐ {book.rating}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-700">{book.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-sm text-gray-500">Availability:</span>
                <p className="font-semibold text-green-600">
                  {book.availableCopies} of {book.totalCopies} available
                </p>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Borrow Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}