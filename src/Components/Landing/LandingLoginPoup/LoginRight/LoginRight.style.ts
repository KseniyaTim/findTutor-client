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

export const RightMainTitle = styled('div')({
    fontSize: '1.5rem',
    fontWeight: '700',
});

export const RightSeperator = styled('div')({
    padding: '0.75rem 0 0.75rem 0',
    fontWeight: '700',
});

export const RightSecondaryTitle = styled('div')({
    color: '#62646a',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    marginBottom: '3rem'
});

export const RightSecondaryTitleJoinText = styled('span')({
    textDecoration: 'underline',
    color: 'black',
    cursor: 'pointer'
});

export const RightLoginFailed = styled('span')({
    color: 'red',
    fontSize: '0.75rem',
    marginBottom: '1rem'
});
