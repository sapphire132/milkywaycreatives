import { Box } from "@mui/material";
import Hero from "../../components/hero";
import Companies from "../../components/Companies";
import Services from "../../components/services";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Hero />
      {/* <Box
        sx={{
          position: "absolute",
          bottom: "-25%", // Adjust this value as needed to create the desired overlap
          left: 0, // Remove left: "50%" and transform: translateX(-50%)
          right: 0, // Add this property to center horizontally
          width: "100%",
          zIndex: 2,
          display: "flex", // Add display: flex for centering
          justifyContent: "center", // Center the content horizontally
        }}
      >
        <Companies />
      </Box> */}

      <Services />
      <Services />
    </Box>
  );
};

export default Home;
