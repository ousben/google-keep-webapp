import React, { useState } from "react";
import "./Note.css";

function Note() {
  const [text, setText] = useState("");
  const [size, setSize] = useState("small-note");
  const [readOnlyValue, setReadOnlyValue] = useState(true);

  const handleClick = () => {
    setSize(size==="small-note" ? "large-note" : "small-note");
    setReadOnlyValue(readOnlyValue === true ? false : true);
  }

  return (
    <div className={size + " note"} onClick={handleClick}>
      <input type="text" readOnly={readOnlyValue} />
      <textarea id="textarea" readOnly={readOnlyValue}>{text}</textarea>
    </div>
  );
}

export default Note;