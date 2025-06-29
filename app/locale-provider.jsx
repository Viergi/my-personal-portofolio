"use client";

import {
  createContext,
  useDebugValue,
  useEffect,
  useMemo,
  useState,
} from "react";

const LocaleContext = createContext();

const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    if (window !== "undefined") {
      const storedLanguage = localStorage.getItem("language");
      if (storedLanguage) {
        setLocale(storedLanguage);
      }
    }
  }, []);

  useEffect(() => {
    if (window !== "undefined") {
      localStorage.setItem("language", locale);
    }
  }, [locale]);

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      return prevLocale === "id" ? "en" : "id";
    });
  };

  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  return (
    <LocaleContext.Provider value={localeContextValue}>
      {children}
    </LocaleContext.Provider>
  );
};

export { LocaleProvider, LocaleContext };
