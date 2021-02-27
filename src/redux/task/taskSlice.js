import { createSlice,createAsyncThunk  } from '@reduxjs/toolkit'
import { client } from '../../api/client'


const initialState = {
    tasks: [],
    status: 'idle',
    error: null    
}        

//Thunks (async functions)
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () =>{    
    const data = await client.get("http://localhost:5000/tasks");    
    return data
})

export const addNewTask = createAsyncThunk(
    'tasks/addNewTask', 
    async (task) => {            
        const data = await client.post("http://localhost:5000/tasks",task);    
        return data
    }
)

export const updateTask = createAsyncThunk(
    'tasks/updateTask',
    async (task) => {                
        const data = await client.put(`http://localhost:5000/tasks/${task.id}`,{...task, reminder: !task.reminder})
        return data
    }
)

export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async( id) => {
        const data = await client.delete(`http://localhost:5000/tasks/${id}`)
        return data
    }
)

export const slice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{        
        deleteUITask: (state, action) => {            
            const id = action.payload   
            let index
            for(var i = 0; i < state.tasks.length; i++){
                if (state.tasks[i].id === id){
                    index = i
                    break
                }
            }            
            state.tasks.splice(index,1)
        }
    },
    extraReducers:{
        [fetchTasks.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchTasks.fulfilled]: (state, action) =>{
            state.status = 'succeeded'
            state.tasks = state.tasks.concat(action.payload)
        },
        [fetchTasks.rejected]: (state,action) =>{
            state.status = 'failed'
            state.error = action.error.message
        },
        [addNewTask.fulfilled]: (state, action) => {
            state.tasks.push(action.payload)
        },
        [updateTask.fulfilled]: (state, action) => {
            const {id,reminder} = action.payload             

            const existingTask = state.tasks.find( (task) => task.id === id)
            if (existingTask ){
                existingTask.reminder = reminder
            } 
        }       

    }
})

//Actions
export const { deleteUITask } = slice.actions

//Selectors
export const selectAllTasks = state => state.tasks.tasks


export default slice.reducer