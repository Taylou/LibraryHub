import { Star, Users, Calendar } from 'lucide-react'

export default function BookCard({ book }) {
  const availabilityStatus = book.availableCopies > 0 ? 'available' : 'unavailable'
  
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      {/* Book Cover Placeholder */}
      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
        <div className="text-white text-center p-4">
          <h3 className="font-bold text-lg mb-2">{book.title}</h3>
          <p className="text-sm opacity-90">by {book.author}</p>
        </div>
      </div>

      {/* Book Information */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">{book.genre}</span>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{book.rating}</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm mb-3 line-clamp-2">
          {book.description}
        </p>

        {/* Book Details */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{book.publishedYear}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{book.availableCopies}/{book.totalCopies} available</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
            availabilityStatus === 'available'
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={availabilityStatus === 'unavailable'}
        >
          {availabilityStatus === 'available' ? 'Borrow Book' : 'Currently Unavailable'}
        </button>
      </div>
    </div>
  )
}