import React from "react";
import { render, cleanup } from "@testing-library/react";
import Dashboard from "../components/Dashboard/index";
afterEach(cleanup);

test("render component ", () => {
  const { asFragment } = render(<Dashboard />);
  expect(asFragment()).toMatchSnapshot();
});
