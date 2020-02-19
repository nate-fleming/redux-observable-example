import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { render } from "@testing-library/react";
import reducer from "../src/reducers/reducers";

import App from "./App";

const renderWithRedux = (
  reducer: any,
  initialState: any,
  children: JSX.Element
) => {
  const mockStore = createStore(reducer, initialState);
  return render(<Provider store={mockStore}>{children}</Provider>);
};

describe("<App/>", () => {
  it("renders", () => {
    const { asFragment } = renderWithRedux(reducer, {}, <App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
