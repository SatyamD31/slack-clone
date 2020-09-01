import React, { createContext, useContext, useReducer } from "react";

// Data layer
export const StateContext = createContext();

// build and wrap the whole app within a provider so the app can access the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// this is how it is used inside a component
export const useStateValue = () => useContext(StateContext);