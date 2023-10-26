import React from "react";
import renderer from "react-test-renderer";
import PartnerLogos from "@components/Landing/PartnerLogos";

it("renders PartnerLogos correctly", () => {
  const tree = renderer.create(<PartnerLogos />).toJSON();
  expect(tree).toMatchSnapshot();
});
