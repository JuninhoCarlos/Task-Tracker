import Task from './Task'
import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {selectAllTasks} from '../redux/task/taskSlice'
import {fetchTasks} from '../redux/task/taskSlice'

const Tasks = ({tasks, onDelete, onToggle}) => {
    const dispatch = useDispatch()
    const test = useSelector(selectAllTasks)
    console.log('test:',test)


    useEffect(() => {        
        dispatch(fetchTasks())
    },[])

    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}  
        </>
    )
}

export default Tasks
