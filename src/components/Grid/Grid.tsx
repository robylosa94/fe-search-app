import { Card } from "../../components";
import { UserType } from "../../types";
import s from "./Grid.module.css";

interface Props {
  users: UserType[];
  className?: string;
}

export default function Grid({ users, className }: Props) {
  const classNames = [s.grid, className].filter(Boolean).join(" ");

  return (
    <div className={classNames}>
      {users.map((user, idx: number) => (
        <Card key={idx} {...user} className={s.grid__card} />
      ))}
    </div>
  );
}
