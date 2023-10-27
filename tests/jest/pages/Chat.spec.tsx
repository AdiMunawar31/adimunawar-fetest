import React from "react";
import renderer from "react-test-renderer";
import Chat from "@pages/Dashboard/Chat";
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

describe("Chat component", () => {
  it("renders the Chat component", () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={["/chat/1"]}>
        <Chat />
      </MemoryRouter>
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
