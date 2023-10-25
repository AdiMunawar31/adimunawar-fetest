import React from "react";
import renderer from "react-test-renderer";
import Navbar from "@components/Navbar";

// Mock the Link component from react-router-dom
jest.mock("react-router-dom", () => ({
  Link: (props: any) => <a {...props} />,
}));

test("Navbar component should render properly", () => {
  const component = renderer.create(<Navbar />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
