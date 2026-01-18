import { useState } from "react";
import { Badge, Button, Modal, Text, Title } from "../../components";
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
  details,
  className,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const classNames = [s.card, className].filter(Boolean).join(" ");
  const badgeClasses = [s.card__badge, s[`card__badge--${role}`]].join(" ");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
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
        <Button label="View details" onClick={toggleModal} />
      </article>
      {isModalOpen && (
        <Modal toggle={toggleModal}>
          <div className={s.modal__header}>
            <Badge label={role} variant={role} className={badgeClasses} />
            <Title text={name} />
            <Text>{job_title}</Text>
          </div>
          <div className={s.modal__body}>
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
            <Text as="p" size="sm">
              Other details:
              <br />
              <strong>{details}</strong>
            </Text>
          </div>
          <div className={s.modal__footer}>
            <Button label="Close" onClick={toggleModal} />
          </div>
        </Modal>
      )}
    </>
  );
}
