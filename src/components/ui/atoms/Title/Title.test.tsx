import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title", () => {
  test("renderizza un titolo h2 di default", () => {
    render(<Title text="Test Title" />);
    const titleElement = screen.getByText("Test Title");
    expect(titleElement.tagName).toBe("H2");
  });

  test("renderizza un titolo h3", () => {
    render(<Title text="Test H3" as="h3" />);
    const titleElement = screen.getByText("Test H3");
    expect(titleElement.tagName).toBe("H3");
  });
});
