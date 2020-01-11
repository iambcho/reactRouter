
import React, {Component} from 'react';
import { Link } from "react-router-dom"

class UserProfile extends Component {
  render() {
    return (
        <div>
          <h1>User Profile</h1>
          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
          

                <br/>
                <br/>
                <Link to="/">Return to Home</Link>
                <br/>
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

export default UserProfile;