import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import { Badge, Button, Card } from "./components";
import { UserType } from "./types";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const users = [
  {
    role: "admin",
    name: "George Harris",
    job_title: "Software Engineer",
    team: "Security",
    email: "george.harris@example.com",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    role: "admin",
    name: "George Harris",
    job_title: "Software Engineer",
    team: "Security",
    email: "george.harris@example.com",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    role: "admin",
    name: "George Harris",
    job_title: "Software Engineer",
    team: "Security",
    email: "george.harris@example.com",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    role: "admin",
    name: "George Harris",
    job_title: "Software Engineer",
    team: "Security",
    email: "george.harris@example.com",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    role: "admin",
    name: "George Harris",
    job_title: "Software Engineer",
    team: "Security",
    email: "george.harris@example.com",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    role: "admin",
    name: "George Harris",
    job_title: "Software Engineer",
    team: "Security",
    email: "george.harris@example.com",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

root.render(
  <React.StrictMode>
    <Button label="Button" />
    <Badge label="Badge" variant="guest" />
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 12,
      }}
    >
      {users.map((user: UserType, idx: number) => (
        <Card key={idx} {...user} />
      ))}
    </div>
  </React.StrictMode>,
);
