import React from "react";
import renderer from "react-test-renderer";
import Parallax from "@components/Landing/Parallax";

it("renders Parallax correctly", () => {
  const tree = renderer.create(<Parallax />).toJSON();
  expect(tree).toMatchSnapshot();
});
