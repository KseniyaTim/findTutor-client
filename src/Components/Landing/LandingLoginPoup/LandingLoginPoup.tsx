;
import Dialog from '@mui/material/Dialog'

import * as S from './LandingLoginPoup.style'
import { FC, useState } from 'react';
import { ILandingLoginPopup } from './ILandingLoginPopup';
import { Grid } from '@mui/material';


import './x.css'


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
                        maxWidth: '875px',
                        height: '645px',
                        borderRadius: '20px',
                        maxHeight: '645px',
                    }
                }}
            >
                <S.ContainerGrid container>
                    <S.RightGrid item xs={6}>
                        <div onClick={handleClose}>סגור</div>
                        <S.RightMainTitle>צור חשבון חדש</S.RightMainTitle>
                        <S.RightMainTitle>אין לך חשבון? הצטרף כאן</S.RightMainTitle>
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