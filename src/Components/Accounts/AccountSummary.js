import React, {useContext} from 'react'
import './Accounts.css'
import {Context} from '../Hooks/TransactionContext'
function AccountSummary()
{
    const { transactions } = useContext(Context);

    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);

    const income = transactionAmounts
        .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        .toFixed(2);

    const expense = Math.abs(transactionAmounts
        .filter(transaction => transaction < 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        ).toFixed(2);

    return(
        <div className="IncomeExpense-Cont">
            <div className="Income-Cont">
                <h3>Income</h3>
                <p className='MoneyPlus' style={{fontSize:'18px',fontWeight:'bolder'}}>+${income}</p>
            </div>
            <div  className="Expense-Cont">
                <h3>Expense</h3>
                <p className='MoneyMinus' style={{fontSize:'18px',fontWeight:'bolder'}}>-${expense}</p>
            </div>
        </div>
    );
}

export default AccountSummary;