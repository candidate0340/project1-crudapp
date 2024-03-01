"use client"
import { useEffect, useState } from 'react';
import { collection, addDoc, deleteDoc, getDocs, doc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';
import { updateToDo } from '../services/firebase';
import ToDoItem from './TodoItem';
import { gsap } from "gsap";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchToDos();
  }, []);

  useEffect(() => {
  gsap.to(".todo", {
    opacity: 1,
    y: 0,
    stagger: 0.2,
    ease: "power2.in",
  });
}, []);

  const fetchToDos = async () => {
    const querySnapshot = await getDocs(collection(db, "todos"));
    setTodos(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const handleAddToDo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    const docRef = await addDoc(collection(db, "todos"), { text: newTodo, completed: false });
    setTodos([...todos, { id: docRef.id, text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
    setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id));
};


  const handleToggleComplete = async (id) => {
    const todo = todos.find(todo => todo.id === id);
    await updateToDo(id, { completed: !todo.completed });
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  return (
    <div>
      <form onSubmit={handleAddToDo} className="mb-4 flex-wrap flex justify-center">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
          className="border border-gray-300 rounded-md p-2 hover:border-orange-300 active:ring-1 active:ring-orange-300"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white rounded-md font-bold py-2 px-4">
          Add Task
        </button>
      </form>
      <div className='flex flex-wrap flex-col max-h-80'>
        {todos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} onDelete={handleDelete} onToggleComplete={handleToggleComplete} />

        ))}
      </div>
    </div>
  );
};

export default ToDoList;