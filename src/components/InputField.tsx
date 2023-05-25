import { ChangeEventHandler, MouseEventHandler} from "react"

interface InputFieldProps {
    text: string;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    handleSubmit: MouseEventHandler<HTMLButtonElement>;
}

const InputField = ({ text, handleChange, handleSubmit }: InputFieldProps) => {
    return (
        <div className="InputField">
            <input value={text} onChange={handleChange} />
            <button onClick={handleSubmit}>{'Submit'}</button>
        </div>
    )
}

export default InputField;
