import {
  styled,
  List as MuiList,
  ListProps as MuiListProps,
  ListItem,
} from "@mui/joy";
import React from "react";

interface ListProps extends MuiListProps {
  items: any[];
}

const StyledList = styled(MuiList)(({ theme }) => ({
  [theme.breakpoints.down("mobile")]: {
    // do something
  },
  [theme.breakpoints.between("mobile", "tablet")]: {
    // do something
  },
  [theme.breakpoints.up("tablet")]: {
    // do something
  },
}));

const List = ({ items, ...props }: ListProps) => {
  return (
    <StyledList {...props}>
      {items.map((item, index) => (
        <ListItem sx={{ padding: 0 }} key={index}>
          {item}
        </ListItem>
      ))}
    </StyledList>
  );
};

export default List;
