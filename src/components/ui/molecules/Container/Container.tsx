import s from "./Container.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: Props) {
  const classNames = [s.container, className].filter(Boolean).join(" ");

  return <div className={classNames}>{children}</div>;
}
