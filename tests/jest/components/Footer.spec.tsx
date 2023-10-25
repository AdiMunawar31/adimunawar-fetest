import React from "react";
import renderer from "react-test-renderer";
import Footer from "@components/Footer";
import { MemoryRouter } from "react-router-dom";

test("Footer renders correctly", () => {
  const tree = renderer.create(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

  const component = tree.root;

  const subscribeText = component.find(
    (el) => el.props.children === "Subscribe our newsletter to get update."
  );
  const subscribeNowText = component.find(
    (el) => el.props.children === "Subscribe Now"
  );
  const copyrightText = component.find(
    (el) => el.props.children === "© Copyright 2023. All Rights Reserved."
  );
  const diContactText = component.find(
    (el) => el.props.children === "DiContact"
  );

  expect(subscribeText).not.toBeNull();
  expect(subscribeNowText).not.toBeNull();
  expect(copyrightText).not.toBeNull();
  expect(diContactText).not.toBeNull();
});

test("Footer link is correctly configured", () => {
  const tree = renderer.create(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

  const component = tree.root;

  const subscribeLink = component.findByProps({ to: "/" });

  expect(subscribeLink.props.to).toBe("/");
});
