import { generateRandomUUID } from "./helperFunctions";

// fakeBackendApis.js
const todos = [
  { id: generateRandomUUID(), text: 'Learn React', completed: false },
  { id:  generateRandomUUID(), text: 'Build a React app', completed: true },
  { id:  generateRandomUUID(), text: 'Write tests', completed: false },
];

export const fetchFakeTodos = async () => {
  // Simulate an API call delay (e.g., 500ms)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return todos;
};

export const createFakeTodo = async (text) => {
  console.log("fake api call ",{text})
  // Simulate an API call delay (e.g., 500ms)
  await new Promise((resolve) => setTimeout(resolve, 500));

  const newTodo = { id: generateRandomUUID(), text, completed: false };

  return newTodo;
};

export const editFakeTodo = async (id, newText) => {
  // Simulate an API call delay (e.g., 500ms)
  await new Promise((resolve) => setTimeout(resolve, 500));

  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex !== -1) {
    todos[todoIndex].text = newText;
    return { id, text: newText, completed: todos[todoIndex].completed };
  }

  return null;
};

export const deleteFakeTodo = async (id) => {
  // Simulate an API call delay (e.g., 500ms)
  await new Promise((resolve) => setTimeout(resolve, 500));

  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex !== -1) {
    const deletedTodo = todos.splice(todoIndex, 1)[0];
    return deletedTodo;
  }

  return null;
};


