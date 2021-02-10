import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import Notification from '../components/Notification';

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                username: username,
                password: password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    props.history.push("/")
                    console.log(props)
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                setNotify({
                    isOpen: true,
                    message: "Something went wrong, try again",
                    type: "warning"
                })
                
            })
    }

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
                            value={username}
                            onChange={e => setUsername(e.target.value)}
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
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group ">
                    <div className="col-7"></div>
                    <Button
                        className="btn btn-primary col-1 col-mr-auto"                       
                        onClick={handleSubmit}
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
                <Notification notify={notify} setNotify={setNotify}></Notification>
            </form>
        </div>
    )
}

export default Login;