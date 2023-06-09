import { styled } from "@mui/material/styles";

export const wrapper = styled("div")({
  padding: '0 2rem 0 0' 
});

export const titleContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  color: 'GrayText'
});

export const bulletIcon = styled("span")({
  padding: "0 0 0 1rem",
  fontSize: "1.7rem",
});

export const bulletTitle = styled("div")({
  fontSize: "1.5rem",
  padding: "1rem 0 1rem 0",
});

export const bulletDesc = styled("div")({
  fontSize: "18px",
  color: 'gray', 
  width: '22rem'
});
