import "./index.css"

const TextLabel = (props) => {
  return (
    <div className="text-label">
      <label>{props.title}</label>
      <input placeholder={props.placeholder}/>
    </div>
  );
};

export default TextLabel;