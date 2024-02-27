// # +====================================================================================+ #
// # |====================================  HappyNess  ===================================| #
// # |======================    taskify app - intergration test    =======================| #
// # |======================= Programmer: NDANG ESSI Pierre Junior =======================| #
// # +====================================================================================+ #

// REACT IMPORTS
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';

// MATERIEL UI
import { useMediaQuery } from '@mui/material';
import { AddOutlined, FilterAlt } from '@mui/icons-material';

// COMPONENTS AND UTILITIES
import serverURL, { defaultOptions } from '../utiils';
import TaskForm from '../components/TaskForm/TaskForm';
import TaskList from '../components/TaskList/TaskList';
import {setTasks} from '../redux/slices/tasksSlice';
import { login } from '../redux/slices/authSlice';

// STYLE
import '../styles/management.scss'

// ASSETS
import lottie from '../assets/lotties/tasks.json'

const Management = () => {
    // Redux selectors
    const user = useSelector((state => state.auth.user));
    const tasks = useSelector((state => state.tasks.userTasks));

    // React hooks
    const is_lg = useMediaQuery('(max-width: 990px)')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // States 
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const [filter, setFilter] = useState('all');
    const [all, setAll] = useState(0);
    const [todo, setTodo] = useState(0);
    const [done, setDone] = useState(0);

    const getTasks = () => {
        serverURL.get(`/tasks/${user.id}`).then((response) => {
            dispatch(setTasks(response.data))
        })
        .catch((error) => {
            console.log(error)
        });
        
        setAll(tasks.length)
        setTodo(tasks.filter((task) => task.status === 'todo').length)
        setDone(tasks.filter((task) => task.status === 'done').length)
    }

    useEffect(() => {
        if (user === null) 
            navigate('/signin')
        else{
            getTasks()
        }
        
    }, [user, tasks]);

    const logOut = () => {
        dispatch(login(null))
        navigate('/')
    }

    return (
        <section className='management'>
            <div className='new'>
                <div className="add" onClick={handleOpen}>
                    <AddOutlined />
                    <p>Add task</p>
                </div>
                <TaskForm open={open} handleClose={handleClose}/>
                <div className="stats">
                    <div class="radio">
                        <input onClick={() => setFilter('all')} label="All" type="radio" id="all" name="status" value="all"  />
                        <input onClick={() => setFilter('todo')} label="Todo" type="radio" id="todo" name="status" value="todo" />
                        <input onClick={() => setFilter('done')} label="Done" type="radio" id="done" name="status" value="done" />
                    </div>
                </div>

                {/* <div className="stats">
                    <FilterAlt style={{margin:'0 1rem', color:'#85C7DE'}} />
                    <p onClick={() => setFilter('all')} style={filter === 'all' ?{backgroundColor:'rgba(224, 241, 246, 0.219)'}:{}}>ALL <span>{all}</span></p>
                    <p onClick={() => setFilter('todo')} className='todo' style={filter === 'todo' ?{backgroundColor:'rgba(255, 166, 0, 0.065)'}:{}}>TODO <span>{todo}</span></p>
                    <p onClick={() => setFilter('done')} className='done' style={filter === 'done' ?{backgroundColor:'rgba(0, 128, 0, 0.065)'}:{}}>DONE <span>{done}</span></p>
                </div> */}
                <TaskList tasks={tasks} filter={filter} />
            </div>
            
            <div className="illustration">
            <Lottie options={defaultOptions(lottie)}
                speed={0.5}
                height={is_lg ? 200 : 400}
                width={is_lg ? 200 :400}/>
            </div>

            <div className="out" onClick={() => logOut()}>
                <button class="logout">
                    <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
                    
                    <div class="text">Logout</div>
                </button>

            </div>



        </section>
    )
}

export default Management
