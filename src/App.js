import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Note from "./components/Note/Note";
import './App.css';

function App() {
  return (
    <div className="App">
      <Note />
      <Note />
    </div>
  );
}

export default App;
