// # +====================================================================================+ #
// # |====================================  HappyNess  ===================================| #
// # |======================    taskify app - intergration test    =======================| #
// # |======================= Programmer: NDANG ESSI Pierre Junior =======================| #
// # +====================================================================================+ #

// REACT IMPORTS
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

// UTILITIES
import serverURL from '../../utiils';
import { setTasks } from '../../redux/slices/tasksSlice';

// STYLE
import './check_box.scss'

const CheckBox = ({task}) => {
    const dispatch = useDispatch()

    const user = useSelector((state => state.auth.user));
    
    // Bearing the default check state depending on status
    var state = '' 
    if (task.status === 'done')
        state = true
    else 
        state = false
    
    // Bearing the check actions on tasks
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
