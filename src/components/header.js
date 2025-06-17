// 'use-client';
// import { useState } from 'react';
import { Search, BookOpen, User, Bell } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  // const [searchTerm, setSearchTerm] = useState('');
  // const router = useRouter();

  // const handleGlobalSearch = (e) => {
  //   e.preventDefault();
  //   if (searchTerm.trim()) {
  //     router.push(`/books?search=${encodeURIComponent(searchTerm.trim())}`);
  //   }
  // };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">📚</span>
            <span className="text-xl font-bold text-blue-600">LibraryHub</span>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/books" className="text-gray-700 hover:text-blue-600 transition-colors">
              Books
            </Link>
            <Link href="/authors" className="text-gray-700 hover:text-blue-600 transition-colors">
              Authors
            </Link>
          </nav>
          {/* <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900">LibraryHub</h1>
          </div> */}

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search books, authors, or ISBN..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          {/* Global Search - Desktop */}
          {/* <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleGlobalSearch} className="w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search books, authors..."
                  className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </form>
          </div> */}

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            {/* <button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <User className="h-5 w-5" />
              <span className="hidden sm:block">Student Portal</span>
            </button> */}
            <Link href="/profile" className="text-blue-600 hover:text-blue-700">
              Student Portal
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}