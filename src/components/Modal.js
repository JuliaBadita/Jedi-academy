import React from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

export default function Contact(props) {

    return (
        <>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modal">
                    <p id="modal-modal-title">
                        {props.message}
                    </p>
                </Box>
            </Modal>
        </>
    )
}