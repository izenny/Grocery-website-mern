import {createSlice} from '@reduxjs/toolkit'

const user = createSlice({
    name:'userDetails',
    initialState:{
        userInfo:[],
    },
    reducers:{
        userActive:(state,action)=>{
            state.userInfo.push(action.payload);
        },
        userlogOut:(state)=>{
            state.userInfo = [];
        }
    }
})

export const {userActive,userlogOut} = user.actions
export default user.reducer;