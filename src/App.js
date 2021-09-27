import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import jsonData from './db-array.json';
import "./App.css";

function App() {
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState(jsonData);


  
  const addTask = async (task) => {
    const id = tasks[tasks.length-1].id + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask]);
 
  }

  const deleteTask = async (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const reminderToggle = async (id) => {
    setTasks(tasks.map((task) => (task.id === id) ? {...task,reminder: !task.reminder } : task))   
  }

  return (
    <div className="container my-5">
      <div className='tracker-container'>
        <Header title={'Task Tracker'} onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask} hideAdd={() => setShowAddTask (false)}/>}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminderToggle}/> :
        <div className='container tasks-container'>
            <div className='row'>
              <div className='col-sm-12 col-md-4 offset-md-4 task-container'>
                <div className='task text-center'>
                    <h3>No Tasks To Show</h3>
                </div>
              </div>
            </div>
        </div>
        }
      </div>
      <p className="text-white my-0 fs-5">This is to practice using useState and useEffect.</p>
      <p className="text-white my-0 fs-5">I used a defined json file as my temporary storage for the tasks data.</p>
      <p className="text-white my-0 fs-5">All the changes are happening using state and won't affect the json file.</p>
    </div>
  )
}

export default App
