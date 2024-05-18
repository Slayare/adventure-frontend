import ImageRoundedIcon from "@mui/icons-material/Image";
import ImageSearchRoundedIcon from "@mui/icons-material/ImageSearch";
import { IconButton, IconButtonProps } from "@mui/joy";
import React from "react";

import useAppStore from "@/store/useAppStore";
import { BackgroundType } from "@/types";

const BackgroundTypeToggle = ({ onClick, ...other }: IconButtonProps) => {
  const backgroundType = useAppStore((state) => state.backgroundType);
  const toggleBackgroundType = useAppStore(
    (state) => state.toggleBackgroundType
  );

  return (
    <IconButton
      aria-label="toggle background type"
      size="sm"
      variant="outlined"
      onClick={toggleBackgroundType}
      {...other}
    >
      {backgroundType === BackgroundType.STATIC ? (
        <ImageSearchRoundedIcon />
      ) : (
        <ImageRoundedIcon />
      )}
    </IconButton>
  );
};

export default BackgroundTypeToggle;
