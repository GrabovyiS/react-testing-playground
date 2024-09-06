import { render, screen } from "@testing-library/react";

import App from "./App";
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("Correct snapshot on mount", () => {
    render(<App />);
    expect(screen.getByRole("main")).toMatchSnapshot();
  });

  it("Correct heading after click", async () => {
    // Important note: things unmount after every test
    render(<App />);
    const user = userEvent.setup();
    const button = screen.getByRole("button");

    await user.click(button);

    const heading = screen.getByRole("heading");
    expect(heading.textContent).toEqual("Давай встречаться");
  });
});
