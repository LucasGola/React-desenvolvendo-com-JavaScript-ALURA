import { useState } from "react";
import "./index.css";

const TextLabel = (props) => {
  const onTyping = (event) => {
    props.saveChanges(event.target.value)
  };

  return (
    <div className="text-label">
      <label>{props.title}</label>
      <input value={props.value} onChange={onTyping} required={props.required} placeholder={props.placeholder} />
    </div>
  );
};

export default TextLabel;