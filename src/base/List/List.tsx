import {
  styled,
  List as MuiList,
  ListProps as MuiListProps,
  ListItem,
} from "@mui/joy";
import React from "react";

import { FONT_SIZES } from "@/constants";

interface ListProps extends MuiListProps {
  items: any[];
}

const StyledListItem = styled(ListItem)(({ theme }) => ({
  [theme.breakpoints.down("mobile")]: {
    fontSize: FONT_SIZES.BODY.XS,
  },
  [theme.breakpoints.between("mobile", "tablet")]: {
    fontSize: FONT_SIZES.BODY.SM,
  },
  [theme.breakpoints.up("tablet")]: {
    fontSize: FONT_SIZES.BODY.MD,
  },
}));

const List = ({ items, ...props }: ListProps) => {
  return (
    <MuiList {...props}>
      {items.map((item, index) => (
        <StyledListItem sx={{ padding: 0 }} key={index}>
          {item}
        </StyledListItem>
      ))}
    </MuiList>
  );
};

export default List;
