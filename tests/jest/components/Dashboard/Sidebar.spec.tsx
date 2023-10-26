import React from "react";
import renderer from "react-test-renderer";
import Sidebar from "@components/Dashboard/Sidebar"; // Sesuaikan dengan path komponen Sidebar
import { MemoryRouter } from "react-router-dom";

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

it("renders Sidebar correctly", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Sidebar>Children</Sidebar>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
