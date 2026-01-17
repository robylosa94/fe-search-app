import { Badge, Button, Text, Title } from "../../components";
import { UserType } from "../../types";
import s from "./Card.module.css";

interface Props extends UserType {
  className?: string;
}

export default function Card({
  role,
  name,
  job_title,
  team,
  email,
  className,
}: Props) {
  const classNames = [s.card, className].filter(Boolean).join(" ");
  const badgeClasses = [s.card__badge, s[`card__badge--${role}`]].join(" ");

  return (
    <article className={classNames}>
      <div className={s.card__header}>
        <Badge label={role} variant={role} className={badgeClasses} />
        <Title text={name} />
        <Text>{job_title}</Text>
      </div>
      <div className={s.card__body}>
        <Text as="p" size="sm">
          Team:
          <br />
          <strong>{team}</strong>
        </Text>
        <Text as="p" size="sm">
          Contact information:
          <br />
          <a href={`mailto:${email}`}>{email}</a>
        </Text>
      </div>
      <Button
        label="View details"
        onClick={() => {
          console.log("open modal");
        }}
      />
    </article>
  );
}
