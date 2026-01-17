export interface UserType {
  role: "admin" | "editor" | "viewer" | "guest" | "owner" | "inactive" | string;
  name: string;
  job_title: string;
  team: string;
  email: string;
  details: string;
}
