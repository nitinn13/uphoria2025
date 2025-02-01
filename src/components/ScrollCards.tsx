import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample card data
const initialCards = [
  { id: 1, category: 'Technology', title: 'AI Trends', description: 'Latest developments in artificial intelligence' },
  { id: 2, category: 'Design', title: 'UI Patterns', description: 'Modern interface design patterns' },
  { id: 3, category: 'Development', title: 'React Tips', description: 'Best practices for React development' },
  { id: 4, category: 'Technology', title: 'Cloud Computing', description: 'Evolution of cloud services' },
  { id: 5, category: 'Design', title: 'Color Theory', description: 'Understanding color in design' },
  { id: 6, category: 'Development', title: 'State Management', description: 'Modern state management approaches' },
];

const ScrollCards = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get unique categories for dropdown
  const categories = ['All', ...new Set(initialCards.map(card => card.category))];
  
  // Filter cards based on selected category
  const filteredCards = selectedCategory === 'All'
    ? initialCards
    : initialCards.filter(card => card.category === selectedCategory);
    
  // Scroll handler functions
  const scroll = (direction) => {
    const container = document.getElementById('card-container');
    const scrollAmount = direction === 'left' ? -320 : 320;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-gray-50">
      {/* Dropdown Selection */}
      <div className="mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-48 px-4 py-2 border rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Cards Container with Scroll Buttons */}
      <div className="relative">
        {/* Left scroll button */}
        <button
          onClick={() => scroll('left')}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-200"
        >
          <ChevronLeft className="w-6 h-6 text-purple-600" />
        </button>

        {/* Cards container */}
        <div
          id="card-container"
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {filteredCards.map(card => (
            <div
              key={card.id}
              className="min-w-[300px] flex-shrink-0 p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 snap-start"
              style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
              }}
            >
              <div className="text-white">
                <div className="text-sm font-semibold mb-2 opacity-80">
                  {card.category}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {card.title}
                </h3>
                <p className="opacity-90">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right scroll button */}
        <button
          onClick={() => scroll('right')}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-200"
        >
          <ChevronRight className="w-6 h-6 text-purple-600" />
        </button>
      </div>
    </div>
  );
};

export default ScrollCards;