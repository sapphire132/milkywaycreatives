import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "inter",
  fontWeight: 600,
  fontSize: 20,
}));

export const Detail = styled(Typography)(({ theme }) => ({
  fontFamily: "inter",
  fontWeight: 300,
  fontSize: 18,
  width: "80%",
}));
