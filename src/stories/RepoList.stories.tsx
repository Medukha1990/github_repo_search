import ReposList from "../components/RepoList/RepoList";
import { mockRepoData } from "../utils/mockedData";
import "../../src/index.css";

export default {
  title: "ReposList",
  component: ReposList,
};

export const Default = () => (
  <ReposList data={[...mockRepoData, ...mockRepoData]} />
);
