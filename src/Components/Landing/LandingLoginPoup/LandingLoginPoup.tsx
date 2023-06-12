;
import Dialog from '@mui/material/Dialog'

import * as S from './LandingLoginPoup.style'
import { FC } from 'react';
import { ILandingLoginPopup } from './ILandingLoginPopup';
import { Grid } from '@mui/material';


import './x.css'
import LoginButton from './LoginButton/LoginButton';
import google from '../../../assets/images/login/google.png'
import envelope from '../../../assets/images/login/envelope.png'



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
                    <S.RightGrid item xs={6}>
                        <div onClick={handleClose}>סגור</div>
                        <S.RightMainTitle>התחבר לחשבונך</S.RightMainTitle>
                        <S.RightSecondaryTitle>אין לך חשבון? <S.RightSecondaryTitleJoinText>הצטרף כאן</S.RightSecondaryTitleJoinText></S.RightSecondaryTitle>
                        <LoginButton text='התחבר עם גוגל' icon={google}></LoginButton>
                        <LoginButton text='התחבר עם אימייל וסיסמא' icon={envelope}></LoginButton>
                    </S.RightGrid>
                    <Grid item xs={6}>
                        <S.LearningStudent>
                            <div className="main-title">ההצלחה מתחילה כעת</div>
                            <div className="subtitles">
                                <div >שלום כיתה א</div>
                                <div >שלום כיתה א</div>
                                <div >שלום כיתה א</div>

                            </div>
                        </S.LearningStudent>
                    </Grid>
                </S.ContainerGrid>
            </Dialog>
        </>
    );
}

export default LandingLoginPopup