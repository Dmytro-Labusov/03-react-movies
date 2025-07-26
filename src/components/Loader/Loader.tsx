import css from "./Loader.module.css";
import { useTranslation } from "react-i18next";

export default function Loader() {
  const { t } = useTranslation();
  return <p className={css.text}>{t("loading")}</p>;
}
