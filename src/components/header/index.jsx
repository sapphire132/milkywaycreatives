import React, { useState } from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Logo from "../../assets/img/logo.png";
import { HeaderButton } from "./style";
import { LuMessagesSquare } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
// import RxHamburgerMenu from "@mui/icons-material/Menu";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = (event) => {
    setMenuOpen(event.currentTarget);
  };

  const handleClose = () => {
    setMenuOpen(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: isMobile ? "2em" : "2em 14em",
        color: "white",
        backgroundColor: "black",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Box sx={{ height: "2em", width: "2em" }}>
        <Box component="img" src={Logo} alt="Company Logo" />
      </Box>

      {isMobile ? (
        <>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <RxHamburgerMenu />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={menuOpen}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(menuOpen)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Logo</MenuItem>
            <MenuItem onClick={handleClose}>Branding</MenuItem>
            <MenuItem onClick={handleClose}>Social</MenuItem>
            <MenuItem onClick={handleClose}>About</MenuItem>
            <MenuItem onClick={handleClose}>
              {/* <LuMessagesSquare size={30} style={{ marginRight: "10px" }} /> */}
              Contact
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Box>
          <HeaderButton>Logo</HeaderButton>
          <HeaderButton>Branding</HeaderButton>
          <HeaderButton>Social</HeaderButton>
          <HeaderButton>About</HeaderButton>{" "}
          {/* <HeaderButton>
            <LuMessagesSquare size={30} />
          </HeaderButton> */}
        </Box>
      )}

      {!isMobile && (
        <Box>
          <HeaderButton>
            <LuMessagesSquare size={30} />
          </HeaderButton>
        </Box>
      )}
    </Box>
  );
};

export default Header;
