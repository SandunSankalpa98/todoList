import PropTypes from 'prop-types';

const TodoCards = (props) => {
  const { children } = props;

  return (
    <>
      <li className='todoItem'>
        {children}
        <div className="todoItem">
          <i className="fa-regular fa-pen-to-square"></i>
          <i className="fa-solid fa-trash"></i>
        </div>
      </li>
    </>
  );
};

TodoCards.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoCards;
