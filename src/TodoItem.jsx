const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          //onChange={(e) => toggleTodo(todo.id, e.target.completed)}
        />
        {title}
      </label>
      <button
        className="btn btn-danger"
        onClick={() => {
          deleteTodo(id);
        }}
      >
        {' '}
        Delete{' '}
      </button>
    </li>
  );
};

export default TodoItem;
