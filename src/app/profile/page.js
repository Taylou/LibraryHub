export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Student Portal</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">My Borrowed Books</h2>
            <p className="text-gray-600">You currently have 2 books borrowed</p>
            {/* Add borrowed books list here */}
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Due Soon</h2>
            <p className="text-gray-600">3 books due in the next 7 days</p>
            {/* Add due books list here */}
          </div>
        </div>
      </div>
    </div>
  );
}