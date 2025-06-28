
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const QuotePage = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const quotes = [
    {
      text: "Be proud of challenges that dare to challenge you.",
      author: "Kana Hoo",
      category: "Challenge"
    },
    {
      text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
      author: "Alan Watts",
      category: "Change"
    },
    {
      text: "Growth begins at the end of your comfort zone.",
      author: "Neale Donald Walsch",
      category: "Growth"
    },
    {
      text: "Your mindset determines your reality.",
      author: "Unknown",
      category: "Mindset"
    },
    {
      text: "Every setback is a setup for a comeback.",
      author: "T.D. Jakes",
      category: "Resilience"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 pt-20">
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8">
          ← Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Daily Inspiration</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful quotes to fuel your growth and transformation journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-12 shadow-lg text-center mb-8">
            <div className="mb-6">
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                {quotes[currentQuoteIndex].category}
              </span>
            </div>
            <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-6 leading-relaxed">
              "{quotes[currentQuoteIndex].text}"
            </blockquote>
            <cite className="text-lg text-gray-600 font-medium">
              — {quotes[currentQuoteIndex].author}
            </cite>
            
            <div className="flex justify-center gap-2 mt-8">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentQuoteIndex ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentQuoteIndex(index)}
                />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {quotes.filter((_, index) => index !== currentQuoteIndex).slice(0, 3).map((quote, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <blockquote className="text-gray-700 italic mb-3">
                  "{quote.text}"
                </blockquote>
                <cite className="text-sm text-gray-500">— {quote.author}</cite>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/login" 
            className="bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition-colors"
          >
            Get Daily Quotes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
