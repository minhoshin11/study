import { createSlice } from '@reduxjs/toolkit';

let user = createSlice({
    name: 'user',
    initialState: {name : 'kim', age : 20 } , // 객체로 변경
    reducers : {
        plusAge(state){
          state.age += 1
        } 
    }
  })

export let  {plusAge } = user.actions

export default user;