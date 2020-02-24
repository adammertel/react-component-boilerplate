import React from "react";
import { render } from "@testing-library/react";
import Input from "../input";

test("input should render with empty value", () => {
  const { container } = render(<Input value="" />);
  const input = container.querySelector("input");
  expect(input).toBeInTheDocument();
});

test("input should render with long value", () => {
  const { container } = render(
    <Input value="asdoasjdoasjodaskodjasojhdiasohdfasojhfaeijdqwpihedqwpihdiwph" />
  );
  const input = container.querySelector("input");
  expect(input).toBeInTheDocument();
});
