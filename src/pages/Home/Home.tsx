import { useCallback, useEffect, useState } from "react";
import { Container, Grid, Text } from "@/components/ui";
import { Filters, SearchInput } from "@/components/features";
import { UserRoleType, UserType } from "@/types";
import s from "./Home.module.css";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<UserRoleType | null>(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<UserType[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const fetchUsers = useCallback(
    async (query: string, filter: UserRoleType | null): Promise<UserType[]> => {
      const url = new URL(
        "https://696d38b0f4a79b315180c9fe.mockapi.io/api/users",
      );
      if (query.trim()) url.searchParams.append("name", query);
      if (filter) url.searchParams.append("role", filter);
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch users");
      return response.json();
    },
    [],
  );

  const getUsers = useCallback(
    async (currentQuery: string, currentFilter: UserRoleType | null) => {
      setLoading(true);
      try {
        const data = await fetchUsers(currentQuery, currentFilter);
        setResults(data);
      } catch (error) {
        console.error("Error fetching users:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    },
    [fetchUsers],
  );

  useEffect(() => {
    if (hasSearched) {
      getUsers(searchQuery, activeFilter);
    }
  }, [activeFilter, hasSearched, getUsers]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    [],
  );

  const handleSearch = useCallback(async () => {
    setHasSearched(true);
    setActiveFilter(null);
    await getUsers(searchQuery, activeFilter);
  }, [getUsers, searchQuery, activeFilter]);

  const handleFilterChange = useCallback(async (role: UserRoleType) => {
    setActiveFilter(role);
  }, []);

  const handleFilterReset = useCallback(() => {
    setActiveFilter(null);
  }, []);

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
            <Filters
              activeFilter={activeFilter}
              loading={loading}
              onFilterChange={handleFilterChange}
              onFilterReset={handleFilterReset}
            />
            {loading ? (
              <div className={s.loading}>
                <Text as="p" size="sm">
                  Loading users...
                </Text>
              </div>
            ) : results.length > 0 ? (
              <Grid users={results} />
            ) : (
              <div className={s.noresults}>
                <span className={s.noresults__title}>No user found</span>
                <Text as="p" size="sm">
                  No users match your search criteria or filter.
                </Text>
              </div>
            )}
          </section>
        )}
      </Container>
    </main>
  );
}
