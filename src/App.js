import { useState, useEffect } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { useSelector } from 'react-redux';

import Header from "./components/Header.js";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
    
    const [showAddForm, setShowAddForm] = useState(false);

    const tasks = useSelector(state => state.tasks)
    console.log(tasks)
        
    /*
    useEffect(() => {                
        dispatch(fetchTasks())
    },[]) */

    //Fetch Tasks from API
    const fetchTasks = async () => {
        const res = await fetch("http://localhost:5000/tasks");
        const data = await res.json();
        return data;
    };

    //Delete Task
    const deleteTask = async (e, id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "DELETE",
        });

        e.stopPropagation();
        //setTasks(tasks.filter((task) => task.id !== id));
    };

    // Toggle Reminder
    const toggleReminder = async (id) => {
        const taskUpdated = tasks.filter((task) => id === task.id);
        const json = { ...taskUpdated[0], reminder: !taskUpdated[0].reminder };
        //console.log(json)

        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "PUT",
            body: JSON.stringify({ ...json }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        /*
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    return {
                        id: task.id,
                        text: task.text,
                        day: task.day,
                        reminder: !task.reminder,
                    };
                }
                return task;
            })*/
        //);
    };

    //Add Task
    const addTask = async (task) => {
        //const newTask = {id, ...task}

        const res = await fetch("http://localhost:5000/tasks", {
            method: "POST",
            body: JSON.stringify({ ...task }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });

        const data = await res.json();
        //console.log(data)

        //setTasks([...tasks, data]);
        //console.log(task)
    };

    const showForm = () => {
        setShowAddForm(!showAddForm);
    };

    return (
        
            <Router>
                <div className="container">
                    <Header
                        title="Task Tracker"
                        onAdd={showForm}
                        showAdd={showAddForm}
                    />
                    <Route
                        path="/"
                        exact
                        render={(props) => (
                            <>
                                {showAddForm && <AddTask />}
                                {tasks.length > 0 ? (
                                    <Tasks />
                                ) : (
                                    "No tasks to show"
                                )}
                            </>
                        )}
                    />
                    <Route path="/about" component={About} />
                    <Footer />
                </div>
            </Router>
        
    );
};

export default App;
