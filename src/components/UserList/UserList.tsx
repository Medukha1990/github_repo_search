import * as React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { IUser } from "../../models/models";

type Props = {
  data: IUser;
  onClick: (userName: string) => void;
  isLastItem: boolean;
};

const UserList = ({ data, onClick, isLastItem }: Props): JSX.Element => {
  debugger;
  return (
    <>
      <ListItem
        alignItems="flex-start"
        className="cursor-pointer hover:bg-blue-300"
        onClick={() => onClick(data.login)}
      >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={data.avatar_url} />
        </ListItemAvatar>
        <ListItemText
          primary={data.login}
          secondary={
            <React.Fragment>
              <Typography component="span" className="pr-1">
                Type:
              </Typography>
              <Typography component="span">{data.type}</Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      {!isLastItem ? <Divider component="li" className="px-3 " /> : null}
    </>
  );
};

export default UserList;
