import { UserRoleType } from "@/types";
import { Badge } from "@/components/ui";
import s from "./Filters.module.css";

interface Props {
  activeFilter: UserRoleType | null;
  loading: boolean;
  onFilterChange: (role: UserRoleType) => void;
  onFilterReset: () => void;
}

export default function Filters({
  activeFilter,
  loading,
  onFilterChange,
  onFilterReset,
}: Props) {
  const filters: UserRoleType[] = [
    "admin",
    "editor",
    "viewer",
    "guest",
    "owner",
    "inactive",
  ];

  return (
    <div className={s.filters}>
      <span className={s.filters__label}>FILTER BY:</span>
      {filters.map((filter, idx: number) => (
        <button
          key={idx}
          onClick={() =>
            activeFilter === filter ? onFilterReset() : onFilterChange(filter)
          }
          className={s.filters__button}
          aria-pressed={activeFilter === filter}
          disabled={loading}
        >
          <Badge label={filter} variant={filter} />
        </button>
      ))}
    </div>
  );
}
