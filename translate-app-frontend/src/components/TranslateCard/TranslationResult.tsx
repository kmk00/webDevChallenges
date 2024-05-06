import { useInputStore } from "../../store";

const TranslationResult = () => {
  const { translatedInput } = useInputStore();

  return <div className="translate-result">{translatedInput}</div>;
};

export default TranslationResult;
