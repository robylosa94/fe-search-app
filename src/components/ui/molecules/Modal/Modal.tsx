import s from "./Modal.module.css";

interface Props {
  toggle?: () => void;
  children: React.ReactNode;
}

export default function Modal({ toggle, children }: Props) {
  return (
    <div className={s.modal} onClick={toggle}>
      <div className={s.modal__inner} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
