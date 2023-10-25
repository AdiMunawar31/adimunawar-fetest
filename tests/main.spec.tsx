import React from "react";
import renderer from "react-test-renderer";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "@states/index";
import App from "@src/App";

describe("Index component", () => {
  it("renders the app without errors", () => {
    createRoot(document.createElement("div"));

    const component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
