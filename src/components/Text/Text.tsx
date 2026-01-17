import s from "./Text.module.css";

interface Props {
  as?: "div" | "p";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

export default function Text({
  as = "div",
  size = "md",
  className,
  children,
}: Props) {
  const classNames = [s.text, s[`text--${size}`], className]
    .filter(Boolean)
    .join(" ");
  const Tag = as;

  return <Tag className={classNames}>{children}</Tag>;
}
