import {
  ChangeEventHandler,
  MouseEventHandler,
  KeyboardEventHandler,
} from "react";

interface InputFieldProps {
  text: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
  handleKeyPress: KeyboardEventHandler<HTMLInputElement>;
}

const InputField = ({
  text,
  handleChange,
  handleSubmit,
  handleKeyPress,
}: InputFieldProps) => {
  return (
    <div className="InputField">
      <input value={text} onChange={handleChange} onKeyDown={handleKeyPress} />
      <button onClick={handleSubmit}>{"Submit"}</button>
    </div>
  );
};

export default InputField;
