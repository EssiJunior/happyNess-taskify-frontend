import React, { useState } from 'react'

import './check_box.scss'
import serverURL from '../../utiils';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../../redux/slices/tasksSlice';

const CheckBox = ({task}) => {
    const user = useSelector((state => state.auth.user));
    const dispatch = useDispatch()

    var state = '' 
    if (task.status === 'done')
        state = true
    else 
        state = false
    
    const handleCheckboxChange = () => {
        const newStatus = task.status === 'done' ? 'todo' : 'done'

        serverURL.patch(`/task/status/${task.id}`, {'status':newStatus}).then((response) => {
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
        <label class="cl-checkbox" >
            <input type="checkbox"
                checked={state} 
                onChange={handleCheckboxChange} />
            <span></span>
        </label>
    )
}

export default CheckBox
