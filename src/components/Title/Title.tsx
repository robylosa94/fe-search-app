import { forwardRef } from "react";
import s from "./Title.module.css";

interface Props {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
}

const Title = forwardRef<HTMLHeadingElement, Props>(
  ({ text, as = "h2", className }, ref) => {
    const classNames = [s.title, className].filter(Boolean).join(" ");
    const Tag = as;

    return (
      <Tag ref={ref as React.Ref<HTMLHeadingElement>} className={classNames}>
        {text}
      </Tag>
    );
  },
);

export default Title;
