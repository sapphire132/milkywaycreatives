import { Box, Button } from "@mui/material";
import React from "react";
import Logo from "../../assets/img/logo.png";
import { HeaderButton } from "./style";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "2em 14em",
        color: "white",
        backgroundColor: "black",
        alignItems: "center",
      }}
    >
      <Box sx={{ height: "2em", width: "2em" }}>
        {/* <img src={Logo} /> */}
        {/* <Logo /> */}
        <Box component="img" src={Logo} alt="Company Logo" />
      </Box>

      <Box>
        <HeaderButton> Services </HeaderButton>
        <HeaderButton> Services </HeaderButton>
        <HeaderButton> Services </HeaderButton>
      </Box>

      <Box>
        <HeaderButton>Contact</HeaderButton>
      </Box>
    </Box>
  );
};

export default Header;
