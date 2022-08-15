import React, {useState} from 'react';


const ToDoForm = ({addTask}) => {

    const [userInput, setUserInput] = useState('')

    const handlerChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }

    const handlerKeyPress = (e) => {
        if(e.key === 'Enter') {
            handlerSubmit(e)
        }
    }

    return (
        <form className='form' onSubmit={handlerSubmit}>
            <input className='input'
                   value={userInput}
                   onChange={handlerChange}
                   onKeyDown={handlerKeyPress}
                   type="text"
                   placeholder='Add Task'/>
            <button className='btn'>+ Add</button>
        </form>
    );
};

export default ToDoForm;