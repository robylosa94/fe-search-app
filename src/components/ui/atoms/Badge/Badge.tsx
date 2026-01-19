import { UserRoleType } from "../../types";
import s from "./Badge.module.css";

interface Props {
  label: string;
  variant: UserRoleType;
  className?: string;
}

export default function Badge({ label, variant, className }: Props) {
  const classNames = [s.badge, s[`badge--${variant}`], className]
    .filter(Boolean)
    .join(" ");

  return <div className={classNames}>{label}</div>;
}
