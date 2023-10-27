import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import Dashboard from "@pages/Dashboard";

jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn(),
  useSelector: () => [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      photo: "john.png",
    },
    {
      id: "2",
      name: "Jane",
      lastName: "Smith",
      photo: "janesmith.png",
    },
  ],
}));

describe("Dashboard component", () => {
  it("renders the Dashboard component", () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <Dashboard />
      </MemoryRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
