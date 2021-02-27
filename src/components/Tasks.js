import Task from './Task'

import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {selectAllTasks} from '../redux/task/taskSlice'
import {fetchTasks} from '../redux/task/taskSlice'

const Tasks = () => {    
    const tasks = useSelector(selectAllTasks)   
    const tasksStatus = useSelector(state => state.tasks.status)
    const dispatch = useDispatch()


    useEffect(() => {
        if (tasksStatus === 'idle'){
            dispatch(fetchTasks())
        }
    }, [tasksStatus,dispatch])

    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}  
        </>
    )
}

export default Tasks
