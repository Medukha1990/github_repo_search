import { render, screen } from "@testing-library/react";
import ReposList from "../RepoList";
import { mockRepoData } from "../../../utils/mockedData";

describe("ReposList", () => {
  it("renders the ReposList component correctly", () => {
    render(<ReposList data={mockRepoData} />);

    const repoItems = screen.getAllByRole("listitem");

    expect(repoItems).toHaveLength(mockRepoData.length);

    for (let i = 0; i < mockRepoData.length; i++) {
      const repo = mockRepoData[i];

      const repoNameElement = screen.getByText(repo.name);

      const visibilityElement = screen.getByText((content, element) => {
        return (
          element?.tagName.toLowerCase() === "span" &&
          content === repo.visibility
        );
      });

      const languageElement = screen.getByText((content, element) => {
        return (
          element?.tagName.toLowerCase() === "span" && content === repo.language
        );
      });

      const updatedOnElement = screen.getByText((content, element) => {
        return (
          element?.tagName.toLowerCase() === "span" &&
          content.startsWith("Updated on ")
        );
      });

      expect(repoNameElement).toBeInTheDocument();
      expect(visibilityElement).toBeInTheDocument();
      expect(languageElement).toBeInTheDocument();
      expect(updatedOnElement).toBeInTheDocument();
    }
  });
});
