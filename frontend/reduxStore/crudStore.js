import { configureStore } from "@reduxjs/toolkit"
import crudReducer from '../features/crudApiSlice'

export const store = configureStore({
    reducer: {
        crudItemsApi: crudReducer
    }
})
