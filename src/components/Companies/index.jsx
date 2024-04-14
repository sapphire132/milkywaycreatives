import { Box, Typography } from "@mui/material";
import Logo from "../../assets/img/logo.png";

const Companies = () => {
  return (
    <Box
      sx={{
        width: "60%",
        color: "#000000",
        backgroundColor: "#eeeeee",
        display: "flex",
        padding: "3em 0em",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          position: "relative",
          fontFamily: "inter",
          fontWeight: 200,
          fontSize: 25,
          zIndex: 1,
          margin: "0em 2em",
        }}
      >
        Milkyway Creatives!
      </Typography>
      <Typography
        sx={{
          position: "relative",
          fontFamily: "inter",
          fontWeight: 200,
          fontSize: 25,
          zIndex: 1,
          margin: "0em 2em",
        }}
      >
        Milkyway Creatives!
      </Typography>
      <Typography
        sx={{
          position: "relative",
          fontFamily: "inter",
          fontWeight: 200,
          fontSize: 25,
          zIndex: 1,
          margin: "0em 2em",
        }}
      >
        Milkyway Creatives!
      </Typography>
      {/* <Box
        sx={{ height: "4em", width: "4em" }}
        component="img"
        src={Logo}
        alt="Company Logo"
      /> */}
    </Box>
  );
};

export default Companies;
