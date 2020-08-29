import React, { createContext, useReducer, useContext } from 'react'

export const StateProviderContext = createContext()

export const StateProvider = ({initialState, reducer, children}) => (
    <StateProviderContext.Provider
        value={useReducer(reducer, initialState)}
    >
        {children}
    </StateProviderContext.Provider>
)


export const useStateProviderValue = () => useContext(StateProviderContext)