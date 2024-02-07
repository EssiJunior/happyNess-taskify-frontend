// # +====================================================================================+ #
// # |====================================  HappyNess  ===================================| #
// # |======================    taskify app - intergration test    =======================| #
// # |======================= Programmer: NDANG ESSI Pierre Junior =======================| #
// # +====================================================================================+ #

// REACT IMPORTS
import React from 'react'

// COMPONENTS
import Task from '../Task/Task';

// STYLE
import './task_list.scss'

const TaskList = ({tasks, filter}) => {
    var tList = []
    if (filter === 'all') {
        tList = tasks
    }else if (filter === 'todo') {
        tList = tasks.filter((task) => task.status === 'todo')
    }else if (filter === 'done') {
        tList = tasks.filter((task) => task.status === 'done')
    }

    return (
        <div className="tasks">
            {tList.map((task, index) => {
                return (
                    <Task task={task} index={index} />
                )
            })}
        </div>
    )
}

export default TaskList
