// Login.js
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom"

class LogIn extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/userProfile"/>)
    }

    return (
      <div>
          <h1>Log In </h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">User Name: </label>
            <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" />
          </div>
          <button>Log In</button>
        </form>
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
    )
  }
}

export default LogIn