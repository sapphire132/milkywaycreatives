import { Box, Typography } from "@mui/material";

const Services = () => {
  return (
    <Box sx={{ display: "flex", width: "70%", mt: 15 }}>
      <Box sx={{ width: "50%" }}>
        <Typography
          sx={{ fontFamily: "inter", fontWeight: "400", fontSize: 50 }}
        >
          {" "}
          Crafting the brand you've always been dreaming!
        </Typography>
      </Box>

      <Box>
        <Box>
          <Typography
            sx={{ fontFamily: "inter", fontWeight: 600, fontSize: 20 }}
          >
            Brand Identity
          </Typography>
          <Typography>
            {" "}
            From crafting a captivating brand story to designing a logo that's
            out of this world, we help you build a brand that stands out in the
            Ethiopian marketplace.{" "}
          </Typography>
        </Box>

        <Box sx={{ mt: 5 }}>
          <Typography
            sx={{ fontFamily: "inter", fontWeight: 600, fontSize: 20 }}
          >
            Brand Identity
          </Typography>
          <Typography>
            {" "}
            From crafting a captivating brand story to designing a logo that's
            out of this world, we help you build a brand that stands out in the
            Ethiopian marketplace.{" "}
          </Typography>
        </Box>

        <Box sx={{ mt: 5 }}>
          <Typography
            sx={{ fontFamily: "inter", fontWeight: 600, fontSize: 20 }}
          >
            Brand Identity
          </Typography>
          <Typography>
            {" "}
            From crafting a captivating brand story to designing a logo that's
            out of this world, we help you build a brand that stands out in the
            Ethiopian marketplace.{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
