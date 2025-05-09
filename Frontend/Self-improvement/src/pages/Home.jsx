import React, { useEffect, useState } from 'react';
import API from '../service/api';
import BehaviorCard from '../components/behavecard'; // fixed import name

const Home = () => {
  const [behaviors, setBehaviors] = useState([]);
  const [newBehavior, setNewBehavior] = useState("");

  useEffect(() => {
    console.log("Home component mounted, fetching top behaviors");
    fetchTopBehaviors();
  }, []);

  const fetchTopBehaviors = async () => {
    console.log("Fetching top behaviors from API");
    try {
      const res = await API.get("/behaviors/top");
      console.log("Received behaviors:", res.data);
      setBehaviors(res.data);
    } catch (err) {
      console.error("Error fetching behaviors:", err);
    }
  };

  const createBehavior = async () => {
    if (!newBehavior.trim()) return;
    try {
      await API.post("/behaviors", { name: newBehavior }); // changed title to name
      setNewBehavior("");
      fetchTopBehaviors();
    } catch (err) {
      console.error("Error creating behavior:", err);
    }
  };

  const deleteBehavior = async (id) => {
    try {
      await API.delete(`/behaviors/${id}`);
      fetchTopBehaviors();
    } catch (err) {
      console.error("Error deleting behavior:", err);
    }
  };

  return (
    <div>
      <h2>Top 5 Behaviors</h2>
      <input
        type="text"
        value={newBehavior}
        onChange={(e) => setNewBehavior(e.target.value)}
        placeholder="Enter new behavior"
      />
      <button onClick={createBehavior}>Add</button>

      {behaviors.map((behavior) => (
        <BehaviorCard
          key={behavior._id}
          behavior={behavior}
          onDelete={deleteBehavior}
        />
      ))}
    </div>
  );
};

export default Home;
