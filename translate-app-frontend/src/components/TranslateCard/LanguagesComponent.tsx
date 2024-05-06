import expandArrow from "../../assets/Expand_down.svg";
import { useInputStore } from "../../store";

const LanguagesComponent = ({
  languages,
  type,
}: {
  languages: Language[];
  type: "from" | "to";
}) => {
  const { languageFrom, languageTo, setLanguageFrom, setLanguageTo } =
    useInputStore();

  const handleLanguageChange = (e: any) => {
    const langShort = e.target.id.split("-")[0];

    if (type === "from") {
      setLanguageFrom(langShort);
    }

    if (type === "to") {
      setLanguageTo(langShort);
    }
  };

  if (type === "from") {
    return (
      <div className="language">
        {languages.map((language: Language) => (
          <label
            className="language__label"
            key={language.language}
            htmlFor={`${language.short}-input-${type}`}
          >
            <p className="language__text ">
              {language.language}

              <img
                className="language__arrow"
                src={expandArrow}
                alt="expand arrow"
              />
            </p>
            <input
              onChange={handleLanguageChange}
              id={`${language.short}-input-${type}`}
              type="checkbox"
              value={language.short}
              checked={language.short === languageFrom}
              className="language__input"
            ></input>
          </label>
        ))}
      </div>
    );
  }

  if (type === "to") {
    return (
      <div className="language">
        {languages.map((language: Language) => (
          <label
            className="language__label"
            key={language.language}
            htmlFor={`${language.short}-input-${type}`}
          >
            <p className="language__text ">
              {language.language}
              <img
                className="language__arrow"
                src={expandArrow}
                alt="expand arrow"
              />
            </p>
            <input
              onChange={handleLanguageChange}
              id={`${language.short}-input-${type}`}
              type="checkbox"
              value={language.short}
              checked={language.short === languageTo}
              className="language__input"
            ></input>
          </label>
        ))}
      </div>
    );
  }
};

export default LanguagesComponent;
