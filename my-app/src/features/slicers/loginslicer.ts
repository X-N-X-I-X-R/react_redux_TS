// create login slicer 

import { createSlice } from '@reduxjs/toolkit';


// Define a type for the slice state
interface LoginState {
  value: string;
  
}

// Define the initial state using that type
const initialState: LoginState = {
  value: '',
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      login: (state, action) => { state.value = action.payload; },
      logout: (state) => { state.value = ''; },
    },
});
  
  export const { login, logout } = loginSlice.actions;
  export default loginSlice.reducer;