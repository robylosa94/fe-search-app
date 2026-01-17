import Button from "../Button";
import s from "./SearchInput.module.css";

interface Props {
  className?: string;
}

export default function SearchInput({ className }: Props) {
  const classNames = [s.searchInput, className].filter(Boolean).join(" ");

  return (
    <div className={classNames}>
      <span className={s.searchInput__label}>WHAT ARE YOU LOOKING FOR?</span>
      <form className={s.searchInput__form}>
        <input type="search" name="search" placeholder="Search by name..." />
        <Button type="submit" label="Search" size="lg" />
      </form>
    </div>
  );
}
