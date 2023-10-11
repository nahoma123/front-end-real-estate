import React from "react";
import { AppBar, Toolbar, Button, Grid, styled } from "@mui/material";
import LogoImg from "../logo/image";
import LoginIcon from "@mui/icons-material/Login";
import HeaderMenu from "../header_menu/header_menu";
import MegaMenu from "../header_menu/sample_menu";
const StyledAppBar = styled(AppBar)({
  backgroundColor: "#fff",
  color: "#fff",
  boxShadow: "none",
});

// const StyledLogo = styled(Typography)`
//   && {
//     font-size: 1.5rem;
//     font-weight: bold;
//     color: #fff;
//     text-decoration: none;
//   }
// `;

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
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Grid container component="div">
          <Grid md={2} sm={0}>
            <LogoImg />
          </Grid>
          <StyledGrid container direction="row" md={8} sm={8}>
            <Grid container md={10}>
              <Grid
                md={2}
                justifyContent="center"
                alignItems="center"
                container
              >
                <HeaderMenu label="Selling" menuItems={<MegaMenu />} />
              </Grid>
              <Grid
                md={2}
                justifyContent="center"
                alignItems="center"
                container
              >
                <HeaderMenu label="Buying" menuItems={<MegaMenu />} />
              </Grid>

              <Grid
                md={2}
                justifyContent="center"
                alignItems="center"
                container
              >
                <HeaderMenu label="Why Us" menuItems={<MegaMenu />} />
              </Grid>

              <Grid
                md={2}
                justifyContent="center"
                alignItems="center"
                container
              >
                <HeaderMenu label="Selling" menuItems={<MegaMenu />} />
              </Grid>
            </Grid>
            <Grid md={2} justifyContent="center" alignItems="center" container>
              <StyledSellButton variant="contained">
                <Grid justifyContent="center" alignItems="center" container>
                  Sign In/ Register
                  <LoginIcon fontSize="small" sx={{ padding: "2px" }} />
                </Grid>
              </StyledSellButton>
            </Grid>
            {/* docs */}
          </StyledGrid>
          <Grid md={2} sm={0}></Grid>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
};

export { Header };
