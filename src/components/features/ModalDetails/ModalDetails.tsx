import { Modal, Button } from "@/components/ui";
import { UserInfo } from "@/components/features";
import { UserType } from "@/types";
import s from "./ModalDetails.module.css";

interface Props extends UserType {
  toggle: () => void;
}

export default function ModalDetails({ toggle, ...props }: Props) {
  return (
    <Modal toggle={toggle}>
      <UserInfo {...props} />
      <div className={s.modalDetails__footer}>
        <Button label="Close" onClick={toggle} />
      </div>
    </Modal>
  );
}
