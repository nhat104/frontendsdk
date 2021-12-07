import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loadingLogin: false,
  userData: [],
  errorLogin: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loadingLogin = true;
      state.errorLogin = false;
    },
    loginSuccess: (state, action) => {
      state.loadingLogin = false;
      state.userData = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    loginError: (state) => {
      state.loadingLogin = false;
      state.errorLogin = true;
    },

    logout: (state) => {
      state.errorLogin = true;
      state.userData = undefined;
    },
  },
});

export const { loginRequest, loginSuccess, loginError, logout } =
  loginSlice.actions;

export default loginSlice.reducer;
