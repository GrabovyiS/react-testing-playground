import { render, screen } from "@testing-library/react";

import App from "./App";
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  // it("Correct snapshot on mount", () => {
  //   render(<App />);
  //   expect(screen.getByRole("main")).toMatchSnapshot();
  // });

  it("Correct counter after increment", () => {
    render(<App />);
    expect(screen.getByText("1")).toBeTruthy();
  });

  it("Correct counter after click", async () => {
    render(<App />);

    const user = userEvent.setup();
    const button = screen.getByText("click");

    await user.click(button);

    expect(screen.getByText("2")).toBeTruthy();
  });

  it("Correct heading after click", async () => {
    // Important note: things unmount after every test
    render(<App />);
    const user = userEvent.setup();
    const button = screen.getByRole("button");

    await user.click(button);

    const heading = screen.getByText("Давай встречаться");
    expect(heading).toBeInTheDocument();
  });
});
