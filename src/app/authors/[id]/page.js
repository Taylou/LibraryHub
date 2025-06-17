import { authors, books } from '@/data/sampleData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import BookCard from '@/components/bookCard';

export default function AuthorDetailsPage({ params }) {
  const author = authors.find(a => a.id === parseInt(params.id));
  
  if (!author) {
    notFound();
  }

  // Get books by this author
  const authorBooks = books.filter(book => book.author === author.name);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/authors" className="text-blue-600 hover:text-blue-700">
            ← Back to Authors
          </Link>
        </nav>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start space-x-6">
            <img 
              src={author.avatar} 
              alt={author.name}
              className="w-32 h-32 rounded-full object-cover"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{author.name}</h1>
              <p className="text-xl text-gray-600 mb-4">{author.nationality}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="text-sm text-gray-500">Born:</span>
                  <p className="font-semibold">{author.birthYear}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Books:</span>
                  <p className="font-semibold">{author.booksCount}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Biography</h3>
                <p className="text-gray-700">{author.biography}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Author's Books */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Books by {author.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {authorBooks.map((book) => (
              <Link key={book.id} href={`/books/${book.id}`}>
                <BookCard book={book} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}