import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

import artiosImage from "src/assets/img/projects/artios.jpg";
import duckaImage from "src/assets/img/projects/ducka.jpg";
import seedCodesImage from "src/assets/img/projects/seedCodes.jpg";
import milkywayImage from "src/assets/img/projects/milkyway.jpg";
import { useModal } from "src/contexts/modalContext";
import ModalWrapper from "src/components/ModalWrapper";

const logos = [
  {
    id: 1,
    name: "Artios",
    logo: artiosImage,
    overlayColor: "rgba(50, 0, 0, 0.5)", // Red color overlay with 50% opacity
  },
  {
    id: 2,
    name: "seed codes",
    logo: duckaImage,
    overlayColor: "rgba(0, 50, 0, 0.5)", // Green color overlay with 50% opacity
  },
  {
    id: 3,
    name: "seed codes",
    logo: seedCodesImage,
    overlayColor: "rgba(0, 0, 0, 0.5)", // Green color overlay with 50% opacity
  },
  {
    id: 4,
    name: "Artios",
    logo: milkywayImage,
    overlayColor: "rgba(50, 0, 0, 0.5)", // Red color overlay with 50% opacity
  },
  {
    id: 5,
    name: "Artios",
    logo: milkywayImage,
    overlayColor: "rgba(50, 0, 0, 0.5)", // Red color overlay with 50% opacity
  },
  // Add more brand objects with their respective overlay colors here if needed
];

const LogoGrid = () => {
  const { showModal, toggleModal, modalPayload } = useModal();
  // const { modalPayload: modalData } = useModal();

  const handleClick = (payload) => {
    toggleModal("modal1", payload);
  };

  return (
    <Box sx={{ width: "80%", margin: "auto", mt: 2 }}>
      <Grid container spacing={2}>
        {logos.map((logo) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={logo.id}
            onClick={() => handleClick(logo)}
          >
            <Card
              sx={{ display: "flex", flexDirection: "column", height: 300 }}
            >
              <CardMedia
                component="img"
                image={logo.logo}
                alt={logo.name}
                sx={{ width: "100%", objectFit: "contain" }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {logo.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>{" "}
      <ModalWrapper
        open={showModal.modal1}
        toggleModal={() => toggleModal("modal1")}
      >
        <Card sx={{ display: "flex", flexDirection: "column", height: 300 }}>
          <CardMedia
            component="img"
            image={modalPayload.logo}
            alt={modalPayload.name}
            sx={{ width: "100%", objectFit: "contain" }}
          />
        </Card>
      </ModalWrapper>
    </Box>
  );
};

export default LogoGrid;
