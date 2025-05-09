import React from 'react';
import { Link } from 'react-router-dom';

const BehaviorCard = ({ behavior, onDelete }) => {
  return (
    <div style={styles.card}>
      <Link to={`/behavior/${behavior._id}`} style={styles.title}>
        {behavior.name}
      </Link>
      <button onClick={() => onDelete(behavior._id)} style={styles.delete}>
        Delete
      </button>
    </div>
  );
};

const styles = {
  card: {
    padding: '10px',
    margin: '8px 0',
    border: '1px solid #ccc',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#333'
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

export default BehaviorCard;
