import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserList from "../UserList";
import { mockUser } from "../../../utils/mockedData";

test("UserList renders with user data and triggers onClick", () => {
  const onClickMock = jest.fn();

  render(<UserList data={mockUser} onClick={onClickMock} isLastItem={false} />);

  const loginElement = screen.getByText("testUser");
  expect(loginElement).toBeInTheDocument();

  const avatarElement = screen.getByAltText("Remy Sharp");
  expect(avatarElement).toBeInTheDocument();

  userEvent.click(loginElement);

  expect(onClickMock).toHaveBeenCalledWith("testUser");
});
