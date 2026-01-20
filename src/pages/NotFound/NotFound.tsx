import { Container, Title } from "@/components/ui";
import s from "./NotFound.module.css";

export default function NotFound() {
  return (
    <main className={s.notFound}>
      <Container>
        <div className={s.notFound__image}>
          <img src="/lost.gif" alt="Man lost" width={198} height={187} />
        </div>
        <h1 className={s.notFound__title}>Error 404</h1>
        <Title as="h2" text="The page you are looking for does not exist." />
      </Container>
    </main>
  );
}
