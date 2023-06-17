import { FC, useState, useEffect } from 'react';

// mui
import { Grid } from '@mui/material';

// style
import * as S from './LoginRight.style'

// consts
import { LOGIN_POPUP_FIELDS } from './LoginRight.data';

// comps
import LoginButton from './LoginButton/LoginButton';
import LoginField from './LoginField/LoginField';

// icons
import google from '../../../../assets/images/login/google.png'

// interfaces
import { ILoginRight } from './ILoginRight';

const LoginRight: FC<ILoginRight> = ({ setIsLoginPopupOpen }) => {


    const [isFieldsValid, setIsFieldsValid] = useState<boolean[]>()

    useEffect(() => {
        setIsFieldsValid(() => {
            return LOGIN_POPUP_FIELDS.map(element => { return element.isRequired })
        });
    }, [])

    const handleClose = () => {
        setIsLoginPopupOpen(false);
    };


    return (
        <Grid item xs={6}>
            <S.RightCloseIcon className="material-symbols-outlined" onClick={handleClose}>close</S.RightCloseIcon>
            <S.RightContainer>
                <S.RightMainTitle>התחבר לחשבונך</S.RightMainTitle>
                <S.RightSecondaryTitle>אין לך חשבון? <S.RightSecondaryTitleJoinText>הצטרף כאן</S.RightSecondaryTitleJoinText></S.RightSecondaryTitle>
                {
                    LOGIN_POPUP_FIELDS.map((element, index) => (
                        <LoginField key={index} {...element}></LoginField>
                    ))
                }
                <LoginButton text='התחבר'></LoginButton>
                <S.RightSeperator>או</S.RightSeperator>
                <LoginButton text='התחבר עם גוגל' icon={google}></LoginButton>

            </S.RightContainer>
        </Grid>
    );
};

export default LoginRight;