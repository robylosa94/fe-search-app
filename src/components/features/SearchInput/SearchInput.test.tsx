import { describe, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import user, { userEvent } from "@testing-library/user-event";
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
    const mockUser = {
      role: "editor",
      name: "Arianna Russo",
      job_title: "Product Designer",
      team: "Design",
      email: "arianna.russo@company.com",
    };
    const mockApiResponse = [mockUser];

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockApiResponse,
      }),
    );

    const onSearchMock = vi.fn();

    const TestWrapper = () => {
      const [value, setValue] = useState("");
      const [results, setResults] = useState<UserType[]>([]);

      const handleSearch = async () => {
        const query = value;
        onSearchMock(query);
        const response = await fetch(
          `https://696d38b0f4a79b315180c9fe.mockapi.io/api/users?name=${query}`,
        );
        if (response.ok) {
          const data = await response.json();
          setResults(data);
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
    await userEvent.type(input, "Arianna");
    expect(input).toHaveValue("Arianna");

    const button = screen.getByRole("button", { name: /search/i });
    await userEvent.click(button);

    await waitFor(() => {
      expect(onSearchMock).toHaveBeenCalledWith("Arianna");
      expect(fetch).toHaveBeenCalledWith(
        "https://696d38b0f4a79b315180c9fe.mockapi.io/api/users?name=Arianna",
      );
    });

    const resultsContainer = screen.getByTestId("results");
    expect(resultsContainer).toHaveTextContent("Arianna Russo");
  });
});
