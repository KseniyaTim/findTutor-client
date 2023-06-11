import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import { FC, useState } from 'react';
import { ILandingLoginPopup } from './ILandingLoginPopup';

const LandingLoginPopup: FC<ILandingLoginPopup> = ({ isLoginPopupOpen,setIsLoginPopupOpen }) => {
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('sm');

    const handleClose = () => {
        setIsLoginPopupOpen(false);
    };

    const handleMaxWidthChange = (event: SelectChangeEvent<typeof maxWidth>) => {
        setMaxWidth(
            // @ts-expect-error autofill of arbitrary value is not handled.
            event.target.value,
        );
    };

    const handleFullWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullWidth(event.target.checked);
    };

    return (
        <>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={isLoginPopupOpen}
                onClose={handleClose}
            >
                <DialogTitle>Optional sizes</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You can set my maximum width and whether to adapt or not.
                    </DialogContentText>
                    <Box
                        noValidate
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: 'auto',
                            width: 'fit-content',
                        }}
                    >
                        <FormControl sx={{ mt: 2, minWidth: 120 }}>
                            <InputLabel htmlFor="max-width">maxWidth</InputLabel>
                            <Select
                                autoFocus
                                value={maxWidth}
                                onChange={handleMaxWidthChange}
                                label="maxWidth"
                                inputProps={{
                                    name: 'max-width',
                                    id: 'max-width',
                                }}
                            >
                                <MenuItem value={false as any}>false</MenuItem>
                                <MenuItem value="xs">xs</MenuItem>
                                <MenuItem value="sm">sm</MenuItem>
                                <MenuItem value="md">md</MenuItem>
                                <MenuItem value="lg">lg</MenuItem>
                                <MenuItem value="xl">xl</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControlLabel
                            sx={{ mt: 1 }}
                            control={
                                <Switch checked={fullWidth} onChange={handleFullWidthChange} />
                            }
                            label="Full width"
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default LandingLoginPopup