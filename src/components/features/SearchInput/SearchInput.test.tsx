import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import SearchInput from "./SearchInput";
import { useState } from "react";
import { Grid } from "@/components/ui";
import { UserType } from "@/types";

describe("SearchInput", () => {
  test("digita e clicca search", async () => {
    const onSearchMock = vi.fn();
    const TestWrapper = () => {
      const [value, setValue] = useState("");
      return (
        <SearchInput
          value={value}
          onSearch={onSearchMock}
          onChange={(e) => setValue(e.target.value)}
        />
      );
    };

    render(<TestWrapper />);

    const input = screen.getByPlaceholderText(/search/i);
    await user.type(input, "test");
    expect(input).toHaveValue("test");

    const button = screen.getByRole("button", { name: /search/i });
    await user.click(button);
  });

  test("digita Arianna, clicca search e verifica che ci sia la card con nome Arianna", async () => {
    const onSearchMock = vi.fn();

    const TestWrapper = () => {
      const [value, setValue] = useState("");
      const [results, setResults] = useState<UserType[]>([]);

      const handleSearch = () => {
        const query = value;
        onSearchMock(query);
        if (query === "Arianna") {
          setResults([
            {
              role: "editor",
              name: "Arianna Russo",
              job_title: "Product Designer",
              team: "Design",
              email: "arianna.russo@company.com",
            },
          ]);
        }
      };

      return (
        <div>
          <SearchInput
            value={value}
            onSearch={handleSearch}
            onChange={(e) => setValue(e.target.value)}
          />
          <div data-testid="results">
            <Grid users={results} />
          </div>
        </div>
      );
    };

    render(<TestWrapper />);

    const input = screen.getByPlaceholderText(/search/i);
    await user.type(input, "Arianna");
    expect(input).toHaveValue("Arianna");

    const button = screen.getByRole("button", { name: /search/i });
    await user.click(button);

    await waitFor(() => {
      expect(onSearchMock).toHaveBeenCalledWith("Arianna");
    });

    const results = screen.getByTestId("results");
    expect(results).toHaveTextContent("Arianna");
  });
});
