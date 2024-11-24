import PropTypes from 'prop-types';
import TodoFooter from '../TodoFooter/TodoFooter';
import "./TodoList.css";

function TodoList({ todos, setTodos }) {
    const updateTask = (id) => {
        let updatedTasks = todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
                return todo;
            } else {
                return todo;
            }
        });
        setTodos(updatedTasks);
    };

    const calcNumberOfIncompletedTasks = () => {
        let count = 0;
        todos.forEach((todo) => {
            if (!todo.completed) count++;
        });
        return count;
    };

    return (
        <div className="todolist-container">
            <div className="todos-container">
                <div>
                    {todos.map((todo, index) => (
                        <div
                            key={index}
                            className={`todo-item ${todo.completed && "todo-item-active"}`}
                            onClick={() => updateTask(todo.id)}
                        >
                            {todo.task}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <TodoFooter numberOfIncompleteTasks={calcNumberOfIncompletedTasks()} />
            </div>
        </div>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            task: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        })
    ).isRequired,
    setTodos: PropTypes.func.isRequired,
};

export default TodoList;

