import PropTypes from 'prop-types';
// Add the following import statement to the TodoList component:
// import PropTypes from 'prop-types';
const TodoList = ({todos, deleteTodo, toggleComplete}) => {
    // Add the following code snippet to the TodoList component:
    return(
        <ul>
            { todos.map( item => (
                <li key={item.id}>
                    <input type="checkbox" checked={item.isCompleted} onClick={() => toggleComplete(item.id)}/>
                    <span className={item.isCompleted ? "completed" : ""} >{item.text} </span>
                    <button onClick={() => deleteTodo(item.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}
// Add the following propTypes definition to the TodoList component:

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired
    })).isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
};

export default TodoList;
