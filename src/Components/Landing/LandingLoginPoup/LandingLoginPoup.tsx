;
import Dialog from '@mui/material/Dialog'

import * as S from './LandingLoginPoup.style'
import { FC } from 'react';
import { ILandingLoginPopup } from './ILandingLoginPopup';
import { Grid } from '@mui/material';

import LoginButton from './LoginButton/LoginButton';
import google from '../../../assets/images/login/google.png'
import { LOGIN_POPUP_TITLES } from './LandingLoginPopup.data';

const LandingLoginPopup: FC<ILandingLoginPopup> = ({ isLoginPopupOpen, setIsLoginPopupOpen }) => {

    const handleClose = () => {
        setIsLoginPopupOpen(false);
    };

    return (
        <>
            <Dialog
                open={isLoginPopupOpen}
                fullWidth
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        maxWidth: '775px',
                        height: '545px',
                        borderRadius: '20px',
                        maxHeight: '645px',
                    }
                }}
            >
                <S.ContainerGrid container>
                    <Grid item xs={6}>
                        <S.RightCloseIcon className="material-symbols-outlined" onClick={handleClose}>close</S.RightCloseIcon>
                        <S.RightContainer>
                            <S.RightMainTitle>התחבר לחשבונך</S.RightMainTitle>
                            <S.RightSecondaryTitle>אין לך חשבון? <S.RightSecondaryTitleJoinText>הצטרף כאן</S.RightSecondaryTitleJoinText></S.RightSecondaryTitle>
                            <LoginButton text='התחבר'></LoginButton>
                            <S.RightSeperator>או</S.RightSeperator>
                            <LoginButton text='התחבר עם גוגל' icon={google}></LoginButton>

                        </S.RightContainer>
                    </Grid>
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
                </S.ContainerGrid>
            </Dialog>
        </>
    );
}

export default LandingLoginPopup