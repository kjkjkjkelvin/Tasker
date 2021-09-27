import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <div className='container tasks-container'>
            <div className='row'>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
                ))}
            </div>
        </div>
    )
}

export default Tasks
