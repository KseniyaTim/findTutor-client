import { FC } from 'react';
import { ILoginButton } from './ILoginButton';

import * as S from './LoginButton.style'

const LoginButton: FC<ILoginButton> = ({ execFunction, icon, text }) => {
    return (
        <S.LoginButton onClick={execFunction}>
            <S.LoginButtonText>{text}</S.LoginButtonText>
            <S.LoginButtonIcon src={icon}></S.LoginButtonIcon>
        </S.LoginButton>
    );
};

export default LoginButton;