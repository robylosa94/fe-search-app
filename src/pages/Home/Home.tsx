import { Container, Filters, Grid, SearchInput } from "../../components";
import { users } from "../../data/users";
import s from "./Home.module.css";

export default function Home() {
  return (
    <main className={s.dashboard}>
      <Container>
        <header className={s.header}>
          <h1 className={s.title}>
            <strong>User</strong> Dashboard
          </h1>
          <SearchInput />
        </header>
        <section className={s.body}>
          <Filters />
          <Grid users={users} />
        </section>
      </Container>
    </main>
  );
}
