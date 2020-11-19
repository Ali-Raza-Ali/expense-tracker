import React, { createContext, useReducer } from 'react';

import AppReducer from '../Hooks/AppReducer';


const state_initial = {
    transactions: []
}

export const Context = createContext(state_initial);

export const Provider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,state_initial);

    //Transactions Action
    
    // Function to Delete The Selected Transactions

    function DelTrans(id)
    {
        dispatch(
            {
                type: 'DeleteTransaction',
                payload: id
            }
        );
    }
    // Function to Add Transaction
    function AddTrans(transaction)
    {
        dispatch(
            {
                type: 'AddTransaction',
                payload: transaction
            }
        );
    }
    return(
        <Context.Provider value={
            {
                transactions: state.transactions,
                DelTrans,
                AddTrans
            }
        }>
            {children}
        </Context.Provider>
    );
}