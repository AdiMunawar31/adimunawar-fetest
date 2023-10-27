import React from "react";
import renderer from "react-test-renderer";
import About from "@pages/About";
import { MemoryRouter } from "react-router-dom";

describe("About component", () => {
  it("renders the About component", () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={["/not-found"]}>
        <About />
      </MemoryRouter>
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
