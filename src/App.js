import { useState, useEffect } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { useSelector } from 'react-redux';

import Header from "./components/Header.js";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import {selectAllTasks} from './redux/task/taskSlice'

const App = () => {
    
    const [showAddForm, setShowAddForm] = useState(false);

    const tasks = useSelector(selectAllTasks)

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
                                    <Tasks />
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
