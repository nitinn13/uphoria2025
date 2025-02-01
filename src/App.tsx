import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './pages/Home';
import EventCategory from './pages/EventCategory';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const updateTimelineProgress = () => {
      const timeline = document.querySelector('.timeline-progress');
      if (timeline) {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const maxScroll = documentHeight - windowHeight;
        const scrollPercentage = (scrollPosition / maxScroll) * 100;
        timeline.style.height = `${Math.min(100, scrollPercentage)}%`;
      }
    };

    window.addEventListener('scroll', updateTimelineProgress);
    return () => window.removeEventListener('scroll', updateTimelineProgress);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-uphoriadark bg-cover bg-center bg-fixed text-white font-times " >
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<EventCategory />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;