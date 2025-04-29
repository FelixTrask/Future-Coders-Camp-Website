import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsetY = window.scrollY;

      setIsScrolled(offsetY > 10);
  
      const background = document.querySelector('.future-background');
      if (background) {
        background.style.backgroundPosition = `0 ${offsetY * 0.1}px`;
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  useEffect(() => {
    document.title = 'Future Coders Camp';

    // const link = document.querySelector("link[rel*='icon']");
    // link.href = (`${process.env.PUBLIC_URL}/favicon.ico`); //public folder
  }, []);

  return (
    
    <div className="min-h-screen flex flex-col future-background">

    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">Future Coders Camp</div>
        <nav className="space-x-6 text-sm md:text-base">
          <a href="#top" className="text-gray-600 hover:text-blue-600 transition">Home</a>
          <a href="#learn-more" className="text-gray-600 hover:text-blue-600 transition">Learn More</a>
          <a href="#signup" className="text-gray-600 hover:text-blue-600 transition">Sign Up</a>
        </nav>
      </div>
    </header>


      {/* Spacer under header */}
      {/* <div className="pt-24"></div> */}

      {/* Hero Section */}
      <section id="top" className="flex flex-col items-center justify-center min-h-screen text-center px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Future Coders Camp</h1>
        <p className="max-w-2xl text-lg text-gray-600 mb-8">
          Join us on a journey to master modern coding techniques, design beautiful websites, and create powerful apps.
        </p>
        <a href="#learn-more" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition">
          Get Started
        </a>
      </section>

      {/* About Section */}
      <section id="learn-more" className="min-h-screen bg-white/70 backdrop-blur-md py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About Future Coders Camp</h2>
          <p className="text-lg text-gray-700 mb-10">
            We are passionate about teaching the next generation of coders. Our curriculum covers full-stack web development, UI/UX design, and cutting-edge frameworks.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <p className="text-gray-600">Learn React, Tailwind CSS, animations, and more to build beautiful interfaces.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <p className="text-gray-600">Master Node.js, databases, APIs, authentication, and server-side skills.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Career Skills</h3>
              <p className="text-gray-600">Portfolio building, GitHub best practices, and landing your dream job in tech.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="signup" className="min-h-[50vh] flex flex-col items-center justify-center text-center px-8">
        <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
        <p className="max-w-xl text-gray-600 mb-8">
          Subscribe to our newsletter and stay up-to-date with workshops, webinars, and coding tips.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 p-3 rounded-lg mb-4 w-full max-w-sm"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition">
          Subscribe
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm">
        © 2025 Future Coders Camp. All rights reserved.
      </footer>

    </div>
  );
}

export default App;