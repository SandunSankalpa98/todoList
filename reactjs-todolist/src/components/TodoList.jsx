import PropTypes from 'prop-types';
import TodoCards from "./TodoCards";

const TodoList = (props) => {
    const { todos } = props;

    return (
        <div>
            <ul>
                {todos.map((todo, todoIndex) => {
                    return (
                        <TodoCards  {...props} key={todoIndex} index={todoIndex}>
                            <p>{todo}</p>
                        </TodoCards>
                    );
                })}
            </ul>
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TodoList;
