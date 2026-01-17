import { forwardRef } from "react";
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

const Badge = forwardRef<HTMLDivElement, Props>(
  ({ label, variant, className }, ref) => {
    const classNames = [s.badge, s[`badge--${variant}`], className]
      .filter(Boolean)
      .join(" ");

    return (
      <div ref={ref as React.Ref<HTMLDivElement>} className={classNames}>
        {label}
      </div>
    );
  },
);

export default Badge;
