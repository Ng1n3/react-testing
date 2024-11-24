import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './TodoFooter.css';

function TodoFooter({ numberOfIncompleteTasks }) {
  return (
    <div className="todo-footer">
      <p>
        {numberOfIncompleteTasks}{' '}
        {numberOfIncompleteTasks === 1 ? 'task' : 'tasks'} left
      </p>
      <Link to="/followers">Followers</Link>
    </div>
  );
}

TodoFooter.propTypes = {
  numberOfIncompleteTasks: PropTypes.number.isRequired,
};

export default TodoFooter;
