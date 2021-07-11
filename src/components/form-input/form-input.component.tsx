import React from "react";

import "./form-input.styles.scss";

interface formInputProps {
  name: string;
  type: string;
  value: string;
  required: any;
  id: string;
  isCodeInput: string;
  placeholder: string;
  handleChange: (e: any) => void;
  handleOnKeyDown: (e: any) => void;
}

const FormInput: React.FC<formInputProps> = (props) => {
  const {
    handleChange,
    handleOnKeyDown,
    name,
    type,
    value,
    required,
    id,
    placeholder,
    isCodeInput,
  } = props;

  return (
    <div className="group">
      <input
        className={`form-input ${isCodeInput}`}
        onChange={handleChange}
        onKeyDown={handleOnKeyDown}
        name={name}
        type={type}
        value={value}
        required={required}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};
export default FormInput;
