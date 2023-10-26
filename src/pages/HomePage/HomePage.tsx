import { useEffect, useState } from "react";
import { useSearchUsersQuery } from "../../store/github/github.api";
import InputSearch from "../../components/InputSearch/InputSearch";
import { Box, CircularProgress } from "@mui/material";
import { useDebounce } from "../../hooks/debounce";
import { List } from "@mui/material";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UserList from "../../components/UserList/UserList";
import { IUser } from "../../models/models";

const HomePage = (): JSX.Element => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);

  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  });

  const updateTextField = (newText: string) => {
    setSearch(newText);
  };

  const clickHandler = (userName: string) => {
    navigate(`/user/${userName}`);
  };

  useEffect(() => {
    setDropdown(debounced.length > 3 && data?.length! > 0);
  }, [debounced, data?.length]);

  return (
    <Box className="w-full">
      <InputSearch
        onTextFieldChange={updateTextField}
        placeholder="Search for Github username"
      />
      {dropdown && (
        <List className="absolute top-[42px] left-0 right-0 max-h-[500px] overflow-y-scroll shadow-md bg-white">
          {isLoading && <CircularProgress />}
          {isError && <Typography>Something went wrong</Typography>}
          {data?.map((user: IUser, index: number) => (
            <UserList
              data={user}
              onClick={clickHandler}
              isLastItem={index === data.length - 1}
              key={user.id}
            />
          ))}
        </List>
      )}
    </Box>
  );
};

export default HomePage;
