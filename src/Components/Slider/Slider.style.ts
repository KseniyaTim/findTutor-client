import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SingleCard = styled(Grid)({
    height: '200px',
    backgroundColor: 'lightblue',
});

export const SliderContainer = styled(Grid)({
    marginBottom: '3rem',
    justifyContent: 'space-around',
    alignItems: 'center',
});

export const SliderArrow = styled(Grid)({
    cursor: 'pointer',
});

export const SliderTitle = styled('div')({
    marginTop: '1.5rem',
    marginRight: '3rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: 'black',
    fontSize: '2rem',
});