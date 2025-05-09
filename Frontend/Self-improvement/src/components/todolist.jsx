import React from 'react';

const TodoItem = ({ todo, onDelete, onEdit }) => {
  return (
    <div style={styles.item}>
      <span>{todo.text}</span>
      <div>
        <button onClick={() => onEdit(todo._id, todo.text)} style={styles.edit}>
          Edit
        </button>
        <button onClick={() => onDelete(todo._id)} style={styles.delete}>
          Delete
        </button>
      </div>
    </div>
  );
};

const styles = {
  item: {
    padding: '10px',
    margin: '8px 0',
    border: '1px solid #ccc',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  edit: {
    marginRight: '8px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  delete: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default TodoItem;
