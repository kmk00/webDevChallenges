import Button from "./Button";
import ButtonsComponent from "./ButtonsComponent";
import LanguagesComponent from "./LanguagesComponent";
import TextInput from "./TextInput";
import icon from "../../assets/Horizontal_top_left_main.svg";
import TranslationResult from "./TranslationResult";
import { useInputStore } from "../../store";

const TranslateCard = ({
  languages,
  type,
}: {
  languages: Language[];
  type: "from" | "to";
}) => {
  const {
    languageFrom,
    languageTo,
    setLanguageFrom,
    setLanguageTo,
    inputValue,
    setTranslatedInput,
    translatedInput,
    setInputValue,
  } = useInputStore();

  const switchLanguages = () => {
    console.log(languageFrom, languageTo);
    const from = languageFrom;
    setLanguageFrom(languageTo);
    setLanguageTo(from);
    const fromInput = inputValue;
    setInputValue(translatedInput);
    setTranslatedInput(fromInput);
  };

  return (
    <div className="translation-card">
      <div className="translation-card__container">
        <div className="translation-card__top">
          <LanguagesComponent type={type} languages={languages} />
          <Button action={switchLanguages} icon={icon} />
        </div>
        <div className="divider"></div>
        {type === "from" && <TextInput />}
        {type === "to" && <TranslationResult />}
      </div>
      <ButtonsComponent type={type} />
    </div>
  );
};

export default TranslateCard;
