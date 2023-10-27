import React from "react";
import renderer from "react-test-renderer";
import EditContact from "@pages/Dashboard/Edit";
import { MemoryRouter } from "react-router-dom";

jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn(),
  useSelector: (selector: any) =>
    selector({
      contactDetail: {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        age: 30,
        photo: "https://example-photos.png",
      },
    }),
}));
jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    contactId: "1",
  }),
}));

describe("EditContact component", () => {
  it("renders the EditContact component", () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={["/edit/1"]}>
        <EditContact />
      </MemoryRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
