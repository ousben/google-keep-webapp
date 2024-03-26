import React from 'react';
import AddNote from './AddNote/AddNote';
import Note from './Note/Note';
import "./Wrapper.css";

function Wrapper() {
  return (
    <div>
      <AddNote />
      <Note />
    </div>
  )
}

export default Wrapper;