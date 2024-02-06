import React, { useState } from 'react'
import CheckBox from '../CheckBox/CheckBox'

import './task_list.scss'
import RemoveTask from '../RemoveTask';
import Task from '../Task/Task';

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
