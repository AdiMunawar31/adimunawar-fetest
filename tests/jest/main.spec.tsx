import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom"; // Gunakan MemoryRouter sebagai pengganti BrowserRouter
import store from "@states/index";
import App from "@src/App";

// Mock react-dom/client's createRoot method
jest.mock("react-dom/client", () => ({
  createRoot: (container: any) => ({
    render: (element: any) => {
      container.innerHTML = "";
      container.appendChild(element);
    },
  }),
}));

test("renders App component", () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );

  expect(tree).toMatchSnapshot();
});
