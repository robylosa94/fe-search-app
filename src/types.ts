export type UserRoleType =
  | "admin"
  | "editor"
  | "viewer"
  | "guest"
  | "owner"
  | "inactive";

export interface UserType {
  role: UserRoleType;
  name: string;
  job_title: string;
  team: string;
  email: string;
  details?: string;
}
