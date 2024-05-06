import { useEffect } from "react";
import { useInputStore } from "../../store";

const TextInput = () => {
  const {
    inputValue,
    setInputValue,
    languageFrom,
    languageTo,
    setTranslatedInput,
    setError,
  } = useInputStore();

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const getData = setTimeout(async () => {
      if (inputValue.length > 0) {
        try {
          const response = await fetch(
            `https://api.mymemory.translated.net/get?q=${inputValue}!&langpair=${languageFrom}|${languageTo}`
          );
          const data = await response.json();

          if (data.responseStatus != 200) {
            setError(data.responseDetails);
            return;
          }

          setTranslatedInput(data.matches[0].translation);
          setError("");
        } catch (error) {
          throw error;
        }
      }
    }, 1000);

    return () => clearTimeout(getData);
  }, [inputValue]);

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
