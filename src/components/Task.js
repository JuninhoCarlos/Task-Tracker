import {FaTimes} from 'react-icons/fa'
import {updateTask,deleteTask,deleteUITask} from '../redux/task/taskSlice'
import { unwrapResult } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';

const Task = ({task}) => {
    const dispatch = useDispatch()
    
    const onChange = async () => {
        try{
            const res = await dispatch(updateTask({...task}))
            unwrapResult(res)
        }catch(err){
            console.log("error", err)
        }
    }

    const onDelete = async (id) => {
        try{
            const res = await dispatch(deleteTask(id))            
            unwrapResult(res)
            dispatch(deleteUITask(id))
        }catch(err){
            console.log("error", err)
        }
    }

    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onChange()}>
            <h3>
                {task.text}
                <FaTimes style={{color:'red',cursor: 'pointer'}} onClick={(e) =>  onDelete(task.id)} />
            </h3> 
            <p>{task.day}</p>

        </div>
    )
}

export default Task
