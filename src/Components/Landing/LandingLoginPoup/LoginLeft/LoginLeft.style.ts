import { styled } from "@mui/material/styles";

import learningStudent from "../../../assets/images/login/yellowBackground.png";

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
