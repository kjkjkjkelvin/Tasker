import {useState} from 'react'

const AddTask = ({onAdd, hideAdd}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please Add Text!')
            return
        }
        if(!day){
            alert('Please Add Day!')
            return
        }

        onAdd({text,day,reminder})
        hideAdd(false)
        setText('')
        setDay('')
        setReminder(false)
        alert('Task Successfully Added!')
    }

    return (
        <div className='container' onSubmit={onSubmit}>
            <div className='row'>
                <form className='add-form col-sm-8 col-md-5 col-lg-4 add-form-container'>
                    <div className='form-control'>
                        <label>Task</label>
                        <input type='text' className='form-control' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
                    </div>
                    <div className='form-control'>
                        <label>Day & Time</label>
                        <input type='text' className='form-control' placeholder='Add Day & Time'  value={day} onChange={(e) => setDay(e.target.value)}/>
                    </div>
                    <div className='form-control'>
                        <input type='checkbox' className='form-control-checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
                        <label>Set Reminder</label>
                    </div>

                    <input type='submit' className='form-control btn btn-primary btn-save' value='Save Task'/>
                </form>
            </div>
        </div>
    )
}

export default AddTask
