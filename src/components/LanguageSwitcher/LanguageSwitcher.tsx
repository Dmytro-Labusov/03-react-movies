import { useTranslation } from "react-i18next";
import css from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: "en" | "ukr") => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={css.switcher}>
      <button onClick={() => changeLanguage("en")}>🇬🇧 EN</button>
      <button onClick={() => changeLanguage("ukr")}>🇺🇦 UKR</button>
    </div>
  );
}
