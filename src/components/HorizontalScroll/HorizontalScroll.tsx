import React from "react";
import { nanoid } from "nanoid";
import MuiBox from "@mui/material/Box";

export interface IHorizontalScroll {
  LeftButton?: any;
  leftButtonProps?: any;
  onLeftButtonClick?: any;
  RightButton?: any;
  rightButtonProps?: any;
  onRightButtonClick?: any;
  Card?: any;
  children?: any;
}
const HorizontalScoll = ({
  LeftButton = "button",
  leftButtonProps,
  onLeftButtonClick,
  RightButton = "button",
  rightButtonProps,
  onRightButtonClick,
  children,
}: IHorizontalScroll) => {
  const id = nanoid();
  const handleLeft = () => {
    let scroll = document.getElementById(id);
    scroll?.scrollBy(-200, 0);
  };
  const handleRight = () => {
    let scroll = document.getElementById(id);
    scroll?.scrollBy(200, 0);
  };
  return (
    <MuiBox sx={{ display: "flex" }}>
      <LeftButton
        {...leftButtonProps}
        onClick={(e: any) => {
          handleLeft();
          onLeftButtonClick && onLeftButtonClick(e);
        }}
      />
      <MuiBox
        id={id}
        sx={{
          display: "flex",
          overflow: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
            scrollBehavior: "smooth",
          },
        }}
      >
        {children}
      </MuiBox>
      <RightButton
        {...rightButtonProps}
        onClick={(e: any) => {
          handleRight();
          onRightButtonClick && onLeftButtonClick(e);
        }}
      />
    </MuiBox>
  );
};
export default HorizontalScoll;
