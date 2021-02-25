import {FaTimes} from 'react-icons/fa'

const Task = ({task}) => {
        
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => console.log("onToggle")}>
            <h3>
                {task.text}
                <FaTimes style={{color:'red',cursor: 'pointer'}} onClick={(e) => console.log("onDelete")} />
            </h3> 
            <p>{task.day}</p>

        </div>
    )
}

export default Task
