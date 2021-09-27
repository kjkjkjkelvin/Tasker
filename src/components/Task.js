import { FaTimes } from 'react-icons/fa'

const Task = ({key, task, onDelete, onToggle}) => {
    return (
        <div className='col-sm-12 col-md-4 task-container' onDoubleClick={() => onToggle(task.id)} key={key}>
            <div className={`task ${task.reminder ? 'reminder' : ''}`} >
                <h3>
                    {task.text}
                    <FaTimes style={{color:'rgba(255,0,0,0.7)', cursor:'pointer', float:'right', height:'20px', width:'20px'}} onClick={() => onDelete(task.id)} />
                </h3>
                <p>{task.day}</p>
            </div>
        </div>
    )
}

export default Task
