import React, { useState, useEffect } from 'react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.title = 'Future Coders Camp';

    // const link = document.querySelector("link[rel*='icon']");
    // link.href = (`${process.env.PUBLIC_URL}/favicon.ico`); //public folder
  }, []);

  return (
    
    <div className="min-h-screen flex flex-col bg-gray-100">

      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"}`}>
        wsg
      </header>

      <p className="bg-blue-900/70 backdrop-blur-lg p-8 rounded-xl max-w-3xl mx-auto shadow-glow text-center">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </p>

    </div>
  );
}

export default App;
