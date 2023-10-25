import { render } from "@testing-library/react";
import App from "../App";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { Store, AnyAction } from "redux";

const mockStore = configureStore();
let store: Store<unknown, AnyAction>;

const initialState = { output: 10 };

test("renders App correctly", () => {
  store = mockStore(initialState);

  render(
    <MemoryRouter initialEntries={["/"]}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );
});
