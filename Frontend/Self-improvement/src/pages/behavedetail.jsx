import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../service/api';
import TodoItem from '../components/todolist';

const BehaviorDetails = () => {
  const { id } = useParams();
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, [id]);

  // Fetch todos for the specific id
  const fetchTodos = async () => {
    try {
      const res = await API.get(`/${id}/todos`);
      setTodos(res.data);
    } catch (error) {
      console.error('Error fetching todos', error);
    }
  };

  // Add a new todo
  const addTodo = async () => {
    if (!newTodo.trim()) return;
    try {
      await API.post(`/${id}/todos`, { text: newTodo });
      setNewTodo('');
      fetchTodos();
    } catch (error) {
      console.error('Error adding todo', error);
    }
  };

  // Delete a specific todo
  const deleteTodo = async (todoId) => {
    try {
      await API.delete(`/todos/${todoId}`);
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo', error);
    }
  };

  // Update a specific todo
  const updateTodo = async (todoId, currentText) => {
    const updated = prompt('Update todo text:', currentText);
    if (!updated || updated === currentText) return;
    try {
      await API.put(`/todos/${todoId}`, { text: updated });
      fetchTodos();
    } catch (error) {
      console.error('Error updating todo', error);
    }
  };

  return (
    <div>
      <h2>Improvement Items</h2>
      <input
        type="text"
        placeholder="New todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onDelete={deleteTodo}
            onEdit={updateTodo}
          />
        ))
      ) : (
        <p>No todos available.</p>
      )}
    </div>
  );
};

export default BehaviorDetails;
