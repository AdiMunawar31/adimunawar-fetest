import ContactList from "@components/Dashboard/ContactList"; // Sesuaikan dengan path komponen ContactList
import React from "react";
import renderer from "react-test-renderer";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

it("renders ContactList correctly", () => {
  // Mock data contact
  const contactData = {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    age: 30,
    photo: "sample.jpg",
  };

  const tree = renderer.create(<ContactList {...contactData} />).toJSON();
  expect(tree).toMatchSnapshot();
});
