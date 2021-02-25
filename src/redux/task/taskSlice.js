import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id : 1,
        text: 'Go shopping',
        day: 'isTurdia',
        reminder: true
    },
    {
        id : 2,
        text: 'Fix the house',
        day: 'isTurdiinha',
        reminder: false
    },
    {
        id : 3,
        text: 'Something else',
        day: 'antionti',
        reminder: true
    }      
]        


export const slice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
        addTask: (state, action) => {
            //Handle adding multiple task in a single action
            //(fetching from API)            
            if (Array.isArray(action.payload)){
                action.payload.map((data) => 
                    state.push(data)
                )
            }else{
                state.push(action.payload)
            }            
        },

        //We just toggle the reminder
        updateTask: (state, action) => {
            const {id,reminder} = action.payload             
            
            const existingTask = state.find( (task) => task.id === id)
            if (existingTask ){
                existingTask.reminder = !reminder
            }            
        },

        deleteTask: (state, action) => {            
            const id = action.payload   
            let index
            for(var i = 0; i < state.length; i++){
                if (state[i].id === id){
                    index = i
                    break
                }
            }            
            state.splice(index,1)
        }
    }
})

//Actions
export const { addTask, updateTask, deleteTask } = slice.actions

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