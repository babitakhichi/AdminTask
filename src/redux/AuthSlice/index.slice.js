import { createSlice } from "@reduxjs/toolkit";




export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: {},
  
  },
  reducers: {
    loginAction: (state, action) => {
      return (state = {
        ...state,
        userData: { ...action.payload },
       
      });
    },
  
    logoutAction: (state) => {
      return (state = {
        ...state,
        userData: null,
       
      });
    },
    
  },
});

export const {
  loginAction,
 
  logoutAction,
  
} = authSlice.actions;

export const login = (data) => async (dispatch) => {
  try {
    dispatch(loginAction(data));
  } catch (error) {
    console.log(error);
  }
};


export const logout = (navigate, userRole) => async (dispatch) => {
  try {
   
   
    localStorage.clear();
    dispatch(logoutAction());
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};




export const selectUserData = (state) => state?.auth?.userData;


export default authSlice.reducer;
