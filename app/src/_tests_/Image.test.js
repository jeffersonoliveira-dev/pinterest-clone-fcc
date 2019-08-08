import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Image from "../components/Image/index";
afterEach(cleanup);

it("receive form data ", () => {
  const { getByText } = render(<Image />);
  fireEvent.click(getByText("save"));
});
