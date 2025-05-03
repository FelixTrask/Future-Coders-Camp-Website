import React, { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.title = 'Future Coders Camp';
  }, []);

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignUp = async () => {
    setError('');
    if (!email) {
      setError('Please enter an email address.');
      return;
    }

    try {
      await addDoc(collection(db, 'emails'), { email, timestamp: new Date() });
      setShowPopup(true);
      setEmail('');
      setTimeout(() => setShowPopup(false), 5000);
    } catch (err) {
      console.error('Error saving to Firebase:', err);
      setError('Failed to save email. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col future-background">

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">Future Coders Camp</div>
          <nav className="space-x-6 text-sm md:text-base flex items-center">
            <a href="#top" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <span>Home</span>
            </a>
            <a href="#learn-more" className="text-gray-600 hover:text-blue-600 transition">Program</a>
            <a href="#signup" className="text-gray-600 hover:text-blue-600 transition">Register</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="top" className="flex flex-col items-center justify-center min-h-screen text-center px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-600">Future Coders Camp</h1>
        <p className="max-w-2xl text-lg text-gray-600 mb-8">
          A fun and engaging coding experience for kids aged 7-10 using Scratch.
        </p>
        <a
          href="#learn-more"
          className="relative bg-[#4b48ff] text-white font-medium text-[17px] px-4 py-[0.35em] pl-5 h-[2.8em] rounded-[0.9em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group"
        >
          <span className="mr-10">Learn More</span>
          <div
            className="absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="w-[1.1em] transition-transform duration-300 text-[#7b52b9] group-hover:translate-x-[0.1em]"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              />
            </svg>
          </div>
        </a>
      </section>

      {/* About Section */}
      <section id="learn-more" className="min-h-screen bg-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-6">About the Camp</h2>
          <p className="text-lg text-gray-700 mb-10">
            Future Coders Camp introduces kids to the world of programming through creative play, game design, and hands-on fun projects using Scratch.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-pink-100 rounded-2xl shadow-md border-2 border-pink-200 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-pink-700 mb-2">Build a Game</h3>
              <p className="text-gray-700">Kids will design and code their very own video game using Scratch.</p>
            </div>
            <div className="p-6 bg-blue-100 rounded-2xl shadow-md border-2 border-blue-200 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Who Can Join?</h3>
              <p className="text-gray-700">Any child aged 7-10 is welcome! No experience needed.</p>
            </div>
            <div className="p-6 bg-yellow-100 rounded-2xl shadow-md border-2 border-yellow-200 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-yellow-700 mb-2">Camp Fee</h3>
              <p className="text-gray-700">$60 per session, including all materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <section id="signup" className="min-h-[50vh] flex flex-col items-center justify-center text-center px-8">
        <h2 className="text-3xl font-bold mb-6">Join Our Mailing List</h2>
        <p className="max-w-xl text-gray-600 mb-8">
          Stay in the loop with camp schedules, early registration, and coding resources for kids.
        </p>

        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Your email address"
          className="border border-gray-300 p-3 rounded-lg mb-2 w-full max-w-sm"
        />
        {error && <p className="text-red-500 mb-2">{error}</p>}

        <button
          onClick={handleSignUp}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition"
        >
          Sign Up
        </button>

        {showPopup && (
          <div
            onClick={() => setShowPopup(false)}
            role="alert"
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-100 border-l-4 border-green-500 text-green-900 p-3 rounded-lg flex items-center shadow-lg z-50 transition duration-300 ease-in-out hover:bg-green-200 hover:scale-105"
          >
            <svg
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 flex-shrink-0 mr-2 text-green-600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-sm font-semibold">Success - You're all signed up!</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm">
        © 2025 Future Coders Camp. All rights reserved.
      </footer>
    </div>
  );
}

export default App;