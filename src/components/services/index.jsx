import { Box, Typography } from "@mui/material";
import { Detail, Title } from "./style";

const Services = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "70%",
        mt: 15,
        mb: 15,
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "60%", mr: 5 }}>
        <Typography
          sx={{ fontFamily: "inter", fontWeight: "400", fontSize: 50 }}
        >
          {" "}
          Crafting the brand you've always been dreaming!
        </Typography>
      </Box>

      <Box>
        <Box>
          <Title>Brand Identity</Title>

          <Detail>
            {" "}
            From crafting a captivating brand story to designing a logo that's
            out of this world, we help you build a brand that stands out in the
            Ethiopian marketplace.{" "}
          </Detail>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Title>Brand Identity</Title>

          <Detail>
            {" "}
            From crafting a captivating brand story to designing a logo that's
            out of this world, we help you build a brand that stands out in the
            Ethiopian marketplace.{" "}
          </Detail>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
