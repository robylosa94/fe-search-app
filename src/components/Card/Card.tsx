import { useState } from "react";
import { Button, ModalDetails, UserInfo } from "../../components";
import { UserType } from "../../types";
import { createPortal } from "react-dom";
import s from "./Card.module.css";

export default function Card({ ...props }: UserType) {
  const { details, ...rest } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <article className={s.card}>
        <UserInfo {...rest} size="sm" />
        <Button label="View details" onClick={toggleModal} />
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
