import { create } from "zustand";

interface Store {
  inputValue: string;
  translatedInput: string;
  languageFrom: string;
  languageTo: string;
  error: string;
  setLanguageFrom: (value: string) => void;
  setLanguageTo: (value: string) => void;
  setInputValue: (value: string) => void;
  setTranslatedInput: (value: string) => void;
  setError: (value: string) => void;
}

export const useInputStore = create<Store>()((set) => ({
  inputValue: "",
  error: "",
  translatedInput: "",
  languageFrom: "English",
  languageTo: "French",
  setInputValue: (value) => set({ inputValue: value }),
  setTranslatedInput: (value) => set({ translatedInput: value }),
  setLanguageFrom: (value) => set({ languageFrom: value }),
  setLanguageTo: (value) => set({ languageTo: value }),
  setError: (value) => set({ error: value }),
}));
