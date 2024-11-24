import { useState } from 'react'
import "./AddInput.css"
import { v4 } from "uuid"
import PropTypes from 'prop-types';

function AddInput({
    setTodos, todos
}) {

    const [todo, setTodo] = useState("")

    const addTodo = () => {
        if(!todo) return
        let updatedTodos = [
            ...todos,
            {
                id: v4(),
                task: todo,
                completed: false
            }
        ]
        setTodos(updatedTodos);
        setTodo("")
    }

    return (
        <div className="input-container">
            <input 
                className="input" 
                value={todo} 
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add a new task here..."
            />
            <button 
                className="add-btn"
                onClick={addTodo}
            >
                Add
            </button>
        </div>
    )
}

AddInput.propTypes = {
    setTodos: PropTypes.func.isRequired, // Validates that setTodos is a function and required
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,     // Ensures id is a string and required
            task: PropTypes.string.isRequired,   // Ensures task is a string and required
            completed: PropTypes.bool.isRequired // Ensures completed is a boolean and required
        })
    ).isRequired, // Validates that todos is an array of objects matching the shape above
};

export default AddInput
