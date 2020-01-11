import React, {Component} from 'react';
import AccountBalance from './accountBalance';
import {Link, Route} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
     
        <div>
          { <img src="http://images.clipartpanda.com/money-clip-art-money-clipart71.jpg" alt="bank"/>}
          <h1>Bank of React</h1>

          <Link to="/login">Log in</Link>
          <br/>
          <Link to="/userProfile">User Profile</Link>
          <br/>
          <Link to="/debits">Debits</Link>
          <br/>
          <Link to="/credits">Credits</Link>

          
        </div>
   
    );
  }
}

export default Home;