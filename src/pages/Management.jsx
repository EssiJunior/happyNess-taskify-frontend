import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../styles/management.scss'
import { AddOutlined, FilterAlt } from '@mui/icons-material';
import Lottie from 'react-lottie';
import lottie from '../assets/lotties/tasks.json'
import serverURL, { defaultOptions } from '../utiils';
import { useMediaQuery } from '@mui/material';
import {setTasks} from '../redux/slices/tasksSlice';
import TaskForm from '../components/TaskForm/TaskForm';
import CheckBox from '../components/CheckBox/CheckBox';
import TaskList from '../components/TaskList/TaskList';

const Management = () => {
    const user = useSelector((state => state.auth.user));
    const tasks = useSelector((state => state.tasks.userTasks));

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const is_lg = useMediaQuery('(max-width: 990px)')

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    
    useEffect(() => {
        if (user === null) 
            navigate('/signin')
        
        serverURL.get(`/tasks/${user.id}`).then((response) => {
            dispatch(setTasks(response.data))
        })
        .catch((error) => {
            console.log(error)
        });
    }, [user, navigate, dispatch]);

    return (
        <section className='management'>
            <div className='new'>
                <div className="add" onClick={handleOpen}>
                    <AddOutlined />
                    <p>Add task</p>
                </div>
                <TaskForm open={open} handleClose={handleClose}/>
                <div className="stats">
                    <FilterAlt style={{margin:'0 1rem', color:'#85C7DE'}} />
                    <p>ALL <span>8</span></p>
                    <p className='todo'>TODO <span>3</span></p>
                    <p className='done'>DONE <span>5</span></p>
                </div>
                <TaskList tasks={tasks}/>
            </div>
            
            <div className="illustration">
            <Lottie options={defaultOptions(lottie)}
                speed={0.5}
                height={is_lg ? 200 : 400}
                width={is_lg ? 200 :400}/>
            </div>
        </section>
    )
}

export default Management
