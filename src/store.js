import {configureStore} from '@reduxjs/toolkit'
import taskReducer from './redux/task/taskSlice'

export default configureStore({
    reducer: {
        tasks : taskReducer
    }
})


