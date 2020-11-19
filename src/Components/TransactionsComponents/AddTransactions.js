import React, { useContext, useState } from 'react';
import '../TransactionsComponents/Transactions.css'

import {Context} from '../Hooks/TransactionContext';

export const  AddTransactions = () => {

    const [description,setDescription] = useState('');
    const [transactionAmount,setTransactionAmount] = useState('');
    const {AddTrans} = useContext(Context);

    const whenSubmit = (e) =>{
        e.preventDefault();
        
        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }
        AddTrans(newTransaction);
    }
    return(
        <div className='AddTransactions'>
            <form onSubmit={whenSubmit}>
                <h2>Add New Transactions</h2>
                <hr/>
                {/* Description Input */}
                <div className='form-control'>
                    <label htmlFor='description'> <h2 style={{float:'left'}}>Description</h2></label>
                    <br/>
                    <input 
                    type='text' 
                    id='description' 
                    value={description} 
                    placeholder='Add Transaction Detail' 
                    onChange={ (e) => setDescription(e.target.value)} 
                    required='required'/>
                </div>
                
                {/* Dollar Input */}
                <div className='form-control'>
                    <label htmlFor='transactionAmount'> <h2 style={{float:'left'}}>Transaction Amount</h2></label>
                    <br/>
                    <input 
                    type='number' 
                    id='Amount' 
                    value={transactionAmount} 
                    placeholder='Enter Amount (Dollars)' 
                    onChange={ (e) => setTransactionAmount(e.target.value)} 
                    required='required'/>
                </div>
                
                <br/>
                <button className="buttonSubmit">Submit Transaction</button>
            </form>
        </div>
    );
}