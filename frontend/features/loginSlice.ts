import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {Dispatch} from 'redux'

interface LoginFormState {
    username: string | null;
    password: string | null;
    error: string | null;
}

const initialState: LoginFormState = {
    username: '',
    password: '',
    error: null,
}
   

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.username = ''
            state.password = ''
            state.error = null
        },
    
    }
})

// Async action creator for login
export const login = (username: string, password: string) => {
    return (dispatch: Dispatch) => {
  
      // Simulate an API call to validate the credentials
      setTimeout(() => {
        if (username === 'admin' && password === 'admin') {
         // dispatch(loginSuccess());
        } else {
         // dispatch(loginFailure('Invalid username or password.'));
        }
      }, 2000);
    };
  };


//export const { updateLoginForm } = loginSlice.actions
export default loginSlice.reducer