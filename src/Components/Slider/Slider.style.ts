import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SliderSingleImg = styled('img')({
    height: '250px',
    width: '100%',
    transition: 'opacity .3s ease-in-out',
    borderRadius: '25px',
    cursor: 'pointer',
});

export const SliderSingleTitle = styled('div')({
    marginBottom: ' 1rem',
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bolder',
    fontSize: '1.5rem',
    cursor: 'pointer',
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