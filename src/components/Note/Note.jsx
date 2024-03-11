import React, { useState } from "react";
import "./Note.css";

function Note() {
  const [text, setText] = useState("");
  const [size, setSize] = useState("small-note");

  const handleClick = () => {
    setSize(size==="small-note" ? "large-note" : "small-note");
  }

  return (
    <div className={size} onClick={handleClick}>
      <h1>title</h1>
      <textarea>{text}</textarea>
    </div>
  );
}

export default Note;