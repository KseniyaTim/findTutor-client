import { styled } from "@mui/material/styles";

export const wrapper = styled("div")({
  paddingBottom: '1.5rem'
});

export const titleContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  paddingBottom: '1rem'
});

export const bulletIcon = styled("span")({
  color: 'gray',
  marginLeft: '10px'
});

export const bulletTitle = styled("div")({
  fontSize: "18px",
  color: '#404145',
  fontWeight: '700'
});

export const bulletDesc = styled("div")({
  fontSize: "18px",
  color: 'gray',
  width: '22rem'
});
