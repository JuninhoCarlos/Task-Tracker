import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'tasks',
    initialState : {
        tasks: []
    },
    reducers:{
        addTask : (state, action) =>{
            //Handle adding multiple task in a single action
            //(fetching from API)
            if (Array.isArray(action.payload)){
                action.payload.map((data) => 
                    state.tasks = [...state.tasks, data]
                )
            }else{
                state.tasks = [...state.tasks, action.payload]
            }            
        }
    }
})

//Actions
export const { addTask } = slice.actions

//Selectors
export const selectAllTasks = state => state.tasks

//Thunks (async functions)
export const fetchTasks = () => {
    return async (dispatch, getState) =>{
        try{
            const res = await fetch("http://localhost:5000/tasks");
            const data = await res.json();
            const formated = data.map((task) => {
                return task;
            })            
            dispatch(addTask(data))
        } catch (err){
            console.log(err)
        }
    }

}

export default slice.reducer