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

export default function Button({ ...props }: Props) {
  const {
    label,
    size = "md",
    disabled = false,
    loading = false,
    className,
    ...rest
  } = props;

  const classNames = [s.button, s[`button--${size}`], className]
    .filter(Boolean)
    .join(" ");

  if ("href" in props) {
    const { href, ...linkRest } = rest as LinkProps;

    return (
      <a
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
      className={classNames}
      disabled={disabled || loading}
      aria-busy={loading}
      {...(rest as ButtonProps)}
    >
      {label}
    </button>
  );
}
