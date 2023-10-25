import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import App from "@src/App";

describe("App component", () => {
  it("renders the App component", () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
