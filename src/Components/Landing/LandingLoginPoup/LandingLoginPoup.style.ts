import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import learningStudent from "../../../assets/images/login/yellowBackground.png";
import { text } from "stream/consumers";

export const ContainerGrid = styled(Grid)({
    height: '100%'
});

export const RightContainer = styled('div')({
    paddingRight: '2rem',
    paddingLeft: '2rem',
    textAlign: 'center'
});

export const RightCloseIcon = styled('span')({
    paddingRight: '1rem',
    paddingTop: '1rem',
});

export const RightMainTitle = styled('div')({
    fontSize: '1.5rem',
    fontWeight: '700',
});


export const RightSecondaryTitle = styled('div')({
    color: '#62646a',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    marginBottom: '5rem'
});

export const RightSecondaryTitleJoinText = styled('span')({
    textDecoration: 'underline',
    color: 'black'
});

export const LearningStudent = styled('div')({
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundImage: `url(${learningStudent})`,
    height: '100%'
});

export const LeftMainTitle = styled('div')({
    fontSize: '1.75rem',
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    paddingTop: '3rem'
});

export const LeftSecondaryTitle = styled('div')({
    color: 'white',
    fontSize: '1.25rem',
    paddingRight: '0.5rem'
});

export const LeftSecondaryTitleContainer = styled('div')({
    display: 'flex',
    marginTop: '1.5rem',
    paddingRight: '2rem',
});

export const LeftSecondaryTitleIcon = styled('span')({
    color: 'white',
});





