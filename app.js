import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]); // Holds the list of tasks
  const [input, setInput] = useState(""); // Holds the current input value

  // Add task to the list
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput(""); // Clear input field after adding task
    }
  };

  // Toggle task completion status
  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Remove a task
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task"
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? 'completed' : ''}>
              <span onClick={() => toggleComplete(index)}>{task.text}</span>
              <button className="remove-btn" onClick={() => removeTask(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
