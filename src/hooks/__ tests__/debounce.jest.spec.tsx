import React from "react";
import { render, act, fireEvent, waitFor } from "@testing-library/react";
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

    const { getByTestId } = render(<Component />);

    const inputElement = getByTestId("input");
    expect(inputElement.getAttribute("value")).toBe(value);

    value = "updatedValue";
    act(() => {
      fireEvent.input(inputElement, { target: { value } });
    });

    expect(inputElement.getAttribute("value")).toBe("updatedValue");

    await act(async () => {
      jest.advanceTimersByTime(delay);
      await waitFor(() => {
        expect(inputElement.getAttribute("value")).toBe(value);
      });
    });
  });
});
