import { forwardRef } from "react";
import s from "./Text.module.css";

interface Props {
  as?: "div" | "p";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

const Text = forwardRef<HTMLDivElement, Props>(
  ({ as = "div", size = "md", className, children }, ref) => {
    const classNames = [s.text, s[`text--${size}`], className]
      .filter(Boolean)
      .join(" ");
    const Tag = as;

    return (
      <Tag ref={ref as React.Ref<HTMLDivElement>} className={classNames}>
        {children}
      </Tag>
    );
  },
);

export default Text;
