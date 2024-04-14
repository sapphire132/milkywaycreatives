import { Box, Grid, Typography } from "@mui/material";

const brands = [
  {
    name: "Artios",
    logo: "../src/assets/img/projects/artios.jpg",
    overlayColor: "rgba(50, 0, 0, 0.5)", // Red color overlay with 50% opacity
  },
  {
    name: "seed codes",
    logo: "../src/assets/img/projects/ducka.jpg",
    overlayColor: "rgba(0, 50, 0, 0.5)", // Green color overlay with 50% opacity
  },

  {
    name: "seed codes",
    logo: "../src/assets/img/projects/seedCodes.jpg",
    overlayColor: "rgba(0, 0, 0, 0.5)", // Green color overlay with 50% opacity
  },
  {
    name: "Artios",
    logo: "../src/assets/img/projects/milkyway.jpg",
    overlayColor: "rgba(50, 0, 0, 0.5)", // Red color overlay with 50% opacity
  },
  // Add more brand objects with their respective overlay colors here if needed
];

const Brands = () => {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Grid container spacing={0}>
        {brands.map((brand, index) => {
          // Calculate the current row based on the index
          const rowNumber = Math.floor(index / 2) + 1;
          // Determine the ratio based on odd or even row number
          const isOddRow = rowNumber % 2 !== 0;
          const xsValue = isOddRow ? 5 : 7;

          return (
            <Grid item xs={6} key={brand.name}>
              <Box
                sx={{
                  width: "100%",
                  height: "20em",
                  position: "relative",
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${brand.logo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 0,
                  },
                  "&:after": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: brand.overlayColor,
                    opacity: "0.5",
                    zIndex: 1,
                  },
                }}
              >
                {/* Empty content Box will serve as a container for the background image and overlay */}
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Brands;
