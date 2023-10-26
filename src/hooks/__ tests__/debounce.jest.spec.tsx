import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { useDebounce } from "../debounce";

jest.useFakeTimers();

describe("useDebounce", () => {
  it("debounces the input value", async () => {
    let value = "updatedValue";
    const delay = 600;

    const Component = () => {
      const debouncedValue = useDebounce(value, delay);
      return <input data-testid="input" value={debouncedValue} />;
    };

    render(<Component />);

    const inputElement = screen.getByTestId("input");
    expect(inputElement.getAttribute("value")).toBe(value);

    value = "updatedValue";
    fireEvent.input(inputElement, { target: { value } });

    expect(inputElement.getAttribute("value")).toBe("updatedValue");

    jest.advanceTimersByTime(delay);
    await waitFor(() => {
      expect(inputElement.getAttribute("value")).toBe(value);
    });
  });
});
