import { Story, Meta } from "@storybook/react";
import UserList from "../components/UserList/UserList";
import { mockUser } from "../utils/mockedData";
import { IUser } from "../models/models";
import "../../src/index.css";

type Props = {
  data: IUser;
  onClick: (userName: string) => void;
  isLastItem: boolean;
};

export default {
  title: "UserList",
  component: UserList,
} as Meta;

const Template: Story<Props> = (args) => <UserList {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: mockUser,
  onClick: (userName: string) => {
    // Обработчик клика
  },
  isLastItem: false,
};
