import { FC } from 'react';

import * as S from './ForgetPassword.style'
import LoginField from '../LoginField/LoginField';

const ForgetPassword: FC = () => {
    return (
        <>
            <S.BackToLoginPopup>חזור</S.BackToLoginPopup>
            <S.InsertEmailTitle>הזן אימייל לשחזור</S.InsertEmailTitle>
        </>
    );
};

export default ForgetPassword;