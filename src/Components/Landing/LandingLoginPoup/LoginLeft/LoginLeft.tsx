import { FC } from 'react';
import * as S from './LoginLeft.style'
import { Grid } from '@mui/material';


import { LOGIN_POPUP_TITLES } from './LoginLeft.data';

const LoginLeft: FC = () => {
    return (
        <Grid item xs={6}>
            <S.LearningStudent>
                <S.LeftMainTitle>ההצלחה מתחילה כעת</S.LeftMainTitle>
                {LOGIN_POPUP_TITLES.map((title, index) => (
                    <S.LeftSecondaryTitleContainer key={index}>
                        <S.LeftSecondaryTitleIcon className="material-symbols-outlined">
                            done
                        </S.LeftSecondaryTitleIcon>
                        <S.LeftSecondaryTitle>{title}</S.LeftSecondaryTitle>
                    </S.LeftSecondaryTitleContainer>
                ))}
            </S.LearningStudent>
        </Grid>
    );
};

export default LoginLeft;