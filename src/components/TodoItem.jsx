const ToDoItem = ({ todo, onDelete, onToggleComplete }) => {
    const handleToggleComplete = () => {
      onToggleComplete(todo.id);
    };
  
    const handleDelete = () => {
        onDelete(todo.id);
    };
  
    return (
      <div className="p-4 flex justify-between items-center border-b-2 border-gray-200 transition duration-500 ease-in-out">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggleComplete}
            className="mr-2 form-checkbox h-5 w-5"
          />
          <span className={`flex-1 ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>
        </div>
        <button
          onClick={handleDelete}
          className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          Delete
        </button>
      </div>
    );
};

export default ToDoItem;