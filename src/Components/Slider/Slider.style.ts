import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import Programming from '../../assets/images/landingSlider/Programming.png'

export const SliderSingleImg = styled('div')({
    height: '250px',
    width: '100%',
    transition: 'opacity .3s ease-in-out',
    display: 'flex',
    alignItems: 'flex-start',
    backgroundImage: `url(${Programming})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '25px',
});

export const SliderSingleTitle = styled('div')({
    marginTop: ' 10px',
    marginRight: '10px',
    fontWeight: 'bolder',
    fontSize: '1.5rem',
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