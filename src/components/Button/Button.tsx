import { forwardRef } from "react";
import s from "./Button.module.css";

type BaseProps = {
  label: string;
  size?: "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
};

type ButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
type Props = ButtonProps | LinkProps;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  (props, ref) => {
    const {
      label,
      size = "md",
      disabled = false,
      loading = false,
      ...rest
    } = props;

    const classNames = [s.button, s[`button--${size}`], "className" in props]
      .filter(Boolean)
      .join(" ");

    if ("href" in props) {
      const { href, ...linkRest } = rest as LinkProps;

      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classNames}
          aria-disabled={disabled}
          {...linkRest}
        >
          {label}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classNames}
        disabled={disabled || loading}
        aria-busy={loading}
        {...(rest as ButtonProps)}
      >
        {label}
      </button>
    );
  },
);

export default Button;
