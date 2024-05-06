import Button from "./Button";
import ButtonsComponent from "./ButtonsComponent";
import LanguagesComponent from "./LanguagesComponent";
import TextInput from "./TextInput";
import icon from "../../assets/Horizontal_top_left_main.svg";
import TranslationResult from "./TranslationResult";

const TranslateCard = ({
  languages,
  type,
}: {
  languages: Language[];
  type: "from" | "to";
}) => {
  console.log(languages);
  return (
    <div className="translation-card">
      <div className="translation-card__top">
        <LanguagesComponent type={type} languages={languages} />
        <Button icon={icon} />
      </div>
      <div className="divider"></div>
      {type === "from" && <TextInput />}
      {type === "to" && <TranslationResult />}
      <ButtonsComponent type={type} />
    </div>
  );
};

export default TranslateCard;
