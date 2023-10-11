import React, { ReactNode } from "react";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";

interface MenuContentProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  menuItems: ReactNode;
}

const MenuContent: React.FC<MenuContentProps> = ({
  anchorEl,
  open,
  onClose,
  menuItems,
}) => {
  return (
    <Menu
      id="fade-menu"
      MenuListProps={{
        "aria-labelledby": "fade-button",
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      TransitionComponent={Fade}
      marginThreshold={0}
      PaperProps={{
          style: {
               width: "50%",
               maxWidth: "100%",
               left: 0,
               right: 0,
             }
           }}
       >
      {menuItems}
    </Menu>
  );
};

export default MenuContent;
