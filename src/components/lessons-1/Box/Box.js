import s from "./Box.module.css";

export default function Box({ type = "small", classNames = "" }) {
  return <div className={s[type]}>Box</div>;
}
