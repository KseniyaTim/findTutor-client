import { FC } from 'react';

// mui 
import Dialog from '@mui/material/Dialog'

// style
import * as S from './LandingLoginPoup.style'

// interfaces
import { ILandingLoginPopup } from './ILandingLoginPopup';

// comps
import LoginLeft from './LoginLeft/LoginLeft';
import LoginRight from './LoginRight/LoginRight';

const LandingLoginPopup: FC<ILandingLoginPopup> = ({ isLoginPopupOpen, setIsLoginPopupOpen }) => {

    const handleClose = () => { setIsLoginPopupOpen(false) };

    return (
        <>
            <Dialog
                open={isLoginPopupOpen}
                fullWidth
                onClose={handleClose}
                PaperProps={{ sx: { maxWidth: '775px', height: '545px', borderRadius: '20px', maxHeight: '645px', } }}>
                <S.ContainerGrid container>
                    <LoginRight setIsLoginPopupOpen={setIsLoginPopupOpen} />
                    <LoginLeft />
                </S.ContainerGrid>
            </Dialog>
        </>
    );
}

export default LandingLoginPopup