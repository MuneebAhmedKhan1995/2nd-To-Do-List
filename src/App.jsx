import React, { useState } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { addTask, deleteTask, toggleComplete } from './Logic/taskManager';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (text) => setTasks(addTask(tasks, text));
  const handleDeleteTask = (id) => setTasks(deleteTask(tasks, id));
  const handleToggleComplete = (id) => setTasks(toggleComplete(tasks, id));

  return (
    <div className="app">
      <Header />
      <TaskInput addTask={handleAddTask} />
      <TaskList tasks={tasks} deleteTask={handleDeleteTask} toggleComplete={handleToggleComplete} />
    </div>
  );
}

export default App;