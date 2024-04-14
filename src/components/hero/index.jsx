import { Box, Typography } from "@mui/material";
import backgroundImage from "../../assets/img/bg1.jpg";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        pt: 10,
        pb: 10,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.9)",
        },
      }}
    >
      <Typography
        sx={{
          position: "relative",
          fontFamily: "inter",
          fontWeight: 200,
          fontSize: 100,
          zIndex: 1,
        }}
      >
        Milkyway Creatives!
      </Typography>

      <Typography
        sx={{
          position: "relative",
          fontFamily: "inter",
          fontWeight: 200,
          fontSize: 17,
          zIndex: 1,
          width: "50%",
          mt: 4,
          textAlign: "center",
        }}
      >
        We're not just branding experts, we're brand alchemists. We take your
        vision and transform it into a powerful brand identity that captures
        hearts, minds, and market share. From crafting a captivating brand story
        to designing a logo that's out of this world, we help you build a brand
        that stands out in the Ethiopian marketplace.
      </Typography>
    </Box>
  );
};

export default Hero;
