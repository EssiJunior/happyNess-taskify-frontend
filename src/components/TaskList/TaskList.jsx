import React, { useState } from 'react'
import CheckBox from '../CheckBox/CheckBox'

import './task_list.scss'
import RemoveTask from '../RemoveTask';
import Task from '../Task/Task';

const TaskList = ({tasks}) => {

    return (
        <div className="tasks">
            {tasks.map((task, index) => {
                return (
                    <Task task={task} index={index} />
                )
            })}
        </div>
    )
}

export default TaskList
