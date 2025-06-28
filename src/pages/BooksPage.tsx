
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const BooksPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || 'all';

  const bookCategories = [
    { name: "Psychology", icon: "🧠", books: ["Mindset", "Flow", "Thinking Fast and Slow"] },
    { name: "Business", icon: "💼", books: ["Good to Great", "The Lean Startup", "Zero to One"] },
    { name: "Coding", icon: "💻", books: ["Clean Code", "Design Patterns", "You Don't Know JS"] },
    { name: "Fiction", icon: "📚", books: ["1984", "To Kill a Mockingbird", "The Great Gatsby"] },
    { name: "Self-Help", icon: "🌱", books: ["Atomic Habits", "The 7 Habits", "Think and Grow Rich"] }
  ];

  const filteredBooks = category === 'all' 
    ? bookCategories 
    : bookCategories.filter(cat => cat.name.toLowerCase() === category.toLowerCase());

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          ← Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Book Collection
            {category !== 'all' && (
              <span className="text-blue-600"> - {category.charAt(0).toUpperCase() + category.slice(1)}</span>
            )}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover carefully curated books for personal and professional growth
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link 
            to="/books" 
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              category === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Categories
          </Link>
          {bookCategories.map((cat) => (
            <Link 
              key={cat.name}
              to={`/books?category=${cat.name.toLowerCase()}`}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                category === cat.name.toLowerCase() 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.icon} {cat.name}
            </Link>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((category) => (
            <div key={category.name} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h2 className="text-xl font-bold text-gray-800">{category.name}</h2>
              </div>
              <ul className="space-y-2">
                {category.books.map((book, index) => (
                  <li key={index} className="bg-white p-3 rounded shadow text-center">
                    {book}
                  </li>
                ))}
              </ul>
              <div className="text-center mt-4">
                <Link 
                  to="/login"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read Now →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/login" 
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Access Full Library
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
