import s from "./Title.module.css";

interface Props {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
}

export default function Title({ text, as = "h2", className }: Props) {
  const classNames = [s.title, className].filter(Boolean).join(" ");
  const Tag = as;

  return <Tag className={classNames}>{text}</Tag>;
}
