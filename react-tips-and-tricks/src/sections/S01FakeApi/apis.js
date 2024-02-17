// apis.js
import {
    fetchFakeTodos,
    createFakeTodo,
    editFakeTodo,
    deleteFakeTodo,
} from './utils/fakeApis';

export const fetchTodos = async () => {
    try {
        const todos = await fetchFakeTodos();
        return todos;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};

export const createTodo = async (text) => {
    try {
        console.log("createTodo:", { text });
        const newTodo = await createFakeTodo(text);
        console.log("createTodo:", newTodo);
        return newTodo;
    } catch (error) {
        console.error('Error creating todo:', error);
        throw error;
    }
};

export const editTodo = async (id, newText) => {
    try {
        const editedTodo = await editFakeTodo(id, newText);
        return editedTodo;
    } catch (error) {
        console.error('Error editing todo:', error);
        throw error;
    }
};

export const deleteTodo = async (id) => {
    try {
        const deletedTodo = await deleteFakeTodo(id);
        return deletedTodo;
    } catch (error) {
        console.error('Error deleting todo:', error);
        throw error;
    }
};
