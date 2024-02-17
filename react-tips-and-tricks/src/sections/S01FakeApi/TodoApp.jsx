// TodoApp.js
import React, { useState, useEffect } from 'react';
import { fetchTodos, createTodo, editTodo, deleteTodo } from './apis';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchTodos();
        console.log({result})
        setTodos(result);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchData();
  }, []);

  const handleCreateTodo = async () => {
    if (newTodoText.trim() !== '') {
      try {
        console.log("handleCreateTodo ",{newTodoText})
        const newTodo = await createTodo(newTodoText);
        console.log("handleCreateTodo ", {newTodo})
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setNewTodoText('');
      } catch (error) {
        console.error('Error creating todo:', error);
      }
    }
  };

  const handleEditTodo = async (id, newText) => {
    try {
      const editedTodo = await editTodo(id, newText);
      if (editedTodo) {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id ? { ...todo, text: newText } : todo
          )
        );
      }
    } catch (error) {
      console.error('Error editing todo:', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      const deletedTodo = await deleteTodo(id);
      if (deletedTodo) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      }
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{' '}
            <button onClick={() => handleEditTodo(todo.id, prompt('Edit Todo', todo.text))}>
              Edit
            </button>{' '}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button onClick={handleCreateTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default TodoApp;
