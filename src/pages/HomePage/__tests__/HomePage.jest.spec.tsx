import { render, screen, fireEvent } from "@testing-library/react";
import HomePage from "../HomePage";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("HomePage", () => {
  const mockUseSearchUsersQuery = jest.fn();

  beforeEach(() => {
    jest.mock("../../../store/github/github.api", () => ({
      useSearchUsersQuery: mockUseSearchUsersQuery,
    }));
  });

  it("renders input search and dropdown", () => {
    const initialState = "";
    const mockStore = configureStore();
    const store = mockStore(initialState);

    mockUseSearchUsersQuery.mockReturnValue({
      isLoading: false,
      isError: false,
      data: [],
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText(
      "Search for Github username"
    );
    expect(inputElement).toBeInTheDocument();
  });

  it("calls updateTextField and updates search state", () => {
    const initialState = "";
    const mockStore = configureStore();
    const store = mockStore(initialState);

    mockUseSearchUsersQuery.mockReturnValue({
      isLoading: false,
      isError: false,
      data: [],
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText(
      "Search for Github username"
    );

    fireEvent.change(inputElement, { target: { value: "new value" } });

    expect(inputElement).toHaveValue("new value");
  });
});
