"use client"
import { useState } from 'react';
import { addToDo } from '../services/firebase';

const NewToDoForm = () => {
  const [todo, setTodo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    await addToDo({ text: todo, completed: false });
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-5">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="border-2 border-gray-300 p-2"
        placeholder="Add a new task"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2">
        Add Task
      </button>
    </form>
  );
};

export default NewToDoForm;
