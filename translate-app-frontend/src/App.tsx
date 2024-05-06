import "./App.css";
import Logo from "./components/Logo/Logo";
import CardsComponent from "./components/TranslateCard/CardsComponent";
import TranslateCard from "./components/TranslateCard/TranslateCard";

function App() {
  const languages: Language[] = [
    { language: "English", short: "en" },
    { language: "French", short: "fr" },
    { language: "Spanish", short: "es" },
  ];

  return (
    <main>
      <Logo />
      <CardsComponent>
        <TranslateCard type="from" languages={languages} />
        <TranslateCard type="to" languages={languages} />
      </CardsComponent>
    </main>
  );
}

export default App;
