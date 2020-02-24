import React from "react";
import { render } from "@testing-library/react";
import App from "../app";

test("todo should render with empty list of tasks", () => {
  const { getByTestId } = render(<App tasks={[]} />);
  const todo = getByTestId("todo");
  expect(todo).toBeInTheDocument();
});
