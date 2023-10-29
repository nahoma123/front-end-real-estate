import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Button, Grid, styled } from "@mui/material";

import LogoImg from "../logo/image";
import LoginIcon from "@mui/icons-material/Login";
import {
  StyledDropdownText,
  HeaderMenu,
  StyledDropdown,
} from "../header_menu/header_menu";
import { useNavigate } from "react-router-dom";
import {
  Person3Outlined,
} from "@mui/icons-material";
const StyledAppBar = styled(AppBar)({
  backgroundColor: "#fff",
  color: "#fff",
  boxShadow: "none",
});

const StyledButton2 = styled(Button)({
  height: "60%",
  fontFamily: "Open Sans",
  margin: "0px",
  minWidth: "150px",
  fontWeight: "bold",
  backgroundColor: "#948c1e45",
  color: "#948c1e",
  paddingLeft: "10px",
  paddingRight: "10px",
  "&:hover": {
    color: "#877e0f", // Set the background color on hover
  },
});

const StyledGrid = styled(Grid)({});

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>();
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user != null) {
      let userObject = JSON.parse(user);
      setUser(userObject);
    }
  }, []);

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <Grid container component="div">
          <Grid item md={2} sm={0}>
            <LogoImg />
          </Grid>
          <StyledGrid container item direction="row" md={8} sm={8}>
            <Grid item container>
              <Grid
                item
                md={4}
                justifyContent="center"
                alignItems="center"
                container
              >
                <HeaderMenu label="Landlords" redirectTo="/" />
              </Grid>
              <Grid
                item
                md={4}
                justifyContent="center"
                alignItems="center"
                container
              >
                <StyledDropdown>
                  <StyledDropdownText>Why Us</StyledDropdownText>
                </StyledDropdown>
              </Grid>

              <Grid
                item
                md={4}
                justifyContent="center"
                alignItems="center"
                container
              >
                <StyledDropdown onClick={() => navigate("/find_properties")}>
                  <StyledDropdownText>Find a property</StyledDropdownText>
                </StyledDropdown>
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
            {user == null ? (
              <StyledButton2
                endIcon={<LoginIcon fontSize="small" />}
                onClick={() => navigate("/user_account")}
              >
                Sign In/ Register
              </StyledButton2>
            ) : (
              <StyledButton2
                endIcon={<Person3Outlined fontSize="medium" />}
                onClick={() => navigate("/user_account")}
              >
                {user?.last_name}
              </StyledButton2>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
};

export { Header };
