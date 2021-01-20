import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios'
import Order from "./pages/Order";
import Manage from "./pages/Manage";
import Stripe from "./pages/StripeContainer"
import NavTabs from "./components/NavTabs";
import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


class App extends Component {
    constructor() {
      super()
      this.state = {
        loggedIn: false,
        username: null
      }
    }
  
    componentDidMount() {
      this.getUser()
      console.log(this)
    }
  
    updateUser = (userObject) => {
      this.setState(userObject)
    }

    getUser=() => {
      axios.get('/user/').then(response => {
        console.log('Get user response: ')
        console.log(response.data)
        if (response.data.user) {
          console.log('Get User: There is a user saved in the server session: ')
  
          this.setState({
            loggedIn: true,
            username: response.data.user.username
          })
        } else {
          console.log('Get user: no user');
          this.setState({
            loggedIn: false,
            username: null
          })
        }
      })
    }
  
    render() {
      return (
        <Router>
            <div>
                <Header />
                <NavTabs />
                <Route exact path="/" component={Order} />
                {this.state.loggedIn && <Route exact path="/manage"  component={Manage} />}
                <Route exact path="/stripeContainer" component={Stripe} />
                <Route exact path="/login" render={(props)=> <Login {...props} updateUser={this.updateUser} />} />
                <Route exact path="/sign-up" component={Signup} />
            </div>
        </Router>
      );
    }
  }
  
export default App;
