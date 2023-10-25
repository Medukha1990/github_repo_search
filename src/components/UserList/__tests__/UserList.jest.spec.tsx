import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; // Импортируем библиотеку user-event
import UserList from "../UserList";
import { mockUser } from "../../../utils/mockedData";

test("UserList renders with user data and triggers onClick", () => {
  // Создаем мок-функцию для обработки onClick
  const onClickMock = jest.fn();

  const { getByText, getByAltText } = render(
    <UserList data={mockUser} onClick={onClickMock} isLastItem={false} />
  );

  const loginElement = getByText("testUser");
  expect(loginElement).toBeInTheDocument();

  const avatarElement = getByAltText("Remy Sharp");
  expect(avatarElement).toBeInTheDocument();

  // Имитируем клик с использованием user-event
  userEvent.click(loginElement);

  // Проверяем, что onClick был вызван с правильным именем пользователя
  expect(onClickMock).toHaveBeenCalledWith("testUser");
});
