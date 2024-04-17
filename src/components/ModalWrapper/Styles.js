import { Paper } from "@mui/material";
import { styled } from "@mui/system";

export const ModalItemsContainer = styled(Paper)(({ theme }) => ({
  position: "relative",
  background: "#fff",
  width: "40rem",
  padding: "2em 3em",
  display: "flex",
  flexDirection: "column",
  overflow: "scroll",
  maxWidth: "90vw",
  maxHeight: "90vh",

  [theme.breakpoints.down("md")]: {
    width: "90vw",
    padding: "1em 1em",
  },
}));
