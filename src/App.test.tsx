import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  test("naviga tra le pagine", async () => {
    // Check homepage
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();

    // Check 404
    const badPath = "/pagina-non-esistente";
    window.history.pushState({}, "Page not found", badPath);
    render(
      <MemoryRouter initialEntries={[badPath]}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });
});
