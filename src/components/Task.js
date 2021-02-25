import {FaTimes} from 'react-icons/fa'
import {updateTask,deleteTask} from '../redux/task/taskSlice'
import { useDispatch } from 'react-redux';

const Task = ({task}) => {
    const dispatch = useDispatch()

    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => dispatch(updateTask(task))}>
            <h3>
                {task.text}
                <FaTimes style={{color:'red',cursor: 'pointer'}} onClick={(e) =>  dispatch(deleteTask(task.id))} />
            </h3> 
            <p>{task.day}</p>

        </div>
    )
}

export default Task
