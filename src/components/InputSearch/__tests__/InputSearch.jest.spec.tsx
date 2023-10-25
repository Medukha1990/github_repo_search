import { render, screen, fireEvent } from "@testing-library/react";
import InputSearch from "../InputSearch";

describe("InputSearch", () => {
  it("renders the input search component correctly", () => {
    const onTextFieldChange = jest.fn();
    const placeholder = "Find a repository...";

    render(
      <InputSearch
        onTextFieldChange={onTextFieldChange}
        placeholder={placeholder}
      />
    );

    const inputElement = screen.getByRole("textbox");
    const searchIconElement = screen.getByTestId("search-icon");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("placeholder", placeholder);
    expect(searchIconElement).toBeInTheDocument();
  });

  it("calls onTextFieldChange when input value changes", () => {
    const onTextFieldChange = jest.fn();
    const placeholder = "Find a repository...";

    render(
      <InputSearch
        onTextFieldChange={onTextFieldChange}
        placeholder={placeholder}
      />
    );

    const inputElement = screen.getByRole("textbox");

    fireEvent.change(inputElement, { target: { value: "new value" } });

    expect(onTextFieldChange).toHaveBeenCalledWith("new value");
  });
});
