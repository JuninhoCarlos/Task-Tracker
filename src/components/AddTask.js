import { useState } from 'react'
import { addTask } from '../redux/task/taskSlice'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

const AddTask = () => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text){
            alert('Please add a task')
            return
        }

        dispatch(addTask({ id: nanoid(), text , day, reminder  }))
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' 
                value={text} onChange={(e) =>setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add day and time' 
                value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control-check'>
                <label>Set reminder</label>
                <input 
                    type='checkbox' 
                    checked={reminder}
                    value={reminder} 
                    onChange={(e) => setReminder(e.currentTarget.checked)} 
                />                
            </div>

            <input className='btn btn-block' 
                type='submit' 
                value='Save Task'/>
        </form>
    )
}

export default AddTask
