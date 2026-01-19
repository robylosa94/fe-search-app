import { Badge, Text, Title } from "@/components/ui";
import { UserType } from "@/types";
import s from "./UserInfo.module.css";

interface Props extends UserType {
  size?: "sm";
}

export default function UserInfo({
  name,
  role,
  job_title,
  team,
  email,
  details,
  size,
}: Props) {
  const badgeClasses = [s.userInfo__badge, s[`userInfo__badge--${role}`]].join(
    " ",
  );

  return (
    <div className={s.userInfo}>
      <div className={s.userInfo__header}>
        <Badge label={role} variant={role} className={badgeClasses} />
        <Title text={name} className={s.userInfo__title} />
        <Text>{job_title}</Text>
      </div>
      <div className={s.userInfo__body}>
        <Text as="p" size={size}>
          Team:
          <br />
          <strong>{team}</strong>
        </Text>
        <Text as="p" size={size}>
          Contact information:
          <br />
          <a href={`mailto:${email}`}>{email}</a>
        </Text>
        {details && (
          <Text as="p" size={size}>
            Other details:
            <br />
            <strong>{details}</strong>
          </Text>
        )}
      </div>
    </div>
  );
}
