import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SliderSingleImg = styled('img')({
    borderRadius: '4px',
    height: '345px',
    top: '0',
    webkiTransition: 'opacity .3s ease-in-out',
    width: ' 100%',
    cursor: 'pointer',
    ":hover": {
        opacity: '0.8',
    }

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
    transition: 'transform 0.3s ease, opacity 0.3s ease'
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