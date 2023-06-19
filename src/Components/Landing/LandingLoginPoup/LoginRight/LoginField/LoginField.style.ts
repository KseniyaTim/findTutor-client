import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Text = styled(TextField)(({ theme }) => ({
    marginBottom: '1rem !important',

    '.MuiOutlinedInput-root': {
        borderRadius: '1.625rem',
        fontSize: '1.125rem',

        '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#868686',
        },
        '&.Mui-focused': {
            '.MuiOutlinedInput-notchedOutline': {
                borderColor: '#5755F8',
                borderWidth: 1,
            },
        },
        '&.Mui-error': {
            '.MuiOutlinedInput-notchedOutline': {
                borderColor: 'red',
            },
        }
    },
    '.MuiOutlinedInput-input': {
        padding: '0.75rem 1.25rem',
        fontFamily: theme.typography.fontFamily,
    },
    '.MuiFormHelperText-root': {
        fontSize: '0.9375rem',
        margin: '0 1.25rem -1.5625rem',
        paddingBottom: '1rem',
        textAlign: 'start',

        '&.Mui-error': {
            color: 'red',
        }
    }
}))