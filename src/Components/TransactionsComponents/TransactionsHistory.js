import React, { useContext } from 'react';
import { Context } from '../Hooks/TransactionContext';
import {Transaction} from './Transactions'
import '../TransactionsComponents/Transactions.css'

export const Transactions= () =>{


    const {transactions} = useContext(Context);
    return(
        <div className='TransHistDiv'>
        <h2>
            Transactions History
            <hr/>
           <button className='scroll-btn' style={{overflow:'scroll'}}>Scroll</button>
        </h2>
        <div className="listCont">
        
        <ul className="list">
        
                {transactions.map(transaction => 
                    (
                    <Transaction key={transaction.id} transaction={transaction} />
                    )
                )}
                
        </ul>
        </div>
        </div>

    );
} 
