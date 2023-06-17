import { styled } from "@mui/material/styles";


export const LoginButton = styled('div')({
    border: '1.75px solid #e4e5e7',
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px 12px 16px',
    margin: '12px 0',
    borderRadius: '10px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#fafafa'
    }
});

export const LoginButtonText = styled('div')({
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
    width: '90%'
});

export const LoginButtonIcon = styled('img')({
    paddingRight: '1rem',
    width: '30px',
    height: '30px'
});

