import { styled } from "@mui/material/styles";

export const BackButton = styled('div')({
    textDecoration: 'underline',
    textAlign: 'left',
    cursor: 'pointer',
    marginBottom: '3rem'
});


export const Title = styled('div')({
    textAlign: 'right',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
});

export const ErrorMsg = styled('span')({
    color: 'red',
    fontSize: '0.75rem',
    marginBottom: '1rem'
});