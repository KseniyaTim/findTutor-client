import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

export const gridWrapper = styled(Grid)({
  padding: "3rem 5rem 3rem 5rem ",
});

export const gridItem = styled(Grid)({
  textAlign: "center",
  cursor: "pointer",
});

export const icon = styled("div")({
  fontSize: "2rem",
});

export const hoverLine = styled("div")({
  position: "absolute",
  width: "100%",
  bottom: "-5px",
  left: "0",
  height: "2px",
  backgroundColor: "lightblue",
  transform: "scaleX(0)",
  transformOrigin: "left",
  transition: "transform 0.3s ease",
  ":hover": {
    transform: "scaleX(1)",
  },
});

export const title = styled("div")({
  fontSize: "1.3rem",
});
