import React from 'react';



const Task = ({task}:any) => {
    return (
        <li>
            {task.text}
        </li>
    );
};

export default Task;

