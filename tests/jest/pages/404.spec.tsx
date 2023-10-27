import React from "react";
import renderer from "react-test-renderer";
import NotFound from "@pages/404";
import { MemoryRouter } from "react-router-dom";

describe("NotFound component", () => {
  it("renders the NotFound component", () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={["/not-found"]}>
        <NotFound />
      </MemoryRouter>
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
