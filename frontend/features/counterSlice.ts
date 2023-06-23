import { createSlice } from '@reduxjs/toolkit'

interface countsate {
    count: number | 0
}

const initialState: countsate = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        reset: (state) => {
            state.count = 0
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        }
    }
})

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions
//export const selectCount=(state:RootState)=>state.counter.count
export default counterSlice.reducer
