import React from 'react';
import '../../index.css'

const TaskItem = ({todo, removeTask}) => {
    return (
        <ul key={todo.id}>
            <li className='item'>
                <input className='item-checkbox' type="checkbox" name="scales"/>
                <label htmlFor='scales' className='item-name'>{todo.task}</label>
                <button className='delete-btn' onClick={() => removeTask(todo.id)}>Delete</button>
            </li>
        </ul>
    );
};

export default TaskItem;