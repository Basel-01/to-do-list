import {useState, useEffect} from 'react'
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import './App.css';

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const tasksFromLocalStorge = JSON.parse(window.localStorage.getItem("tasks") || "[]")
  const [tasks, setTasks] = useState(tasksFromLocalStorge)

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  function addTask(newTask) {
    setTasks([...tasks, newTask])
  }

  function deleteTask(deletedTaskId) {
    setTasks(tasks.filter(task => task.id !== deletedTaskId))
  }

  function toggleReminder(toggleReminderId) {
    setTasks(tasks.map(task => task.id === toggleReminderId ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header showAdd={showAddTask} onShowAdd={() => setShowAddTask(!showAddTask)}  />
      {showAddTask && <AddTask onAddTask={addTask} />}
      {tasks.length ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No Tasks To Show"}
      
    </div>
  );
}

export default App;
