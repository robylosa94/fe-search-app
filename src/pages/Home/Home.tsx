import { useState } from "react";
import { Container, Filters, Grid, SearchInput, Text } from "../../components";
import { users } from "../../data/users";
import { UserRoleType, UserType } from "../../types";
import s from "./Home.module.css";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<UserType[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    setHasSearched(true);

    const filteredUsers = searchQuery
      ? users.filter(({ name }) =>
          name.toLowerCase().includes(searchQuery.toLowerCase().trim()),
        )
      : [];

    setResults(filteredUsers);
  };

  const filters = [
    ...new Set(results.map(({ role }) => role)),
  ] as UserRoleType[];

  return (
    <main className={s.dashboard}>
      <Container>
        <header className={s.header}>
          <h1 className={s.title}>
            <strong>User</strong> Dashboard
          </h1>
          <SearchInput
            value={searchQuery}
            onChange={handleInputChange}
            onSearch={handleSearch}
          />
        </header>
        {hasSearched && (
          <section className={s.body}>
            {results.length > 0 ? (
              <>
                {filters.length > 1 && <Filters filters={filters} />}
                <Grid users={results} />
              </>
            ) : (
              <div className={s.noresults}>
                <span className={s.noresults__title}>No user found</span>
                <Text as="p" size="sm">
                  No users match your search criteria. Try a different keyword.
                </Text>
              </div>
            )}
          </section>
        )}
      </Container>
    </main>
  );
}
