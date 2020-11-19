import React from 'react';
import {Context} from '../Hooks/TransactionContext'

import './Balance.css'
export const Balance = () =>   {
    const { transactions } = React.useContext(Context);

    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);
    const balance = transactionAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    
    return(
        <div className='Bal-Cont'>
            <h2>Current Balance</h2>
            <h1 id ='bal'>${balance}</h1>
        </div>
    );
}