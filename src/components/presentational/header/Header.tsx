import React, { useContext, useState } from "react";
import { AppBar, Toolbar, Button, Grid, styled } from "@mui/material";
import OnboardingModal from "../../presentational/model/onboarding_call";

import LogoImg from "../logo/image";
import LoginIcon from "@mui/icons-material/Login";
import {
  StyledDropdownText,
  HeaderMenu,
  StyledDropdown,
} from "../header_menu/header_menu";
import MegaMenu from "../header_menu/sample_menu";
import { ModalContext, ModalProvider } from "../../../context/modal_container";
const StyledAppBar = styled(AppBar)({
  backgroundColor: "#fff",
  color: "#fff",
  boxShadow: "none",
});

const StyledButton2 = styled(Button)({
  height: "60%",
  fontFamily: "Open Sans",
  margin: "0px",
  fontWeight: "bold",
  backgroundColor: "#948c1e45",
  color: "#948c1e",
  paddingLeft: "10px",
  paddingRight: "10px",
  "&:hover": {
    color: "#877e0f", // Set the background color on hover
  },
});

const StyledSellButton = styled(Button)`
  && {
    background-color: #a5a54a;
    color: #fff;
    &:hover {
      background-color: #948c1e;
    }
  }
`;

const StyledGrid = styled(Grid)({});

const Header: React.FC = () => {
  const { openModal } = useContext(ModalContext);

  const handleOpenModal = () => {
    console.log("tesint");
    openModal();
  };

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Grid container component="div">
          <Grid item md={2} sm={0}>
            <LogoImg />
          </Grid>
          <StyledGrid container item direction="row" md={8} sm={8}>
            <Grid item container>
              <Grid
                item
                md={2}
                justifyContent="center"
                alignItems="center"
                container
              >
                <HeaderMenu label="Selling" menuItems={<MegaMenu />} />
              </Grid>
              <Grid
                item
                md={2}
                justifyContent="center"
                alignItems="center"
                container
              >
                <HeaderMenu label="Buying" menuItems={<MegaMenu />} />
              </Grid>

              <Grid
                item
                md={2}
                justifyContent="center"
                alignItems="center"
                container
              >
                <HeaderMenu label="Why Us" menuItems={<MegaMenu />} />
              </Grid>

              <Grid
                item
                md={3}
                justifyContent="center"
                alignItems="center"
                container
              >
                <StyledDropdown>
                  <StyledDropdownText>Find a property</StyledDropdownText>
                </StyledDropdown>
              </Grid>

              <Grid
                item
                md={3}
                justifyContent="center"
                alignItems="center"
                container
              >
                <StyledButton2 onClick={handleOpenModal}>
                  Book Onboarding call
                </StyledButton2>
              </Grid>
            </Grid>
            {/* docs */}
          </StyledGrid>
          <Grid
            container
            item
            md={2}
            sm={0}
            justifyContent="center"
            alignContent={"center"}
          >
            <StyledButton2 endIcon={<LoginIcon fontSize="small" />}>
              Sign In/ Register
            </StyledButton2>
          </Grid>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
};

export { Header };
