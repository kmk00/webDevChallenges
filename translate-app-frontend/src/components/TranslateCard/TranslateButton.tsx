import icon from "../../assets/Sort_alfa.svg";
import { useInputStore } from "../../store";

const TranslateButton = () => {
  const { inputValue, setTranslatedInput, languageFrom, languageTo } =
    useInputStore();

  const handleClick = async () => {
    console.log(languageFrom, languageTo, inputValue);
    if (inputValue.length > 0) {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${inputValue}!&langpair=${languageFrom}|${languageTo}`
      );
      const data = await response.json();
      console.log(data);

      setTranslatedInput(data.matches[0].translation);
    }
  };

  return (
    <button onClick={handleClick} className="translate-button">
      <img src={icon} alt="Icon"></img>
      <p>Translate</p>
    </button>
  );
};

export default TranslateButton;
