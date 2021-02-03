import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Notification from './Notification';


function Signup() {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })

	const handleSubmit = (event) => {
		console.log('sign-up handleSubmit, username: ')
		console.log(username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: username,
			password: password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup');
					setNotify({
						isOpen: true,
						message: "Thank you for signing up!",
						type: "success"
					})
				} else {
					console.log('username already taken')
					setNotify({
						isOpen: true,
						message: "Sorry, that username is already taken!",
						type: "warning"
					})
				}
			}).catch(error => {
				console.log('signup error: ')
				setNotify({
					isOpen: true,
					message: "An error occurred, please try again",
					type: "warning"
				})
				console.log(error)

			})
	}

	return (
		<div className="SignupForm">
			<h4>Sign up</h4>
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
						type="submit"
					>Sign Up!</Button>
					<Button
						className="btn btn-primary col-1 col-mr-auto"><Link to="/login">Login</Link></Button>
				</div>
			</form>
			<Notification notify={notify} setNotify={setNotify}></Notification>
		</div>

	)
}


export default Signup