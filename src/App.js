import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Debits from './components/Debits';
import AccountBalance from "./components/AccountBalance"
import Credits from "./components/Credits"
import axios from "axios"

class App extends Component {

  constructor() {
    super();
    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      },
      debits: [],
      credits: []
    }
    this.addDebit = this.addDebit.bind(this)
    this.addCredit = this.addCredit.bind(this)
  }

  async componentDidMount() {
    let debits = await axios.get("https://moj-api.herokuapp.com/debits")
    let credits = await axios.get("https://moj-api.herokuapp.com/credits")
    debits = debits.data
    credits = credits.data
    let debitSum = 0, creditSum = 0;
    debits.forEach((debit) => {
      debitSum += debit.amount
    })
    credits.forEach((credit) => {
      creditSum += credit.amount
    })
    const accountBalance = creditSum - debitSum
    debugger
    this.setState({debits, credits, accountBalance})
  } 


  addDebit(e) {
    e.preventDefault()
    const {debits, accountBalance } = this.state
    const description  = e.target[0].value
    const amount  = Number(e.target[1].value)
    const newDebit = [{description, amount}]
    this.setState({debits: debits.concat(newDebit), accountBalance: accountBalance - amount})
}

addCredit(e) {
  e.preventDefault()
  const {credits, accountBalance } = this.state
  const description  = e.target[0].value
  const amount  = Number(e.target[1].value)
  const newCredit = [{description, amount}]
  this.setState({credits: credits.concat(newCredit), accountBalance: accountBalance + amount})
}

  render() {
    const { debits, credits } = this.state
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const DebitsComponent = () => (<Debits addDebit={this.addDebit} debits={debits} />)
    const AccountBalanceComponent = () => <AccountBalance accountBalance={this.state.accountBalance}/>
    const CreditsComponent = () => <Credits addCredit={this.addCredit} credits={credits} />
    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/debits" render={DebitsComponent}/>
            <Route exact path="/credits" render={CreditsComponent}/>
            <Route path="/" render={AccountBalanceComponent} />
          </div>
        </Router>
    );
  }

}

export default App;