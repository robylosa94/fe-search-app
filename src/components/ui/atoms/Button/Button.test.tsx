import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { vi } from "vitest";

describe("Button", () => {
  test("renderizza correttamente il contenuto testuale", () => {
    render(<Button label="Click me" />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  test("esegue la funzione onClick", () => {
    const handleClick = vi.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applica la classe corretta in base alla size", () => {
    render(<Button label="Size lg" size="lg" />);
    const button = screen.getByText("Size lg");
    expect(button.className).toMatch(/button--lg/);
  });
});
