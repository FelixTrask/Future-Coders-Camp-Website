import React, { useEffect } from 'react';


function App() {

  useEffect(() => {
    document.title = 'Future Coders Camp';

    // const link = document.querySelector("link[rel*='icon']");
    // link.href = (`${process.env.PUBLIC_URL}/favicon.ico`); //public folder
  }, []);

  return (
    <div class="bg-bg-light text-white h-screen flex flex-col px-4 py-8 font-sans relative">
      <header class="bg-blue-900/70 backdrop-blur-lg p-8 rounded-xl max-w-3xl mx-auto shadow-glow text-center">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          class="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
