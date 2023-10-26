import React from "react";
import renderer from "react-test-renderer";
import Testimonial from "@components/Landing/Testimonial";

it("renders Testimonial correctly", () => {
  const tree = renderer.create(<Testimonial />).toJSON();
  expect(tree).toMatchSnapshot();
});
