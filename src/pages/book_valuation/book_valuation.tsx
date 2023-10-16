import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Grid,
  TextField,
  MenuItem,
  Box,
  Typography,
  Modal,
  useMediaQuery,
  Button,
} from "@mui/material";
import axios from "axios";
import { Search } from "@mui/icons-material";

type BookValuationProps = {};

function BookValuation({}: BookValuationProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [postcode, setPostcode] = useState("");
  const [addresses, setAddresses] = useState<string[]>([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const postcodeValue = searchParams.get("value") || "";
    setPostcode(postcodeValue);
  }, [location.search]);

  const handlePostcodeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPostcode(event.target.value);
  };

  const handleFindAddress = async () => {
    try {
      const response = await axios.get(
        `https://api.postcodes.io/postcodes/${postcode}/addresses`
      );
      const { result } = response.data;
      if (result && result.length > 0) {
        setAddresses(result);
        setIsModalOpen(true);
      } else {
        setIsModalOpen(false);
        setAddresses([]);
      }
    } catch (error) {
      console.error("Error fetching addresses:", error);
      setIsModalOpen(false);
      setAddresses(["Address 1", "Address 2", "Address 3"]);
    }
    setIsModalOpen(true);
  };

  const handleAddressClick = (address: string) => {
    setSelectedAddress(address);
    setIsModalOpen(false);
    navigate(`/book_valuation_registration?value=${postcode}`);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedAddress("");
    setAddresses([]);
  };

  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid md={3} xs={0}></Grid>
        <Grid item sm={6}>
          <Box paddingTop={5} paddingBottom={2} margin={3}>
            <Grid justifyContent={"left"}>
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="h3"
                align="left"
                gutterBottom
              >
                Let's value your home
              </Typography>
              <Typography
                variant="h5"
                align="left"
                style={{ display: "inline" }}
              >
                Book a no-obligation home valuation with our Strike agent:
              </Typography>
            </Grid>
          </Box>

          <Box margin={3}>
            <TextField
              label="Enter postcode"
              value={postcode}
              onChange={handlePostcodeChange}
              variant="outlined"
              fullWidth
            />
          </Box>
          <Grid item xs={12}>
            <Box margin={3}>
              <Button
                style={{ borderRadius: "0px", width: "100%" }}
                variant="contained"
                startIcon={<Search />}
                onClick={handleFindAddress}
              >
                Find Address
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid md={3} xs={0}></Grid>
      </Grid>

      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: isMobile ? "90%" : "60%",
            maxWidth: 600,
          }}
        >
          <Typography variant="h6" id="modal-title" gutterBottom>
            Select Address
          </Typography>
          <TextField
            label="Select address"
            select
            variant="outlined"
            fullWidth
            value={selectedAddress}
            onChange={(event) => setSelectedAddress(event.target.value)}
          >
            {addresses.map((address, index) => (
              <MenuItem
                key={index}
                value={address}
                onClick={() => handleAddressClick(address)}
              >
                {address}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Modal>
    </Box>
  );
}

export { BookValuation };