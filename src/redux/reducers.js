import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'todos',
    initialState: { copmleted :false},
    reducers: {
        pushNotification(state, action) {
            state.copmleted=true
        },
        popNotification(state, action) {
            state.copmleted = false
        },
       
    },
})

export const { pushNotification, popNotification } = todosSlice.actions
export default todosSlice.reducer