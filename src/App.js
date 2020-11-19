import './App.css';
import Header from './Components/Header/Header';
import {Balance} from './Components/Balance/Balance';
import AccountSummary from './Components/Accounts/AccountSummary';
import { Transactions } from './Components/TransactionsComponents/TransactionsHistory';
import {AddTransactions} from './Components/TransactionsComponents/AddTransactions';
import {Provider} from './Components/Hooks/TransactionContext'
function App() {
  return (
    <div className="Main-app">
      <Header/>
      <Provider>
        <Balance/>
        <AccountSummary/>
        <Transactions/>
      <AddTransactions/>
      </Provider>
    </div>
  );
}

export default App;