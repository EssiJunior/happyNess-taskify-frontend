// # +====================================================================================+ #
// # |====================================  HappyNess  ===================================| #
// # |======================    taskify app - intergration test    =======================| #
// # |======================= Programmer: NDANG ESSI Pierre Junior =======================| #
// # +====================================================================================+ #

// REACT IMPORTS
import React from 'react'

// MATERIAL UI
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const RemoveTask = ({open, setOpen, task}) => {

    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }

        setOpen(false);
    };

    const action = (
    <React.Fragment>
        <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
        >
        <CloseIcon fontSize="small" />
        </IconButton>
    </React.Fragment>
    );
    
    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={`Deleted task '${task.title}'` }
            action={action}
        />
    )
}

export default RemoveTask
