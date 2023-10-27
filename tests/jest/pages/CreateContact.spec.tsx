import React from "react";
import renderer from "react-test-renderer";
import CreateContact from "@pages/Dashboard/Create";
import { MemoryRouter } from "react-router-dom";

jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn(),
  useNavigate: () => jest.fn(),
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

describe("CreateContact component", () => {
  it("renders the CreateContact component", () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={["/create-contact"]}>
        <CreateContact />
      </MemoryRouter>
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
