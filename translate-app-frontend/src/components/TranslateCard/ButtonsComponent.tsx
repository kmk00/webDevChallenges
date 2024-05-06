import Button from "./Button";
import TranslateButton from "./TranslateButton";
import copyIcon from "../../assets/Copy.svg";
import { useInputStore } from "../../store";

const ButtonsComponent = ({ type }: { type: "from" | "to" }) => {
  const { inputValue, translatedInput } = useInputStore();

  return (
    <div className="buttons-component">
      <div className="buttons-component__left">
        <Button
          action={() =>
            type === "from"
              ? navigator.clipboard.writeText(inputValue)
              : navigator.clipboard.writeText(translatedInput)
          }
          icon={copyIcon}
        />
      </div>
      {type === "from" && <TranslateButton />}
    </div>
  );
};

export default ButtonsComponent;
