import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Milkyway Creatives
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Crafting the brand you've always been dreaming!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Email: contact@milkywaycreatives.com
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Phone: +251 930 304 345
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Other Information
            </Typography>
            {/* Add other necessary information here */}
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://yourwebsite.com/">
              Milkyway Creatives
            </Link>{" "}
            {new Date().getFullYear()}.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
