import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Grid,
  styled,
} from "@mui/material";
import NotificationsIcon from "@mui/material/Icon";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#033E6B",
  color: "#fff",
  boxShadow: "none",
});

const StyledLogo = styled(Typography)`
  && {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
  }
`;

const StyledSellButton = styled(Button)`
  && {
    background-color: #ff5722;
    color: #fff;
    &:hover {
      background-color: #e64a19;
    }
  }
`;

const Header: React.FC = () => {

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Grid container  component="div">
          <Grid md={6} sm={6}>
            {/* docs */}
            <StyledLogo variant="h6">Strike</StyledLogo>
          </Grid>
          <Grid md={6} sm={6}>
            {/* docs */}
            <StyledSellButton>Sell Your House</StyledSellButton>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
};

export { Header };
