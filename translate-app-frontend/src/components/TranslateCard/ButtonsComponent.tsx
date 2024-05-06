import Button from "./Button";
import TranslateButton from "./TranslateButton";
import soundIcon from "../../assets/sound_max_fill.svg";
import copyIcon from "../../assets/Copy.svg";

const ButtonsComponent = ({ type }: { type: "from" | "to" }) => {
  return (
    <div className="buttons-component">
      <div className="buttons-component__left">
        <Button icon={soundIcon} />
        <Button icon={copyIcon} />
      </div>
      {type === "from" && <TranslateButton />}
    </div>
  );
};

export default ButtonsComponent;
