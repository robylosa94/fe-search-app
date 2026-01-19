import { Button } from "@/components/ui";
import s from "./SearchInput.module.css";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  className?: string;
}

export default function SearchInput({
  value,
  onChange,
  onSearch,
  className,
}: Props) {
  const classNames = [s.searchInput, className].filter(Boolean).join(" ");

  return (
    <div className={classNames}>
      <span className={s.searchInput__span}>WHAT ARE YOU LOOKING FOR?</span>
      <div className={s.searchInput__form}>
        <input
          type="search"
          name="search"
          placeholder="Search by name..."
          value={value}
          aria-label="Search user by name"
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch();
            }
          }}
        />
        <Button label="Search" size="lg" onClick={onSearch} disabled={!value} />
      </div>
    </div>
  );
}
