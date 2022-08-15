import React, {useState} from "react";
import TaskItem from "./components/taskItem/TaskItem";
import ToDoForm from "./components/ToDoForm/ToDoForm";

function App() {

    const [todos, setTodos] = useState([])
    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2, 9),
                task: userInput,
                complete: false
            }
            setTodos([...todos, newItem])
        }
    }

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    const handleToggle = (id)=> {
        setTodos( [
            ...todos.map((todo) =>
                todo.id === id ? {...todo, complete: !todo.complete} : {...todo})
        ])
    }

    return (
        <div className='inner'>
            <h1 className='title'>TODOLIST</h1>
            <h2 className='task-num'>Task list: {todos.length}</h2>
            <ToDoForm addTask={addTask}/>

            {todos.map((todo) => {
                    return (
                        <TaskItem
                            todo={todo}
                            key={todo.id}
                            todgleTask={handleToggle}
                            removeTask={removeTask}
                        />
                    )
                }
            )}

        </div>
    );
}

export default App;
