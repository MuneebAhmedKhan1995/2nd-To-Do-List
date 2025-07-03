export const addTask = (tasks, text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    return [...tasks, newTask];
  };
  
  export const deleteTask = (tasks, id) => {
    return tasks.filter(task => task.id !== id);
  };
  
  export const toggleComplete = (tasks, id) => {
    return tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  };

export default addTask;