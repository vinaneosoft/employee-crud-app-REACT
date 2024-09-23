import { createSlice } from "@reduxjs/toolkit";


export const userSlice=createSlice({
    name:'userslice',
    initialState:{
        value:""
    },
    reducers:{
       setUser:(state, action)=>{
        state.value=action.payload // username who is logged in
       } ,
       resetUser:(state)=>{
        state.value="";
       },
    }
});

export const {setUser,resetUser}=userSlice.actions;
const userReducer=userSlice.reducer;
export default userReducer;
