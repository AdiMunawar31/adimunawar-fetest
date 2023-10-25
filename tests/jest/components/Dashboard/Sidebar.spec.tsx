import React from "react";
import renderer from "react-test-renderer";
import Sidebar from "@components/Dashboard/Sidebar";

describe("Sidebar component", () => {
  it("renders correctly", () => {
    const component = renderer.create(<Sidebar>Test</Sidebar>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
