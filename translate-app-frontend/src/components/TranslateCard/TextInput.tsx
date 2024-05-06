import { useState } from "react";
import { useInputStore } from "../../store";

const TextInput = () => {
  const { inputValue, setInputValue } = useInputStore();

  const handleChange = (e: any) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <div className="translate-input">
      <textarea
        onChange={handleChange}
        value={inputValue}
        id="translate-input-from"
        className="translate-input__textarea"
        maxLength={500}
      />
      <p className="translate-input__counter">{inputValue.length}/500</p>
    </div>
  );
};

export default TextInput;
