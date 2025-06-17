'use client';
import { useState, useMemo } from 'react';

export function useBookSearch(initialBooks) {
    const [searchTerm, setSearchTerm] = useState('');

    // Apply search filter
    const searchedBooks = useMemo(() => {
        if (!searchTerm) return initialBooks;

        const term = searchTerm.toLowerCase();
        return initialBooks.filter(book =>
            book.title.toLowerCase().includes(term) ||
            book.author.toLowerCase().includes(term) ||
            book.genre.toLowerCase().includes(term) ||
            book.description.toLowerCase().includes(term)
        );
    }, [initialBooks, searchTerm]);

    return {
        // Data
        searchedBooks,
        
        // Current state
        searchTerm,
        
        // Actions
        handleSearch: setSearchTerm,

        // Stats
        totalBooks: initialBooks.length,
        filteredCount: searchedBooks.length
    };
}