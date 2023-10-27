import React from "react";
import renderer from "react-test-renderer";
import Landing from "@pages/Landing";
import { MemoryRouter } from "react-router-dom";

describe("Landing component", () => {
  it("renders the Landing component", () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={["/"]}>
        <Landing />
      </MemoryRouter>
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
