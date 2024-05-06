import "./App.css";
import Logo from "./components/Logo/Logo";
import CardsComponent from "./components/TranslateCard/CardsComponent";
import TranslateCard from "./components/TranslateCard/TranslateCard";
import { useInputStore } from "./store";

function App() {
  const languages: Language[] = [
    { language: "English", short: "en" },
    { language: "French", short: "fr" },
    { language: "Spanish", short: "es" },
    { language: "Portuguese", short: "pt" },
    { language: "Russian", short: "ru" },
    { language: "Polish", short: "pl" },
  ];

  const { error } = useInputStore();

  return (
    <main>
      <Logo />
      {error && <p className="paragraph error">{error}</p>}
      <CardsComponent>
        <TranslateCard type="from" languages={languages} />
        <TranslateCard type="to" languages={languages} />
      </CardsComponent>
    </main>
  );
}

export default App;
