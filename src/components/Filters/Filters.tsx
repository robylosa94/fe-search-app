import Badge from "../Badge";
import s from "./Filters.module.css";

interface Props {
  className?: string;
}

const filters = ["admin", "editor", "viewer", "guest", "owner", "inactive"];

export default function Filters({ className }: Props) {
  const classNames = [s.filters, className].filter(Boolean).join(" ");

  return (
    <div className={classNames}>
      <span className={s.filters__label}>FILTER BY:</span>
      {filters.map((filter, idx) => (
        <button key={idx}>
          <Badge label={filter} variant={filter} />
        </button>
      ))}
    </div>
  );
}
