import { UserRoleType } from "../../types";
import Badge from "../Badge";
import s from "./Filters.module.css";

interface Props {
  filters: UserRoleType[];
  className?: string;
}

export default function Filters({ filters, className }: Props) {
  const classNames = [s.filters, className].filter(Boolean).join(" ");

  return (
    <div className={classNames}>
      <span className={s.filters__label}>FILTER BY:</span>
      {filters.map((filter, idx: number) => (
        <button key={idx}>
          <Badge label={filter} variant={filter} />
        </button>
      ))}
    </div>
  );
}
