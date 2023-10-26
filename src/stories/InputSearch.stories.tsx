import { action } from "@storybook/addon-actions";
import InputSearch from "../components/InputSearch/InputSearch";
import "../../src/index.css";

export default {
  title: "InputSearch",
  component: InputSearch,
};

export const Default = () => (
  <InputSearch
    placeholder="Search"
    onTextFieldChange={action("Text Field Changed")}
  />
);

export const WithCustomPlaceholder = () => (
  <InputSearch
    placeholder="Custom Placeholder"
    onTextFieldChange={action("Text Field Changed")}
  />
);
