import React from "react";
import renderer from "react-test-renderer";
import FeatureIcons from "@components/Landing/FeatureIcons";

it("renders FeatureIcons correctly", () => {
  const tree = renderer.create(<FeatureIcons />).toJSON();
  expect(tree).toMatchSnapshot();
});
