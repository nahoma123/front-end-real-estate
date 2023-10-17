import { ReactNode } from "react";
import { ModalProvider } from "context/modal_container";
import { Box, Container, Grid } from "@mui/material";
import { SecondaryHeader } from "../presentational/header/secondary_header";

type SecondLayoutProps = {
  children: ReactNode;
};
// const StyledBox = styled(Container)({
//   marginTop: "64px", // Adjust this value to match the height of your AppBar
// });

function SecondaryLayout({ children }: SecondLayoutProps) {
  return (
      <ModalProvider>
        <Grid container height={"100%"}>
          <Grid md={8}>
            <SecondaryHeader />
            <Container>
              <Box marginTop={15} marginBottom={15} height="100%">{children}</Box>
            </Container>
          </Grid>
          <Grid md={4}></Grid>
        </Grid>
      </ModalProvider>
  );
}

export { SecondaryLayout };
