import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import Button from '@material-ui/core/Button';

class Login extends Component {
  constructor() {
    super()
    this.state = {
        username: '',
        password: '',
        redirectTo: null
    }

}

handleChange=(event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

  handleSubmit=(event) => {
    event.preventDefault()
    console.log('handleSubmit')

    axios
        .post('/user/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log('login response: ')
            console.log(response)
            if (response.status === 200) {
                // update App.js state
                this.props.updateUser({
                    loggedIn: true,
                    username: response.data.username
                })
                this.props.history.push("/")
                console.log(this.props)
                // update the state to redirect to home
                this.setState({
                    redirectTo: '/'
                })
            }
        }).catch(error => {
            console.log('login error: ')
            console.log(error);
            alert("Your login failed, please check credentials or create an account")
            
        })
}

  render(){
    if (this.state.redirectTo) {
    return <Redirect to={{ pathname: this.state.redirectTo }} />
} else {
    return (
        <div>
            <h4>Login</h4>
            <form className="form-horizontal">
                <div className="form-group">
                    <div className="col-1 col-ml-auto">
                        <label className="form-label" htmlFor="username">Username</label>
                    </div>
                    <div className="col-3 col-mr-auto">
                        <input className="form-input"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-1 col-ml-auto">
                        <label className="form-label" htmlFor="password">Password: </label>
                    </div>
                    <div className="col-3 col-mr-auto">
                        <input className="form-input"
                            placeholder="password"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="form-group ">
                    <div className="col-7"></div>
                    <Button
                        className="btn btn-primary col-1 col-mr-auto"                       
                        onClick={this.handleSubmit}
                        color="secondary"
                        variant="contained"
                        type="submit">
                        Login
                    </Button>
                    <br />
                    <Button>
                    <Link to="/Sign-Up">
                    Sign Up
                    </Link></Button>
                </div>
            </form>
        </div>
    )
}
  }
}

export default Login;