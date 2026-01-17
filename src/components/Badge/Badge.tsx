import s from "./Badge.module.css";

interface Props {
  label: string;
  variant:
    | "admin"
    | "editor"
    | "viewer"
    | "guest"
    | "owner"
    | "inactive"
    | string;
  className?: string;
}

export default function Badge({ label, variant, className }: Props) {
  const classNames = [s.badge, s[`badge--${variant}`], className]
    .filter(Boolean)
    .join(" ");

  return <div className={classNames}>{label}</div>;
}
