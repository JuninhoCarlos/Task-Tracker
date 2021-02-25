import Task from './Task'

import {useSelector} from 'react-redux'
import {selectAllTasks} from '../redux/task/taskSlice'
import {fetchTasks} from '../redux/task/taskSlice'

const Tasks = () => {    
    const selector = useSelector(selectAllTasks)   

    return (
        <>
            {selector.map((task) => (
                <Task key={task.id} task={task} />
            ))}  
        </>
    )
}

export default Tasks
