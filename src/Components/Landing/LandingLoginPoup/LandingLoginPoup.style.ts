import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import learningStudent from "../../../assets/images/login/learningStudent.jpg";

export const ContainerGrid = styled(Grid)({
    height: '100%'
});

export const RightGrid = styled(Grid)({
    paddingRight: '2rem',
    paddingLeft: '2rem',
    paddingTop: '2rem'
});


export const RightMainTitle = styled('div')({
    fontSize: '1.5rem',
    fontWeight: '700',
    marginTop: '2rem'
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
    backgroundPosition: 'center',
    backgroundImage: `url(${learningStudent})`,
    height: '100%'
});