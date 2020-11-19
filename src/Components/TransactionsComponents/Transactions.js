import React, { useContext } from 'react'

// Import the Global State
import { Context } from '../Hooks/TransactionContext';

export const Transaction = ({ transaction }) => {

    const { DelTrans } = useContext(Context);

    const sign = transaction.transactionAmount > 0 ? '+' : '-';
    const transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus';

    return (
        <li className={transactionType}>
            {transaction.description}
            <span>{sign}${Math.abs(transaction.transactionAmount)}</span>
            <button className="delete-btn"
                    onClick={() => DelTrans(transaction.id)}>
                X
            </button>
        </li>
    )
}