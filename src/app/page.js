import Header from '@/components/header'
import BookCard from '@/components/bookCard'
import { books, authors } from '@/data/sampleData'
// import SearchBar from '@/components/SearchBar';
import { TrendingUp, BookOpen, Users, Clock } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to LibraryHub</h1>
            <p className="text-xl opacity-90 mb-8">
              Discover, borrow, and explore thousands of books in our digital library
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <BookOpen className="h-8 w-8 mx-auto mb-2" />
                <p className="font-semibold">5,000+ Books</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2" />
                <p className="font-semibold">1,200+ Members</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 mx-auto mb-2" />
                <p className="font-semibold">24/7 Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Books Borrowed Today</p>
                  <p className="text-2xl font-bold text-gray-900">23</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Available Books</p>
                  <p className="text-2xl font-bold text-gray-900">4,847</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Active Members</p>
                  <p className="text-2xl font-bold text-gray-900">1,156</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Due Today</p>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Authors */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Authors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {authors.map(author => (
              <div key={author.id} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{author.name}</h3>
                <p className="text-gray-600 mb-2">{author.nationality} • Born {author.birthYear}</p>
                <p className="text-sm text-gray-500 mb-4">{author.booksCount} books in our collection</p>
                <p className="text-sm text-gray-700">{author.biography}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}