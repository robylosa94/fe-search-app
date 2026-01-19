import { useState } from "react";
import { Button, ModalDetails, UserInfo } from "../../components";
import { UserType } from "../../types";
import { createPortal } from "react-dom";
import s from "./Card.module.css";

interface Props extends UserType {
  className?: string;
}

export default function Card({ className, ...props }: Props) {
  const { details, ...rest } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const classNames = [s.card, className].filter(Boolean).join(" ");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <article className={classNames}>
        <UserInfo {...rest} size="sm" />
        <Button
          label="View details"
          onClick={toggleModal}
          className={s.card__button}
        />
      </article>
      {createPortal(
        isModalOpen && (
          <ModalDetails toggle={toggleModal} {...rest} details={details} />
        ),
        document.body,
      )}
    </>
  );
}
