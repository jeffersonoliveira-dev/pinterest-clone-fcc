import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "../components/Dashboard/index";
afterEach(cleanup);

it("render component ", () => {
  const { asFragment } = render(<Dashboard />);

  expect(asFragment()).toMatchSnapshot();
});

it("text render", () => {
  const { getByText } = render(<Dashboard text="this is the dashboard" />);

  expect(getByText("this is the dashboard")).not.toHaveClass("page");
});
