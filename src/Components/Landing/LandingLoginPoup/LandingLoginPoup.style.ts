import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import learningStudent from "../../../assets/images/login/learningStudent.jpg";

export const ContainerGrid = styled(Grid)({
    height: '100%'
});

export const RightGrid = styled(Grid)({
    paddingRight: '2rem',
    paddingTop: '2rem'
});


export const RightMainTitle = styled('div')({
    fontSize: '1.25rem',
    fontWeight: '700',
});


export const LearningStudent = styled('div')({
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${learningStudent})`,
    height: '100%'
});