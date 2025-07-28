import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { useTranslation } from "react-i18next";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const { t } = useTranslation();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const raw = formData.get("query");
    const query = typeof raw === "string" ? raw.trim() : "";
    if (!query) {
      toast.error(t("noQuery"));
      return;
    }
    onSubmit(query);
  }

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
