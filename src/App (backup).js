import { useState, useEffect} from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data;
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data;
  }

  const addTask = async (task) => {
    // const id = Math.floor(Math.random() * 10000 +1)

    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask]);
    
    const res = await fetch(`http://localhost:5000/tasks/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data]);

  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const reminderToggle = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder
    }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => (task.id === id) ? {...task,reminder: data.reminder } : task))    
  }


  return (
    <div className="container">
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
    </div>
  )
}

export default App
