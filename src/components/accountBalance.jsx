import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
        <div>
          <br/>
          <h3>Account Balance</h3>
          Balance: {this.props.accountBalance}
        </div>
    );
  }
}

export default AccountBalance;