import { styled } from "@mui/material/styles";

export const RightContainer = styled('div')({
    paddingRight: '2rem',
    paddingLeft: '2rem',
    textAlign: 'center'
});

export const RightCloseIcon = styled('span')({
    marginRight: '1rem',
    marginTop: '1rem',
    cursor: 'pointer',
    ":hover": {
        backgroundColor: '#fafafa',
        borderRadius: '50%'
    }
});


