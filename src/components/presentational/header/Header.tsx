import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  styled,
} from "@mui/material";
import LogoImg from "../logo/image";
import LoginIcon from '@mui/material/Icon';
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
    background-color: #ff5722;
    color: #fff;
    &:hover {
      background-color: #e64a19;
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
          <StyledGrid container direction="row" md={8} sm={8} >
            <Grid md={10}></Grid>
            <Grid md={2}   justifyContent="center" alignItems="center" container>
              <StyledSellButton>Sign In/ Register <LoginIcon/></StyledSellButton>
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
