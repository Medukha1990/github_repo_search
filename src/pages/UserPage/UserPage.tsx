import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RepoList from "../../components/RepoList/RepoList";
import { useLazyGetUserReposQuery } from "../../store/github/github.api";
import CircularProgress from "@mui/material/CircularProgress";
import InputSearch from "../../components/InputSearch/InputSearch";
import { IRepo } from "../../models/models";
import { Box, Button } from "@mui/material";
import { log } from "console";

const UserPage = (): JSX.Element => {
  const [fetchRepos, { isLoading, data }] = useLazyGetUserReposQuery();
  const [search, setSearch] = useState("");
  const [updatedList, setUpdatedList] = useState<IRepo[]>([]);

  const { userName } = useParams();
  const navigate = useNavigate();

  const updateTextField = (newText: string) => {
    setSearch(newText);
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  useEffect(() => {
    console.log("USERNAME", userName);
    if (userName) {
      fetchRepos(userName);
    }
  }, [userName, fetchRepos]);

  useEffect(() => {
    const filteredList =
      data?.filter((user) => user.name.includes(search)) || [];
    setUpdatedList(filteredList);
  }, [search, data]);
  console.log("LOADING", isLoading);

  return (
    <>
      {isLoading ? (
        <Box className="flex flex-col items-center justify-center h-screen w-full">
          <CircularProgress data-testid="loading-indicator" />
        </Box>
      ) : (
        <>
          <Box className="absolute left-20 top-8">
            <Button variant="contained" onClick={handleHomeClick}>
              Homepage
            </Button>
          </Box>
          <Box className="flex flex-col w-full">
            <InputSearch
              onTextFieldChange={updateTextField}
              placeholder="Find a repository..."
            />

            <RepoList data={!search ? data || [] : updatedList} />
          </Box>
        </>
      )}
    </>
  );
};

export default UserPage;
