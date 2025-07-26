import type { FormEvent } from "react";
import { useState } from "react";
import css from "./SearchBar.module.css";
import { useTranslation } from "react-i18next";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [input, setInput] = useState("");
  const { t } = useTranslation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(input);
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <a
          className={css.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            name="query"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoComplete="off"
            placeholder={t("searchPlaceholder")}
            autoFocus
          />
          <button className={css.button} type="submit">
            {t("searchButton")}
          </button>
        </form>
      </div>
    </header>
  );
}
