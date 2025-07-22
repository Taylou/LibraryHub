'use client';
import { useState, useEffect } from 'react';
import BookCard from '@/components/bookCard';
import SearchBar from '@/components/SearchBar';
import Link from 'next/link';

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch('/api/books');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchBooks();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const searchedBooks = books.filter(book => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term) ||
      book.genre.toLowerCase().includes(term) ||
      book.description.toLowerCase().includes(term)
    );
  });

  const totalBooks = books.length;
  const filteredCount = searchedBooks.length;

  if (isLoading) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <p>Loading books...</p>
    </div>;
  }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">All Books</h1>
                    <p className="text-gray-600">
                        Showing {filteredCount} of {totalBooks} books
                        {searchTerm && (
                            <span> for "{searchTerm}"</span>
                        )}
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-6">
                    <SearchBar
                        onSearch={handleSearch}
                        placeholder="Search by title, author, genre, or description..."
                    />
                </div>

                {/* Results */}
                {searchedBooks.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-gray-400 mb-4">
                            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No books found</h3>
                        <p className="text-gray-600 mb-4">Try a different search term</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {searchedBooks.map((book) => (
                            <Link key={book.id} href={`/books/${book.id}`}>
                                <BookCard book={book} />
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}



// 'use-client';
// import { books } from '@/data/sampleData';
// import BookCard from '@/components/bookCard';
// import SearchBar from '@/components/SearchBar';
// // import { useBookSearch } from '@/hooks/useBookSearch';
// import Link from 'next/link';

// export default function BooksPage() {
//   const {
    // searchTerm,
//     filters,
    // handleSearch,
//     resetAllFilters,
//     totalBooks,
//     filteredCount
//   } = useBookFilters(books);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">All Books</h1>
//           <div className="flex items-center justify-between">
//             <p className="text-gray-600">
//               Showing {filteredCount} of {totalBooks} books
//             </p>
//             {(searchTerm || filters.genres.length > 0 || filters.authors.length > 0 || filters.availableOnly) && (
//               <button
//                 onClick={resetAllFilters}
//                 className="text-blue-600 hover:text-blue-700 text-sm font-medium"
//               >
//                 Clear all filters
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="mb-6">
//           <SearchBar 
//             onSearch={handleSearch}
//             placeholder="Search by title, author, genre, or description..."
//           />
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {books.map((book) => (
//             <Link key={book.id} href={`/books/${book.id}`}>
//               <BookCard book={book} />
//             </Link>
//           ))}
//         </div>
//         </div>
//         </div> );
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">All Books</h1>
//           <p className="text-gray-600">Browse our complete collection of {books.length} books</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {books.map((book) => (
//             <Link key={book.id} href={`/books/${book.id}`}>
//               <BookCard book={book} />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   ); }

