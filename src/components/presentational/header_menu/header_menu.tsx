import React, { useState, ReactNode } from "react";
import Button from "@mui/material/Button";
import { styled, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuContent from "./menu_content";

const StyledDropdownText = styled(Typography)(({ theme }) => ({
  backgroundColor: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "white",
    color: "#948c1e",
  },
  textTransform: "capitalize",
  color: "black",
  fontSize: "1.1rem",
  "& .MuiButton-label": {
    fontWeight: 1000,
  },
}));

const StyledDropdown = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "white",
    color: "#948c1e",
  },
  "&:onClick": {
    backgroundColor: "white",
  },
}));

interface HeaderMenuProps {
  label: string;
  menuItems: ReactNode;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ label, menuItems }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isOpen) {
      // Close the current menu if it's already open
      setAnchorEl(null);
      setIsOpen(false);
    } else {
      // Open the menu
      setAnchorEl(event.currentTarget);
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  return (
    <div>
      <StyledDropdown
        id="fade-button"
        aria-controls={isOpen ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : undefined}
        onMouseOver={handleClick}
        sx={{ color: "white" }}
        endIcon={
          <ArrowDropDownIcon sx={{ color: isOpen ? "#948c1e" : "black" }} />
        }
      >
        <StyledDropdownText
          variant="button"
          display="block"
          sx={{ color: isOpen ? "#948c1e" : "black" }}
        >
          {label}
        </StyledDropdownText>
      </StyledDropdown>
      <MenuContent
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        menuItems={menuItems}
      />
    </div>
  );
};

export default HeaderMenu;
