import "./InputComponent.css";

const InputComponent = () => {
  return (
    <div className="input-component">
      <input className="input-component__input" type="text" />
      <button className="input-component__button">Add</button>
    </div>
  );
};

export default InputComponent;
