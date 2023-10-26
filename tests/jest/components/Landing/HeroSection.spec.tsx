import React from "react";
import renderer from "react-test-renderer";
import HeroSection from "@components/Landing/HeroSection";

it("renders HeroSection correctly", () => {
  const tree = renderer.create(<HeroSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
