// Advanced search utilities
export const searchBooks = (books, searchTerm) => {
  if (!searchTerm) return books;

  const term = searchTerm.toLowerCase().trim();
  
  return books.filter(book => {
    // Exact title match gets highest priority
    if (book.title.toLowerCase() === term) return true;
    
    // Check multiple fields
    const searchableText = [
      book.title,
      book.author,
      book.genre,
      book.description,
      book.isbn
    ].join(' ').toLowerCase();
    
    // Support multi-word searches
    const searchWords = term.split(' ');
    return searchWords.every(word => searchableText.includes(word));
  });
};

// export const sortBooks = (books, sortBy, sortOrder = 'asc') => {
//   return [...books].sort((a, b) => {
//     let aValue = a[sortBy];
//     let bValue = b[sortBy];

//     // Handle different data types
//     if (typeof aValue === 'string') {
//       aValue = aValue.toLowerCase();
//       bValue = bValue.toLowerCase();
//     }

//     if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
//     if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
//     return 0;
//   });
// };

// export const filterBooks = (books, filters) => {
//   return books.filter(book => {
//     // Genre filter
//     if (filters.genres?.length > 0 && !filters.genres.includes(book.genre)) {
//       return false;
//     }
    
//     // Author filter
//     if (filters.authors?.length > 0 && !filters.authors.includes(book.author)) {
//       return false;
//     }
    
//     // Availability filter
//     if (filters.availableOnly && book.availableCopies === 0) {
//       return false;
//     }
    
//     return true;
//   });
// };