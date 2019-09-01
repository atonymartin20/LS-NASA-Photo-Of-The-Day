import React from "react";
import "./App.css";
import NavBar from './components/navbar/index.js';
import Footer from './components/footer/index.js';
import Main from './components/main-content/index.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
