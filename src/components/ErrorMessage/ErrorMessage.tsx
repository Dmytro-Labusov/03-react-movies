import css from "./ErrorMessage.module.css";
import { useTranslation } from "react-i18next";

export default function ErrorMessage() {
  const { t } = useTranslation();
  return <p className={css.text}>{t("error")}</p>;
}
