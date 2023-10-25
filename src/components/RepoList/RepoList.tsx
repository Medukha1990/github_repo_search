import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import { IRepo } from "../../models/models";
import { Box } from "@mui/material";
import dayjs from "dayjs";
import { getLanguageColor } from "../../utils/languageColors";

type Props = {
  data: IRepo[];
};

const ReposList = ({ data }: Props): JSX.Element => {
  return (
    <Box className="mt-6">
      <List className="w-full">
        {data.map((repo) => (
          <Box key={repo.id}>
            <ListItem alignItems="flex-start">
              <Box>
                <Box className="mb-4">
                  <Box
                    component="span"
                    className=" text-blue-600 text-xl font-medium mr-3"
                  >
                    {repo.name}
                  </Box>
                  <Box
                    component="span"
                    className="border border-solid rounded-full px-2 py-1  text-gray-500 font-medium text-xs"
                  >
                    {repo.visibility}
                  </Box>
                </Box>
                <Box className="flex">
                  {repo.language ? (
                    <Box>
                      <Box
                        component="span"
                        className={`rounded-full bg-blue-300 px-1 py-1 mr-2 inline-block ${getLanguageColor(
                          repo.language
                        )}`}
                      ></Box>
                      <Box component="span" className="mr-4 text-sm">
                        {repo.language}
                      </Box>
                    </Box>
                  ) : null}
                  <Box>
                    <Box component="span" className="text-sm text-gray-500 ">
                      Updated on {dayjs(repo.updated_at).format("MMM D, YYYY")}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </ListItem>
            <Divider component="li" key={`divider-${repo.id}`} />
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default ReposList;
