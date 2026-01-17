import { forwardRef } from "react";
import { Badge, Button, Text, Title } from "../../components";
import s from "./Card.module.css";
import { UserType } from "../../types";

interface Props extends UserType {
  className?: string;
}

const Card = forwardRef<HTMLElement, Props>(
  ({ role, name, job_title, team, email, className }, ref) => {
    const classNames = [s.card, className].filter(Boolean).join(" ");

    return (
      <article ref={ref as React.Ref<HTMLDivElement>} className={classNames}>
        <div className={s.card__header}>
          <Badge label={role} variant={role} className={s.card__header_badge} />
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
  },
);

export default Card;
