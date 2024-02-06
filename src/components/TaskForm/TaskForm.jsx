import { Alert, Box, Modal, TextField, Typography } from '@mui/material'
import './taskform.scss'
import serverURL, { ColorButton, RefreshTasks, modalStyle } from '../../utiils';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import { setTasks } from '../../redux/slices/tasksSlice';

const TaskForm = ({open, handleClose}) => {
    const dispatch = useDispatch()

    const user = useSelector((state => state.auth.user));

    const [title, setTitle] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const add = () => {    
    if (title === ""){
        setIsLoading(false)
        setErrorMessage('Please enter the task title')
    } 
    else{
        const value = {
            title: title,
            userId: user.id
        }

        serverURL.post(`/task`, value)
            .then((response)=>{
                setIsLoading(false)
                console.log(response.data);
                setTitle('')
                setErrorMessage('Successfully created task!')

    
                serverURL.get(`/tasks/${user.id}`).then((response) => {
                    dispatch(setTasks(response.data))
                })
                .catch((error) => {
                    console.log(error)
                });
            }).catch( (error) => {
                setIsLoading(false)
                setErrorMessage('An error occured while creating task!')
                console.log(error)
            })
    }
}

return (
    <div>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={modalStyle} className='task-form'>
            <Typography id="modal-modal-title" variant="h6" component="h1" className="gradient__text hd">
                Create a task
            </Typography>
            <div className="holder" style={errorMessage !== '' ? {height:'45vh'}:{}}>
                <TextField 
                id="filled-basic" 
                label='Title' 
                variant="filled" 
                color="warning"
                name='title'
                value={title}
                onChange={(e) => { setTitle(e.target.value)}}/>

                {
                    errorMessage !== '' && errorMessage !== 'Successfully created task!' && 
                    <div className="alert" onClick={() => setErrorMessage('')}>
                    <Alert severity="error">{errorMessage}</Alert>
                    </div>
                }
                {
                    errorMessage !== '' && errorMessage === 'Successfully created task!' && 
                    <div className="alert" onClick={() => setErrorMessage('')}>
                    <Alert severity="success">{errorMessage}</Alert>
                    </div>
                }
                <ColorButton variant="contained" onClick={() => {
                    setIsLoading(true)
                    add()
                }}>
                    {
                    isLoading ?
                    <Loader size='40px' marginTop='0' bg='#fff'/>:
                    'Create'
                    }
                </ColorButton>
            </div>
        </Box>
    </Modal>
    </div>
)
}

export default TaskForm
