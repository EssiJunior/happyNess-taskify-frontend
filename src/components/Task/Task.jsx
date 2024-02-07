// # +====================================================================================+ #
// # |====================================  HappyNess  ===================================| #
// # |======================    taskify app - intergration test    =======================| #
// # |======================= Programmer: NDANG ESSI Pierre Junior =======================| #
// # +====================================================================================+ #

// REACT IMPORTS
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

// COMPOMENTS AND UTILITIES
import CheckBox from '../CheckBox/CheckBox'
import RemoveTask from '../RemoveTask';
import serverURL from '../../utiils';
import { setTasks } from '../../redux/slices/tasksSlice';

const Task = ({task, index}) => {
    const user = useSelector((state => state.auth.user));
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);

    const deleteTask = () => {
        setOpen(true);
        serverURL.delete(`/task/${task.id}`).then((response) => {
            console.log(response.data)
            
            serverURL.get(`/tasks/${user.id}`).then((response) => {
                dispatch(setTasks(response.data))
            })
            .catch((error) => {
                console.log(error)
            });
        })
        .catch((error) => {
            console.log(error)
        });
    };
    
    return (
    <div className="task" key={index}>
        <div className="status">
            <CheckBox task={task}/>
        </div>
        <div className="title">
            <p style={task.status === 'done' ? {textDecoration:'line-through', color:'#018786'}:{}}>{task.title}</p>
        </div>
        <div className="actions">
            <button class="btn-delete" onClick={deleteTask}>
                <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" class="icon">
                <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
                </svg>
            </button>
        </div>

        <RemoveTask task={task} open={open} setOpen={setOpen} />
    </div>
    )
}

export default Task
