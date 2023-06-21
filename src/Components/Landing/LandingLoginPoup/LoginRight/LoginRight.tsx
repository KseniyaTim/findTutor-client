import { FC, useState } from 'react';

// mui
import { Grid } from '@mui/material';

// style
import * as S from './LoginRight.style'

// consts
import { LOGIN_TOGGLER_COMPS, LOGIN_TOGGLER_COMPS_LITERALS, loginTogglerCompsManager } from './LoginRight.data';

// interfaces
import { ILoginRight } from './ILoginRight';

// comps
import Login from './Login/Login';
import ForgetPassword from './ForgetPassword/ForgetPassword';
import RestorationCode from './RestorationCode/RestorationCode';
import ResetPassword from './ResetPassword/ResetPassword';

const LoginRight: FC<ILoginRight> = ({ setIsLoginPopupOpen }) => {

    const [tempLoginComp, setTempLoginComp] = useState<LOGIN_TOGGLER_COMPS_LITERALS>(LOGIN_TOGGLER_COMPS.login)

    loginTogglerCompsManager[LOGIN_TOGGLER_COMPS.login] = <Login setTempLoginComp={setTempLoginComp} />
    loginTogglerCompsManager[LOGIN_TOGGLER_COMPS.forgotPassword] = <ForgetPassword setTempLoginComp={setTempLoginComp} />
    loginTogglerCompsManager[LOGIN_TOGGLER_COMPS.restorationCode] = <RestorationCode setTempLoginComp={setTempLoginComp} />
    loginTogglerCompsManager[LOGIN_TOGGLER_COMPS.resetPassword] = <ResetPassword setTempLoginComp={setTempLoginComp} />

    const handleClose = () => {
        setIsLoginPopupOpen(false);
    };

    return (
        <Grid item xs={6}>
            <S.RightCloseIcon className="material-symbols-outlined" onClick={handleClose}>close</S.RightCloseIcon>
            <S.RightContainer>
                {loginTogglerCompsManager[tempLoginComp]}
            </S.RightContainer>
        </Grid>
    );
};

export default LoginRight;