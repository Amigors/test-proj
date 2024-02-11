import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders app correctly", () => {
  // given
  render(<App />);

  // when / then
  expect(screen.getByText("Awesome Bank")).toBeInTheDocument();
});

test("/* add your test case description here */", () => {});
