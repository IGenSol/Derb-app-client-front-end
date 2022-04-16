import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
   userId : sessionStorage.getItem("userId")
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState);

   // Actions for changing state

   function signIn(item) {
       dispatch({
           type: 'ADD_ITEM',
           payload: item
       });
   }
   function logout(item) {
       dispatch({
           type: 'REMOVE_ITEM',
           payload: item
       });
   }

   return(
      <GlobalContext.Provider value = {{userId : state.userId, signIn, logout}}> 
        {children} 
   </GlobalContext.Provider>
   )
}