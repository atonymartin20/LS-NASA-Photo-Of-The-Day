import React from "react";
import "./App.css";
import NavBar from './components/navbar/index.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <NavBar />
      {/* Commit 2  */}
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
