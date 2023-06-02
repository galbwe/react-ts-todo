import {
  ChangeEventHandler,
  MouseEventHandler,
  KeyboardEventHandler,
} from "react";
import styles from './InputField.module.css';

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
    <div className={styles.InputField}>
      <input value={text} onChange={handleChange} onKeyDown={handleKeyPress} />
      <button onClick={handleSubmit}>{"Create"}</button>
    </div>
  );
};

export default InputField;
