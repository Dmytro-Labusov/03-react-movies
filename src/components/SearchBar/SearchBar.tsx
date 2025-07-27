import type { FormEvent } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { useTranslation } from "react-i18next";

interface SearchBarProps {
  action: (formData: FormData) => void;
}

export default function SearchBar({ action }: SearchBarProps) {
  const { t } = useTranslation();

  const handleFormAction = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("query")?.toString().trim();

    if (!query) {
      toast.error(t("noQuery"));
      return;
    }

    action(formData);
    e.currentTarget.reset(); // сбросить форму
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
        <form className={css.form} onSubmit={handleFormAction}>
          <input
            className={css.input}
            type="text"
            name="query"
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
