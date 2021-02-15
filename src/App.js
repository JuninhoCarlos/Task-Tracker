import Header from './components/Header.js'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useState } from 'react'

const App = () => {  
  
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'food shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },

    {
      id:2,
      text: 'Doctors Appointment',
      day: 'Feb 5 at 3:30pm',
      reminder: true,
    },
    
    {
      id:3,
      text: 'Meeting at School',
      day: 'Feb 10 at 3:30pm',
      reminder: false,
    }])

  
  //Delete Task
  const deleteTask = (e,id) => {
    e.stopPropagation()
    setTasks(tasks.filter((task) => task.id !== id))
  }  

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => {
       if (task.id === id){
          return {
            id: task.id,
            text: task.text,
            day: task.day,
            reminder: !task.reminder
          }
       }
       return task
    }))
    
  }

  //Add Task
  const addTask = (task) => {
    console.log(task)
  }

  return (
    <div className="container">
      <Header title="Task Tracker"/>
      <AddTask onAdd={addTask}/>
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No tasks to show"
      }
    </div>
  );
}

export default App;
