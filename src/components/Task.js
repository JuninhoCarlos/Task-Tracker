import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    const reminderStyle = task.reminder ? {border: '1px solid red'} : ''
    console.log(task.id,reminderStyle)
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}
                <FaTimes style={{color:'red',cursor: 'pointer'}} onClick={(e) => onDelete(e,task.id)} />
            </h3> 
            <p>{task.day}</p>

        </div>
    )
}

export default Task
